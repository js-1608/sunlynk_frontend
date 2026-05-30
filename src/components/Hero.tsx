"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const [mainImage, setMainImage] = useState("/assets/IMAGE/2.png");
  const [activeThumb, setActiveThumb] = useState(0);

  const images = [
    { src: "/assets/IMAGE/2.png", thumb: "/assets/IMAGE/1 (2).png" },
    { src: "/assets/IMAGE/1 (1).png", thumb: "/assets/IMAGE/1 (1).png" },
    { src: "/assets/IMAGE/1 (3).png", thumb: "/assets/IMAGE/1 (3).png" },
  ];

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-start bg-[#1C5085] overflow-hidden py-16 lg:py-0">
      {/* Video/Image Background */}
      <div className="absolute inset-0 z-0">
        <video 
          className="w-full h-full object-cover opacity-60"
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="/assets/IMAGE/iot-weather-station-banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Soft sky-blue/indigo gradient overlay to mimic the bright sky banner */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F3661]/90 via-[#1C4E83]/70 to-[#4B88C5]/45"></div>
      </div>

      <div className="max-w-7xl w-full mx-auto px-4 md:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Hero Content */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-white text-left max-w-2xl">
          {/* Subheading with custom blocks */}
          <div className="flex items-center gap-3">
            <span className="text-xs md:text-sm uppercase tracking-widest text-primary font-black">
              Powering the Future of Renewable Energy™
            </span>
            <div className="flex gap-1">
              <span className="w-3.5 h-3.5 bg-primary r ounded-sm"></span>
              <span className="w-3.5 h-3.5 bg-primary rounded-sm"></span>
              <span className="w-3.5 h-3.5 bg-primary rounded-sm"></span>
              <span className="w-3.5 h-3.5 bg-white/20 rounded-sm"></span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight drop-shadow-md">
            Advanced Weather, SCADA & ESS Solutions Driving Sustainability
          </h1>

          {/* Pill Image Box */}
          <div className="w-[250px] h-[60px] rounded-full overflow-hidden border border-white/25 relative shadow-lg my-1">
            <Image 
              src="/assets/IMAGE/solar.jpg" 
              alt="Solar installation engineers" 
              fill 
              className="object-cover object-center"
            />
          </div>

          {/* Quote Description */}
          <p className="text-sm md:text-base text-gray-200 font-medium leading-relaxed italic">
            &ldquo;Innovative Weather Stations, SCADA & ESS Solutions For A Sustainable World&rdquo;
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link 
              href="/products/rooftop-pv" 
              className="bg-primary hover:bg-primary-hover text-white py-3 px-6 rounded-md font-bold text-sm tracking-wide transition-all duration-300 flex items-center gap-2 shadow-md hover:scale-[1.02]"
            >
              <span>Our Services</span>
              <span className="font-bold">&gt;</span>
            </Link>
            <Link 
              href="/contact" 
              className="border border-primary hover:bg-primary hover:text-white py-3 px-6 rounded-md font-bold text-sm tracking-wide transition-all duration-300 flex items-center gap-2 hover:scale-[1.02]"
            >
              <span>Get  Quote</span>
              <span className="font-bold">&gt;</span>
            </Link>
          </div>
        </div>

        {/* Right Side: Spacer for absolute elements on desktop / Responsive widgets on mobile */}
        <div className="lg:col-span-5 h-[450px] lg:h-0 w-full relative lg:static flex items-end justify-center lg:justify-end">
          {/* Mobile representation (only visible on mobile/tablet) */}
          <div className="lg:hidden w-full flex flex-col items-center justify-end gap-6 relative z-20">
            {/* Play Button Mobile */}
            <a 
              href="https://www.youtube.com/watch?v=h9MbznbxlLc"
              target="_blank"
              rel="noopener noreferrer"
              className="w-20 h-20 rounded-full bg-[#5CB85C] hover:bg-[#4CA84C] text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center text-center shadow-lg relative border-2 border-white/40 cursor-pointer group"
            >
              <span>PLAY</span>
              <div className="absolute -inset-2 rounded-full border border-white/20 pointer-events-none"></div>
            </a>

            {/* Weather Station Cutout & Selector Mobile */}
            <div className="flex items-end gap-4 w-full justify-center">
              <div className="relative w-[180px] h-[260px]">
                <Image 
                  src={mainImage}
                  alt="Weather Station"
                  fill
                  className="object-contain object-bottom"
                />
              </div>

              <div className="flex flex-col gap-3 items-center">
                <div className="flex flex-col gap-2">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setMainImage(img.src);
                        setActiveThumb(idx);
                      }}
                      className={`w-11 h-11 rounded-full overflow-hidden border-2 bg-white/10 p-1 flex items-center justify-center transition-all duration-300 ${
                        activeThumb === idx ? "border-[#FF0000] scale-105" : "border-white/20"
                      }`}
                    >
                      <Image 
                        src={img.thumb}
                        alt={`Thumb ${idx}`}
                        width={30}
                        height={30}
                        className="object-contain"
                      />
                    </button>
                  ))}
                </div>

                {/* <button 
                  onClick={() => {
                    window.dispatchEvent(new CustomEvent("open-buy-now-modal"));
                  }}
                  className="w-16 h-16 rounded-full bg-[#FF0000] hover:bg-[#D40000] text-white font-bold text-[10px] uppercase tracking-wider flex items-center justify-center text-center shadow-lg"
                >
                  Buy Now
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Absolute floating widgets on Desktop only (lg and up) */}
      
      {/* 1. Green Circular PLAY Button (Top Right) */}
      {/* <div className="hidden lg:flex absolute top-[22%] right-[18%] xl:right-[22%] z-20 items-center justify-center">
        <a 
          href="https://www.youtube.com/watch?v=h9MbznbxlLc"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-28 h-28 rounded-full bg-[#5CB85C] hover:bg-[#4CA84C] hover:scale-105 transition-all duration-300 flex items-center justify-center border-2 border-white/40 text-white font-black text-sm tracking-wider cursor-pointer group shadow-lg"
        >
          <span>PLAY</span>
         <div className="absolute -inset-4 rounded-full border border-white/20 pointer-events-none group-hover:scale-105 transition-all duration-300"></div>
        </a>
      </div> */}

      {/* 2. Weather Station Cutout (Bottom Right) & selector vertical stack */}
      <div className="hidden lg:flex absolute bottom-0 right-[8%] xl:right-[4%] z-20 items-end gap-6">
        {/* Weather Station Cutout Image */}
        <div className="relative w-[320px] h-[450px] xl:w-[380px] xl:h-[530px] self-end">
          <Image 
            src={mainImage}
            alt="Weather Station"
            fill
            className="object-contain object-bottom transition-all duration-500"
            priority
          />
        </div>

        {/* Thumbnail vertical stack & Buy Now Button */}
        <div className="flex flex-col items-center justify-end gap-6 mb-10 shrink-0">
          {/* Thumbnails */}
          <div className="flex flex-col gap-4">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setMainImage(img.src);
                  setActiveThumb(idx);
                }}
                className={`w-14 h-14 rounded-full overflow-hidden border-2 bg-white/15 p-1.5 flex items-center justify-center transition-all duration-300 hover:scale-115 relative shadow-md ${
                  activeThumb === idx ? "border-[#FF0000] bg-white/20 scale-105" : "border-white/20 hover:border-white/50"
                }`}
              >
                <Image 
                  src={img.thumb}
                  alt={`Thumb ${idx}`}
                  width={42}
                  height={42}
                  className="object-contain"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
