"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/**
 * Hero (Concept C) — V2 corrected per §9.3.1:
 *   Hero = model wearing the product. NOT the founders. NEVER the founders.
 *   Hero photograph is a generic young South Asian woman in a Calicos kurta,
 *   in a garden setting with foliage, with jhumkas. AI-generated per §10.1 row 1.
 */
export function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      aria-label="Hero"
      className="relative w-full h-[100svh] min-h-[640px] overflow-hidden bg-cream"
    >
      {/* Background photograph — full bleed, Ken Burns */}
      <div className="absolute inset-0">
        <Image
          src="/images/editorial/hero.jpg"
          alt="A young woman in a hand-block-printed terracotta kurta laughing in a sunlit garden, with plumeria flowers and bamboo foliage. Generic editorial fashion photograph."
          fill
          priority
          quality={88}
          sizes="100vw"
          className="object-cover"
          style={{
            transform: loaded ? "scale(1.06)" : "scale(1.00)",
            transition: "transform 14s var(--ease-out-soft)",
            objectPosition: "center 30%",
          }}
        />
        {/* Subtle gradient — only on edges, center transparent */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(26,20,16,0.20) 0%, rgba(26,20,16,0) 25%, rgba(26,20,16,0) 60%, rgba(26,20,16,0.45) 100%)",
          }}
        />
        {/* Warm film grain */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/></filter><rect width='200' height='200' filter='url(%23n)' opacity='0.5'/></svg>\")",
            opacity: 0.05,
            mixBlendMode: "overlay",
          }}
        />
      </div>

      {/* Content overlay — three-zone premium layout */}
      <div className="relative z-10 h-full flex flex-col items-center justify-between px-page pt-28 pb-12 lg:pt-32 lg:pb-16">
        {/* Zone 1 — top spacer */}
        <div className="flex-1" />

        {/* Zone 2 — middle: wordmark + headline */}
        <div className="flex flex-col items-center text-center w-full max-w-3xl">
          <p
            className="text-eyebrow text-cream/85 mb-8 anim-fade-in"
            style={{ animationDelay: "0.2s", animationFillMode: "both" }}
          >
            Pune · Hand-block printed · Est. 2024
          </p>
          <h1
            className="text-display-xl text-cream anim-reveal-up"
            style={{ animationDelay: "0.5s", animationFillMode: "both" }}
          >
            <span className="italic">Calicos.</span>
          </h1>
          <p
            className="text-body-lg text-cream/90 mt-8 max-w-prose anim-reveal-up"
            style={{ animationDelay: "1.1s", animationFillMode: "both" }}
          >
            Hand-block-printed kurtas, sundresses & bandanas. Made by two friends in Pune. Stitched with a song.
          </p>
        </div>

        {/* Zone 3 — bottom: scroll cue */}
        <div
          className="flex flex-col items-center gap-4 anim-fade-in"
          style={{ animationDelay: "1.6s", animationFillMode: "both" }}
        >
          <p className="text-caption text-cream/70 uppercase tracking-widest">
            Begin
          </p>
          <div
            className="w-px h-12 bg-cream/60 anim-pulse-line"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
