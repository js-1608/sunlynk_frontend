"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Sun, CheckCircle2, ArrowRight } from "lucide-react";

export default function Calibration() {
  const services = [
    {
      title: "Pyranometer Calibration",
      desc: "Regular pyranometer calibration is vital to ensure accurate global horizontal irradiance (GHI) and plane of array (POA) measurements. We perform ISO 9847 compliant calibrations for Class-A thermoelectric pyranometers and photodiode sensors, ensuring traceability to the World Radiometric Reference (WRR) in Davos, Switzerland.",
    },
    {
      title: "Anemometer & Wind Vane Calibration",
      desc: "Wind speed and direction sensors degrade due to continuous exposure and bearing wear. Our wind sensor calibration services verify starting thresholds and linearity across a wide range of velocities inside certified wind tunnels.",
    },
    {
      title: "Module & Ambient Temperature Sensor Validation",
      desc: "Accurate temperature measurement is crucial for calculating temperature-corrected Performance Ratio (PR). We calibrate PT100/PT1000 and thermocouple sensors to maintain accuracy levels within +/- 0.1°C.",
    },
    {
      title: "Complete WMS Calibration & Overhaul",
      desc: "In addition to individual sensors, we offer complete Weather Monitoring Station overhauls, including data logger calibration, communication verification, battery replacements, and recalibration reports.",
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="relative bg-dark text-white py-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none"
          style={{ backgroundImage: "url(/assets/images/backgrounds/page-header-bg-1-1.webp)" }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-2">Technical Services</span>
          <h1 className="text-3xl md:text-5xl font-black">Calibration Services</h1>
          <div className="mt-4 flex items-center gap-2 text-xs md:text-sm text-gray-400">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span>Services</span>
            <span>/</span>
            <span className="text-white">Calibration Services</span>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: text (col-span-7) */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <div className="inline-flex items-center gap-2">
              <Sun className="text-primary" size={20} />
              <span className="text-sm uppercase tracking-wider font-bold text-primary">Precision & Compliance</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-dark leading-tight">
              Maintain Solar PR Accuracy with Periodic Recalibration
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              In solar power plants, measurement errors directly translate to incorrect Performance Ratio (PR) calculations, which can lead to delayed fault identification and revenue losses. As per international IEC 61724-1 standards, meteorological sensors must undergo periodic recalibration (typically every 1 to 2 years) to account for environmental degradation and drift.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              SunLynk Solar offers certified, traceable calibration services for pyranometers, ambient temperature sensors, module temperature sensors, anemometers, and data loggers. We assist developers in maintaining grid compliance and securing financial audits with reliable, data-driven verification reports.
            </p>

            <div className="flex flex-col gap-3 mt-4">
              <h4 className="font-bold text-gray-800">Our Services Include:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="text-primary shrink-0" size={16} />
                  <span>ISO 9847 compliant calibrations</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="text-primary shrink-0" size={16} />
                  <span>Traceability to WRR standards</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="text-primary shrink-0" size={16} />
                  <span>Detailed calibration certificates</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="text-primary shrink-0" size={16} />
                  <span>Quick turnaround times</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Image (col-span-5) */}
          <div className="lg:col-span-5 relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-gray-1000">
            <Image
              src="/assets/IMAGE/solar_scada.png"
              alt="Calibration testing"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services breakdown list */}
      <section className="py-16 bg-gray-1000 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((srv, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-3 text-left"
              >
                <h4 className="text-lg font-bold text-gray-800">{srv.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed text-justify">{srv.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-center mt-12 text-center md:text-left">
            <div className="flex-grow">
              <h4 className="text-lg font-bold text-gray-800">Need your weather station sensors calibrated?</h4>
              <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                Contact our service department to schedule sensor collection, tunnel validation, or request a technician visit.
              </p>
            </div>
            <Link
              href="/contact"
              className="btn-primary shrink-0"
            >
              <span>Schedule Calibration</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
