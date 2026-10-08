import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { stats } from "@/data/content";

gsap.registerPlugin(ScrollTrigger);

export const Stats = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stat-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
        opacity: 0,
        y: 25,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-brand-bg relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,var(--color-brand-navy)_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="container-grid relative z-10 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        {/* Single column on mobile to prevent 10,000 CKM and 1500 MVA collision */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-item flex flex-col group">
              <div className="flex flex-wrap items-baseline gap-1.5 mb-3">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-brand-navy group-hover:text-brand-orange transition-colors duration-300">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm md:text-base font-bold text-brand-orange uppercase tracking-widest">
                  {stat.unit}
                </span>
              </div>

              <div className="h-[1px] w-full bg-slate-200 mb-3 group-hover:bg-brand-orange/40 transition-colors" />

              <h4 className="text-sm sm:text-base font-bold uppercase tracking-[0.2em] text-brand-navy mb-1.5">
                {stat.label}
              </h4>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};