"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { products } from "@/data/products";
import { useReveal } from "@/lib/useReveal";

/**
 * Collection Slider — Fashtrend-style horizontal product carousel.
 *
 * Features:
 * - 4-7+ product cards in a single row, scrollable via drag/swipe + buttons
 * - CSS scroll-snap for natural card-by-card feel
 * - Big arrow buttons (left/right) on desktop
 * - Snap-to-nearest card after scroll
 * - Each card has the 20px rounded image frame
 * - Scroll progress bar at bottom
 * - "See the full collection" link
 */
export function CollectionSlider() {
  const headerRef = useReveal<HTMLDivElement>();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const progress = max > 0 ? el.scrollLeft / max : 0;
    setScrollProgress(progress);
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft < max - 8);
  };

  useEffect(() => {
    updateScrollState();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = Math.min(el.clientWidth * 0.8, 420);
    el.scrollBy({ left: dir * cardWidth, behavior: "smooth" });
  };

  return (
    <section aria-label="Collection — horizontal product slider" className="bg-cream">
      <div className="pt-20 lg:pt-32 pb-12 lg:pb-16">
        {/* Header */}
        <div
          ref={headerRef}
          data-reveal
          className="px-page mb-12 lg:mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <p className="text-eyebrow text-ink-faint mb-6">The collection</p>
              <h2 className="text-display-lg lg:text-display-xl italic">
                Seven pieces.
                <br />
                <span className="text-ink-soft">One fabric story.</span>
              </h2>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="text-body text-ink-soft mb-6">
                Drag, swipe, or use the arrows. Every piece is block-printed
                by hand in small batches in Pune.
              </p>
              <Link
                href="/collection"
                className="btn-ghost inline-flex items-center gap-2"
              >
                <span className="link-underline-center">See the full collection</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Slider — bleeds full width, only the cards have side padding */}
      <div className="relative">
        {/* Edge gradient fades (left/right) for a polished feel */}
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 lg:w-24 z-10"
          style={{
            background: "linear-gradient(to right, var(--cream), transparent)",
          }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 lg:w-24 z-10"
          style={{
            background: "linear-gradient(to left, var(--cream), transparent)",
          }}
          aria-hidden="true"
        />

        {/* Left/right arrow buttons — desktop only */}
        <button
          onClick={() => scrollBy(-1)}
          disabled={!canScrollLeft}
          className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center bg-cream border border-ink rounded-full shadow-md transition-all duration-300 hover:bg-ink hover:text-cream disabled:opacity-0 disabled:pointer-events-none"
          aria-label="Scroll products left"
          type="button"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <button
          onClick={() => scrollBy(1)}
          disabled={!canScrollRight}
          className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center bg-cream border border-ink rounded-full shadow-md transition-all duration-300 hover:bg-ink hover:text-cream disabled:opacity-0 disabled:pointer-events-none"
          aria-label="Scroll products right"
          type="button"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>

        {/* Scrolling track */}
        <div
          ref={scrollRef}
          className="flex gap-6 lg:gap-8 overflow-x-auto pb-12 lg:pb-16 snap-x snap-mandatory"
          style={{
            scrollbarWidth: "none",
            paddingLeft: "max(24px, calc((100vw - 1440px) / 2 + 24px))",
            paddingRight: "max(24px, calc((100vw - 1440px) / 2 + 24px))",
            scrollBehavior: "smooth",
          }}
          // Hide scrollbar across browsers
        >
          {products.map((product, i) => (
            <ProductSliderCard
              key={product.slug}
              product={product}
              index={i}
            />
          ))}
        </div>
      </div>

      {/* Scroll progress bar */}
      <div className="px-page pb-24 lg:pb-32">
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-hairline relative overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-ink transition-all duration-300"
              style={{ width: `${Math.max(8, scrollProgress * 100)}%` }}
            />
          </div>
          <p className="text-caption text-ink-faint uppercase tracking-widest tabular-nums min-w-12 text-right">
            {Math.round(scrollProgress * 100)}%
          </p>
        </div>
      </div>
    </section>
  );
}

function ProductSliderCard({
  product,
  index,
}: {
  product: (typeof products)[number];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/collection/${product.slug}`}
      className="group flex-none w-[68vw] sm:w-[44vw] md:w-[36vw] lg:w-[28vw] xl:w-[24vw] snap-start"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-reveal
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      {/* Image with rounded corners */}
      <div
        className="relative aspect-[4/5] overflow-hidden mb-5"
        style={{ borderRadius: "20px" }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom right, ${product.palette.from}, ${product.palette.to})`,
            opacity: 0.18,
          }}
        />
        <Image
          src={product.cover}
          alt={product.name}
          fill
          quality={85}
          sizes="(min-width: 1280px) 24vw, (min-width: 1024px) 28vw, (min-width: 640px) 36vw, 68vw"
          className="object-cover img-editorial"
          style={{
            borderRadius: "20px",
            transform: hovered ? "scale(1.05)" : "scale(1.0)",
            transition: "transform 800ms var(--ease-out-soft)",
          }}
        />
        {/* Top corner mark — index */}
        <div className="absolute top-4 left-4 text-caption text-ink-faint tracking-widest bg-cream/85 backdrop-blur-sm px-2 py-1 rounded-sm">
          № 0{index + 1}
        </div>
        {/* Pattern chip */}
        <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-cream/85 backdrop-blur-sm px-2.5 py-1 rounded-sm">
          <div
            className="w-2.5 h-2.5 rounded-full border border-ink/30"
            style={{
              background: `linear-gradient(135deg, ${product.palette.from}, ${product.palette.to})`,
            }}
            aria-hidden="true"
          />
          <span className="text-caption text-ink-soft uppercase tracking-widest">
            {product.pattern.replace("-", " ")}
          </span>
        </div>
        {/* Availability badge */}
        {product.availability !== "in stock" && (
          <div className="absolute top-4 right-4 text-caption text-cream bg-ink/80 backdrop-blur-sm px-2.5 py-1 rounded-sm uppercase tracking-widest">
            {product.availability === "low stock" ? "Few left" : "Made to order"}
          </div>
        )}
      </div>

      {/* Caption — outside the rounded image */}
      <div className="px-1">
        <div className="flex items-baseline justify-between gap-4 mb-2">
          <h3 className="text-display-sm text-ink group-hover:italic transition-all duration-500">
            {product.name}
          </h3>
          <span className="text-body-sm text-ink-soft tabular-nums shrink-0">
            ₹{product.priceINR.toLocaleString("en-IN")}
          </span>
        </div>
        <p className="text-body-sm text-ink-soft">{product.shortDescription}</p>
        {/* Hover-only CTA */}
        <div
          className="overflow-hidden transition-all duration-500"
          style={{
            maxHeight: hovered ? "32px" : "0",
            opacity: hovered ? 1 : 0,
            marginTop: hovered ? "12px" : "0",
          }}
        >
          <span className="text-caption text-terracotta uppercase tracking-widest inline-flex items-center gap-2">
            View piece
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
