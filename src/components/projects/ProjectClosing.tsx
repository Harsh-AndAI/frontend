import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export const ProjectClosing = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      tl.fromTo(
        imageRef.current,
        { scale: 1.08 },
        { scale: 1, duration: 1.8, ease: "power2.out" }
      )
        .fromTo(
          lineRef.current,
          { width: 0 },
          { width: 48, duration: 0.8, ease: "power3.inOut" },
          "-=1.2"
        )
        .fromTo(
          ".closing-content > *",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" },
          "-=0.8"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-[#0c1033] text-white py-24 text-center"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          ref={imageRef}
          src="/images/transmission-infrastructure.jpg"
          alt="Powering a Stronger Grid"
          className="h-full w-full object-cover will-change-transform"
        />
        <div className="absolute inset-0 bg-[#0c1033]/70" />
      </div>

      <div className="closing-content relative z-10 max-w-4xl mx-auto px-6 sm:px-10 flex flex-col items-center">
        <div ref={lineRef} className="h-[2px] bg-brand-orange mb-6" />

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight mb-4 text-white">
          Powering a stronger,{" "}
          <span className="font-normal italic text-brand-orange">
            more resilient grid.
          </span>
        </h2>

        <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-light max-w-xl mb-8 leading-relaxed">
          AnantGrid continues to execute institutional-scale power transmission corridors to ensure India’s clean energy reaches industrial demand centres reliably.
        </p>

        <Link
          to={"/business" as any}
          className="inline-flex items-center gap-2.5 bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-4 rounded-xs text-sm sm:text-base uppercase tracking-wider font-semibold transition-all shadow-lg hover:-translate-y-0.5"
        >
          <span>Explore Platform Capabilities</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};