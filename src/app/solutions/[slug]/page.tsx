import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import solutionsData from "@/data/solutions.json";
import SolutionAccordion from "@/components/SolutionAccordion";
import { Sun, CheckCircle, Phone, Mail, ArrowRight, ShieldCheck } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return solutionsData.map((s) => ({
    slug: s.slug,
  }));
}

export default async function SolutionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const solution = solutionsData.find((s) => s.slug === slug);

  if (!solution) {
    notFound();
  }

  const sidebarHighlights = solution.highlights || [
    "Proactive & Responsive Support",
    "Universal Protocol Connectivity",
    "Real-time Data Historian Integration",
    "Highly Customizable Solutions"
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="relative bg-dark text-white py-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none"
          style={{ backgroundImage: "url(/assets/images/backgrounds/page-header-bg-1-1.webp)" }}
        ></div>
        {/* Infinite sliding text banner */}
        <div className="absolute top-0 left-0 w-full overflow-hidden bg-primary/20 py-2.5">
          <div className="whitespace-nowrap flex animate-text-scroll text-xs uppercase font-extrabold tracking-widest text-primary gap-8">
            {Array(10).fill(`* ${solution.title}`).map((text, idx) => (
              <span key={idx}>{text}</span>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 mt-6">
          <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-2">Solutions</span>
          <h1 className="text-3xl md:text-5xl font-black">{solution.title}</h1>
          <div className="mt-4 flex items-center gap-2 text-xs md:text-sm text-gray-400">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span>Solutions</span>
            <span>/</span>
            <span className="text-white">{solution.title}</span>
          </div>
        </div>
      </section>

      {/* Main Solution Details */}
      <section className="py-18 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Solution content Left (col-span-8) */}
          <div className="lg:col-span-8 flex flex-col gap-8 text-left">
            {/* Main Image */}
            <div className="relative w-full aspect-[16/9] bg-gray-1000 rounded-2xl overflow-hidden shadow-md border border-gray-100">
              <Image
                src={solution.image}
                alt={solution.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-xs uppercase tracking-wider font-bold text-primary">{solution.subtitle}</span>
              <h3 className="text-2xl font-extrabold text-dark">Description</h3>
              <p className="text-sm text-gray-600 leading-relaxed text-justify">
                {solution.description}
              </p>
            </div>

            {/* Real Benefits */}
            <div className="flex flex-col gap-4">
              <h4 className="text-xl font-bold text-dark">Real Benefits</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {solution.benefits.map((b, idx) => (
                  <div
                    key={idx}
                    className="flex gap-3 items-start p-4 bg-gray-1000 border border-gray-100 rounded-xl hover:shadow-sm transition-all"
                  >
                    <CheckCircle className="text-primary shrink-0 mt-0.5" size={18} />
                    <span className="text-sm text-gray-700 leading-relaxed font-semibold">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Details / Additional Images */}
            {solution.architectureImage && (
              <div className="flex flex-col gap-4 mt-4">
                <h4 className="text-xl font-bold text-dark">System Architecture</h4>
                <div className="relative w-full aspect-[16/10] bg-gray-1000 rounded-2xl overflow-hidden border border-gray-100 shadow p-4">
                  <Image
                    src={solution.architectureImage}
                    alt="System Architecture diagram"
                    fill
                    className="object-contain p-4"
                  />
                </div>
              </div>
            )}

            {/* Accordions for detailed breakdown (e.g. Asset Monitoring, Operations) */}
            {solution.accordions && (
              <div className="flex flex-col gap-4 mt-6">
                <h4 className="text-xl font-bold text-dark">Solution Capabilities</h4>
                <SolutionAccordion accordions={solution.accordions} />
              </div>
            )}
          </div>

          {/* Sidebar Right (col-span-4) */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            {/* SunLynk Advantage list */}
            <div className="bg-gray-1000 border border-gray-100 rounded-2xl p-6 shadow-sm">
              <h4 className="font-bold text-gray-800 text-lg mb-4 border-b border-gray-200 pb-2 uppercase tracking-wider text-xs">
                SunLynk Advantage
              </h4>
              <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                SunLynk Solar revolves around the specific customized needs of every client.
              </p>
              <ul className="flex flex-col gap-3">
                {sidebarHighlights.map((hl, idx) => (
                  <li key={idx} className="flex gap-2 items-start text-xs text-gray-700 font-semibold">
                    <ShieldCheck className="text-primary shrink-0 mt-0.5" size={16} />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Inquiry CTA card */}
            <div className="bg-gray-900 text-white rounded-2xl p-6 shadow-sm border border-gray-800 flex flex-col gap-4">
              <h4 className="font-bold text-lg">Request Integration Layout</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Need a comprehensive turnkey design solution or calibration service quotation for your renewable array?
              </p>
              <Link
                href="/contact"
                className="w-full bg-primary hover:bg-primary-hover text-white text-sm font-bold py-3 rounded-md transition-colors flex items-center justify-center gap-2"
              >
                <span>Request Quotation</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Sidebar quick support */}
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 flex flex-col gap-4">
              <h4 className="font-bold text-gray-800 text-lg">Inquire via Phone</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Get immediate technical support regarding IEC 61724 WMS standards or Active power control central inverters.
              </p>
              <div className="flex flex-col gap-2">
                <a href="tel:+919711882204" className="flex items-center gap-2 text-sm font-bold text-dark hover:text-primary transition-colors">
                  <Phone size={16} className="text-primary" />
                  <span>+91 8922036792</span>
                </a>
                <a href="mailto:info@SunLynkSolar.com" className="flex items-center gap-2 text-sm font-bold text-dark hover:text-primary transition-colors">
                  <Mail size={16} className="text-primary" />
                  <span>info@SunLynkSolar.com</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
