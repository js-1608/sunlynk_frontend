import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solar Warranty & Support Lucknow | SunLynk Solar",
  description: "Register your solar rooftop equipment warranty or submit a performance claim for your solar installation in Lucknow, Uttar Pradesh.",
  keywords: ["solar warranty Lucknow", "solar support Lucknow", "solar panel maintenance Lucknow"]
};

export default function WarrantyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
