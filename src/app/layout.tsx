import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BuyNowModal from "@/components/BuyNowModal";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "SunLynk Solar - Advanced Weather, SCADA & ESS Solutions",
  description: "SunLynk Solar is a leading provider of weather stations, solar forecasting, SCADA, and energy storage solutions (ESS) for the renewable energy sector in India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-dark">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        {/* <BuyNowModal /> */}
      </body>
    </html>
  );
}
