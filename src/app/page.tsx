import { Metadata } from "next";
import ServicesPage from "@/app/services/page";

export const metadata: Metadata = {
  title: "Solar Panel Cleaning & Maintenance Services | SunLynk Solar",
  description: "SunLynk Solar provides premium solar panel cleaning, electrical inspection, fault fixes, and earthing services for all brands. Book a trial package for ₹249 or check out our yearly AMC plans.",
  keywords: [
    "solar panel cleaning Lucknow",
    "solar maintenance services",
    "solar AMC Lucknow",
    "solar repair",
    "solar earthing check",
    "solar inverter inspection",
    "solar brand service Lucknow",
    "solar panel cleaning cost",
    "preventive maintenance solar panel"
  ]
};

export default function Home() {
  return <ServicesPage />;
}
