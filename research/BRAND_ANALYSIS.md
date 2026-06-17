# Calicos — Brand Deep-Dive Analysis
**Instagram**: @calicos.co
**Captured**: 2026-06-17 via Chrome Hermes profile (CDP 9222)
**Source**: https://www.instagram.com/calicos.co/
**Screenshots**: research/screenshots/01-profile.png through 07-edits-highlight.png
**Post index**: research/references/posts-urls.md

---

## 1. Brand Snapshot

| Field | Value |
|---|---|
| Display name | Calicos |
| Handle | @calicos.co |
| Location | Pune, India |
| Bio | "Dressing like life has a Bollywood soundtrack 🎬 / 📍Pune / Dm to order!" |
| Posts | 10 |
| Followers | 137 |
| Following | 2 (curated, almost zero — boutique signal) |
| Co-founders / models | @radhaphatak, @priii._.29 |
| Status | Soft-launch / rebrand |
| Previous brand | **Raavya** ("Fits that feel like summer") — visible on posts #4–#10 |
| Distribution | Instagram DM + physical stall at **11:11 flea**, stall 23 |
| Highlights | "Edits" (videos), "Sneak Peek" (fabric swatches) |
| Reels | None yet (no video content posted) |

**The single most important insight**: this is a **two-woman, founder-led micro-brand** pivoting from a previous identity (Raavya → Calicos). The aesthetic is intentionally **handmade, personal, culturally rooted, unpolished-in-a-good-way** — the opposite of a sterile fashion-tech site. The website we build needs to *honor* that intimacy while elevating it with cinematic craft. If we make it feel like Nykaa Fashion or Myntra, we fail.

---

## 2. Brand Voice & Tone

- **Playful, warm, cinematic**. The Bollywood-soundtrack line is the brand in one sentence — life as a song, clothes as the costume.
- **Bilingual identity**: English + Devanagari. The logo fuses "Cali" + "कॉज.co" — they're not hiding the Indian-ness, they're making it the design hook. Yellow Devanagari "औरिजनल" appears as a brand seal.
- **Anti-corporate**: low post count, candid photos (not studio), DM-based sales, flea-market presence. Reads as *made-by-friends-for-friends*.
- **Nostalgic-modern**: ikat + kantha + block-prints (centuries-old craft) styled by Gen-Z women laughing on rooftops with jhumkas.
- **Music is load-bearing**: every piece of moving content is paired with a soulful Hindi/Sufi song (Hariharan, Clinton Cerejo, Mohit Chauhan). The website should treat sound as a first-class design element, not an afterthought.

**Implication for the website**: copy must sound like a friend, not a brand. Short. Warm. Slightly poetic. Never "Shop the collection". Always "Find your song" / "Wear the soundtrack".

---

## 3. Visual Language

### 3.1 Color Palette (extracted from posts + highlights)

**Primary / Earth tones** (anchors):
- Deep terracotta red `#8B2E1F` ish — kurta base, "Raavya" orange
- Mustard yellow `#D4A017` — Devanagari text, fabric swatches
- Indigo / navy blue `#1E3A5F` — block prints, dupattas, "Raavya" logo
- Chocolate brown `#5C3A21` — floral fabric swatches
- Ivory cream `#F5EFE0` — logo background, base fabric
- Forest green `#2E4A35` — foliage backdrops (used as accent in product photography, not in product)

**Accent / Detail**:
- Oxidized silver (jewelry, not a hex)
- Pure black `#000000` — used for poster-style graphic frames
- Pure white `#FFFFFF` — typography on black frames

**UI implication**: The site should NOT use the typical e-commerce white-with-one-accent. Instead, a **warm cream / ivory base** with **deep earth accents** and **restrained black for typography**. A "kraft paper" feel — texture, not flatness.

### 3.2 Pattern Library

| Pattern | Mood | Product use |
|---|---|---|
| **Ikat** (geometric diamonds / zigzags) | Soulful, rhythmic | Red + white kurtas |
| **Block print** (small floral + leaf repeats) | Heritage, artisanal | Indigo kurtas, bandanas |
| **Kantha** (running stitch textures) | Handmade, warm | Red+blue scarf fabric |
| **Paisley** (boteh motifs) | Traditional, romantic | Mustard + brown swatches |
| **Solid brights** (red, white, mustard) | Modern, summery | Sundresses |

**UI implication**: these patterns should appear as **subtle textures** in section dividers, hover states, scroll transitions — not as decorative noise. Like the patterns are *woven into the page itself*.

