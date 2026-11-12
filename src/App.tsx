import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import { MotionProvider, useMotion } from './context/MotionContext';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { WorkPage } from './pages/WorkPage';
import { CaseStudyPage } from './pages/CaseStudyPage';
import { AboutPage } from './pages/AboutPage';
import { HowIWorkPage } from './pages/HowIWorkPage';
import { SideQuestsPage } from './pages/SideQuestsPage';
import { RecognitionPage } from './pages/RecognitionPage';
import { MetaCaseStudyPage } from './pages/MetaCaseStudyPage';
import { ContactPage } from './pages/ContactPage';

const AppInner: React.FC = () => {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const { motionEnabled } = useMotion();

  // Lenis smooth scroll
  useEffect(() => {
    if (!motionEnabled) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [motionEnabled]);

  return (
    <div className="relative min-h-screen bg-[#0B0B0C] text-[#EDEAE4] overflow-x-hidden flex flex-col justify-between selection:bg-[#FF3B00] selection:text-white">
      {/* Subtle Noise Texture & Vignette */}
      <div className="film-grain" aria-hidden="true" />
      <div className="vignette-overlay" aria-hidden="true" />

      {/* Precision Cursor */}
      <CustomCursor />

      {/* Cinematic Title-Card Preloader (once per session) */}
      {!preloaderDone && <Preloader onComplete={() => setPreloaderDone(true)} />}

      {/* Fixed Editorial Header with Motion Toggle */}
      <Header />

      {/* Main Multi-Page Route Outlet */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/:id" element={<CaseStudyPage />} />
          {/* Legacy route alias */}
          <Route path="/projects" element={<WorkPage />} />
          <Route path="/projects/:id" element={<CaseStudyPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/how-i-work" element={<HowIWorkPage />} />
          <Route path="/side-quests" element={<SideQuestsPage />} />
          <Route path="/recognition" element={<RecognitionPage />} />
          <Route path="/how-this-site-was-made" element={<MetaCaseStudyPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Tasteful 404 Page */}
          <Route
            path="*"
            element={
              <div className="pt-40 pb-24 px-6 max-w-3xl mx-auto text-center space-y-6">
                <div className="font-mono-code text-xs text-[#FF3B00] uppercase tracking-widest">
                  [SYSTEM 404 // SIGNAL LOST]
                </div>
                <h1 className="font-display text-4xl md:text-6xl text-[#EDEAE4]">
                  Zero Signal on this Frequency
                </h1>
                <p className="font-sans text-sm text-[#949089]">
                  The route you requested does not correspond to an active service or case study.
                </p>
              </div>
            }
          />
        </Routes>
      </main>

      {/* Editorial Footer with "psst" Easter Egg */}
      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <MotionProvider>
        <AppInner />
      </MotionProvider>
    </BrowserRouter>
  );
};

export default App;
