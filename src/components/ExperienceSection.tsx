import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { Briefcase, Calendar, CheckCircle, Sparkles } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-900/30 border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-semibold text-brand-400 uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" /> Professional History
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Experience & Leadership
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            From technical project management to publication layout and business operations.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-slate-800 ml-4 sm:ml-32 space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-8 group">
              
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-brand-500 group-hover:scale-125 transition-transform duration-200" />

              {/* Date pill on left for desktop */}
              <div className="sm:absolute sm:-left-36 top-1 text-xs font-mono text-brand-400 font-semibold mb-1 sm:mb-0 sm:text-right sm:w-28">
                {exp.period}
              </div>

              {/* Experience Card */}
              <div className="bg-slate-900/80 border border-slate-800/90 hover:border-slate-700/80 rounded-2xl p-6 sm:p-7 transition-all shadow-md">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-brand-300 transition-colors">
                    {exp.role}
                  </h3>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700 w-fit">
                    {exp.type}
                  </span>
                </div>

                <div className="text-sm font-medium text-brand-400 mb-4">
                  {exp.organization}
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-brand-400 shrink-0 mt-1" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/60">
                  {exp.skillsUsed.map(skill => (
                    <span
                      key={skill}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
