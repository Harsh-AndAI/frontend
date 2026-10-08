import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { governanceReferences } from "@/data/investors";

gsap.registerPlugin(ScrollTrigger);

export const InvestorGovernance = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".governance-item", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="scroll-mt-32 bg-brand-bg px-6 py-14 sm:px-10 sm:py-20 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">

          {/* LEFT */}
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-[#F37043] sm:text-base">
              Corporate Governance
            </p>

            <h2 className="max-w-xl text-5xl font-normal leading-[1.05] tracking-[-0.03em] text-brand-navy sm:text-6xl lg:text-[4.25rem]">
              Governance and accountability
            </h2>

            <p className="mt-5 max-w-lg text-lg leading-[1.65] text-brand-text-secondary sm:text-xl">
              Governance responsibilities and reporting mechanisms defined in
              AnantGrid&apos;s compliance framework.
            </p>
          </div>

          {/* RIGHT */}
          <div className="border-t border-brand-border">
            {governanceReferences.map((item, index) => (
              <div
                key={item.title}
                className="governance-item grid gap-4 border-b border-brand-border py-6 sm:grid-cols-[60px_1fr] sm:gap-7"
              >
                <span className="text-base font-medium text-brand-grey">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3 className="text-2xl font-semibold leading-tight text-brand-navy sm:text-3xl">
                    {item.title}
                  </h3>

                  {item.title === "Board of Directors" ? (
                    <>
                      {/* Board Members */}
                      <div className="mt-5 space-y-4">
                        <div className="flex items-center gap-4 border-b border-brand-border pb-3">
                          <span className="w-8 text-xs font-medium tracking-widest text-brand-grey">
                            01
                          </span>

                          <div>
                            <p className="text-xl font-semibold tracking-tight text-brand-navy sm:text-2xl">
                              Vinod Premchand Giri
                            </p>

                            <p className="mt-1 text-xs uppercase tracking-[0.18em] text-brand-text-secondary">
                              Director
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 border-b border-brand-border pb-3">
                          <span className="w-8 text-xs font-medium tracking-widest text-brand-grey">
                            02
                          </span>

                          <div>
                            <p className="text-xl font-semibold tracking-tight text-brand-navy sm:text-2xl">
                              Parag Baduni
                            </p>

                            <p className="mt-1 text-xs uppercase tracking-[0.18em] text-brand-text-secondary">
                              Director
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Board Description */}
                      <p className="mt-5 max-w-2xl text-base leading-[1.65] text-brand-text-secondary sm:text-lg">
                        {item.description}
                      </p>
                    </>
                  ) : (
                    <p className="mt-3 max-w-2xl text-base leading-[1.65] text-brand-text-secondary sm:text-lg">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};