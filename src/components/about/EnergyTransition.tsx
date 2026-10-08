import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const flowPhases = [
  {
    step: "01",
    title: "Renewable Generation",
    detail: "Interconnection from utility-scale solar & wind energy zones.",
  },
  {
    step: "02",
    title: "Transmission Network",
    detail: "High-voltage interstate & intrastate bulk transmission corridors.",
  },
  {
    step: "03",
    title: "Demand Centres",
    detail: "Direct, resilient delivery to industrial clusters & state discoms.",
  },
];
export const EnergyTransition = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          toggleActions: "play none none none",
        },
      });
      tl.fromTo(
        ".et-header > *",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.65, stagger: 0.1, ease: "power3.out" }
      )
        .fromTo(
          ".et-metric-box",
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.65, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(
          ".et-flow-row",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.55, stagger: 0.1, ease: "power3.out" },
          "-=0.3"
        );
      // Counter animation
      const counter = { val: 0 };
      if (countRef.current) {
        gsap.to(counter, {
          val: 500,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            if (countRef.current) {
              countRef.current.innerText = Math.floor(counter.val).toString();
            }
          },
        });
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
      /* Swapped bg-[#1B2266] -> bg-[#0c1033] (Dark Slate-Indigo) */
      className="relative bg-[#0c1033] text-white w-full h-auto lg:h-[calc(100vh-76px)] lg:max-h-screen flex items-center overflow-hidden py-14 sm:py-16 lg:py-0 border-b border-white/10"
    >
      {/* Precision Blueprint Grid Lines */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full relative z-10 flex flex-col justify-center">
        {/* Main 2-Column Corporate Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* ================= LEFT COLUMN ================= */}
          <div className="lg:col-span-5 et-header flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="h-[1.5px] w-8 bg-[#E86326]" />
                <span className="text-sm sm:text-base uppercase tracking-[0.3em] font-bold text-[#E86326]">
                  India's Energy Transition
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-light leading-[1.1] tracking-tight text-white mb-5">
                The grid must evolve{" "}
                <span className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-light leading-[1.1] tracking-tight text-white mb-5">
                  with the energy landscape.
                </span>
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm lg:text-[15px] leading-relaxed font-light mb-8 max-w-lg">
                As renewable generation expands across India, transmission
                infrastructure must connect generation centres with demand
                centres while strengthening reliability and flexibility across
                the wider grid.
              </p>
            </div>
            {/* Corporate Mandate Keyline */}
            <div className="pt-5 border-t border-white/15 flex items-center gap-3 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-[#E86326]" />
              <span className="text-sm sm:text-base uppercase tracking-[0.2em] font-mono text-slate-300">
                National Grid Reliability Mandate
              </span>
            </div>
          </div>
          {/* ================= RIGHT COLUMN (METRIC + PHASES) ================= */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Top Metric Strip */}
            <div className="et-metric-box border-b border-white/20 pb-6 mb-6">
              <span className="text-sm uppercase tracking-[0.3em] text-[#E86326] font-bold block mb-2">
                National Energy Context
              </span>
              <div className="flex items-baseline gap-4">
                <span
                  ref={countRef}
                  className="text-5xl sm:text-7xl lg:text-8xl font-light text-white font-mono tracking-tighter leading-none"
                >
                  0
                </span>
                <div>
                  <span className="text-xl sm:text-2xl font-semibold text-[#E86326] font-mono block leading-none mb-1">
                    GW
                  </span>
                  <p className="text-sm uppercase tracking-wider text-slate-300 font-mono">
                    Non-fossil target by 2030
                  </p>
                </div>
              </div>
            </div>
            {/* Structured Phase Flow List */}
            <div className="divide-y divide-white/15 border-y border-white/15">
              {flowPhases.map((phase) => (
                <div
                  key={phase.step}
                  className="et-flow-row py-5 sm:py-4.5 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 group hover:bg-white/[0.04] transition-colors"
                >
                  <div className="flex items-baseline gap-3 shrink-0 sm:w-48">
                    <span className="text-sm sm:text-base font-mono text-[#E86326] font-semibold">
                      {phase.step}
                    </span>
                    <h3 className="text-base sm:text-lg font-medium text-white group-hover:text-[#E86326] transition-colors">
                      {phase.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed flex-1">
                    {phase.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};