import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-sunrise text-white hover:bg-sunrise-deep shadow-[0_12px_30px_rgba(196,92,38,0.28)]",
  secondary:
    "bg-ink text-white hover:bg-[#1e2d44]",
  ghost:
    "bg-transparent text-ink border border-[color:var(--line)] hover:border-ink/30 hover:bg-white/60",
};

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition duration-300 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
