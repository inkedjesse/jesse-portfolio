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
    <div className="relative isolate flex min-h-screen flex-col bg-[#030712] font-sans text-slate-200 antialiased">
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
