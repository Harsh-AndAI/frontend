export const NewsMediaCTA = () => {
  return (
    <section className="bg-[#0c1033] px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.16em] text-[#F37043]">
              News &amp; Media
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-normal leading-tight text-white sm:text-5xl lg:text-6xl">
              The latest from
              <br />
              <span className="font-semibold italic text-[#F37043]">
                AnantGrid.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
              Stay informed about AnantGrid and developments across India's
              power transmission landscape.
            </p>
          </div>

          <a
            href="/contact"
            className="inline-flex w-fit items-center gap-4 border border-white/20 px-6 py-4 text-sm font-medium text-white transition-all duration-300 hover:border-[#F37043] hover:text-[#F37043]"
          >
            Media Contact
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};