import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Layout, Server, Palette, ShieldCheck, Sparkles } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Layout: <Layout className="w-5 h-5" />,
  Server: <Server className="w-5 h-5" />,
  Palette: <Palette className="w-5 h-5" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5" />,
};

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="py-20 bg-slate-100/70 dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-500/10 border border-brand-200 dark:border-brand-500/20 text-xs font-semibold text-brand-700 dark:text-brand-400 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Technical Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Balanced Tech Stack: Code + Design
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Front-end centric with practical backend API knowledge, database administration, and publication-level design aesthetics.
          </p>
        </div>

        {/* Category Tabs for Mobile & Desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-10">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <button
              key={cat.title}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all duration-200 ${
                activeTab === idx
                  ? 'bg-white dark:bg-slate-800/90 border-brand-500/60 shadow-lg shadow-brand-500/10 text-slate-900 dark:text-white'
                  : 'bg-white/60 dark:bg-slate-950/40 border-slate-200 dark:border-slate-800/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-white dark:hover:bg-slate-900/60'
              }`}
            >
              <div className={`p-2 rounded-lg ${activeTab === idx ? 'bg-brand-500 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'}`}>
                {iconMap[cat.iconName]}
              </div>
              <div>
                <div className="font-semibold text-sm leading-tight">{cat.title}</div>
                <div className="text-xs text-slate-500 hidden sm:block mt-0.5">
                  {cat.skills.length} competencies
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Active Category Display */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-sm dark:shadow-none">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-slate-200 dark:border-slate-800 gap-4">
            <div>
              <div className="flex items-center gap-2 text-brand-600 dark:text-brand-400 font-semibold text-lg">
                {iconMap[SKILL_CATEGORIES[activeTab].iconName]}
                <span>{SKILL_CATEGORIES[activeTab].title}</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                {SKILL_CATEGORIES[activeTab].description}
              </p>
            </div>
          </div>

          {/* Skill Badges Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {SKILL_CATEGORIES[activeTab].skills.map((skill) => (
              <div
                key={skill.name}
                className={`flex items-center justify-between p-3.5 rounded-xl border transition-all ${
                  skill.highlight
                    ? 'bg-brand-50/70 dark:bg-slate-800/60 border-brand-200 dark:border-brand-500/30 text-slate-900 dark:text-white shadow-sm'
                    : 'bg-slate-50 dark:bg-slate-950/60 border-slate-200 dark:border-slate-800/70 text-slate-700 dark:text-slate-300'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div className={`w-2 h-2 rounded-full ${skill.highlight ? 'bg-brand-500 dark:bg-brand-400' : 'bg-slate-400 dark:bg-slate-600'}`} />
                  <span className="font-medium text-sm">{skill.name}</span>
                </div>
                {skill.highlight && (
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-brand-100 dark:bg-brand-500/20 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-500/30">
                    Core
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
