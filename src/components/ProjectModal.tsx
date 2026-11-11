import React, { useEffect } from 'react';
import type { Project } from '../data/projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] flex justify-end bg-black/80 backdrop-blur-sm transition-opacity duration-300"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
    >
      {/* Sliding Sheet / Drawer */}
      <div className="w-full max-w-3xl h-full bg-[#0D0D10] border-l border-white/10 overflow-y-auto p-6 md:p-12 flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-300">
        <div>
          {/* Top Bar with ESC button */}
          <div className="flex items-center justify-between pb-6 hairline-b font-mono-code text-xs text-[#949089]">
            <div className="flex items-center gap-3">
              <span className="text-[#FF3B00] font-bold">[{project.number}]</span>
              <span>{project.category}</span>
            </div>
            <button
              onClick={onClose}
              className="flex items-center gap-2 hover:text-[#EDEAE4] transition-colors cursor-pointer"
              data-cursor="CLOSE"
            >
              <span>ESC</span>
              <span className="text-base">✕</span>
            </button>
          </div>

          {/* Title & Tagline */}
          <div className="mt-8">
            <h2 className="font-display text-3xl md:text-5xl text-[#EDEAE4] tracking-tight">
              {project.title}
            </h2>
            <p className="font-mono-code text-xs md:text-sm text-[#FF3B00] tracking-wider uppercase mt-2">
              {project.tagline}
            </p>
          </div>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-8 p-4 bg-white/[0.02] border border-white/5 font-mono-code">
            {project.metrics.map((metric, i) => (
              <div key={i}>
                <span className="block text-[10px] text-[#5C5A55] uppercase tracking-wider">
                  {metric.label}
                </span>
                <span className="block text-sm md:text-base font-bold text-[#EDEAE4] mt-0.5">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>

          {/* Problem & Approach Breakdown */}
          <div className="space-y-8 text-sm md:text-base text-[#949089] leading-relaxed">
            <div>
              <h4 className="font-mono-code text-xs text-[#EDEAE4] uppercase tracking-widest mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#FF3B00] rounded-full" />
                The Problem
              </h4>
              <p>{project.problem}</p>
            </div>

            <div>
              <h4 className="font-mono-code text-xs text-[#EDEAE4] uppercase tracking-widest mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#FF3B00] rounded-full" />
                Engineering Approach
              </h4>
              <p>{project.approach}</p>
            </div>

            <div>
              <h4 className="font-mono-code text-xs text-[#EDEAE4] uppercase tracking-widest mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#FF3B00] rounded-full" />
                Signal &amp; System Flow
              </h4>
              <div className="p-4 bg-black/60 border border-white/10 font-mono-code text-xs text-[#EDEAE4] rounded leading-loose">
                {project.architecture}
              </div>
            </div>

            <div>
              <h4 className="font-mono-code text-xs text-[#EDEAE4] uppercase tracking-widest mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#FF3B00] rounded-full" />
                Key Invariants &amp; Capabilities
              </h4>
              <ul className="space-y-2 list-none">
                {project.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs md:text-sm">
                    <span className="font-mono-code text-[#FF3B00] mt-0.5">↳</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-mono-code text-xs text-[#EDEAE4] uppercase tracking-widest mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#FF3B00] rounded-full" />
                Module Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono-code text-xs text-[#EDEAE4] bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons: GitHub & Live Demo */}
        <div className="pt-8 mt-12 hairline-t flex flex-wrap items-center gap-4 font-mono-code text-xs">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-3.5 bg-[#EDEAE4] hover:bg-[#FF3B00] text-black hover:text-white font-semibold uppercase tracking-wider transition-all duration-300"
            data-cursor="GITHUB"
          >
            Review Codebase (GitHub) ↗
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-3.5 border border-white/20 hover:border-[#FF3B00] bg-white/[0.02] text-[#EDEAE4] hover:text-[#FF3B00] uppercase tracking-wider transition-all duration-300"
              data-cursor="DEMO"
            >
              Launch Live App ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
