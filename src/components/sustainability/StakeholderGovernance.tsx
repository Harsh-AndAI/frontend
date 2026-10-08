import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building2, BriefcaseBusiness, HardHat, Shield } from "lucide-react";

import { sustainabilityData } from "@/data/sustainability";

gsap.registerPlugin(ScrollTrigger);

export const StakeholderGovernance = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gov-tier-step",
        {
          opacity: 0,
          y: 20,
        },
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

  const getTierIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Shield className="h-5 w-5 text-brand-orange" />;
      case 1:
        return <Building2 className="h-5 w-5 text-brand-orange" />;
      case 2:
        return <BriefcaseBusiness className="h-5 w-5 text-brand-orange" />;
      default:
        return <HardHat className="h-5 w-5 text-brand-orange" />;
    }
  };

  return (
    <section
      ref={sectionRef}
      className="border-b border-brand-border bg-brand-bg px-6 py-14 sm:px-10 sm:py-20 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <div className="mb-3 flex items-center gap-2.5">
            <div className="h-[2px] w-8 bg-brand-orange" />

            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-orange sm:text-base">
              Implementation
            </span>
          </div>

          <h2 className="text-3xl font-light leading-tight tracking-tight text-brand-navy sm:text-5xl">
            Four-tier ESG governance
          </h2>

          <p className="mt-4 text-base font-light leading-relaxed text-brand-text-secondary sm:text-lg">
            The ESG Policy is implemented through an Environmental and Social
            Management System across the transmission project lifecycle.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {sustainabilityData.governance.map((step, index) => (
            <article
              key={step.level}
              className="gov-tier-step flex h-full flex-col border border-brand-border bg-white p-6 sm:p-7"
            >
              <div className="mb-6 flex items-center justify-between border-b border-brand-border pb-4">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
                  {step.level}
                </span>

                <div className="flex h-9 w-9 items-center justify-center border border-brand-border bg-brand-bg">
                  {getTierIcon(index)}
                </div>
              </div>

              <h3 className="text-xl font-semibold leading-tight text-brand-navy">
                {step.title}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-brand-text-secondary sm:text-base">
                {step.responsibility}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};