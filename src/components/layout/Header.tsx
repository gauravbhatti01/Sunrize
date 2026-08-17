"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-4 sm:top-6 inset-x-0 mx-auto w-full max-w-[1440px] z-50 px-4 sm:px-6 lg:px-8">
      <div className="w-full bg-ink rounded-[2rem] px-6 py-4 flex items-center justify-between shadow-xl border border-white/10 backdrop-blur-md bg-ink/95">
        
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <Image 
            src="/logo.png" 
            alt="SunRize Icon" 
            width={40} 
            height={40} 
            className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
            priority
          />
          <span className="font-display text-2xl font-bold tracking-tight text-white">
            {SITE.name}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-bold !text-white hover:!text-sunrise transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:flex items-center gap-6">
          <Button href="/apply" className="!bg-sunrise hover:!bg-sunrise-deep text-white !py-2.5 !px-7 !rounded-xl text-sm shadow-md">
            Apply Now
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          <span className={`h-0.5 w-6 rounded-full bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 rounded-full bg-white transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 rounded-full bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {open && (
        <div className="fixed inset-0 z-40 bg-ink px-6 md:hidden">
          <div className="flex h-full flex-col justify-center gap-8 pb-20 pt-24">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-4xl text-white transition hover:text-sunrise"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-8 border-t border-white/10 pt-8">
              <Button href="/apply" className="w-full !py-4 text-lg !bg-sunrise !text-white">
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
