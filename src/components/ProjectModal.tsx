import React, { useEffect, useState } from 'react';
import { Project } from '../data/portfolioData';
import {
  X,
  CheckCircle,
  Award,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  Images,
  Maximize2,
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const gallery = project?.gallery ?? [];
  const hasGallery = gallery.length > 0;
  const activeImage = hasGallery ? gallery[activeImageIndex] ?? gallery[0] : null;

  useEffect(() => {
    setActiveImageIndex(0);
    setLightboxOpen(false);
  }, [project?.id]);

  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (lightboxOpen) {
          setLightboxOpen(false);
        } else {
          onClose();
        }
      } else if (e.key === 'ArrowRight' && gallery.length > 1) {
        setActiveImageIndex((prev) => (prev + 1) % gallery.length);
      } else if (e.key === 'ArrowLeft' && gallery.length > 1) {
        setActiveImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, lightboxOpen, gallery.length, onClose]);

  if (!project) return null;

  const showPrevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  const showNextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % gallery.length);
  };

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 backdrop-blur-sm"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`modal-title-${project.id}`}
      >
        <div
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Sticky Modal Header */}
          <div className="sticky top-0 z-20 flex items-start justify-between gap-4 px-6 py-5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
            <div className="space-y-1.5 min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-brand-50 dark:bg-brand-500/20 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-500/30">
                  {project.category}
                </span>
                <span
                  className={`text-xs font-mono ${
                    project.badgeEmphasis
                      ? 'text-emerald-600 dark:text-emerald-400'
                      : 'text-slate-600 dark:text-slate-300'
                  }`}
                >
                  {project.badge}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  • Role: <strong className="text-slate-800 dark:text-slate-200 font-medium">{project.role}</strong>
                </span>
              </div>

              <h3
                id={`modal-title-${project.id}`}
                className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-snug"
              >
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                {project.subtitle}
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close project details"
              className="shrink-0 p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-8">
            {/* Overview & Highlights Summary */}
            <div className="space-y-4">
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.description}
              </p>

              {project.metrics && (
                <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800">
                  <Award className="w-5 h-5 text-amber-500 dark:text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Project Highlights
                    </div>
                    <p className="text-sm font-medium text-slate-800 dark:text-slate-200 mt-0.5 leading-relaxed">
                      {project.metrics}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Key Contributions & Impact */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Key Contributions &amp; Impact
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-700 dark:text-slate-300">
                {project.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-brand-600 dark:text-brand-400 shrink-0 mt-1" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Supporting Evidence / Photos Gallery */}
            {hasGallery && activeImage && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Images className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                    Supporting Evidence &amp; Photos
                  </h4>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    {activeImageIndex + 1} / {gallery.length}
                  </span>
                </div>

                {/* Main Image Container */}
                <div className="relative rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setLightboxOpen(true)}
                    className="group/img relative w-full flex items-center justify-center focus:outline-none"
                    aria-label="View image full size"
                  >
                    <img
                      src={activeImage.src}
                      alt={activeImage.alt}
                      className="w-full max-h-[420px] object-contain"
                    />
                    <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-slate-900/80 text-white opacity-80 group-hover/img:opacity-100 transition-opacity">
                      <Maximize2 className="w-3.5 h-3.5" />
                      Expand
                    </span>
                  </button>

                  {gallery.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={showPrevImage}
                        aria-label="Previous photo"
                        className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/75 hover:bg-slate-900 text-white transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        type="button"
                        onClick={showNextImage}
                        aria-label="Next photo"
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/75 hover:bg-slate-900 text-white transition-colors"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}
                </div>

                {activeImage.caption && (
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 text-center">
                    {activeImage.caption}
                  </p>
                )}

                {/* Thumbnail Strip */}
                {gallery.length > 1 && (
                  <div className="flex gap-2.5 overflow-x-auto pb-1">
                    {gallery.map((img, idx) => (
                      <button
                        key={img.src + idx}
                        type="button"
                        onClick={() => setActiveImageIndex(idx)}
                        aria-label={`Select photo ${idx + 1}: ${img.alt}`}
                        className={`shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 bg-slate-100 dark:bg-slate-950 transition-all ${
                          idx === activeImageIndex
                            ? 'border-brand-500 ring-2 ring-brand-500/30'
                            : 'border-slate-200 dark:border-slate-800 opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Specs Grid & Tags */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-200 dark:border-slate-800">
              <div className="space-y-2.5">
                <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Project Details
                </h4>
                <div className="rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 p-4 space-y-2 text-xs">
                  {project.specs.map((spec) => (
                    <div key={spec.label} className="flex justify-between gap-4">
                      <span className="text-slate-500 dark:text-slate-400 shrink-0">{spec.label}:</span>
                      <span className="text-slate-800 dark:text-slate-200 font-mono text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2.5">
                <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Technologies &amp; Skills
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {(project.liveUrl || project.githubUrl) && (
                  <div className="pt-3 flex flex-wrap gap-2.5">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-brand-600 hover:bg-brand-700 dark:bg-brand-500 dark:hover:bg-brand-600 text-white transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        Source Code
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Size Lightbox */}
      {lightboxOpen && activeImage && (
        <div
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center p-4 sm:p-8 bg-slate-950/95"
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Full size photo preview"
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close full size preview"
            className="absolute top-4 right-4 p-2.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div
            className="relative max-w-6xl w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="max-h-[82vh] w-auto max-w-full object-contain rounded-lg"
            />

            {gallery.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={showPrevImage}
                  aria-label="Previous photo"
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/85 hover:bg-slate-800 text-white border border-slate-700 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  type="button"
                  onClick={showNextImage}
                  aria-label="Next photo"
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/85 hover:bg-slate-800 text-white border border-slate-700 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>

          {activeImage.caption && (
            <p className="mt-4 text-sm text-slate-300 text-center max-w-2xl">
              {activeImage.caption}
            </p>
          )}
        </div>
      )}
    </>
  );
};
