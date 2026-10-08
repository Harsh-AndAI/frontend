import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { shareholderInformation } from "@/data/investors";

gsap.registerPlugin(ScrollTrigger);

export const InvestorShareholderInfo = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".shareholder-item", {
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
      id="shareholder-information"
      ref={sectionRef}
      className="scroll-mt-[140px] bg-brand-bg px-6 py-14 sm:scroll-mt-[160px] sm:px-10 sm:py-20 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* LEFT */}
          <div>
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-[#F37043] sm:text-base">
              Shareholder &amp; Debentureholder information
            </p>

            <h2 className="max-w-xl text-5xl font-normal leading-[1.05] tracking-[-0.03em] text-brand-navy sm:text-6xl lg:text-[4.25rem]">
              Information for{" "}
              investors
            </h2>

            <p className="mt-5 max-w-lg text-lg leading-[1.7] text-brand-text-secondary sm:text-xl">
              Key shareholder, security and debentureholder information will be
              maintained in this section as the approved disclosures become
              available.
            </p>
          </div>

          {/* RIGHT */}
          <div className="border-t border-brand-border">
            {shareholderInformation.map((item) => (
              <article
                key={item.title}
                className="shareholder-item grid gap-4 border-b border-brand-border py-6 sm:grid-cols-[220px_1fr_auto] sm:items-start sm:gap-8"
              >
                <h3 className="text-2xl font-semibold leading-tight text-brand-navy sm:text-3xl">
                  {item.title}
                </h3>

                <p className="max-w-2xl text-base leading-[1.7] text-brand-text-secondary sm:text-lg">
                  {item.description}
                </p>

                <span className="text-xs font-medium uppercase tracking-[0.14em] text-[#F37043] sm:pt-1 sm:text-sm">
                  {item.value}
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};