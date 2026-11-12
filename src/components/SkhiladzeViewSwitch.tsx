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
    <aside className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40" aria-label="View mode">
      <div className="flex items-center gap-1 p-1 rounded-full bg-[#11151C]/90 backdrop-blur-md border border-white/15 shadow-2xl">
        <button
          type="button"
          onClick={() => onViewChange('featured')}
          className={`px-4 py-1.5 rounded-full font-mono-code text-xs uppercase tracking-wider transition-all cursor-pointer ${
            currentView === 'featured'
              ? 'bg-[#FB5E28] text-white shadow-md font-semibold'
              : 'text-[#9AA0AA] hover:text-[#F2F2EF]'
          }`}
        >
          Featured
        </button>

        <button
          type="button"
          onClick={() => onViewChange('full')}
          className={`px-4 py-1.5 rounded-full font-mono-code text-xs uppercase tracking-wider transition-all cursor-pointer ${
            currentView === 'full'
              ? 'bg-[#FB5E28] text-white shadow-md font-semibold'
              : 'text-[#9AA0AA] hover:text-[#F2F2EF]'
          }`}
        >
          All Work (16+)
        </button>
      </div>
    </aside>
  );
};
