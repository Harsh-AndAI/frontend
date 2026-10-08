import { useState } from "react";
import { NewsList } from "./NewsList";

export const AnantGridNewsSection = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="bg-white px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.16em] text-brand-orange sm:text-base">
            02 / Media
          </p>

          <h2 className="mt-4 text-3xl font-normal text-brand-navy sm:text-4xl lg:text-5xl">
            AnantGrid in the News
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-text-secondary sm:text-lg">
            News, features and media coverage related to AnantGrid.
          </p>
        </div>

        <NewsList
          category="anantgrid-news"
          showMore={showMore}
          initialLimit={5}
          onToggleShowMore={() => setShowMore((value) => !value)}
        />
      </div>
    </section>
  );
};