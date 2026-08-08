import { Hero } from "@/components/sections/Hero";
import { Header } from "@/components/Header";
import { Featured } from "@/components/sections/Featured";
import { KurtisSpotlight } from "@/components/sections/KurtisSpotlight";
import { SaanjhCollection } from "@/components/sections/Saanjh";
import { BrandStory } from "@/components/sections/BrandStory";
import { Footer } from "@/components/Footer";
import { ProductCatalog } from "@/components/catalog/ProductCatalog";

/**
 * Calicos Landing Page - Rebuilt from scratch
 * Clean, editorial, premium aesthetic
 * 
 * Structure:
 * 1. Hero with integrated header + video background
 * 2. Featured collection grid
 * 3. Raavya (Kurtis) spotlight section
 * 4. Saanjh (Casual Dresses) section
 * 5. Product Catalog
 * 6. Brand story with stats
 * 7. Footer with links
 */
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Featured />
      <KurtisSpotlight />
      <SaanjhCollection />
      <ProductCatalog />
      <BrandStory />
      <Footer />
    </>
  );
}
