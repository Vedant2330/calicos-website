"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Product } from "@/data/products";

export function ProductDetail({ product }: { product: Product }) {
  const [activeImage, setActiveImage] = useState(0);
  
  const allImages = [product.primaryImage, ...product.galleryImages];

  return (
    <article>
      {/* Breadcrumb / back */}
      <div className="px-page pt-32 lg:pt-40 pb-8">
        <Link
          href="/collection"
          className="inline-flex items-center gap-2 text-body-sm text-ink/70 hover:text-mustard transition-colors"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round">
            <path d="m15 18-6-6 6-6" />
          </svg>
          <span>Back to collection</span>
        </Link>
      </div>

      {/* Hero — gallery + product info */}
      <section className="bg-cream pb-16 lg:pb-24">
        <div className="px-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Gallery */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[4/5] bg-sand overflow-hidden mb-4 rounded-2xl">
                <Image
                  src={allImages[activeImage] || product.primaryImage}
                  alt={`${product.name} — view ${activeImage + 1}`}
                  fill
                  quality={90}
                  priority
                  sizes="(min-width: 1024px) 55vw, 90vw"
                  className="object-cover"
                />
              </div>
              {allImages.length > 1 && (
                <div className="grid grid-cols-3 gap-3">
                  {allImages.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={`relative aspect-square bg-sand overflow-hidden transition-opacity duration-300 rounded-xl ${
                        activeImage === i
                          ? "opacity-100 ring-2 ring-ink"
                          : "opacity-50 hover:opacity-80"
                      }`}
                      aria-label={`View image ${i + 1}`}
                      type="button"
                    >
                      <Image
                        src={img}
                        alt=""
                        fill
                        quality={70}
                        sizes="120px"
                        className="object-cover rounded-xl"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product info */}
            <div className="lg:col-span-5 lg:pt-8">
              <p className="text-eyebrow text-warm-gray mb-4">
                {product.collection}
              </p>
              <h1 className="text-display-lg text-ink font-serif font-bold mb-4">
                {product.name}
              </h1>
              <p className="text-body-lg text-ink/70 mb-8">
                {product.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-caption text-ink/60 px-3 py-1 rounded-full bg-ink/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col gap-3">
                <a
                  href="https://instagram.com/calicosdim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Enquire on Instagram
                </a>
                <p className="text-caption text-warm-gray text-center">
                  DM to order • We reply within the hour
                </p>
              </div>

              {/* Specs */}
              <dl className="space-y-4 pt-10 mt-10 border-t border-ink/10">
                <div className="flex justify-between gap-4">
                  <dt className="text-caption text-warm-gray uppercase tracking-widest">
                    Category
                  </dt>
                  <dd className="text-body-sm text-ink">
                    {product.category}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-caption text-warm-gray uppercase tracking-widest">
                    Collection
                  </dt>
                  <dd className="text-body-sm text-ink">
                    {product.collection}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Related — other pieces in the collection */}
      <RelatedProducts currentId={product.id} />
    </article>
  );
}

function RelatedProducts({ currentId }: { currentId: string }) {
  const { products } = require("@/data/products") as typeof import("@/data/products");
  const others = products.filter((p) => p.id !== currentId).slice(0, 3);

  if (others.length === 0) return null;

  return (
    <section className="bg-sand border-t border-ink/10">
      <div className="px-page py-24 lg:py-40">
        <div className="flex items-baseline justify-between mb-12 lg:mb-16">
          <h2 className="text-display-md text-ink font-serif font-bold">Other pieces</h2>
          <Link
            href="/collection"
            className="text-body-sm text-ink/70 hover:text-mustard transition-colors hidden sm:inline-block"
          >
            See all →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 lg:gap-x-8 gap-y-12">
          {others.map((p: Product) => (
            <Link
              key={p.id}
              href={`/collection/${p.id}`}
              className="group block"
            >
              <div className="relative aspect-[4/5] bg-cream overflow-hidden mb-5 rounded-2xl">
                <Image
                  src={p.primaryImage}
                  alt={p.name}
                  fill
                  quality={85}
                  sizes="(min-width: 768px) 30vw, 90vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="mb-1">
                <h3 className="text-headline text-ink font-serif group-hover:text-mustard transition-colors duration-300">
                  {p.name}
                </h3>
              </div>
              <p className="text-caption text-warm-gray">{p.collection}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
