"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { CustomSelect } from "@/components/ui/CustomSelect";

type Status = "idle" | "success" | "error";

export function Hero() {
  const [status, setStatus] = useState<Status>("idle");
  const [submitting, setSubmitting] = useState(false);
  const [loanAmount, setLoanAmount] = useState("");

  function handleAmountChange(e: React.ChangeEvent<HTMLInputElement>) {
    const raw = e.target.value.replace(/\D/g, "");
    if (!raw) {
      setLoanAmount("");
      return;
    }
    if (raw.length <= 3) {
      setLoanAmount(raw);
    } else {
      const lastThree = raw.substring(raw.length - 3);
      const otherDigits = raw.substring(0, raw.length - 3);
      const formattedOther = otherDigits.replace(/\B(?=(\d{2})+(?!\d))/g, ",");
      setLoanAmount(`${formattedOther},${lastThree}`);
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setStatus("idle");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/callback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to submit");
      setStatus("success");
      setLoanAmount("");
      form.reset();
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  }

  const fieldClass =
    "w-full h-12 px-4 rounded-xl border-2 border-purple-100 bg-white text-ink text-sm font-medium outline-none focus:border-sunrise transition-colors";

  return (
    <section className="pt-32 pb-32 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto relative">
      {/* Wrapper to contain the absolute form relative to the hero image */}
      <div className="relative">
        {/* Hero Image Container */}
        <div className="relative rounded-[2rem] overflow-hidden min-h-[420px] md:min-h-[480px] lg:min-h-[520px] shadow-2xl flex items-center py-10">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2400&q=80"
            alt="Modern residential exterior"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/40 to-transparent"></div>

          {/* Top Right Trust Badge */}
          <div className="absolute top-8 right-8 hidden sm:block bg-white rounded-full px-5 py-2.5 shadow-sm animate-rise-delay-2">
            <span className="text-sm font-bold text-ink">Trusted by 25K+ Families</span>
          </div>

          {/* Main Text Content */}
          <div className="relative z-10 w-full max-w-3xl px-6 sm:px-16 text-white mb-20 lg:mb-16">
            <div className="animate-rise inline-flex items-center gap-2 mb-6 rounded-full border border-white/10 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-green-400"></span>
              Authorized DSA • Real Human Experts
            </div>
            <h1 className="animate-rise-delay-1 font-display text-4xl sm:text-5xl md:text-[5rem] font-bold leading-[1.05] tracking-tight">
              Discover Loans<br />That Feel Like Home.
            </h1>
            <p className="animate-rise-delay-2 mt-4 sm:mt-6 text-base sm:text-xl text-white/80 max-w-xl font-medium leading-relaxed">
              Compare handpicked home loan offers from 40+ top banks with honest, transparent advice.
            </p>
          </div>
        </div>

        {/* Floating Action Bar */}
        <div className="relative mx-auto mt-[-3.5rem] lg:mt-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:bottom-0 lg:translate-y-1/2 w-[94%] xl:w-[92%] 2xl:w-[90%] max-w-6xl bg-white rounded-[2rem] p-5 sm:p-6 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.15)] animate-rise-delay-3 z-20">
          <form onSubmit={handleSubmit} className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3.5 items-end">
              
              {/* Full Name */}
              <div className="w-full">
                <label className="text-xs font-bold text-ink-soft mb-1.5 block">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Enter full name"
                  className={fieldClass}
                />
              </div>

              {/* Mobile no */}
              <div className="w-full">
                <label className="text-xs font-bold text-ink-soft mb-1.5 block">
                  Mobile no
                </label>
                <input
                  name="phone"
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  maxLength={10}
                  placeholder="10-digit mobile"
                  className={fieldClass}
                />
              </div>

              {/* City Name */}
              <div className="w-full">
                <label className="text-xs font-bold text-ink-soft mb-1.5 block">
                  City Name
                </label>
                <input
                  name="city"
                  type="text"
                  required
                  placeholder="Enter city name"
                  className={fieldClass}
                />
              </div>

              {/* Loan Type */}
              <div className="w-full">
                <label className="text-xs font-bold text-ink-soft mb-1.5 block">
                  Loan Type
                </label>
                <CustomSelect
                  name="loanType"
                  direction="up"
                  defaultValue="Home Loan"
                  options={["Home Loan", "Business Loan", "Loan Against Property", "Personal Loan"]}
                />
              </div>

              {/* Loan in Rs. */}
              <div className="w-full">
                <label className="text-xs font-bold text-ink-soft mb-1.5 block">
                  Loan in Rs.
                </label>
                <input
                  name="loanAmount"
                  type="text"
                  required
                  value={loanAmount}
                  onChange={handleAmountChange}
                  placeholder="e.g. 25,00,000"
                  className={fieldClass}
                />
              </div>

              {/* Submit Details Button */}
              <div className="w-full flex items-end">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full h-12 rounded-xl bg-sunrise hover:bg-sunrise-deep text-white font-bold text-sm shadow-md transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {submitting ? "Submitting..." : "Submit Details"}
                </button>
              </div>

            </div>

            {/* Success Message */}
            {status === "success" && (
              <div className="mt-3.5 p-3 rounded-xl bg-green-50 border border-green-200 text-green-800 text-xs sm:text-sm font-semibold flex items-center gap-2 animate-rise">
                <svg className="w-4 h-4 text-green-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span>Thank you! Your loan inquiry has been submitted. Our expert will contact you shortly.</span>
              </div>
            )}

            {/* Error Message */}
            {status === "error" && (
              <div className="mt-3.5 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm font-semibold flex items-center gap-2 animate-rise">
                <svg className="w-4 h-4 text-red-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Something went wrong while submitting. Please try again or call us directly.</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
