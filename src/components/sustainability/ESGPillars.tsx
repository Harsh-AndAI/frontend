import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { sustainabilityData } from "@/data/sustainability";

gsap.registerPlugin(ScrollTrigger);

export const ESGPillars = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      sustainabilityData.pillars.forEach((pillar) => {
        const row = `.pillar-row-${pillar.id}`;
        const divider = `.pillar-div-${pillar.id}`;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: "top 85%",
          },
        });

        tl.fromTo(
          `${row} .pillar-num`,
          { opacity: 0 },
          { opacity: 1, duration: 0.3 }
        )
          .fromTo(
            divider,
            { width: "0%" },
            { width: "100%", duration: 0.5, ease: "power2.inOut" },
            "-=0.1"
          )
          .fromTo(
            `${row} .pillar-content`,
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" },
            "-=0.3"
          );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-20 lg:py-28 px-6 sm:px-10 lg:px-16 bg-brand-bg border-b border-brand-border">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="h-[2px] w-8 bg-brand-orange" />
            <span className="text-sm sm:text-base uppercase tracking-[0.25em] font-semibold text-brand-orange">
              Framework
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-light text-brand-navy tracking-tight leading-tight">
            Our ESG Architecture
          </h2>
          <p className="mt-3 text-base sm:text-lg text-brand-text-secondary font-light leading-relaxed">
            A comprehensive suite of policies and operational protocols governing environmental mitigation, community well-being, and fiduciary rigor.
          </p>
        </div>

        <div className="space-y-12">
          {sustainabilityData.pillars.map((pillar) => (
            <div key={pillar.id} className={`pillar-row-${pillar.id} pt-4`}>
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                {/* Number + Label */}
                <div className="lg:w-3/12 shrink-0">
                  <span className="pillar-num text-sm sm:text-base font-semibold text-brand-orange block mb-1">
                    {pillar.number} / {pillar.label.toUpperCase()}
                  </span>
                  <h3 className="text-2xl font-light text-brand-navy tracking-tight">
                    {pillar.label}
                  </h3>
                </div>

                {/* Core points */}
                <div className="pillar-content lg:w-9/12">
                  <h4 className="text-lg font-medium text-brand-navy mb-2">
                    {pillar.headline}
                  </h4>
                  <p className="text-base sm:text-lg text-brand-text-secondary font-light leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {pillar.points.map((pt, idx) => (
                      <div key={idx} className="p-4 rounded-xs bg-white border border-brand-border">
                        <span className="text-sm sm:text-base font-semibold text-brand-navy block mb-1">
                          {pt.title}
                        </span>
                        <p className="text-sm sm:text-base text-brand-text-secondary font-light leading-relaxed">
                          {pt.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Animated Divider */}
              <div
                className={`pillar-div-${pillar.id} h-px bg-brand-border mt-10`}
                style={{ width: 0 }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};