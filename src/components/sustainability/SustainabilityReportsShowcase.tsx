import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FileText, ArrowUpRight, Download } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const sampleReports = [
  {
    year: "2025–26",
    title: "ESG Baseline Disclosure & Policy Charter",
    badge: "Official Mandate",
    desc: "Framework alignment with IFC Performance Standards, stakeholder consultation guidelines, and mitigation protocols.",
    cover: "/images/transmission-project.jpg",
    fileUrl: "/documents/ESG-Policy-AnantGrid.pdf",
  },
  {
    year: "2025",
    title: "Biodiversity & RoW Compensation Protocol",
    badge: "Statutory Directive",
    desc: "Detailed guidelines on ecological screening, line routing clearances, and equitable land acquisition frameworks.",
    cover: "/images/transmission-infrastructure.jpg",
    fileUrl: "/documents/ESG-Policy-AnantGrid.pdf",
  },
];

export const SustainabilityReportsShowcase = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".report-showcase-card",
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.12,
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
              Disclosures &amp; Briefs
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-light text-brand-navy tracking-tight leading-tight">
            Sustainability Disclosures
          </h2>

          <p className="mt-3 text-base sm:text-lg text-brand-text-secondary font-light leading-relaxed">
            Periodic disclosures detailing AnantGrid&apos;s environmental
            diligence, community engagement, and governance oversight.
          </p>
        </div>

        {/* Multi-Card Report Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sampleReports.map((report, idx) => (
            <div
              key={idx}
              className="report-showcase-card group bg-white border border-brand-border rounded-sm overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300 hover:border-brand-orange/50"
            >
              <div>
                {/* Visual Cover Chamber */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-900 border-b border-brand-border">
                  <img
                    src={report.cover}
                    alt={report.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                  <div className="absolute top-4 left-4">
                    <span className="text-sm font-medium uppercase tracking-wider text-white bg-black/50 backdrop-blur-xs px-2.5 py-1 rounded-xs border border-white/10">
                      {report.year}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-sm uppercase tracking-[0.2em] text-brand-orange font-semibold block mb-1">
                      {report.badge}
                    </span>

                    <h3 className="text-xl font-light text-white leading-snug">
                      {report.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-sm sm:text-base text-brand-text-secondary font-light leading-relaxed">
                    {report.desc}
                  </p>
                </div>
              </div>

              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};