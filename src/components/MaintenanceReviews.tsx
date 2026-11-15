"use client";

import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import {
  Sparkles,
  CheckCircle2,
  Maximize2,
  X,
  ShieldCheck,
  Star,
  Sliders,
  Layers,
  MapPin,
  Calendar,
  Zap,
  TrendingUp,
  Droplets,
  Wrench,
  MessageSquare
} from "lucide-react";

const CONTACT_NUMBER = "8573003002";

const getWhatsappUrl = (message: string) => {
  return `https://wa.me/91${CONTACT_NUMBER}?text=${encodeURIComponent(message)}`;
};

interface BeforeAfterSet {
  id: number;
  title: string;
  location: string;
  beforeImg: string;
  afterImg: string;
  improvement: string;
  description: string;
  details: string[];
}

interface NormalReviewImg {
  id: number;
  title: string;
  location: string;
  img: string;
  clientName: string;
  reviewText: string;
  date: string;
}

const beforeAfterData: BeforeAfterSet[] = [
  {
    id: 1,
    title: "Residential Solar Panel Deep Wash",
    location: "Gomti Nagar, Lucknow",
    beforeImg: "/maintainance review/before1.jpeg",
    afterImg: "/maintainance review/after1.jpeg",
    improvement: "+28% Generation Recovery",
    description: "Heavy dust layer and atmospheric pollution haze accumulation removed completely using pressurized pure water and anti-scratch soft brushes.",
    details: [
      "Dust layer reduced light absorption by 25%+",
      "100% scratch-free microfiber cleaning",
      "Instant solar inverter output recovery after wash"
    ]
  },
  {
    id: 2,
    title: "Rooftop Solar Array Maintenance",
    location: "Indira Nagar, Lucknow",
    beforeImg: "/maintainance review/before2.jpeg",
    afterImg: "/maintainance review/after2.jpeg",
    improvement: "+24% Generation Boost",
    description: "Thorough removal of dry grime, bird droppings, and edge scaling restoring crystal-clear transparency across all solar modules.",
    details: [
      "Eliminated hot-spot creation risks",
      "Cleaned frame drainage slots to prevent water pooling",
      "Verified electrical connections & terminal safety"
    ]
  }
];

const normalReviewData: NormalReviewImg[] = [
  {
    id: 1,
    title: "On-site Technician Visit & Maintenance Proof",
    location: "Aliganj, Lucknow",
    img: "/maintainance review/WhatsApp Image 2026-09-04 at 11.24.08 PM.jpeg",
    clientName: "SunLynk AMC Client",
    reviewText: "SunLynk technicians arrived on schedule with specialized equipment. Cleaned all panels thoroughly and provided a detailed thermal and inverter generation check report. Immediate increase in daily unit output!",
    date: "Verified Maintenance Visit"
  }
];

