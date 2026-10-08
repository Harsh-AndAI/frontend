import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ProjectStory = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        defaults: { ease: "power3.out" },
      });

      tl.fromTo(
        ".story-heading",
        { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)", opacity: 0 },
        { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", opacity: 1, duration: 0.9 }
      )
        .fromTo(
          ".story-para",
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.15 },
          "-=0.4"
        )
        .fromTo(
          imageRef.current,
          { scale: 1.06, opacity: 0.8 },
          { scale: 1, opacity: 1, duration: 1.2, ease: "power2.out" },
          "-=0.8"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-28 bg-brand-bg border-b border-brand-border"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Narrative */}
          <div className="lg:col-span-6">
            <span className="text-sm sm:text-base uppercase tracking-[0.25em] text-brand-orange font-semibold block mb-3">
              Project Story &amp; Purpose
            </span>

            <h2 className="story-heading text-3xl sm:text-4xl lg:text-5xl font-light text-brand-navy leading-tight tracking-tight mb-6">
              Evacuating renewable power at{" "}
              <span className="font-normal italic text-brand-orange">
                unprecedented scale.
              </span>
            </h2>

            <div className="space-y-4 text-brand-text-secondary leading-relaxed font-light text-base sm:text-lg lg:text-lg">
              <p className="story-para">
                The Government of India has set a national mandate to establish 500 GW of non-fossil energy capacity by 2030. Gujarat has emerged at the forefront of this clean energy movement, hosting expansive utility-scale solar and wind generation complexes.
              </p>
              <p className="story-para">
                As generation capacity expands across Lakadia (7.5 GW), Jam Khambhaliya (5.5 GW), and Jamnagar (1 GW), the transmission network must evolve alongside it. This 765 kV Double Circuit line spans approximately 260 km from the Vadodara Substation to the Halvad Substation, cutting through Vadodara, Anand, Kheda, Ahmedabad, Surendranagar, and Morbi districts.
              </p>
            </div>
          </div>

          {/* Right Supporting Image */}
          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-sm border border-brand-border shadow-xl">
              <img
                ref={imageRef}
                src="/images/transmission-infrastructure.jpg"
                alt="Transmission Infrastructure Asset"
                className="w-full aspect-[4/3] object-cover will-change-transform"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};