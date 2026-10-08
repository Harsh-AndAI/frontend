import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { decarbonizationDossier } from "@/data/sustainability";
import { Zap, ShieldCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";

gsap.registerPlugin(ScrollTrigger);

export const DecarbonizationSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".decarb-card",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 px-6 sm:px-10 lg:px-16 bg-[#0c1033] text-white overflow-hidden relative">
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#F37043]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="h-[2px] w-8 bg-brand-orange" />
            <span className="text-sm sm:text-base uppercase tracking-[0.25em] font-semibold text-brand-orange">
              Grid Transition
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight leading-tight">
            {decarbonizationDossier.headline}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            {decarbonizationDossier.subheadline}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {decarbonizationDossier.pillars.map((item, idx) => (
            <div
              key={idx}
              className="decarb-card bg-white/[0.04] border border-white/10 p-7 rounded-sm flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl sm:text-4xl font-light text-brand-orange block mb-2">
                  {item.metric}
                </span>
                <h3 className="text-lg font-medium text-white mb-2">
                  {item.label}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-sm text-slate-400">
                <Zap className="w-3.5 h-3.5 text-brand-orange" />
                <span>Interstate Grid Infrastructure</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action strip */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-6 rounded-xs bg-white/[0.03] border border-white/10">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-[#F37043] shrink-0" />
            <p className="text-sm sm:text-base text-slate-300 font-light">
              Managed under statutory Central Electricity Regulatory Commission (CERC) frameworks and aligned with IFC Performance Standards.
            </p>
          </div>
          <Link
            to={"/projects" as any}
            className="inline-flex items-center gap-2 text-sm sm:text-base uppercase tracking-wider font-semibold text-white bg-brand-orange hover:bg-brand-orange/90 px-6 py-3 rounded-xs shrink-0 transition-colors shadow-md"
          >
            <span>Explore Active Corridor</span>
          </Link>
        </div>
      </div>
    </section>
  );
};