import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// Standalone Multi-Page Views
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { AboutPage } from './pages/AboutPage';
import { SkillsPage } from './pages/SkillsPage';
import { RecognitionPage } from './pages/RecognitionPage';
import { ContactPage } from './pages/ContactPage';

export const App: React.FC = () => {
  const [preloaderDone, setPreloaderDone] = useState(false);

  // Smooth scroll via Lenis across multi-page transitions
  useEffect(() => {
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

  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-[#09090B] text-[#EDEAE4] overflow-x-hidden flex flex-col justify-between">
        {/* Subtle Film Grain Noise */}
        <div className="film-grain" aria-hidden="true" />
        {/* Soft Vignette Filter */}
        <div className="vignette-overlay" aria-hidden="true" />

        {/* Custom Precision Cursor */}
        <CustomCursor />

        {/* Cinematic First-Session Preloader */}
        {!preloaderDone && <Preloader onComplete={() => setPreloaderDone(true)} />}

        {/* Sticky Editorial Multi-Page Navigation Header */}
        <Header />

        {/* Dynamic Route View */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/recognition" element={<RecognitionPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Catch-all 404 Fallback */}
            <Route
              path="*"
              element={
                <div className="pt-40 pb-24 px-6 max-w-3xl mx-auto text-center space-y-6">
                  <div className="font-mono-code text-xs text-[#FF3B00] uppercase tracking-widest">
                    [SYSTEM 404 // NOT FOUND]
                  </div>
                  <h1 className="font-display text-4xl md:text-6xl text-[#EDEAE4]">
                    Page Does Not Exist
                  </h1>
                  <p className="font-sans text-sm text-[#949089]">
                    The requested route is outside the active monograph index.
                  </p>
                </div>
              }
            />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
