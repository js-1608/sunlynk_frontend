import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Solar Energy Insights & Subsidies | SunLynk Solar",
  description:
    "Expert articles on solar panels, solar subsidies, battery storage, and renewable energy from SunLynk Solar.",
  keywords: [
    "solar energy blog",
    "solar panel articles",
    "solar subsidy guides",
    "solar systems",
    "solar panel installation guide",
    "rooftop solar savings",
    "renewable energy insights",
    "rooftop solar panels India",
    "PM Surya Ghar Yojana guide"
  ]
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
