import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://calicos.co"),
  title: {
    default: "Calicos — Hand-block-printed kurtas from Pune",
    template: "%s — Calicos",
  },
  description:
    "Hand-block-printed kurtas and casual dresses from Pune, India. Designed for warmth, comfort, and effortless style. DM to order on Instagram.",
  keywords: [
    "Calicos",
    "hand-block-printed kurtas",
    "Indian fashion",
    "Pune brand",
    "casual dresses",
    "kurtas",
    "slow fashion",
  ],
  authors: [{ name: "Calicos" }],
  creator: "Calicos",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://calicos.co",
    siteName: "Calicos",
    title: "Calicos — Hand-block-printed kurtas from Pune",
    description:
      "Hand-block-printed kurtas and casual dresses from Pune, India.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calicos — Hand-block-printed kurtas from Pune",
    description:
      "Hand-block-printed kurtas and casual dresses from Pune, India.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-cream text-ink antialiased">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
