"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { SITE } from "@/lib/constants";

const NAV = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/leads", label: "Leads" },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <aside className="flex w-full flex-col border-b border-[color:var(--line)] bg-ink text-white lg:min-h-screen lg:w-64 lg:border-b-0 lg:border-r lg:border-white/10">
      <div className="flex items-center justify-between px-5 py-5 lg:block">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f0c49a]">
            Admin
          </p>
          <p className="mt-1 font-display text-xl">{SITE.name}</p>
        </div>
        <button
          type="button"
          onClick={logout}
          className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-white/70 transition hover:bg-white/10 lg:mt-6 lg:w-full"
        >
          Logout
        </button>
      </div>

      <nav className="flex gap-1 overflow-x-auto px-3 pb-3 lg:mt-2 lg:flex-col lg:overflow-visible lg:px-3 lg:pb-6">
        {NAV.map((item) => {
          const active =
            item.href === "/admin"
              ? pathname === "/admin"
              : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                active
                  ? "bg-sunrise text-white"
                  : "text-white/70 hover:bg-white/8 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
        <Link
          href="/"
          className="whitespace-nowrap rounded-xl px-4 py-2.5 text-sm text-white/50 transition hover:bg-white/8 hover:text-white"
        >
          View site
        </Link>
      </nav>
    </aside>
  );
}
