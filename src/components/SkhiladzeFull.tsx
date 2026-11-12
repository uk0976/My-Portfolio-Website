import React, { useState } from 'react';
import { PROJECTS } from '../data/projects';

interface SkhiladzeFullProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SkhiladzeFull: React.FC<SkhiladzeFullProps> = ({ isOpen, onClose }) => {
  const [hoveredProject, setHoveredProject] = useState(PROJECTS[0]);

  if (!isOpen) return null;

  const aiProjects = PROJECTS.filter((p) =>
    ['voiceguard', 'medinsight', 'face-attendance', 'smart-attendance-system'].includes(p.id) ||
    p.category.toLowerCase().includes('ai') ||
    p.category.toLowerCase().includes('vision')
  );

  const fullstackProjects = PROJECTS.filter(
    (p) => !aiProjects.includes(p) && !p.id.includes('blockloan')
  );

  const protocolProjects = PROJECTS.filter(
    (p) => p.id === 'blockloan' || p.category.toLowerCase().includes('blockchain')
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-[#090C12]/95 backdrop-blur-xl p-6 md:p-12 overflow-y-auto"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/[0.08]">
          <div>
            <span className="font-mono-code text-xs text-[#FB5E28] uppercase tracking-widest block mb-1">
              [SYSTEM DIRECTORY]
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-[#F2F2EF] tracking-tight">
              All Work (16+ Systems)
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-full border border-white/20 hover:border-white/50 text-xs font-mono-code uppercase tracking-wider text-[#F2F2EF] cursor-pointer"
          >
            Close [×]
          </button>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Lists Column */}
          <div className="lg:col-span-7 space-y-10">
            {/* 01. AI Systems */}
            <div>
              <p className="font-mono-code text-xs text-[#FB5E28] uppercase tracking-widest mb-4">
                01 · AI, Audio &amp; Computer Vision
              </p>
              <div className="flex flex-col divide-y divide-white/[0.08]">
                {aiProjects.map((p) => (
                  <div
                    key={p.id}
                    onMouseEnter={() => setHoveredProject(p)}
                    className={`py-3.5 px-3 rounded-lg flex items-center justify-between cursor-pointer transition-colors ${
                      hoveredProject.id === p.id
                        ? 'bg-white/[0.06] text-[#F2F2EF]'
                        : 'text-[#9AA0AA] hover:text-[#F2F2EF]'
                    }`}
                  >
                    <span className="font-display text-base md:text-lg font-bold">
                      {p.title}
                    </span>
                    <span className="font-mono-code text-xs text-[#5C626D]">
                      {p.metrics?.[0]?.value || p.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 02. Full-Stack Systems */}
            <div>
              <p className="font-mono-code text-xs text-[#FB5E28] uppercase tracking-widest mb-4">
                02 · Full-Stack &amp; Developer Tooling
              </p>
              <div className="flex flex-col divide-y divide-white/[0.08]">
                {fullstackProjects.map((p) => (
                  <div
                    key={p.id}
                    onMouseEnter={() => setHoveredProject(p)}
                    className={`py-3.5 px-3 rounded-lg flex items-center justify-between cursor-pointer transition-colors ${
                      hoveredProject.id === p.id
                        ? 'bg-white/[0.06] text-[#F2F2EF]'
                        : 'text-[#9AA0AA] hover:text-[#F2F2EF]'
                    }`}
                  >
                    <span className="font-display text-base md:text-lg font-bold">
                      {p.title}
                    </span>
                    <span className="font-mono-code text-xs text-[#5C626D]">
                      {p.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 03. Decentralized Protocols */}
            {protocolProjects.length > 0 && (
              <div>
                <p className="font-mono-code text-xs text-[#FB5E28] uppercase tracking-widest mb-4">
                  03 · Decentralized Protocols
                </p>
                <div className="flex flex-col divide-y divide-white/[0.08]">
                  {protocolProjects.map((p) => (
                    <div
                      key={p.id}
                      onMouseEnter={() => setHoveredProject(p)}
                      className={`py-3.5 px-3 rounded-lg flex items-center justify-between cursor-pointer transition-colors ${
                        hoveredProject.id === p.id
                          ? 'bg-white/[0.06] text-[#F2F2EF]'
                          : 'text-[#9AA0AA] hover:text-[#F2F2EF]'
                      }`}
                    >
                      <span className="font-display text-base md:text-lg font-bold">
                        {p.title}
                      </span>
                      <span className="font-mono-code text-xs text-[#5C626D]">
                        Smart Contract
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Inspector Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-12">
            <div className="p-8 rounded-2xl bg-[#11151C] border border-white/[0.12] shadow-2xl">
              <span className="font-mono-code text-xs text-[#FB5E28] uppercase tracking-wider block mb-2 font-semibold">
                [{hoveredProject.number}] · {hoveredProject.year}
              </span>

              <h3 className="font-display text-2xl md:text-3xl font-bold text-[#F2F2EF] mb-3">
                {hoveredProject.title}
              </h3>

              <p className="font-sans text-sm text-[#9AA0AA] leading-relaxed mb-6">
                {hoveredProject.summary || hoveredProject.tagline}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {hoveredProject.stack.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.06] font-mono-code text-[11px] text-[#9AA0AA]"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/[0.08]">
                {hoveredProject.liveUrl && (
                  <a
                    href={hoveredProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full bg-[#FB5E28] hover:bg-[#FF7A4D] text-white font-mono-code text-xs uppercase tracking-wider font-semibold transition-all shadow cursor-pointer"
                  >
                    Launch Live System ↗
                  </a>
                )}

                {hoveredProject.githubUrl && (
                  <a
                    href={hoveredProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full border border-white/15 hover:border-white/30 bg-white/[0.03] text-[#F2F2EF] font-mono-code text-xs uppercase tracking-wider transition-all cursor-pointer"
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
