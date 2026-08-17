"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import { LOAN_TYPE_OPTIONS } from "@/lib/constants";

export function LeadsFilters({
  initialQ = "",
  initialLoanType = "",
}: {
  initialQ?: string;
  initialLoanType?: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [q, setQ] = useState(initialQ);
  const [loanType, setLoanType] = useState(initialLoanType);

  function apply(event: FormEvent) {
    event.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (q.trim()) params.set("q", q.trim());
    else params.delete("q");
    if (loanType) params.set("loanType", loanType);
    else params.delete("loanType");
    router.push(`/admin/leads?${params.toString()}`);
  }

  return (
    <form
      onSubmit={apply}
      className="flex flex-col gap-3 rounded-2xl border border-[color:var(--line)] bg-white/80 p-4 sm:flex-row sm:items-end"
    >
      <label className="flex-1 space-y-1.5">
        <span className="text-xs font-semibold uppercase tracking-wider text-ink-soft">
          Search
        </span>
        <input
          value={q}
          onChange={(event) => setQ(event.target.value)}
          placeholder="Name, phone, city..."
          className="w-full rounded-xl border border-[color:var(--line)] bg-white px-3 py-2.5 text-sm outline-none focus:border-sunrise"
        />
      </label>
      <label className="sm:w-56 space-y-1.5">
        <span className="text-xs font-semibold uppercase tracking-wider text-ink-soft">
          Loan type
        </span>
        <select
          value={loanType}
          onChange={(event) => setLoanType(event.target.value)}
          className="w-full rounded-xl border border-[color:var(--line)] bg-white px-3 py-2.5 text-sm outline-none focus:border-sunrise"
        >
          <option value="">All types</option>
          {LOAN_TYPE_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <button
        type="submit"
        className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1e2d44]"
      >
        Filter
      </button>
    </form>
  );
}
