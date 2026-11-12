import React, { useState } from 'react';
import { SkhiladzeHeader } from './SkhiladzeHeader';
import { SkhiladzeMenu } from './SkhiladzeMenu';
import { SkhiladzeFull } from './SkhiladzeFull';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [view, setView] = useState<'featured' | 'full'>('featured');

  return (
    <>
      <SkhiladzeHeader
        onOpenMenu={() => setIsMenuOpen(true)}
        currentView={view}
        onToggleView={() => setView(view === 'featured' ? 'full' : 'featured')}
      />

      <SkhiladzeMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        currentView={view}
        onSelectView={(newView) => setView(newView)}
      />

      <SkhiladzeFull
        isOpen={view === 'full'}
        onClose={() => setView('featured')}
      />
    </>
  );
};
