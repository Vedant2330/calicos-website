import Link from "next/link";
import Image from "next/image";
import { journalEntries } from "@/data/journal";

export const metadata = {
  title: "Journal",
  description:
    "Notes from the studio. Fabric stories, market diaries, and the occasional BTS photo.",
};

const journalImages = [
  "/images/journal/01-fabric-closeup.jpg",
  "/images/journal/02-market-day.jpg",
  "/images/journal/03-packing.jpg",
];

export default function JournalPage() {
  return (
    <article>
      <section className="bg-cream pt-32 lg:pt-40">
        <div className="px-page pb-16 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="text-eyebrow text-ink-faint mb-6">The journal</p>
              <h1 className="text-display-xl italic">
                Notes from
                <br />
                <span className="text-ink-soft">the studio.</span>
              </h1>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 lg:pt-4">
              <p className="text-body-lg text-ink-soft">
                Fabric stories, market diaries, and the occasional BTS
                photo. We write when there&apos;s something to say — usually a
                few times a month, sometimes less.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream pb-24 lg:pb-40">
        <div className="px-page">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 lg:gap-x-10 gap-y-16">
            {journalEntries.map((entry, i) => (
              <Link
                key={entry.slug}
                href={`/journal/${entry.slug}`}
                className="group block"
              >
                <div className="relative aspect-[5/4] overflow-hidden mb-6 bg-ivory">
                  <Image
                    src={journalImages[i % journalImages.length]}
                    alt=""
                    fill
                    quality={80}
                    sizes="(min-width: 768px) 30vw, 90vw"
                    className="object-cover img-editorial transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <p className="text-caption text-ink-faint uppercase tracking-widest mb-2">
                  {entry.date}
                </p>
                <h2 className="text-display-sm group-hover:italic transition-all duration-500">
                  {entry.title}
                </h2>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
