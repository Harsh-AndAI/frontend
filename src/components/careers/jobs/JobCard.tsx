import {
  ArrowUpRight,
  BriefcaseBusiness,
  MapPin,
  Clock3,
} from "lucide-react";

import { Link } from "@tanstack/react-router";

import type { Job } from "../../../data/jobs";

interface JobCardProps {
  job: Job;
}

export const JobCard = ({ job }: JobCardProps) => {
  return (
    <article
      className="
        group relative flex h-[430px] flex-col
        border border-brand-border bg-white
        transition-all duration-300
        hover:-translate-y-1
        hover:border-brand-orange/50
        hover:shadow-[0_14px_35px_rgba(17,19,97,0.08)]
      "
    >
      {/* Top Accent */}
      <div
        className="
          absolute left-0 right-0 top-0 h-[3px]
          origin-left scale-x-0 bg-brand-orange
          transition-transform duration-300
          group-hover:scale-x-100
        "
      />

      <div className="flex h-full flex-col p-6">
        {/* Department + ID */}
        <div className="flex h-[28px] shrink-0 items-start justify-between gap-3">
          <span
            className="
              max-w-[70%]
              text-sm sm:text-base
              uppercase
              tracking-[0.18em]
              leading-relaxed
              font-semibold
              text-brand-orange
            "
          >
            {job.department}
          </span>

          <span className="shrink-0 text-sm text-slate-400">
            {job.id}
          </span>
        </div>

        {/* Job Title */}
        <div className="mt-5 h-[58px] shrink-0">
          <h3
            className="
              line-clamp-2
              text-xl font-light leading-[1.2]
              text-brand-navy
              transition-colors duration-200
              group-hover:text-brand-orange
            "
          >
            {job.title}
          </h3>
        </div>

        {/* Job Details */}
        <div className="mt-4 h-[72px] shrink-0 space-y-2">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-brand-orange" />
            <span className="truncate">{job.location}</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Clock3 className="h-3.5 w-3.5 shrink-0 text-brand-orange" />
            <span>{job.experience}</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-500">
            <BriefcaseBusiness className="h-3.5 w-3.5 shrink-0 text-brand-orange" />
            <span>{job.employmentType}</span>
          </div>
        </div>

        {/* Description */}
        <div className="mt-4 h-[52px] shrink-0">
          <p
            className="
              line-clamp-2
              text-sm sm:text-base
              leading-[1.6]
              font-light
              text-slate-500
            "
          >
            {job.description}
          </p>
        </div>

        {/* Tags */}
        <div className="mt-4 h-[60px] shrink-0 overflow-hidden">
          <div className="flex flex-wrap gap-1.5">
            {job.tags?.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="
                  border border-brand-border
                  bg-brand-surface
                  px-2 py-1
                  text-sm
                  text-slate-500
                "
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div
          className="
            mt-auto flex items-center justify-between gap-4
            border-t border-slate-100
            pt-4
          "
        >
          {job.postedDate ? (
            <span className="whitespace-nowrap text-sm text-slate-400">
              Posted {job.postedDate}
            </span>
          ) : (
            <span className="text-sm text-slate-400">
              Lakadia Part A
            </span>
          )}

          <Link
  to="/career-openings/jobs/$jobId"
  params={{
    jobId: job.id,
  }}
  className="
    inline-flex shrink-0 items-center gap-1.5
    text-sm font-medium uppercase
    tracking-[0.12em]
    text-brand-navy
    transition-colors duration-200
    group-hover:text-brand-orange
  "
>
  View Job
  <ArrowUpRight
    className="
      h-3.5 w-3.5
      transition-transform duration-300
      group-hover:translate-x-0.5
      group-hover:-translate-y-0.5
    "
  />
</Link>
        </div>
      </div>
    </article>
  );
};