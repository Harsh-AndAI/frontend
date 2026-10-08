export const InvestorCTA = () => {
  return (
    <section className="bg-[#0c1033] px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 lg:flex-row lg:items-end">
        <div>
          <p className="text-sm uppercase tracking-[0.16em] text-[#F37043]">
            AnantGrid Private Limited
          </p>

          <h2 className="mt-5 max-w-3xl text-4xl font-normal leading-tight text-white sm:text-5xl lg:text-6xl">
            Governance and
            <br />
            <span className="font-semibold italic text-[#F37043]">
              compliance.
            </span>
          </h2>
        </div>

        <a
          href="/contact"
          className="inline-flex w-fit items-center gap-4 border border-white/20 px-6 py-4 text-sm font-medium text-white transition-colors hover:border-[#F37043] hover:text-[#F37043]"
        >
          Contact AnantGrid
          <span className="text-lg">→</span>
        </a>
      </div>
    </section>
  );
};