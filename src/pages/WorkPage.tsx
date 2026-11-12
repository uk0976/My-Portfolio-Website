import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../data/projects';
import type { Project } from '../data/projects';

export const WorkPage: React.FC = () => {
  const [viewMode, setViewMode] = useState<'featured' | 'full'>('full');
  const [categoryFilter, setCategoryFilter] = useState<string>('ALL');

  const categories = [
    'ALL',
    'AI / Audio Forensics',
    'Clinical AI & RAG',
    'Blockchain Protocol',
    'Developer Tools',
    'Computer Vision',
    'AI & Cloud Systems',
    'Web Systems',
    'Algorithms & Foundations'
  ];

  let displayProjects =
    viewMode === 'featured' ? PROJECTS.filter((p) => p.featured) : PROJECTS;

  if (categoryFilter !== 'ALL') {
    displayProjects = displayProjects.filter((p) => p.category === categoryFilter);
  }

  return (
    <div className="pt-28 pb-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-12">
        <div>
          <div className="font-mono-code text-xs text-[#FB5E28] uppercase tracking-widest mb-3">
            [01 // CODEBASE &amp; ARCHIVE DIRECTORY]
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-[#F2F2EF] tracking-tight">
            Work &amp; Systems
          </h1>
        </div>

        {/* View Mode Toggle: Featured vs Full */}
        <div className="flex items-center gap-2 p-1 bg-[#11151C] border border-white/[0.08] rounded-full font-mono-code text-xs">
          <button
            onClick={() => setViewMode('featured')}
            className={`px-4 py-1.5 rounded-full transition-all cursor-pointer ${
              viewMode === 'featured'
                ? 'bg-[#FB5E28] text-white font-semibold'
                : 'text-[#9AA0AA] hover:text-[#F2F2EF]'
            }`}
          >
            Featured ({PROJECTS.filter((p) => p.featured).length})
          </button>
          <button
            onClick={() => setViewMode('full')}
            className={`px-4 py-1.5 rounded-full transition-all cursor-pointer ${
              viewMode === 'full'
                ? 'bg-[#FB5E28] text-white font-semibold'
                : 'text-[#9AA0AA] hover:text-[#F2F2EF]'
            }`}
          >
            Full Archive ({PROJECTS.length})
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-white/[0.08] font-mono-code text-xs">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoryFilter(cat)}
            className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
              categoryFilter === cat
                ? 'bg-[#FB5E28] text-white font-semibold'
                : 'text-[#9AA0AA] hover:text-[#F2F2EF] hover:bg-white/[0.04]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Rows */}
      <div className="flex flex-col divide-y divide-white/[0.08]">
        {displayProjects.map((project: Project) => (
          <div
            key={project.id}
            className="group py-8 md:py-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 transition-all duration-200 hover:bg-white/[0.02] px-4 rounded-lg"
          >
            <div className="flex items-start md:items-baseline gap-6 lg:w-1/2">
              <span className="font-mono-code text-sm text-[#FB5E28] tabular-nums font-semibold">
                [{project.number}]
              </span>
              <div>
                <div className="flex items-baseline gap-3 flex-wrap">
                  <Link
                    to={`/work/${project.id}`}
                    className="font-display text-2xl md:text-3xl font-bold text-[#F2F2EF] group-hover:text-[#FB5E28] transition-colors"
                  >
                    {project.title}
                  </Link>
                  <span className="font-mono-code text-[11px] text-[#5C626D] uppercase">
                    {project.year}
                  </span>
                </div>
                <p className="font-sans text-xs md:text-sm text-[#9AA0AA] mt-2 line-clamp-2 max-w-xl">
                  {project.summary}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {project.stack.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] font-mono-code text-[10px] text-[#9AA0AA]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 5 && (
                    <span className="px-1.5 py-0.5 font-mono-code text-[10px] text-[#5C626D]">
                      +{project.stack.length - 5}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Right Meta & Actions */}
            <div className="flex items-center gap-6 lg:justify-end">
              <span className="hidden sm:inline font-mono-code text-xs text-[#9AA0AA] uppercase">
                {project.category}
              </span>

              <div className="flex items-center gap-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-full bg-[#FB5E28]/10 hover:bg-[#FB5E28]/20 border border-[#FB5E28]/30 font-mono-code text-xs text-[#FB5E28] font-semibold transition-colors"
                  >
                    Live Demo ↗
                  </a>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 font-mono-code text-xs text-[#F2F2EF] transition-colors"
                >
                  GitHub ↗
                </a>
                <Link
                  to={`/work/${project.id}`}
                  className="px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 font-mono-code text-xs text-[#9AA0AA] hover:text-[#F2F2EF] transition-colors"
                >
                  Deep Dive →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
