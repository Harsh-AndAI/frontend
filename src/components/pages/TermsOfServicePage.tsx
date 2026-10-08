import { FileText } from "lucide-react";

export const TermsOfServicePage = () => {
  return (
    <main className="min-h-screen bg-brand-bg text-brand-text">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0c1033] text-white pt-32 sm:pt-40 pb-20">
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="h-[2px] w-8 bg-brand-orange" />

            <span className="text-sm sm:text-base uppercase tracking-[0.25em] font-semibold text-brand-orange">
              Legal
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight">
            Terms &{" "}
            <span className="font-normal italic text-brand-orange">
              conditions.
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            These terms provide the general framework for accessing and using
            the AnantGrid website.
          </p>

          <div className="mt-8 inline-flex items-center gap-2 text-sm text-slate-400">
            <FileText className="w-4 h-4 text-brand-orange" />
            <span>Last updated: May 2026</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="relative py-16 sm:py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="bg-white border border-brand-border rounded-sm p-7 sm:p-10 lg:p-14 shadow-sm">
            <div className="space-y-12">

              <LegalSection
                number="01"
                title="Acceptance of Terms"
              >
                By accessing or using the AnantGrid website, you acknowledge
                that you have read and understood these Terms of Service and
                agree to comply with applicable laws and regulations.
              </LegalSection>

              <LegalSection
                number="02"
                title="Website Use"
              >
                The website is provided for general informational and business
                purposes. Visitors should use the website responsibly and
                should not attempt to interfere with its operation, security or
                availability.
              </LegalSection>

              <LegalSection
                number="03"
                title="Information on the Website"
              >
                AnantGrid seeks to provide accurate and relevant information
                on its website. However, website content may be updated,
                changed or removed from time to time and should not be treated
                as a substitute for formal contractual, regulatory or
                professional advice.
              </LegalSection>

              <LegalSection
                number="04"
                title="Intellectual Property"
              >
                Unless otherwise stated, website content including text,
                graphics, branding, visual elements and other materials may be
                protected by applicable intellectual property laws. Such
                materials may not be reproduced, modified or distributed
                without appropriate authorisation.
              </LegalSection>

              <LegalSection
                number="05"
                title="Third-Party Links"
              >
                The website may contain links to third-party websites or
                services. Such links are provided for convenience, and
                AnantGrid does not necessarily control or endorse the content,
                availability or practices of third-party websites.
              </LegalSection>

              <LegalSection
                number="06"
                title="Limitation of Liability"
              >
                To the extent permitted by applicable law, AnantGrid shall not
                be responsible for losses arising solely from reliance on
                general website information or from interruptions,
                inaccuracies or technical issues affecting website access.
              </LegalSection>

              <LegalSection
                number="07"
                title="Changes to the Website"
              >
                AnantGrid may modify, suspend or discontinue portions of the
                website, including content and functionality, without prior
                notice where appropriate.
              </LegalSection>

              <LegalSection
                number="08"
                title="Governing Law"
              >
                These Terms of Service are intended to be governed by the
                applicable laws of India, subject to the final legal terms
                approved by AnantGrid.
              </LegalSection>

              <LegalSection
                number="09"
                title="Contact"
              >
                Questions relating to these Terms of Service may be directed
                to AnantGrid Private Limited through the contact details
                published on the website.
              </LegalSection>

              <div className="pt-8 border-t border-brand-border">
                <p className="text-sm text-brand-text-secondary leading-relaxed">
                  <strong className="text-brand-navy">
                    Draft / Placeholder Notice:
                  </strong>{" "}
                  This page is currently a website placeholder and should be
                  replaced or reviewed against the company's final approved
                  legal Terms of Service before production use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

interface LegalSectionProps {
  number: string;
  title: string;
  children: React.ReactNode;
}

const LegalSection = ({
  number,
  title,
  children,
}: LegalSectionProps) => {
  return (
    <section>
      <div className="flex items-center gap-3 mb-3">
        <span className="text-sm font-semibold text-brand-orange tracking-widest">
          {number}
        </span>

        <div className="h-px w-8 bg-brand-orange/50" />
      </div>

      <h2 className="text-xl sm:text-2xl font-medium text-brand-navy mb-3">
        {title}
      </h2>

      <p className="text-sm sm:text-base text-brand-text-secondary font-light leading-8">
        {children}
      </p>
    </section>
  );
};