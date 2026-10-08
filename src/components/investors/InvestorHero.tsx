import { useEffect, useRef } from "react";

import gsap from "gsap";

export const InvestorHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
      });

      // Image entrance
      tl.fromTo(
        imageRef.current,
        { scale: 1.08, opacity: 0.88 },
        { scale: 1, opacity: 1, duration: 1.8 }
      );

      // Editorial typography reveals
      tl.fromTo(
        ".investor-hero-eyebrow",
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.4 },
        "-=1.4"
      )
        .fromTo(
          ".investor-hero-title-one",
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=1.1"
        )
        .fromTo(
          ".investor-hero-title-two",
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.9"
        )
        .fromTo(
          ".investor-hero-desc",
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.45 },
          "-=0.7"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[85vh] sm:min-h-screen flex items-center overflow-hidden bg-black text-white pt-24 pb-16"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          ref={imageRef}
          src="/images/investors1.png"
          alt="AnantGrid corporate governance and compliance"
          className="h-full w-full object-cover object-center will-change-transform"
        />

        {/* Neutral gradient for text readability */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[110px] bg-gradient-to-b from-black/45 to-transparent sm:h-[130px]" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="investor-hero-eyebrow mb-6 flex items-center gap-3">
            <div className="h-[2px] w-10 bg-[#111361]" />

            <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#111361] sm:text-base">
              Transparency &amp; Accountability
            </span>
          </div>

          {/* Title */}
          <h1 className="mb-6 text-4xl font-light leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
            <span className="investor-hero-title-one block">
              Investor &amp;
            </span>

            <span className="investor-hero-title-one block">
              Compliance.
            </span>
          </h1>

          {/* Description */}
          
        </div>
      </div>

      {/* Scroll prompt */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3">
        <div className="h-10 w-px bg-gradient-to-b from-transparent via-white/40 to-[#F37043]" />

        <span className="text-[10px] uppercase tracking-[0.3em] text-white/60">
          Scroll
        </span>
      </div>
    </section>
  );
};