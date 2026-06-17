"""
Indian indie fashion research script.
Connects to existing Chrome via CDP, navigates to each site,
captures screenshots, and extracts design metadata.
"""
import json
import base64
import asyncio
import os
import re
import time
import websockets

CDP_HTTP = "http://localhost:9222"
SCREENSHOTS_DIR = "/Volumes/Vedant/vedantsecondary/Projects/Calicos/research/screenshots/sites"
os.makedirs(SCREENSHOTS_DIR, exist_ok=True)

# (label, homepage_url, [inner_page_urls])
SITES = [
    ("01-mati",   "https://mati.in/",                  ["https://mati.in/collections/all", "https://mati.in/products/"] if False else ["https://mati.in/collections/all"]),
    ("02-pero",   "https://www.perostudio.com/",       ["https://www.perostudio.com/collections", "https://www.perostudio.com/journal"]),
    ("03-eka",    "https://ekastudio.in/",             ["https://ekastudio.in/collections/all", "https://ekastudio.in/pages/about"]),
    ("04-inkori", "https://www.inkori.in/",            ["https://www.inkori.in/collections/all", "https://www.inkori.in/pages/about-us"]),
]


def get_ws_url():
    import urllib.request
    with urllib.request.urlopen(f"{CDP_HTTP}/json/version") as f:
        return json.loads(f.read().decode())["webSocketDebuggerUrl"]


def get_targets():
    import urllib.request
    with urllib.request.urlopen(f"{CDP_HTTP}/json") as f:
        return json.loads(f.read().decode())


class Tab:
    def __init__(self, ws, target_id):
        self.ws = ws
        self.target_id = target_id
        self._id = 0

    async def send(self, method, params=None, timeout=60):
        self._id += 1
        msg_id = self._id
        payload = {"id": msg_id, "method": method, "params": params or {}}
        await self.ws.send(json.dumps(payload))
        # Collect responses
        deadline = time.time() + timeout
        while time.time() < deadline:
            try:
                raw = await asyncio.wait_for(self.ws.recv(), timeout=deadline - time.time())
            except asyncio.TimeoutError:
                break
            resp = json.loads(raw)
            if resp.get("id") == msg_id:
                return resp
        return {"error": "timeout"}

    async def navigate(self, url, wait=3.0):
        await self.send("Page.navigate", {"url": url})
        await asyncio.sleep(wait)
        # wait for load event
        try:
            # poll readyState
            for _ in range(30):
                r = await self.send("Runtime.evaluate", {"expression": "document.readyState"})
                state = r.get("result", {}).get("result", {}).get("value")
                if state in ("complete", "interactive"):
                    break
                await asyncio.sleep(0.5)
        except Exception:
            pass

    async def screenshot(self, full_page=False):
        params = {"format": "png"}
        if full_page:
            params["captureBeyondViewport"] = True
        r = await self.send("Page.captureScreenshot", params)
        if "result" in r and "data" in r["result"]:
            return base64.b64decode(r["result"]["data"])
        return None

    async def evaluate(self, expression):
        r = await self.send("Runtime.evaluate", {"expression": expression, "returnByValue": True})
        return r.get("result", {}).get("result", {}).get("value")

    async def scroll_to(self, y):
        await self.evaluate(f"window.scrollTo(0, {y})")
        await asyncio.sleep(0.6)

    async def get_design_data(self):
        # Comprehensive design data extraction
        js = r"""
        (() => {
            const data = {
                title: document.title,
                url: location.href,
                h1: [...document.querySelectorAll('h1')].map(e => e.innerText.trim()).filter(Boolean).slice(0, 5),
                h2: [...document.querySelectorAll('h2')].map(e => e.innerText.trim()).filter(Boolean).slice(0, 10),
                h3: [...document.querySelectorAll('h3')].map(e => e.innerText.trim()).filter(Boolean).slice(0, 10),
                navLinks: [...document.querySelectorAll('nav a, header a')].map(e => e.innerText.trim()).filter(Boolean).slice(0, 20),
                bodyText: document.body.innerText.slice(0, 2000),
                bodyFont: '',
                headingFonts: new Set(),
                colors: new Set(),
                bgColors: new Set(),
                imageCount: document.images.length,
                videoCount: document.querySelectorAll('video').length,
                hasCanvas: document.querySelectorAll('canvas').length,
                hasSVG: document.querySelectorAll('svg').length,
                fontLinks: [...document.querySelectorAll('link[href*="font"], link[rel="stylesheet"]')].map(e => e.href).slice(0, 15),
                metaDescription: document.querySelector('meta[name="description"]')?.content || '',
                bodyBg: getComputedStyle(document.body).backgroundColor,
                bodyColor: getComputedStyle(document.body).color,
                bodyFontFamily: getComputedStyle(document.body).fontFamily,
                links: [...document.querySelectorAll('a')].map(a => ({text: a.innerText.trim(), href: a.href})).filter(a => a.text).slice(0, 30),
                buttons: [...document.querySelectorAll('button')].map(b => b.innerText.trim()).filter(Boolean).slice(0, 10),
                heroImages: [...document.querySelectorAll('img')].slice(0, 5).map(i => ({src: i.src, alt: i.alt, w: i.naturalWidth, h: i.naturalHeight})),
            };

            // sample headings for fonts
            ['h1', 'h2', 'h3', 'h4'].forEach(sel => {
                document.querySelectorAll(sel).forEach(el => {
                    if (el.innerText.trim()) data.headingFonts.add(getComputedStyle(el).fontFamily);
                });
            });
            data.headingFonts = [...data.headingFonts].slice(0, 5);

            // sample colors from various elements
            const sample = [...document.querySelectorAll('h1, h2, h3, a, button, p, span')].slice(0, 200);
            sample.forEach(el => {
                const s = getComputedStyle(el);
                data.colors.add(s.color);
                data.bgColors.add(s.backgroundColor);
            });
            data.colors = [...data.colors].slice(0, 20);
            data.bgColors = [...data.bgColors].slice(0, 20);

            // detect iframes
            data.iframes = document.querySelectorAll('iframe').length;

            // detect webfont families used
            data.webFonts = [];
            try {
                if (document.fonts) {
                    document.fonts.forEach(f => data.webFonts.push(f.family + ' ' + f.weight + ' ' + f.style));
                }
            } catch (e) {}

            return data;
        })()
        """
        return await self.evaluate(js)