### 3.3 Photography Style

- **Natural daylight**, no studio flash. Always outdoor or window-lit.
- **Lush green foliage** (bamboo, plumeria, hedge, grass) as the dominant backdrop — gives every shot a "summer afternoon" feeling.
- **Candid, not posed**: laughing, reaching for each other, looking down, sipping from a can. The "Edits" highlight shows a model opening a beverage — that's the energy.
- **Styling**: silver oxidized jewelry (jhumkas, bangles, rings) is consistent across every shot. The jewelry *is* the styling signature.
- **Composition**: two-models-together is the most-used framing. Single-model for product drops. Both are equally important.
- **Graphic frames**: the brand uses poster-style **black banner with bold serif text** at the top of launch posts ("Bandanas available!", "Raavya", "Photo Booth"). This is the only "designed" element in their feed.

**UI implication**: the website should feel like flipping through a beautifully shot indie magazine. Real photography of real people, not AI stock. If we use AI imagery, it needs to match the foliage + natural-light + silver-jewelry formula exactly.

### 3.4 Typography (observed on posts)

- **Serif display** for headline poster text ("Bandanas available!", "Raavya") — looks like Playfair / Cormorant / Bodoni family. Elegant, slightly old-Hollywood.
- **Devanagari script** used as a brand seal — yellow on dark, always italic-feeling.
- **Lowercase sans** for captions and brand names ("calicos.co", "Raavya") — modern, friendly.

**UI implication**: pair a **high-contrast serif display** (e.g. Fraunces, Cormorant, or PP Editorial New) with a **clean geometric sans** (Inter, Satoshi, General Sans) for UI. Add Devanagari accent in key moments.

---

## 4. Product Catalog (what we will sell on the site)

Based on what's been posted, the product taxonomy is small and intentional:

