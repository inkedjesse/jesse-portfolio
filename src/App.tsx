import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { CertificationsSection } from './components/CertificationsSection';
import { InteractiveContact } from './components/InteractiveContact';
import { Footer } from './components/Footer';
import { TechBackground } from './components/TechBackground';

export const App: React.FC = () => {
  return (
    <div className="relative isolate min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-brand-500 selection:text-white">
      <TechBackground />
      <Navbar />
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
