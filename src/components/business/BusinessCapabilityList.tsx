import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { BusinessCapability } from "@/data/business";

gsap.registerPlugin(ScrollTrigger);

interface ListProps {
  capabilities: BusinessCapability[];
}

export const BusinessCapabilityList = ({ capabilities }: ListProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      capabilities.forEach((_, idx) => {
        const row = `.capability-row-${idx}`;
        const divider = `.capability-divider-${idx}`;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: "top 90%", // Trigger promptly on scroll
          },
        });

        tl.fromTo(
          `${row} .cap-number`,
          { opacity: 0 },
          { opacity: 1, duration: 0.25 }
        )
          .fromTo(
            divider,
            { width: "0%" },
            { width: "100%", duration: 0.45, ease: "power2.inOut" },
            "-=0.15"
          )
          .fromTo(
            `${row} .cap-title`,
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" },
            "-=0.25"
          )
          .fromTo(
            `${row} .cap-desc`,
            { opacity: 0 },
            { opacity: 1, duration: 0.3 },
            "-=0.2"
          );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [capabilities]);

  return (
    <div ref={containerRef} className="w-full mt-8 sm:mt-10">
      <span className="text-sm sm:text-base uppercase tracking-[0.25em] text-[#000000] font-semibold block mb-4">
        Core Competencies &amp; Execution Scope
      </span>

      <div className="space-y-0">
        {capabilities.map((item, idx) => (
          <div key={item.number} className={`capability-row-${idx} group pt-5 pb-5`}>
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-3 sm:gap-6 transition-transform duration-200 group-hover:translate-x-1.5">
              <div className="flex items-baseline gap-4 md:w-5/12 shrink-0">
                <span className="cap-number text-sm sm:text-base font-mono font-bold text-[#F37043]">
                  {item.number}
                </span>
                <h4 className="cap-title text-base sm:text-lg font-medium text-[#111361] group-hover:text-[#F37043] transition-colors">
                  {item.title}
                </h4>
              </div>

              <p className="cap-desc text-sm sm:text-base text-slate-600 font-light leading-relaxed md:w-6/12">
                {item.description}
              </p>

              <div className="hidden md:flex justify-end w-8 text-slate-300 group-hover:text-[#F37043] transition-colors">
                {/* <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" /> */}
              </div>  
            </div>

            <div
              className={`capability-divider-${idx} h-px bg-slate-200 mt-5`}
              style={{ width: 0 }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};