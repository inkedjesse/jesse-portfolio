import React, { useState } from 'react';
import { PROJECTS, Project } from '../data/portfolioData';
import { FolderGit2, Award, ArrowUpRight, Images } from 'lucide-react';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Full-Stack' | 'Frontend / UI' | 'Client Work'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = filter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-xs font-semibold text-brand-700 dark:text-brand-400 uppercase tracking-wider">
              <FolderGit2 className="w-3.5 h-3.5" /> Proven Track Record
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              Featured Projects &amp; Systems
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl">
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
                    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards List */}
        <div className="space-y-6">
          {filteredProjects.map((project) => {
            const visibleTags = project.tags.slice(0, 5);
            const remainingTagsCount = project.tags.length - visibleTags.length;
            const photoCount = project.gallery?.length ?? 0;

            return (
              <div
                key={project.id}
                className="group relative rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 p-6 sm:p-8 overflow-hidden shadow-lg shadow-slate-200/60 dark:shadow-xl dark:shadow-black/30"
              >
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Overview Column */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-brand-50 dark:bg-brand-500/20 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-500/30">
                        {project.category}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                        Role: <strong className="text-slate-800 dark:text-slate-300 font-medium">{project.role}</strong>
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Compact Tech Tag Pills */}
                    <div className="pt-1 flex flex-wrap gap-1.5">
                      {visibleTags.map(tag => (
                        <span
                          key={tag}
                          className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                      {remainingTagsCount > 0 && (
                        <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400">
                          +{remainingTagsCount} more
                        </span>
                      )}
                    </div>

                    {/* Action Row */}
                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold bg-brand-600 hover:bg-brand-700 dark:bg-brand-500 dark:hover:bg-brand-600 text-white shadow-md shadow-brand-500/20 transition-colors"
                      >
                        <span>View Details</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>

                      {photoCount > 0 && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400">
                          <Images className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
                          {photoCount} {photoCount === 1 ? 'photo' : 'photos'}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Right Callout Card: Compact At a Glance */}
                  <div className="lg:col-span-5 bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 rounded-xl p-5 space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                        <Award className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                        At a Glance
                      </span>
                      <span className={`text-[11px] font-mono ${project.badgeEmphasis ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-600 dark:text-slate-300'}`}>{project.badge}</span>
                    </div>

                    <div className="text-xs text-slate-500 dark:text-slate-400 space-y-2.5">
                      {project.specs.map((spec) => (
                        <div key={spec.label} className="flex justify-between gap-4">
                          <span className="shrink-0">{spec.label}:</span>
                          <span className="text-slate-800 dark:text-slate-300 font-mono text-right">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
