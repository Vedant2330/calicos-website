"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { products, Product } from "@/data/products";
import { ProductCard } from "./ProductCard";

export function ProductCatalog() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setCurrentImageIndex(0);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setCurrentImageIndex(0);
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleCloseModal();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <section id="catalog" className="py-20 md:py-32 bg-sand px-page">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <p className="text-eyebrow text-warm-gray mb-4">Shop the Edit</p>
          <h2 className="text-display-lg text-ink font-serif font-bold mb-6">
            The Calicos Collection
          </h2>
          <p className="text-body text-ink/70 max-w-2xl">
            Hand-block-printed kurtis and casual dresses, crafted with care in Pune. 
            Each piece tells a story through its print, silhouette, and the hands that made it.
          </p>
        </div>

        {/* Product Grid - 2 columns on mobile, 3 on tablet, 4 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => handleProductClick(product)}
              className="transition-transform duration-300"
            >
              <ProductCard
                product={product}
                onHover={setHoveredId}
                isHovered={hoveredId === product.id}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 md:mt-20 text-center">
          <a
            href="https://instagram.com/calicosdim"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View Full Collection on Instagram
          </a>
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-sm"
          onClick={handleCloseModal}
        >
          <div
            className="relative w-full max-w-5xl max-h-[90vh] bg-cream rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-ink/10 text-ink hover:bg-ink hover:text-cream transition-colors"
              aria-label="Close"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Gallery */}
              <div className="relative aspect-[3/4] md:aspect-auto md:h-[70vh] bg-sand">
                <Image
                  src={
                    selectedProduct.galleryImages[currentImageIndex] ||
                    selectedProduct.primaryImage
                  }
                  alt={selectedProduct.name}
                  fill
                  quality={90}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />

                {/* Gallery navigation */}
                {selectedProduct.galleryImages.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {[0, ...selectedProduct.galleryImages.map((_, i) => i + 1)].map(
                      (i) => (
                        <button
                          key={i}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex(i === 0 ? 0 : i - 1);
                          }}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            currentImageIndex === (i === 0 ? 0 : i - 1)
                              ? "bg-cream"
                              : "bg-cream/40"
                          }`}
                          aria-label={`View image ${i + 1}`}
                        />
                      )
                    )}
                  </div>
                )}
              </div>

              {/* Product Details */}
              <div className="p-6 md:p-10 flex flex-col justify-center">
                <p className="text-eyebrow text-warm-gray mb-2">
                  {selectedProduct.collection}
                </p>
                <h3 className="text-display-sm text-ink font-serif font-bold mb-4">
                  {selectedProduct.name}
                </h3>
                <p className="text-body text-ink/70 mb-6 leading-relaxed">
                  {selectedProduct.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProduct.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-caption text-ink/60 px-3 py-1 rounded-full bg-ink/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="https://instagram.com/calicosdim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary inline-flex items-center gap-2"
                >
                  <span>Enquire on Instagram</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
