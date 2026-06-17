# Calicos — Refined Creative Direction (V2)

**Phase 2 deliverable (V2).** This document supersedes `CREATIVE_DIRECTION.md` v1 (archived 2026-06-18 — see `archive/CREATIVE_DIRECTION.md.v1-superseded` for the previous reasoning). The brand identity is unchanged; the execution architecture has been rebuilt for real e-commerce.

**Builds on**:
- `BRAND_ANALYSIS.md` — Instagram deep-dive, brand sentence, founder duo
- `MASTER_RESEARCH.md` — 12-site research synthesis (factual findings retained)
- `DIFFERENTIATION_NOTES.md` (V2) — re-evaluated anti-patterns with cart-aware 🟢/🔴 distinction
- `SCREENSHOT_AUDIT.md` — retroactive audit of `research/screenshots/` for IG chrome contamination
- Fresh V2 research (Aritzia, Reformation, Nicobar) — what "premium AND fully transactable" actually looks like

---

## 0. What changed from V1, and why

V1's premise was: *premium editorial publication, sales via Instagram DM, no cart, single CTA per section.* The build worked as a brand statement but failed as a product. Visitors landed on something that felt like an art magazine, not a place where they could confidently browse and buy. The actual problem wasn't brand identity — the founder-duo photography, the warmth, the Indian-craft-meets-editorial positioning were all right. What failed was translating that into a real, fully transactable store.

**Premium ≠ minimal-to-the-point-of-inert. Premium = considered AND functional.**

V2 keeps everything that was right about V1 (brand sentence, founder photography, color palette structure, restraint in copy, Devanagari usage) and rebuilds the commerce architecture:

