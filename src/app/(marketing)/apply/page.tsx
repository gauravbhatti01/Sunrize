import type { Metadata } from "next";
import { CallbackForm } from "@/components/forms/CallbackForm";
import { LOAN_PRODUCTS } from "@/lib/data/loans";

export const metadata: Metadata = {
  title: "Apply Now",
  description:
    "Apply for Home Loan, Business Loan, LAP, Personal Loan and more with SunRize.",
};

const SLUG_TO_LABEL: Record<string, string> = Object.fromEntries(
  LOAN_PRODUCTS.map((loan) => [loan.slug, loan.title]),
);

interface ApplyPageProps {
  searchParams: Promise<{ loan?: string }>;
}

export default async function ApplyPage({ searchParams }: ApplyPageProps) {
  const { loan } = await searchParams;
  const defaultLoanType = loan ? SLUG_TO_LABEL[loan] ?? "" : "";

  return (
    <div className="section-shell py-16 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sunrise">
          Application
        </p>
        <h1 className="mt-4 font-display text-4xl text-ink sm:text-5xl">
          Start your loan journey
        </h1>
        <p className="mt-4 text-base text-ink-soft sm:text-lg">
          Share a few details and our experts will guide you through eligibility,
          documentation, and the best lender match.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-xl">
        <CallbackForm defaultLoanType={defaultLoanType} />
      </div>
    </div>
  );
}
