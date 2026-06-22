import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | SunLynk Solar Lucknow",
  description: "Sign in to access your SunLynk Solar Lucknow project dashboard and monitor solar status.",
  keywords: ["solar login Lucknow", "SunLynk portal Lucknow"],
  robots: {
    index: false,
    follow: false,
  },
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
