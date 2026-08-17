import type { LeadRow } from "@/types/database";

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

export function LeadsTable({
  leads,
  emptyMessage = "No leads found yet.",
}: {
  leads: LeadRow[];
  emptyMessage?: string;
}) {
  if (leads.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-[color:var(--line)] bg-white/60 px-6 py-14 text-center text-sm text-ink-soft">
        {emptyMessage}
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-[color:var(--line)] bg-white/80 shadow-[var(--shadow)]">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-ink text-white">
            <tr>
              <th className="px-4 py-3 font-medium">Name</th>
              <th className="px-4 py-3 font-medium">Phone</th>
              <th className="px-4 py-3 font-medium">City</th>
              <th className="px-4 py-3 font-medium">Loan</th>
              <th className="px-4 py-3 font-medium">Submitted</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead, index) => (
              <tr
                key={lead.id}
                className={index % 2 === 0 ? "bg-white" : "bg-[#f7f9fb]"}
              >
                <td className="px-4 py-3 font-medium text-ink">{lead.name}</td>
                <td className="px-4 py-3">
                  <a
                    href={`tel:${lead.phone}`}
                    className="text-sunrise-deep hover:underline"
                  >
                    {lead.phone}
                  </a>
                </td>
                <td className="px-4 py-3 text-ink-soft">{lead.city}</td>
                <td className="px-4 py-3">
                  <span className="inline-flex rounded-full bg-sunrise/10 px-2.5 py-1 text-xs font-semibold text-sunrise-deep">
                    {lead.loan_type}
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-ink-soft">
                  {formatDate(lead.created_at)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
