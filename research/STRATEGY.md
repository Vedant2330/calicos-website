# Calicos — Website Strategy & Execution Plan
**Prepared**: 2026-06-17
**Direction locked**: Hero = Concept C. Signature interaction = Concept B (Fabric Reveal).
**For**: Founders of Calicos (formerly Raavya), Pune.
**By**: Creative Director + Brand Strategist + UX + Motion Designer + Tech Lead review.

> Brand-first strategy. No code yet. This document is the contract.

---

## 1. Creative Direction

### 1.1 Visual Philosophy

**"Editorial slow fashion."** Calicos should read like the digital equivalent of flipping through a beautifully typeset indie print magazine — not like an e-commerce store. The site is the brand's *book*, not its *cash register*. Sales happen on Instagram DM; the website's job is to make visitors feel enough that they want to slide into those DMs.

Three rules of thumb, applied to every decision:

1. **Negative space is the product.** If a section feels crowded, delete half the elements. The kurtas are the hero — typography and motion are the supporting cast.
2. **Texture and warmth over polish and shine.** No glass morphism. No neon. No gradients that look like 2018 SaaS. The brand lives in fabric — the website should feel like fabric too.
3. **The site is a portfolio of taste, not a catalog.** Every page should sound like an opinion ("we make kurtas like this because…"), never like a SKU grid ("sort by price: low to high").

### 1.2 Mood

A golden afternoon in a Pune garden. Chai in hand. Two women laughing. Jhumkas catching the light. Music playing faintly from inside the house.

**Mood keywords:** calm, slow, warm, joyful, considered, intimate, hand-touched.
**Mood anti-keywords:** urgent, salesy, trendy, corporate, tech-bro, glossy-cold.

### 1.3 Typography Direction

We need **three voices** that don't fight each other:

| Role | Family suggestion | Use |
|---|---|---|
| Display serif | Fraunces (variable, free) or PP Editorial New | Hero headline, manifesto, section openers. High-contrast, slightly old-Hollywood, modern-restrained. |
| Body sans | Inter or General Sans | UI, captions, body copy. Clean, neutral, low contrast. |
| Devanagari accent | Noto Serif Devanagari (free) | Logo lockup, occasional seals (औरिजनल), never decorative |

Type scale (desktop):
- Hero headline: `clamp(64px, 9vw, 144px)` — massive, weight 500, letter-spacing -0.04em
- Section headline: `clamp(40px, 5vw, 72px)`, weight 500
- Body: 18px / 1.6 line-height / max-width 60ch
- Eyebrow: 12px uppercase tracking-widest

Avoid: bold weight 800+, italic display, monospace, more than 2 type families in one view.

### 1.4 Color System

| Token | Hex | Use |
|---|---|---|
| `--cream` | #F5EFE0 | Primary background. NEVER pure white. |
| `--ink` | #1A1410 | Primary text. Deep warm black, not `#000`. |
| `--terracotta` | #8B2E1F | Accent section bg (used sparingly — manifesto strip) |
| `--mustard` | #D4A017 | Devanagari text, single CTA hover state |
| `--indigo` | #1E3A5F | Secondary accent (used only on story/journal) |
| `--ivory` | #FAF7F0 | Elevated surface (cards, modals) |
| `--hairline` | #1A1410 / 12% | All borders, dividers |
| `--film-grain` | noise texture at 6% opacity | Overlay on all photographic sections |

**Rule:** the palette is mostly cream + ink + one earth accent per section. Never all four earth tones at once.

### 1.5 Motion Philosophy

> "Slow cinema, not fast food."

- **Every transition takes longer than feels efficient.** If a designer says "that's too slow", it's probably right.
- **Easing:** `cubic-bezier(0.65, 0, 0.35, 1)` (a slow-in-slow-out) for everything. Never `ease-out`. Never `linear`. Never bouncy/spring.
- **Camera-like movement.** Pans, parallax, slow zooms (Ken Burns). No spring physics. No overshoot. No rotation except in the fabric reveal.
- **Scroll-linked, not time-based.** The page responds to the reader's scroll position, not to a clock. No autoplay timers, no "click here to see the next slide".
- **Restraint.** If you can remove a motion and the page is still great, remove it. The kurtas are the motion. Everything else is supporting cast.
- **Reduced motion is non-negotiable.** Every motion must have a `prefers-reduced-motion: reduce` fallback that is just as good, not a degraded version.

