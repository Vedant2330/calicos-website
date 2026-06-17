"use client";

import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import { useReveal } from "@/lib/useReveal";

/**
 * Collection preview — 4 product cards.
 * Real product cards: image + name + price + brief description.
 * No "add-to-cart" on the card itself (per DIFFERENTIATION_NOTES.md row 17 —
 * premium pattern: cards show image + name + price; add-to-cart lives on PDP).
 */
export function CollectionPreview() {
  const headerRef = useReveal<HTMLDivElement>();

  return (
    <section aria-label="Collection preview" className="bg-cream">
      <div className="px-page py-24 lg:py-40">
        {/* Section header */}
        <div
          ref={headerRef}
          data-reveal
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-20 lg:mb-32"
        >
          <div className="lg:col-span-7">
            <p className="text-eyebrow text-ink-faint mb-6">The collection</p>
            <h2 className="text-display-lg lg:text-display-xl italic">
              Four pieces,
              <br />
              <span className="text-ink-soft">one fabric story.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 lg:pt-8">
            <p className="text-body text-ink-soft mb-6">
              Every piece in this drop is block-printed by hand in small
              batches in Pune. When a fabric is gone, it&apos;s gone.
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

        {/* Product grid — 2 cols on tablet, 4 on desktop, generous gutters */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 lg:gap-x-8 gap-y-16 lg:gap-y-24">
          {products.map((product, i) => (
            <ProductCard key={product.slug} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  product,
  index,
}: {
  product: (typeof products)[number];
  index: number;
}) {
  const ref = useReveal<HTMLAnchorElement>();

  return (
    <Link
      ref={ref}
      data-reveal
      href={`/collection/${product.slug}`}
      className="group block"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Image */}
      <div className="relative aspect-[4/5] bg-ivory overflow-hidden mb-5">
        {/* Palette placeholder under the image — adds depth */}
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
          quality={82}
          sizes="(min-width: 1024px) 22vw, (min-width: 768px) 45vw, 90vw"
          className="object-cover img-editorial transition-transform duration-700 group-hover:scale-[1.03]"
        />
        {/* Pattern chip */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2">
          <div
            className="w-3 h-3 rounded-full border border-ink/20"
            style={{
              background: `linear-gradient(135deg, ${product.palette.from}, ${product.palette.to})`,
            }}
            aria-hidden="true"
          />
          <span className="text-caption text-ink-soft uppercase tracking-widest">
            {product.pattern.replace("-", " ")}
          </span>
        </div>
        {/* Index marker */}
        <div className="absolute top-4 right-4 text-caption text-ink-faint tracking-widest">
          № 0{index + 1}
        </div>
      </div>

      {/* Caption */}
      <div className="flex items-baseline justify-between gap-4 mb-2">
        <h3 className="text-display-sm text-ink group-hover:italic transition-all duration-500">
          {product.name}
        </h3>
        <span className="text-body-sm text-ink-soft tabular-nums">
          ₹{product.priceINR.toLocaleString("en-IN")}
        </span>
      </div>
      <p className="text-body-sm text-ink-soft">{product.shortDescription}</p>
      {/* Availability — small, plain text, only if not "in stock" */}
      {product.availability !== "in stock" && (
        <p className="text-caption text-ink-faint mt-2">
          {product.availability === "low stock"
            ? "A few left."
            : "Made to order."}
        </p>
      )}
    </Link>
  );
}
