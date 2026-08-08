"use client";

export function Footer() {
  return (
    <footer className="bg-ink text-cream py-16 md:py-20 px-page">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-subheading font-serif font-bold mb-4">CALICOS</h3>
            <p className="text-body-sm text-cream/70">
              Hand-block-printed kurtas and casual dresses from Pune, India.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-caption text-cream/80 mb-4 font-bold">SHOP</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://instagram.com/calicosdim" target="_blank" className="text-body-sm text-cream/70 hover:text-mustard transition-colors">
                  Kurtis
                </a>
              </li>
              <li>
                <a href="https://instagram.com/calicosdim" target="_blank" className="text-body-sm text-cream/70 hover:text-mustard transition-colors">
                  Dresses
                </a>
              </li>
              <li>
                <a href="https://instagram.com/calicosdim" target="_blank" className="text-body-sm text-cream/70 hover:text-mustard transition-colors">
                  Collections
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-caption text-cream/80 mb-4 font-bold">CONNECT</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://instagram.com/calicosdim" target="_blank" className="text-body-sm text-cream/70 hover:text-mustard transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://instagram.com/calicosdim" target="_blank" className="text-body-sm text-cream/70 hover:text-mustard transition-colors">
                  DM to Order
                </a>
              </li>
              <li>
                <a href="mailto:hello@calicos.co" className="text-body-sm text-cream/70 hover:text-mustard transition-colors">
                  Email
                </a>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-caption text-cream/80 mb-4 font-bold">INFO</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-body-sm text-cream/70 hover:text-mustard transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-body-sm text-cream/70 hover:text-mustard transition-colors">
                  Craft
                </a>
              </li>
              <li>
                <a href="#" className="text-body-sm text-cream/70 hover:text-mustard transition-colors">
                  Care Guide
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cream/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-caption text-cream/50">
              © 2024 Calicos. All rights reserved. Handcrafted in Pune, India.
            </p>
            <p className="text-caption text-cream/50">
              DM to order on{" "}
              <a
                href="https://instagram.com/calicosdim"
                target="_blank"
                className="text-mustard hover:text-cream transition-colors"
              >
                Instagram
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
