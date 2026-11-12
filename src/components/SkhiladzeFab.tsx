import React from 'react';

export const SkhiladzeFab: React.FC = () => {
  return (
    <aside className="fixed bottom-6 right-6 z-40 hidden sm:block" aria-label="Contact">
      <a
        href="mailto:umerkhan0976@gmail.com"
        className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#11151C]/90 backdrop-blur-md border border-white/15 text-xs font-mono-code text-[#F2F2EF] hover:border-[#FB5E28] hover:text-[#FB5E28] transition-all shadow-xl cursor-pointer"
        aria-label="Direct Transmission to Umer Khan"
      >
        <span className="w-2 h-2 rounded-full bg-[#FB5E28] animate-pulse" />
        <span className="uppercase tracking-wider">Transmission</span>
      </a>
    </aside>
  );
};
