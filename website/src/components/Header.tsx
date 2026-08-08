"use client";

import { useState } from "react";
import Link from "next/link";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center justify-between px-page py-6 backdrop-blur-sm bg-black/5">
        {/* Left Navigation */}
        <div className="flex items-center gap-8">
          <Link href="#shop" className="text-eyebrow text-cream hover:text-mustard transition-colors">
            Shop
          </Link>
          <Link href="#collections" className="text-eyebrow text-cream hover:text-mustard transition-colors">
            Collections
          </Link>
          <Link href="#new" className="text-eyebrow text-cream hover:text-mustard transition-colors">
            New In
          </Link>
        </div>

        {/* Center Logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Link href="/" className="text-2xl font-serif font-bold text-cream tracking-wider hover:text-mustard transition-colors">
            CALICOS
          </Link>
        </div>

        {/* Right Navigation */}
        <div className="flex items-center gap-8">
          <Link href="#about" className="text-eyebrow text-cream hover:text-mustard transition-colors">
            About
          </Link>
          <Link href="#discover" className="text-eyebrow text-cream hover:text-mustard transition-colors">
            Discover
          </Link>
          <Link href="https://instagram.com/calicosdim" target="_blank" className="text-eyebrow text-cream hover:text-mustard transition-colors">
            Contact
          </Link>
          <button className="text-eyebrow text-cream hover:text-mustard transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m10 0l2-9m-4 9a2 2 0 11-4 0 2 2 0 014 0zm-4 0a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden flex items-center justify-between px-page py-4 backdrop-blur-sm bg-black/5">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-cream hover:text-mustard transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <Link href="/" className="text-xl font-serif font-bold text-cream tracking-wider hover:text-mustard transition-colors">
          CALICOS
        </Link>

        <button className="text-cream hover:text-mustard transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m10 0l2-9m-4 9a2 2 0 11-4 0 2 2 0 014 0zm-4 0a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-cream border-b border-ink/10 animate-slide-up">
          <div className="px-page py-6 space-y-4">
            <Link
              href="#shop"
              className="block text-body font-serif hover:text-mustard transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              href="#collections"
              className="block text-body font-serif hover:text-mustard transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Collections
            </Link>
            <Link
              href="#new"
              className="block text-body font-serif hover:text-mustard transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              New In
            </Link>
            <Link
              href="#about"
              className="block text-body font-serif hover:text-mustard transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#discover"
              className="block text-body font-serif hover:text-mustard transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Discover
            </Link>
            <Link
              href="https://instagram.com/calicosdim"
              target="_blank"
              className="block text-body font-serif hover:text-mustard transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
