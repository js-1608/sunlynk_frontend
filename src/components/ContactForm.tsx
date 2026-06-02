"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, HelpCircle, ArrowRight } from "lucide-react";

type Tab = "residential" | "society" | "commercial";

type ContactFormProps = {
  hideTabs?: boolean;
};

export default function ContactForm({ hideTabs = false }: ContactFormProps) {
  const [activeTab, setActiveTab] = useState<Tab>("residential");
  const [submitted, setSubmitted] = useState(false);

  // Form State: Residential
  const [resForm, setResForm] = useState({
    fullName: "",
    whatsappNumber: "",
    pinCode: "",
    monthlyBill: "",
    agreed: true,
  });

  // Form State: Housing Society
  const [socForm, setSocForm] = useState({
    fullName: "",
    societyName: "",
    whatsappNumber: "",
    pinCode: "",
    monthlyBill: "",
    agmStatus: "",
    designation: "",
    agreed: true,
  });

  // Form State: Commercial
  const [comForm, setComForm] = useState({
    fullName: "",
    companyName: "",
    city: "",
    pinCode: "",
    whatsappNumber: "",
    monthlyBill: "",
    agreed: true,
  });

  const handleResSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!resForm.monthlyBill) {
      alert("Please select your monthly electricity bill range.");
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setResForm({
        fullName: "",
        whatsappNumber: "",
        pinCode: "",
        monthlyBill: "",
        agreed: true,
      });
    }, 4000);
  };

  const handleSocSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!socForm.designation) {
      alert("Please select your designation in the society.");
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSocForm({
        fullName: "",
        societyName: "",
        whatsappNumber: "",
        pinCode: "",
        monthlyBill: "",
        agmStatus: "",
        designation: "",
        agreed: true,
      });
    }, 4000);
  };

  const handleComSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setComForm({
        fullName: "",
        companyName: "",
        city: "",
        pinCode: "",
        whatsappNumber: "",
        monthlyBill: "",
        agreed: true,
      });
    }, 4000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Tabs Container */}
      {!hideTabs && (
        <div className="bg-gray-100 p-1.5 rounded-full flex w-full max-w-lg mx-auto mb-2 shadow-inner border border-gray-200">
          <button
            type="button"
            onClick={() => {
              setActiveTab("residential");
              setSubmitted(false);
            }}
            className={`flex-1 py-2.5 px-4 rounded-full text-sm font-bold text-center transition-all duration-300 cursor-pointer ${activeTab === "residential"
              ? "bg-primary/10 text-primary border border-primary/20 shadow-sm"
              : "text-gray-500 hover:text-gray-800"
              }`}
          >
            Residential
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveTab("society");
              setSubmitted(false);
            }}
            className={`flex-1 py-2.5 px-4 rounded-full text-sm font-bold text-center transition-all duration-300 cursor-pointer ${activeTab === "society"
              ? "bg-primary/10 text-primary border border-primary/20 shadow-sm"
              : "text-gray-500 hover:text-gray-800"
              }`}
          >
            Housing Society
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveTab("commercial");
              setSubmitted(false);
            }}
            className={`flex-1 py-2.5 px-4 rounded-full text-sm font-bold text-center transition-all duration-300 cursor-pointer ${activeTab === "commercial"
              ? "bg-primary/10 text-primary border border-primary/20 shadow-sm"
              : "text-gray-500 hover:text-gray-800"
              }`}
          >
            Commercial
          </button>
        </div>
      )}

      {/* Main Form Content Card */}
      <div className="bg-[#F8FAFC] border border-gray-200/80 rounded-3xl p-6 md:p-8 shadow-xl text-left text-gray-900 relative">
        {submitted ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-16 h-16 bg-primary/10 text-primary border border-primary/20 rounded-full flex items-center justify-center mb-4 animate-bounce">
              <Check size={32} />
            </div>
            <h4 className="font-extrabold text-2xl text-dark">Consultation Booked!</h4>
            <p className="text-sm text-gray-600 mt-2 max-w-sm leading-relaxed">
              Thank you for choosing SunLynk. Our certified solar experts will contact you on WhatsApp / Phone within 24 hours.
            </p>
          </div>
        ) : (
          <>
            {/* Form Headers */}
            {activeTab === "residential" && (
              <div className="mb-6 flex flex-col gap-1.5">
                <h3 className="text-xl md:text-2xl font-black text-gray-900">
                  Book a FREE Consultation
                </h3>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-medium">
                  Get genuine advice from our solar experts. No pressure, book only if you are satisfied!
                </p>
              </div>
            )}

            {/* RESIDENTIAL FORM */}
            {activeTab === "residential" && (
              <form onSubmit={handleResSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    value={resForm.fullName}
                    onChange={(e) => setResForm({ ...resForm, fullName: e.target.value })}
                    className="bg-white border border-gray-200 rounded-xl py-3.5 px-4 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary w-full shadow-sm placeholder-gray-400 font-medium"
                  />
                </div>

                {/* WhatsApp & PIN Code Side-by-Side */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    placeholder="Whatsapp Number"
                    pattern="[0-9]{10}"
                    title="Please enter a valid 10-digit number"
                    required
                    value={resForm.whatsappNumber}
                    onChange={(e) => setResForm({ ...resForm, whatsappNumber: e.target.value })}
                    className="bg-white border border-gray-200 rounded-xl py-3.5 px-4 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary w-full shadow-sm placeholder-gray-400 font-medium"
                  />
                  <input
                    type="text"
                    placeholder="PIN Code"
                    pattern="[0-9]{6}"
                    title="Please enter a valid 6-digit pin code"
                    required
                    value={resForm.pinCode}
                    onChange={(e) => setResForm({ ...resForm, pinCode: e.target.value })}
                    className="bg-white border border-gray-200 rounded-xl py-3.5 px-4 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary w-full shadow-sm placeholder-gray-400 font-medium"
                  />
                </div>

                {/* Monthly Bill Dropdown Select */}
                <div className="flex flex-col gap-1">
                  <select
                    required
                    value={resForm.monthlyBill}
                    onChange={(e) => setResForm({ ...resForm, monthlyBill: e.target.value })}
                    className="bg-white border border-gray-200 rounded-xl py-3.5 px-4 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary w-full shadow-sm font-medium"
                  >
                    <option value="" disabled>Monthly Electricity Bill*</option>
                    <option value="Less than ₹1500">Less than ₹1,500</option>
                    <option value="₹1500 - ₹2500">₹1,500 - ₹2,500</option>
                    <option value="₹2500 - ₹4000">₹2,500 - ₹4,000</option>
                    <option value="₹4000 - ₹8000">₹4,000 - ₹8,000</option>
                    <option value="More than ₹8000">More than ₹8,000</option>
                  </select>
                </div>

                {/* Agreement */}
                <div className="flex items-start gap-2.5 mt-1">
                  <input
                    type="checkbox"
                    id="res-agreed"
                    required
                    checked={resForm.agreed}
                    onChange={(e) => setResForm({ ...resForm, agreed: e.target.checked })}
                    className=" h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded cursor-pointer"
                  />
                  <label htmlFor="res-agreed" className="text-xs text-gray-500 leading-tight font-medium cursor-pointer">
                    I agree to SunLynk Solar <Link href="/terms" className="text-primary hover:text-primary-hover underline font-semibold">Terms of use</Link> and <Link href="/privacy" className="text-primary hover:text-primary-hover underline font-semibold">Privacy Policy</Link>.
                  </label>
                </div>

                {/* Submit Action */}
                <div className="relative mt-2">
                  <span className="bg-[#FEF3C7] text-[#92400E] text-[10px] font-black uppercase tracking-wider py-1 px-3 rounded-full absolute -top-3.5 right-4 z-10 shadow-sm border border-amber-250">
                    Limited slots only!
                  </span>
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-hover text-white font-extrabold py-4 px-6 rounded-xl text-center shadow-lg transition-all hover:scale-[1.01] active:scale-95 text-sm flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <span>Book a FREE Consultation</span>
                    <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            )}

            {/* HOUSING SOCIETY FORM */}
            {activeTab === "society" && (
              <form onSubmit={handleSocSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    value={socForm.fullName}
                    onChange={(e) => setSocForm({ ...socForm, fullName: e.target.value })}
                    className="bg-white border border-gray-200 rounded-xl py-3.5 px-4 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary w-full shadow-sm placeholder-gray-400 font-medium"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <input
                    type="text"
                    placeholder="Name of the Housing Society*"
                    required
                    value={socForm.societyName}
                    onChange={(e) => setSocForm({ ...socForm, societyName: e.target.value })}
                    className="bg-white border border-gray-200 rounded-xl py-3.5 px-4 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary w-full shadow-sm placeholder-gray-400 font-medium"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    placeholder="Whatsapp Number"
                    pattern="[0-9]{10}"
                    title="Please enter a valid 10-digit number"
                    required
                    value={socForm.whatsappNumber}
                    onChange={(e) => setSocForm({ ...socForm, whatsappNumber: e.target.value })}
                    className="bg-white border border-gray-200 rounded-xl py-3.5 px-4 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary w-full shadow-sm placeholder-gray-400 font-medium"
                  />
                  <input
                    type="text"
                    placeholder="PIN Code"
                    pattern="[0-9]{6}"
                    title="Please enter a valid 6-digit pin code"
                    required
                    value={socForm.pinCode}
                    onChange={(e) => setSocForm({ ...socForm, pinCode: e.target.value })}
                    className="bg-white border border-gray-200 rounded-xl py-3.5 px-4 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary w-full shadow-sm placeholder-gray-400 font-medium"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <select
                    required
                    value={socForm.monthlyBill}
                    onChange={(e) => setSocForm({ ...socForm, monthlyBill: e.target.value })}
                    className="bg-white border border-gray-200 rounded-xl py-3.5 px-4 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary w-full shadow-sm font-medium"
                  >
                    <option value="" disabled>Monthly Electricity Bill*</option>
                    <option value="Less than ₹10k">Less than ₹10,000</option>
                    <option value="₹10k - ₹30k">₹10,000 - ₹30,000</option>
                    <option value="₹30k - ₹50k">₹30,000 - ₹50,000</option>
                    <option value="More than ₹50k">More than ₹50,000</option>
                  </select>

                  <select
                    required
                    value={socForm.agmStatus}
                    onChange={(e) => setSocForm({ ...socForm, agmStatus: e.target.value })}
                    className="bg-white border border-gray-200 rounded-xl py-3.5 px-4 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary w-full shadow-sm font-medium"
                  >
                    <option value="" disabled>AGM Approval Status*</option>
                    <option value="Approved">Approved</option>
                    <option value="Pending AGM">Pending AGM</option>
                    <option value="Not discussed yet">Not discussed yet</option>
                  </select>
                </div>

                {/* Society Designation Choice Buttons */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    What is your Designation in the Society?*
                  </label>
                  <div className="grid grid-cols-2 gap-2 mt-1">
                    {[
                      "Management committee member",
                      "Resident",
                      "Builder",
                      "Facility Manager",
                    ].map((role) => (
                      <button
                        key={role}
                        type="button"
                        onClick={() => setSocForm({ ...socForm, designation: role })}
                        className={`py-3 px-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${socForm.designation === role
                          ? "border-primary bg-primary/8 text-primary shadow-sm scale-[1.01]"
                          : "border-gray-200 bg-white text-gray-700 hover:bg-gray-1000 hover:border-gray-300"
                          }`}
                      >
                        {role}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Agreement */}
                <div className="flex items-start gap-2.5 mt-2">
                  <input
                    type="checkbox"
                    id="soc-agreed"
                    required
                    checked={socForm.agreed}
                    onChange={(e) => setSocForm({ ...socForm, agreed: e.target.checked })}
                    className="mt-1 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded cursor-pointer"
                  />
                  <label htmlFor="soc-agreed" className="text-xs text-gray-500 leading-tight font-medium cursor-pointer">
                    I agree to SunLynk Solar <Link href="/terms" className="text-primary hover:text-primary-hover underline font-semibold">Terms of use</Link> and <Link href="/privacy" className="text-primary hover:text-primary-hover underline font-semibold">Privacy Policy</Link>.
                  </label>
                </div>

                {/* Submit Action */}
                <div className="relative mt-4">
                  <span className="bg-[#FEF3C7] text-[#92400E] text-[10px] font-black uppercase tracking-wider py-1 px-3 rounded-full absolute -top-3.5 right-4 z-10 shadow-sm border border-amber-250">
                    Limited slots only!
                  </span>
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-hover text-white font-extrabold py-4 px-6 rounded-xl text-center shadow-lg transition-all hover:scale-[1.01] active:scale-95 text-sm flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <span>Get Started</span>
                    <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            )}

            {/* COMMERCIAL FORM */}
            {activeTab === "commercial" && (
              <form onSubmit={handleComSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    value={comForm.fullName}
                    onChange={(e) => setComForm({ ...comForm, fullName: e.target.value })}
                    className="bg-white border border-gray-200 rounded-xl py-3.5 px-4 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary w-full shadow-sm placeholder-gray-400 font-medium"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <input
                    type="text"
                    placeholder="Company Name*"
                    required
                    value={comForm.companyName}
                    onChange={(e) => setComForm({ ...comForm, companyName: e.target.value })}
                    className="bg-white border border-gray-200 rounded-xl py-3.5 px-4 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary w-full shadow-sm placeholder-gray-400 font-medium"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="City"
                    required
                    value={comForm.city}
                    onChange={(e) => setComForm({ ...comForm, city: e.target.value })}
                    className="bg-white border border-gray-200 rounded-xl py-3.5 px-4 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary w-full shadow-sm placeholder-gray-400 font-medium"
                  />
                  <input
                    type="text"
                    placeholder="PIN Code"
                    pattern="[0-9]{6}"
                    title="Please enter a valid 6-digit pin code"
                    required
                    value={comForm.pinCode}
                    onChange={(e) => setComForm({ ...comForm, pinCode: e.target.value })}
                    className="bg-white border border-gray-200 rounded-xl py-3.5 px-4 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary w-full shadow-sm placeholder-gray-400 font-medium"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    placeholder="Whatsapp Number"
                    pattern="[0-9]{10}"
                    title="Please enter a valid 10-digit number"
                    required
                    value={comForm.whatsappNumber}
                    onChange={(e) => setComForm({ ...comForm, whatsappNumber: e.target.value })}
                    className="bg-white border border-gray-200 rounded-xl py-3.5 px-4 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary w-full shadow-sm placeholder-gray-400 font-medium"
                  />
                  <input
                    type="text"
                    placeholder="Monthly Bill"
                    required
                    value={comForm.monthlyBill}
                    onChange={(e) => setComForm({ ...comForm, monthlyBill: e.target.value })}
                    className="bg-white border border-gray-200 rounded-xl py-3.5 px-4 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary w-full shadow-sm placeholder-gray-400 font-medium"
                  />
                </div>

                {/* Agreement */}
                <div className="flex items-start gap-2.5 mt-2">
                  <input
                    type="checkbox"
                    id="com-agreed"
                    required
                    checked={comForm.agreed}
                    onChange={(e) => setComForm({ ...comForm, agreed: e.target.checked })}
                    className="mt-1 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded cursor-pointer"
                  />
                  <label htmlFor="com-agreed" className="text-xs text-gray-500 leading-tight font-medium cursor-pointer">
                    I agree to SunLynk Solar <Link href="/terms" className="text-primary hover:text-primary-hover underline font-semibold">Terms of use</Link> and <Link href="/privacy" className="text-primary hover:text-primary-hover underline font-semibold">Privacy Policy</Link>.
                  </label>
                </div>

                {/* Submit Action */}
                <div className="relative mt-4">
                  <span className="bg-[#FEF3C7] text-[#92400E] text-[10px] font-black uppercase tracking-wider py-1 px-3 rounded-full absolute -top-3.5 right-4 z-10 shadow-sm border border-amber-250">
                    Limited slots only!
                  </span>
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-hover text-white font-extrabold py-4 px-6 rounded-xl text-center shadow-lg transition-all hover:scale-[1.01] active:scale-95 text-sm flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <span>Submit Details</span>
                    <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            )}
          </>
        )}
      </div>
    </div>
  );
}
