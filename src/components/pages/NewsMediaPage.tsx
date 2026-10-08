import { useState } from "react";

import { NewsHero } from "@/components/news/NewsHero";
import { NewsNavigation } from "@/components/news/NewsNavigation";
import { CompanyAnnouncementsSection } from "@/components/news/CompanyAnnouncementsSection";
import { AnantGridNewsSection } from "@/components/news/AnantGridNewsSection";
import { EnergyTransmissionSection } from "@/components/news/EnergyTransmissionSection";
import { NewsMediaCTA } from "@/components/news/NewsMediaCTA";

export const NewsMediaPage = () => {
  const [activeCategory, setActiveCategory] = useState(
    "company-announcements",
  );

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);

    requestAnimationFrame(() => {
      const element = document.getElementById("news-content");

      if (!element) return;

      const headerOffset = window.innerWidth >= 640 ? 96 : 76;

      const targetY =
        element.getBoundingClientRect().top +
        window.scrollY -
        headerOffset;

      window.scrollTo({
        top: targetY,
        behavior: "smooth",
      });
    });
  };

  return (
    <main className="min-h-screen bg-brand-bg">
      {/* Hero - shown only once */}
      <NewsHero />

      {/* Breadcrumb */}
      <div className="border-b border-brand-border bg-white">
        <div className="mx-auto max-w-7xl px-6 py-5 sm:px-10 lg:px-16">
          <p className="text-base text-brand-text-secondary">
            <span className="text-brand-navy">Home</span>
            <span className="mx-2 text-brand-grey">/</span>
            <span className="text-brand-navy">News &amp; Media</span>
          </p>
        </div>
      </div>

      {/* Three-section navigation */}
      <NewsNavigation
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />

      {/* Selected news section */}
      <div id="news-content">
        {activeCategory === "company-announcements" && (
          <CompanyAnnouncementsSection />
        )}

        {activeCategory === "anantgrid-news" && (
          <AnantGridNewsSection />
        )}

        {activeCategory === "energy-transmission" && (
          <EnergyTransmissionSection />
        )}
      </div>

      {/* <NewsMediaCTA /> */}
    </main>
  );
};