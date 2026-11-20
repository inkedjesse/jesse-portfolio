import React from 'react';
import { ArrowUp, Code2, Github, Mail, Phone, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/80 text-slate-600 dark:text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        
        {/* Top 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Left: Brand & Summary */}
          <div className="md:col-span-5 space-y-4">
            <a href="#about" className="inline-flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl bg-brand-600 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform duration-200">
                <Code2 className="w-4 h-4" />
              </div>
              <span className="text-base font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                {PERSONAL_INFO.name}
              </span>
            </a>

            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              4th-year BSIT student at Bulacan State University focused on frontend development, UI/UX design, and software quality.
            </p>

            <div className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400 shrink-0" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Middle: Navigation */}
          <div className="md:col-span-4">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">
              Navigation
            </h3>
            <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-y-2.5 gap-x-6 text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Right: Connect & Back to Top */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">
              Connect
            </h3>
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
                className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:border-brand-500/60 hover:text-brand-600 dark:hover:text-brand-400 flex items-center justify-center transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.links.email}
                aria-label="Email"
                title={PERSONAL_INFO.email}
                className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:border-brand-500/60 hover:text-brand-600 dark:hover:text-brand-400 flex items-center justify-center transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/[^0-9+]/g, '')}`}
                aria-label="Phone"
                title={PERSONAL_INFO.phone}
                className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:border-brand-500/60 hover:text-brand-600 dark:hover:text-brand-400 flex items-center justify-center transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="mt-5 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
          <p className="font-mono">Built with React, TypeScript &amp; Tailwind CSS</p>
        </div>

      </div>
    </footer>
  );
};
