"use client";

import { useReveal } from "@/lib/useReveal";

/**
 * Manifesto — the brand promise, declared.
 * Single oversized sentence on a warm terracotta band. Devanagari follow-line.
 */
export function Manifesto() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section
      aria-label="Brand manifesto"
      className="bg-terracotta text-cream"
    >
      <div ref={ref} data-reveal className="px-page py-32 lg:py-48">
        <div className="max-w-wide mx-auto text-center">
          <p className="text-eyebrow text-cream/65 mb-12">The promise</p>
          <h2 className="text-display-lg lg:text-display-xl text-cream italic">
            “Dressing like life has a{" "}
            <span className="font-devanagari text-mustard not-italic">
              Bollywood soundtrack
            </span>
            .”
          </h2>
          <p className="text-body-lg text-cream/85 mt-16 max-w-prose mx-auto">
            Two friends, one fabric store in Pune, and a stubborn belief
            that the clothes on your back should feel like the music in
            your room — easy to live in, impossible to fake.
          </p>
          <p className="text-devanagari text-cream/85 mt-12 text-body">
            जैसे ज़िन्दगी का अपना साउंडट्रैक हो।
          </p>
        </div>
      </div>
    </section>
  );
}
