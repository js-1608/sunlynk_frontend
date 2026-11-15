"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LucknowSolarMap from "@/components/LucknowSolarMap";
import PricingTable from "@/components/PricingTable";
import MaintenanceReviews from "@/components/MaintenanceReviews";
import {
  Wrench,
  Zap,
  Activity,
  Eye,
  Shield,
  AlertCircle,
  RefreshCw,
  Flame,
  FileText,
  Sun,
  ShieldCheck,
  CheckCircle2,
  Phone,
  MapPin,
  ArrowRight,
  Link2,
  Sparkles,
  ShieldAlert,
  Settings,
  Sliders,
  MessageSquare,
  PhoneCall,
  Clock,
  Headphones
} from "lucide-react";

// Phone & WhatsApp Contact Number
const CONTACT_NUMBER = "8573003002";
const FORMATTED_PHONE = "+91 8573003002";

// Helper function to generate direct WhatsApp URL
const getWhatsappUrl = (message: string) => {
  return `https://wa.me/91${CONTACT_NUMBER}?text=${encodeURIComponent(message)}`;
};

interface ChecklistItem {
  area: string;
  checks: string;
  tool: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

interface ChecklistCategory {
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  items: ChecklistItem[];
}

// ─── Main Services Component ──────────────────────────────────────────────────

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<number>(0);

  // Pre-configured WhatsApp Messages
  const MSG_SIMPLE_CONTACT = "Hi, I am looking for maintenance of my solar";
  const MSG_TRIAL_PACKAGE = "Hi, I am looking for solar trial package";
  const MSG_ANNUAL_AMC = "Hi, I am looking for annual maintenance";

  // 18-Point Technical Checklist Data
  const categories: ChecklistCategory[] = [
    {
      title: "DC System Checks",
      description: "Technicians inspect the generation line, solar PV panels, cabling, combiner box protection, and heat maps.",
      icon: Zap,
      items: [
        { area: "DC Voltage", checks: "Voltage of individual string(s), abnormal voltage/drop", tool: "DC Multimeter", icon: Zap },
        { area: "DC Current", checks: "String operating current and imbalance between strings", tool: "DC Clamp Meter", icon: Activity },
        { area: "MC4 Connectors", checks: "Loose connection, heating, corrosion, damage check", tool: "Visual + Thermal Camera", icon: Wrench },
        { area: "DC Cables", checks: "Cuts, insulation damage, loose routing, UV damage", tool: "Visual Inspection", icon: Eye },
        { area: "DC Junction/Combiner Box", checks: "Fuse, terminals, SPD, connections, heating check", tool: "Multimeter + Thermal Camera", icon: Shield },
        { area: "DC SPD", checks: "SPD indicator/status and physical condition check", tool: "Visual + Multimeter", icon: AlertCircle },
        { area: "Polarity", checks: "Correct +/− polarity of DC strings verification", tool: "DC Multimeter", icon: RefreshCw },
        { area: "Module Hotspots", checks: "Abnormal solar panel cell temperature patterns", tool: "Thermal Camera*", icon: Flame },
      ],
    },
    {
      title: "Inverter & AC System Checks",
      description: "Inspection of power conversion equipment, output metrics, electrical breakers, and cable termination integrity.",
      icon: Sliders,
      items: [
        { area: "Inverter DC Input", checks: "Input voltage/current and abnormal readings check", tool: "Multimeter + Clamp Meter", icon: Zap },
        { area: "Inverter AC Output", checks: "Voltage, current, frequency, output condition", tool: "AC Clamp Meter + Multimeter", icon: FileText },
        { area: "AC DB", checks: "MCB/MCCB, terminals, busbars, SPD, wiring integrity", tool: "Multimeter + Thermal Camera", icon: Shield },
        { area: "AC Connections", checks: "Loose or overheated AC terminal assessment", tool: "Thermal Camera", icon: Flame },
        { area: "Generation", checks: "Current generation vs inverter/monitoring app data", tool: "Inverter App + Clamp Meter", icon: Sun },
        { area: "Hotspots", checks: "Abnormally heated electrical connections detection", tool: "Thermal Camera", icon: Flame },
      ],
    },
    {
      title: "Grounding & Safety Checks",
      description: "Critical safety tests ensuring robust grounding paths, insulation thickness, and surge discharge systems.",
      icon: ShieldCheck,
      items: [
        { area: "Earthing", checks: "Earth pit resistance / grounding quality verification", tool: "Earth Resistance Tester", icon: ShieldCheck },
        { area: "Earth Continuity", checks: "Continuity of equipment grounding conductor path", tool: "Continuity Tester / Multimeter", icon: Link2 },
        { area: "Insulation", checks: "DC cable/string insulation thickness & quality condition", tool: "Insulation Tester (Megger)", icon: ShieldAlert },
        { area: "Lightning/Surge Protection", checks: "SPD condition and grounding discharge layout", tool: "Visual + Electrical Testing", icon: ShieldAlert },
      ],
    },
  ];

