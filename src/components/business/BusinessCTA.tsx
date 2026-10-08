import { useEffect, useRef } from "react";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Link } from "@tanstack/react-router";

import { ArrowRight, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export const BusinessCTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const beamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. High-Voltage Laser Beam Animation
      if (beamRef.current) {
        gsap.fromTo(
          beamRef.current,
          { xPercent: -120 },
          {
            xPercent: 250,
            duration: 2.5,
            ease: "power2.inOut",
            repeat: -1,
            repeatDelay: 0.6,
          }
        );
      }

      // 2. Main Scroll Reveal
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(
        cardRef.current,
        {
          opacity: 0,
          y: 40,
          scale: 0.97,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
        }
      )
        // Headline reveal
        .fromTo(
          ".business-cta-headline",
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: "power3.out",
          },
          "-=0.5"
        )
        // Description fade in
        .fromTo(
          ".business-cta-sub",
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.25"
        )
        // Button entrance
        .fromTo(
          ".business-cta-btn",
          { opacity: 0, scale: 0.9, y: 10 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.5,
            ease: "back.out(1.4)",
          },
          "-=0.2"
        );

      // 3. Interactive Cursor Spotlight
      const card = cardRef.current;
      const spotlight = spotlightRef.current;

      if (card && spotlight) {
        const handleMouseMove = (e: MouseEvent) => {
          const rect = card.getBoundingClientRect();

          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          gsap.to(spotlight, {
            x: x - 175,
            y: y - 175,
            duration: 0.25,
            ease: "power1.out",
          });
        };

        const handleMouseLeave = () => {
          gsap.to(spotlight, {
            x: -175,
            y: -175,
            duration: 0.5,
            ease: "power2.out",
          });
        };

        card.addEventListener("mousemove", handleMouseMove);
        card.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          card.removeEventListener("mousemove", handleMouseMove);
          card.removeEventListener("mouseleave", handleMouseLeave);
        };
      }
    }, sectionRef);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-brand-bg text-brand-navy py-16 sm:py-20 lg:py-24 overflow-hidden border-t border-brand-border"
    >
      {/* Blueprint Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#111361 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* ================= ELECTRIC GRID CTA CONTAINER ================= */}
        <div
          ref={cardRef}
          className="relative bg-[#0c1033] text-white rounded-xl p-6 sm:p-12 lg:p-14 overflow-hidden shadow-[0_24px_60px_rgba(12,16,51,0.35)] border border-brand-orange/30 group transition-all duration-300 hover:border-brand-orange/60 hover:shadow-[0_30px_70px_rgba(12,16,51,0.5)] will-change-transform"
        >
          {/* Subtle Circuit Matrix Overlay */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(to right, #F37043 1px, transparent 1px), linear-gradient(to bottom, #F37043 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />

          {/* Mouse Follow Spotlight */}
          <div
            ref={spotlightRef}
            className="absolute w-[350px] h-[350px] bg-radial from-brand-orange/25 via-brand-orange/5 to-transparent rounded-full pointer-events-none blur-2xl top-0 left-0 hidden lg:block"
          />

          {/* Top Running Energy Laser Beam */}
          <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-white/10 overflow-hidden">
            <div
              ref={beamRef}
              className="w-1/3 h-full bg-gradient-to-r from-transparent via-brand-orange to-transparent shadow-[0_0_16px_#F37043]"
            />
          </div>

          {/* Corner Registration Marks */}
          <div className="absolute top-3 right-3 w-2.5 h-2.5 border-t border-r border-white/20" />

          <div className="absolute bottom-3 left-3 w-2.5 h-2.5 border-b border-l border-white/20" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            {/* Left Narrative */}
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded bg-brand-orange/25 border border-brand-orange/50 flex items-center justify-center text-brand-orange">
                  <Zap className="w-3.5 h-3.5 fill-brand-orange" />
                </div>

                <span className="text-sm sm:text-base uppercase tracking-[0.3em] font-semibold text-brand-orange">
                  Our Business
                </span>
              </div>

              <h2 className="business-cta-headline text-3xl sm:text-4xl lg:text-[46px] font-normal text-white leading-[1.12] tracking-tight">
                Building the infrastructure of{" "}
                <span className="font-normal italic text-brand-orange drop-shadow-[0_2px_10px_rgba(243,112,67,0.35)]">
                  tomorrow, today.
                </span>
              </h2>

              <p className="business-cta-sub mt-4 text-base sm:text-lg lg:text-lg text-slate-200 font-light max-w-xl leading-relaxed">
                Partner with AnantGrid on interstate transmission concessions,
                co-bidding consortia, and institutional energy platform
                investments.
              </p>
            </div>

            {/* Right Interactive Button */}
            <div className="flex flex-wrap items-center gap-3.5 shrink-0">
              <Link
                to={"/projects" as any}
                className="business-cta-btn relative inline-flex items-center gap-2.5 bg-brand-orange hover:bg-[#d5551c] text-white px-7 py-3.5 rounded text-sm sm:text-base font-semibold uppercase tracking-wider transition-all duration-300 shadow-[0_4px_20px_rgba(243,112,67,0.35)] hover:shadow-[0_6px_25px_rgba(243,112,67,0.55)] hover:-translate-y-0.5 group overflow-hidden"
              >
                <span>Explore Our Projects</span>

                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};