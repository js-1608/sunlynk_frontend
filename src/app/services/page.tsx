"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
  X,
  User,
  Phone,
  MapPin,
  Loader2,
  ArrowRight,
  TrendingUp,
  Link2,
  Sparkles,
  Clock,
  ShieldAlert,
  Settings,
  Sliders,
  PenTool,
  ClipboardList
} from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// ─── Interfaces ────────────────────────────────────────────────────────────────

interface FormState {
  fullName: string;
  whatsappNumber: string;
  pinCode: string;
  packageType: "trial" | "amc";
}

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

// ─── Service Booking Popup Form ──────────────────────────────────────────────────

function ServiceBookingPopup({
  selectedPackage,
  onClose,
}: {
  selectedPackage: "trial" | "amc";
  onClose: () => void;
}) {
  const router = useRouter();
  const [form, setForm] = useState<FormState>({
    fullName: "",
    whatsappNumber: "",
    pinCode: "",
    packageType: selectedPackage,
  });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  const handleClose = useCallback(() => {
    setVisible(false);
    setTimeout(onClose, 280);
  }, [onClose]);

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.fullName.trim()) newErrors.fullName = "Name is required";
    if (!form.whatsappNumber.trim()) {
      newErrors.whatsappNumber = "WhatsApp number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.whatsappNumber.replace(/\s/g, ""))) {
      newErrors.whatsappNumber = "Enter a valid 10-digit Indian mobile number";
    }
    if (!form.pinCode.trim()) {
      newErrors.pinCode = "Pincode is required";
    } else if (!/^\d{6}$/.test(form.pinCode)) {
      newErrors.pinCode = "Enter a valid 6-digit pincode";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    setErrorMsg("");

    try {
      const payload = {
        type: `service_${form.packageType}`,
        fullName: form.fullName.trim(),
        whatsappNumber: form.whatsappNumber.trim(),
        pinCode: form.pinCode.trim(),
        message: `Solar Service Booking Request: ${form.packageType === "trial" ? "Trial Package (₹249)" : "Full Year AMC Plan"}`
      };

      const res = await fetch(`${API_URL}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Submission failed");

      try {
        await fetch(`https://sunlynksolar-backend.raptpurvanchal.com/api/contacts/website-webhook`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } catch (e) {
        console.error("Webhook submission error:", e);
      }

      setStatus("success");
      setTimeout(() => {
        handleClose();
        router.push("/contact");
      }, 2000);
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again or call support.");
    }
  };

  return (
    <>
      <div
        className={`fixed inset-0 z-[9990] transition-all duration-300 ${visible ? "bg-black/70 backdrop-blur-sm" : "bg-black/0"
          }`}
        onClick={handleClose}
        aria-hidden="true"
      />

      <div
        role="dialog"
        aria-modal="true"
        className="fixed inset-0 z-[9991] flex items-center justify-center p-4 pointer-events-none"
      >
        <div
          className={`pointer-events-auto relative w-full max-w-md rounded-2xl bg-white overflow-hidden shadow-[0_32px_80px_-8px_rgba(0,0,0,0.5)] border border-gray-100 transition-all duration-300 ease-out ${visible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-8"
            }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative bg-gradient-to-br from-slate-900 via-slate-850 to-emerald-950 px-6 pt-6 pb-8 text-white">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-250"
              aria-label="Close"
            >
              <X size={15} />
            </button>

            <span className="inline-block text-[10px] font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-3 py-1 mb-3">
              ☀️ SunLynk Solar Service
            </span>
            <h2 className="text-2xl font-black leading-snug">
              Book Your <span className="text-primary">Solar Service</span>
            </h2>
            <p className="text-xs text-gray-300 mt-1.5">
              Confirm your details. Our service technician will call within 24 hours to schedule the visit.
            </p>
          </div>

          {/* Form */}
          <div className="px-6 py-6 bg-white">
            {status === "success" ? (
              <div className="flex flex-col items-center text-center gap-4 py-6">
                <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                  <CheckCircle2 size={32} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Request Received! 🎉</h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Thank you. We will coordinate your solar visit shortly. Redirecting...
                  </p>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1 overflow-hidden">
                  <div className="h-full bg-primary animate-[progress_2s_linear_forwards]" />
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Select Package */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="packageType" className="text-xs font-bold text-gray-600 flex items-center gap-1.5">
                    <Sliders size={11} className="text-primary" />
                    Select Service Package
                  </label>
                  <select
                    id="packageType"
                    name="packageType"
                    value={form.packageType}
                    onChange={handleChange}
                    className="w-full h-11 px-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-800 outline-none transition-all focus:ring-2 focus:ring-primary/25 focus:border-primary font-medium"
                  >
                    <option value="trial">Basic Trial Service (₹249)</option>
                    <option value="amc">Full Year AMC Maintenance (Custom Quote)</option>
                  </select>
                </div>

                {/* Name */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="fullName" className="text-xs font-bold text-gray-600 flex items-center gap-1.5">
                    <User size={11} className="text-primary" />
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="e.g. Amit Kumar"
                    value={form.fullName}
                    onChange={handleChange}
                    className={`w-full h-11 px-3.5 rounded-xl border text-sm text-gray-800 outline-none transition-all focus:ring-2 focus:ring-primary/25 focus:border-primary ${errors.fullName
                      ? "border-red-400 bg-red-50/50"
                      : "border-gray-200 bg-gray-50"
                      }`}
                  />
                  {errors.fullName && (
                    <p className="text-[11px] text-red-500 font-semibold">{errors.fullName}</p>
                  )}
                </div>

                {/* WhatsApp Number */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="whatsappNumber" className="text-xs font-bold text-gray-600 flex items-center gap-1.5">
                    <Phone size={11} className="text-primary" />
                    WhatsApp Number
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-gray-200 bg-gray-100 text-gray-500 text-sm font-semibold select-none">
                      🇮🇳 +91
                    </span>
                    <input
                      id="whatsappNumber"
                      name="whatsappNumber"
                      type="tel"
                      maxLength={10}
                      placeholder="9876543210"
                      value={form.whatsappNumber}
                      onChange={handleChange}
                      className={`flex-1 h-11 px-3.5 rounded-r-xl border text-sm text-gray-800 outline-none transition-all focus:ring-2 focus:ring-primary/25 focus:border-primary ${errors.whatsappNumber
                        ? "border-red-400 bg-red-50/50"
                        : "border-gray-200 bg-gray-50"
                        }`}
                    />
                  </div>
                  {errors.whatsappNumber && (
                    <p className="text-[11px] text-red-500 font-semibold">{errors.whatsappNumber}</p>
                  )}
                </div>

                {/* Pincode */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="pinCode" className="text-xs font-bold text-gray-600 flex items-center gap-1.5">
                    <MapPin size={11} className="text-primary" />
                    Pincode
                  </label>
                  <input
                    id="pinCode"
                    name="pinCode"
                    type="text"
                    maxLength={6}
                    placeholder="e.g. 226010"
                    value={form.pinCode}
                    onChange={handleChange}
                    className={`w-full h-11 px-3.5 rounded-xl border text-sm text-gray-800 outline-none transition-all focus:ring-2 focus:ring-primary/25 focus:border-primary ${errors.pinCode
                      ? "border-red-400 bg-red-50/50"
                      : "border-gray-200 bg-gray-50"
                      }`}
                  />
                  {errors.pinCode && (
                    <p className="text-[11px] text-red-500 font-semibold">{errors.pinCode}</p>
                  )}
                </div>

                {errorMsg && (
                  <p className="text-xs text-red-500 font-medium bg-red-50 border border-red-100 rounded-xl px-3 py-2">
                    {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full h-12 rounded-xl bg-primary hover:bg-primary-hover text-white font-extrabold text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.98] disabled:bg-primary/50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Booking Visit…
                    </>
                  ) : (
                    <>
                      Schedule Booking Visit
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
                <p className="text-center text-[10px] text-gray-400">
                  🛡️ Powered by SunLynk Service Network. Secure connection.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes progress {
          from { width: 0% }
          to { width: 100% }
        }
      `}</style>
    </>
  );
}

