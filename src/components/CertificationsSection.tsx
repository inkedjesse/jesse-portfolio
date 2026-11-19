import React from 'react';
import { CERTIFICATIONS, EDUCATION } from '../data/portfolioData';
import { ShieldCheck } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="border-t border-slate-800/80 py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Education */}
          <div className="lg:col-span-5">
            <SectionHeader index="04" label="Academic Background" title="Education" />

            <div className="panel p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-slate-50">{EDUCATION.institution}</h3>
                <span className="shrink-0 font-mono text-xs text-slate-400">{EDUCATION.graduation}</span>
              </div>
              <p className="mt-1 text-[15px] text-slate-200">{EDUCATION.degree}</p>
              <p className="mt-0.5 text-sm text-slate-400">{EDUCATION.major}</p>

              <div className="mt-6 border-t border-slate-800 pt-5">
                <h4 className="mb-3 font-mono text-xs uppercase tracking-[0.14em] text-slate-400">Relevant Coursework:</h4>
                <ul className="space-y-2 text-sm text-slate-300">
                  {EDUCATION.coursework.map((course, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="h-1 w-1 rounded-full bg-brand-400" />
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="lg:col-span-7">
            <SectionHeader index="05" label="Official Credentials" title="Certifications & Training" />

            <ul className="panel divide-y divide-slate-800">
              {CERTIFICATIONS.map((cert, idx) => (
                <li key={idx} className="flex flex-col gap-3 p-6 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex gap-3">
                    <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                    <div>
                      <h3 className="text-[15px] font-semibold leading-6 text-slate-50">{cert.name}</h3>
                      <p className="mt-1 text-sm text-slate-400">
                        Issued by <span className="text-slate-300">{cert.issuer}</span>
                      </p>
                      {cert.credentialId && (
                        <p className="mt-2 font-mono text-xs text-slate-400">
                          Credential ID: <span className="text-brand-300">{cert.credentialId}</span>
                        </p>
                      )}
                    </div>
                  </div>
                  <span className="shrink-0 pl-8 font-mono text-xs text-slate-400 sm:pl-0 sm:pt-1">{cert.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
