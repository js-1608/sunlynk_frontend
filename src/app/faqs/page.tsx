"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HelpCircle, ChevronDown, ChevronUp, Search, Info, ShieldCheck, HelpCircle as HelpIcon, Sparkles } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
  cat: "general" | "safety" | "subsidies" | "technical";
}

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("general");

  const faqs: FAQItem[] = [
    {
      q: "What is Sunlynk?",
      a: "Sunlynk is an end-to-end solar project execution company. We design, install, and look after all the government paperwork for both residential, commercial, and housing societies, ensuring a seamless energy transition.",
      cat: "general"
    },
    {
      q: "Why solar and is it safe?",
      a: "Solar energy is a clean, renewable, and sustainable power source that reduces your grid electricity dependencies, saving you up to 90% on monthly utility bills. Yes, solar is extremely safe. We use high-quality, certified Tier-1 equipment, fire-resistant DC cabling, professional dual-earthing protection, and surge protection devices (SPDs) to ensure maximum safety.",
      cat: "safety"
    },
    {
      q: "Why choose SunLynk?",
      a: "We handle everything for you end-to-end: customized solar design engineering, precision installation, government subsidy paperwork, financing assistance, and even offer you a comprehensive 5-year free maintenance package for complete peace of mind.",
      cat: "general"
    },
    {
      q: "How does the solar subsidy scheme work in India?",
      a: "Under the PM Surya Ghar Muft Bijli Yojana, residential homeowners are eligible for significant government subsidies. For systems up to 2kW, the subsidy is ₹30,000 per kW. For 3kW, the subsidy is ₹1,08,000. For commercial and housing societies, other rules and accelerated depreciation benefits apply. SunLynk handles all the registration, documentation, and Discom inspection paperwork to ensure the subsidy is directly credited to your account.",
      cat: "subsidies"
    },
    {
      q: "What is net metering and how does it save money?",
      a: "Net metering is a billing mechanism that credits solar energy system owners for the electricity they add to the grid. When your solar panels generate more electricity than you consume, the excess power is exported back to the state electricity grid. Your utility bill is then calculated based on the 'net' energy consumed (Import minus Export).",
      cat: "technical"
    },
    {
      q: "What is the expected lifespan of solar panels?",
      a: "Standard Tier-1 monocrystalline solar modules have an operational lifespan of 25 to 30 years. Most panels come with a linear performance warranty guaranteeing at least 80% of original power output at the 25-year mark.",
      cat: "technical"
    },
    {
      q: "Do solar panels generate electricity on cloudy or rainy days?",
      a: "Yes, solar panels still generate electricity on cloudy, overcast, or rainy days, but at a reduced capacity (typically 10% to 25% of their peak output). The panels absorb daylight, not just direct sunlight, so power generation continues throughout the daytime.",
      cat: "safety"
    },
    {
      q: "How much does rooftop solar cost in Lucknow?",
      a: "The cost depends on your electricity bill, roof space, system size, panel quality, inverter, and structure requirements. SunLynk gives you a custom quote after a rooftop survey.",
      cat: "general"
    },
    {
      q: "How much subsidy can I get in Uttar Pradesh?",
      a: "Eligible residential customers can get central subsidy up to ₹78,000, and UP may offer additional state subsidy as per current rules which as in 2026 is 108,000 at the moment. SunLynk helps you check the latest applicable subsidy before installation.",
      cat: "subsidies"
    },
    {
      q: "How does SunLynk help with subsidy paperwork?",
      a: "We assist with registration, documents, application, installation records, and subsidy submission so the process stays simple for you.",
      cat: "subsidies"
    },
    {
      q: "What is the Lynk Sure generation guarantee?",
      a: "Lynk Sure is SunLynk’s generation assurance plan. We estimate your system’s expected solar output and commit to performance terms based on your rooftop design.",
      cat: "technical"
    },
    {
      q: "What happens if my system produces less than promised?",
      a: "We check monitoring data, site conditions, maintenance status, and guarantee terms. If the shortfall qualifies, compensation is handled as per the Lynk Sure plan.",
      cat: "technical"
    },
    {
      q: "Can I install solar with EMI?",
      a: "Yes. EMI and solar financing options are available for eligible customers, subject to finance partner approval.",
      cat: "subsidies"
    },
    {
      q: "How many panels do I need for a 3kW or 5kW system?",
      a: "A 3kW system usually needs around 5 to 7 panels. A 5kW system usually needs around 9 to 12 panels, depending on panel technology (bifacial/topcon), panel wattage and roof layout.",
      cat: "technical"
    },
    {
      q: "How long does installation take?",
      a: "Most home installations take 1 to 3 days after survey, design approval, documentation, and material planning. Although We offer 8 hour Quick Installation.",
      cat: "general"
    },
    {
      q: "Is net metering included?",
      a: "Yes. SunLynk assists with net-metering for eligible on-grid solar systems as per DISCOM rules. (DISCOM charges will be apart from project cost)",
      cat: "technical"
    },
    {
      q: "What warranty do I get?",
      a: "Solar panels usually come with long-term performance warranty, often up to 25 - 30 years. Inverters and other components carry separate brand warranties.",
      cat: "technical"
    },
    {
      q: "Who handles maintenance after installation?",
      a: "SunLynk provides after-sales support, performance checks, cleaning guidance, issue diagnosis, and service coordination.",
      cat: "general"
    },
    {
      q: "Can solar reduce my electricity bill to zero?",
      a: "Solar can reduce your bill significantly and may bring it close to zero if the system is sized correctly. Final savings depend on usage, generation, fixed charges, and net-metering rules.",
      cat: "subsidies"
    }
  ];

  const categories = [
    { id: "all", name: "All Questions" },
    { id: "general", name: "General" },
    { id: "safety", name: "Safety & Reliability" },
    { id: "subsidies", name: "Subsidies & Billing" },
    { id: "technical", name: "Technical Specs" },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch =
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "all" || faq.cat === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      {/* Page Header */}
      <section className="relative bg-dark text-white py-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none"
          style={{ backgroundImage: "url(/assets/images/backgrounds/page-header-bg-1-1.webp)" }}
        />
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center text-center max-w-3xl">
          <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-2 font-mono">
            Support Center
          </span>
          <h1 className="text-3xl md:text-4xl font-black">Frequently Asked Questions About Rooftop Solar</h1>
          <p className="mt-3 text-sm text-gray-400">
            Find answers to common questions about solar panel installation, safety, net metering and government subsidies.
          </p>
          <div className="mt-4 flex items-center gap-2 text-xs md:text-sm text-gray-500">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">FAQs</span>
          </div>
        </div>
      </section>

      {/* Main content section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">

          {/* Search bar row */}
          <div className="max-w-2xl mx-auto mb-12 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search solar questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-2xl py-4 pl-12 pr-4 text-sm text-slate-800 placeholder-slate-400 shadow-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left: Category Filters */}
            <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">
                Categories
              </h3>
              <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setOpenIndex(0); // Reset accordion to first item in new list
                    }}
                    className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all text-left whitespace-nowrap lg:whitespace-normal shrink-0 ${activeCategory === cat.id
                      ? "bg-primary text-white shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-800"
                      }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Accordions */}
            <div className="lg:col-span-8 flex flex-col gap-4">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, idx) => {
                  const isOpen = openIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="bg-white border border-slate-200/60 rounded-2xl shadow-sm overflow-hidden transition-all duration-300"
                    >
                      <button
                        onClick={() => toggleAccordion(idx)}
                        className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-slate-50/50 transition-colors"
                      >
                        <h4 className="font-extrabold text-slate-900 text-sm md:text-base leading-snug flex items-start gap-2.5">
                          <HelpIcon className="text-primary shrink-0 mt-0.5" size={16} />
                          {faq.q}
                        </h4>
                        {isOpen ? (
                          <ChevronUp className="text-primary shrink-0 ml-4" size={18} />
                        ) : (
                          <ChevronDown className="text-slate-400 shrink-0 ml-4" size={18} />
                        )}
                      </button>
                      <div
                        className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] border-t border-slate-100" : "max-h-0 pointer-events-none"
                          } overflow-hidden`}
                      >
                        <div className="p-6 text-sm text-slate-600 leading-relaxed text-justify">
                          {faq.a}
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="bg-white border border-slate-200/60 rounded-2xl p-12 text-center text-slate-400">
                  <Info className="mx-auto text-slate-300 mb-3" size={36} />
                  <p className="text-sm font-semibold">No questions found matching your criteria.</p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setActiveCategory("all");
                    }}
                    className="text-primary font-bold text-xs hover:underline mt-2"
                  >
                    Clear Filters
                  </button>
                </div>
              )}

              {/* Bottom Note */}
              <div className="mt-4 flex items-start gap-3 p-4 rounded-2xl bg-slate-100/80 border border-slate-200/60 text-xs text-slate-600 leading-relaxed shadow-sm">
                <Info size={16} className="text-primary shrink-0 mt-0.5" />
                <p>
                  <strong className="text-slate-800">Note:</strong> Subsidy, EMI, warranty, and guarantee benefits are subject to eligibility, government rules, finance approval, and SunLynk plan terms.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SEO Trust Features */}
      <section className="py-16 bg-white border-t border-slate-200/40">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex gap-4 items-start text-left">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm">Certified Equipment</h4>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  We use Tier-1 solar modules and smart micro-inverters complying with IEC/BIS safety certifications in India.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start text-left">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Sparkles size={20} />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm">End-to-End Handling</h4>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  From rooftop shadow modeling to structural installation and Discom liaisoning, we handle the entire process.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start text-left">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <HelpCircle size={20} />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm">5-Year Free Maintenance</h4>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  Our service support includes free module washing guidance, regular inverter performance checks, and electrical system diagnostics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
