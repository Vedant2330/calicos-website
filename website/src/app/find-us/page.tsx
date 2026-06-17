import Link from "next/link";

export const metadata = {
  title: "Find Us",
  description:
    "Where to find Calicos — flea markets in Pune, Instagram DMs, and our email.",
};

const fleaSchedule = [
  { date: "Sat 28 Jun", time: "10am – 7pm", location: "11:11 Flea, Pune", booth: "Stall 23" },
  { date: "Sun 13 Jul", time: "10am – 7pm", location: "11:11 Flea, Pune", booth: "Stall 23" },
  { date: "Sat 26 Jul", time: "10am – 7pm", location: "11:11 Flea, Pune", booth: "Stall 23" },
  { date: "Sun 10 Aug", time: "10am – 7pm", location: "11:11 Flea, Pune", booth: "Stall 23" },
];

export default function FindUs() {
  return (
    <article>
      <section className="bg-cream pt-32 lg:pt-40 pb-16 lg:pb-24">
        <div className="px-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="text-eyebrow text-ink-faint mb-6">Find us</p>
              <h1 className="text-display-xl italic">
                Where to get
                <br />
                <span className="text-ink-soft">a Calicos kurta.</span>
              </h1>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 lg:pt-4">
              <p className="text-body-lg text-ink-soft">
                We don&apos;t do checkout. We do chai, fabric, and Instagram
                DMs. Pick whichever feels right — we&apos;re friendly either way.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory border-t border-hairline">
        <div className="px-page py-24 lg:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <p className="text-eyebrow text-ink-faint mb-6">Flea schedule</p>
              <h2 className="text-display-md italic">
                Where to find us
                <br />
                <span className="text-ink-soft">this season.</span>
              </h2>
              <p className="text-body text-ink-soft mt-6 max-w-prose">
                We post real-time stall updates on our Instagram story on
                market days — including when we sell out of a particular
                piece (it happens).
              </p>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <ul className="divide-y divide-hairline border-y border-hairline">
                {fleaSchedule.map((d) => (
                  <li
                    key={d.date}
                    className="py-6 grid grid-cols-12 gap-4 items-baseline"
                  >
                    <span className="col-span-4 sm:col-span-3 text-display-sm tabular-nums">
                      {d.date}
                    </span>
                    <span className="col-span-4 sm:col-span-3 text-body-sm text-ink-soft">
                      {d.time}
                    </span>
                    <span className="col-span-4 sm:col-span-3 text-body-sm text-ink">
                      {d.location}
                    </span>
                    <span className="col-span-12 sm:col-span-3 text-body-sm text-ink-soft sm:text-right">
                      {d.booth}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-caption text-ink-faint mt-6">
                All dates subject to weather &amp; fabric availability.
                Follow @calicos.co for the latest.
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
