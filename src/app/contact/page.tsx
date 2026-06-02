"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  const offices = [
    {
      title: "Mailing Address",
      desc: "Commercial Complex, Regus Centre Saket Pvt Ltd, Level 4, Rectangle 1, D-4, Saket, New Delhi, Delhi - 110017",
    },
    {
      title: "Factory Location",
      desc: "T.C. 34/752, Survey No. 920/D10, SRA 45, Behind Valiyathura Police Station, Beach P.O., Thiruvananthapuram, Kerala - 695007",
    },
    {
      title: "Regional Office",
      desc: "Mapa Centre, (Opp. Lulu Hyper Market), No.766/767, 1st Floor, Puliyakulam Road, PN Palayam, Coimbatore, Tamil Nadu - 641037",
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="relative bg-dark text-white py-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none"
          style={{ backgroundImage: "url(/assets/images/backgrounds/page-header-bg-1-1.webp)" }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-2">Get in Touch</span>
          <h1 className="text-3xl md:text-5xl font-black">Contact Us</h1>
          <div className="mt-4 flex items-center gap-2 text-xs md:text-sm text-gray-400">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Contact Us</span>
          </div>
        </div>
      </section>

      {/* Contact Form & Main Media */}
      <section className="py-18 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Image/Branding */}
          <div className="flex flex-col gap-6 justify-center text-left">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C5085] leading-tight tracking-tight">
                Schedule a FREE consultation <br className="hidden sm:inline" />
                with us today!
              </h2>
              <p className="text-sm sm:text-base text-gray-500 mt-3 font-semibold leading-relaxed">
                Please fill the form and we will get in touch with you for the consultation
              </p>
            </div>
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-gray-150 group">
              <Image
                src="/assets/images/resources/cntact-1-1.webp"
                alt="Contact SunLynk Solar"
                fill
                className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="flex justify-center items-start w-full">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Locations and Map */}
      <section className="py-18 bg-gray-1000 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Map */}
          <div className="lg:col-span-6 rounded-2xl overflow-hidden shadow-md border border-gray-200 aspect-[4/3] bg-gray-200 relative min-h-[350px]">
            <iframe
              title="SunLynkSaket Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.6865249568936!2d77.21146747533166!3d28.534080775719323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1e3e00000001%3A0x64e622f6d0f622d0!2sSaket%20District%20Centre%2C%20Sector%206%2C%20Pushp%20Vihar%2C%20New%20Delhi%2C%20Delhi%20110017!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full h-full border-0 absolute inset-0"
              allowFullScreen
            ></iframe>
          </div>

          {/* Location Cards */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {offices.map((off, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-base">{off.title}</h4>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">{off.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
