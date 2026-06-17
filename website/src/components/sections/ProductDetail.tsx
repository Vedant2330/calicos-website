"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Product } from "@/data/products";
import { useCart } from "@/lib/cart";

function ChevronLeftIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

export function ProductDetail({ product }: { product: Product }) {
  const [activeImage, setActiveImage] = useState(0);
  const [activeColor, setActiveColor] = useState(product.colors[0].name);
  const [activeSize, setActiveSize] = useState<string | null>(null);
  const [qty, setQty] = useState(1);
  const [openAccordion, setOpenAccordion] = useState<string | null>("fit");
  const [adding, setAdding] = useState(false);

  const add = useCart((s) => s.add);
  const openDrawer = useCart((s) => s.openDrawer);

  const canAdd = !!activeSize;
  const pricePaise = product.priceINR * 100;

  const handleAdd = async () => {
    if (!canAdd || adding) return;
    setAdding(true);
    add({
      slug: product.slug,
      name: product.name,
      color: activeColor,
      size: activeSize!,
      price: pricePaise,
      priceDisplay: `₹${product.priceINR.toLocaleString("en-IN")}`,
      image: product.gallery[0],
      qty,
    });
    // Brief "added" feedback animation — commerce timing (fast)
    setTimeout(() => setAdding(false), 400);
  };

  return (
    <article>
      {/* Breadcrumb / back */}
      <div className="px-page pt-32 lg:pt-40 pb-8">
        <Link
          href="/collection"
          className="inline-flex items-center gap-2 text-body-sm text-ink-soft link-underline"
        >
          <ChevronLeftIcon className="w-3.5 h-3.5" />
          <span>Back to the collection</span>
        </Link>
      </div>

      {/* Hero — gallery + product info */}
      <section className="bg-cream pb-16 lg:pb-24">
        <div className="px-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Gallery */}
            <div className="lg:col-span-7">
              <div
                className="relative aspect-[4/5] bg-ivory overflow-hidden mb-4"
                style={{ borderRadius: "20px" }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to bottom right, ${product.palette.from}, ${product.palette.to})`,
                    opacity: 0.15,
                  }}
                />
                <Image
                  src={product.gallery[activeImage]}
                  alt={`${product.name} — view ${activeImage + 1}`}
                  fill
                  quality={88}
                  priority
                  sizes="(min-width: 1024px) 55vw, 90vw"
                  className="object-cover img-editorial"
                  style={{ borderRadius: "20px" }}
                />
              </div>
              <div className="grid grid-cols-3 gap-3">
                {product.gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`relative aspect-square bg-ivory overflow-hidden transition-opacity duration-300 ${
                      activeImage === i
                        ? "opacity-100"
                        : "opacity-50 hover:opacity-80"
                    }`}
                    style={{ borderRadius: "12px" }}
                    aria-label={`View image ${i + 1}`}
                    aria-pressed={activeImage === i}
                    type="button"
                  >
                    <Image
                      src={img}
                      alt=""
                      fill
                      quality={70}
                      sizes="120px"
                      className="object-cover"
                      style={{ borderRadius: "12px" }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product info */}
            <div className="lg:col-span-5 lg:pt-8">
              <p className="text-eyebrow text-ink-faint mb-4">
                {product.drop} · {product.availability}
              </p>
              <h1 className="text-display-lg italic mb-4">{product.name}</h1>
              <p className="text-body-lg text-ink-soft mb-8">
                {product.shortDescription}
              </p>
              <p className="text-display-md text-ink mb-12 tabular-nums">
                ₹{product.priceINR.toLocaleString("en-IN")}
              </p>

              {/* Color swatches */}
              {product.colors.length > 0 && (
                <div className="mb-8">
                  <div className="flex items-baseline justify-between mb-3">
                    <p className="text-caption text-ink-faint uppercase tracking-widest">
                      Color
                    </p>
                    <p className="text-caption text-ink-soft">
                      {activeColor}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((c) => (
                      <button
                        key={c.name}
                        onClick={() => setActiveColor(c.name)}
                        className={`relative w-12 h-12 rounded-full border transition-all ${
                          activeColor === c.name
                            ? "border-ink ring-1 ring-offset-2 ring-ink/20"
                            : "border-hairline hover:border-ink-soft"
                        }`}
                        style={{ backgroundColor: c.hex }}
                        aria-label={`Color: ${c.name}`}
                        aria-pressed={activeColor === c.name}
                        type="button"
                      >
                        <span className="sr-only">{c.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Size selector */}
              <div className="mb-8">
                <div className="flex items-baseline justify-between mb-3">
                  <p className="text-caption text-ink-faint uppercase tracking-widest">
                    Size
                  </p>
                  <button
                    type="button"
                    className="text-caption text-ink-faint uppercase tracking-widest link-underline"
                  >
                    Size guide
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setActiveSize(size)}
                      className={`min-w-12 h-12 px-4 border text-body-sm transition-colors ${
                        activeSize === size
                          ? "border-ink bg-ink text-cream"
                          : "border-hairline text-ink hover:border-ink"
                      }`}
                      type="button"
                      aria-pressed={activeSize === size}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <p className="text-caption text-ink-faint uppercase tracking-widest mb-3">
                  Quantity
                </p>
                <div className="inline-flex items-center border border-hairline">
                  <button
                    type="button"
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="w-10 h-10 flex items-center justify-center text-ink-soft hover:text-ink"
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span className="w-10 h-10 flex items-center justify-center text-body-sm tabular-nums">
                    {qty}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQty(qty + 1)}
                    className="w-10 h-10 flex items-center justify-center text-ink-soft hover:text-ink"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to bag — primary CTA, commerce timing */}
              <div className="flex flex-col gap-3 mb-12">
                <button
                  type="button"
                  onClick={handleAdd}
                  disabled={!canAdd}
                  className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {adding
                    ? "added to bag ✓"
                    : canAdd
                    ? "add to bag"
                    : "select a size"}
                </button>
                <a
                  href={`https://instagram.com/calicos.co?text=${encodeURIComponent(
                    `Hi! I'd like to order the ${product.name} (${activeColor}, size ${activeSize ?? "?"}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary w-full"
                >
                  DM to order on Instagram
                </a>
              </div>

              {/* Specs */}
              <dl className="space-y-4 pt-10 border-t border-hairline">
                <div className="flex justify-between gap-4">
                  <dt className="text-caption text-ink-faint uppercase tracking-widest">
                    Fabric
                  </dt>
                  <dd className="text-body-sm text-ink text-right max-w-xs">
                    {product.fabric}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-caption text-ink-faint uppercase tracking-widest">
                    Pattern
                  </dt>
                  <dd className="text-body-sm text-ink capitalize">
                    {product.pattern.replace("-", " ")}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-caption text-ink-faint uppercase tracking-widest">
                    Care
                  </dt>
                  <dd className="text-body-sm text-ink text-right max-w-xs">
                    {product.care}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Story — full-width prose section */}
      <section className="bg-ivory border-t border-hairline">
        <div className="px-page py-24 lg:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-3">
              <p className="text-eyebrow text-ink-faint mb-6">The story</p>
            </div>
            <div className="lg:col-span-7">
              <p className="text-display-md italic text-ink leading-snug mb-12">
                “{product.longDescription.split(".")[0]}.”
              </p>
              <div className="space-y-6 text-body-lg text-ink-soft max-w-prose">
                <p>{product.longDescription}</p>
                <p className="text-ink-faint italic pt-4 border-t border-hairline">
                  Designer&apos;s note — {product.designersNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accordions — Fit, Material, Shipping */}
      <section className="bg-cream border-t border-hairline">
        <div className="px-page py-16 lg:py-24">
          <div className="max-w-narrow mx-auto space-y-0">
            <Accordion
              title="Fit & details"
              open={openAccordion === "fit"}
              onToggle={() =>
                setOpenAccordion(openAccordion === "fit" ? null : "fit")
              }
            >
              <p>{product.fitsNotes}</p>
            </Accordion>
            <Accordion
              title="Material & care"
              open={openAccordion === "material"}
              onToggle={() =>
                setOpenAccordion(
                  openAccordion === "material" ? null : "material"
                )
              }
            >
              <p>{product.fabric}</p>
              <p className="mt-3">{product.care}</p>
            </Accordion>
            <Accordion
              title="Shipping & delivery"
              open={openAccordion === "shipping"}
              onToggle={() =>
                setOpenAccordion(
                  openAccordion === "shipping" ? null : "shipping"
                )
              }
            >
              <p>
                Free standard shipping on orders above ₹1,000. Standard
                delivery 3–5 business days within India. International
                shipping calculated at checkout.
              </p>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Related — other pieces in the collection */}
      <RelatedProducts currentSlug={product.slug} />
    </article>
  );
}

function Accordion({
  title,
  children,
  open,
  onToggle,
}: {
  title: string;
  children: React.ReactNode;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-hairline">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left"
        aria-expanded={open}
      >
        <span className="text-display-sm">{title}</span>
        <span
          className="text-ink-soft transition-transform duration-300"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
          aria-hidden="true"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <line x1="5" y1="12" x2="19" y2="12" />
            <line x1="12" y1="5" x2="12" y2="19" />
          </svg>
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-out-soft"
        style={{
          maxHeight: open ? "500px" : "0",
          opacity: open ? 1 : 0,
        }}
      >
        <div className="pb-6 text-body text-ink-soft">{children}</div>
      </div>
    </div>
  );
}

function RelatedProducts({ currentSlug }: { currentSlug: string }) {
  const { products: all } = require("@/data/products") as typeof import("@/data/products");
  const others = all.filter((p) => p.slug !== currentSlug).slice(0, 3);

  return (
    <section className="bg-cream border-t border-hairline">
      <div className="px-page py-24 lg:py-40">
        <div className="flex items-baseline justify-between mb-12 lg:mb-16">
          <h2 className="text-display-md italic">Other pieces</h2>
          <Link
            href="/collection"
            className="text-body-sm text-ink link-underline hidden sm:inline-block"
          >
            See all four →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 lg:gap-x-8 gap-y-16">
          {others.map((p: import("@/data/products").Product) => (
            <Link
              key={p.slug}
              href={`/collection/${p.slug}`}
              className="group block"
            >
              <div
                className="relative aspect-[4/5] bg-ivory overflow-hidden mb-5"
                style={{ borderRadius: "20px" }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to bottom right, ${p.palette.from}, ${p.palette.to})`,
                    opacity: 0.18,
                  }}
                />
                <Image
                  src={p.cover}
                  alt={p.name}
                  fill
                  quality={80}
                  sizes="(min-width: 768px) 30vw, 90vw"
                  className="object-cover img-editorial transition-transform duration-700 group-hover:scale-[1.03]"
                  style={{ borderRadius: "20px" }}
                />
              </div>
              <div className="flex items-baseline justify-between gap-4 mb-1">
                <h3 className="text-display-sm group-hover:italic transition-all duration-500">
                  {p.name}
                </h3>
                <span className="text-body-sm text-ink-soft tabular-nums">
                  ₹{p.priceINR.toLocaleString("en-IN")}
                </span>
              </div>
              <p className="text-body-sm text-ink-soft">{p.shortDescription}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
