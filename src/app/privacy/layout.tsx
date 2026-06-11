import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | SunLynk Solar Lucknow",
  description: "Read the privacy policy of SunLynk Solar. We are committed to protecting personal data for our clients in Lucknow, Uttar Pradesh.",
  keywords: ["solar privacy policy Lucknow", "SunLynk privacy Lucknow"]
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
