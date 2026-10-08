import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { investorNavigation } from "@/data/investors";

export const InvestorNav = () => {
  const navRef = useRef<HTMLElement>(null);
  

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const items =
        gsap.utils.toArray<HTMLElement>(".investor-nav-item");

      // Initial entrance
      gsap.from(items, {
        y: -18,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
      });

     

      items.forEach((item) => {
        const label = item.querySelector(".nav-label");
        const number = item.querySelector(".nav-number");

        const handleEnter = () => {
          

          // Label movement
          gsap.to(label, {
            x: 4,
            color: "#111361",
            duration: 0.3,
            ease: "power2.out",
          });

          // Number animation
          gsap.to(number, {
            y: -2,
            color: "#F37043",
            duration: 0.3,
            ease: "power2.out",
          });
        };

        const handleLeave = () => {
          gsap.to(label, {
            x: 0,
            color: "#666666",
            duration: 0.25,
            ease: "power2.out",
          });

          gsap.to(number, {
            y: 0,
            color: "#AEAEAD",
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

      

      return () => {
        
      };
    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <nav
      ref={navRef}
      className="sticky top-[76px] z-40 border-b border-brand-border bg-white/95 backdrop-blur sm:top-[96px]"
    >
      <div className="mx-auto max-w-7xl overflow-x-auto px-6 sm:px-10 lg:px-16">
        <div className="relative flex min-w-max">
          {/* Shared animated background */}
          

          {investorNavigation.map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="investor-nav-item group relative flex items-center gap-3 border-r border-brand-border px-5 py-4 sm:px-6 sm:py-5"
            >
              {/* Number */}
              <span className="nav-number text-xs font-medium tracking-[0.15em] text-brand-grey transition-colors sm:text-sm">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Label */}
              <span className="nav-label text-sm font-medium text-brand-text-secondary sm:text-base">
                {item.label}
              </span>

              {/* Orange bottom accent */}
              <span
                className="pointer-events-none absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-[#F37043] transition-transform duration-300 group-hover:scale-x-100"
                aria-hidden="true"
              />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};