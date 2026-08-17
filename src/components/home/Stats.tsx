import { STATS } from "@/lib/data/loans";

export function Stats() {
  return (
    <section className="relative z-10 mt-12 py-12 border-y border-ink/5 bg-[#F8FAFC]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8">
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center px-4 border-ink/10 ${index % 2 !== 0 ? "border-l" : "border-l-0"} ${index > 0 ? "md:border-l" : ""}`}
            >
              <p className="font-display text-4xl sm:text-5xl font-bold text-ink tracking-tight">
                {stat.value}
              </p>
              <p className="mt-3 text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-ink-soft">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
