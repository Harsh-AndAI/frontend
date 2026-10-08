import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import { businessCategories } from "@/data/business";

interface NavProps {
  activeId: string;
  onSelectCategory: (id: string) => void;
}

export const BusinessCategoryNav = ({
  activeId,
  onSelectCategory,
}: NavProps) => {
  const navRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<Map<string, HTMLButtonElement>>(new Map());

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Initial entrance animation
      gsap.from(".business-nav-item", {
        y: -18,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
      });

      const items =
        gsap.utils.toArray<HTMLButtonElement>(".business-nav-item");

      items.forEach((item) => {
        const label = item.querySelector(".nav-label");

        const handleEnter = () => {
          gsap.to(label, {
            x: 4,
            color: "#111361",
            duration: 0.3,
            ease: "power2.out",
          });
        };

        const handleLeave = () => {
          const id = item.dataset.categoryId;
          const isActive = id === activeId;

          gsap.to(label, {
            x: 0,
            color: isActive ? "#111361" : "#666666",
            duration: 0.25,
            ease: "power2.out",
          });
        };

        item.addEventListener("mouseenter", handleEnter);
        item.addEventListener("mouseleave", handleLeave);

        return () => {
          item.removeEventListener("mouseenter", handleEnter);
          item.removeEventListener("mouseleave", handleLeave);
        };
      });
    }, navRef);

    return () => ctx.revert();
  }, [activeId]);

  // Keep active item styled and visible
  useLayoutEffect(() => {
    const targetBtn = buttonsRef.current.get(activeId);

    if (!targetBtn) return;

    const label = targetBtn.querySelector(".nav-label");

    gsap.to(label, {
      x: 0,
      color: "#111361",
      duration: 0.25,
      ease: "power2.out",
    });

    targetBtn.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [activeId]);

  return (
    <div
      ref={navRef}
      className="
        sticky
        top-[76px]
        sm:top-[96px]
        z-40
        bg-white/95
        backdrop-blur-md
        border-y
        border-brand-border
      "
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-10 lg:px-16">
        <div
          className="
            flex
            items-center
            gap-2
            sm:gap-8
            overflow-x-auto
            no-scrollbar
            py-2.5
            sm:py-3
          "
        >
          {businessCategories.map((cat, index) => {
            const isActive = cat.id === activeId;

            return (
              <button
                key={cat.id}
                ref={(el) => {
                  if (el) {
                    buttonsRef.current.set(cat.id, el);
                  } else {
                    buttonsRef.current.delete(cat.id);
                  }
                }}
                data-category-id={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className="
                  business-nav-item
                  group
                  relative
                  flex
                  items-center
                  gap-3
                  shrink-0
                  whitespace-nowrap
                  px-3
                  py-2
                  text-sm
                  sm:text-base
                  font-medium
                  uppercase
                  tracking-wide
                "
              >
                {/* Number */}
                <span
                  className={`
                    nav-number
                    text-xs
                    sm:text-sm
                    font-medium
                    tracking-[0.15em]
                    transition-colors
                    duration-300
                    ${
                      isActive
                        ? "text-brand-orange"
                        : "text-brand-grey"
                    }
                  `}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Label */}
                <span
                  className={`
                    nav-label
                    transition-colors
                    duration-300
                    ${
                      isActive
                        ? "text-brand-navy font-semibold"
                        : "text-brand-text-secondary"
                    }
                  `}
                >
                  {cat.navLabel}
                </span>

                {/* Orange animated underline */}
                <span
                  className={`
                    pointer-events-none
                    absolute
                    bottom-0
                    left-0
                    h-[3px]
                    w-full
                    origin-left
                    bg-brand-orange
                    transition-transform
                    duration-300
                    ease-out
                    ${
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }
                  `}
                  aria-hidden="true"
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};