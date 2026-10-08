import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const culturePrinciples = [
  {
    number: "01",
    title: "Integrity",
    description:
      "Act with integrity, take responsibility for our decisions and build trust through transparency, respect and accountability.",
    icon: ShieldCheck,
  },

  {
    number: "02",
    title: "Innovation",
    description:
      "Challenge conventional thinking, embrace new ideas and apply innovative approaches to build efficient and future-ready infrastructure.",
    icon: TrendingUp,
  },

  {
    number: "03",
    title: "Delivery",
    description:
      "Take ownership of commitments and deliver with discipline, collaboration and a consistent focus on safety, quality and timelines.",
    icon: Target,
  },

  {
    number: "04",
    title: "Excellence",
    description:
      "Set high standards in everything we do, continuously improve and pursue excellence while creating sustainable long-term value.",
    icon: Users,
  },
];

export const CareersCulture = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Culture heading animation
      gsap.fromTo(
        ".career-culture-header > *",
        {
          opacity: 0,
          y: 22,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".career-culture-section",
            start: "top 78%",
            toggleActions: "play none none none",
          },
        }
      );

      // Culture cards animation
      gsap.fromTo(
        ".culture-card",
        {
          opacity: 0,
          y: 25,
          scale: 0.97,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.55,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".culture-grid",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Continuous pulse animation
      gsap.to(".career-pulse", {
        scale: 1.8,
        opacity: 0,
        duration: 2,
        repeat: -1,
        ease: "power2.out",
        stagger: 0.4,
      });
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
      className="career-culture-section relative bg-brand-bg py-20 lg:py-28 overflow-hidden border-b border-brand-border"
    >
      {/* Blueprint Pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#111361 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Ambient Glow */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-brand-orange/[0.045] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="career-culture-header max-w-4xl mb-12 lg:mb-14">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="h-[1.5px] w-8 bg-brand-orange" />

            <span className="text-sm sm:text-base uppercase tracking-[0.3em] font-semibold text-brand-orange">
              Our Culture
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-light leading-[1.1] tracking-tight">
            A workplace built around{" "}
            <span className="text-3xl sm:text-4xl lg:text-[46px] font-light leading-[1.1] tracking-tight">
              people and responsibility.
            </span>
          </h2>

          <p className="mt-5 text-base sm:text-lg lg:text-lg text-slate-600 leading-relaxed max-w-2xl font-light">
            We believe that building critical infrastructure requires people
            who take responsibility, challenge the status quo, work together
            and consistently deliver on their commitments.
          </p>
        </div>

        {/* Culture Cards */}
        <div className="culture-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {culturePrinciples.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className="culture-card group relative flex flex-col bg-white border border-brand-border p-6 sm:p-7 overflow-hidden transition-all duration-300 hover:bg-white hover:border-brand-orange/50 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(17,19,97,0.07)]"
              >
                {/* Top Hover Line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-brand-orange scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-400" />

                {/* Number + Icon */}
                <div className="flex items-center justify-between mb-7">
                  <span className="text-sm sm:text-base font-semibold tracking-wider text-brand-orange">
                    {item.number}
                  </span>

                  <div className="relative w-9 h-9 border border-brand-border bg-brand-bg flex items-center justify-center group-hover:bg-brand-navy group-hover:border-brand-navy transition-all duration-300">
                    <Icon className="w-4 h-4 text-brand-orange" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-light mb-3 text-brand-navy group-hover:text-brand-orange transition-colors">
                  {item.title}
                </h3>

                {/* Divider */}
                <div className="w-7 h-[1.5px] bg-brand-border group-hover:w-12 group-hover:bg-brand-orange transition-all duration-300 mb-4" />

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light">
                  {item.description}
                </p>

                {/* Footer */}
                <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex gap-1">
                    <div className="career-pulse w-1.5 h-1.5 rounded-full bg-brand-orange" />
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                  </div>

                  <span className="text-sm uppercase tracking-widest text-slate-400">
                    Core Principle
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};