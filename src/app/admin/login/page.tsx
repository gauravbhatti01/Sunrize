import type { Metadata } from "next";
import { Suspense } from "react";
import { AdminLoginForm } from "@/components/admin/AdminLoginForm";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Admin Login",
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[linear-gradient(160deg,#122033_0%,#1d334f_45%,#2a4a6a_100%)] px-4 py-16">
      <div className="mb-8 text-center text-white">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f0c49a]">
          {SITE.name}
        </p>
        <h1 className="mt-3 font-display text-3xl">Admin Portal</h1>
      </div>
      <Suspense fallback={<div className="text-sm text-white/70">Loading...</div>}>
        <AdminLoginForm />
      </Suspense>
    </div>
  );
}
