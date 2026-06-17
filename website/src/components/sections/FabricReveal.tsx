"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/**
 * Fabric Reveal (Concept B) — CSS-only 3D fold, no WebGL.
 * Pattern folds away on scroll to reveal the photo underneath.
 * The "reveal photo" is the same terracotta-ikat-kurta cover image
 * (model wearing the product — not founders).
 */
export function FabricReveal() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);
  const captionRef = useReveal<HTMLDivElement>();

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setProgress(1); // Skip animation
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

  // Map progress to transforms
  const fabricLeftX = progress < 0.5 ? -100 * (progress / 0.5) : -100;
  const fabricRightX = progress < 0.5 ? 100 * (progress / 0.5) : 100;
  const fabricLeftRotate = progress < 0.5 ? -10 * (progress / 0.5) : -10;
  const fabricRightRotate = progress < 0.5 ? 10 * (progress / 0.5) : 10;
  const photoScale = 1 + 0.04 * Math.max(0, (progress - 0.3) / 0.7);
  const photoOpacity = progress > 0.1 ? Math.min(1, (progress - 0.1) / 0.3) : 0;

  return (
    <section
      ref={sectionRef}
      aria-label="Fabric Reveal — from cloth to collection"
      className="relative bg-cream"
      style={{ height: "220vh" }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Perspective container */}
        <div
          className="absolute inset-0"
          style={{ perspective: "1800px", perspectiveOrigin: "50% 50%" }}
        >
          {/* Underlying photo (revealed as fabric parts) */}
          <div
            className="absolute inset-0"
            style={{
              opacity: photoOpacity,
              transform: `scale(${photoScale})`,
              transition: "opacity 200ms linear",
            }}
          >
            <Image
              src="/images/products/terracotta-ikat-kurta/cover.jpg"
              alt="A young woman in a terracotta ikat kurta, the first piece of the Calicos collection"
              fill
              quality={88}
              sizes="100vw"
              className="object-cover img-editorial"
              style={{ objectPosition: "center 30%" }}
            />
          </div>

          {/* Left fabric half — tileable indigo block-print */}
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

          {/* Right fabric half — mirror */}
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
              opacity: progress < 0.5 ? 1 : 0,
              transition: "opacity 200ms linear",
            }}
          />
        </div>

        {/* Caption after the reveal completes */}
        <div
          ref={captionRef}
          data-reveal
          className="absolute bottom-12 left-0 right-0 px-page z-10"
          style={{
            opacity: progress > 0.6 ? 1 : 0,
            transform: `translateY(${progress > 0.6 ? 0 : 20}px)`,
            transition: "opacity 600ms var(--ease-out-soft), transform 600ms var(--ease-out-soft)",
          }}
        >
          <div className="max-w-narrow mx-auto text-center">
            <p className="text-eyebrow text-cream/90 mb-3 drop-shadow-md">
              From cloth to collection
            </p>
            <p className="text-display-sm text-cream italic drop-shadow-md">
              Block-printed by hand. Worn with intention.
            </p>
          </div>
        </div>

        {/* Progress indicator — 3 dots on right */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-10">
          {[0, 0.5, 1].map((step, i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full transition-all duration-500"
              style={{
                backgroundColor:
                  Math.abs(progress - step) < 0.15
                    ? "var(--cream)"
                    : "rgba(245,239,224,0.4)",
                transform: `scale(${Math.abs(progress - step) < 0.15 ? 1.6 : 1})`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

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

// Local hook copy (avoids circular import from /lib/useReveal)
function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      el.classList.add("is-visible");
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}
