import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Check, Award } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

type Filter = 'All' | 'Full-Stack' | 'Frontend / UI' | 'Client Work';
const FILTERS: Filter[] = ['All', 'Full-Stack', 'Frontend / UI', 'Client Work'];

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<Filter>('All');

  const filteredProjects = filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="border-t border-slate-800/80 py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeader
          index="02"
          label="Proven Track Record"
          title="Featured Projects & Systems"
          description="Real-world systems for clients, editorial layouts for university publications, and business growth projects."
        >
          <div className="flex flex-wrap gap-1 rounded-md border border-slate-800 bg-slate-900/60 p-1">
            {FILTERS.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                aria-pressed={filter === cat}
                className={`rounded px-3 py-1.5 text-xs font-medium transition-colors ${
                  filter === cat ? 'bg-slate-700/70 text-slate-50' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </SectionHeader>

        <div className="space-y-6">
          {filteredProjects.map((project, idx) => (
            <article key={project.id} className="panel p-6 transition-colors hover:border-slate-700 sm:p-8">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                {/* Overview */}
                <div className="lg:col-span-8">
                  <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs">
                    <span className="text-slate-500">{String(idx + 1).padStart(2, '0')}</span>
                    <span className="text-brand-300">{project.category}</span>
                    <span className="text-slate-600">/</span>
                    <span className="text-slate-400">
                      Role: <span className="text-slate-300">{project.role}</span>
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold leading-snug tracking-tight text-slate-50">{project.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{project.subtitle}</p>

                  <p className="mt-4 text-[15px] leading-7 text-slate-300">{project.description}</p>

                  <h4 className="mb-3 mt-6 font-mono text-xs uppercase tracking-[0.14em] text-slate-400">
                    Key Contributions & Impact:
                  </h4>
                  <ul className="space-y-2.5 text-[15px] leading-6 text-slate-300">
                    {project.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex gap-3">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-brand-400" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Spec sidebar */}
                <aside className="border-t border-slate-800 pt-6 text-sm lg:col-span-4 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                  <div className="mb-4 flex items-center justify-between font-mono text-xs">
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <Award className="h-4 w-4 text-amber-300" />
                      At a Glance
                    </span>
                    <span className={project.badgeEmphasis ? 'text-emerald-400' : 'text-slate-300'}>{project.badge}</span>
                  </div>

                  <p className="text-xs text-slate-400">Project Highlights:</p>
                  <p className="mt-1.5 leading-6 text-slate-200">{project.metrics}</p>

                  <dl className="mt-6 space-y-2.5 border-t border-slate-800 pt-4 text-xs">
                    {project.specs.map((spec) => (
                      <div key={spec.label} className="flex justify-between gap-4">
                        <dt className="shrink-0 text-slate-400">{spec.label}:</dt>
                        <dd className="text-right font-mono text-slate-300">{spec.value}</dd>
                      </div>
                    ))}
                  </dl>
                </aside>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
