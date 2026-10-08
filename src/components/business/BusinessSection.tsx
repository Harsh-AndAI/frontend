import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { BusinessCategory } from "@/data/business";
import { BusinessImage } from "./BusinessImage";
import { BusinessCapabilityList } from "./BusinessCapabilityList";

gsap.registerPlugin(ScrollTrigger);

/* ============================================================
   EPC PARTNERS
============================================================ */

const epcPartners = [
  {
    name: "Bajel Projects",
    logo: "/partners/bajel.svg",
  },
  {
    name: "APAR Industries",
    logo: "/partners/apar.png",
  },
  {
    name: "TBEA",
    logo: "/partners/tbea.svg",
  },
  {
    name: "KEC International",
    logo: "/partners/kec.png",
  },
  {
    name: "KPIL",
    logo: "/partners/kpil.png",
  },
  {
    name: "GE",
    logo: "/partners/ge.png",
  },
];

interface SectionProps {
  category: BusinessCategory;
  index: number;
}

export const BusinessSection = ({ category, index }: SectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  const isStrategicPartnerships = category.id === "strategic-partnerships";

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });

      tl.fromTo(
        ".section-tag",
        {
          opacity: 0,
          y: 15,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.35,
          ease: "power2.out",
        }
      )
        .fromTo(
          ".section-headline-line",
          {
            yPercent: 100,
            opacity: 0,
          },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.45,
            ease: "power3.out",
          },
          "-=0.2"
        )
        .fromTo(
          ".section-desc",
          {
            opacity: 0,
            y: 12,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.35,
            ease: "power2.out",
          },
          "-=0.25"
        );

      if (isStrategicPartnerships) {
        gsap.fromTo(
          ".epc-heading",
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".epc-partners-section",
              start: "top 88%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [isStrategicPartnerships]);

  return (
    <section
      id={category.id}
      ref={sectionRef}
      className={`py-16 lg:py-24 px-6 sm:px-10 lg:px-16 ${
        index % 2 === 0 ? "bg-brand-bg" : "bg-white"
      } border-b border-slate-200`}
    >
      {isStrategicPartnerships && (
        <style>
          {`
            @keyframes epcMarqueeLoop {
              from {
                transform: translateX(0);
              }
              to {
                transform: translateX(-50%);
              }
            }

            .epc-marquee-track {
              display: flex;
              width: max-content;
              animation: epcMarqueeLoop 24s linear infinite;
              will-change: transform;
            }

            .epc-marquee-set {
              display: flex;
              flex-shrink: 0;
            }

            .epc-marquee-wrapper:hover .epc-marquee-track {
              animation-play-state: paused;
            }

            @media (prefers-reduced-motion: reduce) {
              .epc-marquee-track {
                animation: none;
              }
            }
          `}
        </style>
      )}

      <div className="max-w-7xl mx-auto">
        {/* ====================================================
            SECTION INTRO
        ==================================================== */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <div className="section-tag flex items-center gap-2.5 mb-2.5">
            <div className="h-[2px] w-8 bg-[#F37043]" />
            <span className="text-sm sm:text-base uppercase tracking-[0.25em] font-semibold text-brand-orange">
              {category.tagline}
            </span>
          </div>

          <div className="overflow-hidden py-1 mb-3">
            <h2 className="section-headline-line text-2xl sm:text-4xl lg:text-5xl font-light text-[#111361] tracking-tight leading-tight">
              {category.title}
            </h2>
          </div>

          <p className="section-desc text-sm sm:text-base lg:text-lg text-slate-600 font-light leading-relaxed">
            {category.description}
          </p>
        </div>

        {/* ====================================================
            BUSINESS IMAGE
        ==================================================== */}
        <BusinessImage
          src={category.image}
          alt={category.imageAlt}
          tagline={category.tagline}
        />

        {/* ====================================================
            BUSINESS CAPABILITIES
        ==================================================== */}
        <BusinessCapabilityList capabilities={category.capabilities} />

        {/* ====================================================
            EPC PARTNER SECTION
        ==================================================== */}
        {isStrategicPartnerships && (
          <div className="epc-partners-section mt-14 sm:mt-16 lg:mt-20">
            {/* ================================================
                HEADING
            ================================================ */}
            <div className="epc-heading max-w-4xl mb-7 sm:mb-9">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-[2px] w-8 bg-brand-orange" />
                <span className="text-xs sm:text-sm uppercase tracking-[0.28em] font-semibold text-brand-orange">
                  Partner Ecosystem
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight leading-tight text-brand-navy">
                Trusted by leading EPC Partners.
              </h3>
            </div>

            {/* ================================================
                SEAMLESS CONTINUOUS LOGO CYCLE
            ================================================ */}
            <div className="epc-marquee-wrapper relative w-full overflow-hidden border-y border-slate-200">
              {/* Left fade gradient */}
              <div
                className={`pointer-events-none absolute left-0 top-0 bottom-0 z-20 w-12 sm:w-20 lg:w-28 ${
                  index % 2 === 0
                    ? "bg-gradient-to-r from-brand-bg via-brand-bg/90 to-transparent"
                    : "bg-gradient-to-r from-white via-white/90 to-transparent"
                }`}
              />

              {/* Right fade gradient */}
              <div
                className={`pointer-events-none absolute right-0 top-0 bottom-0 z-20 w-12 sm:w-20 lg:w-28 ${
                  index % 2 === 0
                    ? "bg-gradient-to-l from-brand-bg via-brand-bg/90 to-transparent"
                    : "bg-gradient-to-l from-white via-white/90 to-transparent"
                }`}
              />

              <div className="epc-marquee-track">
                {[1, 2].map((setNum) => (
                  <div
                    key={`marquee-set-${setNum}`}
                    className="epc-marquee-set flex shrink-0"
                    aria-hidden={setNum === 2}
                  >
                    {[...epcPartners, ...epcPartners].map((partner, pIdx) => (
                      <div
                        key={`set-${setNum}-${partner.name}-${pIdx}`}
                        className="
                          group
                          relative
                          flex
                          shrink-0
                          items-center
                          justify-center
                          h-[105px] sm:h-[120px] lg:h-[135px]
                          w-[180px] sm:w-[215px] lg:w-[235px]
                          px-7 sm:px-8
                        "
                      >
                        <img
                          src={partner.logo}
                          alt={setNum === 1 ? `${partner.name} logo` : ""}
                          loading="lazy"
                          className="
                            max-h-[42px] sm:max-h-[50px] lg:max-h-[56px]
                            max-w-[140px] sm:max-w-[165px] lg:max-w-[185px]
                            w-auto
                            object-contain
                            opacity-100
                            transition-transform
                            duration-300
                            ease-out
                            group-hover:scale-105
                          "
                        />
                        <div
                          className="
                            absolute
                            bottom-0
                            left-1/2
                            -translate-x-1/2
                            h-[2px]
                            w-0
                            bg-brand-orange
                            transition-all
                            duration-300
                            group-hover:w-12
                          "
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};