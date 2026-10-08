import { useEffect, useRef } from "react";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const VisionMission = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(
        ".vm-vision-group",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
      )
        .fromTo(
          ".vm-values-header",
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" },
          "-=0.2"
        )
        .fromTo(
          ".vm-index-col",
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.25"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full pt-6 sm:pt-8 lg:pt-10 pb-14 sm:pb-16 lg:pb-20 bg-gradient-to-b from-[#FFFDF9] via-[#FFFBF5] to-[#FFF8EE] text-[#111361] overflow-hidden border-b border-slate-200"
    >
      {/* Subtle warm glow background accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 15%, rgba(254, 215, 170, 0.35), transparent 70%), radial-gradient(ellipse 80% 50% at 50% 85%, rgba(253, 186, 116, 0.25), transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col items-center">
        {/* ====================================================
            1. VISION SECTION
        ==================================================== */}

        <div className="vm-vision-group w-full max-w-4xl text-center mb-10 sm:mb-12 lg:mb-14">
          {/* Header with flanked lines */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 mb-3">
            <div className="h-[2px] w-14 sm:w-24 bg-[#111361]/60" />

            <span className="text-base sm:text-lg lg:text-xl font-bold tracking-[0.35em] uppercase text-[#111361]">
              Vision
            </span>

            <div className="h-[2px] w-14 sm:w-24 bg-[#111361]/60" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-[#111361] leading-[1.25] tracking-tight">
            To be the best in class grid infrastructure provider, powering
            India’s growth sustainably.
          </h2>
        </div>

        {/* ====================================================
            2. VALUES (INDEX) SECTION
        ==================================================== */}

        <div className="w-full max-w-5xl text-center">
          {/* Header with flanked lines */}
          <div className="vm-values-header flex items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div className="h-[2px] w-14 sm:w-24 bg-[#111361]/60" />

            <span className="text-base sm:text-lg lg:text-xl font-bold tracking-[0.35em] uppercase text-[#111361]">
              Values
            </span>

            <div className="h-[2px] w-14 sm:w-24 bg-[#111361]/60" />
          </div>

          {/* 4-Column INDEX Acronym Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 items-stretch divide-y-2 md:divide-y-0 md:divide-x-2 divide-[#111361]/25 border-y-2 md:border-y-0 border-[#111361]/20">
            {/* ----------------- IN ----------------- */}

            <div className="vm-index-col py-6 md:py-0 md:px-5 flex flex-col items-center">
              <span className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#0B2074] tracking-tight leading-none mb-6">
                IN
              </span>

              <div className="w-full grid grid-cols-2 divide-x divide-slate-300 items-start">
                {/* Integrity */}
                <div className="flex flex-col items-center px-1">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-[#0B2074] mb-2.5">
                    <svg
                      className="w-9 h-9 sm:w-10 sm:h-10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 2.75 19 5.5v5.25c0 4.8-2.85 8.35-7 10.5-4.15-2.15-7-5.7-7-10.5V5.5L12 2.75Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.75 11.75 2.1 2.1 4.45-4.45"
                      />
                    </svg>
                  </div>

                  <span className="text-sm sm:text-base font-bold text-[#111361]">
                    Integrity
                  </span>
                </div>

                {/* Innovation */}
                <div className="flex flex-col items-center px-1">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-[#0B2074] mb-2.5">
                    <svg
                      className="w-9 h-9 sm:w-10 sm:h-10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.2 14.1A6 6 0 1 1 15.8 14.1c-.9.7-1.3 1.4-1.3 2.15h-5c0-.75-.4-1.45-1.3-2.15Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.5 19h5M10.5 21h3"
                      />
                      <path
                        strokeLinecap="round"
                        d="M12 1.75v2M4.75 4.75l1.4 1.4M19.25 4.75l-1.4 1.4M2.75 11h2M19.25 11h2"
                      />
                      <circle
                        cx="12"
                        cy="10"
                        r="1.25"
                        fill="currentColor"
                        stroke="none"
                      />
                    </svg>
                  </div>

                  <span className="text-sm sm:text-base font-bold text-[#111361]">
                    Innovation
                  </span>
                </div>
              </div>
            </div>

            {/* ----------------- D ----------------- */}

            <div className="vm-index-col py-6 md:py-0 md:px-5 flex flex-col items-center">
              <span className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#F37043] tracking-tight leading-none mb-6">
                D
              </span>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-[#F37043] mb-2.5">
                  <svg
                    className="w-9 h-9 sm:w-10 sm:h-10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="11" cy="13" r="8" />
                    <circle cx="11" cy="13" r="4.5" />
                    <circle
                      cx="11"
                      cy="13"
                      r="1.3"
                      fill="currentColor"
                      stroke="none"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m12.2 11.8 7.05-7.05"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.25 4.75h3v3"
                    />
                  </svg>
                </div>

                <span className="text-sm sm:text-base font-bold text-[#111361]">
                  Delivery
                </span>
              </div>
            </div>

            {/* ----------------- EX ----------------- */}

            <div className="vm-index-col py-6 md:py-0 md:px-5 flex flex-col items-center">
              <span className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#0D8247] tracking-tight leading-none mb-6">
                EX
              </span>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-[#0D8247] mb-2.5">
                  <svg
                    className="w-9 h-9 sm:w-10 sm:h-10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="8.5" r="5" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.8 12.3-2.05 8 5.25-2.65 5.25 2.65-2.05-8"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m9.8 8.45 1.45 1.45 3-3"
                    />
                  </svg>
                </div>

                <span className="text-sm sm:text-base font-bold text-[#111361]">
                  Excellence
                </span>
              </div>
            </div>

            {/* ----------------- S ----------------- */}

            <div className="vm-index-col py-6 md:py-0 md:px-5 flex flex-col items-center">
              <span className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#0B2074] tracking-tight leading-none mb-6">
                S
              </span>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-[#0B2074] mb-2.5">
                  <svg
                    className="w-9 h-9 sm:w-10 sm:h-10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.5 3.5C13 3.7 7.6 6.5 6.1 11.7c-.85 2.9.2 5.45 2.25 6.8 2.35 1.55 5.8.8 8.05-1.7 3.15-3.5 4.05-8.5 4.1-13.3Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 21c2.4-4.1 5.6-7.1 10.4-10"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 16.5c1.2-.05 2.35.25 3.3.85"
                    />
                  </svg>
                </div>

                <span className="text-sm sm:text-base font-bold text-[#111361]">
                  Sustainability
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};