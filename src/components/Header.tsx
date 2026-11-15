"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Phone, MessageSquare } from "lucide-react";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const CONTACT_NUMBER = "8573003002";
  const WHATSAPP_URL = `https://wa.me/91${CONTACT_NUMBER}?text=${encodeURIComponent("Hi, I am looking for maintenance of my solar")}`;

  return (
    <header
      className={`w-full bg-white transition-all duration-300 z-50 border-b border-gray-200 ${isSticky ? "sticky top-0 shadow-md py-2.5" : "relative py-3.5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo - Links to main website sunlynksolar.com */}
        <a
          href="/"
          className="relative flex items-center group"
          title="Visit SunLynk Solar Main Website"
        >
          <Image
            src="/newlogo.png"
            alt="SunLynk Solar Logo"
            width={250}
            height={100}
            priority
            className="object-contain transition-transform group-hover:scale-105"
          />
        </a>

        {/* Contact Us Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Phone call link */}
          <a
            href={`tel:${CONTACT_NUMBER}`}
            className="hidden sm:flex items-center gap-2 text-xs md:text-sm font-bold text-gray-700 hover:text-emerald-700 bg-gray-100 hover:bg-gray-200 px-4 py-2.5 rounded-xl transition-all border border-gray-200"
          >
            <Phone size={15} className="text-emerald-600" />
            <span>Call: {CONTACT_NUMBER}</span>
          </a>

          {/* WhatsApp / Contact Us button */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-extrabold px-5 py-2.5 rounded-xl transition-all shadow-md active:scale-95 flex items-center gap-2"
          >
            <MessageSquare size={16} />
            <span>Contact Us</span>
          </a>
        </div>
      </div>
    </header>
  );
}
