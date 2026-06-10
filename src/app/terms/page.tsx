"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FileText, Shield, Bell, Coins, Truck, ArrowRight, CheckCircle2 } from "lucide-react";

export default function TermsOfUse() {
  const [activeSection, setActiveSection] = useState("registration");

  const sections = [
    { id: "registration", title: "1. Registration & Consent", icon: Bell },
    { id: "refund", title: "2. Refund Policy", icon: Coins },
    { id: "shipping", title: "3. Project & Shipping Timelines", icon: Truck },
    { id: "general", title: "4. General Site Usage", icon: Shield },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      {/* Page Header */}
      <section className="relative bg-dark text-white py-16 overflow-hidden">
        {/* Subtle grid pattern background */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none"
          style={{ backgroundImage: "url(/assets/images/backgrounds/page-header-bg-1-1.webp)" }}
        />
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-2 font-mono">
            Compliance & Guidelines
          </span>
          <h1 className="text-3xl md:text-5xl font-black">Terms of Use</h1>
          <div className="mt-4 flex items-center gap-2 text-xs md:text-sm text-gray-400">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Terms of Use</span>
          </div>
        </div>
      </section>

      {/* Main Document Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Sidebar Navigation */}
            <div className="lg:col-span-4 sticky top-28 hidden lg:block bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">
                Table of Contents
              </h3>
              <nav className="flex flex-col gap-2">
                {sections.map((sec) => {
                  const Icon = sec.icon;
                  const isActive = activeSection === sec.id;
                  return (
                    <button
                      key={sec.id}
                      onClick={() => scrollToSection(sec.id)}
                      className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-xl transition-all font-semibold text-sm ${
                        isActive
                          ? "bg-primary/10 text-primary border-l-4 border-primary"
                          : "text-slate-600 hover:bg-slate-100/60 hover:text-slate-800"
                      }`}
                    >
                      <Icon size={16} />
                      {sec.title}
                    </button>
                  );
                })}
              </nav>

              <div className="mt-8 pt-6 border-t border-slate-150">
                <p className="text-xs text-slate-400 leading-relaxed">
                  Last updated: June 10, 2026. For questions regarding these terms, please contact our support desk at{" "}
                  <a href="mailto:info@sunlynksolar.com" className="text-primary font-bold hover:underline">
                    info@sunlynksolar.com
                  </a>.
                </p>
              </div>
            </div>

            {/* Right Column: Legal Text */}
            <div className="lg:col-span-8 bg-white p-8 md:p-12 rounded-3xl border border-slate-200/60 shadow-sm flex flex-col gap-12">
              
              {/* Introduction Intro Card */}
              <div className="bg-slate-50 border border-slate-200/50 rounded-2xl p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <FileText size={20} />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-800 text-sm mb-1">Important Notice</h4>
                  <p className="text-xs text-slate-500 leading-relaxed text-justify">
                    Please read these Terms of Use carefully. By accessing or using the website and registering for our services, you signify that you have read, understood, and agree to be bound by these terms. If you do not agree, please discontinue using this site.
                  </p>
                </div>
              </div>

              {/* Section 1 */}
              <div id="registration" className="scroll-mt-28">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1.5 h-6 bg-primary rounded-full" />
                  <h2 className="text-xl md:text-2xl font-black text-slate-900">1. Registration & Communication Consent</h2>
                </div>
                <div className="text-sm text-slate-600 leading-relaxed text-justify space-y-4">
                  <p>
                    By registering yourself with us, you explicitly authorize and consent to allow us, **SunLynk Solar Energy Private Limited** (including our subsidiaries, affiliates, and representatives), to contact you via email, telephone calls, WhatsApp messages, or SMS for the purpose of offering our services, imparting product knowledge, and sharing promotional schemes active on our website.
                  </p>
                  
                  {/* Highlighted Compliance Notice */}
                  <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-5 my-4">
                    <p className="text-xs font-bold text-emerald-800 flex items-start gap-2 leading-relaxed">
                      <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                      <span>
                        <strong>DND / DNC / NCPR Waiver:</strong> This authorization is valid and binding irrespective of the fact that your mobile number may be registered under the Do Not Disturb (DND), Do Not Call (DNC), or National Customer Preference Register (NCPR) services. By registering, you confirm that you waive your DND preference in favor of SunLynk Solar for the above-mentioned service communication purposes.
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 2 */}
              <div id="refund" className="scroll-mt-28">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1.5 h-6 bg-primary rounded-full" />
                  <h2 className="text-xl md:text-2xl font-black text-slate-900">2. Refund Policy</h2>
                </div>
                <div className="text-sm text-slate-600 leading-relaxed text-justify space-y-4">
                  <p>
                    We maintain structured commercial guidelines regarding order booking and technical consultations. The advance booking payment paid during the registration or order placement is non-refundable under normal conditions, subject to the conditions laid down in our cancellation guidelines.
                  </p>
                  
                  <div className="bg-amber-50/50 border border-amber-200/40 rounded-xl p-5">
                    <p className="text-xs font-semibold text-slate-700 leading-relaxed">
                      <strong className="text-amber-700 uppercase tracking-wider block mb-1">Standard Clause:</strong>
                      The advance payment is non-refundable under any circumstances unless an explicit cancellation request is raised and approved within the allowed compliance timeline prior to technical site engineering visits.
                    </p>
                  </div>

                  <p className="text-xs text-slate-400 mt-2">
                    For detailed parameters regarding cancellation refunds, processing charges, and stage-wise eligibility, please refer to our official{" "}
                    <Link href="/cancellation-refund" className="text-primary font-bold hover:underline">
                      Cancellation & Refund Policy
                    </Link>.
                  </p>
                </div>
              </div>

              {/* Section 3 */}
              <div id="shipping" className="scroll-mt-28">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1.5 h-6 bg-primary rounded-full" />
                  <h2 className="text-xl md:text-2xl font-black text-slate-900">3. Project Timelines & Shipping Policy</h2>
                </div>
                <div className="text-sm text-slate-600 leading-relaxed text-justify space-y-4">
                  <p>
                    All solar engineering, procurement, and construction (EPC) orders are processed as per customized layouts and technical feasibility clearance.
                  </p>
                  <p>
                    The project timeline ranges from **45 to 90 days** from the date of final layout approval and order validation. We work with standard authorized manufacturers and certified engineering crews, planning projects with no dependencies that could cause operational delays.
                  </p>
                  <p>
                    However, in the event of unforeseen delay factors (such as government approvals, grid connectivity delays from Discoms, extreme weather conditions, or force majeure events), the timeline may be extended. SunLynk Solar will promptly notify customers of any such extensions along with updated delivery dates.
                  </p>
                </div>
              </div>

              {/* Section 4 */}
              <div id="general" className="scroll-mt-28">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1.5 h-6 bg-primary rounded-full" />
                  <h2 className="text-xl md:text-2xl font-black text-slate-900">4. General Site Usage Guidelines</h2>
                </div>
                <div className="text-sm text-slate-600 leading-relaxed text-justify space-y-4">
                  <p>
                    By using this website, you agree not to engage in any action that restricts or inhibits other users from enjoying or utilizing the website. You agree to use the site only for lawful purposes.
                  </p>
                  <p>
                    All content, layouts, design tokens, calculators, text schemas, graphics, images, logos, and software used on this site are the intellectual property of **SunLynk Solar Energy Private Limited** and are protected under copyright and intellectual property laws.
                  </p>
                </div>
              </div>

              {/* Back to top helper for mobile */}
              <div className="lg:hidden mt-4 pt-4 border-t border-slate-100 flex justify-between text-xs text-slate-400">
                <span>Last updated: June 10, 2026</span>
                <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-primary font-bold">
                  Back to Top
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
