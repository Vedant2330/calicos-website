# Calicos — Retroactive Screenshot Audit

**Date**: 2026-06-18
**Trigger**: V1 build shipped Instagram UI chrome (follow button, like/comment icons, "Reply to..." textbox, close X, captions-as-UI) baked directly into hero and section images. This audit flags every existing capture in `research/screenshots/` for that contamination, per the criteria the user defined.

---

## Audit criteria (from the fix instructions)

For every reference image pulled from Instagram or any social app:

1. **Crop out the actual photograph/video frame only.** No follow buttons, no like/comment/share/bookmark icons, no captions-as-UI, no progress bars, no "Reply to..." text boxes. No app chrome of any kind should ever appear in a sourced image.
2. **Burned-in editorial text** ("Bandanas available!", "Soft launch" as design overlay rather than app UI) is a judgment call: either re-crop tighter to exclude it, or treat the photo content as reference only and redo any text treatment natively in the website's own type system.
3. **Self-check before any image goes into V2**: "Does this contain any Instagram/social-app interface element?" If yes, it is not ready to use — crop again or source a cleaner version.

---

## Findings — full audit of `research/screenshots/`

### Tier 1: Direct Calicos IG captures — **ALL CONTAMINATED**

These are the screenshots the V1 build used. **None are ready to use as-is in V2.**

| File | UI chrome present? | Detail | Status |
|---|---|---|---|
| `screenshots/01-profile.png` | YES — heavy | IG profile page with sidebar nav (Home/Reels/Shop/Search/Heart/Plus/Profile/Menu), profile picture, follower stats, bio text, story highlights row, posts grid | 🚫 Contaminated — full profile UI, not usable as content |
| `screenshots/02-profile-scrolled.png` | YES — heavy | Same profile UI scrolled. Same contamination | 🚫 Contaminated |
| `screenshots/03-post-bandanas.png` | YES — heavy | Post modal with: X close button, IG logo, profile pic, "calicos.co" username + Follow button, 3-dot menu, full caption, heart/comment/share/bookmark icons, "Liked by deepaphatak9 and others", comment textbox + Post button, carousel arrows + 3 dots, IG sidebar with "7" notification badge. **Usable photo content is ~20–25% of total image area** — woman with bandana, bamboo backdrop, "Bandanas available!" black banner | 🚫 Contaminated — would require major crop of just the square photograph in the center-left |
| `screenshots/04-post-dress.png` | YES — heavy | Post modal with: same chrome as #3. **Usable photo content ~65–70% of total area** — two women in kurtas in a garden with plumeria flowers. Yellow Devanagari "ओरिजनल" overlay on the photo. Caption + hashtag block on right. | 🚫 Contaminated — cleaner of the two post screenshots (more usable photo area), but still has ~30% UI |
| `screenshots/05-highlight-sneakpeek.png` | YES — heavy | Stories viewer with: "Instagram" wordmark, X close, story progress bar, music attribution "Masakali" by Mohit Chauhan, "Sneak Peek" label, mute/pause/menu controls, "Soft launch" sticker overlay, "Reply to calicos.co..." textbox, heart/send icons, NEXT STORY THUMBNAIL preview on the right. **Actual photo content is the central fabric flat-lay** — but the "Soft launch" sticker obscures the middle. | 🚫 Contaminated — would need to crop out story UI + remove "Soft launch" sticker to use the fabric photo |
| `screenshots/06-reels-tab.png` | YES — heavy | Reels grid page with IG sidebar nav | 🚫 Contaminated — not usable |
| `screenshots/07-edits-highlight.png` | YES — heavy | Stories viewer with: "Instagram" wordmark, X close, story progress bar, music attribution "Pachchadan" by Hariharan/Clinton Cerejo, mute/pause/menu controls, "Reply to calicos.co..." textbox, heart/send icons, NEXT STORY THUMBNAIL preview on the right. **The actual content** is the model in red ikat top opening a Diet Coke can, but she's cropped chest-down — face not visible. Yellow "How life sounds in kurtas" overlay IS part of the actual Reel content (not UI). | 🚫 Contaminated — usable as reference for fabric/styling only; the cropped framing makes the photo unusable as hero |

### Tier 2: Mass-market brand-site captures (from the differentiation research pass)

