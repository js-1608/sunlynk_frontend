"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sun, Play, ChevronDown, Check, Globe, ShieldCheck, Heart, Award } from "lucide-react";

export default function About() {
  const [activeFaq, setActiveFaq] = useState<number | null>(1);

  const values = [
    {
      id: "01",
      title: "Innovation-Driven Excellence",
      icon: <Award className="text-primary" size={24} />,
      text: "We are committed to pioneering cutting-edge solutions in weather monitoring, SCADA, and energy storage. Our focus on continuous innovation ensures that we deliver state-of-the-art technologies that optimize renewable energy operations.",
    },
    {
      id: "02",
      title: "Reliability & Precision",
      icon: <ShieldCheck className="text-primary" size={24} />,
      text: "In the world of renewable energy, accuracy and dependability are non-negotiable. Our solutions provide high-precision data and real-time insights, empowering power plants and grid operators to make informed decisions with confidence.",
    },
    {
      id: "03",
      title: "Sustainability at the Core",
      icon: <Sun className="text-primary" size={24} />,
      text: "We believe in a greener future. Every solution we develop is designed to enhance the efficiency of renewable energy projects, contributing to a cleaner, more sustainable world while maximizing energy yield.",
    },
    {
      id: "04",
      title: "Customer-Centric Approach",
      icon: <Heart className="text-primary" size={24} />,
      text: "Our clients are at the heart of everything we do. We build long-term partnerships by offering customized, scalable solutions that cater to unique project needs—ensuring unmatched support and service at every step.",
    },
  ];

  const missions = [
    { title: "GROW", text: "To grow as the most trusted and coveted solar distribution company through a customer-centric approach and offering customized solutions for every market." },
    { title: "LEAD", text: "To be a leading solar equipment distributor in the nation, and ensure that our partners receive the latest products and the newest application techniques." },
    { title: "ENSURE", text: "To have a vast national presence allowing to ensuring you and your team always receive superior quality and value." },
    { title: "FULFIL", text: "To be known as one of the most responsible distribution companies in terms of supplying products of the highest quality, bankable products and ensuring total customer fulfillment before and after the purchase of solar equipment." }
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
          <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-2">SunLynk Solar</span>
          <h1 className="text-3xl md:text-5xl font-black">About Us</h1>
          <div className="mt-4 flex items-center gap-2 text-xs md:text-sm text-gray-400">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">About Us</span>
          </div>
        </div>
      </section>

      {/* Main Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Media */}
          <div className="relative">
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
              <Image
                src="/assets/IMAGE/solar.webp"
                alt="Solar plant"
                fill
                className="object-cover"
              />
            </div>

            {/* Experience overlay */}
            <div className="absolute -bottom-8 -right-4 bg-primary text-white p-6 rounded-2xl shadow-xl flex items-center gap-4 max-w-[220px]">
              <span className="text-4xl font-extrabold">10+</span>
              <span className="text-xs uppercase tracking-wider font-semibold leading-tight">Years Working Experience</span>
            </div>

            {/* Video play floating block */}
            <div className="absolute -top-6 -left-4 bg-white/90 backdrop-blur p-4 rounded-xl border border-gray-200 shadow-lg flex items-center gap-3">
              <a
                href="https://www.youtube.com/watch?v=h9MbznbxlLc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary hover:bg-primary-hover hover:scale-105 text-white rounded-full flex items-center justify-center transition-all duration-300 shadow"
              >
                <Play size={16} fill="white" className="ml-0.5" />
              </a>
              <span className="text-xs font-bold text-dark">Watch Intro Video</span>
            </div>
          </div>

          {/* Right Column: Text content */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2">
              <Sun size={18} className="text-primary" />
              <span className="text-base uppercase tracking-wider font-bold text-primary">We provide future of energy</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold text-dark leading-tight">
              Powering the transition with precision and smart automation.
            </h2>

            <div className="text-sm text-gray-600 leading-relaxed flex flex-col gap-4 text-justify">
              <p>
                At SunLynk Solar India, we are at the forefront of innovation in renewable energy solutions. As a leading provider of weather stations, SCADA, and energy storage system (ESS) solutions, we empower businesses to optimize performance, maximize efficiency, and harness the full potential of clean energy.
              </p>
              <p className="font-semibold text-gray-800 border-l-4 border-primary pl-4 py-1 bg-gray-1000">
                Our expertise extends across the renewable energy landscape, delivering cutting-edge technologies for solar and wind power projects. We specialize in high-precision weather monitoring, real-time SCADA systems, and intelligent ESS solutions, ensuring seamless operations for utility-scale power plants.
              </p>
              <p>
                With a strong presence in India and beyond, we have successfully deployed solutions for some of the largest renewable energy projects. Notably, we are pioneering a nowcasting solution for a 2 GW solar PV plant in the Middle East, revolutionizing solar forecasting and grid stability.
              </p>
              <p>
                At SunLynk Solar, we are committed to driving the transition to a sustainable future—one project at a time. Partner with us to power the future, today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values / Vision */}
      <section className="py-16 bg-dark text-white relative overflow-hidden">
        {/* Background shape */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-5 pointer-events-none"
          style={{ backgroundImage: "url(/assets/images/shapes/service-shape-2-1.webp)" }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-xl mb-16 flex flex-col gap-3">
            <div className="inline-flex items-center gap-2">
              <Sun size={18} className="text-primary" />
              <span className="text-base uppercase tracking-wider font-bold text-primary">Our Vision & Core Values</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
              We Create Green Energy for Everyone
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v) => (
              <div
                key={v.id}
                className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300 flex gap-6"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  {v.icon}
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-xs text-primary font-bold">{v.id}</span>
                  <h4 className="text-lg font-bold text-white">{v.title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed text-justify">{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center gap-3">
            <div className="inline-flex items-center gap-2">
              <span className="h-[2px] w-6 bg-primary"></span>
              <span className="text-base uppercase tracking-wider font-bold text-primary">Our Missions</span>
              <span className="h-[2px] w-6 bg-primary"></span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-dark">
              Core Pillars of Our Mission
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {missions.map((m, idx) => (
              <div
                key={idx}
                className="bg-gray-1000 border border-gray-100 rounded-xl p-8 hover:shadow-lg transition-all flex flex-col gap-4"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white font-extrabold rounded-lg">
                  {m.title}
                </div>
                <p className="text-sm text-gray-700 leading-relaxed text-justify">{m.text}</p>
              </div>
            ))}
          </div>

          {/* Full Mission Statement Card */}
          <div className="mt-12 bg-primary/5 border border-primary/20 p-8 rounded-xl text-center">
            <p className="text-gray-700 leading-relaxed font-semibold max-w-4xl mx-auto">
              &ldquo;At SunLynk Solar India, our mission is to empower the renewable energy sector with cutting-edge weather monitoring, SCADA, and energy storage solutions that drive efficiency, reliability, and sustainability. We are committed to delivering innovative, data-driven technologies that optimize power generation, enhance grid stability, and accelerate the global transition to clean energy.&rdquo;
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
