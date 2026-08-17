import type { Metadata } from "next";
import { Suspense } from "react";
import { LeadsFilters } from "@/components/admin/LeadsFilters";
import { LeadsTable } from "@/components/admin/LeadsTable";
import { fetchLeads } from "@/lib/admin/leads";
import type { LeadRow } from "@/types/database";

export const metadata: Metadata = {
  title: "Leads",
};

export const dynamic = "force-dynamic";

interface LeadsPageProps {
  searchParams: Promise<{ q?: string; loanType?: string }>;
}

export default async function AdminLeadsPage({ searchParams }: LeadsPageProps) {
  const { q = "", loanType = "" } = await searchParams;

  let leads: LeadRow[] = [];
  let errorMessage = "";

  try {
    leads = await fetchLeads({ q, loanType });
  } catch (error) {
    errorMessage =
      error instanceof Error ? error.message : "Failed to load leads";
  }

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sunrise">
          CRM
        </p>
        <h1 className="mt-2 font-display text-3xl text-ink sm:text-4xl">
          Leads
        </h1>
        <p className="mt-2 text-sm text-ink-soft">
          Search and filter callback requests from apply / contact forms.
        </p>
      </div>

      <Suspense fallback={null}>
        <LeadsFilters initialQ={q} initialLoanType={loanType} />
      </Suspense>

      {errorMessage ? (
        <div className="rounded-2xl border border-red-200 bg-red-50 p-5 text-sm text-red-800">
          {errorMessage}
        </div>
      ) : (
        <>
          <p className="text-sm text-ink-soft">
            Showing <span className="font-semibold text-ink">{leads.length}</span>{" "}
            lead{leads.length === 1 ? "" : "s"}
          </p>
          <LeadsTable leads={leads} />
        </>
      )}
    </div>
  );
}
