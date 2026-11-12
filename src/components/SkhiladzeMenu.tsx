import React from 'react';
import { useMotion } from '../context/MotionContext';

interface SkhiladzeMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectView: (view: 'featured' | 'full') => void;
  currentView: 'featured' | 'full';
}

export const SkhiladzeMenu: React.FC<SkhiladzeMenuProps> = ({
  isOpen,
  onClose,
  onSelectView,
  currentView,
}) => {
  const { motionEnabled, toggleMotion } = useMotion();

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-[#090C12]/95 backdrop-blur-xl flex flex-col justify-between p-6 md:p-12 overflow-y-auto"
    >
      {/* Top Header */}
      <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <span className="font-display font-bold text-xl text-[#F2F2EF]">
            Umer Khan
          </span>
          <span className="w-2 h-2 rounded-full bg-[#FB5E28]" />
        </div>

        <button
          type="button"
          onClick={onClose}
          className="px-4 py-1.5 rounded-full border border-white/20 hover:border-white/50 text-xs font-mono-code uppercase tracking-wider text-[#F2F2EF] cursor-pointer"
        >
          Close [×]
        </button>
      </div>

      {/* Main Navigation with All Categories */}
      <nav className="my-auto py-8">
        <ol className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 list-none p-0 m-0">
          <li>
            <a
              href="#work"
              onClick={onClose}
              className="group flex items-baseline gap-4 text-3xl sm:text-4xl font-display font-bold text-[#F2F2EF] hover:text-[#FB5E28] transition-colors"
            >
              <span className="font-mono-code text-sm text-[#FB5E28]">01</span>
              <span>Work (Featured Systems)</span>
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={onClose}
              className="group flex items-baseline gap-4 text-3xl sm:text-4xl font-display font-bold text-[#F2F2EF] hover:text-[#FB5E28] transition-colors"
            >
              <span className="font-mono-code text-sm text-[#FB5E28]">02</span>
              <span>About &amp; Trajectory</span>
            </a>
          </li>
          <li>
            <a
              href="/skills"
              onClick={onClose}
              className="group flex items-baseline gap-4 text-3xl sm:text-4xl font-display font-bold text-[#F2F2EF] hover:text-[#FB5E28] transition-colors"
            >
              <span className="font-mono-code text-sm text-[#FB5E28]">03</span>
              <span>Technical Skills Index</span>
            </a>
          </li>
          <li>
            <a
              href="/certificates"
              onClick={onClose}
              className="group flex items-baseline gap-4 text-3xl sm:text-4xl font-display font-bold text-[#F2F2EF] hover:text-[#FB5E28] transition-colors"
            >
              <span className="font-mono-code text-sm text-[#FB5E28]">04</span>
              <span>Certificates &amp; Awards</span>
            </a>
          </li>
          <li>
            <a
              href="/how-i-work"
              onClick={onClose}
              className="group flex items-baseline gap-4 text-2xl sm:text-3xl font-display font-bold text-[#9AA0AA] hover:text-[#F2F2EF] transition-colors"
            >
              <span className="font-mono-code text-sm text-[#5C626D]">05</span>
              <span>How I Work</span>
            </a>
          </li>
          <li>
            <a
              href="/side-quests"
              onClick={onClose}
              className="group flex items-baseline gap-4 text-2xl sm:text-3xl font-display font-bold text-[#9AA0AA] hover:text-[#F2F2EF] transition-colors"
            >
              <span className="font-mono-code text-sm text-[#5C626D]">06</span>
              <span>Side Quests</span>
            </a>
          </li>
          <li>
            <a
              href="/contact"
              onClick={onClose}
              className="group flex items-baseline gap-4 text-2xl sm:text-3xl font-display font-bold text-[#9AA0AA] hover:text-[#F2F2EF] transition-colors"
            >
              <span className="font-mono-code text-sm text-[#5C626D]">07</span>
              <span>Contact &amp; Transmission</span>
            </a>
          </li>
          <li>
            <a
              href="/Umerkhan_Resume.pdf"
              download
              onClick={onClose}
              className="group flex items-baseline gap-4 text-2xl sm:text-3xl font-display font-bold text-[#9AA0AA] hover:text-[#FB5E28] transition-colors"
            >
              <span className="font-mono-code text-sm text-[#5C626D]">08</span>
              <span>Resume (PDF) ↗</span>
            </a>
          </li>
        </ol>
      </nav>

      {/* Bottom Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-white/[0.08] font-mono-code text-xs">
        <div className="flex flex-wrap items-center gap-6 text-[#9AA0AA]">
          <a href="mailto:umerkhan0976@gmail.com" className="hover:text-[#F2F2EF] transition-colors">
            umerkhan0976@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/umer-khan-57a458288/" target="_blank" rel="noopener noreferrer" className="hover:text-[#F2F2EF] transition-colors">
            LinkedIn
          </a>
          <a href="https://github.com/uk0976" target="_blank" rel="noopener noreferrer" className="hover:text-[#F2F2EF] transition-colors">
            GitHub
          </a>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={toggleMotion}
            className="text-[#9AA0AA] hover:text-[#F2F2EF] transition-colors cursor-pointer"
          >
            {motionEnabled ? 'Motion: On' : 'Motion: Off'}
          </button>
          <span>·</span>
          <button
            type="button"
            onClick={() => {
              onSelectView(currentView === 'featured' ? 'full' : 'featured');
              onClose();
            }}
            className="text-[#FB5E28] hover:underline cursor-pointer"
          >
            {currentView === 'featured' ? 'View: All Work (16+)' : 'View: Featured'}
          </button>
        </div>
      </div>
    </div>
  );
};
