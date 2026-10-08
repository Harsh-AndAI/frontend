import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";

export const ProjectsPage = () => {
  const pageContainerRef = useRef<HTMLDivElement>(null);
  const cardImageRef = useRef<HTMLImageElement>(null);
  const navigate = useNavigate();

  const heroContainerRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const lineOneRef = useRef<HTMLSpanElement>(null);
  const lineTwoRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero Animations
      gsap.fromTo(
        bgRef.current,
        { scale: 1.08 },
        { scale: 1, duration: 2, ease: "power2.out" }
      );

      gsap.to(bgRef.current, {
        scale: 1.025,
        x: -8,
        duration: 12,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.set(
        [
          eyebrowRef.current,
          lineOneRef.current,
          lineTwoRef.current,
          subtitleRef.current,
        ],
        { opacity: 0 }
      );
      gsap.set([lineOneRef.current, lineTwoRef.current], { y: 25 });
      gsap.set(eyebrowRef.current, { y: 15 });
      gsap.set(subtitleRef.current, { y: 15 });

      const heroTl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      heroTl
        .to(eyebrowRef.current, { opacity: 1, y: 0, duration: 0.55, delay: 0.2 })
        .to(lineOneRef.current, { opacity: 1, y: 0, duration: 0.7 }, "-=0.25")
        .to(lineTwoRef.current, { opacity: 1, y: 0, duration: 0.7 }, "-=0.5")
        .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.65 }, "-=0.35");

      // 2. Showcase Section Reveal
      const showcaseTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".projects-discovery-section",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        defaults: { ease: "power3.out" },
      });

      showcaseTl
        .fromTo(
          ".projects-intro-text > *",
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 }
        )
        .fromTo(
          cardImageRef.current,
          { scale: 1.06, opacity: 0.88 },
          { scale: 1, opacity: 1, duration: 1.2, ease: "power2.out" },
          "-=0.3"
        )
        .fromTo(
          ".project-info-item",
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 },
          "-=0.8"
        );
    }, pageContainerRef);

    return () => ctx.revert();
  }, []);

  const handleCardClick = () => {
    navigate({ to: "/projects/detail" as any });
  };

  return (
    <div ref={pageContainerRef} className="bg-[#FAFCFE] min-h-screen text-[#0c1033]">
      {/* ===================================================
          01. FULLPAGE HERO SECTION
          =================================================== */}
      <section
        ref={heroContainerRef}
        className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden bg-[#0c1033]"
      >
        <div
          ref={bgRef}
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat will-change-transform"
          style={{
            backgroundImage: 'url("/images/project1.png")',
          }}
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[110px] bg-gradient-to-b from-black/45 to-transparent sm:h-[130px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10 w-full text-white">
          <div className="max-w-5xl pt-28 md:pt-36 pb-24 md:pb-36">
            <div ref={eyebrowRef} className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="h-[2px] w-10 sm:w-12 bg-[#E86326]" />
              <span className="text-sm sm:text-base uppercase tracking-[0.35em] font-semibold text-[#E86326]">
                Portfolio / Transmission Infrastructure
              </span>
            </div>

            <h1
              ref={titleRef}
              className="text-5xl md:text-7xl lg:text-8xl font-normal text-white leading-[1.05] tracking-tight drop-shadow-md"
            >
              <span ref={lineOneRef} className="block">
                Powering transmission
              </span>
              <span
                ref={lineTwoRef}
                className="block font-semibold text-[#E86326] italic"
              >
                growth across India.
              </span>
            </h1>

            
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10">
          <div className="w-px h-10 bg-gradient-to-b from-transparent via-white/30 to-[#E86326]" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/60">
            Scroll
          </span>
        </div>
      </section>

      {/* ===================================================
          02. SINGLE LARGE PROJECT SHOWCASE (MOBILE RESPONSIVE FIX)
          =================================================== */}
      <section className="projects-discovery-section py-16 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="projects-intro-text mb-8 sm:mb-14 max-w-4xl">
          <div className="flex items-center gap-2 mb-2.5">
            <div className="h-[2px] w-8 bg-[#E86326]" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-mono font-bold text-[#E86326]">
              Verified Infrastructure Asset
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#0c1033] leading-tight mb-3">
            Strategic grid assets advancing{" "}
            <span className="font-normal italic text-[#E86326]">
              India&apos;s energy transition.
            </span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-base lg:text-lg font-light leading-relaxed max-w-2xl">
            AnantGrid is establishing dedicated high-capacity transmission lines that provide secure, long-term pathways to move bulk renewable generation directly into national demand centers.
          </p>
        </div>

        {/* Card Container: min-h-[520px] on mobile guarantees badges, text and button never collide */}
        <div
          onClick={handleCardClick}
          className="group relative cursor-pointer overflow-hidden rounded-sm border border-slate-200/80 bg-[#0c1033] text-white shadow-xl transition-all duration-300 hover:border-[#E86326]/50 min-h-[520px] sm:min-h-[460px] lg:min-h-0 lg:aspect-[21/9] flex flex-col justify-between"
        >
          {/* Background Image Layer */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              ref={cardImageRef}
              src="/images/card.png"
              alt="Vadodara-Halvad Transmission Corridor"
              className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
            />
            {/* Dark Scrim */}
            {/* <div className="absolute inset-0 bg-gradient-to-t from-[#0c1033] via-[#0c1033]/70 to-[#0c1033]/40" /> */}
          </div>

          {/* Card Content: Stretched via flex-col to ensure top and bottom elements stay separated */}
          <div className="relative z-10 flex-1 flex flex-col justify-between p-5 sm:p-8 lg:p-12">
            {/* Top Badges */}
            <div className="project-info-item flex flex-wrap items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-2.5 py-1 text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-emerald-400 border border-emerald-500/30">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Under Execution
              </span>
              <span className="rounded-full bg-black/40 backdrop-blur-xs px-2.5 py-1 text-[10px] sm:text-[11px] font-mono tracking-wider text-slate-300 border border-white/10">
                Gujarat, India
              </span>
              <span className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] sm:text-[11px] font-mono font-bold tracking-wider text-white border border-white/30">
  765 kV Double Circuit
</span>
            </div>

            {/* Bottom Title, Summary & CTA */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 mt-auto">
              <div className="max-w-3xl">
                <span className="project-info-item text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#E86326] font-semibold block mb-1.5">
                  Interstate Transmission System — Part A
                </span>
                <h3 className="project-info-item text-xl sm:text-3xl lg:text-4xl font-light tracking-tight text-white leading-snug">
                  Vadodara–Halvad Transmission Corridor
                </h3>
                <p className="project-info-item mt-2 text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-2xl line-clamp-4 sm:line-clamp-none">
                  Dedicated 765 kV evacuation infrastructure delivering reliable transfer capacity for 14 GW of renewable generation from Lakadia (7.5 GW), Jam Khambhaliya (5.5 GW), and Jamnagar (1 GW).
                </p>
              </div>

              <div className="project-info-item flex items-center gap-2.5 shrink-0 pt-2 lg:pt-0">
                <span className="text-xs uppercase tracking-[0.2em] font-mono font-semibold text-white group-hover:text-[#E86326] transition-colors">
                  View Project
                </span>
                <div className="h-9 w-9 rounded-full border border-white/25 bg-black/30 flex items-center justify-center text-white transition-all duration-300 group-hover:border-[#E86326] group-hover:bg-[#E86326] group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};