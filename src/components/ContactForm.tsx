"use client";

import React, { useState } from "react";
import { Send, Check } from "lucide-react";

export default function ContactForm() {
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

  return (
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
  );
}
