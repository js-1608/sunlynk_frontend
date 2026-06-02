"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Sun, CheckCircle2, ArrowRight } from "lucide-react";

export default function Brands() {
  const brands = [
    {
      name: "DMEGC Solar",
      category: "Solar PV Modules",
      logo: "/assets/IMAGE/client/image25.avif",
      desc: "DMEGC Solar is a leading global manufacturer of high-efficiency monocrystalline PV cells and modules. With more than 40 years of manufacturing experience, DMEGC modules are certified for high loading capacity and excellent low-light performance. Their production conforms to the highest ESG (SA 8000) standards.",
      highlights: [
        "N-type TOPCon & Mono PERC technologies",
        "Up to 22.6% module efficiency",
        "High PID and loading resistance",
        "SA 8000 certified production"
      ],
      link: "/products/n-type-bifacial-double-glass"
    },
    {
      name: "Hitachi",
      category: "Solar Inverters & BESS",
      logo: "/assets/IMAGE/client/image26.avif",
      desc: "Hitachi provides highly reliable, bankable solar string and central inverters ranging from 3kW to 255kW. Built with smart RMS monitoring and wide MPPT voltage ranges, Hitachi inverters maximize yields for residential, commercial rooftops, and ground-mounted utility arrays.",
      highlights: [
        "Smart ongrid inverters with inbuilt RMS",
        "3kW to 255kW string inverter capacities",
        "Central inverter utility stations (1MW - 3MW)",
        "Advanced grid support & IP65 protection"
      ],
      link: "/products/residential-inverters"
    },
    {
      name: "Sineng Electric",
      category: "Utility Scale Inverters",
      logo: "/assets/IMAGE/client/image27.avif",
      desc: "Sineng Electric is a global leading supplier of power conversion products. Specializing in central and string inverters, Sineng products are optimized for utility-scale solar farms and high-capacity commercial installations, offering high efficiency and smart operations.",
      highlights: [
        "Multi-MPPT high-power string inverters",
        "Smart active cooling systems",
        "Robust grid integration features",
        "Global bankability status"
      ],
      link: "/products/commercial-rooftop"
    },
    {
      name: "Professional meteorological sensors",
      category: "Weather Monitoring Stations",
      logo: "/assets/IMAGE/client/image28.avif",
      desc: "SunLynkcollaborates with leading meteorological sensor providers to construct Class-A Weather Monitoring Stations (WMS) compliant with IEC 61724-1 standards. These sensors measure ambient temperature, wind characteristics, solar irradiance, and panel temperatures.",
      highlights: [
        "ISO 9060 Class A Pyranometers",
        "Ultrasonic Wind Sensors",
        "Smart modbus WMS Data Loggers",
        "IEC 61724-1 standard compliance"
      ],
      link: "/products/rooftop-pv"
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="relative bg-dark text-white py-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none"
          style={{ backgroundImage: "url(/assets/images/backgrounds/page-header-bg-1-1.jpg)" }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-2">Partner Brands</span>
          <h1 className="text-3xl md:text-5xl font-black">Our Brand</h1>
          <div className="mt-4 flex items-center gap-2 text-xs md:text-sm text-gray-400">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Our Brand</span>
          </div>
        </div>
      </section>

      {/* Brands Info */}
      <section className="py-18 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">

          {/* Top text */}
          <div className="max-w-3xl mx-auto text-center mb-16 flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 justify-center">
              <Sun className="text-primary" size={20} />
              <span className="text-xs uppercase tracking-wider font-bold text-primary">Authorized Distribution</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark leading-tight">
              We Partner with Industry-Leading Global Brands
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              At SunLynk Solar, we ensure the success of your solar project by providing only the most reliable, bankable, and high-performance technologies from global leaders in photovoltaics, power conversion, and meteorological sensors.
            </p>
          </div>

          {/* Brands grid */}
          <div className="flex flex-col gap-12">
            {brands.map((brand, idx) => (
              <div
                key={idx}
                className={`bg-gray-50 border border-gray-100 rounded-2xl p-8 lg:p-12 shadow-sm hover:shadow-md transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
              >
                {/* Brand Logo & Info */}
                <div className="lg:col-span-4 flex flex-col items-center lg:items-start gap-4">
                  <div className="relative w-40 h-20 bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-center">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <div className="text-center lg:text-left mt-2">
                    <span className="text-xs text-primary font-bold uppercase tracking-wider">{brand.category}</span>
                    <h3 className="text-2xl font-extrabold text-dark mt-1">{brand.name}</h3>
                  </div>
                </div>

                {/* Brand Description & Highlights */}
                <div className="lg:col-span-8 flex flex-col gap-6 text-left">
                  <p className="text-sm text-gray-600 leading-relaxed text-justify">
                    {brand.desc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                    {brand.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="text-primary shrink-0" size={16} />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4">
                    <Link href={brand.link} className="btn-primary self-start inline-flex items-center gap-2 group text-sm">
                      <span>Explore Products</span>
                      <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