  const brandNames = [
    "Tata Power Solar",
    "DMEGC Solar",
    "Waaree Solar",
    "Loom Solar",
    "Luminous",
    "Growatt",
    "Hitachi",
    "Sungrow",
    "Sineng Electric",
    "Microtek",
    "Vikram Solar",
    "Adani Solar",
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-dark relative pb-16">
      {/* 1. Full-Background SUNLYNKSURE Hero Section */}
      <section className="px-4 md:px-8 pt-4 pb-6">
        <div className="max-w-7xl mx-auto relative rounded-3xl overflow-hidden shadow-2xl min-h-[540px] lg:min-h-[620px] flex items-center border border-gray-200">
          {/* Full Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/new_assets/banner.png"
              alt="SUNLYNKSURE Solar Panel Maintenance Banner"
              fill
              priority
              className="object-cover object-[75%_center] lg:object-right"
            />
            {/* Left Gradient Overlay to guarantee crystal clear text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 sm:via-white/85 to-transparent lg:w-3/5" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent sm:hidden" />
          </div>

          {/* Left Content Column */}
          <div className="relative z-10 max-w-xl text-left p-6 sm:p-10 md:p-14 flex flex-col items-start gap-4 sm:gap-5">
            {/* Brand Logo & Tagline */}
            <div className="flex flex-col items-start">
              {/* <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center shadow-md">
                  <ShieldCheck size={26} className="stroke-[2.5]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-black tracking-tight text-emerald-800 leading-none">
                    SUNLYNK<span className="text-emerald-600">SURE</span>
                  </span>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="h-[1.5px] w-4 bg-emerald-600" />
                    <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-emerald-700 whitespace-nowrap">
                      YOUR LINK TO ASSURANCE
                    </span>
                    <span className="h-[1.5px] w-4 bg-emerald-600" />
                  </div>
                </div>
              </div> */}
            </div>

            {/* Sub-tagline */}
            <span className="text-xs sm:text-sm font-black uppercase tracking-[0.22em] text-slate-700 mt-1">
              CLEAN PANELS. HIGHER OUTPUT.
            </span>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-[1.15] tracking-tight">
              Keep Your <br />
              <span className="text-emerald-600">Solar Performing</span> <br />
              at Its Best
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-600 max-w-md leading-relaxed font-medium">
              Professional maintenance services for cleaner, safer and more efficient solar systems.
            </p>

            {/* 3 Feature Badges */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 py-2 my-1 w-full max-w-md">
              <div className="flex flex-col items-center text-center gap-1.5 bg-white/60 backdrop-blur-xs p-2 sm:p-0 rounded-xl sm:bg-transparent">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-emerald-100/90 border border-emerald-200 flex items-center justify-center text-emerald-700 shadow-xs">
                  <Zap size={22} className="stroke-[2.5]" />
                </div>
                <span className="text-[11px] sm:text-xs font-black text-slate-800 leading-tight">Higher<br />Efficiency</span>
              </div>

              <div className="flex flex-col items-center text-center gap-1.5 bg-white/60 backdrop-blur-xs p-2 sm:p-0 rounded-xl sm:bg-transparent">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-emerald-100/90 border border-emerald-200 flex items-center justify-center text-emerald-700 shadow-xs">
                  <ShieldCheck size={22} className="stroke-[2.5]" />
                </div>
                <span className="text-[11px] sm:text-xs font-black text-slate-800 leading-tight">Longer<br />Lifespan</span>
              </div>

              <div className="flex flex-col items-center text-center gap-1.5 bg-white/60 backdrop-blur-xs p-2 sm:p-0 rounded-xl sm:bg-transparent">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-emerald-100/90 border border-emerald-200 flex items-center justify-center text-emerald-700 shadow-xs">
                  <Settings size={22} className="stroke-[2.5]" />
                </div>
                <span className="text-[11px] sm:text-xs font-black text-slate-800 leading-tight">Reliable<br />Performance</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mt-2 w-full">
              <a
                href={getWhatsappUrl(MSG_SIMPLE_CONTACT)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-sm px-7 py-3.5 rounded-full transition-all shadow-lg hover:shadow-xl active:scale-95 flex items-center gap-2 cursor-pointer border border-emerald-500"
              >
                <span>Get Professional Maintenance</span>
                <ArrowRight size={17} />
              </a>

              <a
                href={`tel:${CONTACT_NUMBER}`}
                className="bg-slate-900/90 hover:bg-slate-900 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full transition-all flex items-center gap-2 border border-slate-700 shadow-md"
              >
                <Phone size={15} className="text-emerald-400" />
                <span>Call {CONTACT_NUMBER}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Package Pricing Comparison */}
      <section id="packages" className="py-16 md:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-3">
            <div className="inline-flex items-center gap-2">
              <span className="h-[2px] w-6 bg-primary" />
              <span className="text-xs uppercase tracking-wider font-bold text-primary">Service Packages</span>
              <span className="h-[2px] w-6 bg-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              Compare Our Cleaning & AMC Plans
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Choose the package that fits your solar installation. From a single trial wash to full-year technical maintenance.
            </p>
          </div>

          <PricingTable />
        </div>
      </section>

      {/* 3. 18-Point Technician Checklist Section */}
      <section id="checklist" className="py-16 md:py-24 bg-slate-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-3">
            <div className="inline-flex items-center gap-2">
              <span className="h-[2px] w-6 bg-primary" />
              <span className="text-xs uppercase tracking-wider font-bold text-primary">Quality Audits</span>
              <span className="h-[2px] w-6 bg-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              Our 18-Point Technical Checklist
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              We perform a rigorous testing process during AMC visits. Select the category tabs below to see exactly what we inspect and the industrial tools we employ.
            </p>
          </div>

          {/* Checklist Tabs */}
          <div className="max-w-5xl mx-auto">
            {/* Tab Selectors */}
            <div className="flex flex-col sm:flex-row justify-center gap-3 mb-10 border-b border-gray-200 pb-4">
              {categories.map((cat, idx) => {
                const Icon = cat.icon;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all outline-none border cursor-pointer ${activeTab === idx
                      ? "bg-primary text-slate-900 border-primary shadow-md hover:bg-primary-hover scale-[1.01]"
                      : "bg-white text-gray-600 hover:text-dark hover:bg-gray-50 border-gray-200"
                      }`}
                  >
                    <Icon size={16} />
                    <span>{cat.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab content */}
            <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden transition-all duration-300">
              {/* Green Glow decoration */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-primary shrink-0">
                  {React.createElement(categories[activeTab].icon, { size: 22 })}
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-gray-900">{categories[activeTab].title}</h3>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    {categories[activeTab].description}
                  </p>
                </div>
              </div>

              {/* Table Layout */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[500px]">
                  <thead>
                    <tr className="border-b border-gray-100 text-xs text-gray-400 font-extrabold uppercase tracking-wider">
                      <th className="pb-3 pr-4">Area Under Check</th>
                      <th className="pb-3 px-4">What Our Technician Checks</th>
                      <th className="pb-3 pl-4">Tool / Equipment Used</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories[activeTab].items.map((item, index) => {
                      const ItemIcon = item.icon;
                      return (
                        <tr
                          key={index}
                          className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors group"
                        >
                          {/* Area name */}
                          <td className="py-4 pr-4 font-bold text-gray-900 flex items-center gap-2">
                            <span className="w-7 h-7 rounded-lg bg-emerald-50 text-primary flex items-center justify-center shrink-0 border border-emerald-100/50 group-hover:scale-105 transition-transform">
                              <ItemIcon size={13} className="stroke-[2.5]" />
                            </span>
                            <span className="text-sm">{item.area}</span>
                          </td>
                          {/* What checks */}
                          <td className="py-4 px-4 text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
                            {item.checks}
                          </td>
                          {/* Tool used */}
                          <td className="py-4 pl-4">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gray-100 border border-gray-200 text-[11px] font-bold text-gray-700">
                              <Wrench size={10} className="text-gray-400" />
                              {item.tool}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <p className="text-[10px] text-gray-400 mt-6 flex items-center gap-1">
                <span>⚠️</span> *Thermal cameras are used to detect high resistance junctions, microcracks, and hotspots not visible to the naked eye.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Brand Support Grid */}
      <section className="py-16 md:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-3">
            <div className="inline-flex items-center gap-2">
              <span className="h-[2px] w-6 bg-primary" />
              <span className="text-xs uppercase tracking-wider font-bold text-primary">All Brands Compatibility</span>
              <span className="h-[2px] w-6 bg-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              Compatible with All Major Solar & Inverter Brands
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              We service panels and inverter systems from all global manufacturers. No matter where you bought it, we keep it working.
            </p>
          </div>

          {/* Brands grid styling */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {brandNames.map((name, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 hover:border-emerald-200 hover:bg-emerald-50/20 rounded-2xl p-5 flex flex-col items-center justify-center text-center transition-all duration-300 shadow-sm group hover:-translate-y-0.5"
              >
                <div className="w-10 h-10 rounded-full bg-white border border-gray-100 text-primary flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform mb-3">
                  <Sun size={18} />
                </div>
                <span className="text-xs sm:text-sm font-extrabold text-slate-800 tracking-wide">{name}</span>
              </div>
            ))}
          </div>

          <div className="bg-emerald-50/50 border border-emerald-500/10 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto mt-12 flex flex-col sm:flex-row items-center gap-5">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-primary flex items-center justify-center shrink-0 border border-emerald-200">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h4 className="font-extrabold text-gray-900 text-base">Third-Party Installations Supported</h4>
              <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                Didn't buy your solar panels from SunLynk? No worries! Our expert services are open to all existing rooftop solar owners looking to improve their daily energy yield and secure their home electrical lines.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Client Maintenance Reviews & Before/After Proof Section */}
      <MaintenanceReviews />

      {/* Lucknow Solar Installations Map Section */}
      <LucknowSolarMap />

      {/* 6. CTA Booking Banner */}
      {/* <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
        <div className="absolute -bottom-16 -left-16 w-60 h-60 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center gap-6">
          <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center text-primary mb-2">
            <Settings size={22} className="animate-spin" style={{ animationDuration: "12s" }} />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
            Ready to Restore Your Solar Performance?
          </h2>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl leading-relaxed">
            Don't let dust, loose connections, or earth leakages drain your power output. Contact us on WhatsApp or call {CONTACT_NUMBER} for trial cleans or full-year AMC plans.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <a
              href={getWhatsappUrl(MSG_SIMPLE_CONTACT)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-extrabold px-8 py-3.5 rounded-xl transition-all shadow-md active:scale-95 flex items-center gap-2"
            >
              <MessageSquare size={18} />
              <span>Contact on WhatsApp</span>
            </a>
            <a
              href={`tel:${CONTACT_NUMBER}`}
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-bold px-8 py-3.5 rounded-xl transition-all flex items-center gap-2"
            >
              <Phone size={16} />
              <span>Call Support: {CONTACT_NUMBER}</span>
            </a>
          </div>
        </div>
      </section> */}


      {/* 5. Contact Details & Support Section */}
      <section className="py-16 bg-gray-100 text-black relative">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-primary font-extrabold bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
              Instant Contact Details
            </span>
            <h2 className="text-3xl font-black text-black mt-3">
              Get in Touch with SunLynk Solar Service
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 mt-2">
              Have questions about solar panel cleaning, inverter diagnostics, or AMC plans? Reach us directly on WhatsApp or call our technician helpline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Contact Card 1: Phone */}
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 flex flex-col items-center text-center hover:border-primary transition-all">
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                <PhoneCall size={22} />
              </div>
              <h3 className="font-bold text-white text-lg">Call Helpline</h3>
              <p className="text-xs text-gray-400 mt-1">Speak directly with our technical team</p>
              <a
                href={`tel:${CONTACT_NUMBER}`}
                className="mt-4 text-xl font-black text-primary hover:underline"
              >
                {FORMATTED_PHONE}
              </a>
              <span className="text-[10px] text-gray-400 mt-1">Mon - Sun: 8:00 AM - 8:00 PM</span>
            </div>

            {/* Contact Card 2: WhatsApp */}
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 flex flex-col items-center text-center hover:border-emerald-400 transition-all">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center text-emerald-400 mb-4">
                <MessageSquare size={22} />
              </div>
              <h3 className="font-bold text-white text-lg">WhatsApp Chat</h3>
              <p className="text-xs text-gray-400 mt-1">Instant messaging & instant support</p>
              <a
                href={getWhatsappUrl(MSG_SIMPLE_CONTACT)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-xl font-black text-emerald-400 hover:underline"
              >
                {CONTACT_NUMBER}
              </a>
              <span className="text-[10px] text-gray-400 mt-1">Fast Response within Minutes</span>
            </div>

            {/* Contact Card 3: Location / Service Area */}
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 flex flex-col items-center text-center hover:border-primary transition-all">
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                <MapPin size={22} />
              </div>
              <h3 className="font-bold text-white text-lg">Service Network</h3>
              <p className="text-xs text-gray-400 mt-1">Lucknow & Uttar Pradesh Region</p>
              <p className="mt-4 text-sm font-bold text-gray-200">
                Doorstep Technician Visits
              </p>
              <span className="text-[10px] text-gray-400 mt-1">Scheduled within 24 Hours</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Floating WhatsApp Widget */}
      <a
        href={getWhatsappUrl(MSG_SIMPLE_CONTACT)}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center gap-2 group cursor-pointer border-2 border-white/20"
        title="Chat on WhatsApp (8573003002)"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare size={24} className="fill-current" />
        <span className="hidden sm:inline-block max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:px-2.5 transition-all duration-300 text-xs font-bold">
          Chat on WhatsApp ({CONTACT_NUMBER})
        </span>
      </a>
    </div>
  );
}