// ─── Main Services Component ──────────────────────────────────────────────────

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [selectedPkg, setSelectedPkg] = useState<"trial" | "amc" | null>(null);

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
    <div className="min-h-screen bg-slate-50 text-dark">
      {/* 1. Hero Header Banner */}
      <section className="px-4 md:px-8 pt-6 pb-2">
        <div className="max-w-7xl mx-auto relative rounded-2xl overflow-hidden py-20 md:py-28 bg-dark text-white flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/new_assets/aftersales.webp"
              alt="Solar panels cleaning technician"
              fill
              className="object-cover opacity-35 object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/70 via-slate-950/40 to-dark/95" />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center gap-4 text-center max-w-4xl px-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full flex items-center gap-2 text-xs text-white/90 shadow-inner">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="text-white/40">&gt;</span>
              <span className="text-white font-medium">Solar Services & AMC</span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mt-2 drop-shadow-md">
              Solar Services & <span className="text-primary">AMC Maintenance</span>
            </h1>
            <p className="text-sm md:text-base text-gray-300 max-w-2xl leading-relaxed mt-2">
              Keep your solar panels performing at maximum efficiency. We provide professional cleaning, earthing audits, fault fixes, and scheduled preventive maintenance for all brands.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
              <a
                href="#packages"
                className="bg-primary hover:bg-primary-hover text-white text-xs sm:text-sm font-extrabold px-6 py-3 rounded-xl transition-all shadow-md active:scale-95"
              >
                View Service Plans
              </a>
              <a
                href="#checklist"
                className="bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl transition-all"
              >
                See 18-Point Checklist
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
              Choose the package that fits your solar installation. From a simple trial clean to year-round technical coverage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Package 1: Trial Package */}
            <div className="group relative bg-white border border-gray-150 hover:border-emerald-200 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-bl-[100px]" />

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold mb-4">
                  <Sparkles size={12} />
                  Single Service Visit
                </div>
                <h3 className="text-2xl font-black text-gray-900">Trial Package</h3>
                <p className="text-xs text-gray-400 mt-1">Excellent way to try our cleaning service and verify generation.</p>

                {/* Price */}
                <div className="my-6 flex items-baseline gap-1">
                  <span className="text-4xl font-black text-dark">₹249</span>
                  <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">/ Visit Trial</span>
                </div>

                <div className="border-t border-dashed border-gray-200 my-5" />

                {/* Features */}
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 mt-0.5 text-primary">
                      <CheckCircle2 size={13} className="stroke-[2.5]" />
                    </span>
                    <span className="text-sm text-gray-700 font-medium">
                      <strong>Panel cleaning:</strong> Professional manual wash of the solar array
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 mt-0.5 text-primary">
                      <CheckCircle2 size={13} className="stroke-[2.5]" />
                    </span>
                    <span className="text-sm text-gray-700 font-medium">
                      <strong>Basic visual inspection:</strong> Identification of cracks, structural issues, or severe nesting
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 mt-0.5 text-primary">
                      <CheckCircle2 size={13} className="stroke-[2.5]" />
                    </span>
                    <span className="text-sm text-gray-700 font-medium">
                      <strong>Basic generation check:</strong> Simple monitoring of generation trends
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 mt-0.5 text-primary">
                      <CheckCircle2 size={13} className="stroke-[2.5]" />
                    </span>
                    <span className="text-sm text-gray-700 font-medium">
                      <strong>Before / after photos:</strong> High-resolution photos sent to WhatsApp as proof
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <button
                  onClick={() => setSelectedPkg("trial")}
                  className="w-full py-3.5 rounded-xl border-2 border-emerald-600 text-emerald-800 font-extrabold text-sm hover:bg-emerald-50 hover:border-emerald-700 transition-all flex items-center justify-center gap-1.5 active:scale-[0.99] cursor-pointer"
                >
                  <span>Book Trial Visit</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Package 2: Yearly Plans / AMC */}
            <div className="group relative bg-slate-900 border-2 border-primary hover:border-primary-hover rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden text-white">
              {/* Popular Badge */}
              <div className="absolute top-0 right-0 bg-primary text-slate-900 text-[10px] font-black uppercase tracking-widest px-6 py-2 rounded-bl-2xl shadow-sm">
                ⭐ Recommended
              </div>

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4 border border-primary/20">
                  <ShieldCheck size={12} />
                  Annual Maintenance Contract
                </div>
                <h3 className="text-2xl font-black">Full Year Packages</h3>
                <p className="text-xs text-gray-400 mt-1">Total care, preventive safety, and optimized energy yield all year round.</p>

                {/* Price */}
                <div className="my-6 flex items-baseline gap-1">
                  <span className="text-4xl font-black text-white">Custom Quote</span>
                  <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">/ Yearly Plan</span>
                </div>

                <div className="border-t border-slate-800 my-5" />

                {/* Features */}
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0 mt-0.5 text-primary">
                      <CheckCircle2 size={13} className="stroke-[2.5]" />
                    </span>
                    <span className="text-sm text-gray-200 font-medium">
                      <strong>AMC Visit = Preventive Maintenance:</strong> Scheduled checkups
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0 mt-0.5 text-primary">
                      <CheckCircle2 size={13} className="stroke-[2.5]" />
                    </span>
                    <span className="text-sm text-gray-200 font-medium">
                      <strong>Periodic Panel cleaning:</strong> Keeps panels running with zero dust loss
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0 mt-0.5 text-primary">
                      <CheckCircle2 size={13} className="stroke-[2.5]" />
                    </span>
                    <span className="text-sm text-gray-200 font-medium">
                      <strong>Detailed electrical inspection:</strong> Advanced tool-based cable & terminal audits
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0 mt-0.5 text-primary">
                      <CheckCircle2 size={13} className="stroke-[2.5]" />
                    </span>
                    <span className="text-sm text-gray-200 font-medium">
                      <strong>Inverter, Cables, Structure & Earthing check:</strong> 18-Point complete verification
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0 mt-0.5 text-primary">
                      <CheckCircle2 size={13} className="stroke-[2.5]" />
                    </span>
                    <span className="text-sm text-gray-200 font-medium">
                      <strong>Minor tightening & Service reports:</strong> Direct dashboard/PDF maintenance log
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0 mt-0.5 text-primary">
                      <CheckCircle2 size={13} className="stroke-[2.5]" />
                    </span>
                    <span className="text-sm text-gray-200 font-medium">
                      <strong>Priority complaint handling:</strong> Dedicated fast response support
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <button
                  onClick={() => setSelectedPkg("amc")}
                  className="w-full py-4 rounded-xl bg-primary hover:bg-primary-hover text-slate-900 font-black text-sm transition-all flex items-center justify-center gap-1.5 active:scale-[0.99] cursor-pointer"
                >
                  <span>Request Yearly AMC Quote</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
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
                      ? "bg-primary text-white border-primary shadow-md hover:bg-primary-hover scale-[1.01]"
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
            <div className="bg-white border border-gray-150 rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden transition-all duration-300">
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
                className="bg-gray-50 border border-gray-150 hover:border-emerald-200 hover:bg-emerald-50/20 rounded-2xl p-5 flex flex-col items-center justify-center text-center transition-all duration-300 shadow-sm group hover:-translate-y-0.5"
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

      {/* 5. CTA Booking Banner */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-850 to-emerald-950 text-white relative overflow-hidden">
        {/* Background Grid Accent */}
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
            Don't let dust, loose connections, or earth leakages drain your power output. Schedule a trial cleaning visit for ₹249 or start a full-year AMC today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <button
              onClick={() => setSelectedPkg("trial")}
              className="bg-primary hover:bg-primary-hover text-slate-900 text-sm font-black px-8 py-3.5 rounded-xl transition-all shadow-md active:scale-95 cursor-pointer"
            >
              Book Professional cleaning Visit
            </button>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-bold px-8 py-3.5 rounded-xl transition-all flex items-center gap-1.5"
            >
              <span>Contact Support</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Service Request Popup Modal */}
      {selectedPkg && (
        <ServiceBookingPopup
          selectedPackage={selectedPkg}
          onClose={() => setSelectedPkg(null)}
        />
      )}
    </div>
  );
}
