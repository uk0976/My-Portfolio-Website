import React, { useState } from 'react';
import { PROJECTS } from '../data/projects';
import type { Project } from '../data/projects';

interface ProjectSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectSection: React.FC<ProjectSectionProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<string>('ALL');

  const categories = [
    'ALL',
    'AI / Audio Forensics',
    'Clinical AI & RAG',
    'Blockchain Protocol',
    'Developer Tools',
    'Computer Vision',
  ];

  const filteredProjects =
    activeFilter === 'ALL'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="work" className="py-24 px-6 md:px-12 max-w-7xl mx-auto hairline-t">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="font-mono-code text-xs text-[#FF3B00] uppercase tracking-widest mb-3">
            [01 // SELECTED ARCHIVE]
          </div>
          <h2 className="font-display text-4xl md:text-6xl text-[#EDEAE4] tracking-tight">
            Production Systems &amp; Engineering
          </h2>
        </div>
        <p className="max-w-md font-sans text-sm text-[#949089] leading-relaxed">
          Full breakdown of architectures, latency benchmarks, unit test suites, and live source repositories.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 hairline-b font-mono-code text-xs">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
              activeFilter === cat
                ? 'bg-[#EDEAE4] text-black font-semibold'
                : 'text-[#949089] hover:text-[#EDEAE4] hover:bg-white/[0.04]'
            }`}
            data-cursor="FILTER"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Editorial Interactive Project Table / Reel */}
      <div className="flex flex-col divide-y divide-white/10">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => onSelectProject(project)}
            className="group py-8 md:py-12 flex flex-col lg:flex-row lg:items-center justify-between gap-6 transition-all duration-300 hover:bg-white/[0.02] px-4 cursor-pointer"
            data-cursor="CASE STUDY"
          >
            {/* Left: Number + Title + Category */}
            <div className="flex items-start md:items-baseline gap-6 lg:w-1/2">
              <span className="font-mono-code text-sm text-[#FF3B00] tabular-nums font-semibold">
                [{project.number}]
              </span>
              <div>
                <div className="flex items-baseline gap-3">
                  <h3 className="font-display text-2xl md:text-4xl text-[#EDEAE4] group-hover:text-[#FF3B00] transition-colors">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="hidden sm:inline-block font-mono-code text-[10px] text-[#FF3B00] border border-[#FF3B00]/40 px-2 py-0.5 rounded">
                      FLAGSHIP
                    </span>
                  )}
                </div>
                <p className="font-sans text-xs md:text-sm text-[#949089] mt-2 max-w-md line-clamp-2">
                  {project.tagline}
                </p>
              </div>
            </div>

            {/* Middle: Stack Mono Pills */}
            <div className="lg:w-1/3 flex flex-wrap gap-2">
              {project.stack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="font-mono-code text-[11px] text-[#949089] bg-white/[0.03] border border-white/5 px-2.5 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
              {project.stack.length > 4 && (
                <span className="font-mono-code text-[11px] text-[#5C5A55] py-1">
                  +{project.stack.length - 4}
                </span>
              )}
            </div>

            {/* Right: Year & Action Link */}
            <div className="flex items-center justify-between lg:justify-end gap-6 font-mono-code text-xs text-[#949089]">
              <span className="text-[#5C5A55]">{project.year}</span>
              <span className="flex items-center gap-1.5 text-[#EDEAE4] group-hover:text-[#FF3B00] font-semibold transition-colors">
                <span>View Specification</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
