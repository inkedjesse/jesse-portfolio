import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Layout, Server, Palette, ShieldCheck } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

const iconMap: Record<string, React.ElementType> = {
  Layout,
  Server,
  Palette,
  ShieldCheck,
};

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const active = SKILL_CATEGORIES[activeTab];
  const ActiveIcon = iconMap[active.iconName];

  return (
    <section id="skills" className="border-t border-slate-800/80 py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeader
          index="01"
          label="Technical Capabilities"
          title="Balanced Tech Stack: Code + Design"
          description="Front-end centric with practical backend API knowledge, database administration, and publication-level design aesthetics."
        />

        <div className="panel grid grid-cols-1 md:grid-cols-12">
          {/* Category list */}
          <div role="tablist" aria-label="Skill categories" className="flex overflow-x-auto border-b border-slate-800 md:col-span-4 md:flex-col md:border-b-0 md:border-r">
            {SKILL_CATEGORIES.map((cat, idx) => {
              const Icon = iconMap[cat.iconName];
              const selected = activeTab === idx;
              return (
                <button
                  key={cat.title}
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActiveTab(idx)}
                  className={`flex min-w-max items-center gap-3 border-b-2 px-5 py-4 text-left transition-colors md:min-w-0 md:border-b-0 md:border-l-2 ${
                    selected
                      ? 'border-brand-400 bg-slate-800/40 text-slate-50'
                      : 'border-transparent text-slate-400 hover:bg-slate-800/20 hover:text-slate-200'
                  }`}
                >
                  <Icon className={`h-4 w-4 shrink-0 ${selected ? 'text-brand-400' : 'text-slate-500'}`} />
                  <span>
                    <span className="block text-sm font-medium">{cat.title}</span>
                    <span className="hidden font-mono text-xs text-slate-500 md:block">{cat.skills.length} competencies</span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active category */}
          <div role="tabpanel" className="p-6 sm:p-8 md:col-span-8">
            <div className="mb-6">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-50">
                <ActiveIcon className="h-5 w-5 text-brand-400" />
                {active.title}
              </h3>
              <p className="mt-1.5 text-[15px] leading-7 text-slate-400">{active.description}</p>
            </div>

            <ul className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
              {active.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="flex items-center justify-between gap-3 border-b border-slate-800/80 py-3 text-[15px]"
                >
                  <span className={skill.highlight ? 'text-slate-100' : 'text-slate-300'}>{skill.name}</span>
                  {skill.highlight && (
                    <span className="font-mono text-[11px] uppercase tracking-wider text-brand-300">Core</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
