import Link from "next/link";
import { LOAN_PRODUCTS } from "@/lib/data/loans";

const ICONS: Record<string, React.ReactNode> = {
  "home-loan": (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
  ),
  "business-loan": (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
  ),
  "loan-against-property": (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
  ),
  "debt-consolidation": (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>
  ),
  "professional-loan": (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
  ),
  "personal-loan": (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
  ),
};

const COLORS: Record<string, string> = {
  "home-loan": "text-emerald-600 bg-emerald-50",
  "loan-against-property": "text-blue-600 bg-blue-50",
  "personal-loan": "text-purple-600 bg-purple-50",
  "business-loan": "text-rose-600 bg-rose-50",
  "professional-loan": "text-teal-600 bg-teal-50",
  "debt-consolidation": "text-orange-600 bg-orange-50",
};

export function LoanProducts() {
  return (
    <section id="products" className="scroll-mt-24 py-16 sm:py-20 bg-[#F8FAFC]">
      <div className="section-shell">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sunrise mb-4">
            Loan Products
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-ink tracking-tight mb-4">
            Solutions for Every Milestone
          </h2>
          <p className="text-ink-soft text-lg">
            Choose from our wide range of loan products tailored to your needs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {LOAN_PRODUCTS.map((loan, index) => (
            <Link
              key={loan.slug}
              href={`/loans/${loan.slug}`}
              className="group flex flex-col items-start text-left p-8 sm:p-10 rounded-3xl bg-white border-2 border-purple-100/50 hover:border-sunrise shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(234,88,12,0.08)] transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="text-sunrise mb-8 transition-transform duration-500 group-hover:-translate-y-1 [&>svg]:w-10 [&>svg]:h-10">
                {ICONS[loan.slug]}
              </div>

              <h3 className="font-display text-2xl font-bold text-ink mb-4 transition-colors">
                {loan.title}
              </h3>
              
              <p className="text-sm font-medium text-ink-soft leading-relaxed flex-1">
                {loan.description}
              </p>
              
              <div className="mt-8 pt-6 w-full border-t border-ink/5 flex items-center justify-between text-xs font-bold uppercase tracking-widest text-ink group-hover:text-sunrise transition-colors">
                <span>Learn More</span>
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
        
      </div>
    </section>
  );
}
