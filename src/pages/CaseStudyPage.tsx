import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../data/projects';

export const CaseStudyPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="pt-40 pb-24 px-6 max-w-4xl mx-auto text-center space-y-6">
        <div className="font-mono-code text-xs text-[#FB5E28] uppercase tracking-widest">
          [SYSTEM 404]
        </div>
        <h1 className="font-display text-4xl text-[#F2F2EF] font-bold">Specification Not Found</h1>
        <p className="font-sans text-sm text-[#9AA0AA]">
          The project record you requested does not exist in the active archive index.
        </p>
        <Link
          to="/work"
          className="inline-block mt-4 px-6 py-3 bg-[#FB5E28] text-white font-mono-code text-xs uppercase rounded"
        >
          Return to Work Index →
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-24 px-6 md:px-12 max-w-5xl mx-auto space-y-16">
      {/* Back to Index Nav */}
      <div className="border-b border-white/[0.08] pb-6 flex items-center justify-between font-mono-code text-xs">
        <Link
          to="/work"
          className="text-[#9AA0AA] hover:text-[#F2F2EF] flex items-center gap-2 group transition-colors"
        >
          <span>←</span>
          <span>Back to Work Archive</span>
        </Link>
        <div className="flex items-center gap-3 text-[#5C626D]">
          <span className="text-[#FB5E28] font-bold">[{project.number}]</span>
          <span>{project.category}</span>
          <span>// {project.year}</span>
        </div>
      </div>

      {/* Main Title Header */}
      <div className="space-y-4">
        <div className="font-mono-code text-xs text-[#FB5E28] uppercase tracking-widest font-semibold">
          [TECHNICAL CASE STUDY SPECIFICATION]
        </div>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-[#F2F2EF] tracking-tight">
          {project.title}
        </h1>
        <p className="font-mono-code text-sm md:text-base text-[#9AA0AA] max-w-2xl">
          {project.tagline}
        </p>
      </div>

      {/* Quantitative Metrics Matrix */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-[#11151C] border border-white/[0.08] font-mono-code rounded-lg">
        {project.metrics.map((metric, i) => (
          <div key={i}>
            <span className="block text-[10px] text-[#5C626D] uppercase tracking-wider">
              {metric.label}
            </span>
            <span className="block text-base md:text-lg font-bold text-[#F2F2EF] mt-1">
              {metric.value}
            </span>
          </div>
        ))}
      </div>

      {/* Deep Dive Architecture Sections */}
      <div className="space-y-12 text-[#9AA0AA] leading-relaxed">
        {/* Problem */}
        <section className="space-y-3">
          <h2 className="font-mono-code text-xs text-[#F2F2EF] uppercase tracking-widest flex items-center gap-2 font-semibold">
            <span className="w-1.5 h-1.5 bg-[#FB5E28] rounded-full" />
            The Operational Problem
          </h2>
          <p className="font-sans text-sm md:text-base text-[#F2F2EF]/90">
            {project.problem}
          </p>
        </section>

        {/* Engineering Approach */}
        <section className="space-y-3">
          <h2 className="font-mono-code text-xs text-[#F2F2EF] uppercase tracking-widest flex items-center gap-2 font-semibold">
            <span className="w-1.5 h-1.5 bg-[#FB5E28] rounded-full" />
            Engineering Approach &amp; Design Decisions
          </h2>
          <p className="font-sans text-sm md:text-base text-[#F2F2EF]/90">
            {project.approach}
          </p>
        </section>

        {/* Signal Architecture */}
        <section className="space-y-3">
          <h2 className="font-mono-code text-xs text-[#F2F2EF] uppercase tracking-widest flex items-center gap-2 font-semibold">
            <span className="w-1.5 h-1.5 bg-[#FB5E28] rounded-full" />
            System &amp; Data Pipeline Architecture
          </h2>
          <div className="p-6 bg-[#090C12] border border-white/[0.08] font-mono-code text-xs md:text-sm text-[#F2F2EF] leading-loose rounded-lg">
            {project.architecture}
          </div>
        </section>

        {/* Key Features & Invariants */}
        <section className="space-y-4">
          <h2 className="font-mono-code text-xs text-[#F2F2EF] uppercase tracking-widest flex items-center gap-2 font-semibold">
            <span className="w-1.5 h-1.5 bg-[#FB5E28] rounded-full" />
            Key Technical Invariants &amp; Capabilities
          </h2>
          <ul className="space-y-3 list-none">
            {project.features.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-3 font-sans text-sm text-[#F2F2EF]/90">
                <span className="font-mono-code text-[#FB5E28] mt-0.5">↳</span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Module Stack */}
        <section className="space-y-3">
          <h2 className="font-mono-code text-xs text-[#F2F2EF] uppercase tracking-widest flex items-center gap-2 font-semibold">
            <span className="w-1.5 h-1.5 bg-[#FB5E28] rounded-full" />
            Technology Stack &amp; Protocols
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="font-mono-code text-xs text-[#F2F2EF] bg-[#11151C] border border-white/[0.08] px-3 py-1.5 rounded"
              >
                {s}
              </span>
            ))}
          </div>
        </section>
      </div>

      {/* Action Footnotes */}
      <div className="border-t border-white/[0.08] pt-10 flex flex-wrap items-center gap-6 font-mono-code text-xs">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 bg-[#FB5E28] hover:bg-[#FF7A4D] text-white font-semibold uppercase tracking-wider transition-colors rounded shadow-lg shadow-[#FB5E28]/20"
        >
          Review Codebase on GitHub ↗
        </a>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-white/20 hover:border-[#FB5E28] text-[#F2F2EF] hover:text-[#FB5E28] uppercase tracking-wider transition-colors rounded"
          >
            Launch Live Deployment ↗
          </a>
        )}
      </div>
    </div>
  );
};
