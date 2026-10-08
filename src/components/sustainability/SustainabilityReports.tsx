import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Download } from "lucide-react";
import { sustainabilityData } from "@/data/sustainability";

gsap.registerPlugin(ScrollTrigger);

export const SustainabilityReports = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".report-card-el",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-28 px-6 sm:px-10 lg:px-16 bg-brand-bg border-b border-brand-border"
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="h-[2px] w-8 bg-brand-orange" />

            <span className="text-sm sm:text-base uppercase tracking-[0.25em] font-semibold text-brand-orange">
              Disclosures
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-light text-brand-navy tracking-tight leading-tight">
            Reports &amp; ESG Disclosures
          </h2>

          <p className="mt-3 text-base sm:text-lg text-brand-text-secondary font-light leading-relaxed">
            Transparent reporting on IFC compliance, environmental risk
            mitigation, and occupational health metrics.
          </p>
        </div>

        {/* Latest Report Feature */}
        <div className="report-card-el bg-[#0c1033] text-white p-8 sm:p-12 rounded-sm relative overflow-hidden shadow-xl mb-12">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-sm sm:text-base uppercase tracking-[0.2em] text-brand-orange font-semibold block mb-2">
                Latest Disclosure •{" "}
                {sustainabilityData.reports.latest.period}
              </span>

              <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight mb-4">
                {sustainabilityData.reports.latest.title}
              </h3>

              <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-2xl mb-6">
                {sustainabilityData.reports.latest.summary}
              </p>

              <span className="text-sm text-slate-400 block">
                {sustainabilityData.reports.latest.fileSize}
              </span>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <a
                href={sustainabilityData.reports.latest.downloadUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange/90 text-white px-6 py-3.5 rounded-xs text-sm sm:text-base uppercase tracking-wider font-semibold transition-all shadow-md"
              >
                <span>View Policy Dossier</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={sustainabilityData.reports.latest.downloadUrl}
                download
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 px-6 py-3.5 rounded-xs text-sm sm:text-base uppercase tracking-wider font-semibold transition-all"
              >
                <span>Download Brief</span>
                <Download className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Report Archive Strip */}
        <div className="report-card-el pt-4">
          <h4 className="text-sm sm:text-base uppercase tracking-[0.2em] text-brand-text-secondary font-semibold mb-4">
            Disclosure Archive
          </h4>

          <div className="divide-y divide-brand-border border-y border-brand-border">
            {sustainabilityData.reports.archive.map((item, idx) => (
              <div
                key={idx}
                className="py-4 flex items-center justify-between gap-4 text-sm sm:text-base"
              >
                <div className="flex items-center gap-4">
                  <span className="font-semibold text-brand-navy">
                    {item.year}
                  </span>

                  <span className="text-brand-text-secondary">
                    {item.name}
                  </span>
                </div>

                <span className="text-brand-text-secondary text-sm shrink-0">
                  {item.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};