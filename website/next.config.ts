/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [75, 82, 85, 88, 90],
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["gsap", "lenis"],
  },
};

export default nextConfig;
