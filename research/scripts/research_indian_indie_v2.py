"""
Indian indie fashion research v2.
- MATI: live site at stylemati.in
- Pero: Wayback Machine snapshot (April 2025)
- Eka: Wayback Machine snapshot (June 2024)
- Inkori: not findable as fashion brand; substitute with chidiyaa.com (small Indian indie)
"""
import json
import base64
import asyncio
import os
import websockets

CDP_HTTP = "http://localhost:9222"
SCREENSHOTS_DIR = "/Volumes/Vedant/vedantsecondary/Projects/Calicos/research/screenshots/sites"
os.makedirs(SCREENSHOTS_DIR, exist_ok=True)

# (label, urls, wayback_timestamp or None for live)
SITES = [
    ("01-mati",   [("https://www.stylemati.in/", None),
                   ("https://www.stylemati.in/collections", None),
                   ("https://www.stylemati.in/products", None)], "live"),
    ("02-pero",   [("https://www.perostudio.com/", "20250406113947"),
                   ("https://www.perostudio.com/collections", "20250406113947"),
                   ("https://www.perostudio.com/journal", "20250406113947")], "wayback"),
    ("03-eka",    [("https://ekastudio.in/", "20240619185118"),
                   ("https://ekastudio.in/collections", "20240619185118"),
                   ("https://ekastudio.in/pages/about", "20240619185118")], "wayback"),
    ("04-inkori", [("https://chidiyaa.com/", None),
                   ("https://chidiyaa.com/collections", None),
                   ("https://chidiyaa.com/pages/about", None)], "live"),
]


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
        # wait for load
        for _ in range(40):
            r = await self.send("Runtime.evaluate", {"expression": "document.readyState"})
            state = r.get("result", {}).get("result", {}).get("value")
            if state in ("complete", "interactive"):
                break
            await asyncio.sleep(0.5)

    async def screenshot(self, full_page=False):
        params = {"format": "png"}
        if full_page:
            params["captureBeyondViewport"] = True
        r = await self.send("Page.captureScreenshot", params, timeout=120)
        if "result" in r and "data" in r["result"]:
            return base64.b64decode(r["result"]["data"])
        return None

    async def evaluate(self, expression):
        r = await self.send("Runtime.evaluate", {"expression": expression, "returnByValue": True})
        return r.get("result", {}).get("result", {}).get("value")

    async def get_design_data(self):
        js = r"""
        (() => {
            const data = {
                title: document.title,
                url: location.href,
                h1: [...document.querySelectorAll('h1')].map(e => e.innerText.trim()).filter(Boolean).slice(0, 8),
                h2: [...document.querySelectorAll('h2')].map(e => e.innerText.trim()).filter(Boolean).slice(0, 15),
                h3: [...document.querySelectorAll('h3')].map(e => e.innerText.trim()).filter(Boolean).slice(0, 15),
                navLinks: [...document.querySelectorAll('nav a, header a')].map(e => e.innerText.trim()).filter(Boolean).slice(0, 30),
                footerLinks: [...document.querySelectorAll('footer a')].map(e => e.innerText.trim()).filter(Boolean).slice(0, 30),
                bodyText: document.body.innerText.slice(0, 4000),
                imageCount: document.images.length,
                videoCount: document.querySelectorAll('video').length,
                hasCanvas: document.querySelectorAll('canvas').length,
                hasSVG: document.querySelectorAll('svg').length,
                metaDescription: document.querySelector('meta[name="description"]')?.content || '',
                bodyBg: getComputedStyle(document.body).backgroundColor,
                bodyColor: getComputedStyle(document.body).color,
                bodyFontFamily: getComputedStyle(document.body).fontFamily,
                stylesheetFonts: [],
                headingFonts: new Set(),
                sampleColors: new Set(),
                sampleBgColors: new Set(),
                buttons: [...document.querySelectorAll('button, input[type="submit"]')].map(b => b.innerText.trim() || b.value).filter(Boolean).slice(0, 10),
                heroImages: [...document.querySelectorAll('header img, .hero img, main > section:first-of-type img, body > div:first-child img')].slice(0, 5).map(i => ({src: i.src, alt: i.alt, w: i.naturalWidth, h: i.naturalHeight})),
                allImages: [...document.querySelectorAll('img')].slice(0, 12).map(i => ({src: i.src, alt: i.alt})),
            };

            // sample heading fonts
            ['h1', 'h2', 'h3', 'h4', 'h5'].forEach(sel => {
                document.querySelectorAll(sel).forEach(el => {
                    if (el.innerText.trim()) data.headingFonts.add(getComputedStyle(el).fontFamily);
                });
            });
            data.headingFonts = [...data.headingFonts].slice(0, 6);

            // sample colors
            const sample = [...document.querySelectorAll('h1, h2, h3, a, button, p, span, li, label')].slice(0, 400);
            sample.forEach(el => {
                const s = getComputedStyle(el);
                data.sampleColors.add(s.color);
                data.sampleBgColors.add(s.backgroundColor);
            });
            data.sampleColors = [...data.sampleColors].slice(0, 30);
            data.sampleBgColors = [...data.sampleBgColors].slice(0, 30);

            // font links (Google fonts, Typekit etc)
            data.fontLinks = [...document.querySelectorAll('link[href*="font"], link[rel="stylesheet"]')].map(e => e.href).slice(0, 20);

            // detect iframes
            data.iframes = document.querySelectorAll('iframe').length;

            // detect webfont families
            data.webFonts = [];
            try {
                if (document.fonts) {
                    document.fonts.forEach(f => data.webFonts.push(f.family + ' (' + f.weight + ' ' + f.style + ')'));
                }
            } catch (e) {}

            // detect animations
            data.animations = [];
            const animEls = document.querySelectorAll('*');
            for (let i = 0; i < Math.min(animEls.length, 200); i++) {
                const s = getComputedStyle(animEls[i]);
                if (s.animationName && s.animationName !== 'none') {
                    data.animations.push({el: animEls[i].tagName + '.' + animEls[i].className.split(' ')[0], anim: s.animationName, dur: s.animationDuration});
                    if (data.animations.length > 8) break;
                }
            }

            return data;
        })()
        """
        return await self.evaluate(js)


