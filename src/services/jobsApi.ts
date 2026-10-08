import type { Job } from "@/data/jobs";

const VITE_BASE_URL =
  import.meta.env.VITE_BASE_URL || "http://localhost:5000";

export async function fetchJobs(): Promise<Job[]> {
  const response = await fetch(`${VITE_BASE_URL}/api/jobs`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch jobs");
  }

  const data = await response.json();

  if (!Array.isArray(data)) {
    return [];
  }

  return data
    .filter(
      (job) =>
        String(job.status || "PUBLISHED").toUpperCase() === "PUBLISHED"
    )
    .map(normalizeJob);
}

export async function fetchJobById(id: string): Promise<Job | null> {
  const response = await fetch(
    `${VITE_BASE_URL}/api/jobs/${encodeURIComponent(id)}`,
    {
      cache: "no-store",
    }
  );

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error("Failed to fetch job");
  }

  const job = await response.json();

  if (String(job.status || "PUBLISHED").toUpperCase() !== "PUBLISHED") {
    return null;
  }

  return normalizeJob(job);
}

function normalizeJob(job: any): Job {
  return {
    id: String(job.id),
    title: job.title || job.jobTitle || "",
    department: job.department || "",
    location: job.location || "",
    experience: job.experience || "",
    employmentType: job.employmentType || "",
    description: job.description || job.jobDescription || "",
    postedDate: job.postedDate || "",
    tags: Array.isArray(job.tags) ? job.tags : [],

    reportsTo: job.reportsTo || "",
    jobPurpose: job.jobPurpose || "",
    responsibilities: normalizeList(job.responsibilities),
    qualifications: normalizeList(
      job.qualifications || job.requirements
    ),
  };
}

function normalizeList(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.map(String).filter(Boolean);
  }

  if (typeof value === "string" && value.trim()) {
    return value
      .split(/\r?\n/)
      .map((item) => item.replace(/^[-•]\s*/, "").trim())
      .filter(Boolean);
  }

  return [];
}