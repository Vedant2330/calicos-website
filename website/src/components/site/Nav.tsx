"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { useCart } from "@/lib/cart";

const links = [
  { href: "/collection", label: "Collection" },
  { href: "/story", label: "Story" },
  { href: "/journal", label: "Journal" },
  { href: "/find-us", label: "Find Us" },
];

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const cartCount = useCart((s) => s.items.length);
  const openCart = useCart((s) => s.openDrawer);

  // Per Part 3 EXCEPTION: checkout flow uses simpler static header
  const isCheckoutFlow =
    pathname?.startsWith("/checkout") ||
    pathname?.startsWith("/bag") ||
    pathname?.startsWith("/order");

  useEffect(() => {
    if (isCheckoutFlow) return; // Static on checkout pages
    function onScroll() {
      setScrolled(window.scrollY > 60);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isCheckoutFlow]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Checkout flow = always solid
  const headerSolid = isCheckoutFlow || scrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          headerSolid
            ? "bg-cream/95 backdrop-blur-sm border-b border-hairline"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="px-page flex items-center justify-between h-20 lg:h-24">
          {/* Logo — uses drop-shadow when over hero for legibility */}
          <div className={headerSolid ? "" : "[text-shadow:_0_1px_2px_rgba(26,20,16,0.15)]"}>
            <Logo variant="lockup" />
          </div>

          {/* Desktop nav */}
          <nav
            className={`hidden md:flex items-center gap-10 ${
              headerSolid ? "" : "[text-shadow:_0_1px_2px_rgba(26,20,16,0.12)]"
            }`}
            aria-label="Primary"
          >
            {links.map((link) => {
              const active =
                pathname === link.href ||
                (pathname?.startsWith(link.href + "/") ?? false);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-body-sm link-underline-center ${
                    headerSolid
                      ? active
                        ? "text-ink"
                        : "text-ink-soft hover:text-ink"
                      : "text-cream hover:text-cream"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right utility — visible on desktop */}
          <div
            className={`hidden md:flex items-center gap-5 ${
              headerSolid ? "" : "[text-shadow:_0_1px_2px_rgba(26,20,16,0.12)]"
            }`}
          >
            <button
              type="button"
              className="text-body-sm text-ink-soft hover:text-ink transition-colors"
              aria-label="Search"
              onClick={() => alert("Search coming soon")}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
            </button>
            <button
              type="button"
              onClick={openCart}
              className="relative text-body-sm text-ink-soft hover:text-ink transition-colors flex items-center gap-1.5"
              aria-label={`Bag with ${cartCount} item${cartCount !== 1 ? "s" : ""}`}
            >
              <span>Bag</span>
              <span
                key={cartCount}
                className={`inline-flex items-center justify-center min-w-5 h-5 px-1.5 rounded-full text-caption bg-ink text-cream ${
                  cartCount > 0 ? "anim-count-bump" : ""
                }`}
              >
                {cartCount}
              </span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <button
            type="button"
            className="md:hidden text-ink p-2 -mr-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
              {menuOpen ? (
                <>
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="6" y1="18" x2="18" y2="6" />
                </>
              ) : (
                <>
                  <line x1="3" y1="8" x2="21" y2="8" />
                  <line x1="3" y1="16" x2="21" y2="16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile menu — slides from right */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-cream transition-opacity duration-500 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="flex flex-col items-start gap-8 px-page pt-32 pb-16">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-display-md text-ink link-underline"
            >
              {link.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={() => {
              setMenuOpen(false);
              openCart();
            }}
            className="text-display-md text-ink link-underline mt-4"
          >
            Bag ({cartCount})
          </button>
          <div className="mt-8 pt-8 border-t border-hairline w-full">
            <p className="text-caption text-ink-faint mb-3">Find us</p>
            <a
              href="https://instagram.com/calicos.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-body text-ink link-underline inline-block"
            >
              @calicos.co on Instagram
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