export default function MaintenanceReviews() {
  const [selectedImg, setSelectedImg] = useState<{ src: string; caption: string } | null>(null);
  const [sliderPositions, setSliderPositions] = useState<{ [key: number]: number }>({ 1: 50, 2: 50 });
  const [activeTab, setActiveTab] = useState<"side-by-side" | "slider">("side-by-side");

  const openLightbox = (src: string, caption: string) => {
    setSelectedImg({ src, caption });
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = useCallback(() => {
    setSelectedImg(null);
    document.body.style.overflow = "";
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeLightbox]);

  return (
    <section id="maintenance-reviews" className="py-16 md:py-24 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
      {/* Background Subtle Accent Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-black uppercase tracking-wider">
            <Sparkles size={14} />
            On-Site Real Proof
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
            Solar Cleaning Before & After Results
          </h2>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed mt-1">
            Dust, bird droppings, and urban soot can reduce your solar panel efficiency by up to <strong className="text-emerald-400">30%</strong>. Check out actual before & after transformation photos from our maintenance visits in Lucknow.
          </p>

          {/* Impact Stats Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full mt-4 bg-slate-900/90 p-4 rounded-2xl border border-slate-800">
            <div className="flex flex-col items-center text-center p-2">
              <div className="flex items-center gap-1 text-emerald-400 font-black text-xl sm:text-2xl">
                <TrendingUp size={18} />
                <span>+25–30%</span>
              </div>
              <span className="text-[11px] text-gray-400 font-medium mt-0.5">Generation Boost</span>
            </div>
            <div className="flex flex-col items-center text-center p-2 border-l border-slate-800">
              <div className="flex items-center gap-1 text-sky-400 font-black text-xl sm:text-2xl">
                <Droplets size={18} />
                <span>100%</span>
              </div>
              <span className="text-[11px] text-gray-400 font-medium mt-0.5">Pure Water Wash</span>
            </div>
            <div className="flex flex-col items-center text-center p-2 border-l border-slate-800">
              <div className="flex items-center gap-1 text-amber-400 font-black text-xl sm:text-2xl">
                <Wrench size={18} />
                <span>18-Point</span>
              </div>
              <span className="text-[11px] text-gray-400 font-medium mt-0.5">Safety Checkup</span>
            </div>
            <div className="flex flex-col items-center text-center p-2 border-l border-slate-800">
              <div className="flex items-center gap-1 text-emerald-400 font-black text-xl sm:text-2xl">
                <ShieldCheck size={18} />
                <span>Zero</span>
              </div>
              <span className="text-[11px] text-gray-400 font-medium mt-0.5">Scratch Guarantee</span>
            </div>
          </div>

          {/* Toggle View Mode */}
          <div className="flex items-center gap-2 bg-slate-900 p-1.5 rounded-2xl border border-slate-800 shadow-md mt-2">
            <button
              onClick={() => setActiveTab("side-by-side")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === "side-by-side"
                  ? "bg-emerald-600 text-white shadow-md"
                  : "text-gray-400 hover:text-white hover:bg-slate-800"
              }`}
            >
              <Layers size={14} />
              <span>Side-by-Side View</span>
            </button>
            <button
              onClick={() => setActiveTab("slider")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === "slider"
                  ? "bg-emerald-600 text-white shadow-md"
                  : "text-gray-400 hover:text-white hover:bg-slate-800"
              }`}
            >
              <Sliders size={14} />
              <span>Interactive Slider</span>
            </button>
          </div>
        </div>

        {/* 1. BEFORE & AFTER PROOF CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {beforeAfterData.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 rounded-3xl p-5 sm:p-6 shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header Info */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-white">{item.title}</h3>
                    <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium mt-0.5">
                      <MapPin size={13} />
                      <span>{item.location}</span>
                    </div>
                  </div>
                  <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-black px-3 py-1 rounded-full flex items-center gap-1">
                    <TrendingUp size={13} />
                    {item.improvement}
                  </span>
                </div>

                {/* Images View */}
                {activeTab === "side-by-side" ? (
                  /* Side by Side Layout */
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {/* Before Image */}
                    <div
                      className="relative group/img overflow-hidden rounded-2xl border-2 border-red-500/40 aspect-4/3 bg-slate-950 cursor-pointer shadow-md"
                      onClick={() => openLightbox(item.beforeImg, `${item.title} - BEFORE WASH`)}
                    >
                      <Image
                        src={item.beforeImg}
                        alt={`${item.title} Before`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover/img:scale-105"
                      />
                      <div className="absolute top-2 left-2 bg-red-600/90 backdrop-blur-xs text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-lg border border-red-400/30 shadow-md">
                        BEFORE (Dust & Dirt)
                      </div>
                      <div className="absolute bottom-2 right-2 bg-slate-950/80 p-1.5 rounded-lg text-white opacity-0 group-hover/img:opacity-100 transition-opacity">
                        <Maximize2 size={14} />
                      </div>
                    </div>

                    {/* After Image */}
                    <div
                      className="relative group/img overflow-hidden rounded-2xl border-2 border-emerald-500/50 aspect-4/3 bg-slate-950 cursor-pointer shadow-md"
                      onClick={() => openLightbox(item.afterImg, `${item.title} - AFTER WASH`)}
                    >
                      <Image
                        src={item.afterImg}
                        alt={`${item.title} After`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover/img:scale-105"
                      />
                      <div className="absolute top-2 left-2 bg-emerald-600/90 backdrop-blur-xs text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-lg border border-emerald-400/30 shadow-md">
                        AFTER (SunLynk Wash)
                      </div>
                      <div className="absolute bottom-2 right-2 bg-slate-950/80 p-1.5 rounded-lg text-white opacity-0 group-hover/img:opacity-100 transition-opacity">
                        <Maximize2 size={14} />
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Interactive Split Slider */
                  <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden border-2 border-slate-700 mb-4 select-none group/slider shadow-lg">
                    {/* After Image (Background) */}
                    <Image
                      src={item.afterImg}
                      alt={`${item.title} After`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-emerald-600/90 backdrop-blur-xs text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-lg border border-emerald-400/30 shadow-md z-10">
                      AFTER WASH
                    </div>

                    {/* Before Image (Foreground Clipped) */}
                    <div
                      className="absolute inset-0 overflow-hidden"
                      style={{ width: `${sliderPositions[item.id]}%` }}
                    >
                      <Image
                        src={item.beforeImg}
                        alt={`${item.title} Before`}
                        fill
                        className="object-cover max-w-none"
                        style={{ width: "100%", height: "100%" }}
                      />
                      <div className="absolute top-3 left-3 bg-red-600/90 backdrop-blur-xs text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-lg border border-red-400/30 shadow-md z-10">
                        BEFORE WASH
                      </div>
                    </div>

                    {/* Range Input Slider */}
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={sliderPositions[item.id]}
                      onChange={(e) =>
                        setSliderPositions((prev) => ({
                          ...prev,
                          [item.id]: Number(e.target.value)
                        }))
                      }
                      className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                    />

                    {/* Visual Slider Divider Bar */}
                    <div
                      className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20 pointer-events-none"
                      style={{ left: `${sliderPositions[item.id]}%` }}
                    >
                      <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center font-black shadow-lg border-2 border-white">
                        ↔
                      </div>
                    </div>
                  </div>
                )}

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-medium mb-3">
                  {item.description}
                </p>

                {/* Feature Checklist */}
                <ul className="space-y-1.5 text-xs text-slate-300 border-t border-slate-800 pt-3">
                  {item.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* 2. CLIENT MAINTENANCE REVIEW & ON-SITE INSPECTION PHOTO CARD */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-900/95 to-emerald-950/80 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left: Review Photo */}
            <div className="md:col-span-5 relative">
              <div
                className="relative aspect-4/3 rounded-2xl overflow-hidden border-2 border-emerald-500/40 shadow-xl cursor-pointer group/card"
                onClick={() =>
                  openLightbox(
                    normalReviewData[0].img,
                    "Client On-site Inspection & Maintenance Proof"
                  )
                }
              >
                <Image
                  src={normalReviewData[0].img}
                  alt="Client Maintenance Review"
                  fill
                  className="object-cover transition-transform duration-500 group-hover/card:scale-105"
                />
                <div className="absolute top-3 left-3 bg-emerald-600/90 backdrop-blur-xs text-white text-[10px] font-black uppercase px-3 py-1 rounded-lg border border-emerald-400/30 flex items-center gap-1 shadow-md">
                  <ShieldCheck size={13} />
                  Verified On-site Inspection
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-3 right-3 bg-slate-950/80 p-2 rounded-xl text-white opacity-0 group-hover/card:opacity-100 transition-opacity">
                  <Maximize2 size={16} />
                </div>
              </div>
            </div>

            {/* Right: Review Details */}
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-1.5 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-2 text-xs font-black text-amber-300">5.0 / 5.0 Client Rating</span>
                </div>
                <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold px-3 py-1 rounded-full">
                  Lucknow Solar AMC Client
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white leading-snug">
                &ldquo;Daily electricity unit generation jumped immediately after SunLynk maintenance wash!&rdquo;
              </h3>

              <p className="text-sm text-gray-300 leading-relaxed italic bg-slate-950/50 p-4 rounded-2xl border border-slate-800">
                &ldquo;{normalReviewData[0].reviewText}&rdquo;
              </p>

              <div className="pt-2 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center font-black text-emerald-400">
                    SL
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-white">{normalReviewData[0].clientName}</h4>
                    <p className="text-xs text-emerald-400 font-medium flex items-center gap-1">
                      <MapPin size={11} /> {normalReviewData[0].location}
                    </p>
                  </div>
                </div>

                <a
                  href={getWhatsappUrl("Hi SunLynk, I want to book a solar cleaning visit for my rooftop panels.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs px-5 py-2.5 rounded-xl transition-all flex items-center gap-2 shadow-md active:scale-95"
                >
                  <MessageSquare size={14} />
                  <span>Book Cleaning on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-8"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer border border-white/20"
            title="Close Lightbox (Esc)"
          >
            <X size={24} />
          </button>

          <div
            className="relative max-w-5xl max-h-[80vh] w-full h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[70vh] rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
              <Image
                src={selectedImg.src}
                alt={selectedImg.caption}
                fill
                className="object-contain"
              />
            </div>
            <p className="mt-4 text-sm sm:text-base font-bold text-white bg-slate-900/90 px-5 py-2.5 rounded-full border border-slate-700 text-center">
              {selectedImg.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
