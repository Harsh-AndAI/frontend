import { useState } from "react";
import { NewsList } from "./NewsList";

export const CompanyAnnouncementsSection = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="bg-brand-bg px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.16em] text-brand-orange sm:text-base">
            01 / AnantGrid
          </p>

          <h2 className="mt-4 text-3xl font-normal text-brand-navy sm:text-4xl lg:text-5xl">
            Company Announcements
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-text-secondary sm:text-lg">
            Official announcements, milestones and updates from AnantGrid.
          </p>
        </div>

        <NewsList
          category="company-announcements"
          showMore={showMore}
          initialLimit={5}
          onToggleShowMore={() => setShowMore((value) => !value)}
        />
      </div>
    </section>
  );
};