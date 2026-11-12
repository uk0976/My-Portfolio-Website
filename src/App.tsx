import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { MotionProvider, useMotion } from './context/MotionContext';
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
import { SkillsPage } from './pages/SkillsPage';
import { MetaCaseStudyPage } from './pages/MetaCaseStudyPage';
import { ContactPage } from './pages/ContactPage';

const AppInner: React.FC = () => {
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

  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="relative min-h-screen bg-[#090C12] text-[#F2F2EF] overflow-x-hidden flex flex-col justify-between selection:bg-[#FB5E28] selection:text-white">
      {/* Subtle Noise Texture & Vignette */}
      <div className="film-grain" aria-hidden="true" />
      <div className="vignette-overlay" aria-hidden="true" />

      {/* Precision Cursor */}
      <CustomCursor />

      {/* Unified Skhiladze Navigation for Subpages */}
      {!isHome && <Header />}

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
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/certificates" element={<RecognitionPage />} />
          <Route path="/achievements" element={<RecognitionPage />} />
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
                <div className="font-mono-code text-xs text-[#FB5E28] uppercase tracking-widest">
                  [SYSTEM 404 // SIGNAL LOST]
                </div>
                <h1 className="font-display text-4xl md:text-6xl text-[#F2F2EF]">
                  Zero Signal on this Frequency
                </h1>
                <p className="font-sans text-sm text-[#9AA0AA]">
                  The route you requested does not correspond to an active service or case study.
                </p>
              </div>
            }
          />
        </Routes>
      </main>

      {/* Editorial Footer for Subpages */}
      {!isHome && <Footer />}
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
