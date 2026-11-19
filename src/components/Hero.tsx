import React from 'react';
import { ArrowRight, Mail, CheckCircle2, ShieldCheck, Layers, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const profileRows: { key: string; value: string; tone: string }[] = [
  { key: 'name', value: PERSONAL_INFO.name, tone: 'text-emerald-300' },
  { key: 'university', value: 'Bulacan State University', tone: 'text-emerald-300' },
  { key: 'degree', value: 'BSIT (Web & Mobile Dev)', tone: 'text-emerald-300' },
  { key: 'primaryFocus', value: 'Frontend Engineering', tone: 'text-sky-300' },
  { key: 'secondaryFocus', value: 'UI/UX Design + Node/SQL APIs', tone: 'text-sky-300' },
  { key: 'clientProject', value: 'Memorial Park System & POS', tone: 'text-amber-200' },
  { key: 'certification', value: 'Salesforce Administrator #8162415', tone: 'text-brand-300' },
  { key: 'status', value: 'Ready for Internship', tone: 'text-emerald-300' },
];

export const Hero: React.FC = () => {
  return (
    <section id="about" className="pb-20 pt-32 md:pb-28 md:pt-40">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Copy */}
          <div className="lg:col-span-7">
            <p className="mb-6 inline-flex items-center gap-2 font-mono text-xs text-slate-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Available for IT / Frontend Internship (2026–2027)
            </p>

            <h1 className="text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl">
              Hi, I'm <span className="text-brand-400">Jesse Mae</span>.
            </h1>
            <h2 className="mt-3 text-lg font-medium text-slate-300 sm:text-xl">
              Front-End Developer with a Designer's Eye & Backend Foundation
            </h2>

            <p className="mt-6 max-w-xl text-[15px] leading-7 text-slate-400 sm:text-base sm:leading-7">
              4th-year BS Information Technology student at <span className="text-slate-200">Bulacan State University</span>.
              Currently leading full-stack development on a real-client web system in{' '}
              <span className="text-slate-200">React, Node.js & MySQL</span>, backed by an editorial publication design
              background and a <span className="text-slate-200">Salesforce Administrator</span> certification.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md bg-brand-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-500"
              >
                Explore Featured Projects
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:border-slate-500 hover:bg-slate-900"
              >
                <Mail className="h-4 w-4 text-slate-400" />
                Contact Jesse
              </a>
            </div>

            <ul className="mt-10 flex flex-col gap-2.5 border-t border-slate-800 pt-6 text-sm text-slate-300 sm:flex-row sm:flex-wrap sm:gap-x-6">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand-400" />
                React & Node.js Capstone PM
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                Salesforce Certified Admin
              </li>
              <li className="flex items-center gap-2">
                <Layers className="h-4 w-4 text-sky-400" />
                CURSOR Layout Artist
              </li>
            </ul>
          </div>

          {/* Profile spec card */}
          <div className="lg:col-span-5">
            <div className="panel overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-800 px-5 py-3 font-mono text-xs text-slate-400">
                <span>developer-profile.ts</span>
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> ready
                </span>
              </div>

              <div className="px-5 py-5 font-mono text-[13px] leading-6 text-slate-300">
                <div>
                  <span className="text-brand-400">const</span> candidate = &#123;
                </div>
                <dl className="pl-4">
                  {profileRows.map((row, i) => (
                    <div key={row.key} className="flex flex-wrap gap-x-2">
                      <dt className="text-slate-400">{row.key}:</dt>
                      <dd className={row.tone}>
                        "{row.value}"{i < profileRows.length - 1 ? ',' : ''}
                      </dd>
                    </div>
                  ))}
                </dl>
                <div>&#125;;</div>
              </div>

              <div className="flex items-center justify-between border-t border-slate-800 px-5 py-3 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-brand-400" />
                  Clean code & visual precision
                </span>
                <span className="font-mono">ISO/IEC 25010</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
