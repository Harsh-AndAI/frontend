import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Lightbulb, Gauge, ShieldCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const principles = [
  {
    number: "01",
    title: "Innovation",
    description:
      "We apply innovative engineering, digital technologies, and forward-looking solutions to develop efficient and future-ready grid infrastructure.",
    icon: Lightbulb,
    accent: "#F37043",
  },

  {
    number: "02",
    title: "Execution Excellence",
    description:
      "We deliver with integrity, accountability, and excellence, maintaining strong project governance, safety, quality, and disciplined execution.",
    icon: Gauge,
    accent: "#111361",
  },

  {
    number: "03",
    title: "Sustainability",
    description:
      "We integrate sustainability into our decisions and delivery, supporting responsible infrastructure development and India’s transition to a resilient energy future.",
    icon: ShieldCheck,
    accent: "#109648",
  },
];

export const AboutApproach = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header Line & Content Reveal
      gsap.fromTo(
        ".approach-line",
        { scaleX: 0, transformOrigin: "left" },
        {
          scaleX: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".approach-header > *",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // 2. Approach Cards Cascade
      gsap.fromTo(
        ".approach-card",
        {
          opacity: 0,
          y: 35,
          scale: 0.96,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      // 3. Ambient Continuous Pulse on Active Rings
      gsap.to(".beacon-ring", {
        scale: 2,
        opacity: 0,
        duration: 2.2,
        repeat: -1,
        ease: "power2.out",
        stagger: 0.7,
      });
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
      className="relative bg-white text-brand-navy w-full h-auto lg:h-[calc(100vh-78px)] lg:max-h-screen flex items-center overflow-hidden py-14 sm:py-16 lg:py-0 border-b border-slate-200/80"
    >
      {/* Precision Blueprint Dots Pattern */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#111361 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Decorative Technical Crosshairs in Background */}
      <div className="absolute top-8 left-8 w-3.5 h-3.5 border-l border-t border-slate-300 opacity-60 pointer-events-none" />
      <div className="absolute top-8 right-8 w-3.5 h-3.5 border-r border-t border-slate-300 opacity-60 pointer-events-none" />
      <div className="absolute bottom-8 left-8 w-3.5 h-3.5 border-l border-b border-slate-300 opacity-60 pointer-events-none" />
      <div className="absolute bottom-8 right-8 w-3.5 h-3.5 border-r border-b border-slate-300 opacity-60 pointer-events-none" />

      {/* Ambient Lighting Accents */}
      <div className="absolute -top-32 -left-32 w-[360px] h-[360px] rounded-full bg-[#E86326]/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[360px] h-[360px] rounded-full bg-[#109648]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full relative z-10 flex flex-col justify-center">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="approach-header max-w-3xl mb-6 lg:mb-8">
          <div className="flex items-center gap-2.5 mb-2">
            <div className="approach-line h-[2px] w-8 bg-brand-orange" />
            <span className="text-sm sm:text-base uppercase tracking-[0.3em] font-semibold text-brand-orange">
              How We Operate
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-normal text-[#0C1E4E] leading-[1.15] tracking-tight">
            An approach built around{" "}
            <span className="text-2xl sm:text-4xl lg:text-[40px] font-normal text-[#0C1E4E] leading-[1.15] tracking-tight">
              infrastructure excellence.
            </span>
          </h2>
        </div>

        {/* ================= PRINCIPLES INTERACTIVE GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-6 items-stretch">
          {principles.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className="approach-card group relative bg-[#F8FAFC] border border-slate-200/90 rounded-sm p-6 sm:p-7 lg:p-8 flex flex-col justify-between transition-all duration-300 hover:bg-white hover:border-brand-orange/40 hover:shadow-[0_16px_36px_rgba(12,30,78,0.06)] hover:-translate-y-1.5"
              >
                {/* Top Glowing Saffron Edge */}
                <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-brand-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_8px_rgba(232,99,38,0.5)]" />

                {/* Corner Geometric Crosshair Accents */}
                <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Card Header: Index with Pulse Beacon + Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2">
                      {/* Animated Pulse Beacon */}
                      <div className="relative flex items-center justify-center w-2 h-2">
                        <div
                          className="beacon-ring absolute w-2 h-2 rounded-full"
                          style={{ backgroundColor: item.accent }}
                        />
                        <div
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: item.accent }}
                        />
                      </div>
                      <span className="text-sm font-mono font-bold tracking-wider text-brand-navy/80">
                        {item.number}
                      </span>
                    </div>

                    {/* Interactive Icon Box with 3D Flip */}
                    <div className="w-10 h-10 rounded-sm border border-slate-200 bg-white flex items-center justify-center text-brand-navy group-hover:bg-brand-navy group-hover:text-white group-hover:border-brand-navy group-hover:rotate-[4deg] group-hover:scale-105 transition-all duration-300 shadow-xs">
                      <Icon className="w-4 h-4 text-[#E86326] group-hover:text-[#E86326] transition-colors stroke-[1.75]" />
                    </div>
                  </div>

                  {/* Title Box */}
                  <div className="min-h-[50px] lg:min-h-[56px] flex items-center">
                    <h3 className="text-lg sm:text-xl font-normal text-brand-navy leading-snug group-hover:text-brand-orange transition-colors duration-300 leading-snug group-hover:text-[#E86326] transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>

                  {/* Morphing Indicator Line */}
                  <div className="w-8 h-[1.5px] bg-slate-200 group-hover:w-14 group-hover:bg-[#E86326] transition-all duration-300 mb-3.5" />

                  {/* Description */}
                  <p className="text-[#4F647E] text-sm sm:text-base lg:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Technical Accent Strip */}
                <div className="pt-4 mt-6 border-t border-slate-200/60 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-slate-200 group-hover:bg-[#E86326] transition-colors duration-300 rounded-full" />
                    <div className="w-1.5 h-1.5 bg-slate-200 group-hover:bg-[#0C1E4E] transition-colors duration-300 rounded-full" />
                    <div className="w-1.5 h-1.5 bg-slate-200 group-hover:bg-[#109648] transition-colors duration-300 rounded-full" />
                  </div>

                  <div className="h-[1px] w-6 group-hover:w-12 bg-slate-200 group-hover:bg-[#E86326] transition-all duration-300" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};