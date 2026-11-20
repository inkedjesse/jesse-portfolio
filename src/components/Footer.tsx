import React from 'react';
import { ArrowUp, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 py-12 text-slate-600 dark:text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Name & Built Info */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-brand-50 dark:bg-brand-500/10 border border-brand-200 dark:border-brand-500/20 flex items-center justify-center text-brand-600 dark:text-brand-400">
            <Code2 className="w-4 h-4" />
          </div>
          <div>
            <div className="text-slate-900 dark:text-slate-200 font-semibold text-sm">
              {PERSONAL_INFO.name}
            </div>
            <div className="text-slate-500">
              BSIT Student • Bulacan State University
            </div>
          </div>
        </div>

        {/* Center: Tech tags */}
        <div className="text-center text-slate-500 font-mono">
          Built with React, TypeScript &amp; Tailwind CSS
        </div>

        {/* Right Side: Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 transition-colors"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
};
