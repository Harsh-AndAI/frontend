import { useEffect, useRef } from "react";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ProjectHero = () => {
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
        ".hero-status",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=1.5"
      )
        .fromTo(
          ".hero-title",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=1.2"
        )
        .fromTo(
          ".hero-heading",
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
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0c1033] text-white pt-24 pb-16"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          ref={imageRef}
          src="/images/transmission-infrastructure1.png"
          alt="765 kV Transmission Infrastructure"
          className="h-full w-full object-cover object-center will-change-transform brightness-105 contrast-105"
        />

        
      </div>

      <div
        ref={contentRef}
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full"
      >
        <div className="max-w-4xl">

          {/* Project Status */}

          <div className="hero-status flex items-center gap-3 mb-4">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />

            <span className="text-sm sm:text-base uppercase tracking-[0.3em] text-emerald-400 font-semibold">
              Project Status: Under Execution
            </span>
          </div>

          {/* Project Identifier */}

          <span className="hero-title block text-sm sm:text-base uppercase tracking-[0.25em] text-[#F37043] font-bold mb-3">
            Common Transmission System — Part A
          </span>

          {/* Main Heading — unchanged */}

          <h1 className="hero-heading text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-[1.08] tracking-tight mb-6">
            Strengthening Gujarat&apos;s Grid for a{" "}
            <span className="font-normal italic text-[#F37043]">
              Renewable Future.
            </span>
          </h1>

          {/* Description — increased */}

          <p className="hero-desc text-lg sm:text-xl lg:text-2xl text-slate-200 font-light leading-relaxed max-w-2xl">
            A high-capacity 765 kV Double Circuit interstate transmission
            infrastructure project enabling bulk power evacuation from Western
            India’s massive renewable energy complexes.
          </p>

        </div>
      </div>
    </section>
  );
};