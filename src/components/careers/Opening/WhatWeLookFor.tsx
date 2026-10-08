import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionLabel } from "../../SectionLabel";

gsap.registerPlugin(ScrollTrigger);

const qualities = [
  {
    id: "01",
    title: "Technical capability",
    text: "Strong expertise relevant to the role.",
  },
  {
    id: "02",
    title: "Ownership mindset",
    text: "Responsibility for outcomes from planning to execution.",
  },
  {
    id: "03",
    title: "Collaborative approach",
    text: "Working effectively across teams and disciplines.",
  },
  {
    id: "04",
    title: "Integrity & curiosity",
    text: "A willingness to learn, adapt and improve.",
  },
];

export const WhatWeLookFor = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Left content reveal */
      gsap.fromTo(
        ".lookfor-intro > *",
        {
          opacity: 0,
          y: 24,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            toggleActions: "play none none none",
          },
        }
      );

      /* Quality rows reveal */
      gsap.fromTo(
        ".lookfor-row",
        {
          opacity: 0,
          x: 28,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.55,
          stagger: 0.09,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".lookfor-list",
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );

      /* Divider animation */
      gsap.fromTo(
        ".lookfor-divider",
        {
          scaleX: 0,
          transformOrigin: "left center",
        },
        {
          scaleX: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      /* Decorative vertical line */
      gsap.fromTo(
        ".lookfor-vertical-line",
        {
          scaleY: 0,
          transformOrigin: "top center",
        },
        {
          scaleY: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
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
      className="relative bg-brand-bg text-[#0c1033] py-20 sm:py-24 lg:py-28 overflow-hidden border-b border-brand-border"
    >
      {/* Technical dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#0c1033 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Navy ambient block */}
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-[#0c1033]/[0.045] blur-3xl pointer-events-none" />

      {/* Orange ambient glow */}
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-brand-orange/[0.07] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* LEFT — INTRO */}
          <div className="lookfor-intro lg:col-span-5 relative">
            {/* Vertical decorative line */}
            <div className="lookfor-vertical-line absolute -left-4 sm:-left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-brand-orange via-brand-orange/30 to-transparent hidden lg:block" />

            <SectionLabel >
              What We Look For
            </SectionLabel>

            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-light text-[#0c1033] leading-[1.08] tracking-tight">
              People who want to{" "}
              <span className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-light text-[#0c1033] leading-[1.08] tracking-tight">
                make things happen.
              </span>
            </h2>

            {/* Orange divider */}
            <div className="lookfor-divider w-16 h-[2px] bg-brand-orange mt-8 mb-7" />

            <p className="text-base sm:text-lg text-[#0c1033]/70 leading-relaxed font-light max-w-md">
              We value people who bring expertise, accountability,
              collaboration and a willingness to grow.
            </p>

            {/* Visual statement */}
            <div className="mt-10 relative overflow-hidden bg-[#0c1033] p-6 sm:p-7 max-w-md">
              <div className="absolute top-0 left-0 w-1 h-full bg-brand-orange" />

              <div className="absolute -right-10 -bottom-10 w-32 h-32 rounded-full bg-brand-orange/10 blur-2xl" />

              <p className="relative z-10 text-white text-base sm:text-lg font-light leading-relaxed">
                Build expertise.
                <span className="text-brand-orange">
                  {" "}Take ownership.
                </span>
                <br />
                Create lasting impact.
              </p>
            </div>
          </div>

          {/* RIGHT — QUALITIES */}
          <div className="lookfor-list lg:col-span-7 border-t border-brand-border">
            {qualities.map((quality) => (
              <div
                key={quality.id}
                className="lookfor-row group relative border-b border-brand-border py-6 sm:py-7 cursor-default overflow-hidden"
              >
                {/* Hover background */}
                <div className="absolute inset-0 bg-[#0c1033] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />

                {/* Orange accent */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-brand-orange scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center z-10" />

                <div className="relative z-10 flex items-start gap-5 sm:gap-7 pl-1 sm:pl-3 group-hover:translate-x-2 transition-transform duration-300">
                  {/* Number */}
                  <span className="shrink-0 text-sm sm:text-base font-semibold text-brand-orange pt-1">
                    {quality.id}
                  </span>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-light text-[#0c1033] group-hover:text-white transition-colors duration-300">
                        {quality.title}
                      </h3>
                    </div>

                    <p className="mt-2 text-base sm:text-lg text-slate-500 group-hover:text-slate-300 font-light leading-relaxed max-w-lg transition-colors duration-300">
                      {quality.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};