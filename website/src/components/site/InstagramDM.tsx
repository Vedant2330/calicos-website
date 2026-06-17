/**
 * Persistent bottom-right "DM to order" Instagram pill.
 * Per §8.1: this is the ONLY full-pill element on the site (rounded-full exception).
 */
function InstagramIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
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

export function InstagramDM() {
  return (
    <a
      href="https://instagram.com/calicos.co"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="DM Calicos on Instagram to order"
      className="fixed bottom-5 right-5 z-30 inline-flex items-center gap-2 bg-ink text-cream px-4 py-2.5 rounded-full shadow-lg shadow-ink/15 hover:bg-terracotta transition-colors duration-300 text-caption uppercase tracking-widest"
    >
      <InstagramIcon className="w-3.5 h-3.5" />
      <span className="hidden sm:inline">DM to order</span>
      <span className="sm:hidden">DM us</span>
    </a>
  );
}
