import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { FabricReveal } from "@/components/sections/FabricReveal";
import { CollectionPreview } from "@/components/sections/CollectionPreview";
import { StoryTeaser } from "@/components/sections/StoryTeaser";
import { JournalPreview } from "@/components/sections/JournalPreview";
import { FindUs } from "@/components/sections/FindUs";

/**
 * Calicos homepage.
 * 8 sections per CREATIVE_DIRECTION_V2.md §9.3.
 *
 * Per §9.3.1: hero = model wearing product (NOT founders). Founders in
 * StoryTeaser — compact, supporting role, NOT full-viewport.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <FabricReveal />
      <CollectionPreview />
      <StoryTeaser />
      <JournalPreview />
      <FindUs />
    </>
  );
}
