import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy | SunLynk Solar Lucknow",
  description: "Read the cancellation and refund policy of SunLynk Solar for solar panel installations and orders in Lucknow, Uttar Pradesh.",
  keywords: ["solar refund policy Lucknow", "solar panel cancellation Lucknow"]
};

export default function CancellationRefundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
