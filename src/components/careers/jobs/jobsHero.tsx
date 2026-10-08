import { useEffect, useRef } from "react";
import gsap from "gsap";

export const JobsHero = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".jobs-hero-content > *",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".jobs-hero-image",
        { opacity: 0, scale: 1.05 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[360px] sm:min-h-[400px] lg:min-h-[440px] overflow-hidden bg-[#060e18] text-white flex items-center"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://img.etimg.com/thumb/width-1200%2Cheight-1200%2Cimgsize-2453614%2Cresizemode-75%2Cmsid-125883582/industry/indl-goods/svs/engineering/kalpataru-projects-international-bags-orders-worth-rs-2003-crore.jpg"
          alt="Power transmission infrastructure"
          className="jobs-hero-image absolute inset-0 w-full h-full object-cover"
        />

        {/* Readability gradients */}
        <div className="absolute inset-0 bg-[#060e18]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060e18] via-[#060e18]/85 to-[#060e18]/40" />
      </div>

      {/* Copper Glow */}
      <div className="absolute -top-40 right-0 w-80 h-80 rounded-full bg-brand-orange/10 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full relative z-10 pt-24 sm:pt-28 pb-12 sm:pb-16">
        <div className="jobs-hero-content max-w-3xl">
          {/* Label */}
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[2px] w-8 bg-brand-orange" />

            <span className="text-sm sm:text-base uppercase tracking-[0.3em] font-semibold text-brand-orange">
              Job Opportunities
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light leading-[1.08] tracking-tight">
            Build what powers{" "}
            <span className="italic font-normal text-brand-orange">
              tomorrow.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-2xl text-base sm:text-lg lg:text-lg text-slate-300 font-light leading-relaxed">
            Explore opportunities to contribute to India&apos;s evolving power
            transmission infrastructure.
          </p>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-orange/40 to-transparent" />
    </section>
  );
};