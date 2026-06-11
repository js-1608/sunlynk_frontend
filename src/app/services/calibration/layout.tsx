import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solar Sensor & Calibration Services Lucknow | SunLynk Solar",
  description: "Maintain optimal performance ratio for your solar array with SunLynk Solar calibration and technical validation services in Lucknow, Uttar Pradesh.",
  keywords: ["solar calibration services Lucknow", "pyranometer calibration Lucknow", "solar maintenance Lucknow", "solar PR calibration Lucknow"]
};

export default function CalibrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
