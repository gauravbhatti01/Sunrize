"use client";

import { FormEvent, useState } from "react";
import { LOAN_TYPE_OPTIONS } from "@/lib/constants";

import { CustomSelect } from "@/components/ui/CustomSelect";

type Status = "idle" | "success" | "error";

interface CallbackFormProps {
  defaultLoanType?: string;
  compact?: boolean;
}

export function CallbackForm({
  defaultLoanType = "",
  compact = false,
}: CallbackFormProps) {
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

      if (!response.ok) throw new Error("Failed");
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
    <form
      onSubmit={handleSubmit}
      className={`space-y-4 ${compact ? "" : "rounded-[2rem] border border-ink/5 bg-white p-6 shadow-2xl sm:p-8"}`}
    >
      {!compact ? (
        <div className="mb-8">
          <h3 className="font-display text-3xl font-bold text-ink">Request a Callback</h3>
          <p className="mt-2 text-sm font-medium text-ink-soft">
            Share your details — our experts will call you shortly.
          </p>
        </div>
      ) : null}

      <div className={compact ? "grid gap-4 sm:grid-cols-2" : "space-y-5"}>
        <label className="block space-y-1.5">
          <span className="text-xs font-bold uppercase tracking-wider text-ink-soft">
            Full Name
          </span>
          <input
            name="name"
            required
            autoComplete="name"
            className={fieldClass}
            placeholder="Your full name"
          />
        </label>

        <label className="block space-y-1.5">
          <span className="text-xs font-bold uppercase tracking-wider text-ink-soft">
            Mobile Number
          </span>
          <input
            name="phone"
            type="tel"
            required
            pattern="[0-9+\-\s]{10,15}"
            autoComplete="tel"
            className={fieldClass}
            placeholder="10-digit mobile"
          />
        </label>

        <label className="block space-y-1.5">
          <span className="text-xs font-bold uppercase tracking-wider text-ink-soft">
            City
          </span>
          <input
            name="city"
            required
            className={fieldClass}
            placeholder="Enter your city name"
            defaultValue=""
          />
        </label>

        <label className="block space-y-1.5">
          <span className="text-xs font-bold uppercase tracking-wider text-ink-soft">
            Loan Type
          </span>
          <CustomSelect
            name="loanType"
            defaultValue={defaultLoanType || "Home Loan"}
            options={LOAN_TYPE_OPTIONS as unknown as string[]}
          />
        </label>

        <label className="block space-y-1.5">
          <span className="text-xs font-bold uppercase tracking-wider text-ink-soft">
            Loan Amount (₹)
          </span>
          <input
            name="loanAmount"
            required
            value={loanAmount}
            onChange={handleAmountChange}
            className={fieldClass}
            placeholder="e.g. 25,00,000"
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex w-full items-center justify-center rounded-full bg-sunrise px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-sunrise-deep disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submitting ? "Sending..." : "Request Callback"}
      </button>

      {status === "success" ? (
        <p className="text-sm font-medium text-[#1a6b5c]" role="status">
          Thank you! We&apos;ll call you soon.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm font-medium text-red-700" role="alert">
          Something went wrong. Please try again or call us directly.
        </p>
      ) : null}
    </form>
  );
}
