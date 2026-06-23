import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Rooftop Solar Promotion | SunLynk Solar",
  description: "Get guaranteed solar generation, zero upfront bank loans, and complete subsidy registrations in Lucknow with SunLynk Solar. Claim your free rooftop survey.",
  keywords: [
    "solar promotion Lucknow",
    "solar landing page",
    "rooftop solar Lucknow RWA",
    "solar subsidy Lucknow promo"
  ],
  alternates: {
    canonical: "https://www.sunlynksolar.com",
  }
};

export default function PromoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
