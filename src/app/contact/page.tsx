"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Send, Check } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

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
          style={{ backgroundImage: "url(/assets/images/backgrounds/page-header-bg-1-1.jpg)" }}
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column: Image/Branding */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <Image 
                src="/assets/images/resources/cntact-1-1.png" 
                alt="Contact SunLynk Solar" 
                fill 
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-dark text-white p-8 rounded-2xl shadow-2xl border border-gray-800 flex flex-col gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Get In Touch with SunLynk Solar</h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                We take great pride in everything that we do. Complete control over products allows us to ensure our customers receive the best quality service.
              </p>
            </div>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center bg-white/5 border border-white/10 rounded-xl">
                <div className="w-12 h-12 bg-primary/20 text-primary border border-primary/35 rounded-full flex items-center justify-center mb-3">
                  <Check size={24} />
                </div>
                <h4 className="font-bold text-lg text-white">Message Sent!</h4>
                <p className="text-sm text-gray-400 mt-1">Thank you. We will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="text-xs text-gray-400 font-bold uppercase tracking-wider">Your Name</label>
                    <input 
                      type="text" 
                      id="name"
                      placeholder="Enter your name" 
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-white/5 border border-white/10 rounded-md py-2.5 px-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-white"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="text-xs text-gray-400 font-bold uppercase tracking-wider">Your Email</label>
                    <input 
                      type="email" 
                      id="email"
                      placeholder="Enter your email" 
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white/5 border border-white/10 rounded-md py-2.5 px-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-white"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="subject" className="text-xs text-gray-400 font-bold uppercase tracking-wider">Subject</label>
                  <input 
                    type="text" 
                    id="subject"
                    placeholder="Enter subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border border-white/10 rounded-md py-2.5 px-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-white"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="message" className="text-xs text-gray-400 font-bold uppercase tracking-wider">Message</label>
                  <textarea 
                    id="message"
                    rows={4}
                    placeholder="Write message..." 
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border border-white/10 rounded-md py-2.5 px-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-white resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full btn-primary mt-2"
                >
                  <Send size={16} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Locations and Map */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
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
