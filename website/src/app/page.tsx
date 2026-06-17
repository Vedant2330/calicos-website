import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { FabricReveal } from "@/components/sections/FabricReveal";
import { CollectionSlider } from "@/components/sections/CollectionSlider";
import { StoryTeaser } from "@/components/sections/StoryTeaser";
import { JournalPreview } from "@/components/sections/JournalPreview";
import { FindUs } from "@/components/sections/FindUs";

/**
 * Calicos homepage.
 * 8 sections per CREATIVE_DIRECTION_V2.md §9.3.
 *
 * Per §9.3.1: hero = model wearing product (NOT founders). Founders in
 * StoryTeaser — compact, supporting role, NOT full-viewport.
 *
 * V2 corrected (2026-06-18):
 * - Hero is a multi-image auto-switching carousel with cool transitions
 * - Collection preview is a horizontal slider (Fashtrend-style)
 * - All cards have rounded 20px corners
 * - Hero section has rounded bottom corners
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <FabricReveal />
      <CollectionSlider />
      <StoryTeaser />
      <JournalPreview />
      <FindUs />
    </>
  );
}
