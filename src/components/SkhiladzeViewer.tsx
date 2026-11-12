import React from 'react';
import type { HeroProject } from './SkhiladzeHero';

interface SkhiladzeViewerProps {
  project: HeroProject | null;
  onClose: () => void;
}

export const SkhiladzeViewer: React.FC<SkhiladzeViewerProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-[#090C12]/90 backdrop-blur-xl flex items-center justify-center p-6"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl rounded-2xl bg-[#11151C] border border-white/[0.12] p-8 md:p-10 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-6">
          <span className="font-mono-code text-xs text-[#FB5E28] uppercase tracking-wider font-semibold">
            SYSTEM INSPECTION · [{project.number}]
          </span>
          <button
            type="button"
            onClick={onClose}
            className="text-xs font-mono-code uppercase tracking-wider text-[#9AA0AA] hover:text-[#F2F2EF] cursor-pointer"
          >
            Close [×]
          </button>
        </div>

        <h2 className="font-display text-3xl md:text-4xl font-bold text-[#F2F2EF] mb-2">
          {project.name}
        </h2>

        <p className="font-mono-code text-xs text-[#5C626D] mb-4">
          {project.label} · {project.metrics}
        </p>

        <p className="font-sans text-base text-[#9AA0AA] leading-relaxed mb-6">
          {project.tagline}
        </p>

        <div className="p-4 rounded-xl bg-[#090C12] border border-white/[0.06] mb-6">
          <span className="font-mono-code text-[10px] text-[#5C626D] uppercase tracking-widest block mb-1">
            STACK
          </span>
          <span className="font-mono-code text-xs text-[#F2F2EF]">
            {project.tech}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/[0.08]">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-[#FB5E28] hover:bg-[#FF7A4D] text-white font-mono-code text-xs uppercase tracking-wider font-semibold transition-all shadow-lg cursor-pointer"
            >
              Launch Live App ↗
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-white/15 hover:border-white/40 bg-white/[0.03] text-[#F2F2EF] font-mono-code text-xs uppercase tracking-wider transition-all cursor-pointer"
            >
              GitHub Repository ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
