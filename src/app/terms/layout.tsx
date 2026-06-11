import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | SunLynk Solar Lucknow",
  description: "Review terms of use and service conditions for SunLynk Solar installations and services in Lucknow, Uttar Pradesh.",
  keywords: ["solar terms Lucknow", "solar service agreement Lucknow", "SunLynk terms Lucknow"]
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
