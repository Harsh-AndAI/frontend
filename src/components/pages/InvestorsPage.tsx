import { InvestorHero } from "@/components/investors/InvestorHero";
import { InvestorNav } from "@/components/investors/InvestorNav";
import { InvestorGovernance } from "@/components/investors/InvestorGovernance";
import { InvestorPolicies } from "@/components/investors/InvestorPolicies";
import { InvestorResultsReports } from "@/components/investors/InvestorResultsReports";
import { InvestorShareholderInfo } from "@/components/investors/InvestorShareholderInfo";
import { InvestorContacts } from "@/components/investors/InvestorContacts";

export const InvestorsPage = () => {
  return (
    <main className="min-h-screen bg-brand-bg">
      <InvestorHero />

      <div className="border-b border-brand-border bg-white">
        <div className="mx-auto max-w-7xl px-6 py-5 sm:px-10 lg:px-16">
          <p className="text-sm text-brand-text-secondary">
            <span className="text-brand-navy">Home</span>
            <span className="mx-2 text-brand-grey">/</span>
            <span className="text-brand-navy">
              Investor &amp; Compliance
            </span>
          </p>
        </div>
      </div>

      <InvestorNav />

      <div
  id="corporate-governance"
  className="scroll-mt-[140px] sm:scroll-mt-[160px]"
>
  <InvestorGovernance />
</div>

<InvestorPolicies />

      {/* <InvestorResultsReports />

      <InvestorShareholderInfo /> */}

      <InvestorContacts />
    </main>
  );
};