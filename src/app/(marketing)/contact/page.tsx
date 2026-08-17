import type { Metadata } from "next";
import { CallbackForm } from "@/components/forms/CallbackForm";
import { EXPERTS, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to SunRize loan experts in Greater Noida. Call Sukhvendra or Nishant, or request a callback.",
};

export default function ContactPage() {
  return (
    <div className="section-shell pt-36 pb-16 sm:pt-40 sm:pb-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-sunrise">
            Contact
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Let&apos;s talk financing
          </h1>
          <p className="mt-4 max-w-md text-base font-medium leading-relaxed text-ink-soft">
            Reach our founding experts directly — no call centres, no bots.
          </p>

          <div className="mt-10 space-y-4">
            {EXPERTS.map((expert) => (
              <a
                key={expert.telHref}
                href={expert.telHref}
                className="block rounded-2xl border-2 border-purple-100 bg-white p-6 transition-all hover:border-sunrise hover:shadow-[0_8px_30px_rgba(234,88,12,0.12)] hover:-translate-y-1"
              >
                <p className="font-display text-xl font-bold text-ink">{expert.name}</p>
                <p className="mt-2 font-medium text-sunrise">{expert.phone}</p>
              </a>
            ))}
          </div>

          <div className="mt-4 rounded-2xl border-2 border-purple-100 bg-white p-6 transition-all hover:border-sunrise hover:shadow-[0_8px_30px_rgba(234,88,12,0.12)] hover:-translate-y-1">
            <p className="text-xs font-bold uppercase tracking-wider text-sunrise">
              Office Address
            </p>
            <p className="mt-3 text-sm font-medium leading-relaxed text-ink">
              {SITE.address}
            </p>
            <p className="mt-1 text-sm font-medium text-ink-soft">{SITE.area}</p>
          </div>
        </div>

        <CallbackForm />
      </div>
    </div>
  );
}
