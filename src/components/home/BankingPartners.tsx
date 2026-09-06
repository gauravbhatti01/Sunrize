import { BANK_PARTNERS } from "@/lib/data/partners";

export function BankingPartners() {
  return (
    <section id="partners" className="scroll-mt-24 py-20 sm:py-28 bg-[#F8FAFC] border-y border-ink/5">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-4 rounded-full border border-sunrise/20 bg-sunrise/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-sunrise">
            <span>40+ Lending Partners</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink max-w-3xl mx-auto">
            Associated with India&apos;s Leading Banks &amp; NBFCs
          </h2>
          <p className="mt-4 text-sm sm:text-base text-ink-soft max-w-2xl mx-auto font-medium leading-relaxed">
            Click on any partner to visit their official portal, or compare exclusive loan rates &amp; eligibility with our advisors.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5 lg:gap-6">
          {BANK_PARTNERS.map((bank) => (
            <a
              key={bank.name}
              href={bank.website}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white rounded-2xl border-2 border-purple-100/90 hover:border-sunrise/60 p-3 sm:p-4 h-24 sm:h-28 lg:h-32 flex flex-col items-center justify-center shadow-[0_2px_8px_-2px_rgba(15,23,42,0.06)] hover:shadow-[0_12px_28px_-6px_rgba(234,88,12,0.18)] hover:-translate-y-1.5 transition-all duration-300"
              aria-label={`Visit official website of ${bank.name}`}
            >
              {/* Partner Logo */}
              <div className="w-full h-full flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={bank.logo}
                  alt={`${bank.name} logo`}
                  className="max-h-16 sm:max-h-20 lg:max-h-20 w-auto max-w-[94%] object-contain transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Hover Tooltip showing Bank Name & External Link Indicator */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 transform translate-y-1 group-hover:translate-y-0 z-30 whitespace-nowrap bg-ink text-white text-[11px] sm:text-xs font-semibold px-3 py-1.5 rounded-lg shadow-xl border border-white/10 flex items-center gap-1.5">
                <span>{bank.name}</span>
                <svg
                  className="w-3 h-3 text-sunrise shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                {/* Tooltip Arrow */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-4 border-transparent border-t-ink"></div>
              </div>

              {/* Subtle External Icon on corner on hover */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-sunrise">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-14 text-center">
          <p className="text-xs sm:text-sm font-semibold text-ink-soft">
            Looking for a specific bank or customized rate comparison?{" "}
            <a href="/contact" className="text-sunrise hover:underline font-bold">
              Speak directly with our loan experts &rarr;
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
