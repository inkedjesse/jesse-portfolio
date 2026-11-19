import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="border-t border-slate-800/80 py-10 text-sm text-slate-400">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 px-5 sm:flex-row sm:items-center sm:px-8">
        <div>
          <p className="font-medium text-slate-200">{PERSONAL_INFO.name}</p>
          <p className="mt-0.5 text-xs text-slate-500">BSIT Student • Bulacan State University</p>
        </div>

        <p className="font-mono text-xs text-slate-500">Built with React, TypeScript & Tailwind CSS</p>

        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 text-xs text-slate-400 transition-colors hover:text-slate-100"
        >
          Back to Top
          <ArrowUp className="h-3.5 w-3.5" />
        </button>
      </div>
    </footer>
  );
};
