"use client";

import Image from "next/image";
import { useState } from "react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  onHover?: (id: string | null) => void;
  isHovered?: boolean;
}

export function ProductCard({ product, onHover, isHovered }: ProductCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className="group relative cursor-pointer"
      onMouseEnter={() => onHover?.(product.id)}
      onMouseLeave={() => onHover?.(null)}
    >
      {/* Image Container */}
      <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl bg-sand">
        <Image
          src={product.primaryImage}
          alt={product.name}
          fill
          quality={85}
          sizes="(max-width: 768px) 50vw, 25vw"
          className={`object-cover transition-all duration-700 ease-out ${
            isHovered ? "scale-105" : "scale-100"
          } ${imageLoaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Subtle overlay on hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* Product Info */}
      <div className="mt-4 space-y-1">
        <p className="text-caption text-warm-gray">{product.collection}</p>
        <h3 className="text-body font-medium text-ink">{product.name}</h3>
        <p className="text-caption text-ink/60 line-clamp-2">
          {product.description}
        </p>
      </div>

      {/* Hover CTA */}
      <div
        className={`mt-3 transition-all duration-300 ${
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
      >
        <span className="text-caption text-mustard font-medium">
          View Look →
        </span>
      </div>
    </div>
  );
}
