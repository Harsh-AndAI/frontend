import { useLayoutEffect, useRef } from "react";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import { complianceContacts } from "@/data/investors";

gsap.registerPlugin(ScrollTrigger);

export const InvestorContacts = () => {

  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {

    const ctx = gsap.context(() => {

      gsap.from(".contact-content", {
        y: 35,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
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
      id="contacts"
      ref={sectionRef}
      className="scroll-mt-[140px] bg-brand-bg px-6 py-10 sm:scroll-mt-[160px] sm:px-10 sm:py-14 lg:px-16"
    >

      <div className="mx-auto max-w-7xl">

        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">

          {/* LEFT */}

          <div className="contact-content">

            <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-[#F37043] sm:text-base">
              Contact Us
            </p>

            <h2 className="text-5xl font-normal leading-[1.05] tracking-[-0.03em] text-brand-navy sm:text-6xl lg:text-[4.25rem]">
              Contact{" "}
              AnantGrid
            </h2>

            <p className="mt-5 max-w-lg text-lg leading-[1.7] text-brand-text-secondary sm:text-xl">
              Connect with AnantGrid for investor, governance and compliance
              related enquiries.
            </p>

          </div>

          {/* RIGHT */}

          <div className="contact-content">

            {/* Corporate */}

            <div className="border-t border-brand-border">

              <div className="border-b border-brand-border py-6 sm:py-7">

                <p className="text-sm font-medium uppercase tracking-[0.14em] text-[#F37043] sm:text-base">
  Corporate
</p>

                <h3 className="mt-4 text-2xl font-normal tracking-tight text-brand-navy sm:text-3xl">
                  Mayank Kumar
                </h3>

                <p className="mt-2 text-base text-brand-text-secondary sm:text-lg">
                  Company Secretary
                </p>

                <p className="mt-1 text-base text-brand-text-secondary sm:text-lg">
                  AnantGrid Private Limited (AGPL)
                </p>

              </div>

              <div className="border-b border-brand-border py-6 sm:py-7">
  <p className="text-lg leading-[1.65] text-brand-navy sm:text-xl">
    Mobile: (+91) 9728349106
  </p>

  <a
    href="mailto:Mayank.Kumar@anantgrid.in"
    className="mt-4 inline-flex text-base font-medium text-brand-navy transition-colors hover:text-[#F37043] sm:text-lg"
  >
    Mayank.Kumar@anantgrid.in
  </a>

  <p className="mt-3 text-base text-brand-text-secondary sm:text-lg">
    Office: 1ˢᵗ Floor, Pride Plaza, Asset 5A, Delhi Aerocity, New Delhi, 110037
  </p>
</div>

              <div className="flex flex-col gap-2 border-b border-brand-border py-6 sm:flex-row sm:items-center sm:justify-between sm:py-7">

                <p className="font-mono text-sm tracking-wider text-brand-navy/50">
                  AnantGrid
                </p>

                <p className="font-mono text-sm tracking-wider text-brand-navy/50">
                  New Delhi, India
                </p>

              </div>

            </div>

            {/* Whistleblower */}

            <div className="mt-6 sm:mt-8">

              <h3 className="text-3xl font-semibold leading-tight text-brand-navy sm:text-4xl">
                Whistleblower reporting
              </h3>

              <p className="mt-4 max-w-2xl text-base leading-[1.7] text-brand-text-secondary sm:text-lg">
                Concerns and reports can be submitted through the designated
                compliance contacts below.
              </p>

              <div className="mt-5 border-t border-brand-border">

                {complianceContacts.map((contact) => (

                  <div
                    key={contact.title}
                    className="border-b border-brand-border py-6 sm:py-7"
                  >

                    <div className="grid gap-5 sm:grid-cols-[220px_1fr] sm:gap-10">

                      <div>

                        <h4 className="text-lg font-semibold text-brand-navy sm:text-xl">
                          {contact.title}
                        </h4>

                        <p className="mt-2 text-sm leading-relaxed text-brand-text-secondary sm:text-base">
                          {contact.detail}
                        </p>

                      </div>

                      <div>

                        <p className="text-base leading-[1.7] text-brand-text-secondary sm:text-lg">
                          {contact.address}
                        </p>

                        <a
                          href={`mailto:${contact.email}`}
                          className="group mt-4 inline-flex items-center gap-2 text-base font-medium text-brand-navy transition-colors hover:text-[#F37043]"
                        >

                          <span>{contact.email}</span>

                          <span className="transition-transform duration-300 group-hover:translate-x-1">
                            →
                          </span>

                        </a>

                      </div>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
};