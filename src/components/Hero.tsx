import React from 'react';
import { ArrowRight, Download, Mail, Sparkles, CheckCircle2, ShieldCheck, BookOpen, Layers, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-brand-600/15 via-indigo-500/10 to-transparent blur-[120px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-emerald-500/10 blur-[100px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Copy */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-brand-500/30 text-xs font-medium text-slate-300 shadow-sm backdrop-blur-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for IT / Frontend &amp; QA Internship (2026–2027)</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Hi, I'm <span className="bg-gradient-to-r from-brand-400 via-indigo-300 to-sky-400 bg-clip-text text-transparent">Jesse Mae</span>.
              </h1>
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-300">
                Front-End Developer with a Designer's Eye & Backend Foundation
              </h2>
            </div>

            {/* Subtitle / Bio */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
              4th-year BS Information Technology student at <strong className="text-slate-200">Bulacan State University</strong>. 
              Led full-stack development on a real-client web system in <span className="text-brand-300 font-medium">React, Vite, Firebase & Leaflet.js</span>, 
              backed by an editorial publication design background and a <span className="text-emerald-400 font-medium">Salesforce Administrator</span> certification.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-brand-500 to-indigo-600 hover:from-brand-600 hover:to-indigo-700 text-white shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-0.5 transition-all"
              >
                <span>Explore Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-slate-700 hover:-translate-y-0.5 transition-all"
              >
                <Mail className="w-4 h-4 text-brand-400" />
                <span>Contact Jesse</span>
              </a>
            </div>

            {/* Quick Feature Badges */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-400">
              <div className="flex items-center gap-2 bg-slate-900/40 border border-slate-800/60 rounded-lg p-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                <span>React & Firebase Capstone PM</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/40 border border-slate-800/60 rounded-lg p-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Salesforce Certified Admin</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/40 border border-slate-800/60 rounded-lg p-2.5">
                <Layers className="w-4 h-4 text-sky-400 shrink-0" />
                <span>CURSOR Layout Artist</span>
              </div>
            </div>

          </div>

          {/* Right Visual Card: Interactive Developer Profile Spec */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-6 shadow-2xl shadow-black/50 overflow-hidden">
              
              {/* Terminal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs text-slate-400 font-mono">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <span className="text-slate-500">developer-profile.ts</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> ready
                </span>
              </div>

              {/* Profile Portrait & Identity */}
              <div className="py-5 border-b border-slate-800/80 flex items-center gap-4 sm:gap-5">
                <div className="p-[2px] rounded-2xl bg-gradient-to-tr from-brand-500 via-indigo-400 to-sky-400 shadow-lg shadow-brand-500/20 shrink-0">
                  <img
                    src="/profile.jpg"
                    alt={PERSONAL_INFO.name}
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-[14px] object-cover object-top bg-black block"
                  />
                </div>
                <div className="min-w-0 space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-white leading-tight truncate">
                    {PERSONAL_INFO.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-brand-300 leading-snug">
                    Frontend Developer • UI/UX • QA
                  </p>
                  <p className="text-xs text-slate-400 flex items-center gap-1.5 pt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span>{PERSONAL_INFO.location}</span>
                  </p>
                </div>
              </div>

              {/* Code Snippet Spec */}
              <div className="py-4 font-mono text-xs sm:text-sm text-slate-300 space-y-3 leading-relaxed">
                <div>
                  <span className="text-brand-400">const</span> candidate = &#123;
                </div>
                <div className="pl-4 space-y-1">
                  <div>
                    <span className="text-slate-400">name:</span> <span className="text-emerald-300">"{PERSONAL_INFO.name}"</span>,
                  </div>
                  <div>
                    <span className="text-slate-400">university:</span> <span className="text-emerald-300">"Bulacan State University"</span>,
                  </div>
                  <div>
                    <span className="text-slate-400">degree:</span> <span className="text-emerald-300">"BSIT (Web & Mobile Dev)"</span>,
                  </div>
                  <div>
                    <span className="text-slate-400">primaryFocus:</span> <span className="text-sky-300">"Frontend Engineering"</span>,
                  </div>
                  <div>
                    <span className="text-slate-400">secondaryFocus:</span> <span className="text-sky-300">"UI/UX Design, QA Testing + Backend APIs"</span>,
                  </div>
                  <div>
                    <span className="text-slate-400">clientProject:</span> <span className="text-amber-300">"Memorial Park System & POS"</span>,
                  </div>
                  <div>
                    <span className="text-slate-400">certification:</span> <span className="text-brand-300">"Salesforce Administrator #8162415"</span>,
                  </div>
                  <div>
                    <span className="text-slate-400">status:</span> <span className="text-emerald-400">"Ready for Internship"</span>
                  </div>
                </div>
                <div>&#125;;</div>
              </div>

              {/* Quick Highlight Footer */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <Sparkles className="w-3.5 h-3.5 text-brand-400" />
                  Clean code & visual precision
                </span>
                <span className="font-mono text-slate-500">ISO/IEC 25010</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
