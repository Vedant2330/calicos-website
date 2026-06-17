"use client";

import Link from "next/link";
import Image from "next/image";
import { journalEntries } from "@/data/journal";
import { useReveal } from "@/lib/useReveal";

/**
 * Journal preview — 3 journal entries.
 * Real journal cards: image (5:4) + date + title + excerpt.
 */
export function JournalPreview() {
  const headerRef = useReveal<HTMLDivElement>();

  return (
    <section aria-label="Journal preview" className="bg-cream">
      <div className="px-page py-24 lg:py-40">
        {/* Header */}
        <div
          ref={headerRef}
          data-reveal
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-24"
        >
          <div className="lg:col-span-6">
            <p className="text-eyebrow text-ink-faint mb-6">The journal</p>
            <h2 className="text-display-lg italic">
              Notes from
              <br />
              <span className="text-ink-soft">the studio.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 lg:pt-2">
            <p className="text-body text-ink-soft mb-6">
              Fabric stories, market diaries, and the occasional BTS photo.
              We write when there&apos;s something to say.
            </p>
            <Link
              href="/journal"
              className="btn-ghost inline-flex items-center gap-2"
            >
              <span className="link-underline-center">Read all entries</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* Journal cards — 1 col mobile, 3 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 lg:gap-x-10 gap-y-16">
          {journalEntries.map((entry, i) => {
            // Map entry to image: by index
            const journalImages = [
              "/images/journal/01-fabric-closeup.jpg",
              "/images/journal/02-market-day.jpg",
              "/images/journal/03-packing.jpg",
            ];
            return (
              <Link
                key={entry.slug}
                href={`/journal/${entry.slug}`}
                data-reveal
                className="group block"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="relative aspect-[5/4] overflow-hidden mb-6 bg-ivory">
                  <Image
                    src={journalImages[i % journalImages.length]}
                    alt=""
                    fill
                    quality={82}
                    sizes="(min-width: 768px) 30vw, 90vw"
                    className="object-cover img-editorial transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <p className="text-caption text-ink-faint uppercase tracking-widest mb-3">
                  {entry.date}
                </p>
                <h3 className="text-display-md text-ink mb-4 group-hover:italic transition-all duration-500">
                  {entry.title}
                </h3>
                <p className="text-body text-ink-soft">{entry.excerpt}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
