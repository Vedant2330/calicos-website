"use client";

import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import { useReveal } from "@/lib/useReveal";

/**
 * /collection — full editorial grid of all products.
 * Filter + sort will be added in a later phase (per CREATIVE_DIRECTION_V2).
 */
export function CollectionGrid() {
  const headerRef = useReveal<HTMLDivElement>();

  return (
    <article>
      {/* Header */}
      <section className="bg-cream pt-32 lg:pt-40">
        <div ref={headerRef} data-reveal className="px-page pb-16 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="text-eyebrow text-ink-faint mb-6">The collection</p>
              <h1 className="text-display-xl italic">
                Four pieces.
                <br />
                <span className="text-ink-soft">One fabric story.</span>
              </h1>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 lg:pt-4">
              <p className="text-body-lg text-ink-soft">
                Every piece in the current drop is block-printed by hand
                in small batches in Pune. When a fabric is gone, it&apos;s
                gone. Orders are taken by DM — we&apos;ll reply within the hour.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-cream pb-24 lg:pb-40">
        <div className="px-page">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 lg:gap-x-8 gap-y-20 lg:gap-y-24">
            {products.map((product, i) => (
              <ProductCard key={product.slug} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>
    </article>
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
      <div className="relative aspect-[4/5] bg-ivory overflow-hidden mb-5">
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
        <div className="absolute top-4 left-4 text-caption text-ink-faint tracking-widest">
          № 0{index + 1}
        </div>
      </div>

      <div className="flex items-baseline justify-between gap-4 mb-2">
        <h2 className="text-display-sm text-ink group-hover:italic transition-all duration-500">
          {product.name}
        </h2>
        <span className="text-body-sm text-ink-soft tabular-nums">
          ₹{product.priceINR.toLocaleString("en-IN")}
        </span>
      </div>
      <p className="text-body-sm text-ink-soft">{product.shortDescription}</p>
    </Link>
  );
}
