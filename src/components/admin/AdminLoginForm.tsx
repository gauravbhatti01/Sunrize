"use client";

import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export function AdminLoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (!response.ok) {
        setError("Wrong password. Try again.");
        return;
      }

      const next = searchParams.get("next") || "/admin";
      router.push(next);
      router.refresh();
    } catch {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="w-full max-w-md rounded-[1.5rem] border border-[color:var(--line)] bg-white/85 p-7 shadow-[var(--shadow)]"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sunrise">
        Admin access
      </p>
      <h1 className="mt-3 font-display text-3xl text-ink">Sign in</h1>
      <p className="mt-2 text-sm text-ink-soft">
        Enter the admin password to view leads and dashboard.
      </p>

      <label className="mt-6 block space-y-1.5">
        <span className="text-xs font-semibold uppercase tracking-wider text-ink-soft">
          Password
        </span>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
          autoFocus
          className="w-full rounded-xl border border-[color:var(--line)] bg-white px-4 py-3 text-sm outline-none transition focus:border-sunrise focus:ring-2 focus:ring-sunrise/20"
          placeholder="Admin password"
        />
      </label>

      {error ? (
        <p className="mt-3 text-sm text-red-700" role="alert">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={loading}
        className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-sunrise px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-sunrise-deep disabled:opacity-70"
      >
        {loading ? "Signing in..." : "Enter dashboard"}
      </button>
    </form>
  );
}
