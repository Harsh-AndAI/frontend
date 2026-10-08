import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import type { NewsArticle } from "@/data/news";
import { fetchNews } from "@/services/newsApi";
import { NewsCard } from "./NewsCard";

gsap.registerPlugin(ScrollTrigger);

interface NewsSectionProps {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  category: string;
  alternate?: boolean;
}

export const NewsSection = ({
  id,
  number,
  eyebrow,
  title,
  description,
  category,
  alternate = false,
}: NewsSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const loadNews = async () => {
      try {
        setLoading(true);
        setError(false);

        const data = await fetchNews(category);

        if (!cancelled) {
          setArticles(data.slice(0, 5));
        }
      } catch (err) {
        console.error(`Failed to load ${category} news:`, err);

        if (!cancelled) {
          setError(true);
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

  useLayoutEffect(() => {
    if (loading || articles.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.from(".news-section-heading", {
        y: 35,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".news-section-card", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [loading, articles]);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`scroll-mt-32 px-6 py-20 sm:px-10 sm:py-24 lg:px-16 ${
        alternate ? "bg-white" : "bg-brand-bg"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="news-section-heading grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
          <div>
            <p className="text-sm font-medium text-brand-grey sm:text-base">
              {number}
            </p>

            <p className="mt-4 text-sm uppercase tracking-[0.16em] text-brand-orange sm:text-base">
              {eyebrow}
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl text-4xl font-normal leading-[1.08] tracking-tight text-brand-navy sm:text-5xl lg:text-6xl">
              {title}
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-brand-text-secondary sm:text-lg">
              {description}
            </p>
          </div>
        </div>

        {/* News list */}
        <div className="mt-12 border-t border-brand-border">
          {loading && (
            <div className="py-10 text-base text-brand-text-secondary">
              Loading latest news...
            </div>
          )}

          {!loading && error && (
            <div className="py-10 text-base text-brand-text-secondary">
              Unable to load news at the moment.
            </div>
          )}

          {!loading && !error && articles.length === 0 && (
            <div className="py-10 text-base text-brand-text-secondary">
              No news available in this category.
            </div>
          )}

          {!loading &&
            !error &&
            articles.map((article, index) => (
              <div
                key={`${article.title}-${article.publishDate}-${index}`}
                className="news-section-card"
              >
                <NewsCard article={article} />
              </div>
            ))}
        </div>

        {/* Section footer */}
        {!loading && !error && articles.length > 0 && (
          <div className="mt-8 flex items-center justify-between">
            <p className="text-sm text-brand-text-secondary sm:text-base">
              Showing {articles.length} latest stories
            </p>

            <a
              href={`/news-media/${category}`}
              className="text-sm font-semibold text-brand-navy transition-colors duration-200 hover:text-brand-orange sm:text-base"
            >
              View all →
            </a>
          </div>
        )}
      </div>
    </section>
  );
};