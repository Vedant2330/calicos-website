"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartItem = {
  id: string;            // unique: `${slug}--${color}--${size}`
  slug: string;          // product slug (for PDP link)
  name: string;
  color: string;
  size: string;
  price: number;         // in paise to avoid float math
  priceDisplay: string;  // e.g. "₹2,400"
  image: string;
  qty: number;
};

type CartState = {
  items: CartItem[];
  drawerOpen: boolean;

  add: (item: Omit<CartItem, "id" | "qty"> & { qty?: number }) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;

  openDrawer: () => void;
  closeDrawer: () => void;
};

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      drawerOpen: false,

      add: (item) => {
        const id = `${item.slug}--${item.color}--${item.size}`;
        set((s) => {
          const existing = s.items.find((i) => i.id === id);
          if (existing) {
            return {
              items: s.items.map((i) =>
                i.id === id ? { ...i, qty: i.qty + (item.qty ?? 1) } : i
              ),
              drawerOpen: true, // open drawer on add
            };
          }
          return {
            items: [...s.items, { ...item, id, qty: item.qty ?? 1 }],
            drawerOpen: true,
          };
        });
      },

      remove: (id) => {
        set((s) => ({ items: s.items.filter((i) => i.id !== id) }));
      },

      setQty: (id, qty) => {
        set((s) => ({
          items: s.items
            .map((i) => (i.id === id ? { ...i, qty: Math.max(1, qty) } : i))
            .filter((i) => i.qty > 0),
        }));
      },

      clear: () => set({ items: [] }),

      openDrawer: () => set({ drawerOpen: true }),
      closeDrawer: () => set({ drawerOpen: false }),
    }),
    {
      name: "calicos-cart-v1",
      partialize: (s) => ({ items: s.items }), // persist items only, not drawerOpen
    }
  )
);

// Helper: compute subtotal in paise (for math)
export function subtotalPaise(items: CartItem[]): number {
  return items.reduce((sum, i) => sum + i.price * i.qty, 0);
}

// Helper: format paise → INR display
export function formatINR(paise: number): string {
  const rupees = paise / 100;
  return "₹" + rupees.toLocaleString("en-IN");
}
