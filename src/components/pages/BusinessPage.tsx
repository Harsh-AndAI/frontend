import { useEffect, useRef, useState } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { businessCategories } from "@/data/business";

import { BusinessHero } from "../business/BusinessHero";
import { BusinessCategoryNav } from "../business/BusinessCategoryNav";
import { BusinessSection } from "../business/BusinessSection";
import { BusinessCTA } from "../business/BusinessCTA";

gsap.registerPlugin(ScrollTrigger);

export const BusinessPage = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const isProgrammaticScroll = useRef(false);

  const [activeCategoryId, setActiveCategoryId] = useState<string>(
    businessCategories[0].id
  );

  /*
   * Sync active navigation item with the section currently
   * visible in the viewport.
   */
  useEffect(() => {
    const ctx = gsap.context(() => {
      businessCategories.forEach((cat) => {
        const section = document.getElementById(cat.id);

        if (!section) return;

        ScrollTrigger.create({
          trigger: section,
          start: "top 45%",
          end: "bottom 45%",

          onEnter: () => {
            if (!isProgrammaticScroll.current) {
              setActiveCategoryId(cat.id);
            }
          },

          onEnterBack: () => {
            if (!isProgrammaticScroll.current) {
              setActiveCategoryId(cat.id);
            }
          },
        });
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  /*
   * Smoothly navigate to a business section.
   */
  const handleSelectCategory = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    isProgrammaticScroll.current = true;

    setActiveCategoryId(id);

    const navOffset = window.innerWidth >= 640 ? 96 : 76;

    const targetY =
      element.getBoundingClientRect().top +
      window.scrollY -
      navOffset;

    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });

    /*
     * Allow ScrollTrigger to take over again after
     * the programmatic scroll has settled.
     */
    window.setTimeout(() => {
      isProgrammaticScroll.current = false;
      ScrollTrigger.refresh();
    }, 800);
  };

  return (
    <div
      ref={pageRef}
      className="min-h-screen bg-[#FAFCFE] text-[#111361]"
    >
      {/* Hero */}
      <BusinessHero />

      {/* Sticky Category Navigation */}
      <BusinessCategoryNav
        activeId={activeCategoryId}
        onSelectCategory={handleSelectCategory}
      />

      {/* Business Sections */}
      {businessCategories.map((cat, idx) => (
        <BusinessSection
          key={cat.id}
          category={cat}
          index={idx}
        />
      ))}

      {/* Final CTA */}
      {/* <BusinessCTA /> */}
    </div>
  );
};