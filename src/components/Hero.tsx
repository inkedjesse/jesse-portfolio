import React from 'react';
import { ArrowRight, Mail, Sparkles, CheckCircle2, ShieldCheck, Layers, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Copy */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 border border-brand-500/30 text-xs font-medium text-slate-700 dark:text-slate-300 shadow-sm backdrop-blur-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for IT / Frontend &amp; QA Internship (2026–2027)</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Hi, I'm <span className="text-brand-600 dark:text-brand-400">Jesse Mae</span>.
              </h1>
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300">
                Front-End Developer with a Designer's Eye &amp; Backend Foundation
              </h2>
            </div>

            {/* Subtitle / Bio */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
              4th-year BS Information Technology student at <strong className="text-slate-900 dark:text-slate-200">Bulacan State University</strong>. 
              Led full-stack development on a real-client web system in <span className="text-brand-600 dark:text-brand-300 font-medium">React, Vite, Firebase &amp; Leaflet.js</span>, 
              backed by an editorial publication design background and a <span className="text-emerald-600 dark:text-emerald-400 font-medium">Salesforce Administrator</span> certification.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm bg-brand-600 hover:bg-brand-700 dark:bg-brand-500 dark:hover:bg-brand-600 text-white shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-0.5 transition-all"
              >
                <span>Explore Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm bg-white hover:bg-slate-100 dark:bg-slate-900/80 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm dark:shadow-none hover:-translate-y-0.5 transition-all"
              >
                <Mail className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                <span>Contact Jesse</span>
              </a>
            </div>

            {/* Quick Feature Badges */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-700 dark:text-slate-400">
              <div className="flex items-center gap-2 bg-white/80 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/60 rounded-lg p-2.5 shadow-sm dark:shadow-none">
                <CheckCircle2 className="w-4 h-4 text-brand-600 dark:text-brand-400 shrink-0" />
                <span>React &amp; Firebase Capstone PM</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/60 rounded-lg p-2.5 shadow-sm dark:shadow-none">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Salesforce Certified Admin</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/60 rounded-lg p-2.5 shadow-sm dark:shadow-none">
                <Layers className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" />
                <span>CURSOR Layout Artist</span>
              </div>
            </div>

          </div>

          {/* Right Visual Card: Interactive Developer Profile Spec */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-xl shadow-slate-200/70 dark:shadow-2xl dark:shadow-black/50 overflow-hidden">
              
              {/* Terminal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 font-mono">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <span className="text-slate-500">developer-profile.ts</span>
                <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400"></span> ready
                </span>
              </div>

              {/* Profile Portrait & Identity */}
              <div className="py-5 border-b border-slate-200 dark:border-slate-800/80 flex items-center gap-4 sm:gap-5">
                <div className="p-[2px] rounded-2xl bg-brand-600 dark:bg-brand-500 shadow-lg shadow-brand-500/20 shrink-0">
                  <img
                    src="/profile.jpg"
                    alt={PERSONAL_INFO.name}
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-[14px] object-cover object-top bg-black block"
                  />
                </div>
                <div className="min-w-0 space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-tight truncate">
                    {PERSONAL_INFO.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-brand-600 dark:text-brand-300 leading-snug">
                    Frontend Developer • UI/UX • QA
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 flex items-center gap-1.5 pt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0" />
                    <span>{PERSONAL_INFO.location}</span>
                  </p>
                </div>
              </div>

              {/* Code Snippet Spec */}
              <div className="py-4 font-mono text-xs sm:text-sm text-slate-800 dark:text-slate-300 space-y-3 leading-relaxed">
                <div>
                  <span className="text-brand-600 dark:text-brand-400">const</span> candidate = &#123;
                </div>
                <div className="pl-4 space-y-1">
                  <div>
                    <span className="text-slate-500 dark:text-slate-400">name:</span> <span className="text-emerald-700 dark:text-emerald-300">"{PERSONAL_INFO.name}"</span>,
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400">university:</span> <span className="text-emerald-700 dark:text-emerald-300">"Bulacan State University"</span>,
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400">degree:</span> <span className="text-emerald-700 dark:text-emerald-300">"BSIT (Web &amp; Mobile Dev)"</span>,
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400">primaryFocus:</span> <span className="text-sky-700 dark:text-sky-300">"Frontend Engineering"</span>,
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400">secondaryFocus:</span> <span className="text-sky-700 dark:text-sky-300">"UI/UX Design, QA Testing + Backend APIs"</span>,
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400">clientProject:</span> <span className="text-amber-700 dark:text-amber-300">"Memorial Park System &amp; POS"</span>,
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400">certification:</span> <span className="text-brand-700 dark:text-brand-300">"Salesforce Administrator #8162415"</span>,
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400">status:</span> <span className="text-emerald-600 dark:text-emerald-400">"Ready for Internship"</span>
                  </div>
                </div>
                <div>&#125;;</div>
              </div>

              {/* Quick Highlight Footer */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                  <Sparkles className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
                  Clean code &amp; visual precision
                </span>
                <span className="font-mono text-slate-400 dark:text-slate-500">ISO/IEC 25010</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
