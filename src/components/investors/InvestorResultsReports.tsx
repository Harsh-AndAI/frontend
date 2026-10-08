import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { investorResultsReports } from "@/data/investors";

gsap.registerPlugin(ScrollTrigger);

export const InvestorResultsReports = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".results-report-item", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="results-reports"
      ref={sectionRef}
      className="scroll-mt-[140px] bg-white px-6 py-14 sm:scroll-mt-[160px] sm:px-10 sm:py-20 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* LEFT */}
          <div>
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-[#F37043] sm:text-base">
              Results &amp; Reports
            </p>

            <h2 className="max-w-xl text-5xl font-normal leading-[1.05] tracking-[-0.03em] text-brand-navy sm:text-6xl lg:text-[4.25rem]">
              Financial information and
              reports
            </h2>

            <p className="mt-5 max-w-lg text-lg leading-[1.7] text-brand-text-secondary sm:text-xl">
              A central place for approved financial results, annual reports,
              investor presentations and related disclosures.
            </p>

            <p className="mt-4 max-w-lg text-sm leading-relaxed text-brand-grey sm:text-base">
              Some information is currently marked as a placeholder until the
              approved investor documents are available.
            </p>
          </div>

          {/* RIGHT */}
          <div className="border-t border-brand-border">
            {investorResultsReports.map((item) => (
              <article
                key={`${item.period}-${item.title}`}
                className="results-report-item grid gap-4 border-b border-brand-border py-6 sm:grid-cols-[150px_1fr_auto] sm:items-start sm:gap-8"
              >
                <span className="text-base font-medium text-brand-grey">
                  {item.period}
                </span>

                <div>
                  <h3 className="text-2xl font-semibold leading-tight text-brand-navy sm:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-2xl text-base leading-[1.7] text-brand-text-secondary sm:text-lg">
                    {item.description}
                  </p>
                </div>

                <span className="text-xs font-medium uppercase tracking-[0.14em] text-[#F37043] sm:pt-1 sm:text-sm">
                  {item.status}
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};