import time

async def main():
    targets = get_targets()
    page_target = next((t for t in targets if t.get("type") == "page" and t.get("url", "").startswith("http")), None)
    if not page_target:
        page_target = next((t for t in targets if t.get("type") == "page"), None)
    if not page_target:
        import urllib.request
        with urllib.request.urlopen(f"{CDP_HTTP}/json/new?about:blank") as f:
            page_target = json.loads(f.read().decode())

    ws_url = page_target["webSocketDebuggerUrl"]
    print(f"Using WS: {ws_url}")

    async with websockets.connect(ws_url, max_size=50_000_000) as ws:
        await ws.send(json.dumps({"id": 1, "method": "Page.enable"}))
        await ws.send(json.dumps({"id": 2, "method": "Runtime.enable"}))
        for _ in range(2):
            try:
                await asyncio.wait_for(ws.recv(), timeout=2)
            except asyncio.TimeoutError:
                pass

        tab = Tab(ws, page_target["id"])

        results = {}
        for label, urls, mode in SITES:
            print(f"\n=== {label} ({mode}) ===")
            for i, (url, wb_ts) in enumerate(urls):
                # If wayback, wrap the URL
                full_url = url
                if mode == "wayback" and wb_ts:
                    full_url = f"https://web.archive.org/web/{wb_ts}id_/{url}"
                print(f"  -> {i+1}: {full_url}")
                try:
                    await tab.navigate(full_url, wait=8.0)
                except Exception as e:
                    print(f"     nav err: {e}")

                # wait extra for wayback overlays
                if mode == "wayback":
                    await asyncio.sleep(3)
                    # try to dismiss the wayback toolbar by removing it
                    try:
                        await tab.evaluate("""
                        (() => {
                            const wb = document.getElementById('wm-ipp-base');
                            if (wb) wb.remove();
                            const wb2 = document.getElementById('donato');
                            if (wb2) wb2.remove();
                            const wm = document.querySelector('[id^="wm-"]');
                            if (wm) wm.remove();
                            return 'cleaned';
                        })()
                        """)
                    except Exception:
                        pass
                    await asyncio.sleep(1)

                # viewport screenshot
                try:
                    data = await tab.screenshot(full_page=False)
                    if data:
                        with open(f"{SCREENSHOTS_DIR}/{label}-p{i+1}-viewport.png", "wb") as f:
                            f.write(data)
                        print(f"     saved viewport ({len(data)} bytes)")
                except Exception as e:
                    print(f"     viewport err: {e}")

                # full-page screenshot
                try:
                    data = await tab.screenshot(full_page=True)
                    if data:
                        with open(f"{SCREENSHOTS_DIR}/{label}-p{i+1}-full.png", "wb") as f:
                            f.write(data)
                except Exception as e:
                    print(f"     full err: {e}")

                # design data
                try:
                    d = await tab.get_design_data()
                    results[f"{label}-p{i+1}"] = d
                    print(f"     data: title={d.get('title','')[:60]} | h1={len(d.get('h1',[]))} h2={len(d.get('h2',[]))} imgs={d.get('imageCount')}")
                except Exception as e:
                    print(f"     data err: {e}")

        with open("/Volumes/Vedant/vedantsecondary/Projects/Calicos/research/sites/_raw-design-data.json", "w") as f:
            json.dump(results, f, indent=2, default=str)
        print("\nWrote raw design data")


if __name__ == "__main__":
    asyncio.run(main())
