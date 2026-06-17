/**
 * Calicos product catalog.
 * Used by: homepage collection preview, /collection, PDP, cart drawer.
 * Single source of truth — typed, headless-CMS-ready.
 */

export type ProductColor = {
  name: string;       // e.g. "Terracotta"
  hex: string;        // e.g. "#8B2E1F" for swatch chip
};

export type Product = {
  slug: string;
  name: string;
  shortDescription: string;       // e.g. "Sleeveless · Hand-ikat woven · Pune"
  longDescription: string;        // for PDP — story behind the piece
  fabric: string;
  care: string;
  fitsNotes: string;
  priceINR: number;                // in rupees (no paise math in data layer)
  pattern: "ikat" | "block-print" | "paisley" | "kantha" | "solid";
  availability: "in stock" | "low stock" | "made to order";
  drop: string;
  // Visual palette for product card placeholder before real images arrive
  palette: { from: string; to: string };
  colors: ProductColor[];          // available color variants on PDP
  sizes: string[];
  // Imagery — these paths point to /public/images/products/<slug>/<n>.jpg
  cover: string;                   // 4:5 product card
  gallery: string[];               // PDP gallery (3 angles)
  // Founder note for PDP "designer's note" accordion
  designersNote: string;
};

export const products: Product[] = [
  {
    slug: "terracotta-ikat-kurta",
    name: "Terracotta Ikat Kurta",
    shortDescription: "Sleeveless · Hand-ikat woven · Pune",
    longDescription:
      "The Terracotta Ikat was the first kurta we ever sold. The fabric comes from a small weaving collective in Pochampally — three weeks from loom to finished piece. The ikat pattern is resist-dyed before weaving, which means every motif has a soft edge, slightly imperfect, never identical. We chose to keep the silhouette sleeveless and a-line because the fabric does the talking.",
    fabric: "100% handloom cotton, naturally dyed",
    care: "Hand wash cold · Line dry in shade",
    fitsNotes:
      "Sleeveless, A-line cut. The armhole sits comfortably without a camisole for sizes XS–M; we recommend one for C-cup and above.",
    priceINR: 2400,
    pattern: "ikat",
    availability: "low stock",
    drop: "Summer 2026",
    palette: { from: "var(--terracotta)", to: "var(--mustard)" },
    colors: [
      { name: "Terracotta", hex: "#8B2E1F" },
      { name: "Indigo", hex: "#1E3A5F" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    cover: "/images/products/terracotta-ikat-kurta/cover.jpg",
    gallery: [
      "/images/products/terracotta-ikat-kurta/01-front.jpg",
      "/images/products/terracotta-ikat-kurta/02-side.jpg",
      "/images/products/terracotta-ikat-kurta/03-detail.jpg",
    ],
    designersNote:
      "Pairs well with our bamboo bandanas in indigo or mustard. The armhole sits comfortably without a camisole for smaller sizes; we recommend one for C-cup and above.",
  },
  {
    slug: "indigo-blockprint-kurta",
    name: "Indigo Block-Print Kurta",
    shortDescription: "Sleeveless · Natural indigo · Heritage weave",
    longDescription:
      "Block-printed by hand in a small workshop in Bagru, Rajasthan. Each motif is stamped using hand-carved teak blocks — the same blocks have been in the family for four generations. The indigo is fermented in vats for two weeks before printing, which is why the colour deepens slightly with each wash instead of fading.",
    fabric: "100% handloom cotton, natural indigo",
    care: "Hand wash cold separately for first 3 washes · Line dry",
    fitsNotes:
      "True to size. Indigo bleeds slightly in early washes — that's the dye settling into its final tone.",
    priceINR: 2200,
    pattern: "block-print",
    availability: "in stock",
    drop: "Summer 2026",
    palette: { from: "var(--indigo)", to: "var(--mustard)" },
    colors: [
      { name: "Indigo", hex: "#1E3A5F" },
      { name: "Black", hex: "#1A1410" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    cover: "/images/products/indigo-blockprint-kurta/cover.jpg",
    gallery: [
      "/images/products/indigo-blockprint-kurta/01-front.jpg",
      "/images/products/indigo-blockprint-kurta/02-side.jpg",
      "/images/products/indigo-blockprint-kurta/03-detail.jpg",
    ],
    designersNote:
      "The colour deepens slightly with each wash instead of fading. Wear with confidence for the first three washes — that's the dye settling into its final tone.",
  },
  {
    slug: "mustard-paisley-sundress",
    name: "Mustard Paisley Sundress",
    shortDescription: "Strappy · A-line · Summer weight",
    longDescription:
      "The Mustard Paisley was born from a sari Radha found in a vintage shop in Pune. We deconstructed the paisley repeat, scaled it down, and printed it onto a voile so fine it feels like a whisper. The sundress has adjustable straps — tied at the back — so the fit is yours to decide.",
    fabric: "100% cotton voile, hand-printed",
    care: "Hand wash cold · Line dry · Iron on reverse",
    fitsNotes:
      "Adjustable straps. Made to order — 3–4 weeks. We'll DM you photos at every stage.",
    priceINR: 2800,
    pattern: "paisley",
    availability: "made to order",
    drop: "Summer 2026",
    palette: { from: "var(--mustard)", to: "var(--chocolate)" },
    colors: [
      { name: "Mustard", hex: "#D4A017" },
    ],
    sizes: ["XS", "S", "M", "L"],
    cover: "/images/products/mustard-paisley-sundress/cover.jpg",
    gallery: [
      "/images/products/mustard-paisley-sundress/01-front.jpg",
      "/images/products/mustard-paisley-sundress/02-side.jpg",
      "/images/products/mustard-paisley-sundress/03-detail.jpg",
    ],
    designersNote:
      "Made to order takes 3–4 weeks. We'll keep you updated by DM with photos at every stage.",
  },
  {
    slug: "bamboo-bandana",
    name: "Bamboo Bandana",
    shortDescription: "Cotton · 4 designs · Hand-rolled hem",
    longDescription:
      "Our bandanas were an accident. We had leftover block-print fabric from the kurti run and didn't want to waste it. So we cut squares, hand-rolled the hems, and started wearing them ourselves. Then friends asked for them. Then friends-of-friends. Now they're their own drop.",
    fabric: "100% organic cotton, hand-stamped",
    care: "Machine wash cold · Tumble dry low",
    fitsNotes:
      "Wear as a headband, neckerchief, wrist tie, or pocket square. Four designs rotate based on whatever fabric we have left at the end of a kurti run.",
    priceINR: 450,
    pattern: "block-print",
    availability: "in stock",
    drop: "Always in stock",
    palette: { from: "var(--chocolate)", to: "var(--cream)" },
    colors: [
      { name: "Indigo", hex: "#1E3A5F" },
      { name: "Mustard", hex: "#D4A017" },
      { name: "Terracotta", hex: "#8B2E1F" },
      { name: "Black", hex: "#1A1410" },
    ],
    sizes: ["One size"],
    cover: "/images/products/bamboo-bandana/cover.jpg",
    gallery: [
      "/images/products/bamboo-bandana/01-front.jpg",
      "/images/products/bamboo-bandana/02-detail.jpg",
      "/images/products/bamboo-bandana/03-context.jpg",
    ],
    designersNote:
      "Wear as a headband, neckerchief, wrist tie, or pocket square. Four designs rotate based on whatever fabric we have left at the end of a kurti run — so the pattern you get is one-of-one.",
  },
  {
    slug: "backless-ikat-kurta",
    name: "Backless Ikat Kurta",
    shortDescription: "Backless · Deep V-cut · Hand-ikat woven",
    longDescription:
      "The Backless Ikat was the summer 2026 experiment. We took our best-selling terracotta ikat fabric and cut a deep V at the back, tied at the nape with thin straps. The result is the same ikat you trust, but with a low-key drama that works for evening drinks, market runs, or just feeling fancy at home.",
    fabric: "100% handloom cotton, hand-ikat woven",
    care: "Hand wash cold · Line dry in shade",
    fitsNotes:
      "Deep V-backless, ties at the nape. Best on smaller bust sizes; for C-cup and above we recommend a low-back bra or a soft bralette.",
    priceINR: 2800,
    pattern: "ikat",
    availability: "in stock",
    drop: "Summer 2026",
    palette: { from: "var(--terracotta)", to: "var(--mustard)" },
    colors: [
      { name: "Terracotta", hex: "#8B2E1F" },
    ],
    sizes: ["XS", "S", "M", "L"],
    cover: "/images/products/backless-ikat-kurta/cover.jpg",
    gallery: [
      "/images/products/backless-ikat-kurta/01-front.jpg",
      "/images/products/backless-ikat-kurta/02-side.jpg",
      "/images/products/backless-ikat-kurta/03-detail.jpg",
    ],
    designersNote:
      "Ties at the nape — adjust the bow for your preferred backless depth. Best for warm evenings or as a statement piece with jeans.",
  },
  {
    slug: "kurta-denim-set",
    name: "Kurta & Denim Set",
    shortDescription: "Block-print kurta · Straight-cut indigo denim · Western fusion",
    longDescription:
      "The set that made us a brand. A hand-block-printed kurta (pick your pattern), tucked into high-waisted straight-cut indigo denim. The denim is from a small workshop in Ahmedabad — the same wash as a 1980s Levi's, but slower.",
    fabric: "Kurta: 100% handloom cotton · Denim: 12oz selvedge indigo",
    care: "Hand wash kurta cold · Machine wash denim separately cold",
    fitsNotes:
      "Kurta is hip-length, designed to tuck. Denim runs true to size with a high-rise waist. The set is sold as a pair — they go together.",
    priceINR: 4200,
    pattern: "block-print",
    availability: "low stock",
    drop: "Summer 2026",
    palette: { from: "var(--indigo)", to: "var(--mustard)" },
    colors: [
      { name: "Indigo", hex: "#1E3A5F" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    cover: "/images/products/kurta-denim-set/cover.jpg",
    gallery: [
      "/images/products/kurta-denim-set/01-front.jpg",
      "/images/products/kurta-denim-set/02-side.jpg",
      "/images/products/kurta-denim-set/03-detail.jpg",
    ],
    designersNote:
      "Sold as a pair. The kurta and denim are designed to work together — block-print cotton over indigo selvedge. A capsule wardrobe in two pieces.",
  },
  {
    slug: "tieback-paisley-sundress",
    name: "Tie-Back Paisley Sundress",
    shortDescription: "Open-back tie detail · Hand-printed voile · Made to order",
    longDescription:
      "The Tie-Back Paisley takes our best-selling mustard paisley and cuts it into a sundress with a back you can adjust. The straps tie at the nape in a small bow — pull them tighter for a higher neckline, looser for a deeper open back. The fabric is a cotton voile we found in a small weaving collective in Kanchipuram.",
    fabric: "100% hand-printed cotton voile",
    care: "Hand wash cold · Line dry · Iron on reverse",
    fitsNotes:
      "Straps tie at the nape — adjustable depth. Made to order, 3–4 weeks lead time. We'll DM you photos at every stage.",
    priceINR: 3200,
    pattern: "paisley",
    availability: "made to order",
    drop: "Summer 2026",
    palette: { from: "var(--mustard)", to: "var(--chocolate)" },
    colors: [
      { name: "Mustard", hex: "#D4A017" },
    ],
    sizes: ["XS", "S", "M", "L"],
    cover: "/images/products/tieback-paisley-sundress/cover.jpg",
    gallery: [
      "/images/products/tieback-paisley-sundress/01-front.jpg",
      "/images/products/tieback-paisley-sundress/02-side.jpg",
      "/images/products/tieback-paisley-sundress/03-detail.jpg",
    ],
    designersNote:
      "The straps tie at the nape — tighten for higher coverage, loosen for deeper back. Made to order takes 3–4 weeks. We'll DM updates with photos at every stage.",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
