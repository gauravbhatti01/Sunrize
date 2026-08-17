import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LOAN_PRODUCTS } from "@/lib/data/loans";

export const metadata: Metadata = {
  title: "Loan Products",
  description:
    "Explore Home Loan, Business Loan, LAP, Personal Loan, Professional Loan and Debt Consolidation with SunRize.",
};

export default function LoansIndexPage() {
  return (
    <div className="section-shell py-16 sm:py-20">
      <SectionHeading
        eyebrow="All Products"
        title="Loan Products"
        description="Choose the financing path that matches your goal — we’ll help you compare lenders and close faster."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {LOAN_PRODUCTS.map((loan) => (
          <Link
            key={loan.slug}
            href={`/loans/${loan.slug}`}
            className="rounded-[1.25rem] border border-[color:var(--line)] bg-white/70 p-6 transition hover:-translate-y-0.5 hover:shadow-[var(--shadow)]"
          >
            <h2 className="font-display text-2xl text-ink">{loan.title}</h2>
            <p className="mt-2 text-sm text-ink-soft">{loan.description}</p>
            <span className="mt-4 inline-block text-sm font-semibold text-sunrise-deep">
              Learn more →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
