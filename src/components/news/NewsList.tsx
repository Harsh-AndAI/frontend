import { useEffect, useState } from "react";

import { fetchNews } from "@/services/newsApi";
import type { NewsArticle } from "@/data/news";

import { NewsCard } from "./NewsCard";
import { NewsLoading } from "./NewsLoading";
import { NewsEmpty } from "./NewsEmpty";

interface NewsListProps {
  category: string;
  showMore?: boolean;
  initialLimit?: number;
  onToggleShowMore?: () => void;
}

export const NewsList = ({
  category,
  showMore = false,
  initialLimit = 5,
  onToggleShowMore,
}: NewsListProps) => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    const loadNews = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await fetchNews(category);

        if (!cancelled) {
          setArticles(data);
        }
      } catch (err) {
        console.error("Failed to load news:", err);

        if (!cancelled) {
          setError("Unable to load news at the moment.");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    loadNews();

    return () => {
      cancelled = true;
    };
  }, [category]);

  if (loading) {
    return <NewsLoading />;
  }

  if (error) {
    return (
      <div className="py-10 text-base text-brand-text-secondary">
        {error}
      </div>
    );
  }

  // No news = no View More button
  if (articles.length === 0) {
    return <NewsEmpty />;
  }

  const visibleArticles = showMore
    ? articles
    : articles.slice(0, initialLimit);

  return (
    <>
      <div className="border-t border-brand-border">
        {visibleArticles.map((article, index) => (
          <NewsCard
            key={`${article.title}-${article.publishDate}-${index}`}
            article={article}
          />
        ))}
      </div>

      {/* Show button only when there is more than the initial limit */}
      {articles.length > initialLimit && onToggleShowMore && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={onToggleShowMore}
            className="border border-brand-navy px-6 py-3 text-sm font-semibold text-brand-navy transition-all duration-300 hover:bg-brand-navy hover:text-white"
          >
            {showMore ? "View Less ↑" : "View More →"}
          </button>
        </div>
      )}
    </>
  );
};