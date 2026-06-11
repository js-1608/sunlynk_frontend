import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers at SunLynk Solar Lucknow | Join Our Team",
  description: "Join our team of dedicated solar engineers, technicians, and operations experts in Lucknow. Explore career opportunities with SunLynk Solar in Lucknow, UP.",
  keywords: ["solar jobs Lucknow", "solar engineer career Lucknow", "solar panel installer jobs Lucknow"]
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
