import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { JobsHero } from "../careers/jobs/jobsHero";
import { JobSearch } from "../careers/jobs/JobSearch";
import { JobFilters } from "../careers/jobs/JobFilters";
import { JobGrid } from "../careers/jobs/JobGrid";
import { RecruitmentNotice } from "../careers/jobs/RecruitmentNotice";

import type { Job } from "../../data/jobs";
import { fetchJobs } from "../../services/jobsApi";

gsap.registerPlugin(ScrollTrigger);

export const CareerOpeningsPage = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  // ============================================================
  // SEARCH + FILTER STATE
  // ============================================================

  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [department, setDepartment] = useState("");
  const [experience, setExperience] = useState("");
  const [jobs, setJobs] = useState<Job[]>([]);

useEffect(() => {
  const loadJobs = async () => {
    try {
      const data = await fetchJobs();
      setJobs(data);
    } catch (error) {
      console.error("Failed to load jobs:", error);
      setJobs([]);
    }
  };

  loadJobs();
}, []);
  // ============================================================
  // FILTER JOBS
  // ============================================================

  const filteredJobs = useMemo(() => {
    const query = search.trim().toLowerCase();

    return jobs.filter((job) => {
      const matchesSearch =
        !query ||
        job.title.toLowerCase().includes(query) ||
        job.department.toLowerCase().includes(query) ||
        job.description.toLowerCase().includes(query);

      const matchesLocation =
        !location ||
        job.location.toLowerCase().includes(location.toLowerCase());

      const matchesDepartment =
        !department || job.department === department;

      const matchesExperience =
        !experience || job.experience === experience;

      return (
        matchesSearch &&
        matchesLocation &&
        matchesDepartment &&
        matchesExperience
      );
    });
  }, [jobs, search, location, department, experience]);

  // ============================================================
  // SCROLL TRIGGER REFRESH
  // ============================================================

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.refresh();
    }, pageRef);

    return () => ctx.revert();
  }, [filteredJobs]);

  return (
    <div
      ref={pageRef}
      className="min-h-screen bg-[#f8fafc] text-[#08111d]"
    >
      {/* ========================================================
          01 — JOBS HERO
      ======================================================== */}

      <JobsHero />

      {/* ========================================================
          02 — SEARCH + FILTERS + JOBS
      ======================================================== */}

      <main>
        <section className="relative bg-[#f8fafc] py-14 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

            {/* Search */}
            <div className="mb-6">
              <JobSearch
                value={search}
                onChange={setSearch}
              />
            </div>

            {/* Filters */}
            <div className="mb-10">
              <JobFilters
                location={location}
                department={department}
                experience={experience}
                onLocationChange={setLocation}
                onDepartmentChange={setDepartment}
                onExperienceChange={setExperience}
              />
            </div>

            {/* Job Results */}
            <JobGrid jobs={filteredJobs} />

          </div>
        </section>

        {/* ========================================================
            03 — RECRUITMENT NOTICE
        ======================================================== */}

        <RecruitmentNotice />
      </main>
    </div>
  );
};