import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { SectionHeader } from './SectionHeader';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="border-t border-slate-800/80 py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeader
          index="03"
          label="Professional History"
          title="Experience & Leadership"
          description="From technical project management to publication layout and business operations."
        />

        <ol className="relative">
          {EXPERIENCES.map((exp, idx) => (
            <li
              key={idx}
              className="grid grid-cols-1 gap-2 border-t border-slate-800 py-8 first:border-t-0 first:pt-0 md:grid-cols-12 md:gap-8"
            >
              {/* Period */}
              <div className="md:col-span-3">
                <p className="font-mono text-xs text-brand-300 md:pt-1.5">{exp.period}</p>
                <p className="mt-1 hidden text-xs text-slate-500 md:block">{exp.type}</p>
              </div>

              {/* Details */}
              <div className="md:col-span-9">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-semibold text-slate-50">{exp.role}</h3>
                  <span className="text-xs text-slate-500 md:hidden">{exp.type}</span>
                </div>
                <p className="mt-0.5 text-sm text-slate-400">{exp.organization}</p>

                <ul className="mt-4 space-y-2 text-[15px] leading-7 text-slate-300">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx} className="relative pl-5">
                      <span className="absolute left-0 top-[0.8rem] h-px w-2.5 bg-slate-500" />
                      {pt}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {exp.skillsUsed.map((skill) => (
                    <span key={skill} className="tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
