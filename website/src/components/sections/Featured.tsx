"use client";

import Image from "next/image";
import { useState } from "react";

interface FeaturedItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: "Kurtis" | "Dresses" | "Collections";
}

const featuredItems: FeaturedItem[] = [
  {
    id: "1",
    src: "/images/calicos/saanjh-dress-group.jpg",
    alt: "Two women wearing casual block-printed sundresses in cream and black tones",
    title: "Saanjh Collection",
    category: "Dresses",
  },
  {
    id: "2",
    src: "/images/calicos/originals-kurti-01.jpg",
    alt: "Full-length indigo block-printed kurti with paisley motifs, styled for family events",
    title: "Originals Series",
    category: "Kurtis",
  },
  {
    id: "3",
    src: "/images/calicos/saanjh-dress-01.jpg",
    alt: "Casual dress in cream with black block-print, relaxed silhouette",
    title: "Saanjh Dress",
    category: "Dresses",
  },
  {
    id: "4",
    src: "/images/calicos/originals-kurti-02.jpg",
    alt: "Full-length kurti with traditional hand-block-printed motifs",
    title: "Block-Print Kurti",
    category: "Kurtis",
  },
];

export function Featured() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="featured" className="py-20 md:py-32 bg-cream px-page">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <p className="text-eyebrow text-warm-gray mb-4">The Calicos Edit</p>
          <h2 className="text-display-lg text-ink font-serif font-bold mb-6">
            Curated for warmth and effortless style
          </h2>
          <p className="text-body text-ink/70 max-w-2xl">
            A selection of hand-block-printed kurtis and casual dresses that define the Calicos aesthetic. Each piece is crafted with attention to fabric, fit, and the stories behind the prints.
          </p>
        </div>

        {/* Featured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {featuredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl bg-sand cursor-pointer"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image Container */}
              <div className="relative w-full aspect-square overflow-hidden bg-sand">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out-soft group-hover:scale-105"
                />
              </div>

              {/* Overlay with info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-caption text-mustard mb-2">{item.category}</p>
                <h3 className="text-headline text-cream font-serif font-bold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 md:mt-20 text-center">
          <a href="https://instagram.com/calicosdim" target="_blank" className="btn btn-secondary">
            View Full Collection
          </a>
        </div>
      </div>
    </section>
  );
}
