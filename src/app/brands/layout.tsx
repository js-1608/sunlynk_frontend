import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authorized Brands & Partners Lucknow | SunLynk Solar",
  description: "We partner with the world's leading Tier-1 solar brands to deliver reliable solar panel setups in Lucknow. Explore our authorized partners.",
  keywords: ["solar brands Lucknow", "authorized solar partner Lucknow", "solar panel companies Lucknow"]
};

export default function BrandsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
