import type { NewsArticle, NewsApiResponse } from "@/data/news";

const API_BASE_URL = import.meta.env.VITE_BASE_URL;

if (!API_BASE_URL) {
  throw new Error(
    "VITE_BASE_URL is not configured. Please check frontend/.env.production"
  );
}

export const fetchNews = async (
  category?: string
): Promise<NewsArticle[]> => {
  const endpoint = category
    ? `/api/news?category=${encodeURIComponent(category)}`
    : "/api/news";

  const response = await fetch(`${API_BASE_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error(`Unable to load news. HTTP ${response.status}`);
  }

  const data: NewsApiResponse = await response.json();

  return data.articles;
};