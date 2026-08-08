"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // Detect mobile on mount and window resize
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isMobile) return;

    // Attempt to autoplay video on mobile
    video.play().catch(() => {
      // Autoplay failed, likely due to browser policy
    });

    const handleLoadedData = () => setVideoLoaded(true);
    video.addEventListener("loadeddata", handleLoadedData);
    return () => video.removeEventListener("loadeddata", handleLoadedData);
  }, [isMobile]);

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[600px] overflow-hidden bg-black"
    >
      {/* Desktop: Static Image */}
      {!isMobile && (
        <Image
          src="/assets/hero-desktop.png"
          alt="Calicos hero - hand-block-printed kurtas and casual dresses"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover"
        />
      )}

      {/* Mobile: Video Background */}
      {isMobile && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src="/assets/hero-mobile.mp4" type="video/mp4" />
        </video>
      )}

      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/20 pointer-events-none" />

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-page">
        {/* Hero Text */}
        <div className="flex flex-col items-center text-center max-w-2xl">
          <h1 className="text-display-xl text-cream font-serif mb-6 anim-fade-in font-bold">
            Kurtis that feel like wearing the summer air
          </h1>
          <p className="text-body text-cream/90 mb-10 anim-fade-in max-w-prose">
            Handcrafted kurtas and casual dresses. Block-printed by hand in Pune. Designed for warmth, comfort, and effortless style.
          </p>
          <a
            href="#catalog"
            className="btn btn-primary anim-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Explore
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2">
          <p className="text-caption text-cream/70">Scroll to explore</p>
          <svg
            className="w-4 h-4 text-cream/70 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
