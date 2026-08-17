import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { getLoanBySlug, LOAN_PRODUCTS } from "@/lib/data/loans";

interface LoanPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return LOAN_PRODUCTS.map((loan) => ({ slug: loan.slug }));
}

export async function generateMetadata({
  params,
}: LoanPageProps): Promise<Metadata> {
  const { slug } = await params;
  const loan = getLoanBySlug(slug);
  if (!loan) return { title: "Loan Not Found" };
  return {
    title: loan.title,
    description: loan.description,
  };
}

export default async function LoanDetailPage({ params }: LoanPageProps) {
  const { slug } = await params;
  const loan = getLoanBySlug(slug);
  if (!loan) notFound();

  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src={loan.image}
            alt={loan.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(20,32,51,0.9)_0%,rgba(20,32,51,0.65)_55%,rgba(20,32,51,0.35)_100%)]" />
        </div>

        <div className="section-shell py-24 sm:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f0c49a]">
            Loan Product
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl text-white sm:text-5xl md:text-6xl">
            {loan.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base text-white/80 sm:text-lg">
            {loan.longDescription}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={`/apply?loan=${loan.slug}`}>Apply for {loan.title}</Button>
            <Button
              href="/contact"
              variant="ghost"
              className="!border-white/30 !text-white hover:!bg-white/10"
            >
              Talk To Expert
            </Button>
          </div>
        </div>
      </section>

      <section className="section-shell grid gap-8 py-16 lg:grid-cols-3">
        <div className="rounded-[1.35rem] border border-[color:var(--line)] bg-white/70 p-6 lg:col-span-1">
          <h2 className="font-display text-2xl">Key Benefits</h2>
          <ul className="mt-5 space-y-3">
            {loan.features.map((feature) => (
              <li key={feature} className="flex gap-3 text-sm text-ink">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sunrise" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[1.35rem] border border-[color:var(--line)] bg-white/70 p-6">
          <h2 className="font-display text-2xl">Eligibility</h2>
          <ul className="mt-5 space-y-3">
            {loan.eligibility.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-ink-soft">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[1.35rem] border border-[color:var(--line)] bg-white/70 p-6">
          <h2 className="font-display text-2xl">Documents</h2>
          <ul className="mt-5 space-y-3">
            {loan.documents.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-ink-soft">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ink/40" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-shell pb-20">
        <div className="flex flex-col items-start justify-between gap-4 rounded-[1.5rem] border border-[color:var(--line)] bg-ink px-6 py-8 text-white sm:flex-row sm:items-center sm:px-8">
          <div>
            <h2 className="font-display text-2xl">Explore other products</h2>
            <p className="mt-2 text-sm text-white/65">
              Compare options and pick what fits your goal.
            </p>
          </div>
          <Link
            href="/#products"
            className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold transition hover:bg-white/10"
          >
            View all loans
          </Link>
        </div>
      </section>
    </div>
  );
}
