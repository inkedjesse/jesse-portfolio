import React, { useState } from 'react';
import { PROJECTS, Project } from '../data/portfolioData';
import { FolderGit2, Images, Layers } from 'lucide-react';
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

        {/* 3-Column Cover Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const visibleTags = project.tags.slice(0, 4);
            const remainingTagsCount = project.tags.length - visibleTags.length;
            const photoCount = project.gallery?.length ?? 0;
            const coverImage = photoCount > 0 ? project.gallery![0] : null;

            return (
              <article
                key={project.id}
                className="group flex flex-col rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-lg shadow-slate-200/60 dark:shadow-xl dark:shadow-black/30 hover:border-brand-500/40 dark:hover:border-brand-500/40 transition-all"
              >
                {/* Top Cover Thumbnail */}
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  aria-label={`View details and photos for ${project.title}`}
                  className="relative h-48 w-full bg-slate-100 dark:bg-slate-950 overflow-hidden text-left focus:outline-none"
                >
                  {coverImage ? (
                    <>
                      <img
                        src={coverImage.src}
                        alt={coverImage.alt}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                      <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono bg-slate-900/85 text-white">
                        <Images className="w-3 h-3" />
                        {photoCount} {photoCount === 1 ? 'photo' : 'photos'}
                      </span>
                    </>
                  ) : (
                    <div className="w-full h-full bg-slate-100 dark:bg-slate-800/80 flex flex-col items-center justify-center p-6 text-center gap-2.5">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-white dark:bg-slate-900 text-brand-700 dark:text-brand-300 border border-slate-200 dark:border-slate-700">
                        {project.category}
                      </span>
                      <Layers className="w-7 h-7 text-brand-600 dark:text-brand-400" />
                      <span className="text-sm font-semibold text-slate-800 dark:text-slate-100 line-clamp-2">
                        {project.title}
                      </span>
                    </div>
                  )}
                </button>

                {/* Concise Card Body */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug group-hover:text-brand-600 dark:group-hover:text-brand-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-2.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-4">
                    {project.description}
                  </p>

                  {/* Soft Pill Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {visibleTags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs px-2.5 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                    {remainingTagsCount > 0 && (
                      <span className="rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs px-2.5 py-1">
                        +{remainingTagsCount}
                      </span>
                    )}
                  </div>

                  {/* Bottom Pinned Pill CTA */}
                  <div className="mt-auto pt-5">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="rounded-full px-5 py-2 text-xs font-semibold border border-brand-600 dark:border-brand-400 text-brand-600 dark:text-brand-400 hover:bg-brand-600 hover:text-white dark:hover:bg-brand-500 dark:hover:text-white transition-colors"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </article>
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
