import type { ProcessStep, Testimonial, WhyChooseItem } from "@/types";

export const WHY_CHOOSE: WhyChooseItem[] = [
  {
    title: "Fast Processing",
    description: "Get approvals within 48 hours for eligible profiles.",
    icon: "clock",
  },
  {
    title: "Transparent Procedures",
    description: "No hidden charges, 100% clarity on all terms.",
    icon: "shield",
  },
  {
    title: "Dedicated Experts",
    description: "One-on-one assistance throughout the journey.",
    icon: "users",
  },
  {
    title: "Multiple Solutions",
    description: "We compare 40+ banks to find your best fit.",
    icon: "layers",
  },
  {
    title: "Competitive Rates",
    description: "Negotiated lowest interest rates for you.",
    icon: "percent",
  },
  {
    title: "Customer First",
    description: "We work for you, not for the banks.",
    icon: "heart",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  { step: 1, title: "Application", description: "Fill out our simple form" },
  {
    step: 2,
    title: "Document Submission",
    description: "Upload required papers",
  },
  {
    step: 3,
    title: "Eligibility Check",
    description: "We verify your profile",
  },
  { step: 4, title: "Approval", description: "Get sanction letter" },
  {
    step: 5,
    title: "Disbursement",
    description: "Funds in your account",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote:
      "SunRize made my dream home possible. Superfast approval and guided me through every step.",
    name: "Rajesh Kumar",
    location: "Noida",
    loanType: "Home Loan",
  },
  {
    id: "2",
    quote:
      "Got my business loan in just 5 days. Excellent team! Highly recommend for MSMEs.",
    name: "Amit Verma",
    location: "Greater Noida",
    loanType: "Business Loan",
  },
  {
    id: "3",
    quote:
      "Professional and trustworthy. No hidden charges. They respect a doctor's busy schedule.",
    name: "Dr. Sunita Rao",
    location: "Ghaziabad",
    loanType: "Professional Loan",
  },
  {
    id: "4",
    quote:
      "Cleared all my debts with one EMI. Life is much easier now thanks to Nishant ji.",
    name: "Vijay Malhotra",
    location: "Delhi",
    loanType: "Debt Consolidation",
  },
];
