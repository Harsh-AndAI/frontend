import React from "react";
import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export const SectionLabel = ({
  children,
  className,
  dark = false,
}: SectionLabelProps) => {
  return (
    <div
      className={cn(
        "flex items-center gap-4 mb-6",
        className
      )}
    >
      {/* Label line */}
      <div
        className={cn(
          "h-[1px] w-8",
          dark
            ? "bg-white/30"
            : "bg-brand-navy/25"
        )}
      />

      {/* Label */}
      <span
        className={cn(
          "text-[10px] uppercase tracking-[0.3em] font-semibold",
          dark
            ? "text-brand-orange"
            : "text-brand-orange"
        )}
      >
        {children}
      </span>
    </div>
  );
};