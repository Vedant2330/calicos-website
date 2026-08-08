"use client";

export function BrandStory() {
  return (
    <section className="py-20 md:py-32 bg-sand px-page">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-eyebrow text-warm-gray mb-6">Our Story</p>
        <h2 className="text-display-lg text-ink font-serif font-bold mb-8">
          Two friends. One dream. Hand-block-printed clothes.
        </h2>
        <p className="text-body-lg text-ink/70 mb-8 leading-relaxed">
          Calicos began in Pune with a simple idea: to create hand-block-printed kurtas and dresses that feel effortless, modern, and unmistakably Indian. We source fabrics we believe in, work with printers who understand the craft, and design each piece to move with you—from casual mornings to family gatherings.
        </p>
        <p className="text-body-lg text-ink/70 mb-12 leading-relaxed">
          Every garment carries the story of its print, its maker, and the care that went into its creation. We&apos;re not trying to be everything to everyone. We&apos;re just trying to make clothes you&apos;ll love wearing.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-8 md:gap-12 py-12 border-t border-b border-ink/10">
          <div>
            <p className="text-display-md text-ink font-serif font-bold">Est. 2024</p>
            <p className="text-caption text-warm-gray mt-2">Founded in Pune</p>
          </div>
          <div>
            <p className="text-display-md text-ink font-serif font-bold">100%</p>
            <p className="text-caption text-warm-gray mt-2">Hand-block printed</p>
          </div>
          <div>
            <p className="text-display-md text-ink font-serif font-bold">∞</p>
            <p className="text-caption text-warm-gray mt-2">Made with love</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12">
          <p className="text-body text-ink/70 mb-6">Ready to explore?</p>
          <a
            href="https://wa.me/9175027560?text=Hi%20Calicos!%20I%E2%80%99d%20love%20to%20know%20more%20about%20your%20collection."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
