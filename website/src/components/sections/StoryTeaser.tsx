"use client";

import Image from "next/image";
import Link from "next/link";
import { useReveal } from "@/lib/useReveal";

/**
 * Story teaser — founders in supporting role per §9.3.1.
 * Compact, NOT full-viewport. Founder portrait + one paragraph + link to /story.
 */
export function StoryTeaser() {
  const imageRef = useReveal<HTMLDivElement>();
  const textRef = useReveal<HTMLDivElement>();

  return (
    <section
      aria-label="Founders' story"
      className="bg-indigo text-cream"
    >
      <div className="px-page py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait — compact, supporting role */}
          <div
            ref={imageRef}
            data-reveal
            className="lg:col-span-5 max-w-md mx-auto lg:mx-0"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/founder/portrait.jpg"
                alt="A young South Asian woman in a hand-block-printed indigo kurta, mid-laugh in a sunlit garden setting. Generic editorial portrait."
                fill
                quality={85}
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover img-editorial"
                style={{ objectPosition: "center 30%" }}
              />
            </div>
          </div>

          {/* Text */}
          <div ref={textRef} data-reveal className="lg:col-span-6 lg:col-start-7">
            <p className="text-eyebrow text-mustard mb-6">Two friends, one store</p>
            <h2 className="text-display-lg text-cream italic">
              We started Calicos because Raavya wasn&apos;t us anymore.
            </h2>
            <div className="mt-10 space-y-6 text-body-lg text-cream/85">
              <p>
                Radha and Priya met at a block-printing workshop in Pune, in the spring of 2022. They sat next to each other. They both reached for the same mustard-yellow fabric sample. They laughed about it. They&apos;ve been talking about fabric ever since.
              </p>
              <p>
                Calicos is the slow result — a rebrand, a recommitment, and
                a fabric store that opens whenever they have chai.
              </p>
            </div>
            <div className="mt-10 flex items-center gap-6">
              <Link href="/story" className="btn bg-cream text-indigo hover:bg-mustard hover:text-ink">
                Read the full story
              </Link>
              <span className="text-caption text-cream/55 italic">
                ~3 min read
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
