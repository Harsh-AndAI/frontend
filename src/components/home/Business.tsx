import React, { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  GitFork,
  FileSpreadsheet,
  Zap,
  Users,
} from "lucide-react";
import { segments } from "@/data/content";

const defaultIcons = [GitFork, FileSpreadsheet, Zap, Users];

export const Business = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const displaySegments = segments.slice(0, 4);

  // --- THEME COLOR CONFIGURATION ---
  // Electric Blue Theme (Matches high-voltage power transmission & navy background)
  const lineActiveColor = "#00D2FF";     // Bright highlight color when hovered
  const lineBaseColor = "rgba(0, 210, 255, 0.35)"; // Idle line color
  const lineGlowColor = "#80E8FF";       // Mid-glow gradient color

  return (
    <section className="relative w-full min-h-screen bg-[#050A14] text-white px-5 sm:px-10 lg:px-16 pt-6 sm:pt-8 lg:pt-10 pb-3 flex flex-col overflow-hidden selection:bg-brand-orange selection:text-white">

      {/* ================= BACKGROUND INFRASTRUCTURE LAYER ================= */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/transmission-infrastructure.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-navy/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/35 via-brand-navy/5 to-transparent" />
      </div>

      {/* ================= CENTRAL POWER MATRIX ================= */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex-1 flex items-center justify-center pt-2 pb-0">
        <div className="relative w-full grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 lg:gap-x-44 lg:gap-y-3 items-center">

          {/* ================= SVG CIRCUIT TRACE WIRES ================= */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
            <svg
              className="w-full h-full"
              viewBox="0 0 1000 500"
              fill="none"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient
                  id="circuit-active-glow"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor={lineActiveColor} stopOpacity="0.3" />
                  <stop offset="50%" stopColor={lineGlowColor} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={lineActiveColor} stopOpacity="0.3" />
                </linearGradient>
              </defs>

              {/* Quadrant 01 */}
              <path
                d="M 420 130 L 460 130 L 460 220 L 500 220"
                stroke={hoveredIdx === 0 ? lineActiveColor : lineBaseColor}
                strokeWidth={hoveredIdx === 0 ? "2.5" : "1.2"}
                className="transition-all duration-300"
              />

              {/* Quadrant 02 */}
              <path
                d="M 580 130 L 540 130 L 540 220 L 500 220"
                stroke={hoveredIdx === 1 ? lineActiveColor : lineBaseColor}
                strokeWidth={hoveredIdx === 1 ? "2.5" : "1.2"}
                className="transition-all duration-300"
              />

              {/* Quadrant 03 */}
              <path
                d="M 420 370 L 460 370 L 460 280 L 500 280"
                stroke={hoveredIdx === 2 ? lineActiveColor : lineBaseColor}
                strokeWidth={hoveredIdx === 2 ? "2.5" : "1.2"}
                className="transition-all duration-300"
              />

              {/* Quadrant 04 */}
              <path
                d="M 580 370 L 540 370 L 540 280 L 500 280"
                stroke={hoveredIdx === 3 ? lineActiveColor : lineBaseColor}
                strokeWidth={hoveredIdx === 3 ? "2.5" : "1.2"}
                className="transition-all duration-300"
              />

              {/* Node connection pins */}
              <circle
                cx="420"
                cy="130"
                r="3"
                fill={hoveredIdx === 0 ? lineActiveColor : lineBaseColor}
                className="transition-all duration-300"
              />
              <circle
                cx="580"
                cy="130"
                r="3"
                fill={hoveredIdx === 1 ? lineActiveColor : lineBaseColor}
                className="transition-all duration-300"
              />
              <circle
                cx="420"
                cy="370"
                r="3"
                fill={hoveredIdx === 2 ? lineActiveColor : lineBaseColor}
                className="transition-all duration-300"
              />
              <circle
                cx="580"
                cy="370"
                r="3"
                fill={hoveredIdx === 3 ? lineActiveColor : lineBaseColor}
                className="transition-all duration-300"
              />
            </svg>
          </div>

          {/* ================= CENTRAL NODE HUB ================= */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex-col items-center justify-center pointer-events-none">
            {/* Ambient Pulse Halo */}
            <div className="absolute w-48 h-48 rounded-2xl bg-brand-orange/20 blur-2xl animate-pulse" />

            {/* Core Node Chamber - Enlarged & Proportional */}
            <div className="relative w-36 h-36 rounded-xl bg-[#070D18]/95 border-2 border-brand-orange shadow-[0_0_35px_rgba(243,112,67,0.45)] flex flex-col items-center justify-center p-4 text-center backdrop-blur-md">
              {/* Corner Registration Crosshairs */}
              <div className="absolute -top-1.5 -left-1.5 w-3.5 h-3.5 border-t-2 border-l-2 border-brand-orange" />
              <div className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 border-t-2 border-r-2 border-brand-orange" />
              <div className="absolute -bottom-1.5 -left-1.5 w-3.5 h-3.5 border-b-2 border-r-2 border-brand-orange" />
              <div className="absolute -bottom-1.5 -right-1.5 w-3.5 h-3.5 border-b-2 border-r-2 border-brand-orange" />

              <span className="text-xs font-mono font-bold tracking-[0.25em] text-white leading-tight uppercase">
                Our
              </span>

              <span className="text-sm font-mono font-extrabold tracking-[0.22em] text-brand-orange leading-tight uppercase my-1">
                Business
              </span>

              <div className="w-8 h-[2px] bg-brand-orange mt-1.5 rounded-full" />
            </div>
          </div>

          {/* ================= QUADRANT CAPABILITY CARDS ================= */}
          {displaySegments.map((segment, index) => {
            const IconComponent = defaultIcons[index % defaultIcons.length];
            const isHovered = hoveredIdx === index;

            return (
              <div
                key={segment.id || index}
                onMouseEnter={() => setHoveredIdx(index)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`group relative z-10 transition-all duration-300 rounded-lg p-6 lg:p-7 flex flex-col justify-between h-[300px] sm:h-[310px] lg:h-[320px] backdrop-blur-md border overflow-hidden ${
                  isHovered
                    ? "bg-[#FAFAF8]/95 border-brand-orange/50 shadow-[0_20px_50px_rgba(17,19,97,0.20),0_0_18px_rgba(243,112,67,0.12)]"
                    : "bg-[#FAFAF8]/95 border-white/80 shadow-[0_20px_50px_rgba(17,19,97,0.18)]"
                }`}
              >
                {/* Giant Numeric Watermark */}
                <span className="absolute -top-3 right-6 text-[90px] sm:text-[120px] lg:text-[140px] font-extrabold text-brand-navy/[0.07] select-none pointer-events-none leading-none tracking-tighter">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Tech Accent Chamfers */}
                <div className="absolute top-0 right-6 w-8 h-[1.5px] bg-brand-orange/40 group-hover:bg-brand-orange transition-colors" />
                <div className="absolute bottom-0 left-6 w-8 h-[1.5px] bg-brand-orange/40 group-hover:bg-brand-orange transition-colors" />

                {/* ================= CARD TOP ================= */}
                <div className="flex items-center justify-between shrink-0 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded bg-brand-orange/10 border border-brand-orange/30 flex items-center justify-center text-brand-orange group-hover:border-brand-orange group-hover:shadow-[0_0_12px_rgba(243,112,67,0.22)] transition-all">
                      <IconComponent className="w-4 h-4 stroke-[1.75]" />
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm uppercase tracking-[0.25em] font-semibold text-brand-orange block">
                        Capability
                      </span>
                      <span className="text-sm sm:text-base font-semibold tracking-wider text-brand-navy">
                        0{index + 1}
                      </span>
                    </div>
                  </div>
                </div>

                {/* ================= CARD BODY ================= */}
                <div className="flex-1 flex flex-col justify-start">
                  <h3 className="text-base sm:text-xl lg:text-2xl font-normal text-brand-navy tracking-tight leading-snug mb-2 group-hover:text-brand-orange transition-colors min-h-[3.25rem]">
                    {segment.title}
                  </h3>

                  <div className="w-8 h-[1.5px] bg-brand-orange mb-2.5 shrink-0" />

                  <p className="text-brand-text-secondary/70 text-sm sm:text-base leading-relaxed font-normal line-clamp-3">
                    {segment.description}
                  </p>
                </div>

                {/* ================= CARD FOOTER ================= */}
                <div className="pt-3 border-t border-brand-border flex items-center justify-between shrink-0 mt-auto">
                  <span className="text-xs sm:text-sm uppercase tracking-wider text-brand-text-secondary">
                    Transmission & Grid Management
                  </span>

                  <Link
                    to={"/business" as any}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded bg-brand-navy hover:bg-brand-navy-soft border border-brand-navy text-sm font-medium text-white transition-all duration-200 group shrink-0"
                  >
                    <span>Explore our business</span>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-orange group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};