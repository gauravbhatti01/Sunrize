import type { Expert } from "@/types";

export const SITE = {
  name: "SunRize",
  tagline: "Trusted Loans Greater Noida",
  description:
    "Helping you achieve your dream homes through smart financing. Home Loan, Business Loan, LAP, Personal Loan & more.",
  url: "https://sunrize.in",
  email: "hello@sunrize.in",
  address:
    "JG72+R34, Bishnuli, Gautam Buddha Nagar, Greater Noida, UP – 203207",
  area: "Greater Noida · Noida · Delhi NCR",
} as const;

export const EXPERTS: Expert[] = [
  {
    name: "Sukhvendra Singh",
    phone: "07310 978 262",
    telHref: "tel:+917310978262",
  },
  {
    name: "Nishant Singh",
    phone: "07451 003 030",
    telHref: "tel:+917451003030",
  },
];

export const NAV_LINKS = [
  { href: "/#products", label: "Products" },
  { href: "/#emi-calculator", label: "EMI" },
  { href: "/#partners", label: "Partners" },
  { href: "/#why-us", label: "Why Us" },
  { href: "/#process", label: "Process" },
  { href: "/#stories", label: "Stories" },
  { href: "/contact", label: "Contact" },
] as const;

export const LOAN_TYPE_OPTIONS = [
  "Home Loan",
  "Loan Against Property",
  "Business Loan",
  "Personal Loan",
  "Professional Loan",
  "Debt Consolidation",
] as const;
