"use client";

import React, { useState } from "react";
import { MessageSquare, Star, Sparkles, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

const CONTACT_NUMBER = "8573003002";

const getWhatsappUrl = (planName: string, visits: string, capacity: string, price: string) => {
  const message = `Hi SunLynk, I am interested in booking the ${planName} Plan (${visits}) for a ${capacity} system at ₹${price}. Please provide more details.`;
  return `https://wa.me/91${CONTACT_NUMBER}?text=${encodeURIComponent(message)}`;
};

export interface PlanRow {
  name: string;
  visits: string;
  highlight?: boolean; // Light blue background like in Care row
  isPopular?: boolean;
  isBestValue?: boolean;
  price1to5KW: {
    total: string;
    perVisit: string;
  };
  price6to10KW: {
    total: string;
    perVisit: string;
  };
}

export const plansData: PlanRow[] = [
  {
    name: "One Time Visit",
    visits: "1 Visit",
    price1to5KW: { total: "599/-", perVisit: "599/-" },
    price6to10KW: { total: "799/-", perVisit: "799/-" },
  },
  {
    name: "Essential",
    visits: "4 Visits",
    price1to5KW: { total: "2,200", perVisit: "550" },
    price6to10KW: { total: "2,999", perVisit: "750" },
  },
  {
    name: "Care",
    visits: "6 Visits",
    highlight: true,
    isPopular: true,
    price1to5KW: { total: "3,400", perVisit: "567" },
    price6to10KW: { total: "4,399", perVisit: "733" },
  },
  {
    name: "Plus",
    visits: "9 Visits",
    price1to5KW: { total: "5,200", perVisit: "578" },
    price6to10KW: { total: "6,399", perVisit: "711" },
  },
  {
    name: "Complete ⭐",
    visits: "12 Visits",
    isBestValue: true,
    price1to5KW: { total: "7,000", perVisit: "583" },
    price6to10KW: { total: "8,399", perVisit: "700" },
  },
];

export default function PricingTable() {
  const [selectedCapacity, setSelectedCapacity] = useState<"all" | "1-5" | "6-10">("all");

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      {/* Capacity Selector Tabs for Quick Filtering */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-50 p-3 rounded-2xl border border-slate-200">
        <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700">
          <Zap size={16} className="text-emerald-600" />
          <span>View Capacity Plans:</span>
        </div>
        <div className="flex items-center gap-1.5 bg-white p-1 rounded-xl border border-slate-200 shadow-xs">
          <button
            onClick={() => setSelectedCapacity("all")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              selectedCapacity === "all"
                ? "bg-emerald-600 text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            Full Table Matrix
          </button>
          <button
            onClick={() => setSelectedCapacity("1-5")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              selectedCapacity === "1-5"
                ? "bg-emerald-600 text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            1–5 KW System
          </button>
          <button
            onClick={() => setSelectedCapacity("6-10")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              selectedCapacity === "6-10"
                ? "bg-emerald-600 text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            6–10 KW System
          </button>
        </div>
      </div>

      {/* Main Pricing Matrix Table */}
      <div className="relative overflow-x-auto rounded-2xl border border-slate-300 shadow-lg bg-white">
        <table className="w-full min-w-[640px] text-left border-collapse">
          <thead>
            <tr className="bg-sky-500 text-white text-sm sm:text-base font-extrabold divide-x divide-sky-400">
              <th scope="col" className="py-4 px-4 sm:px-6 w-[22%] bg-sky-500 text-slate-950 font-black">
                Essential / Plans
              </th>
              <th scope="col" className="py-4 px-3 sm:px-5 text-center w-[18%]">
                Visits / Year
              </th>
              <th scope="col" className="py-4 px-3 sm:px-5 text-center w-[18%] bg-sky-600 text-white">
                1–5 KW
              </th>
              <th scope="col" className="py-4 px-3 sm:px-5 text-center w-[14%] bg-sky-600 text-white">
                Per Visit
              </th>
              <th scope="col" className="py-4 px-3 sm:px-5 text-center w-[18%] bg-sky-700 text-white">
                6–10 KW
              </th>
              <th scope="col" className="py-4 px-3 sm:px-5 text-center w-[14%] bg-sky-700 text-white">
                Per Visit
              </th>
              <th scope="col" className="py-4 px-3 text-center w-[10%]">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 text-xs sm:text-sm font-medium text-slate-800">
            {plansData.map((plan, index) => {
              const isCare = plan.highlight;
              const isComplete = plan.isBestValue;

              return (
                <tr
                  key={index}
                  className={`transition-colors duration-150 divide-x divide-slate-200 ${
                    isCare
                      ? "bg-sky-100/80 font-bold text-slate-950 hover:bg-sky-200/80"
                      : isComplete
                      ? "bg-amber-50/70 hover:bg-amber-100/70 font-semibold"
                      : "hover:bg-slate-50/80"
                  }`}
                >
                  {/* Plan Name */}
                  <td className="py-4 px-4 sm:px-6">
                    <div className="flex items-center gap-2">
                      <span className={`text-sm sm:text-base ${isCare || isComplete ? "font-black" : "font-bold text-slate-900"}`}>
                        {plan.name}
                      </span>
                      {isCare && (
                        <span className="inline-flex items-center gap-1 bg-sky-600 text-white text-[10px] font-black uppercase px-2 py-0.5 rounded-full">
                          Popular
                        </span>
                      )}
                      {isComplete && (
                        <span className="inline-flex items-center gap-1 bg-amber-500 text-slate-950 text-[10px] font-black uppercase px-2 py-0.5 rounded-full shadow-xs">
                          Best Value
                        </span>
                      )}
                    </div>
                  </td>

                  {/* Visits / Year */}
                  <td className="py-4 px-3 sm:px-5 text-center font-bold text-slate-800">
                    {plan.visits}
                  </td>

                  {/* 1-5 KW Total */}
                  <td
                    className={`py-4 px-3 sm:px-5 text-center font-bold ${
                      selectedCapacity === "6-10" ? "opacity-40" : "text-slate-900"
                    } ${isCare ? "text-base font-black text-slate-950" : ""}`}
                  >
                    ₹{plan.price1to5KW.total}
                  </td>

                  {/* 1-5 KW Per Visit */}
                  <td
                    className={`py-4 px-3 sm:px-5 text-center ${
                      selectedCapacity === "6-10" ? "opacity-40" : ""
                    } ${
                      isComplete
                        ? "font-black text-emerald-700 text-base"
                        : isCare
                        ? "font-black text-slate-950"
                        : "font-semibold text-slate-700"
                    }`}
                  >
                    {plan.price1to5KW.perVisit.includes("/") ? `₹${plan.price1to5KW.perVisit}` : `₹${plan.price1to5KW.perVisit}`}
                  </td>

                  {/* 6-10 KW Total */}
                  <td
                    className={`py-4 px-3 sm:px-5 text-center font-bold ${
                      selectedCapacity === "1-5" ? "opacity-40" : "text-slate-900"
                    }`}
                  >
                    ₹{plan.price6to10KW.total}
                  </td>

                  {/* 6-10 KW Per Visit */}
                  <td
                    className={`py-4 px-3 sm:px-5 text-center ${
                      selectedCapacity === "1-5" ? "opacity-40" : ""
                    } ${isCare ? "font-bold text-slate-900" : "font-semibold text-slate-700"}`}
                  >
                    {plan.price6to10KW.perVisit.includes("/") ? `₹${plan.price6to10KW.perVisit}` : `₹${plan.price6to10KW.perVisit}`}
                  </td>

                  {/* WhatsApp Action */}
                  <td className="py-3 px-3 text-center">
                    <a
                      href={getWhatsappUrl(
                        plan.name,
                        plan.visits,
                        selectedCapacity === "6-10" ? "6–10 KW" : "1–5 KW",
                        selectedCapacity === "6-10" ? plan.price6to10KW.total : plan.price1to5KW.total
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center p-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-all shadow-xs hover:scale-105 active:scale-95"
                      title={`Book ${plan.name} on WhatsApp`}
                    >
                      <MessageSquare size={16} />
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Cards View for Mobile / Quick Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mt-6">
        {plansData.map((plan, idx) => (
          <div
            key={idx}
            className={`p-4 rounded-2xl border transition-all flex flex-col justify-between ${
              plan.highlight
                ? "bg-sky-50 border-sky-300 shadow-md ring-2 ring-sky-400/30"
                : plan.isBestValue
                ? "bg-amber-50/80 border-amber-300 shadow-md ring-2 ring-amber-400/30"
                : "bg-white border-slate-200 shadow-xs hover:shadow-md"
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-black uppercase tracking-wider text-slate-500">{plan.visits}</span>
                {plan.isPopular && <span className="bg-sky-600 text-white text-[9px] font-black px-1.5 py-0.5 rounded-md uppercase">Popular</span>}
                {plan.isBestValue && <span className="bg-amber-500 text-slate-950 text-[9px] font-black px-1.5 py-0.5 rounded-md uppercase">Best Value</span>}
              </div>
              <h4 className="text-base font-black text-slate-900 leading-tight mb-3">{plan.name}</h4>

              <div className="space-y-1.5 text-xs border-t border-slate-200/80 pt-2.5">
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 font-medium">1–5 KW:</span>
                  <span className="font-bold text-slate-900">₹{plan.price1to5KW.total} <span className="text-[10px] text-slate-400 font-normal">(₹{plan.price1to5KW.perVisit}/visit)</span></span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 font-medium">6–10 KW:</span>
                  <span className="font-bold text-slate-900">₹{plan.price6to10KW.total} <span className="text-[10px] text-slate-400 font-normal">(₹{plan.price6to10KW.perVisit}/visit)</span></span>
                </div>
              </div>
            </div>

            <a
              href={getWhatsappUrl(plan.name, plan.visits, "1-5 KW", plan.price1to5KW.total)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-xs"
            >
              <MessageSquare size={13} className="text-emerald-400" />
              <span>Select Plan</span>
            </a>
          </div>
        ))}
      </div>

      {/* Note / Inclusions */}
      <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-600">
        <div className="flex items-center gap-2">
          <ShieldCheck size={18} className="text-emerald-600 shrink-0" />
          <span>
            <strong>All AMC Plans Include:</strong> Professional panel pressure washing, structural health check, electrical safety audit, inverter diagnostic & WhatsApp photo verification.
          </span>
        </div>
        <a
          href={getWhatsappUrl("Custom AMC Quote", "Annual", "10+ KW", "Custom")}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-emerald-700 font-bold hover:underline flex items-center gap-1"
        >
          <span>Need &gt;10 KW Custom Quote?</span>
        </a>
      </div>
    </div>
  );
}
