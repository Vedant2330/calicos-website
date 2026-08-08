/**
 * Calicos Product Data
 * Based on visual audit of reference assets
 * 
 * Asset Classification:
 * - hero-editorial.png: Lifestyle/brand image (not a product)
 * - saanjh-dress-*.jpg: Saanjh Collection - Casual dresses
 * - originals-kurti-*.jpg: Originals Series - Full-length kurtis
 * - sale-kurti-*.jpg: Promotional/sale content (kept separate)
 */

export interface Product {
  id: string;
  name: string;
  category: "Kurtis" | "Dresses";
  collection: string;
  description: string;
  primaryImage: string;
  galleryImages: string[];
  tags: string[];
  isSale?: boolean;
}

/**
 * Products identified from visual reference audit:
 * 
 * SAANJH COLLECTION (Casual Dresses):
 * - saanjh-dress-group.jpg shows TWO women in different dresses (lifestyle shot)
 * - saanjh-dress-01.jpg, 02.jpg, 03.jpg appear to be alternate views/edits
 * - These appear to show the same or similar cream/black print dress style
 * 
 * ORIGINALS SERIES (Full-Length Kurtis):
 * - originals-kurti-01.jpg, 02.jpg show full-length kurti
 * - Similar indigo/block-print aesthetic, possibly same garment or variants
 * 
 * SALE/PROMOTIONAL:
 * - sale-kurti-01 to 04.jpg are promotional "PRICES HAVE DROPPED" content
 * - Kept separate from main catalog
 */

export const products: Product[] = [
  {
    id: "saanjh-casual-dress",
    name: "Block-Print Casual Dress",
    category: "Dresses",
    collection: "Saanjh",
    description: "A relaxed casual dress with hand-block-printed motifs. Designed for evening dinners, afternoon picnics, and effortless everyday style.",
    primaryImage: "/images/calicos/saanjh-dress-01.jpg",
    galleryImages: [
      "/images/calicos/saanjh-dress-02.jpg",
      "/images/calicos/saanjh-dress-03.jpg",
      "/images/calicos/saanjh-dress-group.jpg",
    ],
    tags: ["casual", "block-print", "everyday", "Saanjh"],
  },
  {
    id: "originals-full-length-kurti",
    name: "Full-Length Block-Print Kurti",
    category: "Kurtis",
    collection: "Originals",
    description: "A full-length kurti with traditional block-printed motifs. Versatile enough for family events yet comfortable for everyday wear.",
    primaryImage: "/images/calicos/originals-kurti-01.jpg",
    galleryImages: [
      "/images/calicos/originals-kurti-02.jpg",
    ],
    tags: ["full-length", "block-print", "family-events", "Originals"],
  },
];

// Separate sale/promotional products (not shown in main catalog)
export const saleProducts: Product[] = [
  {
    id: "sale-kurti-01",
    name: "Block-Print Kurti",
    category: "Kurtis",
    collection: "Sale Edit",
    description: "Selected piece from our current offer.",
    primaryImage: "/images/calicos/sale-kurti-01.jpg",
    galleryImages: [],
    tags: ["sale", "offer"],
    isSale: true,
  },
  {
    id: "sale-kurti-02",
    name: "Printed Kurti",
    category: "Kurtis",
    collection: "Sale Edit",
    description: "Selected piece from our current offer.",
    primaryImage: "/images/calicos/sale-kurti-02.jpg",
    galleryImages: [],
    tags: ["sale", "offer"],
    isSale: true,
  },
  {
    id: "sale-kurti-03",
    name: "Block-Print Kurti",
    category: "Kurtis",
    collection: "Sale Edit",
    description: "Selected piece from our current offer.",
    primaryImage: "/images/calicos/sale-kurti-03.jpg",
    galleryImages: [],
    tags: ["sale", "offer"],
    isSale: true,
  },
];

// Get all non-sale products
export const getMainProducts = (): Product[] => products;

// Get sale products
export const getSaleProducts = (): Product[] => saleProducts;

// Get a single product by ID
export const getProduct = (id: string): Product | undefined => {
  return products.find((p) => p.id === id) || saleProducts.find((p) => p.id === id);
};

// Get all products (including sale)
export const getAllProducts = (): Product[] => [...products, ...saleProducts];
