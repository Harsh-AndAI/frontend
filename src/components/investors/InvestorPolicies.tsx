import { complianceDocuments } from "@/data/investors";




export const InvestorPolicies = () => {


  return (
    <section
  id="policies-codes"
  className="scroll-mt-[140px] bg-white px-6 py-10 sm:scroll-mt-[160px] sm:px-10 sm:py-12 lg:px-16"
>
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-7 max-w-4xl">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-[#F37043] sm:text-base">
            Policies &amp; Codes
          </p>

          <h2 className="text-5xl font-normal leading-[1.05] tracking-[-0.03em] text-brand-navy sm:text-6xl lg:text-[4.25rem]">
            Policies and practices
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-[1.7] text-brand-text-secondary sm:text-xl">
            Official governance and compliance documents applicable to
            AnantGrid Private Limited.
          </p>
        </div>

        {/* Policy documents */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {complianceDocuments.map((document, index) => (
            <article
              id={document.id}
              key={document.id}
              className="policy-document flex h-full flex-col border border-brand-border bg-brand-bg p-6 transition-all duration-300 hover:border-brand-navy/30 sm:p-7"
            >
              {/* Number */}
              <div className="text-sm font-medium tracking-widest text-brand-grey">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Policy name */}
              <h3 className="mt-8 min-h-[72px] text-2xl font-semibold leading-tight text-brand-navy sm:text-3xl">
  {document.title}
</h3>

              
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};