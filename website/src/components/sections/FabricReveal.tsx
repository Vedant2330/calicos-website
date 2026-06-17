"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * FabricReveal — multi-stage "from cloth to collection" scroll-driven reveal.
 *
 * Three stages:
 *  1. Cloth stage (0-33%): fabric swatches in a row appear staggered
 *  2. Pattern fold (33-66%): indigo block-print pattern splits/folds
 *     away to reveal the first collection photo underneath
 *  3. Collection stage (66-100%): the hero photo transitions into a
 *     row of 3 product images with text labels sliding in
 *
 * Cool animations:
 *  - Stage 1 swatches: scale 0.6 → 1.0 + opacity 0 → 1, staggered
 *  - Stage 2 fabric panels: translateX outward + rotateY 0 → ±10deg
 *  - Stage 3 hero: scale 1.06 → 1.0 + fade
 *  - Stage 3 products: translateY 40px → 0 + opacity 0 → 1, staggered
 *  - Text labels: translateY 20px → 0 + opacity 0 → 1
 *  - Scroll progress dots on the right (3 stages)
 */
export function FabricReveal() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setProgress(1);
      return;
    }

    let raf = 0;
    function onScroll() {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const total = rect.height - vh;
        const scrolled = -rect.top;
        const p = Math.max(0, Math.min(1, scrolled / total));
        setProgress(p);
      });
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Stage 1 — cloth swatches (0 to 0.33)
  const stage1 = Math.min(1, Math.max(0, (progress - 0) / 0.28));
  // Stage 2 — fabric fold (0.30 to 0.55)
  const stage2 = Math.min(1, Math.max(0, (progress - 0.30) / 0.25));
  // Stage 3 — collection products (0.55 to 1.0)
  const stage3 = Math.min(1, Math.max(0, (progress - 0.55) / 0.35));

  // Fabric panels (left + right)
  const fabricLeftX = -100 * stage2;
  const fabricRightX = 100 * stage2;
  const fabricLeftRotate = -10 * stage2;
  const fabricRightRotate = 10 * stage2;

  // Underlying hero photo
  const heroOpacity = stage2 > 0.1 ? Math.min(1, (stage2 - 0.1) / 0.3) : 0;
  const heroScale = 1.06 - 0.06 * stage2;

  return (
    <section
      ref={sectionRef}
      aria-label="Fabric Reveal — from cloth to collection"
      className="relative bg-cream"
      style={{ height: "280vh" }}
    >
      {/* Sticky container — full viewport */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Stage 1: cloth swatches (full row across screen) */}
        <div
          className="absolute inset-0 flex items-center justify-center px-page"
          style={{
            opacity: 1 - stage2 * 0.7,
            transform: `scale(${1 - stage2 * 0.05})`,
            transition: "opacity 200ms linear, transform 200ms linear",
            pointerEvents: stage2 > 0.5 ? "none" : "auto",
          }}
        >
          <div className="w-full max-w-wide">
            <p
              className="text-eyebrow text-ink-faint text-center mb-8"
              style={{
                opacity: stage1,
                transform: `translateY(${(1 - stage1) * 12}px)`,
                transition: "opacity 300ms, transform 300ms",
              }}
            >
              The cloth
            </p>
            <h2
              className="text-display-md text-ink italic text-center mb-16"
              style={{
                opacity: stage1,
                transform: `translateY(${(1 - stage1) * 16}px)`,
                transition: "opacity 300ms, transform 300ms",
              }}
            >
              Five fabrics,{" "}
              <span className="text-ink-soft">five stories.</span>
            </h2>
            <div className="grid grid-cols-5 gap-3 lg:gap-6">
              {SWATCHES.map((s, i) => (
                <div
                  key={s.name}
                  className="relative"
                  style={{
                    opacity: Math.max(0, stage1 - i * 0.12),
                    transform: `scale(${0.6 + Math.max(0, stage1 - i * 0.12) * 0.4}) translateY(${(1 - Math.max(0, stage1 - i * 0.12)) * 40}px)`,
                    transition: "opacity 200ms, transform 200ms",
                  }}
                >
                  <div
                    className="aspect-square overflow-hidden"
                    style={{ borderRadius: "16px" }}
                  >
                    <div
                      className="w-full h-full"
                      style={{
                        background: `linear-gradient(135deg, ${s.from}, ${s.to})`,
                      }}
                    >
                      {/* Hand-drawn pattern overlay */}
                      <div
                        className="w-full h-full"
                        style={{
                          backgroundImage: s.pattern,
                          backgroundSize: "32px 32px",
                          backgroundRepeat: "repeat",
                          mixBlendMode: "multiply",
                          opacity: 0.4,
                        }}
                      />
                    </div>
                  </div>
                  <p className="text-caption text-ink text-center mt-3 uppercase tracking-widest">
                    {s.name}
                  </p>
                  <p className="text-caption text-ink-faint text-center mt-1">
                    {s.origin}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stage 2 + 3: fabric fold → photo + products */}
        <div
          className="absolute inset-0"
          style={{
            opacity: stage2 > 0.05 ? 1 : 0,
            transition: "opacity 200ms linear",
          }}
        >
          <div
            className="absolute inset-0"
            style={{ perspective: "1800px", perspectiveOrigin: "50% 50%" }}
          >
            {/* Hero photo (revealed photo) */}
            <div
              className="absolute inset-0"
              style={{
                opacity: heroOpacity,
                transform: `scale(${heroScale})`,
                transition: "opacity 200ms linear",
              }}
            >
              <Image
                src="/images/editorial/01-kurta-jeans.jpg"
                alt="A young woman in an indigo block-print kurta paired with jeans, mid-laugh in a sunlit garden. The first Calicos collection."
                fill
                quality={88}
                sizes="100vw"
                className="object-cover img-editorial"
                style={{ objectPosition: "center 30%" }}
              />
            </div>

            {/* Left fabric panel */}
            <div
              className="absolute top-0 left-0 w-1/2 h-full"
              style={{
                transformOrigin: "left center",
                transform: `translateX(${fabricLeftX}%) rotateY(${fabricLeftRotate}deg)`,
                transition: "transform 100ms linear",
                willChange: "transform",
                backfaceVisibility: "hidden",
              }}
            >
              <FabricPanel side="left" />
            </div>

            {/* Right fabric panel */}
            <div
              className="absolute top-0 right-0 w-1/2 h-full"
              style={{
                transformOrigin: "right center",
                transform: `translateX(${fabricRightX}%) rotateY(${fabricRightRotate}deg)`,
                transition: "transform 100ms linear",
                willChange: "transform",
                backfaceVisibility: "hidden",
              }}
            >
              <FabricPanel side="right" />
            </div>

            {/* Center seam shadow during fold */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(26,20,16,0.18), transparent 70%)",
                opacity: 1 - stage2,
                transition: "opacity 200ms linear",
              }}
            />
          </div>

          {/* Stage 3 overlay: caption + product row at bottom */}
          <div
            className="absolute bottom-0 left-0 right-0 z-10"
            style={{
              opacity: stage3,
              transform: `translateY(${(1 - stage3) * 40}px)`,
              transition: "opacity 400ms var(--ease-out-soft), transform 400ms var(--ease-out-soft)",
            }}
          >
            <div className="px-page pb-20 lg:pb-28">
              <p
                className="text-eyebrow text-cream/90 mb-4 text-center"
                style={{
                  opacity: stage3,
                  transform: `translateY(${(1 - stage3) * 12}px)`,
                  transition: "opacity 400ms var(--ease-out-soft), transform 400ms var(--ease-out-soft)",
                }}
              >
                From cloth to collection
              </p>
              <p
                className="text-display-md text-cream italic text-center mb-12 lg:mb-16"
                style={{
                  opacity: stage3,
                  transform: `translateY(${(1 - stage3) * 20}px)`,
                  transition: "opacity 500ms var(--ease-out-soft), transform 500ms var(--ease-out-soft)",
                }}
              >
                Block-printed by hand. Worn with intention.
              </p>

              {/* Three product images row */}
              <div className="grid grid-cols-3 gap-4 lg:gap-8 max-w-4xl mx-auto">
                {REVEAL_PRODUCTS.map((p, i) => (
                  <a
                    key={p.slug}
                    href={`/collection/${p.slug}`}
                    className="group block"
                    style={{
                      opacity: stage3,
                      transform: `translateY(${(1 - stage3) * (30 + i * 10)}px)`,
                      transition: `opacity 600ms var(--ease-out-soft) ${i * 100}ms, transform 600ms var(--ease-out-soft) ${i * 100}ms`,
                    }}
                  >
                    <div
                      className="relative aspect-[4/5] overflow-hidden"
                      style={{ borderRadius: "20px" }}
                    >
                      <Image
                        src={p.cover}
                        alt={p.name}
                        fill
                        quality={80}
                        sizes="(min-width: 1024px) 25vw, 30vw"
                        className="object-cover img-editorial transition-transform duration-700 group-hover:scale-105"
                        style={{ borderRadius: "20px" }}
                      />
                    </div>
                    <p className="text-caption text-cream/85 text-center mt-3 uppercase tracking-widest">
                      {p.name}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Progress indicator — 3 dots on right */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-10">
          {[
            { label: "Cloth", at: 0.16 },
            { label: "Reveal", at: 0.42 },
            { label: "Collection", at: 0.78 },
          ].map((step, i) => (
            <div
              key={i}
              className="relative"
            >
              <div
                className="w-1.5 h-1.5 rounded-full transition-all duration-500"
                style={{
                  backgroundColor:
                    Math.abs(progress - step.at) < 0.12
                      ? "var(--cream)"
                      : progress > step.at
                      ? "var(--cream)"
                      : "rgba(245,239,224,0.4)",
                  transform: `scale(${Math.abs(progress - step.at) < 0.12 ? 1.6 : 1})`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const SWATCHES = [
  {
    name: "Terracotta",
    origin: "Pochampally",
    from: "#8B2E1F",
    to: "#5C1912",
    pattern:
      "radial-gradient(circle at 20% 30%, rgba(245,239,224,0.3) 0%, transparent 35%), radial-gradient(circle at 70% 60%, rgba(212,160,23,0.3) 0%, transparent 40%)",
  },
  {
    name: "Indigo",
    origin: "Bagru",
    from: "#1E3A5F",
    to: "#0E1F3A",
    pattern:
      "radial-gradient(circle at 30% 40%, rgba(245,239,224,0.25) 0%, transparent 30%), radial-gradient(circle at 80% 70%, rgba(212,160,23,0.2) 0%, transparent 35%)",
  },
  {
    name: "Mustard",
    origin: "Kanchipuram",
    from: "#D4A017",
    to: "#A37E10",
    pattern:
      "radial-gradient(circle at 25% 25%, rgba(139,46,31,0.25) 0%, transparent 30%), radial-gradient(circle at 75% 75%, rgba(245,239,224,0.25) 0%, transparent 35%)",
  },
  {
    name: "Chocolate",
    origin: "Karnataka",
    from: "#5C3A21",
    to: "#3D2613",
    pattern:
      "radial-gradient(circle at 40% 30%, rgba(212,160,23,0.3) 0%, transparent 35%), radial-gradient(circle at 70% 80%, rgba(245,239,224,0.2) 0%, transparent 40%)",
  },
  {
    name: "Ivory",
    origin: "Pune",
    from: "#F5EFE0",
    to: "#E5DEC9",
    pattern:
      "radial-gradient(circle at 30% 30%, rgba(139,46,31,0.15) 0%, transparent 30%), radial-gradient(circle at 70% 70%, rgba(30,58,95,0.15) 0%, transparent 35%)",
  },
];

const REVEAL_PRODUCTS = [
  {
    slug: "terracotta-ikat-kurta",
    name: "Terracotta Ikat",
    cover: "/images/products/terracotta-ikat-kurta/cover.jpg",
  },
  {
    slug: "indigo-blockprint-kurta",
    name: "Indigo Block-Print",
    cover: "/images/products/indigo-blockprint-kurta/cover.jpg",
  },
  {
    slug: "mustard-paisley-sundress",
    name: "Mustard Paisley",
    cover: "/images/products/mustard-paisley-sundress/cover.jpg",
  },
];

function FabricPanel({ side }: { side: "left" | "right" }) {
  // Inline SVG block-print pattern — tileable indigo paisley-floral
  const patternSvg = encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120">
      <rect width="120" height="120" fill="#1E3A5F"/>
      <g fill="#F5EFE0" opacity="0.92">
        <circle cx="30" cy="30" r="6"/>
        <circle cx="90" cy="30" r="6"/>
        <circle cx="30" cy="90" r="6"/>
        <circle cx="90" cy="90" r="6"/>
        <path d="M30 30 L42 22 L48 30 L42 38 Z"/>
        <path d="M90 30 L102 22 L108 30 L102 38 Z"/>
        <path d="M30 90 L42 82 L48 90 L42 98 Z"/>
        <path d="M90 90 L102 82 L108 90 L102 98 Z"/>
        <circle cx="60" cy="60" r="4"/>
        <path d="M55 60 L65 50 L65 70 Z" opacity="0.6"/>
      </g>
      <g fill="#D4A017" opacity="0.7">
        <circle cx="60" cy="10" r="2"/>
        <circle cx="60" cy="110" r="2"/>
        <circle cx="10" cy="60" r="2"/>
        <circle cx="110" cy="60" r="2"/>
      </g>
      <g stroke="#F5EFE0" stroke-width="0.5" fill="none" opacity="0.4">
        <line x1="0" y1="60" x2="120" y2="60"/>
        <line x1="60" y1="0" x2="60" y2="120"/>
      </g>
    </svg>
  `);

  return (
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `url("data:image/svg+xml;utf8,${patternSvg}")`,
        backgroundSize: "240px 240px",
        backgroundRepeat: "repeat",
        backgroundColor: "var(--indigo)",
        transform: side === "right" ? "scaleX(-1)" : "none",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(245,239,224,0.05), transparent 50%, rgba(26,20,16,0.15))",
        }}
      />
    </div>
  );
}
