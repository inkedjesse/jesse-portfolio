import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { ExternalLink, CheckCircle, Sparkles, FolderGit2, Layers, Award } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Full-Stack' | 'Frontend / UI' | 'Client Work'>('All');

  const filteredProjects = filter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-brand-400 uppercase tracking-wider">
              <FolderGit2 className="w-3.5 h-3.5" /> Proven Track Record
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Featured Projects & Systems
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl">
              Real-world systems for clients, editorial layouts for university publications, and business growth projects.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {(['All', 'Full-Stack', 'Frontend / UI', 'Client Work'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  filter === cat
                    ? 'bg-brand-500 text-white shadow-md shadow-brand-500/20'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards List */}
        <div className="space-y-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="group relative rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all duration-300 p-6 sm:p-8 overflow-hidden shadow-xl"
            >
              {/* Subtle Ambient Background Gradient */}
              <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${project.imageGradient} opacity-20 blur-3xl pointer-events-none group-hover:opacity-30 transition-opacity`} />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Overview Column */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-brand-500/20 text-brand-300 border border-brand-500/30">
                      {project.category}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      Role: <strong className="text-slate-300 font-medium">{project.role}</strong>
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-brand-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-slate-400 mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Key Contributions & Impact:
                    </div>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                      {project.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Tag Pills */}
                  <div className="pt-3 flex flex-wrap gap-1.5">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-950/80 border border-slate-800 text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Callout Card: System Specs & Highlights */}
                <div className="lg:col-span-5 bg-slate-950/80 border border-slate-800 rounded-xl p-5 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <Award className="w-4 h-4 text-amber-400" />
                      Key Benchmark
                    </span>
                    <span className="text-[11px] text-emerald-400 font-mono">Verified Capstone</span>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs text-slate-400">Project Highlights:</div>
                    <div className="text-sm font-medium text-slate-200 bg-slate-900/90 p-3 rounded-lg border border-slate-800/80 leading-relaxed">
                      {project.metrics}
                    </div>
                  </div>

                  <div className="pt-2 text-xs text-slate-400 space-y-2 border-t border-slate-800/60">
                    <div className="flex justify-between">
                      <span>Environment:</span>
                      <span className="text-slate-300 font-mono">Web Application</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Methodology:</span>
                      <span className="text-slate-300 font-mono">Agile Scrum / UAT</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Client Evaluation:</span>
                      <span className="text-emerald-400 font-mono">ISO/IEC 25010</span>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
