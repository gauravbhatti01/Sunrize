import type { Metadata } from "next";
import Link from "next/link";
import { LoanTypeChart } from "@/components/admin/LoanTypeChart";
import { LeadsTable } from "@/components/admin/LeadsTable";
import { StatCards } from "@/components/admin/StatCards";
import { getDashboardStats } from "@/lib/admin/leads";

export const metadata: Metadata = {
  title: "Dashboard",
};

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  let stats;
  let errorMessage = "";

  try {
    stats = await getDashboardStats();
  } catch (error) {
    errorMessage =
      error instanceof Error ? error.message : "Failed to load dashboard";
  }

  if (!stats) {
    return (
      <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-sm text-red-800">
        <p className="font-semibold">Could not load dashboard</p>
        <p className="mt-2">{errorMessage}</p>
        <p className="mt-3 text-red-700/80">
          Make sure `leads` table exists and `SUPABASE_SERVICE_ROLE_KEY` is set.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sunrise">
            Overview
          </p>
          <h1 className="mt-2 font-display text-3xl text-ink sm:text-4xl">
            Dashboard
          </h1>
          <p className="mt-2 text-sm text-ink-soft">
            Live callback leads from your SunRize website forms.
          </p>
        </div>
        <Link
          href="/admin/leads"
          className="inline-flex rounded-full bg-sunrise px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sunrise-deep"
        >
          View all leads
        </Link>
      </div>

      <StatCards stats={stats} />

      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <LoanTypeChart byLoanType={stats.byLoanType} />
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-display text-xl text-ink">Recent leads</h2>
            <Link
              href="/admin/leads"
              className="text-sm font-semibold text-sunrise-deep hover:underline"
            >
              See all
            </Link>
          </div>
          <LeadsTable
            leads={stats.recent}
            emptyMessage="No leads yet. Submit a form on the website to see data here."
          />
        </div>
      </div>
    </div>
  );
}