These are screenshots of brands' own websites (Libas, Biba, etc.), not Instagram posts. They are **not affected by the IG-chrome bug** — they have each brand's own site chrome (which is its own problem for a different reason). Flagged here for completeness.

| File | Source site | Issue | Status |
|---|---|---|---|
| `screenshots/mass-market/libas-home.png` | libas.in | Brand's own UI (nav, promo bar, carousel). Captured at low resolution (49KB). | ⚠️ OK for differentiation research reference; not for use as website asset |
| `screenshots/mass-market/biba-home.png` | biba.in | Brand's own UI. Full-page capture, readable. | ⚠️ Same as above |
| `screenshots/mass-market/globaldesi-home.png` | globaldesi.in | Brand's own UI. Full-page capture. | ⚠️ Same |
| `screenshots/mass-market/jaypore-home.png` | jaypore.com | Brand's own UI. | ⚠️ Same |
| `screenshots/mass-market/houseofindya-home.png` | houseofindya.com | Brand's own UI. | ⚠️ Same |
| `screenshots/mass-market/okhai-home.png` | okhai.in | Brand's own UI. Captured at low resolution. | ⚠️ Same |

### Tier 3: Western premium site captures (from the original 12-site research pass)

These are also brands' own websites, not IG. Same status as Tier 2.

| File | Source site | Status |
|---|---|---|
| `screenshots/sites/aimeleondore-home.png` | aimeleondore.com | ⚠️ Brand's own UI, modal-as-architecture. Research reference only. |
| `screenshots/sites/toteme-home.png` | toteme-studio.com | ⚠️ Brand's own UI, monochrome hero. Research reference only. |

### Tier 4: NEW V2 research captures — clean

Captured fresh via the cloud browser (Camofox + MCP browser tools) for this V2 pass.

| File | Source site | Status |
|---|---|---|
| `screenshots/v2-research/aritzia-home.png` | aritzia.com | ✅ Clean — Aritzia's own site, no social app chrome |
| `screenshots/v2-research/reformation-home.png` | thereformation.com | ✅ Clean |
| `screenshots/v2-research/nicobar-home.png` | nicobar.com | ✅ Clean |
| `screenshots/v2-research/reformation-pdp.png` | thereformation.com (PDP) | ✅ Clean — actual product detail page (Anaya Knit Dress), no social app chrome |

**Note on COS**: The COS site (cos.com) was behind a "Enter Secret Key" gate that the cloud browser could not bypass. COS is documented in the V2 research as third-party knowledge rather than fresh capture.

---

## Action items for the V2 build

1. **Source clean photographs for the V2 build.** The seven Tier 1 captures are unusable as-is. Options:
   - **Primary (the pitch deliverable path): AI-generate generic South Asian models in Calicos-style kurtas, foliage backdrops, brand warm grade + film grain applied.** Generic only — never depict Radha Phatak or Priya specifically. See `CREATIVE_DIRECTION_V2.md` §4 NN4 and §10 for the full pitch asset manifest and tier rules.
   - **Secondary (if/when this becomes commissioned work):** request from founders — original DNG/JPG files from their camera (method TBD with them at that time), NOT Instagram-compressed. **NOT in motion now.**
   - **Tertiary:** crop carefully out of the existing Tier 1 captures using image editing — but only for #03 and #04, where the photo area is usable; the rest need a cleaner source. Note: even these crops would carry some IG-app context visually (the surrounding UI influences composition). Cropping is a fallback, not the primary path.
   - For "how life sounds in kurtas" yellow text — do this in the website's own type system (Fraunces italic), not as a baked-in image overlay.
2. **For any V2 image use, run the self-check**: "Does this contain any Instagram/social-app interface element?" If yes, do not use.
3. **Tier 2/3 captures** (mass-market + Western premium brand-site screenshots) are kept for design differentiation research only. They are NOT candidates for use as website imagery. If the V2 build ever needs a "look how the mass-market does it" reference, those captures serve that purpose.
4. **Tier 4 captures** (V2 cloud-browser research) are clean and can be referenced freely during V2 design work.

---

## What this audit does NOT do (per scope)

- It does not crop or modify any existing image files.
- It does not generate or source new image assets.
- It does not touch the V2 design system, code, or build.

This is the audit report. Image work happens in a later phase, gated on design system sign-off.
