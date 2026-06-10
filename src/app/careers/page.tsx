"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Briefcase, MapPin, Users, Heart, Award, ArrowRight, Send, Mail } from "lucide-react";

export default function Careers() {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const jobs = [
    {
      title: "Solar Design Engineer",
      dept: "Engineering & Design",
      location: "New Delhi / Remote",
      type: "Full-Time",
      description: "Design premium 2D/3D solar layout arrays, perform shadow analysis using PVsyst/SketchUp, and structure electrical single line diagrams."
    },
    {
      title: "Business Development Executive (BDE)",
      dept: "Sales & Growth",
      location: "Lucknow, UP",
      type: "Full-Time",
      description: "Consult residential homeowners, housing societies, and commercial clients on switching to solar, providing feasibility reports."
    },
    {
      title: "Technical Site Installer & Supervisor",
      dept: "Project Execution",
      location: "Lucknow / Field",
      type: "Full-Time",
      description: "Supervise civil installation, structures alignment, DC wiring, inverter calibration, and ensure safety standards at execution sites."
    },
    {
      title: "SCADA & Automation Specialist",
      dept: "SCADA Division",
      location: "Remote / Travel",
      type: "Full-Time",
      description: "Integrate weather sensors, Modbus/TCP communications, and configure cloud dashboard portals for commercial SCADA installations."
    }
  ];

  const benefits = [
    { title: "Growth Oriented", desc: "Fast-track your professional journey in India's leading clean tech renewable sector.", icon: Award },
    { title: "Inclusive Culture", desc: "Collaborate with cross-functional experts in engineering, automation, and project logistics.", icon: Users },
    { title: "Impact Driven", desc: "Directly contribute to reducing carbon footprints and clean energy transitions daily.", icon: Heart },
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      {/* Page Header */}
      <section className="relative bg-dark text-white py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none"
          style={{ backgroundImage: "url(/assets/images/backgrounds/page-header-bg-1-1.webp)" }}
        />
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center text-center max-w-3xl">
          <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-2 font-mono">
            Join Our Mission
          </span>
          <h1 className="text-4xl md:text-6xl font-black leading-tight">Build the Future of Clean Energy</h1>
          <p className="mt-4 text-sm md:text-base text-gray-400 leading-relaxed">
            Accelerate your career in the renewable energy sector. We are looking for passionate individuals who want to build high-performance, bankable solar and SCADA systems.
          </p>
          <div className="mt-6 flex items-center gap-2 text-xs md:text-sm text-gray-500">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Careers</span>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <span className="text-xs uppercase tracking-wider font-extrabold text-primary bg-primary/10 border border-primary/20 px-3.5 py-1.5 rounded-full">
            Our Culture
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 max-w-lg mx-auto leading-tight">
            Why you will love working at SunLynk Solar
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto mt-3">
            We offer competitive compensation, health benefits, flexible working parameters, and the chance to lead complex project executions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {benefits.map((ben, idx) => {
              const Icon = ben.icon;
              return (
                <div key={idx} className="bg-slate-50 border border-slate-200/50 p-8 rounded-2xl flex flex-col items-center text-center gap-4 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Icon size={24} />
                  </div>
                  <h4 className="font-extrabold text-slate-900 text-lg">{ben.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{ben.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-slate-50/50 border-t border-slate-200/40">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-wider font-extrabold text-emerald-600 bg-emerald-50 border border-emerald-100 px-3.5 py-1.5 rounded-full">
              Opportunity
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 leading-tight">
              Open Positions
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              Explore your fit and apply directly to join our dynamic teams.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {jobs.map((job, idx) => (
              <div key={idx} className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:shadow-md hover:border-slate-300/60 transition-all">
                <div className="space-y-2 max-w-xl text-left">
                  <div className="flex flex-wrap gap-2 items-center">
                    <span className="text-xs font-bold bg-primary/10 text-primary border border-primary/20 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {job.dept}
                    </span>
                    <span className="text-[10px] font-bold bg-slate-100 text-slate-600 border border-slate-200 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <MapPin size={10} /> {job.location}
                    </span>
                    <span className="text-[10px] font-bold bg-slate-100 text-slate-600 border border-slate-200 px-2 py-0.5 rounded-full">
                      {job.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{job.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{job.description}</p>
                </div>
                <a
                  href="mailto:info@sunlynksolar.com?subject=Application%20for%20Solar%20Role"
                  className="bg-emerald-600 text-white font-extrabold text-xs px-5 py-3 rounded-xl shadow-md flex items-center gap-2 hover:bg-emerald-700 active:scale-[0.98] transition-all whitespace-nowrap self-stretch md:self-auto justify-center"
                >
                  <span>Apply Now</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Call To Action Application Card */}
      <section className="py-20 bg-white border-t border-slate-200/40">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <div className="bg-slate-900 text-white p-8 md:p-12 rounded-3xl relative overflow-hidden shadow-xl">
            {/* Background glowing circle */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 border border-primary/30 rounded-full flex items-center justify-center text-primary">
                <Briefcase size={22} />
              </div>
              <h3 className="text-2xl md:text-3xl font-black">Don&apos;t see the right role?</h3>
              <p className="text-sm text-gray-400 max-w-md mx-auto leading-relaxed">
                If you are passionate about solar energy but don&apos;t see a matching open position, we would still love to hear from you. Send us your CV and a brief cover letter.
              </p>
              
              <div className="mt-4 flex flex-col sm:flex-row items-center gap-4 bg-slate-950/80 p-4 rounded-2xl border border-slate-800 w-full max-w-lg">
                <div className="flex items-center gap-2 text-primary font-bold text-sm flex-1 justify-center sm:justify-start">
                  <Mail size={16} />
                  <span>info@sunlynksolar.com</span>
                </div>
                <a
                  href="mailto:info@sunlynksolar.com?subject=Speculative%20Job%20Application%20-%20SunLynk%20Solar"
                  className="bg-primary hover:bg-primary-hover text-white font-extrabold py-2.5 px-6 rounded-xl text-xs flex items-center gap-1.5 transition-all shadow-md w-full sm:w-auto justify-center"
                >
                  <span>Submit CV</span>
                  <Send size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
