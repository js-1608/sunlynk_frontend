"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, Sun, Phone, MapPin, User, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

const POPUP_DELAY_MS = 60_000; // 1 minute
const SESSION_KEY = "sunlynk_popup_shown";
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

interface FormState {
  fullName: string;
  whatsappNumber: string;
  pinCode: string;
}

export default function PopupForm() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [form, setForm] = useState<FormState>({ fullName: "", whatsappNumber: "", pinCode: "" });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const openPopup = useCallback(() => {
    setIsVisible(true);
    setTimeout(() => setIsAnimating(true), 10); // Trigger CSS enter animation
  }, []);

  const closePopup = useCallback(() => {
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 300); // Wait for CSS leave animation
    sessionStorage.setItem(SESSION_KEY, "true");
  }, []);

  useEffect(() => {
    // Only show once per session
    if (sessionStorage.getItem(SESSION_KEY)) return;

    const timer = setTimeout(openPopup, POPUP_DELAY_MS);
    return () => clearTimeout(timer);
  }, [openPopup]);

  // Close on Escape key
  useEffect(() => {
    if (!isVisible) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePopup();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isVisible, closePopup]);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      const res = await fetch(`${API_URL}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "popup",
          fullName: form.fullName.trim(),
          whatsappNumber: form.whatsappNumber.trim(),
          pinCode: form.pinCode.trim(),
        }),
      });

      if (!res.ok) throw new Error("Submission failed");

      setStatus("success");
      setTimeout(() => {
        closePopup();
      }, 2500);
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[9998] transition-all duration-300 ${
          isAnimating ? "bg-black/60 backdrop-blur-sm" : "bg-black/0 backdrop-blur-none"
        }`}
        onClick={closePopup}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-form-title"
        className={`fixed z-[9999] inset-0 flex items-center justify-center p-4 pointer-events-none`}
      >
        <div
          className={`
            pointer-events-auto relative w-full max-w-[820px] rounded-2xl overflow-hidden
            shadow-[0_32px_80px_-8px_rgba(0,0,0,0.55)]
            flex flex-col md:flex-row
            transition-all duration-300 ease-out
            ${isAnimating
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 translate-y-6"
            }
          `}
          onClick={(e) => e.stopPropagation()}
        >
          {/* ─── Left Panel: Image + headline ─── */}
          <div className="relative md:w-[42%] flex-shrink-0 min-h-[220px] md:min-h-[auto] overflow-hidden bg-emerald-900">
            <Image
              src="/popup_solar_banner.png"
              alt="Get a free solar quote - SunLynk Solar"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-900/40 to-transparent md:bg-gradient-to-r md:from-transparent md:via-emerald-900/20 md:to-emerald-950/80" />

            {/* Content on image */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-7">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-400 shadow-lg">
                  <Sun size={16} className="text-emerald-900 fill-emerald-900" />
                </div>
                <span className="text-xs font-bold text-amber-300 uppercase tracking-widest">
                  Limited Time Offer
                </span>
              </div>
              <h2
                id="popup-form-title"
                className="text-2xl md:text-3xl font-black text-white leading-tight"
              >
                Get Your{" "}
                <span className="text-amber-400">FREE</span>{" "}
                Solar Quote
              </h2>
              <p className="text-sm text-emerald-100 mt-1.5 leading-relaxed max-w-[240px]">
                Save up to <strong className="text-amber-400">90%</strong> on electricity bills.
                Expert consultation, zero obligation.
              </p>

              {/* Trust badges */}
              <div className="mt-4 flex flex-wrap gap-2">
                {["500+ Installations", "25yr Warranty", "Govt Subsidy"].map((badge) => (
                  <span
                    key={badge}
                    className="text-[10px] font-bold text-emerald-100 bg-white/10 border border-white/20 rounded-full px-2.5 py-1 backdrop-blur-sm"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ─── Right Panel: Form ─── */}
          <div className="relative flex-1 bg-white flex flex-col">
            {/* Close button */}
            <button
              id="popup-close-btn"
              onClick={closePopup}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-800 transition-all duration-200 z-10"
              aria-label="Close popup"
            >
              <X size={16} />
            </button>

            <div className="p-6 md:p-8 flex flex-col h-full">
              {status === "success" ? (
                /* ── Success State ── */
                <div className="flex flex-col items-center justify-center flex-1 text-center gap-4 py-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-200 flex items-center justify-center">
                    <CheckCircle2 size={32} className="text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-gray-900">Thank You! 🎉</h3>
                    <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                      Our solar expert will contact you on WhatsApp shortly.
                    </p>
                  </div>
                  <div className="bg-emerald-50 border border-emerald-100 rounded-xl px-4 py-3 text-xs text-emerald-700 font-medium">
                    Expect a call within <strong>24 hours</strong>.
                  </div>
                </div>
              ) : (
                /* ── Form State ── */
                <>
                  <div className="mb-5">
                    <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">
                      Quick Enquiry
                    </p>
                    <h3 className="text-xl font-extrabold text-gray-900 leading-snug">
                      Start Saving on Solar Today
                    </h3>
                    <p className="text-xs text-gray-400 mt-1">
                      Fill in your details — our expert will reach out via WhatsApp.
                    </p>
                  </div>

                  <form
                    id="popup-lead-form"
                    onSubmit={handleSubmit}
                    noValidate
                    className="flex flex-col gap-4 flex-1"
                  >
                    {/* Name Field */}
                    <div className="flex flex-col gap-1">
                      <label
                        htmlFor="popup-fullName"
                        className="text-xs font-bold text-gray-600 flex items-center gap-1.5"
                      >
                        <User size={12} className="text-emerald-600" />
                        Full Name
                      </label>
                      <input
                        id="popup-fullName"
                        name="fullName"
                        type="text"
                        autoComplete="name"
                        placeholder="e.g. Rahul Sharma"
                        value={form.fullName}
                        onChange={handleChange}
                        className={`w-full h-11 px-3.5 rounded-lg border text-sm text-gray-800 placeholder-gray-400 outline-none transition-all duration-200
                          focus:ring-2 focus:ring-emerald-400/40 focus:border-emerald-500
                          ${errors.fullName
                            ? "border-red-400 bg-red-50"
                            : "border-gray-200 bg-gray-50 hover:border-gray-300"
                          }
                        `}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-red-500 font-medium">{errors.fullName}</p>
                      )}
                    </div>

                    {/* WhatsApp Field */}
                    <div className="flex flex-col gap-1">
                      <label
                        htmlFor="popup-whatsappNumber"
                        className="text-xs font-bold text-gray-600 flex items-center gap-1.5"
                      >
                        <Phone size={12} className="text-emerald-600" />
                        WhatsApp Number
                      </label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-200 bg-gray-100 text-gray-500 text-sm font-semibold select-none">
                          🇮🇳 +91
                        </span>
                        <input
                          id="popup-whatsappNumber"
                          name="whatsappNumber"
                          type="tel"
                          autoComplete="tel"
                          inputMode="numeric"
                          placeholder="98765 43210"
                          value={form.whatsappNumber}
                          onChange={handleChange}
                          maxLength={10}
                          className={`flex-1 h-11 px-3.5 rounded-r-lg border text-sm text-gray-800 placeholder-gray-400 outline-none transition-all duration-200
                            focus:ring-2 focus:ring-emerald-400/40 focus:border-emerald-500
                            ${errors.whatsappNumber
                              ? "border-red-400 bg-red-50"
                              : "border-gray-200 bg-gray-50 hover:border-gray-300"
                            }
                          `}
                        />
                      </div>
                      {errors.whatsappNumber && (
                        <p className="text-[11px] text-red-500 font-medium">{errors.whatsappNumber}</p>
                      )}
                    </div>

                    {/* Pincode Field */}
                    <div className="flex flex-col gap-1">
                      <label
                        htmlFor="popup-pinCode"
                        className="text-xs font-bold text-gray-600 flex items-center gap-1.5"
                      >
                        <MapPin size={12} className="text-emerald-600" />
                        Pincode
                      </label>
                      <input
                        id="popup-pinCode"
                        name="pinCode"
                        type="text"
                        inputMode="numeric"
                        autoComplete="postal-code"
                        placeholder="e.g. 226001"
                        value={form.pinCode}
                        onChange={handleChange}
                        maxLength={6}
                        className={`w-full h-11 px-3.5 rounded-lg border text-sm text-gray-800 placeholder-gray-400 outline-none transition-all duration-200
                          focus:ring-2 focus:ring-emerald-400/40 focus:border-emerald-500
                          ${errors.pinCode
                            ? "border-red-400 bg-red-50"
                            : "border-gray-200 bg-gray-50 hover:border-gray-300"
                          }
                        `}
                      />
                      {errors.pinCode && (
                        <p className="text-[11px] text-red-500 font-medium">{errors.pinCode}</p>
                      )}
                    </div>

                    {/* Error Message */}
                    {status === "error" && (
                      <p className="text-xs text-red-500 font-medium bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                        {errorMsg}
                      </p>
                    )}

                    {/* Submit Button */}
                    <button
                      id="popup-submit-btn"
                      type="submit"
                      disabled={status === "loading"}
                      className={`mt-auto w-full h-12 rounded-xl font-extrabold text-sm text-white flex items-center justify-center gap-2
                        transition-all duration-200 shadow-md
                        ${status === "loading"
                          ? "bg-emerald-400 cursor-not-allowed"
                          : "bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] hover:shadow-lg hover:shadow-emerald-600/25"
                        }
                      `}
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Submitting…
                        </>
                      ) : (
                        <>
                          Get My Free Quote
                          <ArrowRight size={16} />
                        </>
                      )}
                    </button>

                    {/* Privacy note */}
                    <p className="text-center text-[10px] text-gray-400 leading-relaxed">
                      🔒 Your details are safe. No spam, ever.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
