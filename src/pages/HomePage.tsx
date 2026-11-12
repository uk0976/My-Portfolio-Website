import React, { useState } from 'react';
import { SkhiladzeDialEnter } from '../components/SkhiladzeDialEnter';
import { SkhiladzeHeader } from '../components/SkhiladzeHeader';
import { SkhiladzeHero, type HeroProject } from '../components/SkhiladzeHero';
import { SkhiladzeMake } from '../components/SkhiladzeMake';
import { BlueprintLiveReveal } from '../components/BlueprintLiveReveal';
import { SkhiladzeAbout } from '../components/SkhiladzeAbout';
import { SkhiladzeFull } from '../components/SkhiladzeFull';
import { SkhiladzeViewSwitch } from '../components/SkhiladzeViewSwitch';
import { SkhiladzeFab } from '../components/SkhiladzeFab';
import { SkhiladzeMenu } from '../components/SkhiladzeMenu';
import { SkhiladzeViewer } from '../components/SkhiladzeViewer';

export const HomePage: React.FC = () => {
  const [view, setView] = useState<'featured' | 'full'>('featured');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeViewerProject, setActiveViewerProject] = useState<HeroProject | null>(null);
  const [showDial, setShowDial] = useState<boolean>(() => {
    return sessionStorage.getItem('skh-entered') !== '1';
  });

  return (
    <div className="relative min-h-screen bg-[#090C12] text-[#F2F2EF] overflow-x-hidden selection:bg-[#FB5E28] selection:text-white">
      {/* 1. Signature Radial Dial Intro Entrance (from video frame_004s.jpg & frame_140s.jpg) */}
      {showDial && (
        <SkhiladzeDialEnter
          onEnter={() => {
            setShowDial(false);
            sessionStorage.setItem('skh-entered', '1');
          }}
        />
      )}

      {/* 2. Top Navigation Bar (.bar) with all proper routes + Featured. Full toggle */}
      <SkhiladzeHeader
        onOpenMenu={() => setIsMenuOpen(true)}
        currentView={view}
        onToggleView={() => setView(view === 'featured' ? 'full' : 'featured')}
      />

      {/* 3. Skhiladze Perspective Tunnel Corridor & Central Project Gate */}
      <SkhiladzeHero
        onOpenViewer={(project) => setActiveViewerProject(project)}
      />

      {/* 4. Skhiladze "What I make" Section (.make) with 6 Categories */}
      <SkhiladzeMake />

      {/* 5. Engineering Craft: Blueprint-to-Live Reveal */}
      <BlueprintLiveReveal />

      {/* 6. Skhiladze "About" Section (.op) with Horizontal Curving Timeline String */}
      <SkhiladzeAbout />

      {/* 7. Floating Bottom View Switcher [Featured | All Work (16+)] */}
      <SkhiladzeViewSwitch
        currentView={view}
        onViewChange={(newView) => setView(newView)}
      />

      {/* 8. Floating Direct Transmission Action */}
      <SkhiladzeFab />

      {/* 9. Fullscreen Slide-Down Menu with All Proper Navigation Links */}
      <SkhiladzeMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        currentView={view}
        onSelectView={(newView) => setView(newView)}
      />

      {/* 10. All Work Full Directory Modal */}
      <SkhiladzeFull
        isOpen={view === 'full'}
        onClose={() => setView('featured')}
      />

      {/* 11. Project Theater Viewer Dialog */}
      <SkhiladzeViewer
        project={activeViewerProject}
        onClose={() => setActiveViewerProject(null)}
      />
    </div>
  );
};
