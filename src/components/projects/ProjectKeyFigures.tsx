import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ProjectKeyFigures = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".figure-item",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
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
    <section
      ref={sectionRef}
      className="py-20 lg:py-24 bg-brand-bg border-b border-brand-border"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="figure-item border-t-2 border-brand-navy pt-6">
            <span className="text-4xl sm:text-5xl font-light text-brand-navy block leading-none mb-2">
              520
            </span>
            <span className="text-sm sm:text-base uppercase tracking-wider font-medium text-brand-text-secondary">
              Circuit Kilometres (ckm)
            </span>
          </div>

          <div className="figure-item border-t-2 border-brand-orange pt-6">
            <span className="text-4xl sm:text-5xl font-light text-brand-orange block leading-none mb-2">
              765 kV
            </span>
            <span className="text-sm sm:text-base uppercase tracking-wider font-medium text-brand-text-secondary">
              Transmission Rating
            </span>
          </div>

          <div className="figure-item border-t-2 border-brand-navy pt-6">
            <span className="text-4xl sm:text-5xl font-light text-brand-navy block leading-none mb-2">
              1,500
            </span>
            <span className="text-sm sm:text-base uppercase tracking-wider font-medium text-brand-text-secondary">
              MVA Added Capacity
            </span>
          </div>

          <div className="figure-item border-t-2 border-brand-navy pt-6">
            <span className="text-4xl sm:text-5xl font-light text-brand-navy block leading-none mb-2">
              14 GW
            </span>
            <span className="text-sm sm:text-base uppercase tracking-wider font-medium text-brand-text-secondary">
              Total Evacuation Target
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};