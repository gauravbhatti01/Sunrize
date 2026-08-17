import type { WhyChooseItem } from "@/types";

const paths: Record<WhyChooseItem["icon"], string> = {
  clock:
    "M12 6v6l4 2m6-2a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z",
  shield:
    "M12 3 4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6l-8-3Z",
  users:
    "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm13 10v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
  layers:
    "m12 2 9 5-9 5-9-5 9-5Zm0 10 9 5-9 5-9-5 9-5Z",
  percent:
    "M19 5 5 19M9 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
  heart:
    "M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z",
};

export function FeatureIcon({
  name,
  className = "h-6 w-6",
}: {
  name: WhyChooseItem["icon"];
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d={paths[name]} />
    </svg>
  );
}
