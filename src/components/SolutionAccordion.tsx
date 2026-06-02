"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  title: string;
  content: string;
}

interface SolutionAccordionProps {
  accordions: AccordionItem[];
}

export default function SolutionAccordion({ accordions }: SolutionAccordionProps) {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-3">
      {accordions.map((acc, idx) => (
        <div
          key={idx}
          className="border border-gray-200 rounded-lg overflow-hidden transition-all bg-white"
        >
          <button
            onClick={() => setActiveAccordion(activeAccordion === idx ? null : idx)}
            className="w-full flex justify-between items-center p-4 text-left font-bold text-gray-800 hover:text-primary transition-colors focus:outline-none"
          >
            <span>{acc.title}</span>
            <ChevronDown
              size={18}
              className={`transform transition-transform ${activeAccordion === idx ? "rotate-180 text-primary" : ""}`}
            />
          </button>
          {activeAccordion === idx && (
            <div className="p-4 bg-gray-1000 border-t border-gray-200 text-sm text-gray-600 leading-relaxed text-justify">
              {acc.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
