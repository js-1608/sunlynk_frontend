"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ChevronRight, Phone, Mail } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [subDropdown, setSubDropdown] = useState<string | null>(null);
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setSubDropdown(null);
  }, [pathname]);

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  const toggleSubDropdown = (name: string) => {
    if (subDropdown === name) {
      setSubDropdown(null);
    } else {
      setSubDropdown(name);
    }
  };

  return (
    <>
      {/* Topbar */}
      <div className="bg-dark text-gray-300 text-xs py-2 px-4 md:px-8 flex justify-between items-center border-b border-gray-800">
        <div className="flex items-center gap-4">
          <a href="mailto:info@SunLynkSolar.com" className="flex items-center gap-1.5 hover:text-primary transition-colors">
            <Mail size={14} className="text-primary" />
            <span>info@SunLynkSolar.com</span>
          </a>
          <a href="tel:+919711882204" className="hidden sm:flex items-center gap-1.5 hover:text-primary transition-colors">
            <Phone size={14} className="text-primary" />
            <span>+91 8922036792</span>
          </a>
        </div>
        <div className="text-gray-400">
          <span>Hours: Mon - Sat: 9:00 AM - 6:30 PM (Sun Closed)</span>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`w-full bg-white transition-all duration-300 z-50 ${
          isSticky
            ? "fixed top-0 left-0 shadow-lg border-b border-gray-100 py-3"
            : "relative py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="relative flex items-center">
            <Image
              src="/logo.png"
              alt="SunLynk Solar Logo"
              width={180}
              height={100}
              priority
              className="object-contain"
            />
            {/* <span className="text-2xl font-bold text-primary">SUNLYNK SOLAR</span> */}
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 text-md">
            <Link
              href="/"
              className={`font-semibold hover:text-primary transition-colors ${
                pathname === "/" ? "text-primary" : "text-gray-800"
              }`}
            >
              Home
            </Link>
            <Link
              href="/brands"
              className={`font-semibold hover:text-primary transition-colors ${
                pathname === "/brands" ? "text-primary" : "text-gray-500"
              }`}
            >
              Our Brand
            </Link>

            {/* Products Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 font-semibold text-gray-800 hover:text-primary transition-colors py-2">
                <span>Our Offering</span>
                <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-xl rounded-md border border-gray-100 py-2 w-64 mt-1 transition-all duration-200">
                {/* Solar PV Modules Submenu */}
                <div className="relative group/sub">
                  <span className="flex justify-between items-center px-4 py-2 hover:bg-gray-50 text-gray-800 hover:text-primary font-medium cursor-pointer">
                    <span>Solar PV Modules</span>
                    <ChevronRight size={14} />
                  </span>
                  <div className="absolute left-full top-0 hidden group-hover/sub:block bg-white shadow-xl rounded-md border border-gray-100 py-2 w-64">
                    <Link href="#" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-primary">
                      N-Type Bifacial Double Glass (DM610)
                    </Link>
                    <Link href="#" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-primary">
                      Bifacial Dual Glass (DM535-550)
                    </Link>
                    <Link href="#" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-primary">
                      Mono-Facial (DM540-555)
                    </Link>
                    <Link href="#" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-primary">
                      Hyper NOVA N 590 +W
                    </Link>
                    <Link href="#" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-primary">
                      Quasar 670 W
                    </Link>
                    <Link href="#" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-primary">
                      Quasar-bi 685+w
                    </Link>
                    <Link href="#" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-primary">
                      Hyper Nova n 640+w
                    </Link>
                  </div>
                </div>

                {/* Solar Inverter Submenu */}
                <div className="relative group/sub">
                  <span className="flex justify-between items-center px-4 py-2 hover:bg-gray-50 text-gray-800 hover:text-primary font-medium cursor-pointer">
                    <span>Solar Inverters</span>
                    <ChevronRight size={14} />
                  </span>
                  <div className="absolute left-full top-0 hidden group-hover/sub:block bg-white shadow-xl rounded-md border border-gray-100 py-2 w-64">
                    <Link href="#" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-primary">
                      Residential Inverters
                    </Link>
                    <Link href="#" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-primary">
                      Commercial Rooftop Inverter
                    </Link>
                    <Link href="#" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-primary">
                      Central Inverter
                    </Link>
                  </div>
                </div>

                {/* Weather Sensors Submenu */}
                <div className="relative group/sub">
                  <span className="flex justify-between items-center px-4 py-2 hover:bg-gray-50 text-gray-800 hover:text-primary font-medium cursor-pointer">
                    <span>Weather Sensors</span>
                    <ChevronRight size={14} />
                  </span>
                  <div className="absolute left-full top-0 hidden group-hover/sub:block bg-white shadow-xl rounded-md border border-gray-100 py-2 w-64">
                    <Link href="#" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-primary">
                      Rooftop PV
                    </Link>
                    <Link href="#" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-primary">
                      Utility Scale PV
                    </Link>
                    <Link href="#" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-primary">
                      Data Logger
                    </Link>
                  </div>
                </div>

                {/* Energy Storage Submenu */}
                <div className="relative group/sub">
                  <span className="flex justify-between items-center px-4 py-2 hover:bg-gray-50 text-gray-800 hover:text-primary font-medium cursor-pointer">
                    <span>Energy Storage</span>
                    <ChevronRight size={14} />
                  </span>
                  <div className="absolute left-full top-0 hidden group-hover/sub:block bg-white shadow-xl rounded-md border border-gray-100 py-2 w-64">
                    <Link href="#" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-primary">
                      Low Voltage Hybrid Inverters
                    </Link>
                    <Link href="#" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-primary">
                      High Voltage Hybrid Inverters
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Solutions Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 font-semibold text-gray-800 hover:text-primary transition-colors py-2">
                <span>Solar Solutions</span>
                <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-xl rounded-md border border-gray-100 py-2 w-64 mt-1 transition-all duration-200">
                <Link href="#" className="block px-4 py-2 hover:bg-gray-50 text-gray-800 hover:text-primary font-medium">
                  Energy Storage Solutions
                </Link>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-50 text-gray-800 hover:text-primary font-medium">
                  SCADA Solutions
                </Link>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-50 text-gray-800 hover:text-primary font-medium">
                  Weather Monitoring Solutions
                </Link>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-50 text-gray-800 hover:text-primary font-medium">
                  Forecasting & Nowcasting
                </Link>
              </div>
            </div>
            {/* Support Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 font-semibold text-gray-800 hover:text-primary transition-colors py-2">
                <span>Support</span>
                <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-xl rounded-md border border-gray-100 py-2 w-56 mt-1 transition-all duration-200">
                <Link href="#" className="block px-4 py-2 hover:bg-gray-50 text-gray-800 hover:text-primary font-medium">
                  Warranty Claims
                </Link>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-50 text-gray-800 hover:text-primary font-medium">
                  WMS Products
                </Link>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-50 text-gray-800 hover:text-primary font-medium">
                  Inverters and Panels
                </Link>
              </div>
            </div>

            <Link
              href="#"
              className={`font-semibold hover:text-primary transition-colors ${
                pathname === "/about" ? "text-primary" : "text-gray-800"
              }`}
            >
              About us
            </Link>
            <Link
              href="#"
              className={`font-semibold hover:text-primary transition-colors ${
                pathname.startsWith("/blog") ? "text-primary" : "text-gray-800"
              }`}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className={`font-semibold hover:text-primary transition-colors ${
                pathname === "/contact" ? "text-primary" : "text-gray-800"
              }`}
            >
              Contact us
            </Link>
          </nav>

          {/* Toggle Mobile Menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-800 hover:text-primary transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Drawer */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 absolute top-full left-0 w-full shadow-xl z-50 py-4 max-h-[85vh] overflow-y-auto">
            <div className="flex flex-col px-6 gap-3">
              <Link href="/" className="py-2 border-b border-gray-50 font-semibold text-gray-800">
                Home
              </Link>
              <Link href="#" className="py-2 border-b border-gray-50 font-semibold text-gray-800">
                Our Brand
              </Link>

              {/* Products mobile */}
              <div className="border-b border-gray-50 py-2">
                <button
                  onClick={() => toggleDropdown("products")}
                  className="flex justify-between items-center w-full font-semibold text-gray-800"
                >
                  <span>Products</span>
                  <ChevronDown size={18} className={`transform transition-transform ${activeDropdown === "products" ? "rotate-180" : ""}`} />
                </button>
                {activeDropdown === "products" && (
                  <div className="pl-4 mt-2 flex flex-col gap-2">
                    {/* Solar PV Modules */}
                    <div>
                      <button
                        onClick={() => toggleSubDropdown("solarPV")}
                        className="flex justify-between items-center w-full text-sm font-medium text-gray-700 py-1"
                      >
                        <span>Solar PV Modules</span>
                        <ChevronDown size={14} className={`transform transition-transform ${subDropdown === "solarPV" ? "rotate-180" : ""}`} />
                      </button>
                      {subDropdown === "solarPV" && (
                        <div className="pl-4 flex flex-col gap-1.5 text-xs text-gray-600 mt-1">
                          <Link href="#" className="py-1">N-Type Bifacial Double Glass</Link>
                          <Link href="#" className="py-1">Bifacial Dual Glass</Link>
                          <Link href="#" className="py-1">Mono-Facial</Link>
                          <Link href="#" className="py-1">Hyper NOVA N 590 +W</Link>
                          <Link href="#" className="py-1">Quasar 670 W</Link>
                          <Link href="#" className="py-1">Quasar-bi 685+w</Link>
                          <Link href="#" className="py-1">Hyper Nova n 640+w</Link>
                        </div>
                      )}
                    </div>

                    {/* Solar Inverters */}
                    <div>
                      <button
                        onClick={() => toggleSubDropdown("inverters")}
                        className="flex justify-between items-center w-full text-sm font-medium text-gray-700 py-1"
                      >
                        <span>Solar Inverters</span>
                        <ChevronDown size={14} className={`transform transition-transform ${subDropdown === "inverters" ? "rotate-180" : ""}`} />
                      </button>
                      {subDropdown === "inverters" && (
                        <div className="pl-4 flex flex-col gap-1.5 text-xs text-gray-600 mt-1">
                          <Link href="#" className="py-1">Residential Inverters</Link>
                          <Link href="#" className="py-1">Commercial Rooftop</Link>
                          <Link href="#" className="py-1">Central Inverter</Link>
                        </div>
                      )}
                    </div>

                    {/* Weather Sensors */}
                    <div>
                      <button
                        onClick={() => toggleSubDropdown("sensors")}
                        className="flex justify-between items-center w-full text-sm font-medium text-gray-700 py-1"
                      >
                        <span>Weather Sensors</span>
                        <ChevronDown size={14} className={`transform transition-transform ${subDropdown === "sensors" ? "rotate-180" : ""}`} />
                      </button>
                      {subDropdown === "sensors" && (
                        <div className="pl-4 flex flex-col gap-1.5 text-xs text-gray-600 mt-1">
                          <Link href="#" className="py-1">Rooftop PV</Link>
                          <Link href="#" className="py-1">Utility Scale PV</Link>
                          <Link href="#" className="py-1">Data Logger</Link>
                        </div>
                      )}
                    </div>

                    {/* Energy Storage */}
                    <div>
                      <button
                        onClick={() => toggleSubDropdown("storage")}
                        className="flex justify-between items-center w-full text-sm font-medium text-gray-700 py-1"
                      >
                        <span>Energy Storage</span>
                        <ChevronDown size={14} className={`transform transition-transform ${subDropdown === "storage" ? "rotate-180" : ""}`} />
                      </button>
                      {subDropdown === "storage" && (
                        <div className="pl-4 flex flex-col gap-1.5 text-xs text-gray-600 mt-1">
                          <Link href="#" className="py-1">Low Voltage Hybrid</Link>
                          <Link href="#" className="py-1">High Voltage Hybrid</Link>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Solutions mobile */}
              <div className="border-b border-gray-50 py-2">
                <button
                  onClick={() => toggleDropdown("solutions")}
                  className="flex justify-between items-center w-full font-semibold text-gray-800"
                >
                  <span>Solutions</span>
                  <ChevronDown size={18} className={`transform transition-transform ${activeDropdown === "solutions" ? "rotate-180" : ""}`} />
                </button>
                {activeDropdown === "solutions" && (
                  <div className="pl-4 mt-2 flex flex-col gap-2 text-sm text-gray-700">
                    <Link href="#" className="py-1">Energy Storage Solutions</Link>
                    <Link href="#" className="py-1">SCADA Solutions</Link>
                    <Link href="#" className="py-1">Weather Monitoring Solutions</Link>
                    <Link href="#" className="py-1">Forecasting & Nowcasting</Link>
                  </div>
                )}
              </div>

              {/* Services mobile */}
              <div className="border-b border-gray-50 py-2">
                <button
                  onClick={() => toggleDropdown("services")}
                  className="flex justify-between items-center w-full font-semibold text-gray-800"
                >
                  <span>Services</span>
                  <ChevronDown size={18} className={`transform transition-transform ${activeDropdown === "services" ? "rotate-180" : ""}`} />
                </button>
                {activeDropdown === "services" && (
                  <div className="pl-4 mt-2 flex flex-col gap-2 text-sm text-gray-700">
                    <Link href="#" className="py-1">Calibration Services</Link>
                  </div>
                )}
              </div>

              {/* Support mobile */}
              <div className="border-b border-gray-50 py-2">
                <button
                  onClick={() => toggleDropdown("support")}
                  className="flex justify-between items-center w-full font-semibold text-gray-800"
                >
                  <span>Support</span>
                  <ChevronDown size={18} className={`transform transition-transform ${activeDropdown === "support" ? "rotate-180" : ""}`} />
                </button>
                {activeDropdown === "support" && (
                  <div className="pl-4 mt-2 flex flex-col gap-2 text-sm text-gray-700">
                    <Link href="#" className="py-1">Warranty Claims</Link>
                    <Link href="#" className="py-1">WMS Products</Link>
                    <Link href="#" className="py-1">Inverters and Panels</Link>
                  </div>
                )}
              </div>

              <Link href="#" className="py-2 border-b border-gray-50 font-semibold text-gray-800">
                About us
              </Link>
              <Link href="#" className="py-2 border-b border-gray-50 font-semibold text-gray-800">
                Blog
              </Link>
              <Link href="/contact" className="py-2 border-b border-gray-50 font-semibold text-gray-800">
                Contact us
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}







// "use client";

// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { Menu, X, ChevronDown, ChevronRight, Phone, Mail } from "lucide-react";

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
//   const [subDropdown, setSubDropdown] = useState<string | null>(null);
//   const [isSticky, setIsSticky] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 100) {
//         setIsSticky(true);
//       } else {
//         setIsSticky(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Close mobile menu on page change
//   useEffect(() => {
//     setIsOpen(false);
//     setActiveDropdown(null);
//     setSubDropdown(null);
//   }, [pathname]);

//   const toggleDropdown = (name: string) => {
//     if (activeDropdown === name) {
//       setActiveDropdown(null);
//     } else {
//       setActiveDropdown(name);
//     }
//   };

//   const toggleSubDropdown = (name: string) => {
//     if (subDropdown === name) {
//       setSubDropdown(null);
//     } else {
//       setSubDropdown(name);
//     }
//   };

//   return (
//     <>
//       {/* Topbar */}
//       <div className="bg-dark text-gray-300 text-xs py-2 px-4 md:px-8 flex justify-between items-center border-b border-gray-800">
//         <div className="flex items-center gap-4">
//           <a href="mailto:info@SunLynkSolar.com" className="flex items-center gap-1.5 hover:text-primary transition-colors">
//             <Mail size={14} className="text-primary" />
//             <span>info@SunLynkSolar.com</span>
//           </a>
//           <a href="tel:+919711882204" className="hidden sm:flex items-center gap-1.5 hover:text-primary transition-colors">
//             <Phone size={14} className="text-primary" />
//             <span>+91 8922036792</span>
//           </a>
//         </div>
//         <div className="text-gray-400">
//           <span>Hours: Mon - Sat: 9:00 AM - 6:30 PM (Sun Closed)</span>
//         </div>
//       </div>

//       {/* Main Header */}
//       <header
//         className={`w-full bg-white transition-all duration-300 z-50 ${
//           isSticky
//             ? "fixed top-0 left-0 shadow-lg border-b border-gray-100 py-3"
//             : "relative py-4"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
//           {/* Logo */}
//           <Link href="/" className="relative flex items-center">
//             <Image
//               src="/logo.png"
//               alt="SunLynk Solar Logo"
//               width={180}
//               height={100}
//               priority
//               className="object-contain"
//             />
//             {/* <span className="text-2xl font-bold text-primary">SUNLYNK SOLAR</span> */}
//           </Link>

//           {/* Desktop Nav */}
//           <nav className="hidden lg:flex items-center gap-6">
//             <Link
//               href="/"
//               className={`font-semibold hover:text-primary transition-colors ${
//                 pathname === "/" ? "text-primary" : "text-gray-800"
//               }`}
//             >
//               Home
//             </Link>
//             <Link
//               href="/brands"
//               className={`font-semibold hover:text-primary transition-colors ${
//                 pathname === "/brands" ? "text-primary" : "text-gray-800"
//               }`}
//             >
//               Our Brand
//             </Link>

//             {/* Products Dropdown */}
//             <div className="relative group">
//               <button className="flex items-center gap-1 font-semibold text-gray-800 hover:text-primary transition-colors py-2">
//                 <span>Products</span>
//                 <ChevronDown size={16} />
//               </button>
//               <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-xl rounded-md border border-gray-100 py-2 w-64 mt-1 transition-all duration-200">
//                 {/* Solar PV Modules Submenu */}
//                 <div className="relative group/sub">
//                   <span className="flex justify-between items-center px-4 py-2 hover:bg-gray-50 text-gray-800 hover:text-primary font-medium cursor-pointer">
//                     <span>Solar PV Modules</span>
//                     <ChevronRight size={14} />
//                   </span>
//                   <div className="absolute left-full top-0 hidden group-hover/sub:block bg-white shadow-xl rounded-md border border-gray-100 py-2 w-64">
//                     <Link href="/products/n-type-bifacial-double-glass" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-primary">
//                       N-Type Bifacial Double Glass (DM610)
//                     </Link>
//                     <Link href="/products/bifacial-dual-glass" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-primary">
//                       Bifacial Dual Glass (DM535-550)
//                     </Link>
//                     <Link href="/products/mono-facial" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-primary">
//                       Mono-Facial (DM540-555)
//                     </Link>
//                     <Link href="/products/hyper-nova-580" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-primary">
//                       Hyper NOVA N 590 +W
//                     </Link>
//                     <Link href="/products/quasar-670w" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-primary">
//                       Quasar 670 W
//                     </Link>
//                     <Link href="/products/quasar-bi-685w" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-primary">
//                       Quasar-bi 685+w
//                     </Link>
//                     <Link href="/products/hyper-nova-n680w" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-primary">
//                       Hyper Nova n 640+w
//                     </Link>
//                   </div>
//                 </div>

//                 {/* Solar Inverter Submenu */}
//                 <div className="relative group/sub">
//                   <span className="flex justify-between items-center px-4 py-2 hover:bg-gray-50 text-gray-800 hover:text-primary font-medium cursor-pointer">
//                     <span>Solar Inverters</span>
//                     <ChevronRight size={14} />
//                   </span>
//                   <div className="absolute left-full top-0 hidden group-hover/sub:block bg-white shadow-xl rounded-md border border-gray-100 py-2 w-64">
//                     <Link href="/products/residential-inverters" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-primary">
//                       Residential Inverters
//                     </Link>
//                     <Link href="/products/commercial-rooftop" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-primary">
//                       Commercial Rooftop Inverter
//                     </Link>
//                     <Link href="/products/central-inverter" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-primary">
//                       Central Inverter
//                     </Link>
//                   </div>
//                 </div>

//                 {/* Weather Sensors Submenu */}
//                 <div className="relative group/sub">
//                   <span className="flex justify-between items-center px-4 py-2 hover:bg-gray-50 text-gray-800 hover:text-primary font-medium cursor-pointer">
//                     <span>Weather Sensors</span>
//                     <ChevronRight size={14} />
//                   </span>
//                   <div className="absolute left-full top-0 hidden group-hover/sub:block bg-white shadow-xl rounded-md border border-gray-100 py-2 w-64">
//                     <Link href="/products/rooftop-pv" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-primary">
//                       Rooftop PV
//                     </Link>
//                     <Link href="/products/utility-scale-pv" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-primary">
//                       Utility Scale PV
//                     </Link>
//                     <Link href="/products/data-logger" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-primary">
//                       Data Logger
//                     </Link>
//                   </div>
//                 </div>

//                 {/* Energy Storage Submenu */}
//                 <div className="relative group/sub">
//                   <span className="flex justify-between items-center px-4 py-2 hover:bg-gray-50 text-gray-800 hover:text-primary font-medium cursor-pointer">
//                     <span>Energy Storage</span>
//                     <ChevronRight size={14} />
//                   </span>
//                   <div className="absolute left-full top-0 hidden group-hover/sub:block bg-white shadow-xl rounded-md border border-gray-100 py-2 w-64">
//                     <Link href="/products/low-voltage-hybrid" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-primary">
//                       Low Voltage Hybrid Inverters
//                     </Link>
//                     <Link href="/products/high-voltage-hybrid" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-primary">
//                       High Voltage Hybrid Inverters
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Solutions Dropdown */}
//             <div className="relative group">
//               <button className="flex items-center gap-1 font-semibold text-gray-800 hover:text-primary transition-colors py-2">
//                 <span>Solutions</span>
//                 <ChevronDown size={16} />
//               </button>
//               <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-xl rounded-md border border-gray-100 py-2 w-64 mt-1 transition-all duration-200">
//                 <Link href="/solutions/energy-storage-solutions" className="block px-4 py-2 hover:bg-gray-50 text-gray-800 hover:text-primary font-medium">
//                   Energy Storage Solutions
//                 </Link>
//                 <Link href="/solutions/scada-solutions" className="block px-4 py-2 hover:bg-gray-50 text-gray-800 hover:text-primary font-medium">
//                   SCADA Solutions
//                 </Link>
//                 <Link href="/solutions/weather-monitoring-solutions" className="block px-4 py-2 hover:bg-gray-50 text-gray-800 hover:text-primary font-medium">
//                   Weather Monitoring Solutions
//                 </Link>
//                 <Link href="/solutions/forecasting-solutions" className="block px-4 py-2 hover:bg-gray-50 text-gray-800 hover:text-primary font-medium">
//                   Forecasting & Nowcasting
//                 </Link>
//               </div>
//             </div>

//             {/* Services Dropdown */}
//             <div className="relative group">
//               <button className="flex items-center gap-1 font-semibold text-gray-800 hover:text-primary transition-colors py-2">
//                 <span>Services</span>
//                 <ChevronDown size={16} />
//               </button>
//               <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-xl rounded-md border border-gray-100 py-2 w-56 mt-1 transition-all duration-200">
//                 <Link href="/services/calibration" className="block px-4 py-2 hover:bg-gray-50 text-gray-800 hover:text-primary font-medium">
//                   Calibration Services
//                 </Link>
//               </div>
//             </div>

//             {/* Support Dropdown */}
//             <div className="relative group">
//               <button className="flex items-center gap-1 font-semibold text-gray-800 hover:text-primary transition-colors py-2">
//                 <span>Support</span>
//                 <ChevronDown size={16} />
//               </button>
//               <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-xl rounded-md border border-gray-100 py-2 w-56 mt-1 transition-all duration-200">
//                 <Link href="/support/warranty" className="block px-4 py-2 hover:bg-gray-50 text-gray-800 hover:text-primary font-medium">
//                   Warranty Claims
//                 </Link>
//                 <Link href="/support/wms-downloads" className="block px-4 py-2 hover:bg-gray-50 text-gray-800 hover:text-primary font-medium">
//                   WMS Products
//                 </Link>
//                 <Link href="/support/inverter-downloads" className="block px-4 py-2 hover:bg-gray-50 text-gray-800 hover:text-primary font-medium">
//                   Inverters and Panels
//                 </Link>
//               </div>
//             </div>

//             <Link
//               href="/about"
//               className={`font-semibold hover:text-primary transition-colors ${
//                 pathname === "/about" ? "text-primary" : "text-gray-800"
//               }`}
//             >
//               About us
//             </Link>
//             <Link
//               href="/blog"
//               className={`font-semibold hover:text-primary transition-colors ${
//                 pathname.startsWith("/blog") ? "text-primary" : "text-gray-800"
//               }`}
//             >
//               Blog
//             </Link>
//             <Link
//               href="/contact"
//               className={`font-semibold hover:text-primary transition-colors ${
//                 pathname === "/contact" ? "text-primary" : "text-gray-800"
//               }`}
//             >
//               Contact us
//             </Link>
//           </nav>

//           {/* Toggle Mobile Menu */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="lg:hidden text-gray-800 hover:text-primary transition-colors focus:outline-none"
//             aria-label="Toggle menu"
//           >
//             {isOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>

//         {/* Mobile Nav Drawer */}
//         {isOpen && (
//           <div className="lg:hidden bg-white border-t border-gray-100 absolute top-full left-0 w-full shadow-xl z-50 py-4 max-h-[85vh] overflow-y-auto">
//             <div className="flex flex-col px-6 gap-3">
//               <Link href="/" className="py-2 border-b border-gray-50 font-semibold text-gray-800">
//                 Home
//               </Link>
//               <Link href="/brands" className="py-2 border-b border-gray-50 font-semibold text-gray-800">
//                 Our Brand
//               </Link>

//               {/* Products mobile */}
//               <div className="border-b border-gray-50 py-2">
//                 <button
//                   onClick={() => toggleDropdown("products")}
//                   className="flex justify-between items-center w-full font-semibold text-gray-800"
//                 >
//                   <span>Products</span>
//                   <ChevronDown size={18} className={`transform transition-transform ${activeDropdown === "products" ? "rotate-180" : ""}`} />
//                 </button>
//                 {activeDropdown === "products" && (
//                   <div className="pl-4 mt-2 flex flex-col gap-2">
//                     {/* Solar PV Modules */}
//                     <div>
//                       <button
//                         onClick={() => toggleSubDropdown("solarPV")}
//                         className="flex justify-between items-center w-full text-sm font-medium text-gray-700 py-1"
//                       >
//                         <span>Solar PV Modules</span>
//                         <ChevronDown size={14} className={`transform transition-transform ${subDropdown === "solarPV" ? "rotate-180" : ""}`} />
//                       </button>
//                       {subDropdown === "solarPV" && (
//                         <div className="pl-4 flex flex-col gap-1.5 text-xs text-gray-600 mt-1">
//                           <Link href="/products/n-type-bifacial-double-glass" className="py-1">N-Type Bifacial Double Glass</Link>
//                           <Link href="/products/bifacial-dual-glass" className="py-1">Bifacial Dual Glass</Link>
//                           <Link href="/products/mono-facial" className="py-1">Mono-Facial</Link>
//                           <Link href="/products/hyper-nova-580" className="py-1">Hyper NOVA N 590 +W</Link>
//                           <Link href="/products/quasar-670w" className="py-1">Quasar 670 W</Link>
//                           <Link href="/products/quasar-bi-685w" className="py-1">Quasar-bi 685+w</Link>
//                           <Link href="/products/hyper-nova-n680w" className="py-1">Hyper Nova n 640+w</Link>
//                         </div>
//                       )}
//                     </div>

//                     {/* Solar Inverters */}
//                     <div>
//                       <button
//                         onClick={() => toggleSubDropdown("inverters")}
//                         className="flex justify-between items-center w-full text-sm font-medium text-gray-700 py-1"
//                       >
//                         <span>Solar Inverters</span>
//                         <ChevronDown size={14} className={`transform transition-transform ${subDropdown === "inverters" ? "rotate-180" : ""}`} />
//                       </button>
//                       {subDropdown === "inverters" && (
//                         <div className="pl-4 flex flex-col gap-1.5 text-xs text-gray-600 mt-1">
//                           <Link href="/products/residential-inverters" className="py-1">Residential Inverters</Link>
//                           <Link href="/products/commercial-rooftop" className="py-1">Commercial Rooftop</Link>
//                           <Link href="/products/central-inverter" className="py-1">Central Inverter</Link>
//                         </div>
//                       )}
//                     </div>

//                     {/* Weather Sensors */}
//                     <div>
//                       <button
//                         onClick={() => toggleSubDropdown("sensors")}
//                         className="flex justify-between items-center w-full text-sm font-medium text-gray-700 py-1"
//                       >
//                         <span>Weather Sensors</span>
//                         <ChevronDown size={14} className={`transform transition-transform ${subDropdown === "sensors" ? "rotate-180" : ""}`} />
//                       </button>
//                       {subDropdown === "sensors" && (
//                         <div className="pl-4 flex flex-col gap-1.5 text-xs text-gray-600 mt-1">
//                           <Link href="/products/rooftop-pv" className="py-1">Rooftop PV</Link>
//                           <Link href="/products/utility-scale-pv" className="py-1">Utility Scale PV</Link>
//                           <Link href="/products/data-logger" className="py-1">Data Logger</Link>
//                         </div>
//                       )}
//                     </div>

//                     {/* Energy Storage */}
//                     <div>
//                       <button
//                         onClick={() => toggleSubDropdown("storage")}
//                         className="flex justify-between items-center w-full text-sm font-medium text-gray-700 py-1"
//                       >
//                         <span>Energy Storage</span>
//                         <ChevronDown size={14} className={`transform transition-transform ${subDropdown === "storage" ? "rotate-180" : ""}`} />
//                       </button>
//                       {subDropdown === "storage" && (
//                         <div className="pl-4 flex flex-col gap-1.5 text-xs text-gray-600 mt-1">
//                           <Link href="/products/low-voltage-hybrid" className="py-1">Low Voltage Hybrid</Link>
//                           <Link href="/products/high-voltage-hybrid" className="py-1">High Voltage Hybrid</Link>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* Solutions mobile */}
//               <div className="border-b border-gray-50 py-2">
//                 <button
//                   onClick={() => toggleDropdown("solutions")}
//                   className="flex justify-between items-center w-full font-semibold text-gray-800"
//                 >
//                   <span>Solutions</span>
//                   <ChevronDown size={18} className={`transform transition-transform ${activeDropdown === "solutions" ? "rotate-180" : ""}`} />
//                 </button>
//                 {activeDropdown === "solutions" && (
//                   <div className="pl-4 mt-2 flex flex-col gap-2 text-sm text-gray-700">
//                     <Link href="/solutions/energy-storage-solutions" className="py-1">Energy Storage Solutions</Link>
//                     <Link href="/solutions/scada-solutions" className="py-1">SCADA Solutions</Link>
//                     <Link href="/solutions/weather-monitoring-solutions" className="py-1">Weather Monitoring Solutions</Link>
//                     <Link href="/solutions/forecasting-solutions" className="py-1">Forecasting & Nowcasting</Link>
//                   </div>
//                 )}
//               </div>

//               {/* Services mobile */}
//               <div className="border-b border-gray-50 py-2">
//                 <button
//                   onClick={() => toggleDropdown("services")}
//                   className="flex justify-between items-center w-full font-semibold text-gray-800"
//                 >
//                   <span>Services</span>
//                   <ChevronDown size={18} className={`transform transition-transform ${activeDropdown === "services" ? "rotate-180" : ""}`} />
//                 </button>
//                 {activeDropdown === "services" && (
//                   <div className="pl-4 mt-2 flex flex-col gap-2 text-sm text-gray-700">
//                     <Link href="/services/calibration" className="py-1">Calibration Services</Link>
//                   </div>
//                 )}
//               </div>

//               {/* Support mobile */}
//               <div className="border-b border-gray-50 py-2">
//                 <button
//                   onClick={() => toggleDropdown("support")}
//                   className="flex justify-between items-center w-full font-semibold text-gray-800"
//                 >
//                   <span>Support</span>
//                   <ChevronDown size={18} className={`transform transition-transform ${activeDropdown === "support" ? "rotate-180" : ""}`} />
//                 </button>
//                 {activeDropdown === "support" && (
//                   <div className="pl-4 mt-2 flex flex-col gap-2 text-sm text-gray-700">
//                     <Link href="/support/warranty" className="py-1">Warranty Claims</Link>
//                     <Link href="/support/wms-downloads" className="py-1">WMS Products</Link>
//                     <Link href="/support/inverter-downloads" className="py-1">Inverters and Panels</Link>
//                   </div>
//                 )}
//               </div>

//               <Link href="/about" className="py-2 border-b border-gray-50 font-semibold text-gray-800">
//                 About us
//               </Link>
//               <Link href="/blog" className="py-2 border-b border-gray-50 font-semibold text-gray-800">
//                 Blog
//               </Link>
//               <Link href="/contact" className="py-2 border-b border-gray-50 font-semibold text-gray-800">
//                 Contact us
//               </Link>
//             </div>
//           </div>
//         )}
//       </header>
//     </>
//   );
// }
