import { BANK_PARTNERS } from "@/lib/data/partners";

export function BankingPartners() {
  return (
    <section id="partners" className="scroll-mt-24 py-20 sm:py-24 bg-white border-y border-ink/5">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sunrise mb-4">
            Trusted By Leading Partners
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink max-w-2xl mx-auto">
            We are proud to be associated with leading banks and financial institutions
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16">
          {BANK_PARTNERS.map((bank) => (
            <div
              key={bank.name}
              className="group flex items-center justify-center transition duration-300 hover:scale-105"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={bank.logo}
                alt={`${bank.name} logo`}
                className="h-10 sm:h-12 w-auto object-contain transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
