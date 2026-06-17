"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type HeroSlide = {
  src: string;
  alt: string;
  eyebrow: string;
  // Ken Burns direction: "in" zooms in, "out" zooms out, "pan-l/r" pans
  motion: "in" | "out" | "pan-l" | "pan-r";
  // Headline per slide
  title: string;
  italic?: string;
  body: string;
};

const slides: HeroSlide[] = [
  {
    src: "/images/editorial/01-kurta-jeans.jpg",
    alt:
      "A young North Indian woman with fair skin wearing an indigo block-print kurta paired with white jeans, mid-laugh in a sunlit garden. Editorial fashion hero.",
    eyebrow: "Pune · Hand-block printed · Est. 2024",
    title: "Calicos.",
    body: "Hand-block-printed kurtas, sundresses & bandanas — made by two friends in Pune. Stitched with a song.",
    motion: "in",
  },
  {
    src: "/images/editorial/02-paisley-market.jpg",
    alt:
      "A young North Indian woman with fair skin in a backless mustard paisley sundress, walking through a sun-drenched market in Pune.",
    eyebrow: "New · Backless drops",
    title: "Worn",
    italic: "backless",
    body: "Backless cuts, hand-block printed, made to order. The summer collection is here.",
    motion: "pan-r",
  },
  {
    src: "/images/editorial/03-backless-terracotta.jpg",
    alt:
      "A young North Indian woman with fair skin in a backless terracotta ikat kurta, profile against a textured mud wall, golden hour light.",
    eyebrow: "Studio · Pune",
    title: "Cloth,",
    italic: "carried",
    body: "From the fabric store in Pune to the flea market stall. Two friends, one slow story.",
    motion: "out",
  },
  {
    src: "/images/editorial/04-indigo-fusion.jpg",
    alt:
      "A young North Indian woman with fair skin in an indigo kurta paired with denim, sitting in a sunlit courtyard, mid-laugh.",
    eyebrow: "Fusion · Kurta + denim",
    title: "East,",
    italic: "west",
    body: "Kurta over jeans. Block-print over indigo dye. The pairing that made us a brand.",
    motion: "pan-l",
  },
  {
    src: "/images/editorial/05-plumeria-backless.jpg",
    alt:
      "A young North Indian woman with fair skin in a backless terracotta kurta, standing in a plumeria grove with flowers falling around her.",
    eyebrow: "Drop 04 · Summer 2026",
    title: "Calicos.",
    body: "Sundresses, kurtas, bandanas — block-printed by hand. The new collection ships in three weeks.",
    motion: "in",
  },
];

const SLIDE_DURATION = 6000; // ms each slide shows

export function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    if (paused) return;

    intervalRef.current = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, SLIDE_DURATION);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused]);

  return (
    <section
      aria-label="Hero"
      className="relative w-full h-[100svh] min-h-[640px] overflow-hidden bg-cream"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{
        // Rounded bottom corners per user override
        borderBottomLeftRadius: "28px",
        borderBottomRightRadius: "28px",
      }}
    >
      {/* Slides — cross-fade stack */}
      <div className="absolute inset-0 overflow-hidden" style={{ borderBottomLeftRadius: "28px", borderBottomRightRadius: "28px" }}>
        {slides.map((slide, i) => (
          <Slide
            key={i}
            slide={slide}
            active={i === active}
            isFirst={i === 0}
          />
        ))}
      </div>

      {/* Content overlay */}
      <div className="relative z-10 h-full flex flex-col items-center justify-between px-page pt-28 pb-12 lg:pt-32 lg:pb-16">
        {/* Top spacer — keeps content centered */}
        <div className="flex-1" />

        {/* Centered text — per active slide */}
        <div className="flex flex-col items-center text-center w-full max-w-3xl">
          <p
            key={`eyebrow-${active}`}
            className="text-eyebrow text-cream/85 mb-8 anim-fade-in"
          >
            {slides[active].eyebrow}
          </p>
          <h1
            key={`title-${active}`}
            className="text-display-xl text-cream anim-reveal-up"
          >
            {slides[active].italic ? (
              <>
                {slides[active].title}{" "}
                <span className="font-devanagari text-mustard not-italic">
                  {slides[active].italic}
                </span>
              </>
            ) : (
              <span className="italic">{slides[active].title}</span>
            )}
          </h1>
          <p
            key={`body-${active}`}
            className="text-body-lg text-cream/90 mt-8 max-w-prose anim-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            {slides[active].body}
          </p>
          <div
            key={`cta-${active}`}
            className="mt-12 anim-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <a href="/collection" className="btn bg-cream text-ink hover:bg-mustard">
              See the collection
            </a>
          </div>
        </div>

        {/* Bottom — slide indicators + scroll cue */}
        <div className="flex flex-col items-center gap-6">
          {/* Slide dots — clickable */}
          <div className="flex items-center gap-2" role="tablist" aria-label="Hero slides">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="group relative h-1 transition-all duration-500 rounded-full overflow-hidden"
                style={{
                  width: i === active ? "32px" : "16px",
                  backgroundColor:
                    i === active ? "rgba(245,239,224,0.4)" : "rgba(245,239,224,0.2)",
                }}
                role="tab"
                aria-selected={i === active}
                aria-label={`Go to slide ${i + 1}`}
              >
                {i === active && (
                  <span
                    className="absolute inset-y-0 left-0 bg-cream anim-slide-progress"
                    key={`progress-${active}-${paused ? "p" : "r"}`}
                    style={
                      paused
                        ? { width: "0%" }
                        : { animation: `slideFill ${SLIDE_DURATION}ms linear forwards` }
                    }
                  />
                )}
              </button>
            ))}
          </div>

          <p className="text-caption text-cream/70 uppercase tracking-widest">
            Scroll to begin
          </p>
        </div>
      </div>
    </section>
  );
}

function Slide({
  slide,
  active,
  isFirst,
}: {
  slide: HeroSlide;
  active: boolean;
  isFirst: boolean;
}) {
  const getMotionTransform = (): string => {
    switch (slide.motion) {
      case "in":
        return active ? "scale(1.08)" : "scale(1.00)";
      case "out":
        return active ? "scale(1.00)" : "scale(1.10)";
      case "pan-l":
        return active ? "scale(1.04) translateX(2%)" : "scale(1.04) translateX(-3%)";
      case "pan-r":
        return active ? "scale(1.04) translateX(-2%)" : "scale(1.04) translateX(3%)";
    }
  };

  const getInitialTransform = (): string => {
    switch (slide.motion) {
      case "in":
        return "scale(1.04)";
      case "out":
        return "scale(1.04)";
      case "pan-l":
        return "scale(1.04) translateX(-2%)";
      case "pan-r":
        return "scale(1.04) translateX(2%)";
    }
  };

  return (
    <div
      className="absolute inset-0"
      style={{
        opacity: active ? 1 : 0,
        transition: "opacity 1400ms var(--ease-out-soft)",
        pointerEvents: active ? "auto" : "none",
      }}
      aria-hidden={!active}
    >
      <Image
        src={slide.src}
        alt={slide.alt}
        fill
        priority={isFirst}
        quality={88}
        sizes="100vw"
        className="object-cover"
        style={{
          transform: active
            ? getMotionTransform()
            : getInitialTransform(),
          transition: "transform 8000ms var(--ease-out-soft)",
          objectPosition: "center 30%",
        }}
      />
      {/* Subtle gradient for text legibility */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(26,20,16,0.25) 0%, rgba(26,20,16,0) 22%, rgba(26,20,16,0) 55%, rgba(26,20,16,0.50) 100%)",
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
  );
}
