"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useCart, subtotalPaise, formatINR } from "@/lib/cart";

export function CartDrawer() {
  const items = useCart((s) => s.items);
  const drawerOpen = useCart((s) => s.drawerOpen);
  const closeDrawer = useCart((s) => s.closeDrawer);
  const setQty = useCart((s) => s.setQty);
  const remove = useCart((s) => s.remove);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  // Close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape" && drawerOpen) closeDrawer();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [drawerOpen, closeDrawer]);

  const subtotal = subtotalPaise(items);
  const freeShipThreshold = 1417200; // ₹14,172 in paise (Aritzia reference)
  const remainingForFreeShip = Math.max(0, freeShipThreshold - subtotal);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-ink/40 transition-opacity duration-300 ${
          drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeDrawer}
        aria-hidden="true"
      />

      {/* Drawer — slides from right, 480px wide on desktop, full-width on mobile */}
      <aside
        role="dialog"
        aria-label="Shopping bag"
        aria-modal="true"
        className={`fixed top-0 right-0 z-50 h-full w-full sm:w-[480px] bg-cream shadow-2xl flex flex-col transition-transform duration-300 ease-out-soft ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ borderTopLeftRadius: "12px", borderBottomLeftRadius: "12px" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-hairline">
          <h2 className="text-display-sm">Your Bag</h2>
          <button
            type="button"
            onClick={closeDrawer}
            className="text-ink-soft hover:text-ink transition-colors p-2 -mr-2"
            aria-label="Close bag"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="6" y1="18" x2="18" y2="6" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-16">
              <p className="text-display-sm text-ink mb-3">Your bag is empty.</p>
              <p className="text-body text-ink-soft mb-6">Find your first piece.</p>
              <Link
                href="/collection"
                onClick={closeDrawer}
                className="btn btn-primary"
              >
                Browse the collection
              </Link>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex gap-4 anim-line-item-in"
                >
                  <Link
                    href={`/collection/${item.slug}`}
                    onClick={closeDrawer}
                    className="shrink-0"
                  >
                    <div className="relative w-20 h-24 bg-ivory overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="80px"
                        className="object-cover img-editorial"
                      />
                    </div>
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/collection/${item.slug}`}
                      onClick={closeDrawer}
                      className="block text-body-sm text-ink hover:underline"
                    >
                      {item.name}
                    </Link>
                    <p className="text-caption text-ink-faint mt-1">
                      {item.color} · {item.size}
                    </p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-hairline rounded-sm">
                        <button
                          type="button"
                          onClick={() => setQty(item.id, item.qty - 1)}
                          className="w-7 h-7 flex items-center justify-center text-ink-soft hover:text-ink"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="w-7 h-7 flex items-center justify-center text-body-sm tabular-nums">
                          {item.qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => setQty(item.id, item.qty + 1)}
                          className="w-7 h-7 flex items-center justify-center text-ink-soft hover:text-ink"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      <span className="text-body-sm tabular-nums">
                        {formatINR(item.price * item.qty)}
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => remove(item.id)}
                    className="text-ink-faint hover:text-ink transition-colors p-1 self-start"
                    aria-label={`Remove ${item.name}`}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                      <line x1="6" y1="6" x2="18" y2="18" />
                      <line x1="6" y1="18" x2="18" y2="6" />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-hairline px-6 py-5 space-y-4 bg-cream">
            {remainingForFreeShip > 0 ? (
              <p className="text-caption text-ink-soft">
                Add {formatINR(remainingForFreeShip)} more for free shipping.
              </p>
            ) : (
              <p className="text-caption text-terracotta">
                ✓ Free shipping unlocked.
              </p>
            )}
            <div className="flex items-baseline justify-between">
              <span className="text-body text-ink">Subtotal</span>
              <span className="text-display-sm tabular-nums">{formatINR(subtotal)}</span>
            </div>
            <p className="text-caption text-ink-faint">
              Shipping and taxes calculated at checkout.
            </p>
            <Link
              href="/checkout"
              onClick={closeDrawer}
              className="btn btn-primary w-full"
            >
              Checkout · {formatINR(subtotal)}
            </Link>
            <button
              type="button"
              onClick={closeDrawer}
              className="btn btn-ghost w-full"
            >
              <span className="link-underline-center">Continue shopping</span>
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
