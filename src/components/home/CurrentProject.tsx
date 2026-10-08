import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { currentProject } from "@/data/content";
import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export const CurrentProject = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-content-item",
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { clipPath: "inset(0% 0% 100% 0%)", opacity: 0 },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            opacity: 1,
            duration: 1.2,
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
      }
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
      className="relative bg-brand-bg text-brand-text w-full lg:h-screen lg:max-h-screen flex items-center overflow-hidden py-10 lg:py-0"
    >
      {/* Background Tech Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
  backgroundImage: `radial-gradient(#111361 1px, transparent 1px)`,
  backgroundSize: "28px 28px",
}}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* ================= LEFT COLUMN: PROJECT DETAILS ================= */}
          <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
            
            {/* Section Tag */}
            <div className="project-content-item flex items-center gap-2.5 mb-2.5">
              <div className="h-[1.5px] w-6 bg-brand-orange" />
              <span className="text-sm sm:text-base uppercase tracking-[0.25em] font-semibold text-brand-orange">
                Strategic Asset
              </span>
            </div>

            {/* Project Name */}
            <h2 className="project-content-item text-2xl sm:text-3xl lg:text-[38px] xl:text-[42px] font-light text-brand-navy leading-tight tracking-tight mb-2">
              {currentProject.name}
            </h2>

            {/* Location Badge */}
            <div className="project-content-item flex items-center gap-1.5 text-brand-orange font-semibold mb-3">
              <MapPin className="w-4 h-4 shrink-0" />
              <span className="text-sm sm:text-base uppercase tracking-widest">{currentProject.location}</span>
            </div>

            {/* Description */}
            <p className="project-content-item text-brand-text-secondary text-sm sm:text-base lg:text-lg leading-relaxed mb-5 max-w-xl font-normal">
              {currentProject.description}
            </p>

            {/* Facts Grid */}
            <div className="project-content-item grid grid-cols-2 gap-3 sm:gap-4 mb-6 pt-4 border-t border-brand-border">
              {currentProject.facts.map((fact, idx) => (
                <div key={idx} className="bg-white border border-brand-border rounded p-3 transition-colors hover:border-brand-orange/40">
                  <p className="text-xs sm:text-sm uppercase tracking-wider font-semibold text-brand-text-secondary mb-0.5">
                    {fact.label}
                  </p>
                  <p className="text-base sm:text-lg font-bold text-brand-navy">{fact.value}</p>
                </div>
              ))}
            </div>

            {/* Action CTA */}
            <div className="project-content-item">
              <Link
                to={"/projects" as any}
                className="inline-flex items-center gap-2.5 bg-brand-navy text-white px-6 sm:px-8 py-3 rounded-sm font-medium text-sm sm:text-base hover:bg-brand-navy-soft transition-all duration-300 group shadow-md"
              >
                <span>View Project Details</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: PROJECT VISUAL & BADGE ================= */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div ref={imageRef} className="relative mb-10 lg:mb-0">
              <div className="aspect-[16/10] max-h-[360px] lg:max-h-[420px] w-full overflow-hidden rounded border border-brand-border shadow-[0_24px_60px_rgba(17,19,97,0.16)] group">
                <img
                  src="/images/transmission-project.jpg"
                  alt="Transmission Infrastructure Project"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/30 via-transparent to-transparent" />
              </div>

              {/* Status Badge */}
              <div className="absolute -bottom-4 -left-4 z-20 bg-brand-orange px-4 py-3 sm:bottom-4 sm:left-4 sm:px-5 sm:py-3.5 rounded-sm text-white shadow-[0_12px_30px_rgba(243,112,67,0.25)]">
                <p className="text-xs sm:text-sm font-bold uppercase tracking-widest opacity-90">Project Status</p>
                <p className="whitespace-nowrap text-sm sm:text-base font-semibold leading-tight">
  Under Development
</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};