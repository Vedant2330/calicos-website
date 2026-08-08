"use client";

import Image from "next/image";

export function KurtisSpotlight() {
  return (
    <section className="py-20 md:py-32 bg-sand px-page">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Image */}
          <div className="relative order-2 md:order-1">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-cream">
              <Image
                src="/images/calicos/originals-kurti-02.jpg"
                alt="Full-length indigo block-printed kurti, versatile for family events and everyday wear"
                fill
                quality={85}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Decorative corner accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-ink rounded-full opacity-20" />
          </div>

          {/* Right: Content */}
          <div className="order-1 md:order-2">
            <p className="text-eyebrow text-warm-gray mb-4">Raavya Collection</p>
            <h2 className="text-display-md text-ink font-serif font-bold mb-6">
              Kurtis that feel like wearing the summer air
            </h2>
            <p className="text-body text-ink/70 mb-6">
              The Raavya collection celebrates the ease and comfort of a perfect kurti. Hand-block-printed with traditional motifs, each piece is designed to move with you—from casual family gatherings to everyday moments.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-mustard mt-1">✓</span>
                <span className="text-body text-ink">Hand-block-printed in Pune</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-mustard mt-1">✓</span>
                <span className="text-body text-ink">100% breathable cotton blend</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-mustard mt-1">✓</span>
                <span className="text-body text-ink">Versatile from family events to casual days</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-mustard mt-1">✓</span>
                <span className="text-body text-ink">Made to order for perfect fit</span>
              </li>
            </ul>
            <a href="https://instagram.com/calicosdim" target="_blank" className="btn btn-primary">
              Explore Raavya
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
