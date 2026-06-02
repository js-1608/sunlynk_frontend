"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

function useCountDown(target: number, from: number, duration = 2500) {
  const [value, setValue] = useState(from);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const startTime = performance.now();
    let raf: number;

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutQuad for a satisfying deceleration
      const eased = 1 - (1 - progress) * (1 - progress);
      const current = Math.round(from - (from - target) * eased);
      setValue(current);
      if (progress < 1) raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [started, target, from, duration]);

  return { value, ref };
}

export default function HeroV2() {
  const { value: billAmount, ref: billRef } = useCountDown(0, 5000, 5000);

  const formattedBill = billAmount.toLocaleString("en-IN");

  return (
    <section className="relative bg-white overflow-hidden py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center">

          {/* Left — Text Content */}
          <div className="flex flex-col gap-4 lg:gap-6 max-w-xl z-10">
            {/* Badge */}
            {/* <div className="inline-flex self-start">
              <span className="inline-flex items-center gap-2 bg-primary/8 rounded-full py-2 px-5 text-xs font-bold text-primary tracking-wide">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                5 Year Solar Commitment
              </span>
            </div> */}

            {/* Heading */}
            <div>
              <h2 className="text-[2.75rem] sm:text-5xl md:text-[3.5rem] font-black text-dark leading-[1.1] tracking-tight">
                Say goodbye to
              </h2>
              <h2 className="text-[2.75rem] sm:text-5xl md:text-[3.5rem] font-black text-primary leading-[1.1] tracking-tight">
                electricity bills.
              </h2>
            </div>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-gray-400 font-medium leading-relaxed -mt-2">
              For the next <span className="text-secondary font-extrabold">25 years</span> — and beyond.*
            </p>

            {/* Body */}
            <p className="text-[14px] text-gray-500 leading-[1.7] max-w-md hidden lg:block">
              SunLynk Solar brings you guaranteed solar generation with zero repair and zero replacement cost. We commit to your generation — and if we fall short, <span className="text-dark font-semibold">we pay you back.</span>
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group bg-primary hover:bg-primary-hover text-white font-bold text-md py-3 px-8 rounded transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 flex items-center gap-2"
              >
                <span>Get free quote</span>
                <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              {/* <a
                href="#sunlynk-why"
                className="group flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-primary transition-colors py-4 px-2 hidden lg:flex"
              >
                <span className="w-10 h-10 rounded-full border-2 border-gray-200 group-hover:border-primary flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </span>
                <span>See how it works</span>
              </a> */}
            </div>

            {/* Trust mini */}
            <div className="flex items-center gap-6 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-2">
                <div className="flex text-secondary">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-bold text-dark">4.9</span>
              </div>
              <span className="text-[13px] text-gray-400 font-medium">142+ Google Reviews</span>
              <span className="text-[13px] text-gray-400 font-medium">• 10+ Years Experience</span>
            </div>
          </div>

          {/* Right — Image Composition */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Animated Sun */}
            <div className="absolute -top-8 right-4 sm:-top-6 sm:right-8 z-20 animate-[sunPulse_3s_ease-in-out_infinite]">
              <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Sun rays */}
                <g className="animate-[sunSpin_20s_linear_infinite]" style={{ transformOrigin: '45px 45px' }}>
                  {[...Array(12)].map((_, i) => (
                    <line
                      key={i}
                      x1="45"
                      y1="8"
                      x2="45"
                      y2="18"
                      stroke="#F59E0B"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      transform={`rotate(${i * 30} 45 45)`}
                    />
                  ))}
                </g>
                {/* Sun glow */}
                <circle cx="45" cy="45" r="22" fill="#FCD34D" opacity="0.3" className="animate-[sunGlow_2s_ease-in-out_infinite]" />
                {/* Sun body */}
                <circle cx="45" cy="45" r="16" fill="url(#sunGradient)" />
                {/* Sun face - happy */}
                <circle cx="39" cy="42" r="1.5" fill="#92400E" />
                <circle cx="51" cy="42" r="1.5" fill="#92400E" />
                <path d="M40 49 Q45 53 50 49" stroke="#92400E" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                <defs>
                  <radialGradient id="sunGradient" cx="0.3" cy="0.3" r="0.7">
                    <stop offset="0%" stopColor="#FDE68A" />
                    <stop offset="100%" stopColor="#F59E0B" />
                  </radialGradient>
                </defs>
              </svg>
            </div>

            {/* Main image */}
            <div className="relative w-full max-w-[580px]">
              <div className="relative w-full aspect-[5/4]  overflow-hidden">
                <Image
                  src="/assets/images/solar_home.png"
                  alt="Home with Solar Panels - SunLynk Installation"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Warm sunlight overlay at top */}
                <div className="absolute top-0 right-0 w-2/3 h-1/3 bg-gradient-to-bl from-amber-400/15 to-transparent pointer-events-none" />
                {/* Subtle gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Floating stat — Bill Reduction ₹5,000 → ₹0 (animated counter) */}
              <div ref={billRef} className="absolute -top-3 -left-3 sm:top-6 sm:-left-6 bg-white  shadow-xl border border-gray-100 p-4 sm:p-3 z-10 w-[200px]">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 bg-[#f5b623] rounded flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className={`text-[18px] font-black leading-none tabular-nums transition-colors duration-300 ${billAmount === 0 ? 'text-green-600' : 'text-red-500'
                        }`}>
                        ₹{formattedBill}
                      </p>
                      {/* {billAmount === 0 && (
                        <span className="text-xs font-bold text-green-500 bg-green-50 rounded-full px-2 py-0.5 animate-[sunPulse_2s_ease-in-out_infinite]">
                          SAVED!
                        </span>
                      )} */}
                    </div>
                    <p className="text-[10px] text-gray-600 font-semibold mt-1">Monthly Electricity Bill</p>
                  </div>
                </div>
              </div>

              {/* Floating stat — bottom right */}
              <div className="absolute -bottom-3 -right-3 sm:bottom-8 sm:-right-6 bg-white shadow-xl border border-gray-100 p-4 sm:p-3 flex items-center gap-3 z-10 w-[200px]">
                <div className="w-11 h-11 bg-primary rounded flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[16px] font-black text-dark leading-none">5 Years</p>
                  <p className="text-[10px] text-gray-600 font-semibold mt-1">Full Guarantee</p>
                </div>
              </div>
            </div>

            {/* Decorative blurred circle behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-primary/[0.04] blur-3xl pointer-events-none -z-10" />

            {/* Sun rays decorative background */}
            <div className="absolute -top-12 right-0 w-[200px] h-[200px] bg-gradient-to-bl from-amber-300/10 via-yellow-200/5 to-transparent rounded-full blur-2xl pointer-events-none -z-10" />
          </div>
        </div>
      </div>

      {/* Bottom border */}
      {/* <div className="h-px bg-gray-100" /> */}
    </section>
  );
}
