import { useEffect, useRef } from "react";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ArrowRight, Sparkles, Briefcase, Mail } from "lucide-react";

import { Link } from "@tanstack/react-router";

gsap.registerPlugin(ScrollTrigger);

export const CurrentOpeningsCTA = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const beamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Card entrance animation
      gsap.fromTo(
        cardRef.current,
        {
          opacity: 0,
          y: 35,
          scale: 0.98,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      // Running orange energy beam
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

      // Mouse-tracking spotlight
      const card = cardRef.current;
      const spotlight = spotlightRef.current;

      if (card && spotlight) {
        const handleMouseMove = (e: MouseEvent) => {
          const rect = card.getBoundingClientRect();

          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          gsap.to(spotlight, {
            x: x - 150,
            y: y - 150,
            duration: 0.3,
            ease: "power1.out",
          });
        };

        const handleMouseLeave = () => {
          gsap.to(spotlight, {
            x: -150,
            y: -150,
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
      className="relative bg-brand-bg py-16 sm:py-20 lg:py-24 overflow-hidden border-t border-brand-border"
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

      {/* Subtle outer glows */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-brand-orange/10 blur-3xl pointer-events-none" />

      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-brand-navy/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 relative z-10">
        {/* ================= CAREER CTA CONTAINER ================= */}
        <div
          ref={cardRef}
          className="relative bg-[#0c1033] text-white rounded-xl p-6 sm:p-12 lg:p-14 overflow-hidden shadow-[0_24px_60px_rgba(12,16,51,0.35)] border border-brand-orange/30 group transition-all duration-300 hover:border-brand-orange/60 hover:shadow-[0_30px_70px_rgba(12,16,51,0.5)] will-change-transform"
        >
          {/* Circuit Matrix Overlay */}
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
            className="absolute w-[300px] h-[300px] bg-radial from-brand-orange/25 via-brand-orange/5 to-transparent rounded-full pointer-events-none blur-2xl top-0 left-0 hidden lg:block"
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

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="max-w-2xl">
              <div className="flex items-center gap-2.5 mb-3.5">
                <div className="w-6 h-6 rounded bg-brand-orange/25 border border-brand-orange/50 flex items-center justify-center text-brand-orange">
                  <Sparkles className="w-3.5 h-3.5 text-brand-orange animate-pulse" />
                </div>

                <span className="text-sm sm:text-base uppercase tracking-[0.3em] font-semibold text-brand-orange flex items-center gap-1.5">
                  Careers &amp; Opportunities
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white leading-tight tracking-tight mb-3.5">
                Explore open positions with{" "}
                <span className="text-2xl sm:text-3xl lg:text-4xl font-light text-white leading-tight tracking-tight mb-3.5">
                  AnantGrid.
                </span>
              </h2>

              <p className="text-slate-200 text-base sm:text-lg lg:text-lg font-light leading-relaxed max-w-xl">
                Discover roles across project development, high-voltage
                engineering, bid management, and asset operations engineered
                to power India&apos;s clean energy future.
              </p>
            </div>

            {/* Right Action Button */}
            {/* <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3 shrink-0">
              <Link
                to={"/career-openings" as any}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-orange hover:bg-[#d5551c] text-white text-sm sm:text-base font-semibold uppercase tracking-[0.18em] rounded transition-all duration-300 shadow-[0_4px_20px_rgba(243,112,67,0.35)] hover:shadow-[0_6px_25px_rgba(243,112,67,0.55)] hover:-translate-y-0.5 overflow-hidden"
              >
                <Briefcase className="w-4 h-4 text-white/95" />

                <span>View Current Jobs</span>

                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </div> */}
            <div className="flex shrink-0 flex-col items-start lg:items-end gap-2">
  <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
    For career opportunities
  </span>

  <a
    href="mailto:careers@anantgrid.in"
    className="group inline-flex items-center gap-2 text-base sm:text-lg font-medium text-white transition-colors duration-300 hover:text-brand-orange"
  >
    <Mail className="h-4 w-4 text-brand-orange" />
    <span>careers@anantgrid.in</span>
  </a>
</div>
          </div>
        </div>
      </div>
    </section>
  );
};