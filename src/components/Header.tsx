import { Link } from "@tanstack/react-router";

import { Logo } from "./Logo";

import { navigation } from "@/data/content";

import { Menu, X } from "lucide-react";

import { useState } from "react";

import { cn } from "@/lib/utils";

export const Header = () => {
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-brand-border bg-white/95 backdrop-blur-md shadow-xs flex items-center h-[76px] sm:h-[96px]"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-10 w-full flex items-center gap-6">
        {/* Logo */}
        <Link
          to="/"
          className="group shrink-0 flex items-center"
          aria-label="AnantGrid Home"
        >
          <Logo
  light={false}
  className="w-[155px] sm:w-[220px] h-auto object-contain"
/>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-0 xl:ml-auto">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href as any}
              activeOptions={{ exact: item.href === "/" }}
              className="relative px-3 xl:px-4 py-2 text-base xl:text-[18px] font-medium whitespace-nowrap group text-brand-navy"
activeProps={{
  className: "text-brand-navy font-semibold",
}}
            >
              {({ isActive }) => (
                <span className="relative flex items-center">
                  <span>{item.name}</span>

                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 right-0 h-[2px] rounded-full transition-all duration-300",
                      isActive
                        ? "bg-brand-orange opacity-100 shadow-[0_0_8px_rgba(243,112,67,0.6)]"
                        : "bg-brand-orange/40 opacity-0 group-hover:opacity-100 scale-x-75 group-hover:scale-x-100"
                    )}
                  />
                </span>
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden ml-auto p-2 text-brand-navy transition-colors hover:text-brand-orange"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-brand-border py-6 px-6 animate-in slide-in-from-top-2 duration-200 shadow-xl shadow-slate-900/10">
          <nav className="flex flex-col gap-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href as any}
                activeOptions={{ exact: item.href === "/" }}
                className="flex items-center justify-between py-2 text-lg font-medium text-slate-700 hover:text-brand-navy"
                activeProps={{
                  className:
                    "text-brand-orange font-semibold border-l-2 border-brand-orange pl-3",
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};