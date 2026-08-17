import type { DashboardStats } from "@/lib/admin/leads";

export function StatCards({ stats }: { stats: DashboardStats }) {
  const cards = [
    { label: "Total leads", value: stats.total, hint: "All time" },
    { label: "Today", value: stats.today, hint: "Since midnight" },
    { label: "This week", value: stats.week, hint: "Mon–today" },
    { label: "Cities", value: stats.cities, hint: "Unique locations" },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <div
          key={card.label}
          className="rounded-2xl border border-[color:var(--line)] bg-white/80 p-5 shadow-[0_10px_30px_rgba(18,32,51,0.06)]"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft">
            {card.label}
          </p>
          <p className="mt-3 font-display text-4xl text-ink">{card.value}</p>
          <p className="mt-2 text-xs text-ink-soft">{card.hint}</p>
        </div>
      ))}
    </div>
  );
}
