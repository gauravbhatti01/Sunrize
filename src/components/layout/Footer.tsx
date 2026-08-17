import Link from "next/link";
import { EXPERTS, NAV_LINKS, SITE } from "@/lib/constants";
import { LOAN_PRODUCTS } from "@/lib/data/loans";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-[color:var(--line)] bg-ink text-white">
      <div className="section-shell grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link href="/" className="font-display text-2xl font-bold">
            {SITE.name}
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
            {SITE.description}
          </p>
          <p className="mt-6 text-sm text-white/55">{SITE.address}</p>
        </div>

        <div>
          <h3 className="font-display text-lg">Explore</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-white/70">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/apply" className="transition hover:text-white">
                Apply Now
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg">Loan Products</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-white/70">
            {LOAN_PRODUCTS.map((loan) => (
              <li key={loan.slug}>
                <Link
                  href={`/loans/${loan.slug}`}
                  className="transition hover:text-white"
                >
                  {loan.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 space-y-2 text-sm">
            {EXPERTS.map((expert) => (
              <a
                key={expert.phone}
                href={expert.telHref}
                className="block text-sunrise transition hover:text-[#f0a35a]"
              >
                {expert.name}: {expert.phone}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="section-shell flex flex-col gap-2 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p>{SITE.area}</p>
        </div>
      </div>
    </footer>
  );
}
