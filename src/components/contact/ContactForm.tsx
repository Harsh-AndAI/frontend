import React, { useState } from "react";
import { Send, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const inquiryCategories = [
  { id: "business", label: "Business & TBCB Bidding" },
  { id: "projects", label: "Project Execution & EPC" },
  { id: "partnerships", label: "Strategic Partnerships" },
  { id: "general", label: "General & Media Inquiry" },
];

export const ContactForm = () => {
  const [activeCategory, setActiveCategory] = useState("business");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate server submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  if (isSubmitted) {
    return (
      <div className="bg-[#091524] p-10 sm:p-14 text-white text-center flex flex-col items-center justify-center min-h-[440px] rounded-sm border border-white/10">
        <div className="w-14 h-14 rounded-full bg-[#d97736]/10 border border-[#d97736] flex items-center justify-center mb-5 text-[#d97736]">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#d97736] font-bold mb-1">
          Transmission Desk Confirmed
        </span>
        <h3 className="text-2xl sm:text-3xl font-light mb-3">Inquiry Received</h3>
        <p className="text-slate-300 text-xs sm:text-sm max-w-md font-light leading-relaxed mb-6">
          Thank you for connecting with AnantGrid. Our corporate relations and project development desk will review your submission and respond within 24 hours.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#d97736] uppercase tracking-widest border-b border-[#d97736] pb-1 hover:text-white hover:border-white transition-all cursor-pointer"
        >
          <span>Send another inquiry</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-between h-full">
      {/* Category Filter Pills (Benchmark feature) */}
      <div className="mb-6">
        <label className="text-[10px] uppercase font-mono tracking-[0.2em] font-bold text-slate-500 block mb-2.5">
          Select Department / Purpose
        </label>
        <div className="grid grid-cols-2 gap-2">
          {inquiryCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-3 py-2 text-left text-xs font-mono rounded-xs border transition-all duration-200 cursor-pointer",
                activeCategory === cat.id
                  ? "bg-[#08111d] text-[#d97736] border-[#08111d] font-semibold shadow-xs"
                  : "bg-[#f8fafc] text-slate-600 border-slate-200 hover:border-slate-300"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Input Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div className="space-y-1.5">
          <label className="text-[10px] uppercase font-mono tracking-widest font-bold text-slate-500">
            Full Name <span className="text-[#d97736]">*</span>
          </label>
          <input
            required
            type="text"
            placeholder="e.g. Rajiv Menon"
            className="w-full bg-[#fafbfd] border border-slate-200 px-3.5 py-2.5 text-xs text-[#08111d] focus:bg-white focus:outline-none focus:border-[#d97736] transition-colors rounded-xs"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] uppercase font-mono tracking-widest font-bold text-slate-500">
            Work Email <span className="text-[#d97736]">*</span>
          </label>
          <input
            required
            type="email"
            placeholder="name@company.com"
            className="w-full bg-[#fafbfd] border border-slate-200 px-3.5 py-2.5 text-xs text-[#08111d] focus:bg-white focus:outline-none focus:border-[#d97736] transition-colors rounded-xs"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] uppercase font-mono tracking-widest font-bold text-slate-500">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="+91 98765 43210"
            className="w-full bg-[#fafbfd] border border-slate-200 px-3.5 py-2.5 text-xs text-[#08111d] focus:bg-white focus:outline-none focus:border-[#d97736] transition-colors rounded-xs"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] uppercase font-mono tracking-widest font-bold text-slate-500">
            Organization / Entity
          </label>
          <input
            type="text"
            placeholder="Company or Authority Name"
            className="w-full bg-[#fafbfd] border border-slate-200 px-3.5 py-2.5 text-xs text-[#08111d] focus:bg-white focus:outline-none focus:border-[#d97736] transition-colors rounded-xs"
          />
        </div>
      </div>

      {/* Message Box */}
      <div className="space-y-1.5 mb-5">
        <label className="text-[10px] uppercase font-mono tracking-widest font-bold text-slate-500">
          Message &amp; Scope <span className="text-[#d97736]">*</span>
        </label>
        <textarea
          required
          rows={4}
          placeholder="Please share details regarding your corridor requirement, bidding opportunity, or partnership proposal..."
          className="w-full bg-[#fafbfd] border border-slate-200 px-3.5 py-2.5 text-xs text-[#08111d] focus:bg-white focus:outline-none focus:border-[#d97736] transition-colors resize-none rounded-xs"
        />
      </div>

      {/* Footer & Submit Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-100">
        <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400">
          
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "inline-flex items-center justify-center gap-2.5 bg-[#08111d] hover:bg-[#d97736] text-white px-7 py-3 rounded-xs font-mono text-xs font-bold uppercase tracking-[0.16em] transition-all duration-300 shadow-md cursor-pointer",
            isSubmitting && "opacity-75 cursor-not-allowed"
          )}
        >
          <span>{isSubmitting ? "Transmitting..." : "Submit Inquiry"}</span>
          <Send className="w-3.5 h-3.5" />
        </button>
      </div>
    </form>
  );
};