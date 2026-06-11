import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard | SunLynk Solar Lucknow",
  description: "Management portal for SunLynk Solar admin operations in Lucknow, Uttar Pradesh.",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
