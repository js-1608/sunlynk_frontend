import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact SunLynk Solar Lucknow | Request a Free Consultation",
  description: "Get in touch with SunLynk Solar in Lucknow. Contact our engineers for site surveys, custom quotes, or technical assistance regarding rooftop solar solutions in Lucknow, Uttar Pradesh.",
  keywords: ["contact SunLynk Solar", "solar company contact Lucknow", "solar quote Lucknow", "free solar site survey Lucknow"]
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
