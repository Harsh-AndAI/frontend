import { useEffect,useState, useRef } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  BriefcaseBusiness,
  Clock3,
  MapPin,
} from "lucide-react";
import type { Job } from "../../../data/jobs";
import { Link } from "@tanstack/react-router";
import gsap from "gsap";

import { fetchJobById } from "../../../services/jobsApi";

export const JobDetailsPage = () => {
  const heroRef = useRef<HTMLElement>(null);

  const jobId = window.location.pathname.split("/").pop();

  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const loadJob = async () => {
    if (!jobId) {
      setLoading(false);
      return;
    }

    try {
      const data = await fetchJobById(jobId);
      setJob(data);
    } catch (error) {
      console.error("Failed to load job:", error);
      setJob(null);
    } finally {
      setLoading(false);
    }
  };

  loadJob();
}, [jobId]);
  useEffect(() => {
    if (!heroRef.current || !job) return;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .from(".job-hero-back", {
          y: 15,
          opacity: 0,
          duration: 0.6,
        })
        .from(
          ".job-hero-department",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.3",
        )
        .from(
          ".job-hero-title",
          {
            y: 45,
            opacity: 0,
            duration: 0.9,
          },
          "-=0.35",
        )
        .from(
          ".job-hero-line",
          {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 0.7,
          },
          "-=0.45",
        )
        .from(
          ".job-hero-meta",
          {
            y: 20,
            opacity: 0,
            stagger: 0.08,
            duration: 0.6,
          },
          "-=0.35",
        )
        .from(
          ".job-hero-id",
          {
            x: 40,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.6",
        )
        .from(
          ".job-hero-decoration",
          {
            opacity: 0,
            scale: 0.8,
            duration: 1,
          },
          "-=0.7",
        );

      gsap.to(".job-hero-orbit", {
        rotate: 360,
        duration: 24,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".job-hero-pulse", {
        scale: 1.25,
        opacity: 0.15,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, [job]);
if (loading) {
  return (
    <main className="min-h-screen bg-brand-bg px-6 py-32 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <p className="text-base uppercase tracking-[0.16em] text-brand-orange">
          Careers
        </p>

        <h1 className="mt-4 text-4xl font-light text-brand-navy sm:text-5xl">
          Loading...
        </h1>
      </div>
    </main>
  );
}
  if (!job) {
    return (
      <main className="min-h-screen bg-brand-bg px-6 py-32 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <p className="text-base uppercase tracking-[0.16em] text-brand-orange">
            Careers
          </p>

          <h1 className="mt-4 text-4xl font-light text-brand-navy sm:text-5xl">
            Job not found
          </h1>

          <Link
            to="/career-openings"
            className="
              mt-8 inline-flex items-center gap-2
              text-base font-medium text-brand-navy
              transition-colors duration-200
              hover:text-brand-orange
            "
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Job Openings
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-brand-bg">
      {/* Hero */}
<section
  ref={heroRef}
  className="
    relative isolate overflow-hidden
    bg-[#0c1033]
    px-6 pb-12 pt-12
    text-white
    sm:px-10 sm:pb-14 sm:pt-14
    lg:px-16 lg:pb-16 lg:pt-16
  "
>
  {/* Technical Grid */}
  <div
    className="
      pointer-events-none absolute inset-0
      opacity-[0.08]
    "
    aria-hidden="true"
    style={{
      backgroundImage: `
        linear-gradient(rgba(174,174,173,0.18) 1px, transparent 1px),
        linear-gradient(90deg, rgba(174,174,173,0.18) 1px, transparent 1px)
      `,
      backgroundSize: "64px 64px",
    }}
  />

  {/* Radial Glow */}
  <div
    className="
      pointer-events-none absolute
      -right-32 -top-32
      h-[380px] w-[380px]
      rounded-full
      bg-brand-orange/[0.07]
      blur-3xl
    "
    aria-hidden="true"
  />

  {/* Decorative Technical Structure */}
  <div
    className="
      job-hero-decoration
      pointer-events-none absolute
      right-[8%] top-1/2
      hidden h-[260px] w-[260px]
      -translate-y-1/2
      lg:block
    "
    aria-hidden="true"
  >
    {/* Outer Orbit */}
    <div
      className="
        job-hero-orbit
        absolute inset-[20px]
        rounded-full
        border border-brand-grey/20
        border-dashed
      "
    />

    {/* Inner Orbit */}
    <div
      className="
        absolute inset-[58px]
        rounded-full
        border border-brand-orange/20
      "
    />

    {/* Crosshair */}
    <div className="absolute left-1/2 top-0 h-full w-px bg-brand-grey/15" />

    <div className="absolute left-0 top-1/2 h-px w-full bg-brand-grey/15" />

    {/* Nodes */}
    <span className="absolute left-[48%] top-[2px] h-2 w-2 rounded-full bg-brand-orange" />

    <span className="absolute bottom-[6%] right-[20%] h-2 w-2 rounded-full bg-brand-grey/50" />

    <span className="absolute left-[7%] top-[48%] h-2 w-2 rounded-full bg-brand-grey/40" />

    {/* Center Pulse */}
    <span
      className="
        job-hero-pulse
        absolute left-1/2 top-1/2
        h-3 w-3
        -translate-x-1/2 -translate-y-1/2
        rounded-full
        bg-brand-orange
      "
    />

    {/* Center Ring */}
    <span
      className="
        absolute left-1/2 top-1/2
        h-16 w-16
        -translate-x-1/2 -translate-y-1/2
        rounded-full
        border border-brand-orange/20
      "
    />
  </div>

  {/* Large Job ID */}
  <div
    className="
      job-hero-id
      pointer-events-none absolute
      bottom-3 right-8
      select-none
      text-[100px] font-semibold
      leading-none
      tracking-[-0.08em]
      text-brand-grey/[0.07]
      sm:right-10 sm:text-[140px]
      lg:right-16 lg:text-[170px]
    "
    aria-hidden="true"
  >
    {job.id.replace("AG-", "")}
  </div>

  <div className="relative mx-auto max-w-6xl">
    {/* Back */}
    <Link
      to="/career-openings"
      className="
        job-hero-back
        group inline-flex items-center gap-2
        text-sm font-medium
        text-brand-grey
        transition-colors duration-200
        hover:text-white
        sm:text-base
      "
    >
      <ArrowLeft
        className="
          h-4 w-4
          transition-transform duration-200
          group-hover:-translate-x-1
          sm:h-5 sm:w-5
        "
      />

      Back to Job Openings
    </Link>

    <div className="relative mt-9 max-w-4xl sm:mt-10">
      {/* Department */}
      <div className="job-hero-department flex items-center gap-3">
        <span className="h-px w-8 bg-brand-orange sm:w-10" />

        <p
          className="
            text-sm font-semibold
            uppercase tracking-[0.18em]
            text-brand-orange
            sm:text-base
          "
        >
          {job.department}
        </p>
      </div>

      {/* Title */}
      <h1
        className="
          job-hero-title
          mt-4 max-w-4xl
          text-4xl font-light
          leading-[1.08]
          tracking-[-0.025em]
          sm:text-5xl
          lg:text-6xl
        "
      >
        {job.title}
      </h1>

      {/* Accent Line */}
      <div
        className="
          job-hero-line
          mt-6 h-px w-full
          max-w-2xl
          bg-brand-grey/20
        "
      >
        <div className="h-px w-20 bg-brand-orange sm:w-24" />
      </div>

      {/* Metadata */}
      <div
        className="
          mt-6 flex flex-wrap
          gap-x-7 gap-y-4
          text-sm text-brand-grey
          sm:mt-7 sm:gap-x-8 sm:text-base
        "
      >
        <div className="job-hero-meta flex items-center gap-2">
          <MapPin className="h-4 w-4 text-brand-orange sm:h-5 sm:w-5" />
          <span>{job.location}</span>
        </div>

        <div className="job-hero-meta flex items-center gap-2">
          <Clock3 className="h-4 w-4 text-brand-orange sm:h-5 sm:w-5" />
          <span>{job.experience}</span>
        </div>

        <div className="job-hero-meta flex items-center gap-2">
          <BriefcaseBusiness className="h-4 w-4 text-brand-orange sm:h-5 sm:w-5" />
          <span>{job.employmentType}</span>
        </div>
      </div>
    </div>
  </div>

  {/* Bottom Technical Line */}
  <div
    className="
      pointer-events-none absolute
      bottom-0 left-0 right-0
      h-px bg-brand-grey/20
    "
    aria-hidden="true"
  >
    <div className="h-px w-[22%] bg-brand-orange" />
  </div>
</section>

      {/* Content */}
      <section className="bg-brand-bg px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_320px]">
          {/* Main Content */}
          <div>
            {/* Job Purpose */}
            <section>
              <p
                className="
                  text-sm font-semibold
                  uppercase tracking-[0.18em]
                  text-brand-orange
                "
              >
                Job Purpose
              </p>

              <p className="mt-4 max-w-3xl text-xl leading-8 text-brand-text">
                {job.jobPurpose}
              </p>
            </section>

            {/* Responsibilities */}
            <section className="mt-14 border-t border-brand-border pt-10">
              <p
                className="
                  text-sm font-semibold
                  uppercase tracking-[0.18em]
                  text-brand-orange
                "
              >
                Key Responsibilities
              </p>

              <div className="mt-7 space-y-6">
                {job.responsibilities.map((responsibility, index) => (
                  <div key={index} className="flex gap-5">
                    <span className="mt-1 text-base font-semibold text-brand-orange">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="text-lg leading-8 text-brand-text-secondary">
                      {responsibility}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Qualifications */}
            <section className="mt-14 border-t border-brand-border pt-10">
              <p
                className="
                  text-sm font-semibold
                  uppercase tracking-[0.18em]
                  text-brand-orange
                "
              >
                Qualifications &amp; Skills
              </p>

              <div className="mt-7 space-y-5">
                {job.qualifications.map((qualification, index) => (
                  <div key={index} className="flex gap-5">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-orange" />

                    <p className="text-lg leading-8 text-brand-text-secondary">
                      {qualification}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="border border-brand-border bg-white p-7">
              <p
                className="
                  text-sm font-semibold
                  uppercase tracking-[0.18em]
                  text-brand-orange
                "
              >
                Position Details
              </p>

              <div className="mt-7 space-y-6">
                {/* Location */}
                <div>
                  <p className="text-sm uppercase tracking-[0.12em] text-brand-grey">
                    Location
                  </p>

                  <p className="mt-2 text-base text-brand-navy">
                    {job.location}
                  </p>
                </div>

                {/* Experience */}
                <div>
                  <p className="text-sm uppercase tracking-[0.12em] text-brand-grey">
                    Experience
                  </p>

                  <p className="mt-2 text-base text-brand-navy">
                    {job.experience}
                  </p>
                </div>

                {/* Employment */}
                <div>
                  <p className="text-sm uppercase tracking-[0.12em] text-brand-grey">
                    Employment
                  </p>

                  <p className="mt-2 text-base text-brand-navy">
                    {job.employmentType}
                  </p>
                </div>

                {/* Reports To */}
                <div>
                  <p className="text-sm uppercase tracking-[0.12em] text-brand-grey">
                    Reports To
                  </p>

                  <p className="mt-2 text-base leading-7 text-brand-navy">
                    {job.reportsTo}
                  </p>
                </div>
              </div>

              {/* Apply */}
              <button
                type="button"
                className="
                  mt-9 flex w-full
                  items-center justify-center
                  gap-2
                  bg-brand-orange
                  px-5 py-4
                  text-sm font-semibold
                  uppercase tracking-[0.12em]
                  text-white
                  transition-colors duration-200
                  hover:bg-brand-navy
                "
              >
                Apply for this role

                <ArrowUpRight className="h-5 w-5" />
              </button>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};