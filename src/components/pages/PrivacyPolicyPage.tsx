import { ShieldCheck } from "lucide-react";

export const PrivacyPolicyPage = () => {
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
            Privacy{" "}
            <span className="font-normal italic text-brand-orange">
              Policy.
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            This page describes how AnantGrid may collect, use and protect
            information when you interact with our website.
          </p>

          <div className="mt-8 inline-flex items-center gap-2 text-sm text-slate-400">
            <ShieldCheck className="w-4 h-4 text-brand-orange" />
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
                title="Introduction"
              >
                AnantGrid Private Limited ("AnantGrid", "we", "our" or "us")
                respects your privacy. This Privacy Policy is provided as a
                placeholder policy for the AnantGrid website and is intended
                to explain the general approach to information handled through
                the website.
              </LegalSection>

              <LegalSection
                number="02"
                title="Information We May Collect"
              >
                Depending on how you interact with the website, information
                may include your name, email address, organisation,
                communication details and information voluntarily submitted
                through website forms.
              </LegalSection>

              <LegalSection
                number="03"
                title="How We May Use Information"
              >
                Information submitted through the website may be used to
                respond to enquiries, communicate with stakeholders, provide
                requested information, improve website functionality and
                support legitimate business and administrative requirements.
              </LegalSection>

              <LegalSection
                number="04"
                title="Cookies and Website Technologies"
              >
                The website may use cookies or similar technologies to support
                website functionality, understand usage patterns and improve
                the visitor experience. Specific technologies and preferences
                will be detailed in the final approved Privacy Policy.
              </LegalSection>

              <LegalSection
                number="05"
                title="Information Sharing"
              >
                AnantGrid may share information with authorised service
                providers, professional advisers, regulatory authorities or
                other parties where required for legitimate business,
                operational or legal purposes.
              </LegalSection>

              <LegalSection
                number="06"
                title="Data Security"
              >
                Appropriate technical and organisational measures are intended
                to be used to protect information against unauthorised access,
                misuse, alteration or disclosure. No online transmission or
                storage system can be guaranteed to be completely secure.
              </LegalSection>

              <LegalSection
                number="07"
                title="Your Rights"
              >
                Depending on applicable law, individuals may have rights
                relating to access, correction, deletion or other handling of
                their personal information. The final policy will specify the
                rights and procedures applicable to AnantGrid website users.
              </LegalSection>

              <LegalSection
                number="08"
                title="Changes to This Policy"
              >
                AnantGrid may update this Privacy Policy from time to time.
                The updated version will be published on this page with the
                applicable revision date.
              </LegalSection>

              <LegalSection
                number="09"
                title="Contact"
              >
                For privacy-related enquiries, please contact AnantGrid
                Private Limited through the contact details provided on the
                website.
              </LegalSection>

              <div className="pt-8 border-t border-brand-border">
                <p className="text-sm text-brand-text-secondary leading-relaxed">
                  <strong className="text-brand-navy">
                    Draft / Placeholder Notice:
                  </strong>{" "}
                  This page is currently a website placeholder and should be
                  replaced or reviewed against the company's final approved
                  legal Privacy Policy before production use.
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