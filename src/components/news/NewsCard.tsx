import { useEffect, useState } from "react";
import { X, ArrowUpRight } from "lucide-react";
import type { NewsArticle } from "@/data/news";

interface NewsCardProps {
  article: NewsArticle;
}

export const NewsCard = ({ article }: NewsCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Close modal with Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Prevent background scrolling while modal is open
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  return (
    <>
      <article className="group border-b border-brand-border py-8 transition-all duration-300">
        <div className="grid gap-5 sm:grid-cols-[160px_1fr] sm:items-start sm:gap-8">
          {/* Date */}
          <div>
            <time className="text-sm font-medium text-brand-navy">
              {article.publishDate}
            </time>
          </div>

          {/* News Content */}
          <div className="max-w-3xl">
            <h3 className="text-xl font-medium leading-snug text-brand-navy transition-colors duration-300 group-hover:text-[#F37043] sm:text-2xl">
              {article.title}
            </h3>

            

                        {/* Read More */}
            {article.url ? (
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy transition-all duration-300 hover:gap-3 hover:text-[#F37043]"
              >
                Read More
                <ArrowUpRight className="h-4 w-4" />
              </a>
            ) : (
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy transition-all duration-300 hover:gap-3 hover:text-[#F37043]"
              >
                Read More
                <ArrowUpRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </article>

      {/* News Detail Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0c1033]/70 px-5 py-8 backdrop-blur-sm sm:px-8"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="news-modal-title"
        >
          <div
            className="relative max-h-[85vh] w-full max-w-3xl overflow-y-auto border border-brand-border bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center border border-brand-border bg-white text-brand-navy transition-colors duration-200 hover:border-[#F37043] hover:text-[#F37043]"
              aria-label="Close news"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Content */}
            <div className="px-6 pb-8 pt-8 sm:px-10 sm:pb-10 sm:pt-10">
              <time className="text-sm font-medium uppercase tracking-[0.12em] text-[#F37043]">
                {article.publishDate}
              </time>

              <h2
                id="news-modal-title"
                className="mt-4 max-w-2xl pr-12 text-3xl font-medium leading-tight text-brand-navy sm:text-4xl"
              >
                {article.title}
              </h2>

              <div className="my-7 h-px w-full bg-brand-border" />

              <p className="max-w-2xl whitespace-pre-line text-base leading-8 text-brand-text-secondary sm:text-lg">
                {article.description}
              </p>

                            <div className="mt-8 flex items-center justify-end gap-3">
                {article.url && (
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#F37043] px-5 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#d95d32]"
                  >
                    Visit Source
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="border border-brand-navy px-5 py-3 text-sm font-medium text-brand-navy transition-colors duration-200 hover:bg-brand-navy hover:text-white"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};