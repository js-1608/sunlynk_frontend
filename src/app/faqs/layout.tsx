import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQs) | SunLynk Solar Lucknow",
  description: "Find answers to common questions about residential solar, housing society setups, commercial systems, subsidies, net metering, and maintenance in Lucknow.",
  keywords: ["solar FAQs Lucknow", "solar panel subsidy Lucknow", "residential solar price Lucknow", "housing society solar net metering Lucknow"]
};

export default function FaqsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
