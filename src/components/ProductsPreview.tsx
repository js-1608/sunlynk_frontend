"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Check, X } from "lucide-react";

const plans = [
  {
    name: "Lynk Lite",
    tag: "Start with solar",
    tagline: "Best value entry plan",
    popular: false,
    features: [
      { text: "TopCon panels", included: true },
      { text: "Polycab inverter", included: true },
      { text: "Professional installation", included: true },
      { text: "Corrective maintenance", included: true },
      { text: "Zero repair cost — 5 years", included: false },
      { text: "Zero replacement cost — 5 years", included: false },
      { text: "Guaranteed generation", included: false },
      { text: "₹8/unit deficit return", included: false },
    ],
  },
  {
    name: "Lynk Sure",
    tag: "Solar with guarantee",
    tagline: "Lynk Lite + ₹20,000 — complete peace of mind",
    popular: true,
    features: [
      { text: "TopCon panels", included: true },
      { text: "Polycab inverter", included: true },
      { text: "Professional installation", included: true },
      { text: "Corrective maintenance", included: true },
      { text: "Zero repair cost — 5 years", included: true },
      { text: "Zero replacement cost — 5 years", included: true },
      { text: "Guaranteed generation", included: true },
      { text: "₹8/unit deficit return", included: true },
    ],
  },
];

export default function ProductsPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="h-[2px] w-6 bg-primary" />
            <span className="text-xs uppercase tracking-[0.15em] font-bold text-primary">Our Plans</span>
            <span className="h-[2px] w-6 bg-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark leading-tight mb-3">
            Choose your solar plan
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Two plans. One goal — complete peace of mind for your solar investment.
          </p>
        </div>

        {/* Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl ${plan.popular
                ? "border-2 border-primary shadow-lg"
                : "border border-gray-200 shadow-sm hover:border-gray-300"
                }`}
            >
              {/* Popular banner */}
              {plan.popular && (
                <div className="bg-primary text-white text-center py-2 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Most Popular
                </div>
              )}

              <div className="p-8">
                {/* Tag */}
                <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-5 ${plan.popular ? "bg-primary/8 text-primary" : "bg-gray-100 text-gray-500"
                  }`}>
                  {plan.tag}
                </span>

                {/* Name & tagline */}
                <h3 className="text-2xl font-extrabold text-dark mb-1.5">{plan.name}</h3>
                <p className="text-[13px] text-gray-400 mb-7 leading-relaxed">{plan.tagline}</p>

                {/* Divider */}
                <div className="h-px bg-gray-100 mb-7" />

                {/* Features */}
                <ul className="space-y-3.5 mb-9">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3">
                      {feat.included ? (
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <Check size={12} className="text-primary" strokeWidth={3} />
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0">
                          <X size={10} className="text-gray-300" strokeWidth={3} />
                        </div>
                      )}
                      <span className={`text-[13px] ${feat.included ? "text-gray-700 font-medium" : "text-gray-400"
                        }`}>
                        {feat.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="/contact"
                  className={`group flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl font-bold text-sm transition-all duration-300 ${plan.popular
                    ? "bg-primary hover:bg-primary-hover text-white shadow-sm hover:shadow-md"
                    : "bg-gray-900 hover:bg-black text-white"
                    }`}
                >
                  <span>Get Quote</span>
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-xs text-gray-400 mt-10 leading-relaxed">
          Both plans include professional site survey, custom 3D design, and full installation.{" "}
          <Link href="/contact" className="text-primary font-semibold hover:underline">
            Talk to an expert →
          </Link>
        </p>
      </div>
    </section>
  );
}
