import { newsCategories } from "@/data/news";

interface NewsNavigationProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export const NewsNavigation = ({
  activeCategory,
  onCategoryChange,
}: NewsNavigationProps) => {
  return (
    <nav className="sticky top-[76px] z-40 border-b border-brand-border bg-white/95 backdrop-blur sm:top-[96px]">
      <div className="mx-auto max-w-7xl overflow-x-auto px-6 sm:px-10 lg:px-16">
        <div className="flex min-w-max">
          {newsCategories.map((category) => {
            const isActive = activeCategory === category.id;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => onCategoryChange(category.id)}
                className={`relative border-r border-brand-border px-5 py-5 text-sm font-medium transition-colors first:border-l sm:text-base ${
                  isActive
                    ? "text-brand-navy"
                    : "text-brand-text-secondary hover:text-brand-navy"
                }`}
              >
                {category.title}

                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-brand-orange transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};