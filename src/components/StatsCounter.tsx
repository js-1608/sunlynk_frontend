"use client";

import React, { useEffect, useState, useRef } from "react";
import { Home, Sun, IndianRupee, Shield, Map } from "lucide-react";

interface StatItemProps {
  icon: React.ReactNode;
  target: number;
  prefix?: string;
  suffix: string;
  label: string;
  useComma?: boolean;
}

const StatCard: React.FC<StatItemProps> = ({ icon, target, prefix = "", suffix, label, useComma = false }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    const duration = 2000; // 2 seconds animation
    const startTime = performance.now();

    const animate = (timestamp: number) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing out quadratic
      const easeProgress = progress * (2 - progress);
      const currentValue = Math.floor(easeProgress * target);

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, target]);

  const formatNumber = (num: number) => {
    if (!useComma) return num.toString();
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div
      ref={cardRef}
      className="relative flex flex-col items-start p-8 bg-slate-50 border border-slate-100 rounded-2xl hover:border-primary/30 hover:shadow-lg transition-all duration-300 group overflow-hidden"
    >
      {/* Icon with glowing brand background */}
      <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 shadow-sm shrink-0">
        {icon}
      </div>

      <div className="flex flex-col items-start mt-6">
        <span className="text-xl md:text-2xl font-extrabold text-gray-900 leading-tight tracking-tight select-none">
          {prefix}{formatNumber(count)}{suffix}
        </span>
        <span className="text-sm font-semibold text-gray-500 mt-2">
          {label}
        </span>
      </div>
    </div>
  );
};

export default function StatsCounter() {
  return (
    <section className="relative py-18 bg-white border-y border-gray-100 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

        {/* Title matches screenshot */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-dark text-center mb-12 tracking-tight">
          Powering Homes Across India
        </h2>

        {/* 4 Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            icon={<Home size={22} />}
            target={40000}
            suffix="+"
            label="Homes Solarized"
            useComma={true}
          />
          <StatCard
            icon={<Sun size={22} />}
            target={150}
            suffix="+ MW"
            label="Power Installed"
          />
          <StatCard
            icon={<IndianRupee size={22} />}
            target={250}
            prefix="₹"
            suffix="+ Cr"
            label="Subsidy Delivered"
          />
          <StatCard
            icon={<Shield size={22} />}
            target={1}
            prefix="#"
            suffix=" Home Solar"
            label="On National Portal"
          />
        </div>

        {/* Bottom Banner */}
        <div className="bg-slate-50/50 border border-slate-100 rounded-3xl p-6 flex flex-col md:flex-row justify-between items-center gap-6 mt-8 w-full shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
              <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping scale-75 opacity-75" />
              <Map size={24} className="relative z-10" />
            </div>
            <p className="text-base font-semibold text-gray-800">
              We are present in 29 Cities across 9 States, and are growing every day.
            </p>
          </div>
          <a
            href="/contact"
            className="w-full md:w-auto text-center bg-primary hover:bg-primary-hover text-white font-bold py-3.5 px-8 rounded-lg transition-all duration-300 shadow-lg shadow-primary/15 hover:shadow-primary/25 shrink-0"
          >
            Unlock Your Solar Savings
          </a>
        </div>

      </div>
    </section>
  );
}
