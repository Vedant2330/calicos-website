"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { products } from "@/data/products";

/**
 * Collection Slider — horizontal product carousel.
 */
export function CollectionSlider() {
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
        <div className="px-page mb-12 lg:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <p className="text-eyebrow text-warm-gray mb-6">The collection</p>
              <h2 className="text-display-lg lg:text-display-xl text-ink font-serif font-bold">
                Hand-block-printed.
                <br />
                <span className="text-ink/70">In Pune.</span>
              </h2>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="text-body text-ink/70 mb-6">
                Drag, swipe, or use the arrows. Every piece is block-printed by hand.
              </p>
              <Link
                href="/collection"
                className="btn btn-secondary inline-flex items-center gap-2"
              >
                <span>See the full collection</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Slider */}
      <div className="relative">
        {/* Edge gradient fades */}
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
        >
          {products.map((product, i) => (
            <ProductSliderCard
              key={product.id}
              product={product}
              index={i}
            />
          ))}
        </div>
      </div>

      {/* Scroll progress bar */}
      <div className="px-page pb-24 lg:pb-32">
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-ink/10 relative overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-ink transition-all duration-300"
              style={{ width: `${Math.max(8, scrollProgress * 100)}%` }}
            />
          </div>
          <p className="text-caption text-warm-gray uppercase tracking-widest tabular-nums min-w-12 text-right">
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
      href={`/collection/${product.id}`}
      className="group flex-none w-[68vw] sm:w-[44vw] md:w-[36vw] lg:w-[28vw] xl:w-[24vw] snap-start"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image with rounded corners */}
      <div className="relative aspect-[4/5] overflow-hidden mb-5 rounded-2xl bg-sand">
        <Image
          src={product.primaryImage}
          alt={product.name}
          fill
          quality={85}
          sizes="(min-width: 1280px) 24vw, (min-width: 1024px) 28vw, (min-width: 640px) 36vw, 68vw"
          className="object-cover transition-transform duration-700"
          style={{
            transform: hovered ? "scale(1.05)" : "scale(1.0)",
          }}
        />
        {/* Top corner mark — index */}
        <div className="absolute top-4 left-4 text-caption text-warm-gray tracking-widest bg-cream/90 backdrop-blur-sm px-2 py-1 rounded-sm">
          № 0{index + 1}
        </div>
      </div>

      {/* Caption */}
      <div className="px-1">
        <div className="mb-2">
          <h3 className="text-headline text-ink font-serif group-hover:text-mustard transition-colors duration-300">
            {product.name}
          </h3>
        </div>
        <p className="text-caption text-warm-gray mb-1">{product.collection}</p>
        <p className="text-body-sm text-ink/70">{product.description}</p>
        {/* Hover-only CTA */}
        <div
          className="overflow-hidden transition-all duration-500"
          style={{
            maxHeight: hovered ? "32px" : "0",
            opacity: hovered ? 1 : 0,
            marginTop: hovered ? "12px" : "0",
          }}
        >
          <span className="text-caption text-mustard uppercase tracking-widest inline-flex items-center gap-2">
            View piece
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
