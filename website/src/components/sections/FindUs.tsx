"use client";

import { useReveal } from "@/lib/useReveal";

/**
 * Find Us — the conversion section.
 * Three things, big and obvious: the next flea market date, the IG handle, the DM CTA.
 */
export function FindUs() {
  const ref = useReveal<HTMLDivElement>();

  const nextFlea = {
    date: "Sat 28 Jun",
    time: "10am – 7pm",
    location: "11:11 Flea, Pune",
    booth: "Stall 23",
  };

  return (
    <section
      aria-label="Find us — DM to order or visit the flea market"
      className="bg-cream border-t border-hairline"
    >
      <div ref={ref} data-reveal className="px-page py-24 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Header */}
          <div className="lg:col-span-5">
            <p className="text-eyebrow text-ink-faint mb-6">Find us</p>
            <h2 className="text-display-lg lg:text-display-xl italic">
              Where to get
              <br />
              <span className="text-ink-soft">a Calicos kurta.</span>
            </h2>
            <p className="text-body-lg text-ink-soft mt-8 max-w-prose">
              We don&apos;t do checkout. We do chai, fabric, and Instagram DMs.
              Pick whichever feels right — we&apos;re friendly either way.
            </p>
          </div>

          {/* The three options */}
          <div className="lg:col-span-6 lg:col-start-7 grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
            <div>
              <div className="text-eyebrow text-terracotta mb-4">
                In person
              </div>
              <p className="text-display-md text-ink mb-2">
                {nextFlea.date}
              </p>
              <p className="text-body-sm text-ink-soft mb-1">
                {nextFlea.time}
              </p>
              <p className="text-body-sm text-ink-soft mb-1">
                {nextFlea.location}
              </p>
              <p className="text-body-sm text-ink">{nextFlea.booth}</p>
            </div>

            <div>
              <div className="text-eyebrow text-terracotta mb-4">
                By DM
              </div>
              <p className="text-display-md text-ink mb-2 italic">
                DM us
              </p>
              <a
                href="https://instagram.com/calicos.co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-body text-ink link-underline inline-block mb-3"
              >
                @calicos.co
              </a>
              <p className="text-body-sm text-ink-soft">
                We reply within the day,
                <br />
                usually within the hour.
              </p>
            </div>

            <div>
              <div className="text-eyebrow text-terracotta mb-4">
                By email
              </div>
              <p className="text-display-md text-ink mb-2 italic">
                Write
              </p>
              <a
                href="mailto:hello@calicos.co"
                className="text-body text-ink link-underline inline-block"
              >
                hello@calicos.co
              </a>
              <p className="text-body-sm text-ink-soft mt-3">
                For custom orders,
                <br />
                press, and wholesale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
