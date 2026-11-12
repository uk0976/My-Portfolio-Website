import React from 'react';

interface SkhiladzeViewSwitchProps {
  currentView: 'featured' | 'full';
  onViewChange: (view: 'featured' | 'full') => void;
}

export const SkhiladzeViewSwitch: React.FC<SkhiladzeViewSwitchProps> = ({
  currentView,
  onViewChange,
}) => {
  return (
    <aside className="view" aria-label="View mode">
      <button
        className="view__b"
        type="button"
        data-view="featured"
        aria-pressed={currentView === 'featured'}
        onClick={() => onViewChange('featured')}
      >
        <span className="view__w">Featured</span>
      </button>

      <button
        className="view__b"
        type="button"
        data-view="full"
        aria-pressed={currentView === 'full'}
        aria-controls="full"
        onClick={() => onViewChange('full')}
      >
        <span className="view__w">Full</span>
      </button>

      <span className="view__pt" aria-hidden="true">
        <span className="view__in" />
      </span>
    </aside>
  );
};
