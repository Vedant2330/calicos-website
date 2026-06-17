/**
 * Calicos journal entries.
 * Used by: homepage JournalPreview, /journal, /journal/[slug].
 */

export type JournalEntry = {
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
  date: string;
  tags: string[];
  author: "Radha" | "Priya" | "Both";
};

export const journalEntries: JournalEntry[] = [
  {
    slug: "how-life-sounds-in-kurtas",
    title: "How life sounds in kurtas",
    excerpt:
      "On pairing fabrics with songs, and why we still hum when we pack orders.",
    date: "14 Jun 2026",
    tags: ["studio", "process"],
    author: "Both",
    body: [
      "When we started Calicos, we made a small list of songs we wanted to play at our first market. Hariharan, of course. Some Mohit Chauhan. A little Shreya Ghoshal, for the orders that take longer than expected.",
      "What we didn't expect was how the music would shape the work itself. There are pieces we can't cut without a certain song playing. The terracotta ikat must be cut to a particular raag. The indigo block-print needs Mohit Chauhan's Masakali. We're not embarrassed about this. We think the clothes know.",
      "If you order a kurta from us, we sometimes send back a small handwritten note with the name of the song we cut it to. It feels strange to type this out — like saying the quiet part out loud. But the songs are part of the cloth now. We can't separate them.",
    ],
  },
  {
    slug: "morning-at-1111-flea",
    title: "A morning at 11:11 flea",
    excerpt:
      "Stall 23, two cups of chai, and the woman who bought three of the same kurti.",
    date: "02 Jun 2026",
    tags: ["flea market", "stories"],
    author: "Priya",
    body: [
      "Sundays at the 11:11 flea start at 6am. The drive from our apartment takes twenty minutes if the sleeping policemen are awake. We set up at Stall 23, fold the kurtas onto the wooden table Radha's father made, and wait for chai to arrive.",
      "By 11am we'd sold six pieces. By 1pm, eleven. Then a woman in a yellow sari stopped, picked up the indigo block-print kurta, set it down, picked it up again, looked at Radha, looked at me, looked at the kurta, and said: I'll take three of these.",
      "Three. We only had two in the indigo at her size. She bought both. Came back twenty minutes later and bought the mustard paisley sundress instead. Then she came back a third time and bought the bamboo bandana.",
      "We closed the stall an hour early that day. Went home. Made chai. Talked about the woman in the yellow sari until we ran out of guesses.",
    ],
  },
  {
    slug: "on-leaving-raavya",
    title: "On leaving Raavya",
    excerpt:
      "Why we stopped, started again, and renamed ourselves Calicos.",
    date: "20 May 2026",
    tags: ["studio", "announcements"],
    author: "Both",
    body: [
      "Raavya was our first brand. We launched it in 2023 with one kurta and a borrowed sewing machine. By the end of 2025, we had eleven products and a small Instagram following — and a creeping feeling that something was off.",
      "The name, for one. Raavya meant something in Hindi that didn't quite mean what we wanted to say. And the products — they were getting generic. We were chasing trends instead of making what we loved.",
      "So we stopped. Deleted the old posts. Renamed ourselves Calicos — a word that means plain cotton muslin in English, and nothing in Hindi, which felt right. Started again with two fabrics we actually loved. Started making pieces at a pace that left room for chai.",
      "Today Calicos is two women, one fabric store, and a stubborn belief that the clothes on your back should feel like the music in your room — easy to live in, impossible to fake.",
    ],
  },
];

export function getJournalEntry(slug: string): JournalEntry | undefined {
  return journalEntries.find((e) => e.slug === slug);
}
