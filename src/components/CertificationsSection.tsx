import React from 'react';
import { CERTIFICATIONS, EDUCATION } from '../data/portfolioData';
import { Award, GraduationCap, ShieldCheck, CheckCircle2, BookOpen } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Education */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-semibold text-brand-400 uppercase tracking-wider">
              <GraduationCap className="w-3.5 h-3.5" /> Academic Background
            </div>
            
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Education
            </h2>

            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-4 shadow-lg">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {EDUCATION.institution}
                  </h3>
                  <div className="text-sm font-semibold text-brand-400 mt-0.5">
                    {EDUCATION.degree}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    {EDUCATION.major}
                  </div>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                  {EDUCATION.graduation}
                </span>
              </div>

              <div className="pt-4 border-t border-slate-800/80 space-y-2.5">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Relevant Coursework:
                </div>
                <div className="grid grid-cols-1 gap-2 text-xs text-slate-300">
                  {EDUCATION.coursework.map((course, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-400" />
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Certifications */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" /> Official Credentials
            </div>
            
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Certifications & Training
            </h2>

            <div className="space-y-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/80 border border-slate-800 hover:border-slate-700 rounded-xl p-5 sm:p-6 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                      <h3 className="font-bold text-white text-base">
                        {cert.name}
                      </h3>
                    </div>
                    <div className="text-xs sm:text-sm text-slate-400 pl-7">
                      Issued by <span className="text-slate-300 font-medium">{cert.issuer}</span>
                    </div>
                    {cert.credentialId && (
                      <div className="text-xs font-mono text-brand-300 pl-7 flex items-center gap-2">
                        <span>Credential ID:</span>
                        <span className="bg-brand-500/10 border border-brand-500/20 px-2 py-0.5 rounded text-brand-300">
                          {cert.credentialId}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="sm:text-right shrink-0 pl-7 sm:pl-0">
                    <span className="text-xs font-mono text-slate-400 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
                      {cert.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
