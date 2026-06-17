import Link from "next/link";
import { Logo } from "@/components/brand/Logo";

// Inline Instagram icon (per web-dev-gotchas: lucide-react removes brand icons in 0.470+)
function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function MailIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

// Placeholder flea dates — would come from founders in real life
const FLEA_DATES = [
  { date: "Sat 28 Jun", time: "10am – 7pm", location: "11:11 Flea, Pune", booth: "Stall 23" },
  { date: "Sun 13 Jul", time: "10am – 7pm", location: "11:11 Flea, Pune", booth: "Stall 23" },
  { date: "Sat 26 Jul", time: "10am – 7pm", location: "11:11 Flea, Pune", booth: "Stall 23" },
];

export function Footer() {
  return (
    <footer className="bg-cream border-t border-hairline">
      <div className="px-page py-20 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="md:col-span-5">
            <Logo variant="lockup" />
            <p className="text-body mt-8 max-w-prose text-ink-soft">
              Hand-block-printed kurtas, sundresses, and bandanas —
              stitched with a song, made by two friends in Pune.
            </p>
            <p className="text-caption mt-6 text-ink-faint font-devanagari">
              जैसे ज़िन्दगी का अपना साउंडट्रैक हो।
            </p>
          </div>

          {/* Find us */}
          <div className="md:col-span-4">
            <p className="text-eyebrow text-ink-faint mb-6">Find us</p>
            <ul className="space-y-3 mb-8">
              {FLEA_DATES.map((d) => (
                <li key={d.date} className="text-body-sm text-ink-soft">
                  <span className="text-ink">{d.date}</span>
                  <span className="mx-2 text-ink-faint">·</span>
                  <span>{d.location}</span>
                  <span className="mx-2 text-ink-faint">·</span>
                  <span>{d.booth}</span>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-6">
              <a
                href="https://instagram.com/calicos.co"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-body-sm text-ink link-underline"
                aria-label="Calicos on Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
                @calicos.co
              </a>
              <a
                href="mailto:hello@calicos.co"
                className="inline-flex items-center gap-2 text-body-sm text-ink link-underline"
                aria-label="Email Calicos"
              >
                <MailIcon className="w-4 h-4" />
                hello@calicos.co
              </a>
            </div>
          </div>

          {/* Stay close + nav */}
          <div className="md:col-span-3">
            <p className="text-eyebrow text-ink-faint mb-6">Stay close</p>
            <nav aria-label="Footer" className="flex flex-col gap-3 mb-8">
              <Link href="/collection" className="text-body-sm text-ink link-underline inline-block w-fit">
                Collection
              </Link>
              <Link href="/story" className="text-body-sm text-ink link-underline inline-block w-fit">
                Story
              </Link>
              <Link href="/journal" className="text-body-sm text-ink link-underline inline-block w-fit">
                Journal
              </Link>
              <Link href="/find-us" className="text-body-sm text-ink link-underline inline-block w-fit">
                Find Us
              </Link>
            </nav>
            <form className="flex flex-col gap-3" action="#" aria-label="Newsletter">
              <label htmlFor="footer-email" className="text-caption text-ink-faint">
                Letters from the studio, monthly.
              </label>
              <div className="flex border-b border-ink pb-2">
                <input
                  id="footer-email"
                  type="email"
                  placeholder="your@email"
                  className="flex-1 bg-transparent text-body-sm text-ink placeholder:text-ink-faint focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="text-caption text-ink uppercase tracking-widest link-underline"
                >
                  Join
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-20 pt-8 border-t border-hairline flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-caption text-ink-faint">
            © 2026 Calicos · Pune, India · Made with chai.
          </p>
          <p className="text-caption text-ink-faint font-devanagari">
            कॉज़ हर कपड़े में एक गाना है।
          </p>
        </div>
      </div>
    </footer>
  );
}