1. **Bandanas / scarves / head wraps** (post #1)
2. **Sleeveless kurtas / kurtis** (posts #4, #5, #6, #7, "Edits" highlight)
3. **Sundresses** (posts #2, #3, #8)
4. **Sarongs / dupatta-style wraps** (post #5)

~4 product categories. **This is a tight catalog**. We should treat each one like a small collection drop, not a SKU grid. Maybe 6–12 total product pages.

---

## 5. Asset Curation Plan for /Volumes/Vedant/vedantsecondary/Projects/Calicos

### 5.1 What already exists locally
```
Projects/Calicos/
└── research/
    ├── screenshots/      (7 reference shots captured today)
    └── references/
        └── posts-urls.md (full post index)
```

### 5.2 What we should save next, in order of priority

**Tier 1 — Downloaded source images (faithful references)**
Save each Instagram post cover + every carousel slide as a high-res JPG into:
```
Projects/Calicos/research/source-images/
├── 01-bandanas/
├── 02-sundress/
├── 03-photo-booth/
├── 04-duo-kurtis/
├── 05-sarong/
├── 06-picnic-original/
├── 07-raavya-collection/
├── 08-raavya-sundress/
├── 09-dress-pair/
├── 10-raavya-text/
├── highlight-edits/
└── highlight-sneak-peek/
```
**How**: Instagram CDN URLs captured in the JS extract above. Use `curl -o` per image with the original `?stp=` parameters preserved. Naming: `<post-slug>_<slide-index>.jpg`.

**Tier 2 — Pattern crops (texture library)**
Extract just the pattern swatches from the Sneak Peek highlight + product close-ups. Save as tileable PNGs:
```
Projects/Calicos/research/patterns/
├── ikat-red-white.png
├── block-print-indigo.png
├── kantha-red-blue.png
├── paisley-mustard.png
├── paisley-brown-cream.png
├── floral-chocolate.png
└── botanical-navy.png
```
Use these as **section dividers, hover backgrounds, loading-state textures** on the website.

**Tier 3 — Color & typography extraction**
Save extracted palette swatches as `.ase` (Adobe Swatch) + JSON:
```
Projects/Calicos/research/brand/
├── palette.ase
├── palette.json
├── typography-spec.md
└── voice-and-tone.md
```

**Tier 4 — Generated catalog imagery (later phase)**
For the actual product catalog, we will **generate** (not just save IG posts):
- Hero-shot compositions of each product against foliage backgrounds
- Lookbook images styled exactly like the IG feed (matching outfits, jhumkas, garden setting)
- Detail shots of fabric texture + weave

**Prompt strategy for generation** (locked-in from brand analysis):
> "South Asian young woman / two women, wearing [product], oxidized silver jhumka earrings + bangles, outdoor setting with lush green bamboo / plumeria / hedge in background, golden-hour natural daylight, candid smiling pose, block-print [pattern] fabric in [color] palette, 35mm film grain, editorial fashion photography, shot on Portra 400"

**Tier 5 — Audio assets (load-bearing for the brand)**
The brand's identity is tied to Bollywood/Sufi music. The site should have at minimum a muted ambient option:
```
Projects/Calicos/research/audio/
├── hero-loop.mp3   (15-30s loop, instrumental / no vocals to keep it muted-loop-friendly)
└── README.md       (licensing notes — must be royalty-free or licensed)
```
Suggestion: use a royalty-free sitar + tabla loop or a flute instrumental. NO vocals on the autoplay (annoying UX). User can opt into a "with soundtrack" toggle that brings in actual Bollywood tracks via embed.

---

## 6. Three Hero Section Concepts

All three are designed to feel **cinematic, restrained, expensive** — none of them look like an e-commerce site. They differ in *how* they earn that first impression.

---

### Concept A — "The Soundtrack" (cinematic reel loop)

**The one-line pitch**: A muted, autoplay reel loop of two women laughing in a garden — you scroll, the world falls away, the brand mark lands.

**Visuals**
- Full-bleed `<video>` background (16:9 desktop, 9:16 mobile) — 8–12 second seamless loop of a model in a Calicos kurta, slow-motion fabric movement, garden setting, no people in front of camera for first 3s
- Single `<video>` element with desktop.webm + mobile.webm sources, `object-cover`, `autoPlay muted loop playsInline`
- Rounded bottom edge (`rounded-b-[48px]`) to bleed softly into the next section

**Motion**
- On load: GSAP timeline. Video fades in from black over 1.2s, then brand mark (Calicos wordmark in serif) types in letter-by-letter over 1.8s using SplitText
- Scroll: video plays at 0.6× speed as user scrolls (scrubbed via scrollTrigger). The garden pans subtly.
- Subtle WebGL film-grain overlay (no shader-heavy stuff, just `gl_FragColor` noise pass) at 8% opacity for analog warmth
- Bottom of hero: a thin **animated audio-waveform line** (SVG, 60fps, GSAP) pulses in time with the soundtrack — gives the muted-loop a visible "music" presence

**Layout**
- Three-zone centered layout (from `premium-fashion-hero` skill)
  - **Zone 1 (top)**: Eyebrow `DRESSING LIKE LIFE HAS A BOLLYWOOD SOUNDTRACK`, headline `Calicos.`, sub `Handcrafted kurtas, sundresses & bandanas — stitched with a song.`
  - **Zone 2 (protected zone)**: 280px of empty space where the model's face/body lives undisturbed
  - **Zone 3 (bottom)**: Trust row (Hand-block prints · Pune, India · DM to order) + single CTA `Hear the collection` (scrolls to product grid) + scroll indicator

**Tech stack fragment** (for later — NOT NOW):
- GSAP + ScrollTrigger
- Lenis for smooth scroll
- HLS.js or native `<video>` with WebM
- `@react-three/fiber` for the grain overlay
- Next.js 14 App Router, no Tailwind plugins required

**Why this concept**: The brand identity is *literally a Bollywood soundtrack*. The hero should be silent cinema + a visible rhythm — that's the visual translation of the bio line. It's also the most "Apple-product-page" of the three.

---

### Concept B — "The Loom" (WebGL fabric / pattern)

**The one-line pitch**: A giant, slowly rotating block-print pattern fills the viewport — you realize it's not wallpaper, it's the fabric of one of their kurtas, and the camera pulls back to reveal the model wearing it.

**Visuals**
- A WebGL plane (Three.js / R3F) covered in a high-resolution tileable Calicos block-print pattern (the indigo floral one from the Sneak Peek highlight)
- On scroll, the pattern slowly translates, then **detaches and folds** via vertex shader to reveal a photograph underneath
- No autoplay video at all — this is fully synthetic, GPU-rendered fabric
- The reveal photograph: the duo-kurti shot from post #4, full-bleed, fills the viewport as the pattern peels away

**Motion**
- On load: pattern fills viewport with subtle chromatic-aberration shimmer (a tribute to printed fabric under raking light)
- 0.5s after load, mouse parallax kicks in (subtle, ±15px)
- Scroll progress 0 → 0.3: pattern zooms 1.0× → 1.4× and starts to dissolve
- Scroll progress 0.3 → 0.5: pattern folds away, photo of the models reveals underneath via a custom GLSL displacement shader
- Scroll progress 0.5 → 1.0: brand mark slides in from left, headline types in

**Layout**
- No traditional three-zone. The whole hero is a **scroll-driven vertical "stage curtain opening"** sequence
- Brand mark stays pinned top-left throughout
- A subtle vertical progress indicator on the right (3 dots, fills as you scroll through 3 acts of the reveal)
- Below the fold: the photograph remains as a parallax background for the next section (the product grid)

**Tech stack fragment** (for later — NOT NOW):
- `@react-three/fiber` + `@react-three/drei`
- Custom GLSL shader for the fold/displacement
- GSAP ScrollTrigger for non-shader animation (mark, headline)
- High-res seamless tile PNG/EXR of the block-print pattern
- Fallback: if WebGL fails, render a still pattern + static photo (graceful degradation)

**Why this concept**: Most "premium fashion" sites use video. Calicos is fundamentally a **fabric** brand — letting the user feel the fabric being lifted off the screen is a more honest metaphor. Higher technical risk, higher emotional payoff.

---

### Concept C — "The Two of Us" (editorial split-screen portrait)

**The one-line pitch**: A side-by-side portrait of the two co-founders, breathing slowly. No music icon, no animation cue — just two women looking at each other, and the brand's quiet confidence.

**Visuals**
- Full-bleed, edge-to-edge photograph: the duo-kurti shot from post #4, but **slightly de-saturated and lifted in shadows** for that muted editorial print feel
- Two columns of typography float over the empty negative space on either side — left column is the English wordmark, right column is the Devanagari
- Below the fold: the photograph splits vertically and scrolls apart, revealing a **magazine-style product grid** underneath (like flipping a print spread)

**Motion**
- On load: photograph enters with a 1.4s slow zoom (Ken Burns effect — 1.0× → 1.06×)
- The two models have a barely-perceptible parallax — they breathe (1px y-translate, 4s ease-in-out infinite)
- Cursor: a custom cursor (subtle ring + dot, hides on touch) that **slight-blurs** the photograph on hover via CSS `backdrop-filter` — makes the image feel like a tangible print you're leaning over
- Scroll: photo splits vertically (left half translates -50%, right half +50%) over 1.2s ease-in-out as user scrolls past the fold. The product grid is revealed underneath.

**Layout**
- Single 100vh hero, no scrolling content inside it
- Centered single-line wordmark `Calicos` in oversized serif, with the model duo photograph as backdrop
- A tiny Devanagari `कॉज़` mark underneath the wordmark, in mustard yellow
- No CTA in the hero — instead a vertical "↓" indicator + the line `Begin` (the word does the same job as a button but feels editorial)
- Below the fold: the split-photograph reveal → product grid → about → lookbook → contact

**Tech stack fragment** (for later — NOT NOW):
- Plain CSS + a tiny bit of GSAP (no Three.js, no WebGL — keeps the page weight featherlight)
- Lenis for smooth scroll
- Two `<img>` elements for the split-photo effect, each clipped to half-width
- Cursor implemented as a single React component + CSS variables
- Next.js 14 Image component for the photographs

**Why this concept**: Of the three, this is the **most restrained and most confidence-led**. It says: "we don't need to dazzle you, look at the work." It is the closest in spirit to Aime Leon Dore, Khaite, or Toteme's hero sections. It is also the **cheapest to build** and the **fastest to load** — which matters for a brand that 137 followers will visit on flaky Indian mobile networks.

---

## 7. My recommendation if you want to skip choosing

If you want my single pick: **Concept A** for the public launch site (it's the most cinematic, matches the bio, and gives us the "Bollywood soundtrack" hook as a real interactive element). **Concept C** as the fallback if A feels too on-the-nose for the brand's understated energy.

Concept B is the most ambitious and should only be picked if you want the website itself to be the campaign — a portfolio piece for Calicos that says "we are a tech-native brand" as much as "we are a textile brand".

---

## 8. Stopping point

I've completed Steps 1 and 2. The three hero concepts (Step 3) are above. **No code written. No project scaffolded yet.** Awaiting your feedback on:

1. Which hero concept (A / B / C) — or a hybrid?
2. Confirm asset tiers (1–5 above) and whether to proceed with downloading source images now or wait
3. Any brand signals I missed — do you know the founders personally? Anything else about the brand's vision / price point / target customer I should bake into the next phase?

Once you confirm, I'll move to **Step 4: Site architecture** (page list, section breakdown per page, motion budget, tech stack lock-in) before any code is written.
