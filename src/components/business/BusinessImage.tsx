import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface ImageProps {
  src: string;
  alt: string;
  tagline: string;
}

export const BusinessImage = ({ src, alt, tagline }: ImageProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Quick scale settle right as image enters viewport
      gsap.fromTo(
        imgRef.current,
        { scale: 1.05, opacity: 0.9 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 88%",
          },
        }
      );

      // Proportional scroll parallax
      gsap.to(imgRef.current, {
        y: -18,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="group relative overflow-hidden rounded-sm border border-slate-200 bg-neutral-900 aspect-[16/9] sm:aspect-[21/10] w-full shadow-lg"
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.02] will-change-transform"
      />

      {/* Subtle neutral bottom gradient strictly for badge contrast (zero blue) */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

      <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex items-center justify-between right-4 sm:right-6 pointer-events-none">
        <span className="text-sm sm:text-base uppercase tracking-[0.2em] text-[#F37043] font-semibold">
          {tagline}
        </span>
        
      </div>
    </div>
  );
};