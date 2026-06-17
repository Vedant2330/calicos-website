import type { Metadata } from "next";
import { Fraunces, Inter, Noto_Serif_Devanagari } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/system/SmoothScroll";
import { Cursor } from "@/components/system/Cursor";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { InstagramDM } from "@/components/site/InstagramDM";
import { CartDrawer } from "@/components/site/CartDrawer";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const notoDevanagari = Noto_Serif_Devanagari({
  variable: "--font-noto-devanagari",
  subsets: ["devanagari"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://calicos.co"),
  title: {
    default: "Calicos — Handcrafted kurtas from Pune",
    template: "%s — Calicos",
  },
  description:
    "Hand-block-printed kurtas, sundresses, and bandanas. Block-printed by hand in Pune, India. DM to order on Instagram.",
  keywords: [
    "Calicos",
    "handcrafted kurtas",
    "block print clothing",
    "Indian boutique",
    "Pune fashion",
    "slow fashion India",
    "indie fashion label",
  ],
  authors: [{ name: "Calicos" }],
  creator: "Calicos",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://calicos.co",
    siteName: "Calicos",
    title: "Calicos — Handcrafted kurtas from Pune",
    description:
      "Hand-block-printed kurtas, sundresses, and bandanas. Block-printed by hand in Pune, India.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calicos — Handcrafted kurtas from Pune",
    description:
      "Hand-block-printed kurtas, sundresses, and bandanas. Block-printed by hand in Pune, India.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${notoDevanagari.variable}`}
    >
      <body className="bg-cream text-ink min-h-screen flex flex-col">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SmoothScroll />
        <Cursor />
        <Nav />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <CartDrawer />
        <InstagramDM />
      </body>
    </html>
  );
}
