import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "@tanstack/react-router";
import {
  Zap,
  TowerControl,
  Cpu,
  Leaf,
  ArrowRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const metrics = [
  {
    icon: TowerControl,
    value: "520 ckm",
    label: "TRANSMISSION LENGTH",
    desc: "High-capacity corridor connecting renewable sources",
  },
  {
    icon: Zap,
    value: "765 kV",
    label: "VOLTAGE LEVEL",
    desc: "Enabling long-distance, efficient power transfer",
  },
  {
    icon: Cpu,
    value: "1500 MVA",
    label: "SUBSTATION CAPACITY",
    desc: "Strengthening grid infrastructure",
  },
  {
    icon: Leaf,
    value: "14 GW",
    label: "RENEWABLE EVACUATION",
    desc: "Providing a secure pathway for clean energy",
  },
];

const impactCards = [
  {
    id: "01",
    title: "STRENGTHENING GUJARAT'S GRID",
    desc: "Enhances Gujarat's transmission network and improves regional infrastructure.",
    image: "/images/transmission-infrastructure.jpg",
  },
  {
    id: "02",
    title: "ENABLING RENEWABLE TRANSFER",
    desc: "Creates a reliable pathway for bulk renewable power transfer with greater efficiency.",
    image: "/images/business.jpg",
  },
  {
    id: "03",
    title: "SUPPORTING INDIA'S 500 GW TARGET",
    desc: "Contributes to a cleaner, more resilient energy future through high-capacity transmission infrastructure.",
    image: "/images/transmission-project.jpg",
  },
];

export const ProjectImpact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.fromTo(
        ".impact-anim-header",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        }
      )
        .fromTo(
          ".impact-center-graphic",
          { opacity: 0, scale: 0.96 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.7,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .fromTo(
          ".impact-metric-row",
          { opacity: 0, x: 20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.45,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .fromTo(
          ".impact-card-block",
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.2"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 lg:py-20 bg-brand-bg text-brand-navy overflow-hidden border-t border-brand-border border-b"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* ============================================================
            TOP ROW: INTRO / MAP / KEY FIGURES
        ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center pb-14 border-b border-brand-border">

          {/* ========================================================
              LEFT COLUMN
          ======================================================== */}
          <div className="impact-anim-header lg:col-span-4 flex flex-col justify-center">
            <div>

              {/* Section Label */}
              <div className="flex items-center gap-2.5 mb-4">
                <div className="h-[2px] w-8 bg-brand-orange" />

                <span className="text-sm sm:text-base uppercase tracking-[0.2em] font-bold text-brand-orange">
                  Project Impact
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-light text-brand-navy tracking-tight leading-[1.12]">
                Building a{" "}
                <span className="font-medium">
                  stronger grid
                </span>{" "}
                for{" "}
                <span className="font-normal italic text-brand-orange">
                  a cleaner tomorrow
                </span>
              </h2>

              {/* Description */}
              <p className="mt-5 text-base sm:text-lg text-brand-text-secondary font-light leading-relaxed max-w-sm">
                By integrating 765 kV corridors with advanced switchable
                reactive compensation, this asset stabilizes regional voltage
                profiles and provides a secure route for clean energy transfer.
              </p>

            </div>
          </div>

          {/* ========================================================
              CENTER COLUMN: GUJARAT MAP
          ======================================================== */}
          <div className="impact-center-graphic lg:col-span-4 relative flex items-center justify-center">

            <div className="relative w-full aspect-[4/3.8] max-w-[440px] flex items-center justify-center p-2">

              <img
                src="/images/gujarat-corridor-map2.png"
                alt="Gujarat Transmission Corridor Network Map"
                className="w-full h-full object-contain object-center drop-shadow-sm select-none will-change-transform"
              />

            </div>

          </div>

          {/* ========================================================
              RIGHT COLUMN: KEY METRICS
          ======================================================== */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-6 lg:pl-7 border-l-0 lg:border-l border-brand-border">

            {metrics.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="impact-metric-row flex items-start gap-4"
                >

                  {/* Icon */}
                  <div className="w-11 h-11 rounded-sm bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange shrink-0 mt-0.5">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Content */}
                  <div>

                    {/* Value */}
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl sm:text-3xl font-light text-brand-navy tracking-tight">
                        {item.value}
                      </span>
                    </div>

                    {/* Label */}
                    <span className="text-sm sm:text-base uppercase tracking-[0.16em] font-bold text-brand-orange block mt-1">
                      {item.label}
                    </span>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-brand-text-secondary font-light mt-1 leading-snug">
                      {item.desc}
                    </p>

                  </div>
                </div>
              );
            })}

          </div>
        </div>

        {/* ============================================================
            BOTTOM ROW: EDITORIAL IMPACT CARDS
        ============================================================ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 pt-7">

          {impactCards.map((card) => (
            <article
              key={card.id}
              className="impact-card-block group relative h-[260px] sm:h-[275px] lg:h-[285px] overflow-hidden rounded-sm border border-brand-border bg-white transition-all duration-300 hover:border-brand-orange/50 hover:shadow-lg"
            >

              {/* ======================================================
                  BACKGROUND IMAGE
              ====================================================== */}
              <img
                src={card.image}
                alt={card.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />

              {/* ======================================================
    WHITE LEFT GRADIENT
====================================================== */}
<div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 via-[30%] to-transparent" />

              {/* Soft overall wash */}
              {/* <div className="absolute inset-0 bg-white/5" /> */}

              {/* ======================================================
                  CARD CONTENT
              ====================================================== */}
              <div className="relative z-10 h-full w-full p-5 sm:p-6 lg:p-6 flex flex-col justify-start">

                {/* Number */}
                <span className="text-2xl sm:text-3xl font-medium text-brand-orange leading-none">
                  {card.id}
                </span>

                {/* Heading */}
                <h3 className="mt-5 max-w-[230px] text-base sm:text-lg lg:text-[17px] font-bold uppercase tracking-[0.12em] leading-[1.35] text-brand-navy">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="mt-4 max-w-[230px] text-sm sm:text-base lg:text-[15px] font-normal leading-[1.5] text-brand-text-secondary">
                  {card.desc}
                </p>

              </div>
            </article>
          ))}

        </div>

        {/* ============================================================
            FOOTER STRIP
        ============================================================ */}
        <div className="mt-14 pt-6 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4">

          <span className="text-sm sm:text-base uppercase tracking-[0.18em] text-brand-text-secondary">
            Infrastructure for a Brighter Tomorrow
          </span>
        </div>

      </div>
    </section>
  );
};