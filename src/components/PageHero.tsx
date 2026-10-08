import { useEffect, useRef } from "react";

import gsap from "gsap";

interface PageHeroProps {
  label: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  image?: string;
}

export const PageHero = ({
  label,
  title,
  highlight,
  subtitle,
  image,
}: PageHeroProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* =========================================
         1. SUBTLE BACKGROUND ZOOM
         ========================================= */

      gsap.fromTo(
        bgRef.current,
        { scale: 1.08 },
        {
          scale: 1,
          duration: 2.2,
          ease: "power2.out",
        }
      );

      /* =========================================
         2. CONTENT REVEAL
         ========================================= */

      gsap.fromTo(
        contentRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: "power3.out",
          delay: 0.2,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen max-h-screen flex flex-col justify-between overflow-hidden bg-[#0c1033] text-white pt-20"
    >
      {/* =========================================
          BACKGROUND IMAGE
          ========================================= */}

      <div
        ref={bgRef}
        className="absolute inset-0 z-0 overflow-hidden will-change-transform"
      >
        {image && (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center brightness-105 contrast-105 saturate-110"
          />
        )}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[110px] bg-gradient-to-b from-black/45 to-transparent sm:h-[130px]" />



        

        

        
      </div>

      {/* =========================================
          HERO CONTENT
          ========================================= */}

      <div
        ref={contentRef}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 my-auto py-6"
      >
        <div className="max-w-4xl">

          {/* Eyebrow */}

          <div className="flex items-center gap-3 mb-4">
            <div className="h-[2px] w-10 bg-[#E86326]" />

            <span className="text-sm sm:text-base uppercase tracking-[0.3em] font-semibold text-[#E86326]">
              {label}
            </span>
          </div>

          {/* Heading — unchanged */}

          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-[80px] font-normal text-white leading-[1.06] tracking-tight drop-shadow-md mb-6">
  {highlight ? (
    <>
      {title}
      <span className="block font-semibold italic text-brand-orange">
        {highlight}
      </span>
    </>
  ) : (
    title
  )}
</h1>

          {/* Subtitle — increased */}

          {subtitle && (
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed font-normal max-w-2xl drop-shadow">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* =========================================
          SCROLL INDICATOR
          ========================================= */}

      <div className="relative z-10 pb-6 flex flex-col items-center gap-2 shrink-0">
        <div className="w-px h-8 bg-gradient-to-b from-transparent via-white/40 to-[#E86326]" />

        <span className="text-xs uppercase tracking-[0.3em] font-medium text-white/70">
          Scroll Down
        </span>
      </div>
    </section>
  );
};