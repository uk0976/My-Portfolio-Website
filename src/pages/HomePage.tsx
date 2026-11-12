import React, { useState } from 'react';
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

  return (
    <div className="relative min-h-screen bg-[#090C12] text-[#F2F2EF] overflow-x-hidden selection:bg-[#FB5E28] selection:text-white">
      {/* Skhiladze Top Bar (.bar) */}
      <SkhiladzeHeader onOpenMenu={() => setIsMenuOpen(true)} />

      {/* Skhiladze Hero Gate (.hero) with Perspective Corridor & Project Channels */}
      <SkhiladzeHero
        onOpenViewer={(project) => setActiveViewerProject(project)}
      />

      {/* Skhiladze "What I make" Section (.make) */}
      <SkhiladzeMake />

      {/* Engineering Craft: Blueprint-to-Live Reveal */}
      <BlueprintLiveReveal />

      {/* Skhiladze "About" Section (.op) & Trajectory */}
      <SkhiladzeAbout />

      {/* Floating Bottom View Toggle [Featured | Full] */}
      <SkhiladzeViewSwitch
        currentView={view}
        onViewChange={(newView) => setView(newView)}
      />

      {/* Floating Direct Transmission Button */}
      <SkhiladzeFab />

      {/* Fullscreen Slide-Down Menu */}
      <SkhiladzeMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        currentView={view}
        onSelectView={(newView) => setView(newView)}
      />

      {/* All Work Full Directory Modal */}
      <SkhiladzeFull
        isOpen={view === 'full'}
        onClose={() => setView('featured')}
      />

      {/* Theater Project Viewer Dialog */}
      <SkhiladzeViewer
        project={activeViewerProject}
        onClose={() => setActiveViewerProject(null)}
      />
    </div>
  );
};
