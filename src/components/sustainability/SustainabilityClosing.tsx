import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export const SustainabilityClosing = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      tl.fromTo(
        lineRef.current,
        { width: 0 },
        { width: 44, duration: 0.5, ease: "power2.inOut" }
      )
        .fromTo(
          ".closing-headline",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" },
          "-=0.25"
        )
        .fromTo(
          ".closing-sub",
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
          "-=0.25"
        )
        .fromTo(
          ".closing-btn",
          { scale: 0.97, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.35, ease: "back.out(1.4)" },
          "-=0.2"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-28 bg-brand-navy text-white px-6 sm:px-10 lg:px-16 text-center overflow-hidden"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <div ref={lineRef} className="h-[2px] bg-brand-orange mb-6" />

        <h2 className="closing-headline text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-tight mb-4">
          Responsible by{" "}
          <span className="font-normal italic text-brand-orange">
            design.
          </span>
        </h2>

        <p className="closing-sub text-base sm:text-lg lg:text-lg text-slate-300 font-light leading-relaxed max-w-xl mb-8">
          Building and operating high-voltage transmission infrastructure with long-term ecological, community, and fiduciary accountability.
        </p>

        <div className="flex items-center justify-center">
          <Link
            to={"/projects" as any}
            className="closing-btn inline-flex items-center gap-2.5 bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-4 rounded-xs text-sm sm:text-base uppercase tracking-wider font-semibold transition-all shadow-lg hover:-translate-y-0.5"
          >
            <span>Explore Our Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};