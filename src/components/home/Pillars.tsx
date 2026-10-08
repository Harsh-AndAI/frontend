import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { pillars } from "@/data/content";
import { Gauge, Leaf, ShieldCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const icons = {
  Gauge,
  Leaf,
  ShieldCheck,
};

export const Pillars = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header reveal
      gsap.fromTo(
        ".pillar-header",
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // 2. Pillar cards reveal
      gsap.fromTo(
        ".pillar-card",
        {
          opacity: 0,
          y: 25,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
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
  className="relative bg-brand-bg text-brand-text overflow-hidden w-full lg:h-[calc(100vh-76px)] lg:max-h-screen flex flex-col justify-center py-6 sm:py-8 lg:py-0"
>
      {/* Subtle Blueprint Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#111361 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Ambient background soft light */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full flex flex-col justify-center relative z-10">
        {/* ================= HEADER AREA ================= */}
        <div className="pillar-header max-w-3xl mb-6 lg:mb-8">
          <div className="flex items-center gap-2.5 mb-2">
            <div className="h-[1.5px] w-6 bg-brand-orange" />
            <span className="text-sm sm:text-base uppercase tracking-[0.25em] font-semibold text-brand-orange">
              Our Foundations
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[38px] xl:text-[42px] font-normal text-brand-navy leading-[1.15] tracking-tight">
            The pillars of <br />
            <span className="font-normal italic text-brand-orange">
              infrastructure excellence.
            </span>
          </h2>
        </div>

        {/* ================= 3 PILLARS CARDS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 items-stretch">
          {pillars.map((pillar, idx) => {
            const IconComponent =
              icons[pillar.icon as keyof typeof icons] || ShieldCheck;
            const stepNumber = String(idx + 1).padStart(2, "0");

            return (
              <div
                key={idx}
                className="pillar-card group relative bg-white border border-brand-border rounded-sm p-6 sm:p-7 lg:p-8 flex flex-col justify-between transition-all duration-300 hover:border-brand-orange/40 hover:shadow-[0_16px_40px_rgba(17,19,97,0.08)] hover:-translate-y-1"
              >
                {/* Top Accent Orange Border Reveal */}
                <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-brand-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Top Bar: Icon + Step Index */}
                  <div className="flex items-center justify-between mb-5 lg:mb-6">
                    <div className="w-11 h-11 lg:w-12 lg:h-12 bg-brand-bg border border-brand-border rounded flex items-center justify-center text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-all duration-300 shadow-sm">
                      <IconComponent className="w-5 h-5 lg:w-5.5 lg:h-5.5 group-hover:text-brand-orange transition-colors stroke-[1.75]" />
                    </div>

                    <span className="text-xl lg:text-2xl font-light text-brand-grey group-hover:text-brand-orange transition-colors tabular-nums font-mono">
                      {stepNumber}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg lg:text-xl font-medium text-brand-navy mb-2.5 group-hover:text-brand-orange transition-colors duration-300">
                    {pillar.title}
                  </h3>

                  {/* Divider */}
                  <div className="w-6 h-[1.5px] bg-brand-border group-hover:w-10 group-hover:bg-brand-orange transition-all duration-300 mb-3" />

                  {/* Description */}
                  <p className="text-brand-text-secondary text-sm sm:text-base lg:text-base leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};