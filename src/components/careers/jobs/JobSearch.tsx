import { Search, X } from "lucide-react";

interface JobSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export const JobSearch = ({ value, onChange }: JobSearchProps) => {
  return (
    <div className="relative w-full">
      <div
        className="
          flex items-center
          border border-brand-border
          bg-white
          transition-all duration-300
          focus-within:border-brand-orange
          focus-within:shadow-[0_8px_30px_rgba(17,19,97,0.06)]
        "
      >
        <Search className="ml-5 w-5 h-5 text-slate-400 shrink-0" />

        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search by job title, skill or keyword"
          className="
            w-full
            px-4 py-4
            text-sm sm:text-base
            text-brand-navy
            placeholder:text-slate-400
            outline-none
            bg-transparent
          "
        />

        {value && (
          <button
            type="button"
            onClick={() => onChange("")}
            className="
              mr-3 p-1.5
              text-slate-400
              hover:text-brand-orange
              transition-colors
            "
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}

        <button
          type="button"
          className="
            hidden sm:block
            shrink-0 h-full
            px-7 py-4
            bg-brand-orange
            text-white
            text-sm sm:text-base
            font-semibold
            uppercase
            tracking-wider
            hover:bg-brand-orange/90
            transition-colors
          "
        >
          Search
        </button>
      </div>
    </div>
  );
};