"use client";

import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";

/**
 * Collection preview — 4 product cards.
 * Real product cards: image + name + brief description.
 */
export function CollectionPreview() {
  return (
    <section aria-label="Collection preview" className="bg-cream">
      <div className="px-page py-24 lg:py-40">
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-20 lg:mb-32">
          <div className="lg:col-span-7">
            <p className="text-eyebrow text-warm-gray mb-6">The collection</p>
            <h2 className="text-display-lg lg:text-display-xl text-ink font-serif font-bold">
              Hand-block-printed
              <br />
              <span className="text-ink/70">in Pune.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 lg:pt-8">
            <p className="text-body text-ink/70 mb-6">
              Every piece is block-printed by hand in small batches. 
              Orders are taken by DM.
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

        {/* Product grid — 2 cols on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 lg:gap-x-8 gap-y-12 lg:gap-y-16">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
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
  return (
    <Link
      href={`/collection/${product.id}`}
      className="group block"
    >
      {/* Image */}
      <div className="relative aspect-[4/5] bg-sand overflow-hidden mb-5 rounded-2xl">
        <Image
          src={product.primaryImage}
          alt={product.name}
          fill
          quality={85}
          sizes="(min-width: 1024px) 22vw, (min-width: 768px) 45vw, 90vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        {/* Index marker */}
        <div className="absolute top-4 right-4 text-caption text-warm-gray tracking-widest bg-cream/90 backdrop-blur-sm px-2 py-1 rounded-sm">
          № 0{index + 1}
        </div>
      </div>

      {/* Caption */}
      <div className="mb-2">
        <h3 className="text-headline text-ink font-serif group-hover:text-mustard transition-colors duration-300">
          {product.name}
        </h3>
      </div>
      <p className="text-caption text-warm-gray mb-1">{product.collection}</p>
      <p className="text-body-sm text-ink/70">{product.description}</p>
    </Link>
  );
}
