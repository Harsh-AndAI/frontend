import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, Mail, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export const RecruitmentNotice = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".recruitment-notice-content",
        {
          opacity: 0,
          y: 25,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-brand-navy text-white py-14 sm:py-16 overflow-hidden border-t border-white/10"
    >
      {/* Subtle technical grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      />

      {/* Ambient Orange Glow */}
      <div className="absolute -right-32 -bottom-32 w-80 h-80 rounded-full bg-brand-orange/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="recruitment-notice-content flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          {/* Left */}
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <ShieldCheck className="w-4 h-4 text-brand-orange" />

              <span className="text-sm sm:text-base uppercase tracking-[0.25em] font-semibold text-brand-orange">
                Recruitment Notice
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-light mb-2">
              Apply through official AnantGrid channels.
            </h3>

            <p className="text-base sm:text-lg text-slate-400 font-light leading-relaxed max-w-2xl">
              We encourage candidates to verify recruitment communication and
              share information only through official company channels.
            </p>
          </div>

          {/* Right */}
          <a
            href="mailto:careers@anantgrid.com"
            className="group inline-flex items-center gap-3 w-fit border border-white/15 bg-white/[0.03] px-5 py-3 hover:border-brand-orange/60 hover:bg-brand-orange/10 transition-all duration-300"
          >
            <Mail className="w-4 h-4 text-brand-orange" />

            <span className="text-sm sm:text-base text-slate-200">
              careers@anantgrid.com
            </span>

            <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-brand-orange group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};