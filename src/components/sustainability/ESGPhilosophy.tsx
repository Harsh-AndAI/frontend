import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { sustainabilityData } from "@/data/sustainability";

gsap.registerPlugin(ScrollTrigger);

export const ESGPhilosophy = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      tl.fromTo(
        ".phil-text > *",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power2.out" }
      ).fromTo(
        imageRef.current,
        { scale: 1.05, opacity: 0.9 },
        { scale: 1, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.4"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-28 px-6 sm:px-10 lg:px-16 bg-brand-bg border-b border-brand-border"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Statement */}
          <div className="phil-text lg:col-span-7">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="h-[2px] w-8 bg-brand-orange" />
              <span className="text-sm sm:text-base uppercase tracking-[0.25em] font-semibold text-brand-orange">
                {sustainabilityData.philosophy.label}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-brand-navy tracking-tight leading-tight mb-4">
              {sustainabilityData.philosophy.heading}{" "}
              <span className="text-3xl sm:text-4xl lg:text-5xl font-light text-brand-navy tracking-tight leading-tight mb-4">
                {sustainabilityData.philosophy.subheading}
              </span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-brand-text-secondary font-light leading-relaxed mt-6">
              <p>{sustainabilityData.philosophy.paragraph1}</p>
              <p>{sustainabilityData.philosophy.paragraph2}</p>
            </div>

            
          </div>

          {/* Right Column: Infrastructure Visual */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-sm border border-brand-border shadow-md aspect-[4/3] bg-neutral-900">
              <img
                ref={imageRef}
                src={sustainabilityData.philosophy.image}
                alt="Transmission asset sustainability"
                className="w-full h-full object-cover will-change-transform"
              />
              <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-xs px-3 py-1 rounded-xs border border-white/10 text-sm text-slate-200">
                Verified Transmission Asset Corridor
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};