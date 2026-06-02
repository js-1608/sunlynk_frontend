"use client";

import React from "react";
import Image from "next/image";

export default function ProblemSection() {
  return (
    <section id="sunlynk-why" className="py-16 bg-gray-1000">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header — centered */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-black text-dark leading-tight tracking-tight mb-5">
            Solar should be simple.{" "}
            <span className="text-primary">So why does it feel risky?</span>
          </h2>
          <p className="text-[15px] sm:text-base text-gray-800 leading-[1.8]">
            Most solar buyers worry about the same three things — what if the cells break, what if generation is less than promised, and who will I call for repairs? <span className="text-dark font-semibold">We built SunLynk to answer all three. For 5 full years.</span>
          </p>
        </div>

        {/* Content — Image + 3 Worry Items */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Image */}
          <div className="lg:col-span-5">
            <div className="relative w-full aspect-[5/4] rounded overflow-hidden shadow-lg">
              <Image
                src="/assets/images/backgrounds/slider-2-1.webp"
                alt="Solar installation on residential rooftop"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Worry cards */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* Card 1 */}
            <div className="flex items-start gap-5 bg-white rounded p-5 item-center border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/15 transition-all duration-300">
              <div className="w-20 h-20 bg-primary/8 rounded-xl flex items-center justify-center text-primary shrink-0 m-auto">
                <svg className="w-10 h-10 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-dark text-base mb-1">What if the panels break?</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Zero replacement cost for 5 years. We cover all parts — panels, inverters, everything. No questions asked.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-start gap-5 bg-white rounded p-5 item-center border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/15 transition-all duration-300">
              <div className="w-20 h-20 bg-primary/8 rounded-xl flex items-center justify-center text-primary shrink-0 m-auto">
                <svg className="w-10 h-10 opacity-80" fill="none" viewBox="0 0 24 24" stroke="#fbbf24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-dark text-base mb-1">What if generation is low?</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  We guarantee output — and pay ₹8/unit for any deficit. Your savings are protected by our commitment.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex items-start gap-5 bg-white rounded p-5 item-center border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/15 transition-all duration-300">
              <div className="w-20 h-20 bg-primary/8 rounded-xl flex items-center justify-center text-primary shrink-0 m-auto">
                <svg className="w-10 h-10 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-dark text-base mb-1">Who will I call for repairs?</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Just call us. SunLynk handles everything — zero repair cost for 5 full years. We&apos;re always a phone call away.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
