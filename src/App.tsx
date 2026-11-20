import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { CertificationsSection } from './components/CertificationsSection';
import { InteractiveContact } from './components/InteractiveContact';
import { Footer } from './components/Footer';

export type Theme = 'dark' | 'light';

export const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      return localStorage.getItem('theme') === 'light' ? 'light' : 'dark';
    } catch {
      return 'dark';
    }
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // Ignore storage failures
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans selection:bg-brand-500 selection:text-white transition-colors duration-200">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main className="flex-1">
        <Hero />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <CertificationsSection />
        <InteractiveContact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
