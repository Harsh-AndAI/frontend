import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Download } from "lucide-react";

import { sustainabilityData } from "@/data/sustainability";

gsap.registerPlugin(ScrollTrigger);

export const ESGPolicyHub = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".esg-policy-card",
        {
          opacity: 0,
          y: 25,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
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
    <section
      ref={sectionRef}
      className="border-b border-brand-border bg-white px-6 py-16 sm:px-10 sm:py-24 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="esg-policy-card relative overflow-hidden border border-brand-border bg-brand-bg">
          {/* Decorative background number */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-6 -top-16 select-none text-[180px] font-semibold leading-none tracking-tighter text-brand-navy/[0.035] sm:text-[240px]"
          >
            ESG
          </div>

          {/* Orange accent */}
          <div className="absolute left-0 top-0 h-1 w-24 bg-brand-orange" />

          <div className="relative grid gap-10 p-7 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:p-14">
            {/* Left */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <div className="h-[2px] w-10 bg-brand-orange" />
                <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-orange">
                  ESG Policy
                </span>
              </div>

              <h2 className="max-w-3xl text-3xl font-light leading-[1.08] tracking-tight text-brand-navy sm:text-5xl lg:text-6xl">
                Environmental, Social{" "}
                <span className="italic">and Governance</span>
              </h2>

              <p className="mt-6 max-w-2xl text-base font-light leading-relaxed text-brand-text-secondary sm:text-lg">
                The ESG Policy establishes AnantGrid's framework for responsible
                and sustainable infrastructure development.
              </p>
            </div>

            {/* Right */}
            <div className="relative">
              <div className="border-l-2 border-brand-orange pl-6 sm:pl-8">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-grey">
                  Responsible Infrastructure
                </span>

                <p className="mt-3 text-xl font-light leading-relaxed text-brand-navy sm:text-2xl">
                  Integrating environmental responsibility, social
                  considerations and strong governance into how we develop and
                  deliver infrastructure.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-grey">
                <span>Environment</span>
                <span className="h-1 w-1 rounded-full bg-brand-orange" />
                <span>Social</span>
                <span className="h-1 w-1 rounded-full bg-brand-orange" />
                <span>Governance</span>
              </div>
            </div>
          </div>

          {/* Bottom detail strip */}
          <div className="relative border-t border-brand-border bg-white px-7 py-5 sm:px-10 lg:px-14">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-grey">
                AnantGrid Private Limited
              </span>

              <span className="text-sm text-brand-text-secondary">
                Responsible growth. Sustainable infrastructure.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};