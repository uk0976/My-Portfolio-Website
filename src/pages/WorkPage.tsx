import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../data/projects';
import type { Project } from '../data/projects';

export const WorkPage: React.FC = () => {
  const [viewMode, setViewMode] = useState<'featured' | 'full'>('featured');
  const [categoryFilter, setCategoryFilter] = useState<string>('ALL');

  const categories = [
    'ALL',
    'AI / Audio Forensics',
    'Clinical AI & RAG',
    'Blockchain Protocol',
    'Developer Tools',
    'Computer Vision',
  ];

  let displayProjects =
    viewMode === 'featured' ? PROJECTS.filter((p) => p.featured) : PROJECTS;

  if (categoryFilter !== 'ALL') {
    displayProjects = displayProjects.filter((p) => p.category === categoryFilter);
  }

  return (
    <div className="pt-28 pb-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 hairline-b pb-12">
        <div>
          <div className="font-mono-code text-xs text-[#FF3B00] uppercase tracking-widest mb-3">
            [01 // CODEBASE &amp; ARCHIVE DIRECTORY]
          </div>
          <h1 className="font-display text-4xl md:text-7xl text-[#EDEAE4] tracking-tight">
            Work &amp; Systems
          </h1>
        </div>

        {/* View Mode Toggle: Featured vs Full */}
        <div className="flex items-center gap-2 p-1 bg-[#121215] border border-white/10 font-mono-code text-xs">
          <button
            onClick={() => setViewMode('featured')}
            className={`px-4 py-2 transition-all cursor-pointer ${
              viewMode === 'featured'
                ? 'bg-[#EDEAE4] text-black font-semibold'
                : 'text-[#949089] hover:text-[#EDEAE4]'
            }`}
            data-cursor="TOGGLE"
          >
            Featured ({PROJECTS.filter((p) => p.featured).length})
          </button>
          <button
            onClick={() => setViewMode('full')}
            className={`px-4 py-2 transition-all cursor-pointer ${
              viewMode === 'full'
                ? 'bg-[#EDEAE4] text-black font-semibold'
                : 'text-[#949089] hover:text-[#EDEAE4]'
            }`}
            data-cursor="TOGGLE"
          >
            Full Archive ({PROJECTS.length})
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 pb-4 hairline-b font-mono-code text-xs">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoryFilter(cat)}
            className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
              categoryFilter === cat
                ? 'bg-[#EDEAE4] text-black font-semibold'
                : 'text-[#949089] hover:text-[#EDEAE4] hover:bg-white/[0.04]'
            }`}
            data-cursor="FILTER"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Rows */}
      <div className="flex flex-col divide-y divide-white/10">
        {displayProjects.map((project: Project) => (
          <Link
            to={`/work/${project.id}`}
            key={project.id}
            className="group py-8 md:py-12 flex flex-col lg:flex-row lg:items-center justify-between gap-6 transition-all duration-300 hover:bg-white/[0.02] px-4 cursor-pointer"
            data-cursor="INSPECT"
          >
            <div className="flex items-start md:items-baseline gap-6 lg:w-1/2">
              <span className="font-mono-code text-sm text-[#FF3B00] tabular-nums font-semibold">
                [{project.number}]
              </span>
              <div>
                <div className="flex items-baseline gap-3">
                  <h2 className="font-display text-2xl md:text-4xl text-[#EDEAE4] group-hover:text-[#FF3B00] transition-colors">
                    {project.title}
                  </h2>
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

            <div className="flex items-center justify-between lg:justify-end gap-6 font-mono-code text-xs text-[#949089]">
              <span className="text-[#5C5A55]">{project.year}</span>
              <span className="flex items-center gap-1.5 text-[#EDEAE4] group-hover:text-[#FF3B00] font-semibold transition-colors">
                <span>Specification</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
