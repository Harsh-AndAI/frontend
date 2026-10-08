import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ProjectSnapshot = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const ckmRef = useRef<HTMLSpanElement>(null);
  const mvaRef = useRef<HTMLSpanElement>(null);
  const kvRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
        },
      });

      tl.fromTo(
        ".snapshot-header > *",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 }
      ).fromTo(
        ".snapshot-divider",
        { width: "0%" },
        { width: "100%", duration: 0.8, ease: "power3.inOut" },
        "-=0.3"
      );

      // Counters
      const counters = { ckm: 0, mva: 0, kv: 0 };
      gsap.to(counters, {
        ckm: 520,
        mva: 1500,
        kv: 765,
        duration: 1.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        onUpdate: () => {
          if (ckmRef.current) ckmRef.current.innerText = Math.floor(counters.ckm).toString();
          if (mvaRef.current) mvaRef.current.innerText = Math.floor(counters.mva).toLocaleString();
          if (kvRef.current) kvRef.current.innerText = Math.floor(counters.kv).toString();
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-24 bg-brand-bg border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="snapshot-header flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-sm sm:text-base uppercase tracking-[0.25em] text-brand-orange font-semibold block mb-2">
              Verified Dossier
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-brand-navy">Project Snapshot</h2>
          </div>
          <span className="text-sm sm:text-base uppercase tracking-widest text-brand-grey font-medium">
            Tariff Based Competitive Bidding (TBCB)
          </span>
        </div>

        <div className="snapshot-divider h-[2px] bg-brand-navy/15 mb-12" />

        {/* Primary Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          <div className="border-l-2 border-brand-orange pl-6">
            <div className="flex items-baseline gap-2">
              <span
  ref={ckmRef}
  className="text-5xl sm:text-6xl font-light text-brand-navy"
>
  0
</span>
              <span className="text-xl text-brand-orange font-semibold">ckm</span>
            </div>
            <p className="text-sm sm:text-base uppercase tracking-wider font-medium text-brand-text-secondary mt-2">
              Transmission Circuit Length
            </p>
          </div>

          <div className="border-l-2 border-brand-navy/30 pl-6">
            <div className="flex items-baseline gap-2">
              <span ref={kvRef} className="text-5xl sm:text-6xl font-light text-brand-navy">0</span>
              <span className="text-xl text-brand-orange font-semibold">kV</span>
            </div>
            <p className="text-sm sm:text-base uppercase tracking-wider font-medium text-brand-text-secondary mt-2">
              Operating Voltage Level (Double Circuit)
            </p>
          </div>

          <div className="border-l-2 border-brand-navy/30 pl-6">
            <div className="flex items-baseline gap-2">
              <span ref={mvaRef} className="text-5xl sm:text-6xl font-light text-brand-navy">0</span>
              <span className="text-xl text-brand-orange font-semibold">MVA</span>
            </div>
            <p className="text-sm sm:text-base uppercase tracking-wider font-medium text-brand-text-secondary mt-2">
              Additional Transformation Capacity
            </p>
          </div>
        </div>

        {/* Secondary Details Table */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-brand-border">
          <div>
            <span className="text-sm uppercase tracking-wider font-medium text-brand-text-secondary block mb-1">Location</span>
            <p className="text-sm sm:text-base font-medium text-brand-navy">Gujarat, India</p>
          </div>
          <div>
            <span className="text-sm uppercase tracking-wider font-medium text-brand-text-secondary block mb-1">Route Length</span>
            <p className="text-sm sm:text-base font-medium text-brand-navy">~260 Kilometres</p>
          </div>
          <div>
            <span className="text-sm uppercase tracking-wider font-medium text-brand-text-secondary block mb-1">Concession Type</span>
            <p className="text-sm sm:text-base font-medium text-brand-navy">TBCB / BOOM</p>
          </div>
          <div>
            <span className="text-sm uppercase tracking-wider font-medium text-brand-text-secondary block mb-1">Commissioning</span>
            <p className="text-sm sm:text-base font-medium text-brand-navy">Target Scheduled (TBD)</p>
          </div>
        </div>
      </div>
    </section>
  );
};