export interface NewsArticle {
  title: string;
  description: string;
  publishDate: string;
  url?: string | null;
}

export interface NewsApiResponse {
  articles: NewsArticle[];
  total?: number;
}

export interface NewsCategory {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  description: string;
}

export const newsCategories: NewsCategory[] = [
  {
    id: "company-announcements",
    number: "01",
    eyebrow: "AnantGrid",
    title: "Company Announcements",
    description: "Official announcements and updates from AnantGrid.",
  },
  {
    id: "anantgrid-news",
    number: "02",
    eyebrow: "Media",
    title: "AnantGrid in the News",
    description: "News, features and media coverage related to AnantGrid.",
  },
  {
    id: "energy-transmission",
    number: "03",
    eyebrow: "Industry",
    title: "Energy Transmission",
    description: "Latest news and developments across India's power transmission sector.",
  },
];

export const newsPages = newsCategories;