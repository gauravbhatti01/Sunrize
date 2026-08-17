import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  children?: ReactNode;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  children,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`mb-12 max-w-2xl ${alignment}`}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-sunrise">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl leading-tight text-ink sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      <div
        className={`mt-4 h-[2px] w-16 bg-sunrise animate-line ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
      {description ? (
        <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
          {description}
        </p>
      ) : null}
      {children}
    </div>
  );
}
