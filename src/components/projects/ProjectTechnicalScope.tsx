import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const technicalItems = [
  {
    number: "01",
    title: "765 kV Double Circuit Transmission Line",
    detail:
      "Lakadia-Vadodara line formed via Vadodara-Halvad line (260 km route, 520 ckm length) and interconnection with the existing Lakadia-Halvad corridor.",
  },
  {
    number: "02",
    title: "Vadodara (GIS) Terminal Infrastructure",
    detail:
      "2x765 kV, 240 MVAr switchable line reactors (6 x 80 MVAr) and 2x765 kV GIS line bays for transmission line termination.",
  },
  {
    number: "03",
    title: "Halvad Mid-Point Switching Station Bypass",
    detail:
      "2x765 kV, 330 MVAr switchable mid-point reactors (6 x 110 MVAr), 1x765 kV 110 MVAr spare single-phase reactor, and 2x765 kV line bays.",
  },
  {
    number: "04",
    title: "South Olpad (GIS) Substation Augmentation",
    detail:
      "Installation of 1x1500 MVA, 765/400 kV Inter-Connecting Transformer (ICT) with 1 No 765 kV GIS bay and 1 No 400 kV GIS bay.",
  },
];

export const ProjectTechnicalScope = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      technicalItems.forEach((_, idx) => {
        const row = `.scope-row-${idx}`;
        gsap.fromTo(
          row,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            scrollTrigger: {
              trigger: row,
              start: "top 85%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-brand-bg border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="mb-14">
          <span className="text-sm sm:text-base uppercase tracking-[0.25em] text-brand-orange font-semibold block mb-2">
            Engineering Specifications
          </span>
          <h2 className="text-3xl sm:text-5xl font-light text-brand-navy">Technical Scope</h2>
        </div>

        <div className="divide-y divide-brand-border border-y border-brand-border">
          {technicalItems.map((item, idx) => (
            <div
              key={item.number}
              className={`scope-row-${idx} group py-8 sm:py-10 flex flex-col md:flex-row md:items-baseline justify-between gap-4 sm:gap-8 transition-transform duration-300 hover:translate-x-2`}
            >
              <div className="flex items-baseline gap-4 md:w-1/3 shrink-0">
                <span className="text-sm sm:text-base font-semibold text-brand-orange">{item.number}</span>
                <h3 className="text-lg sm:text-xl font-normal text-brand-navy group-hover:text-brand-orange transition-colors">
                  {item.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed md:w-1/2">
                {item.detail}
              </p>

              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};