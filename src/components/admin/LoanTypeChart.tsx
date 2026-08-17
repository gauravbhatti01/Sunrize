import type { DashboardStats } from "@/lib/admin/leads";

export function LoanTypeChart({
  byLoanType,
}: {
  byLoanType: DashboardStats["byLoanType"];
}) {
  const max = Math.max(...byLoanType.map((item) => item.count), 1);

  if (byLoanType.length === 0) {
    return (
      <div className="rounded-2xl border border-[color:var(--line)] bg-white/80 p-6 text-sm text-ink-soft">
        No loan-type data yet.
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-[color:var(--line)] bg-white/80 p-6 shadow-[0_10px_30px_rgba(18,32,51,0.06)]">
      <h2 className="font-display text-xl text-ink">Leads by loan type</h2>
      <p className="mt-1 text-sm text-ink-soft">Distribution of callback requests</p>
      <ul className="mt-6 space-y-4">
        {byLoanType.map((item) => (
          <li key={item.type}>
            <div className="mb-1.5 flex items-center justify-between gap-3 text-sm">
              <span className="font-medium text-ink">{item.type}</span>
              <span className="text-ink-soft">{item.count}</span>
            </div>
            <div className="h-2.5 overflow-hidden rounded-full bg-paper-deep">
              <div
                className="h-full rounded-full bg-[linear-gradient(90deg,var(--sunrise),#f0a35a)] transition-all"
                style={{ width: `${(item.count / max) * 100}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
