import { useEffect, useRef } from "react";
import gsap from "gsap";
import { sustainabilityData } from "@/data/sustainability";

export const SustainabilityHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      // Image entrance
      tl.fromTo(
        imageRef.current,
        { scale: 1.08, opacity: 0.88 },
        { scale: 1, opacity: 1, duration: 1.8 }
      );

      // Editorial typography reveals
      tl.fromTo(
        ".sus-hero-eyebrow",
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.4 },
        "-=1.4"
      )
        .fromTo(
          ".sus-hero-title-one",
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=1.1"
        )
        .fromTo(
          ".sus-hero-title-two",
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.9"
        )
        .fromTo(
          ".sus-hero-desc",
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
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          ref={imageRef}
          src="/images/sustainability hero2.jpg"
          alt="AnantGrid High Voltage Transmission Infrastructure"
          className="h-full w-full object-cover object-center will-change-transform"
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[110px] bg-gradient-to-b from-black/45 to-transparent sm:h-[130px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
        <div className="max-w-4xl">
          <div className="sus-hero-eyebrow flex items-center gap-3 mb-6">
            <div className="h-[2px] w-10 bg-[#F37043]" />
            <span className="text-sm sm:text-base uppercase tracking-[0.35em] font-black text-[#F37043]">
              {sustainabilityData.hero.label}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light text-white leading-[1.08] tracking-tight mb-6">
            <span className="sus-hero-title-one block">
              {sustainabilityData.hero.title}
            </span>
            <span className="sus-hero-title-one block">
              {sustainabilityData.hero.subtitleAccent}
            </span>
          </h1>

          <p className="sus-hero-desc text-lg md:text-xl lg:text-2xl text-slate-200 font-light leading-relaxed max-w-2xl">
            {sustainabilityData.hero.description}
          </p>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10">
        <div className="w-px h-10 bg-gradient-to-b from-transparent via-white/40 to-[#F37043]" />
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/60">
          Scroll
        </span>
      </div>
    </section>
  );
};