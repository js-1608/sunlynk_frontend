import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About SunLynk Solar Lucknow | Leading Solar Provider",
  description: "Learn about SunLynk Solar, Lucknow's leading solar provider. Discover our mission, values, and leadership team delivering rooftop solar installations across Lucknow, UP.",
  keywords: ["about SunLynk Solar", "solar company Lucknow", "solar installation team Lucknow", "best solar provider Lucknow"]
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
