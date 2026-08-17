import type { Metadata } from "next";
import { DM_Sans, Outfit, Space_Grotesk } from "next/font/google";
import { SITE } from "@/lib/constants";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dmsans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sunrize.in"),
  title: {
    default: `${SITE.name} – ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "Home Loan in Greater Noida",
    "Business Loan Noida",
    "Loan Against Property NCR",
    "Personal Loan Delhi NCR",
    "Debt Consolidation",
    "Professional Loan",
    "SunRize Loans",
    "Lowest Interest Rate Loan",
    "Fast Loan Approval",
  ],
  authors: [{ name: "SunRize" }],
  creator: "SunRize",
  publisher: "SunRize",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: `${SITE.name} – ${SITE.tagline}`,
    description: SITE.description,
    url: "https://www.sunrize.in",
    siteName: SITE.name,
    type: "website",
    locale: "en_IN",
  },
  alternates: {
    canonical: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} – ${SITE.tagline}`,
    description: SITE.description,
    creator: "@SunRizeLoans",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "5M87OVHo2tX4kPwdTMUb4zgQ_ct7sDQJXKaiGMxttcg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${outfit.variable} ${dmSans.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
