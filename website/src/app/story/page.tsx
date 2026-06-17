export const metadata = {
  title: "Story",
  description:
    "Two friends, one fabric store in Pune. The story of Calicos — from Raavya to Calicos, and the long road between.",
};

/**
 * /story placeholder — full story page is built in a later phase.
 * For the demo checkpoint, this page tells visitors it's coming soon
 * (rather than 404ing the nav link).
 */
export default function StoryPage() {
  return (
    <section className="bg-cream min-h-[70vh] pt-32 lg:pt-40 pb-24 lg:pb-40">
      <div className="px-page">
        <div className="max-w-narrow mx-auto">
          <p className="text-eyebrow text-ink-faint mb-6">Our story</p>
          <h1 className="text-display-xl italic mb-12">
            Two friends, one fabric store.
          </h1>
          <div className="space-y-6 text-body-lg text-ink-soft">
            <p>
              Radha and Priya met at a block-printing workshop in Pune, in
              the spring of 2022. They sat next to each other. They both
              reached for the same mustard-yellow fabric sample. They
              laughed about it.
            </p>
            <p>
              The full story — about Raavya, the rebrand to Calicos, the
              long road between, and how two women in Pune decided to make
              fabric their shared project — is being written.
            </p>
            <p>
              For now, follow along on{" "}
              <a
                href="https://instagram.com/calicos.co"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-ink"
              >
                Instagram @calicos.co
              </a>{" "}
              for the latest.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