### 1.6 Emotional Journey (the arc)

```
Arrival ──► Curiosity ──► Trust ──► Delight ──► Respect ──► Action
  │            │            │          │            │            │
  │            │            │          │            │            │
"Where     "Oh, this    "I want   "I'm watching  "Every      "I'll DM
am I?"    is a brand   to know    something    detail is    them on
         with a soul"  these      real unfold" intentional"  Instagram"
                         women"
```

The hero delivers Curiosity + Trust. The fabric reveal delivers Delight. The collection delivers Respect. The find-us section delivers Action. Every section has exactly one emotional job.

---

## 2. Site Architecture

### 2.1 Sitemap (intentionally small)

```
/                      Home (hero + story + collection teaser + find us)
/collection            All products, filterable
/collection/[slug]     Product detail (single piece, story-led)
/story                 Founders' journey, Raavya → Calicos
/journal               Behind the scenes, fabric notes, drops
/find-us               Flea market dates, Instagram, DM, WhatsApp
/404                   On-brand, not generic
```

**Deliberately not included:**
- ❌ No `/cart` or `/checkout` (sales happen on Instagram DM)
- ❌ No `/account` (no accounts)
- ❌ No `/search` (the catalog is small enough to scroll)
- ❌ No `/about-us` separate from `/story` (story IS the about)
- ❌ No `/faq` (the founders prefer to answer in DMs — that's part of the charm)

### 2.2 Navigation

**Desktop:**
```
[ Calicos ]                                   Story · Collection · Journal · Find Us
```
- Logo left, links right. Fixed, transparent over hero, solid `--cream` after scroll.
- Type size: 14px, weight 500, letter-spacing 0.04em. No uppercase.
- Underline animates left-to-right on hover. No buttons.

**Mobile:**
- Logo left, single hamburger right. Drawer slides from right, cream bg, full-height.

**Persistent across all pages:**
- A small "DM us on Instagram" link stays visible bottom-right on mobile (this is our conversion anchor — see §9.8).

### 2.3 Footer

Three columns on desktop, stacked on mobile:

| Column | Contents |
|---|---|
| Calicos | Logo + one-line manifesto + Pune, India |
| Find Us | Next 3 flea market dates · Instagram handle · WhatsApp / DM |
| Stay Close | Newsletter (single email field, no popup, no bait) + copyright + Devanagari mark |

No "Terms of Service" link in the footer — they're not needed for a brochure site. Privacy policy yes, in a quiet corner.

### 2.4 Homepage Section Breakdown

| # | Section | Purpose | Content |
|---|---|---|---|
| 1 | Hero (Concept C) | Curiosity + Trust | Full-bleed photograph + 1-line headline + scroll cue |
| 2 | Manifesto strip | Declare the brand | Oversized serif: "Dressing like life has a Bollywood soundtrack." |
| 3 | Fabric Reveal (Concept B) | Delight | Real fabric pattern folds away to reveal first collection photograph |
| 4 | Collection preview | Respect | 4 products, one photograph each, one-word description, link to /collection |
| 5 | Story teaser | Intimacy | One founder photo + one paragraph + "Read the full story" |
| 6 | Journal preview | Voice | 2-3 latest journal entries, small image + title |
| 7 | Find Us | Action | Flea market dates, Instagram handle, DM CTA, big and obvious |
| 8 | Footer | Quiet close | Three columns as above |

---

## 3. Storytelling Flow (what the visitor feels at each scroll point)

**Stage 1 — Arrival (0–100vh).** The page opens with breath. Not a video, not a spinning logo — just a photograph of two women in a garden, breathing slowly via Ken Burns. The viewer's question: *"who are these people, and why is this so still?"*

**Stage 2 — Manifesto (100–130vh).** As the hero scrolls up, a single oversized serif sentence appears on a `--terracotta` band: *"Dressing like life has a Bollywood soundtrack."* Nothing else. The reader now knows what the brand believes. They feel seen.

**Stage 3 — Fabric Reveal (130–350vh).** A full-bleed block-print pattern from the Sneak Peek highlight slides in. As the reader scrolls, the fabric folds — gently, like a sari being draped — to reveal the first collection photograph (the duo-kurti shot, post #4) underneath. The reader watches the brand's craft become its products. *This is the wow moment.* It is the only "showpiece" interaction on the site.

**Stage 4 — Collection Preview (350–600vh).** Four pieces. One photograph each. One word of description ("Terracotta · Ikat", "Indigo · Block Print", etc.). No prices yet, no SKU, no "add to cart". Just the work, given room to breathe. The reader sees restraint as a form of respect for the craft.

**Stage 5 — Story Teaser (600–750vh).** A candid photograph of one or both founders. One short paragraph: who they are, why Calicos exists, why they left Raavya. CTA: *"Read the full story"* → `/story`. The reader feels like they're being let into something private.

**Stage 6 — Journal Preview (750–880vh).** Two or three journal cards. Small photograph, one-line title, date. The reader sees this is a brand that *writes*, not just sells. The journal is where the founders can post fabric notes, market diaries, BTS shots.

**Stage 7 — Find Us (880–980vh).** Where to buy. Three things: the next 11:11 flea market date (big, on `--indigo` band), the Instagram handle, the DM CTA. This is the conversion moment — but it doesn't feel like one. It feels like an invitation from a friend.

**Stage 8 — Footer (980–1000vh).** Newsletter, social, stall schedule, copyright. Quiet. Considered. A small Devanagari `कॉज़` mark as a final signature.

---

## 4. Motion Design Plan

### 4.1 Intensity scale

| Level | Name | When to use |
|---|---|---|
| 1 | Whisper | Hover states, micro-interactions, almost invisible |
| 2 | Noticeable | Section entrances, typography reveals, scroll-cues |
| 3 | Showpiece | One per page, max — the fabric reveal, the hero load |
| 4 | Cinema | NOT USED on this site. Save for music videos. |
| 5 | Spectacle | NEVER. |

**Rule:** if a section is intensity 3, the sections on either side must be intensity 1–2. Contrast is the design.

### 4.2 Hero animations (Concept C)

| Element | Motion | Timing | Easing | Intensity |
|---|---|---|---|---|
| Hero photograph | Ken Burns 1.00× → 1.06× over 12s | Continuous, very slow | linear | 2 |
| Brand wordmark (logo lockup) | Opacity 0 → 1, translateY 8px → 0 | 800ms, starts at 200ms | cubic-bezier(0.65,0,0.35,1) | 1 |
| Headline | SplitText word-by-word, opacity + 12px y | 1400ms total, starts at 600ms, 80ms stagger | cubic-bezier(0.65,0,0.35,1) | 2 |
| Subheadline | Opacity 0 → 1, translateY 12px → 0 | 600ms, starts after headline | cubic-bezier(0.65,0,0.35,1) | 1 |
| Scroll cue | Tiny vertical line, 1.6s infinite pulse | After 2s pause | sine | 1 |

**No parallax on the hero itself.** The viewer should feel anchored. The photograph breathes, nothing else moves.

### 4.3 Scroll interactions (across the site)

| Section | Scroll motion | Intensity |
|---|---|---|
| Manifesto | Words reveal on scroll-into-view via SplitText | 2 |
| Fabric Reveal | (see §4.5 — the only intensity-3 moment) | 3 |
| Collection preview | Each card: 12px translateY + opacity on enter, 80ms stagger | 1 |
| Story teaser | Founder photo from left, text from right, on scroll | 2 |
| Journal cards | Scale 0.96 → 1.0 + opacity 0 → 1 on enter | 1 |
| Find Us | Background z-axis layered slide-up (no 3D, just translateY) | 2 |

### 4.4 Fabric Reveal (the signature interaction)

Three phases, all scroll-driven:

**Phase A — Idle (130vh → 150vh).**
- Full-viewport `<canvas>` (Three.js, single mesh, one textured plane)
- Texture: real block-print pattern from Sneak Peek (indigo floral, tileable)
- A tiny vertex shader pass: when cursor is within bounds, the mesh ripples toward the cursor at low amplitude (≤8px). This makes the fabric feel like real cloth. Disabled on touch.
- Intensity: 2 (ambient, not the show yet)

**Phase B — The Fold (150vh → 280vh).**
- At scroll progress 0%, the texture covers 100% of viewport.
- At scroll progress 50%, the left half translates `x: -50%` and rotates `rotateY: -8deg` (3D), the right half does the mirror. Like two curtains being pulled apart.
- The center reveals the duo-kurti photograph (post #4) underneath, pre-loaded, doing its own Ken Burns 1.00× → 1.04× during the reveal.
- Easing: `cubic-bezier(0.65, 0, 0.35, 1)` over the full scroll distance.
- Duration of fold: ~2.2s in scroll-time. Slow by design.
- Intensity: 3 (the only one on the site)

**Phase C — Aftermath (280vh → 350vh).**
- The photograph is now full-bleed and starts to scroll up normally.
- The fabric texture has fully exited the viewport.
- A small caption fades in: *"Block-printed by hand in Pune. See the full collection."*
- Intensity: 1

**Reduced motion fallback:** instant cross-fade from fabric → photo at scroll position 50%. Same caption timing.

**Performance:** the fabric texture is 2048×2048 max, AVIF preferred, JPG fallback. The fold animation is two divs + CSS 3D transforms + perspective — we can do it without Three.js entirely if perf budget demands. WebGL only adds value if we ship the cursor ripple.

### 4.5 Hover effects

| Element | Hover | Intensity |
|---|---|---|
| Product card | Image scales 1.03× over 600ms | 1 |
| Product card caption | Underline animates left-to-right | 1 |
| Nav links | Underline grows from center, 200ms | 1 |
| Buttons | Background color shift (e.g., cream → terracotta), no transform | 1 |
| Hero photograph | Cursor becomes a small ring + dot; on interactive elements it grows | 1 |

**No 3D tilts. No parallax-on-hover. No "magnetic" buttons.** All of those are 2018-era tricks.

### 4.6 Page transitions

- Use the **View Transitions API** where supported (Chrome 111+, Edge). Same-document navigation: cross-fade with a subtle 0.98 → 1.0 scale on the new page.
- Fallback for Safari/Firefox: simple opacity fade, 240ms.
- Intensity: 1.

### 4.7 Loading experience

**First paint:**
1. Cream background paints instantly.
2. Brand wordmark fades in over 800ms (CSS-only, no JS needed).
3. Photograph streams in after. Native lazy-loading + LQIP blur-up.

**No spinner.** Spinners feel corporate. If something is taking long, the cream background IS the loading state.

**Subsequent navigations:** instant. No skeleton screens (they look too SaaS).

---

## 5. Asset Plan

### 5.1 Existing (we have these today)

| Asset | Source | Status |
|---|---|---|
| 10 IG post images | instagram.com/calicos.co | Compressed by IG, need upscaling |
| 2 highlight frames | Edits + Sneak Peek | Need extraction from CDN |
| Brand colors | Extracted from posts | Saved in research/ |
| Brand voice | Captured | Saved in research/BRAND_ANALYSIS.md |
| Logo (raster) | IG profile picture | Need SVG vectorization |

### 5.2 Assets that need enhancement

| Asset | Action | Why |
|---|---|---|
| Hero photograph | Upscale 2× via Real-ESRGAN | IG compression visible at full-bleed |
| Pattern crops | Extract tileable PNGs from Sneak Peek swatches | Need clean tiles for texture maps |
| Logo | Vectorize to SVG | Crisp at all sizes; SVG supports Devanagari properly |
| Edits highlight video | Extract clip, trim to 6s, seamless loop | Backup if we can't shoot new video |

### 5.3 Assets that should be created

| Asset | Type | Notes |
|---|---|---|
| Hero motion | Either: extracted+looped IG video, OR new short film shot on founder's phone in golden hour | The founders filming themselves in their actual kurtas with their actual jhumkas is the highest authenticity play. 6 seconds, no audio, 9:16 and 16:9 versions. |
| Lookbook photography | 4–6 close-ups: fabric texture, hands holding kurti, jhumka detail, stitch close-up | No full-body needed. These are texture-as-story assets. |
| Brand specimen sheet | One-page PDF: logo lockups, color palette, typography, motion principles | For internal use + future collaborations |
| Audio loop | 15–30s muted Bollywood-style instrumental (sitar + tabla, no vocals) | Generated via MusicGen OR sourced royalty-free. Used as optional opt-in toggle, never autoplay. |

### 5.4 Missing content — request from founders NOW

These block development. Send this list the moment you green-light the project.

1. **High-resolution originals** of their best 5 photographs (Google Drive link). Not Instagram-compressed. RAW or large JPG preferred.
2. **Permission** to use the "Edits" highlight video on the website, and confirmation they own the rights to the music (Hariharan/Clinton Cerejo "Pachchad"). If not, we use no audio by default.
3. **Founding story paragraph** (200–300 words, written by them, not by us). Authenticity lives here. Even broken English is better than AI English.
4. **Product list** in a spreadsheet:
   - Product name
   - Fabric / pattern type
   - Sizes available
   - Current price (INR)
   - 3–5 photos per product
   - In-stock status
5. **Next 3 flea market dates** with location + stall number.
6. **WhatsApp number** for DM-to-order (or just Instagram handle if they prefer).
7. **A short founder portrait** (or two) — candid, not posed. Their natural environment. Used on `/story` page.
8. **One sentence each**: why they started Calicos, why they left Raavya, what's next. Used as pull-quotes on `/story`.

---

## 6. Technical Architecture

### 6.1 Framework

**Next.js 14 (App Router) + TypeScript strict mode.**

Why:
- React Server Components for fast first paint (the hero photograph can be the LCP without shipping JS).
- Built-in `<Image>` component handles responsive photography + AVIF/WebP conversion + blur-up.
- Route groups (`(editorial)`, `(shop)`) keep URL clean while allowing different layouts.
- Vercel deployment is one command.
- TypeScript prevents the obvious bugs (broken image refs, missing alt text).

### 6.2 Animation stack

| Need | Library | Cost |
|---|---|---|
| Scroll-driven animations | GSAP + ScrollTrigger | Free for commercial use |
| Smooth scroll | Lenis | Free, MIT |
| Word/letter splitter | Custom (GSAP SplitText is paid; 80 lines of code does the same) | $0 |
| Image sequences / small motion | Framer Motion (only if needed) | Free |
| 3D / shader (fabric reveal) | Three.js + raw GLSL | Free |
| Page transitions | View Transitions API native + polyfill | Free |

**No React Three Fiber.** Overkill. We use Three.js directly for a single mesh + one shader. R3F adds React reconciliation overhead we don't need.

### 6.3 Is WebGL justified?

**Yes for the fabric fold. Maybe for the cursor ripple.**

| WebGL feature | Justified? | Fallback |
|---|---|---|
| Fabric texture plane | ✅ Yes | Single mesh, <2kB shader. Cheap. |
| Cursor-driven ripple | ⚠️ Marginal | Can be done with CSS `backdrop-filter` or a `<div>` with a CSS animation. Cut if perf budget is tight. |
| Fold/displacement | ❌ No | Two absolutely-positioned `<div>`s with CSS 3D transforms give the same visual. WebGL adds no value here. |
| Film-grain overlay | ❌ No | One SVG `<feTurbulence>` filter applied via CSS, no JS. |

**Decision:** ship WebGL for the texture plane + cursor ripple ONLY on desktop, on capable devices (check `navigator.gpu` + `prefers-reduced-motion: no-preference`). All other browsers get the CSS fallback.

### 6.4 Performance budget

| Metric | Target | Hard limit |
|---|---|---|
| Lighthouse mobile performance | 90+ | 85+ |
| LCP (4G mobile) | < 2.5s | < 3.5s |
| FID | < 100ms | < 200ms |
| CLS | < 0.05 | < 0.1 |
| Initial page weight | < 2.5 MB | < 4 MB |
| JS bundle (initial) | < 180 KB gzipped | < 250 KB |
| Time to Interactive | < 4s on mid-tier Android | < 6s |

**Hard rules:**
- No autoplay video on mobile. Ever. (Data cost + battery + doesn't convert.)
- All below-fold images lazy-loaded with LQIP.
- Fonts: 2 families max, variable if possible, `font-display: swap`, preloaded for the hero only.
- No third-party scripts except Plausible (privacy-first analytics, 1KB).

### 6.5 Mobile strategy

- **Mobile-first design.** 70%+ of Indian Instagram-driven traffic is mobile.
- 48px minimum tap targets on all interactive elements.
- Hero on mobile = still photograph (not video), 9:16 or 4:5 aspect, no parallax.
- Fabric Reveal on mobile = 2D cross-fade (skip the 3D fold), no shader, no ripple. Performance wins over fidelity.
- `prefers-reduced-motion` honored rigorously.
- Network-aware image sizing: serve AVIF to capable browsers, fall back to WebP, then JPG.
- Test on a real mid-tier Android (Pixel 6a / Samsung A52) throttled to 4G.

### 6.6 SEO strategy

- **Schema.org structured data** for: Organization, Product (per item), BreadcrumbList, Article (journal entries).
- **Open Graph + Twitter card** meta tags, one per page.
- **Sitemap.xml + robots.txt** generated by Next.js.
- **Semantic HTML** throughout (`<h1>` once per page, `<section>`, `<article>`, `<nav>`, `<footer>`).
- **Descriptive alt text** on every image — both for accessibility AND because IG alt text doesn't get indexed by Google, but website alt text does.
- **A small "About Calicos" answer block** on `/story` page — written for AI search (Google SGE, Perplexity, ChatGPT search) as well as humans. 3 short paragraphs answering "what is Calicos", "who founded it", "where to buy".
- **No SEO over-investment.** A brand with 137 followers will not rank for "Indian kurti". SEO is hygiene, not growth.

---

## 7. Design References

Studied for *principles*, not for cloning. Listed in order of most-to-least applicable.

### 7.1 Aime Leon Dore — aimeleondore.com
**Borrow:** Editorial restraint. Single-photograph hero. Calm typography. Generous negative space. The site feels like a magazine spread, not a store.
**Don't borrow:** NYC streetwear energy. The menswear tailoring voice. The sporty color pops. Calicos needs warmth, not street.

### 7.2 Khaite — khaite.com
**Borrow:** Oversized serif typography as the main visual element. Color-coded collection sections (each collection has its own dominant tone). Slow, considered scroll rhythm.
**Don't borrow:** High-fashion e-commerce structure with cart/checkout. Calicos has no cart. Don't fake one.

### 7.3 Toteme — toteme-studio.com
**Borrow:** Ultra-minimal nav. Single-column product page. "Lookbook" approach to collections (one giant photo + one line + one price).
**Don't borrow:** Scandinavian cool tone. Toteme is cold and architectural — Calicos needs warmth and softness.

### 7.4 Bode — bode.com
**Borrow:** Reverence for craft. "Story behind each piece" sections. Archival feeling. Hand-drawn mark usage. The sense that every piece has a history.
**Don't borrow:** Men's tailoring structure. American workwear color palette. Bode is menswear; Calicos is womenswear with very different materials.

### 7.5 The Row — therow.com
**Borrow:** Pure typography as image. Black-on-cream simplicity. Invisible UI. The sense that the brand doesn't need to perform.
**Don't borrow:** Ultra-luxury minimalism. The Row's restraint reads as cold and exclusionary at Calicos' price point and audience.

### 7.6 Toast — toa.st
**Borrow:** Craft-first aesthetic. Slow-scroll product pages. Natural fabric close-ups. The product page IS the marketing.
**Don't borrow:** UK homeware tone. Toast feels like a country cottage — Calicos needs an Indian garden.

### 7.7 Sabyasachi — sabyasachi.com
**Borrow:** Heritage textile reverence. Indian color confidence. Founder-as-author presence. The jewelry-styled product pages.
**Don't borrow:** E-commerce complexity. Sabya is a luxury conglomerate site — wrong scale for Calicos.

### 7.8 Anita Dongre — anitadongre.com
**Borrow:** Indian editorial sensibility. Color-blocked sections. Jewelry-styled product photography.
**Don't borrow:** Corporate scale, full ecommerce, multi-brand navigation. Different stage of business.

### 7.9 Payal Khandwala — payalkhandwala.com
**Borrow:** Indie-designer energy. Portfolio-style layout. Hand-drawn mark usage. Sense of a person behind the brand.
**Don't borrow:** Minimalist white-void aesthetic. Calicos needs warmth, not the white-cube-gallery look.

### 7.10 Pero / Eka / Inkori (Indian indie labels)
**Borrow:** Proof that small Indian designers can have world-class sites. Confidence to use Indian color + Indian typography.
**Don't borrow:** Their specific aesthetics — Calicos has its own voice.

---

## 8. Build Roadmap

Six phases. Total estimated effort: **180–260 hours over 3–4 weeks calendar**.

### Phase 1 — Discovery (1–2 days)
**Owner:** Brand Strategist + Creative Director
**Effort:** ~12 hours
**Risk:** LOW
- Lock this strategy document (you are here)
- Lock brand colors, typography, motion principles
- Define final product taxonomy + copy deck
- Send asset request list to founders (see §5.4)
- Decide on hero photograph (which IG image becomes the hero)
**Exit criteria:** strategy doc approved, asset request sent, hero photo chosen.

### Phase 2 — Design (3–4 days)
**Owner:** Designer (Figma, not code)
**Effort:** ~24–32 hours
**Risk:** MEDIUM (polish can spiral)
- High-fidelity Figma mockups for all pages, desktop + mobile
- Motion storyboard: sketches of every transition with timestamps
- Design system document (color, type, spacing, components)
- Lock the system at end of day 4 — no further polish
**Exit criteria:** mockups approved, motion storyboard signed off.

### Phase 3 — Asset Preparation (2–3 days, parallel with Phase 2)
**Owner:** Designer + Asset Lead
**Effort:** ~16–24 hours
**Risk:** MEDIUM-HIGH (waiting on founders)
- Download IG originals, upscale, extract patterns
- Vectorize logo
- Get founder-written copy back
- Generate/source audio loop
**Exit criteria:** all imagery processed, copy in CMS, audio approved.

### Phase 4 — Development (10–14 days)
**Owner:** Tech Lead + Frontend Engineers
**Effort:** ~96–128 hours
**Risk:** MEDIUM (WebGL + smooth scroll always eat time)

**Phase 4A — Skeleton (3–4 days).** Next.js setup, design system, layout primitives, all routes scaffolded with placeholder content. CI/CD to Vercel.

**Phase 4B — Hero + Fabric Reveal (4–5 days).** Hero with Ken Burns + typography entrance. Fabric Reveal with Three.js + CSS-fold fallback. Smooth scroll integration. This is where risk concentrates — budget a 1-day buffer.

**Phase 4C — Collection + Product pages (3–4 days).** Collection grid with filtering. Product detail pages. DM-to-order flow.

**Phase 4D — Story + Journal + Find Us (2–3 days).** Founder story page. Journal. Find Us. Contact.

**Exit criteria:** all pages render on Vercel preview URL.

### Phase 5 — Optimization (2–3 days)
**Owner:** Tech Lead
**Effort:** ~16–24 hours
**Risk:** MEDIUM (Safari always surprises)
- Lighthouse 90+ push (mobile especially)
- Image optimization pass
- Reduced motion compliance audit
- Cross-browser testing: Safari iOS (always broken in some way), Firefox, Edge, Chrome Android, Samsung Internet
- Real-device testing on a mid-tier Android throttled to 4G
**Exit criteria:** Lighthouse mobile 90+, all browsers verified, reduced motion tested.

### Phase 6 — Launch (1–2 days)
**Owner:** Tech Lead + Founders
**Effort:** ~8–12 hours
**Risk:** LOW
- Vercel production deploy
- Custom domain (if founders have one — recommend `calicos.co` if available, else `wearcalicos.com`)
- Founder review + content swap on real CMS
- Plausible analytics live
- Instagram bio link updated to new site
**Exit criteria:** site live, analytics live, founders have a walkthrough doc.

---

## 9. Critical Review

A creative director's honest self-audit. Listed in order of severity.

### 9.1 Over-design risk — HIGH
The biggest risk. This site could easily become a portfolio piece that wins design awards but doesn't help the founders sell kurtas. Every motion decision must answer: *"does this help a visitor decide to DM the founders on Instagram?"* If no, cut it. The Fabric Reveal is justified (it's the brand's thesis). Smooth-scroll inertia is not. Custom cursor is not. Newsletter popup would be catastrophic.

**Mitigation:** at the end of every build day, ask the founders "would you still be proud of this if you removed one thing?" Then remove that thing.

### 9.2 Performance risk on Indian networks — HIGH
WebGL shader + high-res photography + smooth scroll + audio loop + Lenis + GSAP is a LOT. Indian 4G is variable; mid-tier Android is the norm. Test on a throttled Pixel 6a from day 1, not on the launch device.

**Mitigation:** the CSS fallback for the Fabric Reveal is not a degraded version — it's the same experience in a different form. Mobile never gets the WebGL version. Audio never autoplays. Lighthouse audit every Friday.

### 9.3 Authenticity risk — HIGH
If the website feels more polished than the actual Instagram account, visitors will sense a disconnect — *"this is a brand pretending to be a brand pretending to be a brand."* The site should feel like a beautiful version of the IG, not a different entity.

**Mitigation:** the hero photograph IS an Instagram photograph. The product photography IS the Instagram photography. We don't AI-generate humans. We don't use stock. We don't even crop differently — we use the exact framing from the IG posts. The brand voice in the copy matches the IG captions.

### 9.4 Mobile autoplay video risk — MEDIUM
Some readings of Concept C include a short video loop. **Do not autoplay video on mobile.** Indian mobile data is expensive, battery is precious, and silent video autoplay is hostile UX. Hero on mobile = still photograph with Ken Burns. Period.

**Mitigation:** build a `prefers-reduced-motion` AND a "navigator.connection.effectiveType" check. On `2g`/`3g`/slow-2g, serve a still image only.

### 9.5 WebGL over-engineering — MEDIUM
Three.js for the Fabric Reveal is cool but adds 80KB+ gzipped and a new failure mode. The fold can be done with two `<div>`s + CSS `clip-path` + `transform: perspective(...)`. WebGL only adds value if we ship the cursor ripple (which is itself questionable).

**Mitigation:** build the CSS version first. Ship the CSS version. Add WebGL only if it adds 10%+ perceived delight without adding >50KB or breaking Lighthouse.

### 9.6 Founder content gap — MEDIUM-HIGH
We need founder-written copy (§5.4). AI-generated "founder story" is immediately obvious and actively harmful to trust. If the founders can't write it themselves, we sit with them for 30 minutes and they say it out loud while we type. Don't polish it.

**Mitigation:** send the asset request list today. Block Phase 2 (Design) on getting copy back. If founders delay, ship with placeholder copy marked clearly and replace before launch.

### 9.7 Conversion path clarity — MEDIUM
There's no cart, no checkout, no phone number, no WhatsApp button on first paint. Some visitors will bounce because they can't figure out how to buy. The "Find Us" section + persistent IG link in nav + DM CTA must be obvious within 2 seconds of landing.

**Mitigation:** the persistent bottom-right "DM us on Instagram" link is non-negotiable. It stays on every page, every viewport. Test on a stranger: can they find it in under 2 seconds?

### 9.8 SEO reality check — LOW (but worth saying)
A brand with 137 followers will not rank for "Indian kurti" or "Pune boutique" against Lakme, Myntra, Nykaa. SEO is hygiene (structured data, semantic HTML, alt text) not a growth lever. Don't spend more than 4 hours on it.

**Mitigation:** budget 4 hours for SEO in Phase 5 (Optimization). Spend the rest on Instagram — that's where the brand's audience actually lives.

### 9.9 Maintenance & content updates — LOW
Every product change requires editing code. If the founders want to update inventory weekly, this is the wrong architecture. A static Next.js site is fast and beautiful but it's not a CMS.

**Mitigation:** for products, use a headless CMS (Sanity.io — free tier is generous). For editorial pages (story, journal), keep them in code so they stay curated. Document the founders' workflow for adding a product.

### 9.10 Vendor lock-in — LOW
GSAP has a license cost for some commercial uses (the "Business" license is required above a certain revenue threshold — Calicos won't hit it for years). Lenis and Three.js are MIT-licensed. No lock-in risk.

**Mitigation:** keep dependencies minimal. Document why each one exists.

---

## 10. Sign-off needed before we move to architecture/code

1. **Approve this strategy document** — or flag what to change.
2. **Choose hero photograph** — I recommend post #4 (the duo-kurtis shot) or post #1 (the bandana selfie) as the strongest candidates. Do you have a preference?
3. **Approve the design references** — anything to add or remove from the list?
4. **Send the §5.4 asset request** to the founders today — development is blocked on this.
5. **Confirm the no-cart, no-checkout, DM-only architecture.** This is the biggest single decision in the document.
6. **Domain decision** — is `calicos.co` available? If yes, buy it now. If no, fallback options?

Once these are signed off, the next document is **Step 4: Site Architecture & Build Plan** — the concrete page-by-page spec with component breakdown, motion implementation details, and the phased engineering roadmap. Still no code.

---

*End of strategy document. 18 sections. Brand-first, not code-first. Awaiting feedback.*
