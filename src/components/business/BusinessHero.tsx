import { useEffect, useRef } from "react";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const BusinessHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
      });

      // Image entrance

      tl.fromTo(
        imageRef.current,
        { scale: 1.08 },
        { scale: 1, duration: 2.0 }
      );

      // Editorial text reveals

      tl.fromTo(
        ".hero-eyebrow",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=1.5"
      )
        .fromTo(
          ".hero-title-one",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=1.2"
        )
        .fromTo(
          ".hero-title-two",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=1.0"
        )
        .fromTo(
          ".hero-desc",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.7"
        );

      // Subtle parallax during scroll

      gsap.to(imageRef.current, {
        scale: 1.04,
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(contentRef.current, {
        y: -40,
        opacity: 0.85,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-black text-white pt-24 pb-16"
    >
      {/* Background Image Layer */}

      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          ref={imageRef}
          src="/images/business hero2.png"
          alt="AnantGrid Business Operations"
          className="h-full w-full object-cover object-center will-change-transform"
        />
<div className="pointer-events-none absolute inset-x-0 top-0 h-[110px] bg-gradient-to-b from-black/45 to-transparent sm:h-[130px]" />
        

      </div>

      <div
        ref={contentRef}
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full"
      >
        <div className="max-w-4xl">

          {/* Eyebrow */}

          <div className="hero-eyebrow flex items-center gap-3 mb-6">
            <div className="h-[2px] w-10 bg-[#111361]" />

            <span className="text-sm sm:text-base uppercase tracking-[0.35em] font-black text-[#111361] drop-shadow-md">
  Business Platform
</span>
          </div>

          {/* Main Heading — unchanged */}

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light text-white leading-[1.08] tracking-tight mb-6">
            <span className="hero-title-one block">
              Building and enabling
            </span>

            <span className="text-4xl sm:text-6xl lg:text-7xl font-light text-white leading-[1.08] tracking-tight mb-6">
              critical infrastructure for India&apos;s energy future.
            </span>
          </h1>

          {/* Description — increased */}

          
        </div>
      </div>
    </section>
  );
};