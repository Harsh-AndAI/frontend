import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export const AboutIntro = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageInnerRef = useRef<HTMLImageElement>(null);
  const curtainRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: sectionRef.current,
    start: "top 88%",
    toggleActions: "play none none none",
  },
});

// 1. Text entrance
tl.fromTo(
  ".intro-line",
  { scaleX: 0, transformOrigin: "left" },
  {
    scaleX: 1,
    duration: 0.3,
    ease: "power2.out",
  }
)
.fromTo(
  ".intro-label",
  { opacity: 0, x: -8 },
  {
    opacity: 1,
    x: 0,
    duration: 0.25,
    ease: "power2.out",
  },
  "-=0.12"
)
.fromTo(
  ".intro-heading",
  { opacity: 0, y: 18 },
  {
    opacity: 1,
    y: 0,
    duration: 0.45,
    ease: "power3.out",
  },
  "-=0.08"
)
.fromTo(
  ".intro-para",
  { opacity: 0, y: 10 },
  {
    opacity: 1,
    y: 0,
    duration: 0.35,
    stagger: 0.05,
    ease: "power2.out",
  },
  "-=0.18"
)

// 2. Image curtain reveal
.fromTo(
  imageContainerRef.current,
  {
    clipPath: "inset(0% 0% 100% 0%)",
    opacity: 0,
    y: 12,
  },
  {
    clipPath: "inset(0% 0% 0% 0%)",
    opacity: 1,
    y: 0,
    duration: 0.75,
    ease: "power3.out",
  },
  "-=0.35"
)

// 3. Copper shutter
.fromTo(
  curtainRef.current,
  {
    scaleY: 1,
    transformOrigin: "top",
  },
  {
    scaleY: 0,
    duration: 0.55,
    ease: "power3.inOut",
  },
  "-=0.6"
)

// 4. Image stabilization
.fromTo(
  imageInnerRef.current,
  {
    scale: 1.15,
    filter: "brightness(0.8) blur(2px)",
  },
  {
    scale: 1,
    filter: "brightness(1) blur(0px)",
    duration: 0.75,
    ease: "power2.out",
  },
  "-=0.55"
)

// 5. Frame
.fromTo(
  frameRef.current,
  {
    opacity: 0,
    scale: 0.9,
    x: -10,
    y: -10,
  },
  {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    duration: 0.4,
    ease: "power2.out",
  },
  "-=0.3"
);

      // Subtle ambient hover for the image block
gsap.to(imageContainerRef.current, {
  y: -5,
  duration: 3.5,
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true,
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
  className="relative bg-white text-brand-navyw-full h-auto lg:h-[calc(100vh-76px)] lg:max-h-screen flex items-center overflow-hidden py-14 sm:py-16 lg:py-0 border-b border-slate-100"
>
      {/* Blueprint background grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#111361 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-14 items-center">
          
          {/* ================= LEFT: CONTENT ================= */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Tag Label */}
            <div className="flex items-center gap-2.5 mb-3">
              <div className="intro-line h-[1.5px] w-8 bg-brand-orange" />
              <span className="intro-label text-sm sm:text-base uppercase tracking-[0.25em] font-semibold text-brand-orange">
                Who We Are
              </span>
            </div>

            {/* Heading */}
            <h2 className="intro-heading text-2xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-light text-brand-navy leading-[1.14] tracking-tight mb-5 leading-[1.14] tracking-tight mb-5">
              Building the infrastructure behind{" "}
              <span className="intro-heading text-2xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-light text-brand-navy leading-[1.14] tracking-tight mb-5 leading-[1.14] tracking-tight mb-5">
                India&apos;s energy transition.
              </span>
            </h2>

            {/* Paragraphs */}
            <div className="space-y-3.5 max-w-xl">
              <p className="intro-para text-base sm:text-lg lg:text-lg text-brand-navy font-normal leading-relaxed">
                AnantGrid Private Limited is a power transmission developer
                committed to building a reliable, efficient and sustainable
                transmission network to support India&apos;s growing energy needs.
              </p>

              <p className="intro-para text-sm sm:text-base lg:text-base text-slate-600 leading-relaxed font-light">
                As India&apos;s power sector evolves with increasing electricity
                demand and the rapid transition towards renewable energy,
                resilient and future-ready transmission infrastructure is
                becoming increasingly important.
              </p>
            </div>

            
          </div>

          {/* ================= RIGHT: ANIMATED VISUAL ================= */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            
            {/* Main Image Container */}
            <div
              ref={imageContainerRef}
className="relative w-full aspect-[4/3] max-h-[360px] lg:max-h-[400px] overflow-hidden rounded-sm border border-slate-200/90 shadow-2xl group will-change-transform"            >
              {/* Copper Wipe Shutter Overlay */}
              <div
                ref={curtainRef}
                className="absolute inset-0 bg-brand-orange z-20 pointer-events-none"
              />

              <img
                ref={imageInnerRef}
                src="/images/transmission-infrastructure.jpg"
                alt="Power transmission infrastructure"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out will-change-transform"
              />

              

              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 flex items-end justify-between z-10">
                <div>
                  <span className="text-[9px] uppercase tracking-[0.25em] text-brand-orange font-semibold block">
                    Infrastructure Asset
                  </span>
                  <p className="text-white text-sm sm:text-base font-light mt-0.5">
                    High-Voltage Corridors &amp; Substations
                  </p>
                </div>
              </div>
            </div>

            {/* Geometric Accent Frame Behind */}
            <div
              ref={frameRef}
              className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-5 w-40 h-40 border-2 border-brand-orange/35 rounded-sm -z-10 pointer-events-none"
            />

          </div>

        </div>
      </div>
    </section>
  );
};