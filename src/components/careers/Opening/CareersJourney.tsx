import { useState } from "react";
import {
  BriefcaseBusiness,
  Building2,
  Users,
  ArrowUpRight,
} from "lucide-react";
import { SectionLabel } from "../../SectionLabel";

const journeyItems = [
  {
    number: "01",
    phase: "Initiation",
    icon: Users,
    title: "Join the team",
    tagline: "Culture of Rigor & Curiosity",
    text: "Bring your expertise, curiosity, and commitment to a fast-scaling power transmission platform.",
    impactMetric: "Collaborative Project Origin",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=85&w=900",
  },
  {
    number: "02",
    phase: "Acceleration",
    icon: BriefcaseBusiness,
    title: "Take ownership",
    tagline: "Direct Accountability",
    text: "Work across development, execution, and operations with end-to-end responsibility for critical grid outcomes.",
    impactMetric: "Turnkey Asset Delivery",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=85&w=900",
  },
  {
    number: "03",
    phase: "Execution",
    icon: Building2,
    title: "Build at scale",
    tagline: "National Infrastructure",
    text: "Contribute to high-voltage transmission networks supporting India's renewable energy transition.",
    impactMetric: "Sovereign-Scale Uptime",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=85&w=900",
  },
];

export const CareersJourney = () => {
  const [hoveredStage, setHoveredStage] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden bg-brand-bg border-b border-brand-border">

      {/* ============================================================
          BLUEPRINT DOT GRID
      ============================================================ */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(#111361 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* ============================================================
          AMBIENT GLOWS
      ============================================================ */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-brand-orange/10 blur-3xl pointer-events-none" />

      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-brand-navy/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24">

        {/* ============================================================
            HEADER
        ============================================================ */}
        <div className="max-w-3xl mb-10 sm:mb-12 lg:mb-14">

          <div className="mb-3.5">
            <span className="text-base sm:text-lg uppercase tracking-[0.25em] font-semibold text-brand-orange">
  Life at AnantGrid
</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-brand-navy leading-tight tracking-tight">
            A career built around{" "}
            <span className="text-3xl sm:text-4xl lg:text-5xl font-light text-brand-navy leading-tight tracking-tight">
              impact.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg lg:text-lg text-brand-text-secondary font-light leading-relaxed max-w-2xl">
            Experience end-to-end asset ownership within a power transmission
            platform.
          </p>

        </div>

        {/* ============================================================
            JOURNEY CARDS
        ============================================================ */}
        <div className="relative">

          {/* Connecting line */}
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-px bg-brand-navy/10" />

          {/* Orange connection accent */}
          <div className="hidden md:block absolute top-[30px] left-[10%] w-[18%] h-[2px] bg-brand-orange shadow-[0_0_12px_rgba(243,112,67,0.45)]" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">

            {journeyItems.map((item, index) => {
              const Icon = item.icon;
              const isHovered = hoveredStage === index;

              return (
                <article
                  key={item.number}
                  onMouseEnter={() => setHoveredStage(index)}
                  onMouseLeave={() => setHoveredStage(null)}
                  className={`
                    group relative
                    min-h-[430px] sm:min-h-[450px]
                    overflow-hidden rounded-xl
                    bg-[#0c1033]
text-white
border border-brand-orange/30
shadow-[0_24px_60px_rgba(12,16,51,0.35)]
                    transition-all duration-500 ease-out
                    ${
                      isHovered
                        ? "border-brand-orange/70 -translate-y-2 shadow-[0_30px_70px_rgba(12,16,51,0.5)]"
                        : "border-brand-orange/30 shadow-[0_24px_60px_rgba(12,16,51,0.22)]"
                    }
                  `}
                >

                  {/* ==================================================
                      CIRCUIT MATRIX
                  ================================================== */}
                  <div
                    className="absolute inset-0 opacity-15 pointer-events-none"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #F37043 1px, transparent 1px), linear-gradient(to bottom, #F37043 1px, transparent 1px)",
                      backgroundSize: "56px 56px",
                    }}
                  />

                  {/* ==================================================
                      IMAGE
                  ================================================== */}
                  <div className="absolute inset-0 overflow-hidden">

                    <img
                      src={item.image}
                      alt=""
                      loading="lazy"
                      className={`
  absolute inset-0
  w-full h-full
  object-cover
  opacity-40
  transition-transform duration-1000 ease-out
  ${isHovered ? "scale-110" : "scale-100"}
`}
                    />

                    {/* Indigo image treatment */}
                    <div
                      className={`
                        absolute inset-0
                        transition-all duration-500
                        ${
                          isHovered
                            ? "bg-[#0c1033]/45"
                            : "bg-[#0c1033]/65"
                        }
                      `}
                    />

                    {/* Bottom gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c1033] via-[#0c1033]/65 to-transparent" />

                    {/* Orange hover glow */}
                    <div
                      className={`
                        absolute inset-0
                        bg-brand-orange/5
                        transition-opacity duration-500
                        ${isHovered ? "opacity-100" : "opacity-0"}
                      `}
                    />

                  </div>

                  {/* ==================================================
                      RUNNING-STYLE TOP EDGE
                  ================================================== */}
                  <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-white/10 overflow-hidden">

                    <div
                      className={`
                        h-full
                        bg-gradient-to-r
                        from-transparent
                        via-brand-orange
                        to-transparent
                        transition-all duration-500
                        ${
                          isHovered
                            ? "w-full opacity-100 shadow-[0_0_16px_#F37043]"
                            : "w-1/3 opacity-70"
                        }
                      `}
                    />

                  </div>

                  {/* ==================================================
                      CORNER REGISTRATION MARKS
                  ================================================== */}
                  <div className="absolute top-3 right-3 w-2.5 h-2.5 border-t border-r border-white/20" />

                  <div className="absolute bottom-3 left-3 w-2.5 h-2.5 border-b border-l border-white/20" />

                  {/* ==================================================
                      CARD CONTENT
                  ================================================== */}
                  <div className="relative z-10 h-full min-h-[430px] sm:min-h-[450px] p-5 sm:p-7 lg:p-8 flex flex-col justify-between">

                    {/* TOP */}
                    <div>

                      <div className="flex items-center justify-between">

                        {/* Number */}
                        <div
                          className={`
                            w-10 h-10 rounded
                            flex items-center justify-center
                            text-base sm:text-lg
                            font-semibold
                            transition-all duration-400
                            ${
                              isHovered
                                ? "bg-brand-orange text-white border border-brand-orange scale-110 shadow-[0_0_20px_rgba(243,112,67,0.45)]"
                                : "bg-brand-orange/15 text-brand-orange border border-brand-orange/50"
                            }
                          `}
                        >
                          {item.number}
                        </div>

                        {/* Icon */}
                        <div
                          className={`
                            w-10 h-10 rounded
                            border
                            flex items-center justify-center
                            transition-all duration-400
                            ${
                              isHovered
                                ? "bg-brand-orange/20 border-brand-orange/60 text-brand-orange rotate-6 scale-105"
                                : "bg-white/5 border-white/15 text-white/70"
                            }
                          `}
                        >
                          <Icon className="w-5 h-5" />
                        </div>

                      </div>

                      {/* PHASE */}
                      <div className="mt-6">

                        <span
                          className={`
                            text-base sm:text-lg
                            uppercase
                            tracking-[0.3em]
                            font-semibold
                            transition-colors duration-300
                            ${
                              isHovered
                                ? "text-brand-orange"
                                : "text-brand-orange/85"
                            }
                          `}
                        >
                          Phase {item.number}
                        </span>

                        <div
                          className={`
                            mt-3 h-[2px]
                            bg-brand-orange
                            transition-all duration-500
                            ${
                              isHovered
                                ? "w-20 shadow-[0_0_10px_rgba(243,112,67,0.65)]"
                                : "w-10"
                            }
                          `}
                        />

                      </div>

                    </div>

                    {/* BOTTOM */}
                    <div>

                      {/* Tagline */}
                      <span className="block text-base sm:text-lg uppercase tracking-[0.12em] text-white/60 mb-2">
                        {item.tagline}
                      </span>

                      {/* Title */}
                      <h3
                        className={`
                          text-2xl sm:text-3xl
                          font-light
                          leading-tight
                          tracking-tight
                          text-white
                          transition-all duration-500
                          ${
                            isHovered
                              ? "translate-x-1"
                              : ""
                          }
                        `}
                      >
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-3 text-base sm:text-lg lg:text-lg text-slate-200 font-light leading-relaxed max-w-md">
                        {item.text}
                      </p>

                      {/* Bottom row */}
                      <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-3">

                        <div className="flex items-center gap-2 text-base sm:text-lg text-white/65">

                          <span
                            className={`
                              w-2 h-2 rounded-full
                              bg-brand-orange
                              transition-all duration-300
                              ${
                                isHovered
                                  ? "scale-125 shadow-[0_0_10px_rgba(243,112,67,0.9)]"
                                  : ""
                              }
                            `}
                          />

                          <span>{item.impactMetric}</span>

                        </div>

                        

                      </div>

                    </div>

                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* ============================================================
            BOTTOM STATEMENT
        ============================================================ */}
        <div className="mt-10 lg:mt-12 pt-6 border-t border-brand-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

          <span className="text-sm sm:text-base uppercase tracking-[0.16em] text-brand-navy/60">
            Build. Own. Deliver.
          </span>

          <span className="text-sm sm:text-base text-brand-text-secondary">
            Grow with infrastructure that matters.
          </span>

        </div>

      </div>
    </section>
  );
};