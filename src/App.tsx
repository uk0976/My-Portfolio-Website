import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectSection } from './components/ProjectSection';
import { ProjectModal } from './components/ProjectModal';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { RecognitionSection } from './components/RecognitionSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import type { Project } from './data/projects';

export const App: React.FC = () => {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSection, setActiveSection] = useState('hero');

  // Smooth scroll with Lenis
  useEffect(() => {
    // Respect reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#09090B] text-[#EDEAE4] overflow-x-hidden">
      {/* Subtle Procedural Film Grain Overlay */}
      <div className="film-grain" aria-hidden="true" />
      {/* Soft Vignette Overlay */}
      <div className="vignette-overlay" aria-hidden="true" />

      {/* Custom Precision Cursor */}
      <CustomCursor />

      {/* Cinematic Title Preloader */}
      {!preloaderDone && <Preloader onComplete={() => setPreloaderDone(true)} />}

      {/* Editorial Sticky Header */}
      <Header activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Experience Stream */}
      <main>
        <Hero
          onExploreWork={() => handleNavigate('work')}
          onOpenContact={() => handleNavigate('contact')}
        />
        <ProjectSection onSelectProject={(p) => setSelectedProject(p)} />
        <AboutSection />
        <SkillsSection />
        <RecognitionSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Full-Screen Project Case Study Specification Drawer */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default App;
