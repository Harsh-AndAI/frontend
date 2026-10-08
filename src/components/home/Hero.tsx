import { useEffect, useRef } from "react";

import gsap from "gsap";

import { company } from "@/data/content";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const lineOneRef = useRef<HTMLSpanElement>(null);
  const lineTwoRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background entrance
      gsap.set(bgRef.current, {
  scale: 1,
});

      // Subtle continuous background movement
      

      // Initial content state
      gsap.set(
        [
          eyebrowRef.current,
          lineOneRef.current,
          lineTwoRef.current,
          subtitleRef.current,
        ],
        {
          opacity: 0,
        }
      );

      gsap.set([lineOneRef.current, lineTwoRef.current], {
        y: 25,
      });

      gsap.set(eyebrowRef.current, {
        y: 15,
      });

      gsap.set(subtitleRef.current, {
        y: 15,
      });

      // Content reveal
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.to(eyebrowRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.55,
        delay: 0.2,
      })
        .to(
          lineOneRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
          "-=0.25"
        )
        .to(
          lineTwoRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
          "-=0.5"
        )
        .to(
          subtitleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
          },
          "-=0.35"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-brand-navy"
    >
      {/* Background Image */}

      <div
        ref={bgRef}
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: 'url("/images/heroimg1.png")',
        }}
      >
        
      </div>
{/* Subtle header-only dark overlay */}
<div className="pointer-events-none absolute inset-x-0 top-0 h-[110px] bg-gradient-to-b from-black/45 to-transparent sm:h-[130px]" />
      {/* Main Hero Content */}

      <div className="container-grid relative z-10 w-full text-white">
        <div className="max-w-5xl pt-28 md:pt-36 pb-32 md:pb-40">

          {/* Eyebrow */}

          <div
            ref={eyebrowRef}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-[2px] w-12 bg-brand-orange" />

            <span className="text-sm sm:text-base uppercase tracking-[0.4em] font-black text-[#111361]">
  Nation First Always
</span>
          </div>

          {/* Main Heading — unchanged */}

          <h1
            ref={titleRef}
            className="text-5xl md:text-7xl lg:text-8xl font-normal text-white leading-[1.05] tracking-tight"
          >
            <span
              ref={lineOneRef}
              className="block  text-[#FFFFFF]"
            >
              Powering Transmission
            </span>

            <span
              ref={lineTwoRef}
              className="block  text-[#FFFFFF] "
            >
              Growth in India
            </span>
          </h1>

          {/* Tagline — increased */}

          <p
            ref={subtitleRef}
            className="mt-10 text-lg md:text-xl lg:text-2xl text-white/75 leading-relaxed max-w-2xl"
          >
            {company.tagline}
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/30 to-brand-orange" />

        <span className="text-[10px] uppercase tracking-[0.3em] text-white/60">
          Scroll
        </span>
      </div>

      
    </section>
  );
};