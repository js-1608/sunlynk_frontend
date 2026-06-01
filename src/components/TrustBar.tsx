"use client";

import React from "react";
import { Wrench, RefreshCw, Zap, CalendarCheck } from "lucide-react";

const pillars = [
  {
    icon: <Wrench size={22} strokeWidth={2} />,
    title: "Zero repair cost",
    subtitle: "We fix it. Always.",
    accent: "primary" as const,
  },
  {
    icon: <RefreshCw size={22} strokeWidth={2} />,
    title: "Zero replacement",
    subtitle: "Parts on us.",
    accent: "primary" as const,
  },
  {
    icon: <Zap size={22} strokeWidth={2} />,
    title: "Guaranteed generation",
    subtitle: "Or we pay ₹8/unit.",
    accent: "secondary" as const,
  },
  {
    icon: <CalendarCheck size={22} strokeWidth={2} />,
    title: "5 year commitment",
    subtitle: "Not a one-time sale.",
    accent: "primary" as const,
  },
];

export default function TrustBar() {
  return (
    <section className="py-6 bg-white border-b border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-100">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3.5 px-5 py-5 lg:px-6 group cursor-default"
            >
              <div
                className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                  pillar.accent === "secondary"
                    ? "bg-secondary/10 text-secondary"
                    : "bg-primary/8 text-primary"
                }`}
              >
                {pillar.icon}
              </div>
              <div className="min-w-0">
                <h4 className="font-bold text-dark text-[13px] leading-snug truncate">
                  {pillar.title}
                </h4>
                <p className="text-[12px] text-gray-400 mt-0.5 truncate">
                  {pillar.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
