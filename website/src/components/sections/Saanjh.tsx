"use client";

import Image from "next/image";

export function SaanjhCollection() {
  return (
    <section className="py-20 md:py-32 bg-cream px-page">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Content */}
          <div>
            <p className="text-eyebrow text-warm-gray mb-4">Saanjh Collection</p>
            <h2 className="text-display-md text-ink font-serif font-bold mb-6">
              Casual dresses for every moment
            </h2>
            <p className="text-body text-ink/70 mb-6">
              Saanjh brings sophistication to relaxed moments. These hand-block-printed casual dresses are designed for evening dinners, afternoon picnics, and the in-between. Comfortable, timeless, and unmistakably Calicos.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <p className="text-caption text-warm-gray mb-2">Aesthetic</p>
                <p className="text-body text-ink">Effortless elegance</p>
              </div>
              <div>
                <p className="text-caption text-warm-gray mb-2">Occasion</p>
                <p className="text-body text-ink">Versatile all-day wear</p>
              </div>
              <div>
                <p className="text-caption text-warm-gray mb-2">Fabric</p>
                <p className="text-body text-ink">Breathable cotton</p>
              </div>
              <div>
                <p className="text-caption text-warm-gray mb-2">Crafted</p>
                <p className="text-body text-ink">Made in Pune</p>
              </div>
            </div>
            <a href="https://instagram.com/calicosdim" target="_blank" className="btn btn-primary">
              Discover Saanjh
            </a>
          </div>

          {/* Right: Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative rounded-xl overflow-hidden bg-sand">
              <Image
                src="/images/calicos/saanjh-dress-01.jpg"
                alt="Casual dress in cream with black print, styled for evening wear"
                width={300}
                height={400}
                quality={85}
                sizes="(max-width: 768px) 100vw, 25vw"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden bg-sand">
              <Image
                src="/images/calicos/saanjh-dress-02.jpg"
                alt="Casual dress styling detail, showing print and fit"
                width={300}
                height={400}
                quality={85}
                sizes="(max-width: 768px) 100vw, 25vw"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden bg-sand col-span-2">
              <Image
                src="/images/calicos/saanjh-dress-03.jpg"
                alt="Saanjh collection full view, casual dress styling"
                width={600}
                height={300}
                quality={85}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