| | V1 | V2 |
|---|---|---|
| Cart | ❌ None (DM-to-order only) | ✅ Real cart drawer + cart page |
| Checkout | ❌ None | ✅ UI-only checkout (form + confirmation page, Stripe/Razorpay drops in via one integration file later) |
| Product grid | 4 products, single column, no filtering | ✅ Real grid with filter rail + sort dropdown + size variants |
| PDP | "Read the full story" button (DM to order) | ✅ Real product detail page: gallery, color swatches, size selector, quantity, add-to-cart, accordion sections (Fit, Material, Sustainability, Shipping) |
| Add-to-cart | ❌ None | ✅ On PDP, primary CTA |
| Filters | ❌ None | ✅ Color, size, fabric, price, occasion (the 🟢 Normal ones from V2 DIFFERENTIATION_NOTES) |
| Strikethrough discount pricing | N/A (no cart) | ❌ Banned. Single price only. |
| Loyalty/rewards program | N/A | ❌ Banned. The product earns return visits. |
| Scarcity lines ("Only Few Left") | N/A | ❌ Banned. |
| Bundle pricing | N/A | ❌ Banned. |
| Cookie modal blocking first paint | N/A | ❌ Banned. Footer-level notice only. |
| Trending Searches SEO block | N/A | ❌ Banned. |
| Newsletter popup | ❌ Banned in V1 too | ❌ Still banned. Single-line footer input only. |
| Persistent bottom-right IG DM pill | ✅ | ✅ Kept (it's a brand hallmark, not a checkout alternative) |

**The C+B hybrid hero direction is unchanged.** Concept C (editorial full-screen photograph + oversized serif + slow parallax + restrained type) + Concept B (Fabric Reveal interaction) carry forward exactly as specified in `BRAND_ANALYSIS.md`. What changes is everything after the hero: the brand is now a real store.

---

## 1. The Brand Sentence (unchanged from V1)

> **Calicos is the digital equivalent of opening a fabric store in a Pune garden, finding a kurta on the table, and hearing someone laugh in the next room while a sitar plays.**

Everything we build must answer one question: *does this feel like that sentence?*

---

## 2. The Through-Line (unchanged from V1)

Three insights converge into a single through-line:

### Insight 1 — *Sound is load-bearing in this brand's identity.*
The bio is literally "Dressing like life has a Bollywood soundtrack." Every piece of motion content on their Instagram is paired with Hindi/Sufi music. Most "premium fashion" sites treat audio as an afterthought or disable it entirely. **Calicos should treat the visual silence of the site itself as a kind of music** — restrained typography, slow motion, generous negative space. The viewer's internal monologue becomes the soundtrack.

### Insight 2 — *The brand is a duo, not a logo.*
Two co-founders (@radhaphatak, @priii._.29) appear in EVERY photograph. The duo is the brand's most distinctive visual asset. Calicos has **two women, laughing, in motion.** The website's job is to make the visitor feel they are being let into a friendship.

### Insight 3 — *Indian craft heritage × modern editorial is the actual category.*
This is not "Indian fashion made modern." This is not "Western minimalism with Indian textiles." It is a third thing: **handmade block-printed fabric treated with the visual discipline of an indie magazine.** Think *Apartamento* magazine but for clothing. Warm, considered, opinionated.

**The through-line:** *Slow cinema × Indian craft × founder intimacy.*

If a design decision does not serve at least two of these three, it does not belong. V2 adds: **and the third axis — commerce functionality — is a hard requirement, not an option.**

---

## 3. New definition of "premium" (V2)

V1 had an implicit definition: premium = restrained, slow, quiet, sparse. That definition produced a beautiful art-magazine that nobody could buy from.

**V2 definition:**

> **Premium = editorial in voice and visual language. Functional in commerce mechanics.**

Specifically:

- **Editorial voice** = founder-named copy, poetic headlines, no SEO stuffing, no "✓ 100% Authentic" checklist, no designer-collab-as-marketing.
- **Editorial visual language** = real photography (no AI people, no pack-shots on white), natural daylight, foliage backdrops, oxidized-silver jewelry visible, the two co-founders visible.
- **Functional commerce mechanics** = real cart, real checkout, real filters, real sort, real PDP with size selector + quantity + add-to-cart, real order confirmation page. NONE of these need to be loud or disruptive. They can sit quietly inside an editorial surface — but they MUST exist.

Aritzia, Reformation, and Nicobar all hit this balance. They look like fashion magazines but they sell like real stores. That's the target.

---

## 4. The Five Non-Negotiables (carry these into every component — V2 update)

### NN1. Cream, not white.
The site background is `--cream` (#F5EFE0). NEVER `#FFFFFF`. Pure white reads as sterile, corporate, ecommerce. Cream reads as paper, fabric, warm.

### NN2. Type does the talking.
We don't need many words. When words appear, they are oversized, generous, and slow to reveal. Display serif = Fraunces (variable). Body = Inter. That's the whole type stack.

### NN3. One showpiece per page. Max.
Homepage: the Fabric Reveal is the showpiece. Every other motion is intensity 2 or below.
Collection page: the curated grid header is the showpiece.
Product page: the image gallery is the showpiece.
Cart drawer: the line-item animation on add is the showpiece.
Checkout: the stepper is the showpiece.
If you can't decide which element is the showpiece, you have two. Remove one.

### NN4. Real photography only — and cropped cleanly.
Zero AI-generated humans. Zero AI-generated clothing. Zero Instagram UI chrome (no Follow buttons, no like icons, no comment textboxes, no app close-X) baked into imagery. Every sourced image is the photograph itself, cropped to remove all app chrome. Burned-in editorial text on Instagram posts ("Bandanas available!", "Soft launch") is recreated natively in the website's own type system, not preserved as baked image overlay. See `SCREENSHOT_AUDIT.md` for the full retro audit.

### NN5. The kurtas are the motion.
Fabric is already in motion in real life — it sways, it folds, it catches light. The website's animation language borrows from fabric physics: slow, continuous, organic. Never springy, never bouncy, never overshoot.

### NN6 (new). Commerce is functional, not decorative.
Filters work. Sort works. Cart persists across page navigation. Checkout validates fields. Add-to-cart animates a line-item appearing in the drawer with a count badge incrementing on the nav icon. None of this is optional. None of this should be loud either — but it MUST work. See `DIFFERENTIATION_NOTES.md` v2 for the 🟢/🔴 split between normal commerce conventions (use) and cheap-feeling patterns (reject).

---

## 5. What we will NOT do (V2 — extended from V1)

V1 had 16 anti-patterns. V2 keeps those that still apply and adds new ones that emerge from the cart-aware reality.

| Anti-pattern | Why we reject it (V2 framing) |
|---|---|
| **Pop-up modals** (newsletter, age gate, "wait! 10% off") | Reads as mass-market. Destroys editorial trust. |
| **Carousel/slider on the hero** | Engagement theater. A photograph doesn't need to slide. |
| **Strikethrough discount pricing** | Cheapest-feeling thing in e-commerce. Aritzia, Reformation, Nicobar all use single price. Calicos uses single price. |
| **"Only Few Left" / "X people viewing" scarcity lines** | Pressure tactic. Premium brands don't use this on the surface. |
| **"Buy 2 at ₹2299" bundle pricing** | Mass-market. Premium brands don't bundle. |
| **Loyalty / rewards program block** | Bribes return visits with points. The product earns return visits. |
| **"Trending Searches" SEO block** | SEO stuffing. Quality content ranks on its own. |
| **Designer collab sections** ("Nikhil Thampi X Indya") | Licensing a name. Calicos's founders ARE the designers. |
| **Sub-brand navigation** (X by Libas, etc.) | One brand, one identity. |
| **"Most Loved" / "Best Sellers"** sales-rank sections | Curate by founder choice, not by sales rank. |
| **"New Arrivals" badge on every product** | Sparingly. Premium signal = restraint, not decoration. |
| **Cookie consent modal blocking first paint** | Premium brands use footer notice. Calicos does too. |
| **Multi-column product grids (4-up pack-shots on white)** | Looks like mass-market. We use editorial 2-up or 3-up with generous gutters. |
| **Reviews / star ratings on product cards** | Calicos has no reviews infrastructure yet. Skip rather than fake. |
| **Auto-playing audio** | The single fastest way to lose a visitor. Ever. |
| **Hamburger menu on desktop** | Nav is short. Put it on screen. |
| **Mega-menu with 40+ category links** | We have 4 products. Keep nav flat. |
| **Loyalty-point badges on product cards** | Mass-market transactionality. Never. |
| **Countdown timers attached to seasonal drops** | Mass-market urgency. Calicos uses slow drops, not flash sales. |
| **White studio pack-shots with model-as-hanger** | See V1 §NN4. Real IG photography, not catalog shots. |
| **Cart icon with red "Sale" badge** | Sale state communicated via a single muted "On sale" pill, not red urgency badges. |

---

## 6. The Emotional Palette (per section — V2 update)

Every section of the site has exactly one job, mapping to one emotion. V2 adds commerce-functionality emotions to the V1 emotional palette.

| Section | One job | The emotion |
|---|---|---|
| Hero | Earn the right to be looked at | **Curiosity** |
| Manifesto | State the brand's belief | **Trust** |
| Fabric Reveal | Show the craft becomes the product | **Delight** |
| Collection preview | Make the work feel browsable, not crowded | **Respect + Confidence** |
| PDP hero (image gallery) | Let the product be examined | **Consideration** |
| PDP info column (price + variants + add-to-cart) | Make buying feel frictionless | **Confidence** |
| Cart drawer | Confirm the choice without nagging | **Satisfaction** |
| Checkout | Get to "Order placed" with zero anxiety | **Clarity** |
| Order confirmation | Close the loop warmly | **Relief + Welcome** |
| Story teaser | Open the door to the founders | **Intimacy** |
| Journal preview | Prove the brand writes, not just sells | **Voice** |
| Find Us | Convert without sounding like conversion | **Invitation** |
| Footer | Close quietly | **Settled** |

If a section triggers two emotions, the dominant one wins. (V1 had the same rule. V2 is just more sections.)

---

## 7. Voice & Tone (unchanged from V1)

Three rules:

### Rule 1 — Show, don't sell.
- ❌ "Handcrafted with love"
- ✅ "Block-printed by hand in Pune."

### Rule 2 — Bilingual when natural, English by default.
- Devanagari for: logo lockup, occasional seals (औरिजनल), one pull-quote per page max.
- Never translate a tagline just to use Devanagari. It must *earn* its place.

### Rule 3 — Sentences are short. Lines breathe.
- ❌ "We started Calicos because we wanted to bring the warmth and authenticity of Indian textile traditions to a new generation of women who appreciate slow fashion."
- ✅ "Two friends. One fabric store. A lot of chai."

**New for V2 — commerce copy voice:**

Product names: poetic but functional. "Terracotta Ikat Kurta", "Indigo Block-Print Kurta", "Mustard Paisley Sundress", "Bamboo Bandana" — never "FESTIVE SALE! RED EMBROIDERED KURTI SET WITH DUPATTA (BUY 2 GET 1 FREE!)".

CTA copy: lowercase, present-tense. "add to bag" (Reformation uses lowercase — it's a premium signal). Not "Add To Cart!" with exclamation.

Error states: honest, brief. "That email looks off." Not "We're sorry, but the email address you entered does not appear to be valid. Please try again."

Empty cart: warm. "Your bag is empty. Find your first piece." Not "Your shopping cart is currently empty. Continue shopping."

---

## 8. The Decision Log (V2 — traceability for the big decisions)

| Decision | Alternative considered | Why we chose this |
|---|---|---|
| Real cart + checkout (full UI, payment processor placeholder) | Keep V1's no-cart / DM-only architecture | "Premium editorial publication" doesn't have a cart. Real premium-and-transactable sites (Aritzia, Reformation, Nicobar) all have working carts. Calicos needs both: editorial voice, working commerce. |
| Single price per product (no strikethrough sale framing) | Mass-market strikethrough pricing | Aritzia, Reformation, Nicobar all show single price. Strikethrough sale framing reads as cheap. The brand doesn't run flash sales — it makes small batches that sell out on their own. |
| Filters on collection page (color, size, fabric, price) | No filters (V1 had 4 products, no need) | The V2 catalog could grow beyond 4 products. Even at 4, filters signal "this is a real store." Use them when catalog size warrants. |
| Cart drawer (not cart page) | Cart page only | Every premium brand uses cart drawer. Reformation adds cart icon + count badge in nav. Cart drawer = non-disruptive, browse-while-shopping. |
| Checkout as a dedicated `/checkout` flow with form fields | One-page "express" checkout | Multi-step gives customers room to breathe. One-page is fast but cramped. Use 2-3 steps: contact → shipping → payment. |
| "add to bag" lowercase CTA | "Add to Cart" sentence case | Reformation uses lowercase. Premium signal = less shouting. |
| Stock state: plain text on PDP only ("3 left", "Made to order") | "Only Few Left" red badge on cards | Reformation has subtle "low stock" indicators on PDP. Nicobar doesn't show stock state. Premium brands don't put stock urgency on cards. Calicos: stock state on PDP only, in plain type. |
| Cookie notice: single-line footer link | Modal blocking first paint | Aritzia footer has "Manage Cookies" link. Nicobar has standard cookie banner. Calicos: footer link + small inline banner, no modal block. |
| Newsletter: single-line footer email input | Popup modal | Footer input is sufficient. Popups destroy editorial trust. |
| Persistent bottom-right "DM to order" pill | Removed (since we have cart now) | **KEPT.** The IG DM is still where actual conversations happen. Cart is for browsing + transaction; IG is for relationship. They complement, not replace. |

### 8.1 Design system constraints added post-review (2026-06-18)

The user flagged two design system constraints in a post-V2 review pass that were not yet captured as named, traceable decisions in this document. **Per your instruction "if it's missing, add it now before I sign off,"** they are added here as named constraints. **My interpretation is flagged — please confirm or correct before signing off.** If either interpretation is wrong, the constraint below is the one to revise; if the interpretation is right, the wording below is the source of truth.

#### Constraint 1 — Floating navbar (interpretation)

**The site uses a floating navbar, not a pushed-down sticky bar.**

- The navbar floats OVER page content (transparent background, no opaque bar pushing content down) at the top of the viewport on initial load.
- On scroll past ~60px, the navbar transitions to a solid `--cream` background with a 1px `--hairline` bottom border.
- Page content scrolls UNDER the navbar. The hero section uses `padding-top` to compensate so content doesn't disappear behind the navbar.
- The mobile drawer also floats (slides from the right edge of the viewport, full-height).

**What this is NOT:** it is NOT a "sticky bar that takes 60-80px of permanent vertical space pushing content down" (the mass-market pattern, where every page is visibly shorter because of the always-visible header bar). The floating pattern gives the page more vertical real estate for imagery and is the modern editorial-web convention.

**Why this matters for Calicos:** the brand's hero photography is full-bleed — a sticky bar would shrink the hero by 10-15%, which is exactly the kind of "feels like a real store but slightly off" trade-off the V2 direction is trying to avoid.

#### Constraint 2 — Rounded-corner constraint (interpretation)

**Border-radius is restricted to two values. No full pills. No giant soft corners.**

- Allowed values:
  - `4px` (`rounded-sm`) — for small UI elements (inputs, tags, chips)
  - `12px` (`rounded-md`) — for cards, buttons, image frames
- **Banned:**
  - `rounded-full` (full pills) for almost everything. The single exception is the persistent bottom-right "DM to order" Instagram pill — that one stays a pill because (a) V1 established it as a brand hallmark and (b) pills for floating persistent actions are the universal convention (Aritzia bag-count, Reformation chat, etc.).
  - Anything over 12px (`rounded-lg`, `rounded-xl`, etc.) — these read as "consumer fun app" or "SaaS dashboard," not editorial fashion.
- Image frames (product card covers, hero photo containers, founder portraits) are NOT rounded at all. Sharp corners on imagery; rounded corners on UI containers.

**Why this matters for Calicos:** the V1 design system explicitly carried this constraint through, but V2 didn't surface it. The mass-market pages often have NO border-radius at all (Libas, Biba) or very large soft corners (Nicobar uses 0; Aritzia uses 0 for product photos and 4px for buttons). Calicos's 4/12 split is a different choice — it says "premium fashion" without saying "consumer fun app" (which is what big radii signal).

### 8.2 What this section does

§8 + §8.1 together are the complete decision log for the V2 creative direction. If a future decision appears to contradict anything in §8, §8.1 is the tiebreaker. The `DESIGN_SYSTEM_V2.md` document (not yet written) will reference §8.1 explicitly so the floating-navbar and rounded-corner constraints are not re-derived from scratch during implementation.

---

## 9. Architecture (V2 — what the site actually contains now)

### 9.1 Sitemap (V2)

```
/                         Homepage — hero, manifesto, fabric reveal, collection preview, story teaser, journal preview, find us
/collection               All products, filterable
/collection/[slug]        Product detail — gallery, color, size, quantity, add-to-cart, accordion (Fit, Material, Care, Shipping)
/bag                      Cart drawer (slide-in from right) + cart page (optional fallback)
/checkout                 Multi-step checkout: contact → shipping → payment (Stripe/Razorpay placeholder)
/order/[id]               Order confirmation page
/story                    Founders' long-form story
/journal                  All journal entries
/journal/[slug]           Single journal entry
/find-us                  Flea schedule, IG handle, email
/404                      On-brand "this one was pulled from the collection"
```

### 9.2 Navigation (V2 — slightly expanded)

```
[ Calicos ]    Collection · Story · Journal · Find Us    [Search]  [Wishlist]  [Bag (0)]
```

- 4 main nav items (unchanged from V1)
- Right-side utility: search, wishlist (NEW for V2), bag with count badge (NEW for V2)
- Logo + nav fixed; solid cream background after scroll
- Mobile: hamburger drawer slides from right, full height

### 9.3 Homepage sections (V2 — same 8 as V1)

| # | Section | Purpose |
|---|---|---|
| 1 | Hero (Concept C) | Curiosity — full-bleed photograph, oversized serif, Ken Burns |
| 2 | Manifesto | Trust — "Dressing like life has a Bollywood soundtrack" on terracotta band |
| 3 | Fabric Reveal (Concept B) | Delight — pattern folds away to reveal first collection photograph |
| 4 | Collection preview | Respect + Confidence — 4 products, real product cards with single price |
| 5 | Story teaser | Intimacy — founder photo + one paragraph |
| 6 | Journal preview | Voice — 2 latest entries |
| 7 | Find Us | Invitation — flea schedule + IG + email |
| 8 | Footer | Settled — three columns, single-line email input |

### 9.4 NEW — Cart + Checkout + Order Confirmation flows

**Cart drawer** (slides from right):
- Header: "Your Bag" + close X
- Line items: image thumbnail, product name, color, size, quantity stepper, price, remove button
- Subtotal: prominent, cream background
- Two buttons: "View bag" (link to /bag page if drawer isn't enough) + "Checkout" (primary, leads to /checkout)
- Empty state: "Your bag is empty. Find your first piece." + link to /collection
- On add-to-cart: line-item slides in from top with 700ms ease; bag count badge in nav increments with a 200ms scale animation

**Checkout** (`/checkout`):
- Stepper at top: Contact → Shipping → Payment
- Step 1 (Contact): email field
- Step 2 (Shipping): name, address line 1, address line 2, city, state, pincode, phone
- Step 3 (Payment): payment method selector — "Credit / Debit Card (Stripe)", "UPI (Razorpay)", "Cash on Delivery (placeholder)". Each option is a radio button with a small inline description.
- Right-side summary: line items, subtotal, shipping (free above threshold), tax (calculated placeholder), total
- Single CTA at bottom: "Place order — ₹X,XXX" — primary button
- On submit (no real backend): route to `/order/[id]` confirmation page

**Order confirmation** (`/order/[id]`):
- Headline: "Thank you. Your order is in."
- Body: "We'll send you a confirmation by email. Until then, the founders will probably DM you anyway."
- Order details: line items, shipping address, total
- Continue browsing: link to /collection

---

## 10. Asset Plan (V2)

### 10.1 What's needed (new for V2)

For the build phase, the following image assets are needed:

1. **Hero photograph** — full-bleed photograph from Calicos IG, cropped to remove all IG UI chrome per the criteria in `SCREENSHOT_AUDIT.md`. Best candidate: post #4 (duo kurtis shot, the brand's most distinctive image).
2. **Collection preview product photos** — 4 products × 1 cover image each. Currently using IG screenshots which are contaminated. **Request from founders**: original DNG/JPG of their best 5 photographs.
3. **PDP gallery images** — 4 products × 3 gallery images each = 12 images. Real product photography, multiple angles per piece. **Request from founders**: 12 product photos.
4. **Founder portrait** — for /story page and story teaser. **Request from founders**: 1–2 candid portraits.
5. **Sneak Peek fabric swatches** — for the Fabric Reveal pattern layer. Currently using inline SVG placeholder. **Request from founders**: high-res photo of an indigo block-print fabric from their archive, tileable.
6. **Journal cover images** — 3 entries × 1 cover each = 3 images. Currently reusing IG post images. **Request from founders**: 3 candid process shots (fabric close-up, market day, packing orders).
7. **Story teaser photo** — founder photo. Same as #4.

### 10.2 What's already available

- Brand colors: cream/ink/earth palette (unchanged from V1)
- Typography: Fraunces, Inter, Noto Serif Devanagari (unchanged)
- Logo: raster captured; need SVG vectorization for crisp scaling
- IG post URLs: captured in `references/posts-urls.md`

### 10.3 Self-check before any image goes into V2

> "Does this contain any Instagram/social-app interface element?"

If yes: crop again, source a cleaner version, or do not use. The criteria are documented in `SCREENSHOT_AUDIT.md`.

---

## 11. Technical Decisions (V2 update)

| Concern | V1 | V2 |
|---|---|---|
| Framework | Next.js 16 (App Router) + TS strict | Same — unchanged |
| Styling | Tailwind v4 (via `@theme inline`) | Same |
| Animation | GSAP + ScrollTrigger, Lenis | Same |
| State | None (DM-only, no client state needed) | **NEW: Cart state via Zustand with localStorage persist** (so cart survives page navigation and tab close) |
| Cart UI | None | **NEW: Drawer component (slide-in from right) + /bag page as fallback** |
| Checkout | None | **NEW: Multi-step form with field validation. NO live payment processor — payment method selector is placeholder UI only.** Stripe/Razorpay integration drops into a single file later. |
| Email/transactional | None | **NEW: Order confirmation page (UI only). Real email confirmation deferred to post-launch.** |
| CMS for products | None (hardcoded in data/products.ts) | **NEW: Same data file for now. Migrate to headless CMS (Sanity free tier) only if catalog grows beyond ~10 products.** |
| Search | None | **NEW: Simple site-search using a JSON index of products + journal. Algolia/Typesense deferred.** |

---

## 12. What CREATIVE_DIRECTION_V2.md does NOT do

- It does not introduce specific design tokens (colors, type sizes, spacing scale). That's `DESIGN_SYSTEM.md` (which we have not touched yet — that comes next).
- It does not produce wireframes. That's Phase 4.
- It does not generate any final imagery. That's the build phase.
- It does not introduce any code. That's the build phase.

The next steps (after this document is signed off) are:

1. `DESIGN_SYSTEM_V2.md` — design tokens (color, type, spacing, motion), component primitives (including new V2 components like `CartDrawer`, `LineItem`, `QuantityStepper`, `CheckoutStepper`)
2. Wireframes for new V2 pages: PDP, /bag, /checkout, /order/[id]
3. Asset production (per §10.1)
4. Build
5. Quality bar review

---

## 13. Status

Awaiting sign-off before resuming Phase 2/3 work.

Specifically: this document, `DIFFERENTIATION_NOTES.md` (V2), and `SCREENSHOT_AUDIT.md` are together the deliverables of this research + direction pass. Once approved, the next move is the V2 design system.

*End of V2 creative direction.*
