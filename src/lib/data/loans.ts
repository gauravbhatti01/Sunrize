import type { LoanProduct, StatItem } from "@/types";

export const STATS: StatItem[] = [
  { value: "51+", label: "Happy Clients" },
  { value: "100%", label: "Transparency" },
  { value: "24/7", label: "Dedicated Support" },
  { value: "12+", label: "Years Experience" },
];

export const LOAN_PRODUCTS: LoanProduct[] = [
  {
    slug: "home-loan",
    title: "Home Loan",
    shortTitle: "Home Loans",
    description:
      "Finance your dream home with low rates, fast approval, and flexible tenure options.",
    longDescription:
      "Whether you are buying your first apartment in Greater Noida or upgrading to a larger home, SunRize helps you compare lenders and lock in competitive rates with clear terms — no surprises.",
    features: [
      "Lowest Interest Rates",
      "Up to 30 Years Tenure",
      "Quick Processing",
    ],
    eligibility: [
      "Salaried or self-employed applicants",
      "Age 21–65 years at loan maturity",
      "Stable income with required FOIR",
      "Valid KYC and property documents",
    ],
    documents: [
      "PAN & Aadhaar",
      "Salary slips / ITR (last 2 years)",
      "Bank statements (6 months)",
      "Property papers & sale agreement",
    ],
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    accent: "#c45c26",
  },
  {
    slug: "business-loan",
    title: "Business Loan",
    shortTitle: "Business Loans",
    description:
      "Fuel your business growth with unsecured working capital and MSME support.",
    longDescription:
      "From working capital to expansion, we structure business financing across 40+ banks and NBFCs so MSMEs and growing companies get the right amount at the right cost.",
    features: ["No Collateral Needed", "High Loan Amount", "MSME Subsidies"],
    eligibility: [
      "Business vintage as per lender norms",
      "Positive cash flow / GST filings",
      "Clean banking history",
      "Proprietor, partnership, or Pvt Ltd",
    ],
    documents: [
      "KYC of promoters",
      "GST returns & financials",
      "Bank statements (12 months)",
      "Business proof / registration",
    ],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    accent: "#1a6b5c",
  },
  {
    slug: "loan-against-property",
    title: "Loan Against Property",
    shortTitle: "Loan Against Property",
    description:
      "Unlock the hidden value of your residential or commercial property.",
    longDescription:
      "Use your property as collateral to fund business needs, education, renovation, or consolidation — typically at lower rates than unsecured credit.",
    features: ["High LTV Ratio", "Lower Interest Rates", "Use for Any Purpose"],
    eligibility: [
      "Clear title property ownership",
      "Property within approved geographies",
      "Adequate repayment capacity",
      "Age and income as per bank policy",
    ],
    documents: [
      "Title deed & chain documents",
      "Property tax receipts",
      "Income proof",
      "KYC & photographs",
    ],
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    accent: "#2c4a6e",
  },
  {
    slug: "debt-consolidation",
    title: "Debt Consolidation",
    shortTitle: "Debt Consolidation",
    description:
      "Simplify multiple expensive loans into one affordable monthly EMI.",
    longDescription:
      "Combine high-interest credit cards and personal loans into a single EMI — often reducing monthly outflow and improving cash flow discipline.",
    features: [
      "Single Monthly Payment",
      "Reduce Overall Interest",
      "Improve Credit Score",
    ],
    eligibility: [
      "Existing unsecured debt burden",
      "Stable income for new EMI",
      "Acceptable credit profile",
      "Property optional depending on route",
    ],
    documents: [
      "Loan / card statements",
      "Income proof",
      "Bank statements",
      "KYC documents",
    ],
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    accent: "#8b4513",
  },
  {
    slug: "professional-loan",
    title: "Professional Loan",
    shortTitle: "Professional Loan",
    description:
      "Specialized financing for Doctors, CAs, Architects, and Lawyers.",
    longDescription:
      "Preferential terms for qualified professionals — clinic setup, equipment, practice expansion, or working capital with lighter documentation.",
    features: [
      "Minimal Documentation",
      "Preferential Rates",
      "Equipment Financing",
    ],
    eligibility: [
      "Recognised professional qualification",
      "Active practice / clinic",
      "Income proof as applicable",
      "Clean credit history preferred",
    ],
    documents: [
      "Degree / registration certificate",
      "Clinic / practice proof",
      "ITR & bank statements",
      "KYC documents",
    ],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    accent: "#3d5a80",
  },
  {
    slug: "personal-loan",
    title: "Personal Loan",
    shortTitle: "Personal Loans",
    description:
      "Instant personal finance for marriage, travel, or medical emergencies.",
    longDescription:
      "Unsecured personal loans with flexible end-use — ideal when you need funds quickly without pledging assets.",
    features: [
      "Instant Approval",
      "No End-Use Restriction",
      "Flexible Use",
    ],
    eligibility: [
      "Salaried or self-employed",
      "Minimum income as per lender",
      "Age 21–60 years typically",
      "Stable employment / business",
    ],
    documents: [
      "PAN & Aadhaar",
      "Salary slips / ITR",
      "Bank statements (3–6 months)",
      "Address proof",
    ],
    image:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1200&q=80",
    accent: "#b45309",
  },
];

export function getLoanBySlug(slug: string): LoanProduct | undefined {
  return LOAN_PRODUCTS.find((loan) => loan.slug === slug);
}
