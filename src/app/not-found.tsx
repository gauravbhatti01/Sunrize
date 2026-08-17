import Link from "next/link";

export default function NotFound() {
  return (
    <div className="section-shell flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sunrise">
        404
      </p>
      <h1 className="mt-4 font-display text-4xl text-ink">Page not found</h1>
      <p className="mt-3 max-w-md text-ink-soft">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-sunrise px-6 py-3 text-sm font-semibold text-white transition hover:bg-sunrise-deep"
      >
        Back to home
      </Link>
    </div>
  );
}
