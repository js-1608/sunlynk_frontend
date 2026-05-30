"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  faqs: FaqItem[];
}

export default function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(1);

  return (
    <div className="flex flex-col gap-3">
      {faqs.map((faq) => (
        <div 
          key={faq.id} 
          className="border border-gray-200 rounded-lg overflow-hidden transition-all bg-white"
        >
          <button
            onClick={() => setActiveFaq(activeFaq === faq.id ? null : faq.id)}
            className="w-full flex justify-between items-center p-4 text-left font-bold text-gray-800 hover:text-primary transition-colors focus:outline-none"
          >
            <span>{faq.question}</span>
            <ChevronDown 
              size={18} 
              className={`transform transition-transform ${activeFaq === faq.id ? "rotate-180 text-primary" : ""}`} 
            />
          </button>
          {activeFaq === faq.id && (
            <div className="p-4 bg-gray-50 border-t border-gray-200 text-sm text-gray-600 leading-relaxed text-justify">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
