import { BankingPartners } from "@/components/home/BankingPartners";
import { CtaSection } from "@/components/home/CtaSection";
import { EmiCalculator } from "@/components/home/EmiCalculator";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { LoanProducts } from "@/components/home/LoanProducts";
import { Stats } from "@/components/home/Stats";
import { Testimonials } from "@/components/home/Testimonials";
import { WhyChoose } from "@/components/home/WhyChoose";
import { SITE } from "@/lib/constants";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": SITE.name,
    "image": `${SITE.url}/og-image.jpg`,
    "@id": SITE.url,
    "url": SITE.url,
    "telephone": "+917451003030",
    "email": SITE.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "JG72+R34, Bishnuli",
      "addressLocality": "Greater Noida",
      "addressRegion": "UP",
      "postalCode": "203207",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.5355,
      "longitude": 77.3910
    },
    "areaServed": ["Greater Noida", "Noida", "Delhi NCR", "Ghaziabad"],
    "description": SITE.description,
    "sameAs": [
      "https://www.facebook.com/sunrize.in",
      "https://www.instagram.com/sunrize.in"
    ],
    "priceRange": "₹₹",
    "offers": {
      "@type": "AggregateOffer",
      "offerCount": 6,
      "itemOffered": [
        { "@type": "Service", "name": "Home Loan" },
        { "@type": "Service", "name": "Business Loan" },
        { "@type": "Service", "name": "Loan Against Property" },
        { "@type": "Service", "name": "Personal Loan" },
        { "@type": "Service", "name": "Debt Consolidation" },
        { "@type": "Service", "name": "Professional Loan" }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Stats />
      <LoanProducts />
      <EmiCalculator />
      <BankingPartners />
      <WhyChoose />
      <HowItWorks />
      <Testimonials />
      <CtaSection />
    </>
  );
}
