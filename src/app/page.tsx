import React from "react";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqAccordion from "@/components/FaqAccordion";
import StatsCounter from "@/components/StatsCounter";
import productsData from "@/data/products.json";
import { 
  Sun, 
  Wind, 
  BatteryCharging, 
  Trophy, 
  Globe, 
  Activity, 
  ArrowRight
} from "lucide-react";

export default function Home() {
  const faqs = [
    {
      id: 0,
      question: "How do solar panels work?",
      answer: "Solar panels work by absorbing sunlight with photovoltaic cells, generating direct current (DC) energy, and then converting it into usable alternating current (AC) energy with the help of inverter technology."
    },
    {
      id: 1,
      question: "What are the main types of solar energy systems?",
      answer: "There are three main types: Grid-tied systems (connected to the utility grid), Off-grid systems (independent systems with battery storage), and Hybrid systems (connected to the grid but equipped with battery storage for backup)."
    },
    {
      id: 2,
      question: "What are the advantages of solar energy?",
      answer: "Solar energy is a clean, renewable, and abundant source of power. It reduces electricity bills, has low maintenance costs, helps mitigate carbon emissions, and supports energy independence."
    },
    {
      id: 3,
      question: "How much space do I need for solar panels?",
      answer: "Space requirements depend on the solar panel efficiency and your energy needs. Typically, residential installations require 100 to 400 square feet of roof area, while commercial systems scale much larger."
    }
  ];

  // We will display the first 4 products on the home page
  const featuredProducts = productsData.slice(0, 4);

  const clientLogos = [
    "/assets/IMAGE/client/image25.avif",
    "/assets/IMAGE/client/image26.avif",
    "/assets/IMAGE/client/image27.avif",
    "/assets/IMAGE/client/image28.avif",
    "/assets/IMAGE/client/image29.avif",
    "/assets/IMAGE/client/image30.avif",
    "/assets/IMAGE/client/image31.avif",
    "/assets/IMAGE/client/image32.avif",
  ];

  const projectCases = [
    { src: "/assets/IMAGE/project/p (1).avif", title: "Utility Scale PV Project" },
    { src: "/assets/IMAGE/project/p (2).avif", title: "Industrial Rooftop Installation" },
    { src: "/assets/IMAGE/project/p (3).avif", title: "Commercial Smart Grid SCADA" },
    { src: "/assets/IMAGE/project/p (4).avif", title: "Residential BESS Solution" },
    { src: "/assets/IMAGE/project/p (5).avif", title: "Solar Microgrid Storage" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Experience Badge & Image */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-[500px] aspect-square rounded-2xl overflow-hidden border border-gray-100 shadow-xl">
              <Image 
                src="/assets/IMAGE/solar.jpg" 
                alt="SunLynkSolar Panels" 
                fill 
                className="object-cover"
              />
            </div>
            
            {/* Experience Box */}
            <div className="absolute -bottom-6 -left-4 bg-primary text-white p-6 rounded-2xl shadow-xl flex items-center gap-4 max-w-[240px]">
              <span className="text-5xl font-black">10+</span>
              <span className="text-sm font-semibold leading-tight uppercase tracking-wider">
                Years of Solar Experience
              </span>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="flex flex-col gap-5">
            <div className="inline-flex items-center gap-2">
              <Sun className="text-primary" size={20} />
              <span className="text-xs uppercase tracking-wider font-bold text-primary">About Us</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark leading-tight">
              SunLynk Solar – Innovating Renewable Energy with Smart Solutions
            </h2>
            
            <p className="text-base text-gray-700 font-semibold leading-relaxed">
              We are a leading solar PV product distributor and solar product specialists for residential & commercial headquartered in New Delhi, India.
            </p>
            
            <p className="text-sm text-gray-600 leading-relaxed">
              SunLynk Solar is a leading provider of weather stations, solar forecasting, SCADA, and energy storage solutions (ESS) for the renewable energy sector. With a commitment to innovation, precision, and sustainability, we empower solar and wind energy projects with advanced monitoring, control, and automation technologies.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Our solutions enhance efficiency, optimize performance, and enable seamless grid integration, ensuring reliable, data-driven energy management. Backed by deep industry expertise and a forward-thinking approach, SunLynk Solar is shaping the future of smart renewable energy solutions.
            </p>

            <Link href="/about" className="btn-primary self-start mt-2">
              <span>More About Us</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Solar Bar Quick Services */}
      <section className="py-8 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
              <Wind size={28} />
            </div>
            <div>
              <h4 className="font-bold text-gray-800 text-lg">Weather Stations</h4>
              <p className="text-xs text-gray-500 mt-1">High fidelity Class-A meteorological setups</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
              <Sun size={28} />
            </div>
            <div>
              <h4 className="font-bold text-gray-800 text-lg">Solar SCADA & Forecast</h4>
              <p className="text-xs text-gray-500 mt-1">Universal connectivity and scheduling models</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
              <BatteryCharging size={28} />
            </div>
            <div>
              <h4 className="font-bold text-gray-800 text-lg">Inverters & BESS</h4>
              <p className="text-xs text-gray-500 mt-1">Grid-connected conversion and battery storage</p>
            </div>
          </div>

        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto ">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col items-center gap-4">
            <div className="inline-flex items-center gap-2">
              <span className="h-[2px] w-6 bg-primary"></span>
              <span className="text-xs uppercase tracking-wider font-bold text-primary">Services</span>
              <span className="h-[2px] w-6 bg-primary"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark">
              Powering Your Future with Our Services
            </h2>
            <p className="text-sm sm:text-base text-gray-500 max-w-2xl leading-relaxed mt-2">
              We provide end-to-end solar energy solutions designed to maximize efficiency, reduce costs, and support your transition to renewable energy.
            </p>
          </div>

          {/* 4-Quadrant Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto overflow-hidden  bg-white">
            
            {/* Quadrant 1: Residential Solar */}
            <div className="border-b md:border-r md:border-b border-gray-400 p-8 sm:p-12 hover:bg-slate-50/50 transition-all duration-300 group flex flex-col gap-6">
              <div className="text-gray-800 group-hover:text-primary transition-colors duration-300 shrink-0">
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <rect x="13" y="3" width="7" height="7" rx="1.5" />
                  <rect x="4" y="13" width="7" height="7" rx="1.5" />
                  <rect x="13" y="13" width="7" height="7" rx="1.5" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                  Residential Solar
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
                  Smart solar systems tailored for homeowners to reduce electricity bills and increase property value with clean energy.
                </p>
              </div>
            </div>

            {/* Quadrant 2: Commercial & Industrial */}
            <div className="border-b border-gray-400 p-8 sm:p-12 hover:bg-slate-50/50 transition-all duration-300 group flex flex-col gap-6">
              <div className="text-gray-800 group-hover:text-primary transition-colors duration-300 shrink-0">
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="4" width="7" height="16" rx="1.5" />
                  <rect x="13" y="4" width="7" height="7" rx="1.5" />
                  <rect x="13" y="13" width="7" height="7" rx="1.5" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                  Commercial & Industrial
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
                  High-performance solar installations built for businesses and industries seeking energy independence and operational savings.
                </p>
              </div>
            </div>

            {/* Quadrant 3: Solar Panel Installation */}
            <div className="border-b md:border-b-0 md:border-r border-gray-400 p-8 sm:p-12 hover:bg-slate-50/50 transition-all duration-300 group flex flex-col gap-6">
              <div className="text-gray-800 group-hover:text-primary transition-colors duration-300 shrink-0">
                <svg className="w-10 h-10" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <text x="0" y="8" className="text-[8px] font-black fill-current" fontFamily="Inter, sans-serif">01</text>
                  <line x1="0" y1="11" x2="16" y2="11" stroke="currentColor" strokeWidth="2.5" />
                  <text x="0" y="20" className="text-[8px] font-black fill-current" fontFamily="Inter, sans-serif">10</text>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                  Solar Panel Installation
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
                  Professional installation services ensuring optimal system performance, safety, and long-term reliability.
                </p>
              </div>
            </div>

            {/* Quadrant 4: Scalable Solutions */}
            <div className="p-8 sm:p-12 hover:bg-slate-50/50 transition-all duration-300 group flex flex-col gap-6">
              <div className="text-gray-800 group-hover:text-primary transition-colors duration-300 shrink-0">
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 3H3v6M3 3l6 6" />
                  <path d="M15 3h6v6M21 3l-6 6" />
                  <path d="M9 21H3v-6M3 21l6-6" />
                  <path d="M15 21h6v-6M21 21l-6-6" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                  Scalable Solutions
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
                  Flexible solar systems designed to grow with your energy needs and adapt to future expansion.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Products Grid Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center gap-3">
            <div className="inline-flex items-center gap-2">
              <span className="h-[2px] w-6 bg-primary"></span>
              <span className="text-xs uppercase tracking-wider font-bold text-primary">Our Products</span>
              <span className="h-[2px] w-6 bg-primary"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark">
              A System You Can Count On
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              We distribute the most bankable technology & products for the success of your solar business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((prod) => (
              <div 
                key={prod.id} 
                className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full group"
              >
                {/* Image */}
                <div className="relative w-full aspect-[4/3] bg-gray-50 overflow-hidden">
                  <Image 
                    src={prod.image} 
                    alt={prod.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-primary text-white text-[10px] uppercase font-bold py-1 px-2.5 rounded-full">
                    {prod.categoryName}
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <h4 className="font-bold text-gray-800 text-base mb-2 group-hover:text-primary transition-colors">
                      {prod.title}
                    </h4>
                    <p className="text-xs text-gray-500 line-clamp-3">
                      {prod.features[0]}
                    </p>
                  </div>
                  <div className="border-t border-gray-100 pt-4 mt-4 flex justify-between items-center">
                    <span className="text-xs font-bold text-primary">{prod.powerRange}</span>
                    <Link 
                      href={`/products/${prod.slug}`} 
                      className="text-xs font-bold text-dark hover:text-primary transition-colors flex items-center gap-1"
                    >
                      <span>View Details</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Link href="/products/n-type-bifacial-double-glass" className="btn-secondary">
              <span>View All Products</span>
            </Link>
          </div>
        </div>
      </section>

      {/* We Handle Everything Section */}
      <section className="py-24 bg-gray-50 border-y border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Text Content and Process Timeline */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <div className="inline-flex items-center gap-2">
                <span className="h-[2px] w-6 bg-primary"></span>
                <span className="text-xs uppercase tracking-wider font-bold text-primary">Your Journey</span>
                <span className="h-[2px] w-6 bg-primary"></span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-dark">
                We Handle Everything. <br className="hidden sm:inline" />
                <span className="text-primary font-black">You Just Save.</span>
              </h2>
            </div>
            
            {/* Timeline wrapper */}
            <div className="relative pl-12  space-y-10 py-2">
              
              {/* Timeline Connector Line Glow */}
              {/* <div className="absolute left-[-1.5px] top-4 bottom-4 w-[3px] bg-gradient-to-b from-primary via-primary/50 to-primary/10 pointer-events-none" /> */}

              {/* Item 1 */}
              <div className="relative group">
                {/* Custom Concentric Rings Bullet */}
                <div className="absolute left-[-60px] top-0 w-9 h-9 rounded-full border border-primary/20 bg-white flex items-center justify-center shadow-sm group-hover:border-primary transition-all duration-300">
                  <div className="w-6.5 h-6.5 rounded-full border border-primary/40 flex items-center justify-center group-hover:border-primary/80 transition-all duration-300">
                    <div className="w-2.5 h-2.5 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300 animate-pulse" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg sm:text-xl mb-1 group-hover:text-primary transition-colors duration-300">
                    Free Home Visit & Rooftop Survey
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify max-w-2xl">
                    Our team measures your rooftop to design a solar system for maximum generation.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="relative group">
                <div className="absolute left-[-60px] top-0 w-9 h-9 rounded-full border border-primary/20 bg-white flex items-center justify-center shadow-sm group-hover:border-primary transition-all duration-300">
                  <div className="w-6.5 h-6.5 rounded-full border border-primary/40 flex items-center justify-center group-hover:border-primary/80 transition-all duration-300">
                    <div className="w-2.5 h-2.5 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg sm:text-xl mb-1 group-hover:text-primary transition-colors duration-300">
                    Free 3D Solar Design
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify max-w-2xl">
                    We share a personalised 3D rooftop solar design, so you can clearly see how it will look on your home.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="relative group">
                <div className="absolute left-[-60px] top-0 w-9 h-9 rounded-full border border-primary/20 bg-white flex items-center justify-center shadow-sm group-hover:border-primary transition-all duration-300">
                  <div className="w-6.5 h-6.5 rounded-full border border-primary/40 flex items-center justify-center group-hover:border-primary/80 transition-all duration-300">
                    <div className="w-2.5 h-2.5 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg sm:text-xl mb-1 group-hover:text-primary transition-colors duration-300">
                    Hassle-Free Installation & Subsidy Support
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify max-w-2xl">
                    Our experts install your solar system and handle all paperwork, including the subsidy—no follow-ups needed.
                  </p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="relative group">
                <div className="absolute left-[-60px] top-0 w-9 h-9 rounded-full border border-primary/20 bg-white flex items-center justify-center shadow-sm group-hover:border-primary transition-all duration-300">
                  <div className="w-6.5 h-6.5 rounded-full border border-primary/40 flex items-center justify-center group-hover:border-primary/80 transition-all duration-300">
                    <div className="w-2.5 h-2.5 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg sm:text-xl mb-1 group-hover:text-primary transition-colors duration-300">
                    Solar On. You Save. We Maintain.
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify max-w-2xl">
                    Your system starts saving from day one, while we handle maintenance for smooth performance year after year.
                  </p>
                </div>
              </div>

            </div>
          </div>
          
          {/* Right Column: Visual Image with floating badges */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[480px] aspect-[4/5] rounded-3xl overflow-hidden border border-gray-100 shadow-2xl group">
              <Image 
                src="/assets/images/solar_consultation.png" 
                alt="SunLynk Solar Process Consultation" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Dynamic Overlay glow */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/10 to-transparent opacity-60 group-hover:opacity-75 transition-opacity duration-300" /> */}
            </div>           
          </div>

        </div>
      </section>

      {/* Stats Counter Section */}
      <StatsCounter />

      {/* Work Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center gap-3">
            <div className="inline-flex items-center gap-2">
              <span className="h-[2px] w-6 bg-primary"></span>
              <span className="text-xs uppercase tracking-wider font-bold text-primary">Work Process</span>
              <span className="h-[2px] w-6 bg-primary"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark">
              How We Execute Our Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm relative group flex flex-col gap-4">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                1
              </div>
              <h4 className="text-lg font-bold text-gray-800">Getting Started</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Initial capacity planning, technical requirement evaluation, and site mapping to match optimal weather station or SCADA architectures.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm relative group flex flex-col gap-4">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                2
              </div>
              <h4 className="text-lg font-bold text-gray-800">System Installation</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Seamless calibration, heavy-duty mechanical mounting, wiring, and sensor configuration handled by certified SunLynkengineers.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm relative group flex flex-col gap-4">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                3
              </div>
              <h4 className="text-lg font-bold text-gray-800">Ready to Use</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Universal Modbus RTU/TCP data normalization, local HMI testing, and cloud dashboard activation for real-time tracking.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-gray-100 shadow-md">
              <Image 
                src="/assets/IMAGE/solar.jpg" 
                alt="Faq Intro" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-4 justify-between">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-gray-100 shadow-md">
                <Image 
                  src="/assets/IMAGE/forecasting.jpg" 
                  alt="Faq Detail" 
                  fill 
                  className="object-cover"
                />
              </div>
              {/* Play Video Trigger */}
              <div className="bg-primary/5 border border-primary/20 p-6 rounded-xl flex flex-col justify-center items-center text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mb-3">
                  <Sun size={20} />
                </div>
                <h5 className="font-bold text-gray-800 text-sm">Watch Our Intro</h5>
                <p className="text-xs text-gray-500 mt-1">Solar PV & SCADA Solutions Overview</p>
              </div>
            </div>
          </div>

          {/* Right Side: Accordion */}
          <div>
            <div className="flex flex-col gap-4 mb-8">
              <div className="inline-flex items-center gap-2">
                <Sun className="text-primary" size={20} />
                <span className="text-xs uppercase tracking-wider font-bold text-primary">Questions For Us</span>
              </div>
              <h3 className="text-3xl font-extrabold text-dark leading-tight">Some FAQ Questions</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Learn more about solar modules, meteorological data loggers, SCADA platforms, and storage integration technologies.
              </p>
            </div>

            {/* Accordion container */}
            <FaqAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center gap-3">
            <div className="inline-flex items-center gap-2">
              <span className="h-[2px] w-6 bg-primary"></span>
              <span className="text-xs uppercase tracking-wider font-bold text-primary">News & Articles</span>
              <span className="h-[2px] w-6 bg-primary"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark leading-tight">
              Latest Insights & Solar Trends
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              Stay updated with the latest technological breakthroughs, project case studies, and policy news in the solar industry.
            </p>
          </div>

          {/* Blogs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Blog Post 1 */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden flex flex-col hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 group">
              {/* Image wrapper with scale hover */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
                <Image 
                  src="/assets/images/blog_bifacial_panels.png" 
                  alt="Bifacial Solar Technology" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-[10px] uppercase font-bold py-1 px-3 rounded-full tracking-wider shadow-sm">
                  Technology
                </div>
              </div>
              {/* Blog body */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <span className="text-xs font-semibold text-gray-400 block mb-2">May 12, 2026 • 5 min read</span>
                  <h4 className="font-bold text-gray-800 text-lg mb-3 group-hover:text-primary transition-colors duration-300">
                    Understanding Bifacial Solar Panel Technology & Albedo Effect
                  </h4>
                  <p className="text-sm text-gray-500 leading-relaxed text-justify line-clamp-3 mb-6">
                    Bifacial solar modules can generate power from both sides, increasing output by up to 30%. Learn how the albedo effect and ground reflectivity optimize double-glass performance.
                  </p>
                </div>
                <div className="border-t border-gray-50 pt-4 mt-auto">
                  <Link 
                    href="/blog" 
                    className="text-xs font-bold text-dark hover:text-primary transition-colors flex items-center gap-1.5"
                  >
                    <span>Read Article</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden flex flex-col hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 group">
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
                <Image 
                  src="/assets/images/blog_weather_station.png" 
                  alt="Class-A Weather Monitoring" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-[10px] uppercase font-bold py-1 px-3 rounded-full tracking-wider shadow-sm">
                  Engineering
                </div>
              </div>
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <span className="text-xs font-semibold text-gray-400 block mb-2">Apr 28, 2026 • 6 min read</span>
                  <h4 className="font-bold text-gray-800 text-lg mb-3 group-hover:text-primary transition-colors duration-300">
                    Why Class-A Weather Monitoring is Essential for Utility PV
                  </h4>
                  <p className="text-sm text-gray-500 leading-relaxed text-justify line-clamp-3 mb-6">
                    Precise meteorological data is key to calculating performance ratio (PR). Discover why Class-A pyranometers and weather monitoring stations are required by grid operators.
                  </p>
                </div>
                <div className="border-t border-gray-50 pt-4 mt-auto">
                  <Link 
                    href="/blog" 
                    className="text-xs font-bold text-dark hover:text-primary transition-colors flex items-center gap-1.5"
                  >
                    <span>Read Article</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden flex flex-col hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 group">
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
                <Image 
                  src="/assets/images/blog_battery_storage.png" 
                  alt="Battery Storage Integration" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-[10px] uppercase font-bold py-1 px-3 rounded-full tracking-wider shadow-sm">
                  Solutions
                </div>
              </div>
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <span className="text-xs font-semibold text-gray-400 block mb-2">Apr 15, 2026 • 7 min read</span>
                  <h4 className="font-bold text-gray-800 text-lg mb-3 group-hover:text-primary transition-colors duration-300">
                    Integrating Battery Storage (BESS) with SCADA for Grid Stability
                  </h4>
                  <p className="text-sm text-gray-500 leading-relaxed text-justify line-clamp-3 mb-6">
                    Hybrid solar systems combining battery energy storage require intelligent SCADA dispatch algorithms. We analyze how Modbus control loops maintain zero-export grid compliance.
                  </p>
                </div>
                <div className="border-t border-gray-50 pt-4 mt-auto">
                  <Link 
                    href="/blog" 
                    className="text-xs font-bold text-dark hover:text-primary transition-colors flex items-center gap-1.5"
                  >
                    <span>Read Article</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

          </div>

          {/* View All Blogs CTA */}
          <div className="flex justify-center mt-12">
            <Link href="/blog" className="btn-secondary">
              <span>View All News & Blog</span>
            </Link>
          </div>

        </div>
      </section>

      {/* Project Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center gap-3">
            <div className="inline-flex items-center gap-2">
              <span className="h-[2px] w-6 bg-primary"></span>
              <span className="text-xs uppercase tracking-wider font-bold text-primary">We Created</span>
              <span className="h-[2px] w-6 bg-primary"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark">
              Project Case Studies
            </h2>
          </div>

          {/* Grid Layout for Project Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {projectCases.map((proj, idx) => (
              <div 
                key={idx} 
                className="relative rounded-xl overflow-hidden aspect-[3/4] shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group cursor-pointer"
              >
                <Image 
                  src={proj.src} 
                  alt={proj.title} 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[10px] text-primary uppercase font-bold tracking-wider mb-1">Solar Energy</span>
                  <h4 className="text-sm font-bold text-white leading-snug">{proj.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Review Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          {/* Header Area */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16 border-b border-gray-100 pb-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="h-[2px] w-6 bg-primary"></span>
                <span className="text-xs uppercase tracking-wider font-bold text-primary">Reviews</span>
                <span className="h-[2px] w-6 bg-primary"></span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-dark leading-tight tracking-tight">
                Google Reviews & Customer Feedback
              </h2>
              <p className="text-sm sm:text-base text-gray-500 mt-2">
                Discover what our partners, clients, and homeowners say about our engineering standards, premium modules, and solar subsidy support.
              </p>
            </div>

            {/* Google Aggregate Box */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex items-center gap-5 shadow-sm hover:shadow-md transition-shadow duration-300">
              {/* Google G Logo inside clean rounded box */}
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-2xl font-black text-gray-800">4.9</span>
                  <div className="flex text-[#fca311]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-xs text-gray-500 font-bold mt-1 uppercase tracking-wide">
                  142 Reviews on Google
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 flex flex-col justify-between group">
              <div>
                {/* Rating Stars & Google badge */}
                <div className="flex justify-between items-center mb-4">
                  <div className="flex text-[#fca311]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                  {/* Google G logo tiny */}
                  <svg className="w-4 h-4 opacity-50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                  </svg>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 text-justify">
                  &quot;Excellent experience with SunLynk Solar. The weather monitoring SCADA system they set up for our commercial PV rooftop has been flawless. Customer support is very prompt and technical expert advice was valuable.&quot;
                </p>
              </div>
              
              {/* User details */}
              <div className="flex items-center gap-3 border-t border-gray-50 pt-4">
                <div className="w-10 h-10 bg-primary/10 text-primary font-bold rounded-full flex items-center justify-center shrink-0">
                  RS
                </div>
                <div>
                  <span className="block text-sm font-bold text-gray-800">Rajesh Sharma</span>
                  <span className="block text-[10px] text-gray-400">1 month ago • Verified Partner</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex text-[#fca311]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                  <svg className="w-4 h-4 opacity-50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                  </svg>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 text-justify">
                  &quot;Best solar product distributor in Delhi! They offered highly competitive pricing for bifacial N-type double glass modules. Fast delivery, perfect condition, and seamless Modbus connectivity guidelines.&quot;
                </p>
              </div>
              
              {/* User details */}
              <div className="flex items-center gap-3 border-t border-gray-50 pt-4">
                <div className="w-10 h-10 bg-secondary/10 text-secondary font-bold rounded-full flex items-center justify-center shrink-0">
                  AP
                </div>
                <div>
                  <span className="block text-sm font-bold text-gray-800">Amit Patel</span>
                  <span className="block text-[10px] text-gray-400">2 weeks ago • Verified Buyer</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex text-[#fca311]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                  <svg className="w-4 h-4 opacity-50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                  </svg>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 text-justify">
                  &quot;Superb installation and paperwork support for solar subsidy. Highly professional team, they handled all the government approvals without me having to follow up even once. Excellent solar energy generation!&quot;
                </p>
              </div>
              
              {/* User details */}
              <div className="flex items-center gap-3 border-t border-gray-50 pt-4">
                <div className="w-10 h-10 bg-dark text-white font-bold rounded-full flex items-center justify-center shrink-0">
                  SK
                </div>
                <div>
                  <span className="block text-sm font-bold text-gray-800">Sanjay Krishnan</span>
                  <span className="block text-[10px] text-gray-400">3 weeks ago • Homeowner</span>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex text-[#fca311]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                  <svg className="w-4 h-4 opacity-50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                  </svg>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 text-justify">
                  &quot;Very pleased with the residential hybrid inverter and energy storage setup. It has been running for 6 months now without any issues, saving us 80% on bills! Highly recommend SunLynk Solar.&quot;
                </p>
              </div>
              
              {/* User details */}
              <div className="flex items-center gap-3 border-t border-gray-50 pt-4">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 font-bold rounded-full flex items-center justify-center shrink-0">
                  NV
                </div>
                <div>
                  <span className="block text-sm font-bold text-gray-800">Neha Verma</span>
                  <span className="block text-[10px] text-gray-400">1 month ago • Homeowner</span>
                </div>
              </div>
            </div>

          </div>

          {/* Call to action at bottom of reviews */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12 pt-8 border-t border-gray-50">
            <span className="text-sm text-gray-500 font-medium">Are you a satisfied customer?</span>
            <a 
              href="https://google.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-hover transition-colors"
            >
              <span>Write a Google Review</span>
              <ArrowRight size={14} />
            </a>
          </div>

        </div>
      </section>

      {/* Client Logos Carousel Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
            {clientLogos.map((logo, idx) => (
              <div key={idx} className="relative w-28 h-12 flex items-center justify-center">
                <Image 
                  src={logo} 
                  alt={`Client Logo ${idx + 1}`} 
                  fill 
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
