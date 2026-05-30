"use client";

import React, { useState } from "react";
import { X, Check } from "lucide-react";

export default function BuyNowModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    quantity: "",
    address: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  React.useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-buy-now-modal", handleOpen);
    return () => {
      window.removeEventListener("open-buy-now-modal", handleOpen);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setIsOpen(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          product: "",
          quantity: "",
          address: "",
          message: "",
        });
      }, 2000);
    }, 800);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <>
      {/* Floating Buy Now Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-primary hover:bg-primary-hover text-white font-bold py-3 px-6 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 animate-bounce hover:animate-none"
      >
        <span>Contact Us</span>
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 transition-all duration-300">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden relative border border-gray-100 flex flex-col max-h-[90vh]">
            
            {/* Header */}
            <div className="bg-dark text-white p-5 flex justify-between items-center">
              <h3 className="text-xl font-bold">Contact & Inquiry Form</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Form Content */}
            <div className="p-6 overflow-y-auto flex-1">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-primary/10 border-2 border-primary text-primary rounded-full flex items-center justify-center mb-4 animate-scale-up">
                    <Check size={36} />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">Inquiry Submitted!</h4>
                  <p className="text-gray-600">Thank you. Our solar specialists will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-sm font-semibold text-gray-700">Name</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="border border-gray-300 rounded-md py-2.5 px-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-gray-800"
                    />
                  </div>

                  {/* Contact Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email</label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="border border-gray-300 rounded-md py-2.5 px-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-gray-800"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-sm font-semibold text-gray-700">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        placeholder="Enter phone number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="border border-gray-300 rounded-md py-2.5 px-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-gray-800"
                      />
                    </div>
                  </div>

                  {/* Product & Quantity */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="sm:col-span-2 flex flex-col gap-1.5">
                      <label htmlFor="product" className="text-sm font-semibold text-gray-700">Select Product</label>
                      <select
                        id="product"
                        value={formData.product}
                        onChange={handleInputChange}
                        required
                        className="border border-gray-300 rounded-md py-2.5 px-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-gray-800"
                      >
                        <option value="">Choose a product...</option>
                        <option value="N-Type Bifacial Double Glass">N-Type Bifacial Double Glass (DM610)</option>
                        <option value="Bifacial Dual Glass">Bifacial Dual Glass (DM535-550)</option>
                        <option value="Mono-Facial">Mono-Facial (DM540-555)</option>
                        <option value="Hitachi Residential Inverter">Hitachi Residential Inverter</option>
                        <option value="Commercial Inverter">Commercial & Industrial Inverter</option>
                        <option value="Utility Central Inverter">Utility Central Inverter</option>
                        <option value="WMS Weather Station">WMS Weather Station</option>
                        <option value="BESS Energy Storage">BESS Energy Storage Solution</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="quantity" className="text-sm font-semibold text-gray-700">Quantity</label>
                      <input
                        type="number"
                        id="quantity"
                        min="1"
                        placeholder="Qty"
                        value={formData.quantity}
                        onChange={handleInputChange}
                        required
                        className="border border-gray-300 rounded-md py-2.5 px-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-gray-800"
                      />
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="address" className="text-sm font-semibold text-gray-700">Delivery Address</label>
                    <input
                      type="text"
                      id="address"
                      placeholder="Enter delivery address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="border border-gray-300 rounded-md py-2.5 px-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-gray-800"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-sm font-semibold text-gray-700">Message / Custom Requirements</label>
                    <textarea
                      id="message"
                      rows={3}
                      placeholder="Enter any additional requirements..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-gray-800 resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-3 rounded-md transition-all duration-300 shadow-md flex items-center justify-center gap-2 mt-2"
                  >
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
