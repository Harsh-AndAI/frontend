import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Radio, CheckCircle2, Shield } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export const ProjectCorridorMap = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const busLineRef = useRef<SVGLineElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Dynamic Length Energized Line Animation
      if (busLineRef.current) {
        const line = busLineRef.current;
        const length = line.getTotalLength();
        
        gsap.set(line, { 
          strokeDasharray: length, 
          strokeDashoffset: length 
        });

        gsap.to(line, {
          strokeDashoffset: 0,
          duration: 1.8,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // 2. Sequential Substation Nodes Reveal
      gsap.fromTo(
        ".substation-node",
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.25,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // 3. District Tags Stagger
      gsap.fromTo(
        ".district-tag",
        { opacity: 0, y: 12 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-28 bg-[#0c1033] text-white border-b border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="h-[2px] w-8 bg-[#E86326]" />
              <span className="text-base uppercase tracking-[0.3em] font-mono font-bold text-[#E86326]">
                Route &amp; Transmission Alignment
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight">
              Vadodara–Halvad Interconnection Corridor
            </h2>
          </div>

          <div className="flex items-center gap-4 text-sm sm:text-base text-slate-300">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#E86326] animate-ping" />
              765 kV D/C Energized Alignment
            </span>
            <span className="hidden sm:inline text-white/20">|</span>
            <span className="hidden sm:inline">~260 km Route / 520 ckm</span>
          </div>
        </div>

        {/* ================= TECHNICAL SCHEMATIC CORRIDOR CANVAS ================= */}
        <div className="relative rounded-sm border border-white/15 bg-[#080d26] p-6 sm:p-10 lg:p-12 shadow-2xl">
          {/* Blueprint Grid Background */}
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
              backgroundSize: "32px 32px",
            }}
          />

          {/* Alignment Stage Labels */}
          <div className="relative z-10 flex items-center justify-between text-sm sm:text-base uppercase tracking-widest text-slate-400 mb-8 border-b border-white/10 pb-4">
            <span>[Origin: RE Evacuation Zone]</span>
            <span className="hidden md:inline text-[#E86326] font-semibold">
              Gujarat Interstate Energy Corridor
            </span>
            <span>[Destination: Load Center]</span>
          </div>

          {/* SVG Schematic Busbar */}
          <div className="relative z-10 w-full my-6">
            <svg
              viewBox="0 0 1000 120"
              className="w-full h-auto overflow-visible"
            >
              {/* Ghost Guide Line */}
              <line
                x1="80"
                y1="60"
                x2="920"
                y2="60"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="2"
                strokeDasharray="4 4"
              />

              {/* Active High-Voltage Energized Line */}
              <line
                ref={busLineRef}
                x1="80"
                y1="60"
                x2="920"
                y2="60"
                stroke="#E86326"
                strokeWidth="4"
                strokeLinecap="round"
                className="drop-shadow-[0_0_14px_rgba(232,99,38,0.8)]"
              />

              {/* Node 1: Lakadia Complex (Origin) */}
              <g className="substation-node">
                <circle cx="80" cy="60" r="14" fill="#080d26" stroke="#E86326" strokeWidth="2.5" />
                <circle cx="80" cy="60" r="6" fill="#E86326" />
                <circle cx="80" cy="60" r="22" fill="none" stroke="#E86326" strokeWidth="1" opacity="0.3" />
              </g>

              {/* Node 2: Halvad Switching Station (Midpoint) */}
              <g className="substation-node">
                <circle cx="480" cy="60" r="12" fill="#080d26" stroke="#ffffff" strokeWidth="2.5" />
                <circle cx="480" cy="60" r="5" fill="#ffffff" />
              </g>

              {/* Node 3: Vadodara GIS Substation (Destination) */}
              <g className="substation-node">
                <circle cx="920" cy="60" r="14" fill="#080d26" stroke="#E86326" strokeWidth="2.5" />
                <circle cx="920" cy="60" r="6" fill="#E86326" />
                <circle cx="920" cy="60" r="22" fill="none" stroke="#E86326" strokeWidth="1" opacity="0.3" />
              </g>
            </svg>
          </div>

          {/* Substation Callouts */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {/* 01 Lakadia */}
            <div className="bg-white/[0.03] border border-white/10 rounded-sm p-4">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm sm:text-base uppercase font-semibold uppercase font-mono font-bold text-[#E86326]">
                  Terminal A • Kutch Hub
                </span>
                <Radio className="w-3.5 h-3.5 text-[#E86326]" />
              </div>
              <h3 className="text-base font-semibold text-white">Lakadia Complex</h3>
              <p className="text-base text-slate-300 font-light mt-1">
                Interconnection pooling point evacuating 7.5 GW Phase-II RE generation.
              </p>
            </div>

            {/* 02 Halvad */}
            <div className="bg-white/[0.03] border border-white/10 rounded-sm p-4">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm sm:text-base uppercase font-semibold uppercase font-mono font-bold text-slate-300">
                  Mid-Point Bypass
                </span>
                <Shield className="w-3.5 h-3.5 text-slate-300" />
              </div>
              <h3 className="text-base font-semibold text-white">Halvad Station</h3>
              <p className="text-base text-slate-300 font-light mt-1">
                2x765 kV 330 MVAr switchable mid-point shunt reactors for voltage stability.
              </p>
            </div>

            {/* 03 Vadodara */}
            <div className="bg-white/[0.03] border border-white/10 rounded-sm p-4">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm sm:text-base uppercase font-semibold uppercase font-mono font-bold text-[#E86326]">
                  Terminal B • GIS Substation
                </span>
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E86326]" />
              </div>
              <h3 className="text-base font-semibold text-white">Vadodara (GIS)</h3>
              <p className="text-base text-slate-300 font-light mt-1">
                2x765 kV line bays &amp; 240 MVAr switchable line reactors (6 x 80 MVAr).
              </p>
            </div>
          </div>

          {/* Corridor Districts Ribbon */}
          <div className="relative z-10 mt-8 pt-6 border-t border-white/10">
            <span className="text-sm sm:text-base uppercase tracking-[0.2em] text-slate-400 block mb-3">
              Route Traverse (6 Gujarat Alignment Districts):
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {[
                "Morbi",
                "Surendranagar",
                "Ahmedabad",
                "Kheda",
                "Anand",
                "Vadodara",
              ].map((district, idx) => (
                <span
                  key={district}
                  className="district-tag inline-flex items-center gap-2 bg-white/5 border border-white/15 px-3 py-1.5 rounded-xs text-sm font-semibold text-slate-200"
                >
                  <span className="text-sm sm:text-base uppercase font-semibold text-[#E86326] font-bold">0{idx + 1}</span>
                  {district}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};