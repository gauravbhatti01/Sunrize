export type LoanSlug =
  | "home-loan"
  | "business-loan"
  | "loan-against-property"
  | "debt-consolidation"
  | "professional-loan"
  | "personal-loan";

export interface LoanProduct {
  slug: LoanSlug;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  features: string[];
  eligibility: string[];
  documents: string[];
  image: string;
  accent: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  location: string;
  loanType: string;
}

export interface WhyChooseItem {
  title: string;
  description: string;
  icon: "clock" | "shield" | "users" | "layers" | "percent" | "heart";
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface Expert {
  name: string;
  phone: string;
  telHref: string;
}
