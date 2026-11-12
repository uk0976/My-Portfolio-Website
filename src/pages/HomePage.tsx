import React, { useState } from 'react';
import { SkhiladzeHeader } from '../components/SkhiladzeHeader';
import { SkhiladzeHero } from '../components/SkhiladzeHero';
import { SkhiladzeMake } from '../components/SkhiladzeMake';
import { SkhiladzeAbout } from '../components/SkhiladzeAbout';
import { SkhiladzeFull } from '../components/SkhiladzeFull';
import { SkhiladzeViewSwitch } from '../components/SkhiladzeViewSwitch';
import { SkhiladzeFab } from '../components/SkhiladzeFab';
import { SkhiladzeMenu } from '../components/SkhiladzeMenu';
import { SkhiladzeViewer } from '../components/SkhiladzeViewer';

export const HomePage: React.FC = () => {
  const [view, setView] = useState<'featured' | 'full'>('featured');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeViewerProject, setActiveViewerProject] = useState<any | null>(null);

  return (
    <div className="skhiladze-page" style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
      {/* Skhiladze Top Bar (.bar) & Scroll Back Bar (.back) */}
      <SkhiladzeHeader onOpenMenu={() => setIsMenuOpen(true)} />

      {/* Hero Section (.hero) with Central Gate (.gate) and Perspective Corridor (.strip) */}
      <SkhiladzeHero
        onOpenViewer={(project) => setActiveViewerProject(project)}
      />

      {/* "What I make" Section (.make) with Sticky Sidebar and 6 Categories */}
      <SkhiladzeMake
        onOpenViewer={(project) => setActiveViewerProject(project)}
      />

      {/* "About" Section (.op) with Milestone Stage and Skhiladze Conclusion */}
      <SkhiladzeAbout />

      {/* Floating Bottom View Toggle (Featured | Full) */}
      <SkhiladzeViewSwitch
        currentView={view}
        onViewChange={(newView) => setView(newView)}
      />

      {/* Floating Telegram / Contact Pill */}
      <SkhiladzeFab />

      {/* Fullscreen Slide-Down Menu (.menu) */}
      <SkhiladzeMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        currentView={view}
        onSelectView={(newView) => setView(newView)}
      />

      {/* All Work Full Directory Modal (.full) */}
      <SkhiladzeFull
        isOpen={view === 'full'}
        onClose={() => setView('featured')}
      />

      {/* Theater Project Viewer Dialog (.viewer) */}
      <SkhiladzeViewer
        project={activeViewerProject}
        onClose={() => setActiveViewerProject(null)}
      />
    </div>
  );
};
