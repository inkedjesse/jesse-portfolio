import React from 'react';

interface SectionHeaderProps {
  index: string;
  label: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}

/** Consistent, left-aligned section heading used across the page. */
export const SectionHeader: React.FC<SectionHeaderProps> = ({ index, label, title, description, children }) => (
  <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
    <div className="max-w-2xl">
      <p className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.16em] text-brand-400">
        <span className="text-slate-500">{index}</span>
        <span className="h-px w-8 bg-slate-700" />
        <span>{label}</span>
      </p>
      <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">{title}</h2>
      {description && <p className="mt-3 text-[15px] leading-7 text-slate-400">{description}</p>}
    </div>
    {children}
  </div>
);
