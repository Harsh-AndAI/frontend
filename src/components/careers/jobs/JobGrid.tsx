import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SearchX } from "lucide-react";
import { JobCard } from "./JobCard";
import type { Job } from "../../../data/jobs";

gsap.registerPlugin(ScrollTrigger);

interface JobGridProps {
  jobs: Job[];
}

export const JobGrid = ({ jobs }: JobGridProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!jobs.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".job-grid-card",
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          stagger: 0.06,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [jobs]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-brand-bg pt-8 sm:pt-10 pb-20 sm:pb-24 overflow-hidden"
    >
      {/* Subtle Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#111361 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Result Header */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div>
            <span className="text-sm sm:text-base uppercase tracking-[0.2em] text-brand-orange font-semibold">
              Opportunities
            </span>

            <h2 className="mt-1 text-2xl sm:text-3xl font-light text-brand-navy">
              Current positions
            </h2>
          </div>

          <div className="text-sm sm:text-base text-slate-500">
            <span className="font-semibold text-brand-navy">
              {jobs.length}
            </span>{" "}
            {jobs.length === 1 ? "position" : "positions"}
          </div>
        </div>

        {/* Jobs */}
        {jobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {jobs.map((job) => (
              <div key={job.id} className="job-grid-card">
                <JobCard job={job} />
              </div>
            ))}
          </div>
        ) : (
          <div className="min-h-[220px] flex flex-col items-center justify-center border border-dashed border-brand-border bg-white p-8">
            <SearchX className="w-8 h-8 text-slate-400 mb-3" />

            <h3 className="text-base font-light text-brand-navy">
              No positions found
            </h3>

            <p className="mt-1 text-sm sm:text-base text-slate-500">
              Try changing your search or filters.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};