async def attach_to_existing_tab():
    """Find an existing page target and attach to it via a new WebSocket session."""
    import urllib.request
    with urllib.request.urlopen(f"{CDP_HTTP}/json") as f:
        targets = json.loads(f.read().decode())
    page_target = next((t for t in targets if t.get("type") == "page"), None)
    if not page_target:
        return None, None
    return page_target["webSocketDebuggerUrl"], page_target["id"]


async def main():
    ws_url, _ = await attach_to_existing_tab()
    if not ws_url:
        # create new target
        import urllib.request
        with urllib.request.urlopen(f"{CDP_HTTP}/json/new?about:blank") as f:
            new_t = json.loads(f.read().decode())
        ws_url = new_t["webSocketDebuggerUrl"]
        target_id = new_t["id"]
    else:
        target_id = None

    print(f"Using WS: {ws_url}")

    async with websockets.connect(ws_url, max_size=50_000_000) as ws:
        # Enable Page and Runtime
        await ws.send(json.dumps({"id": 1, "method": "Page.enable"}))
        await ws.send(json.dumps({"id": 2, "method": "Runtime.enable"}))
        # consume acks
        for _ in range(2):
            try:
                await asyncio.wait_for(ws.recv(), timeout=2)
            except asyncio.TimeoutError:
                pass

        tab = Tab(ws, target_id or "x")

        results = {}
        for label, home, inners in SITES:
            print(f"\n=== {label}: {home} ===")
            try:
                await tab.navigate(home, wait=5.0)
            except Exception as e:
                print(f"  nav error: {e}")

            # viewport screenshot
            try:
                data = await tab.screenshot(full_page=False)
                if data:
                    with open(f"{SCREENSHOTS_DIR}/{label}-home-viewport.png", "wb") as f:
                        f.write(data)
                    print(f"  saved viewport ({len(data)} bytes)")
            except Exception as e:
                print(f"  screenshot err: {e}")

            # full-page screenshot
            try:
                data = await tab.screenshot(full_page=True)
                if data:
                    with open(f"{SCREENSHOTS_DIR}/{label}-home-full.png", "wb") as f:
                        f.write(data)
                    print(f"  saved full ({len(data)} bytes)")
            except Exception as e:
                print(f"  full err: {e}")

            # extract design data
            try:
                d = await tab.get_design_data()
                results[f"{label}-home"] = d
                print(f"  design data: title={d.get('title','')[:60]}  h1={len(d.get('h1',[]))}  imgs={d.get('imageCount')}")
            except Exception as e:
                print(f"  design err: {e}")

            # inner pages
            for i, inner in enumerate(inners, 1):
                try:
                    print(f"  -> inner {i}: {inner}")
                    await tab.navigate(inner, wait=5.0)
                    data = await tab.screenshot(full_page=False)
                    if data:
                        with open(f"{SCREENSHOTS_DIR}/{label}-inner{i}-viewport.png", "wb") as f:
                            f.write(data)
                    d = await tab.get_design_data()
                    results[f"{label}-inner{i}"] = d
                    print(f"     saved inner{i}")
                except Exception as e:
                    print(f"     inner err: {e}")

        # write results
        with open("/Volumes/Vedant/vedantsecondary/Projects/Calicos/research/sites/_raw-design-data.json", "w") as f:
            json.dump(results, f, indent=2, default=str)
        print("\nWrote raw design data")


if __name__ == "__main__":
    asyncio.run(main())
