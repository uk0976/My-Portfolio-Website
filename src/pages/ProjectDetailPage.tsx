import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../data/projects';

export const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="pt-40 pb-24 px-6 max-w-4xl mx-auto text-center space-y-6">
        <div className="font-mono-code text-xs text-[#FF3B00] uppercase tracking-widest">
          [SYSTEM 404]
        </div>
        <h1 className="font-display text-4xl text-[#EDEAE4]">Specification Not Found</h1>
        <p className="font-sans text-sm text-[#949089]">
          The project record you requested does not exist in the active archive index.
        </p>
        <Link
          to="/projects"
          className="inline-block mt-4 px-6 py-3 bg-[#EDEAE4] text-black font-mono-code text-xs uppercase"
        >
          Return to Project Index →
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-24 px-6 md:px-12 max-w-5xl mx-auto space-y-16">
      {/* Back to Index Nav */}
      <div className="hairline-b pb-6 flex items-center justify-between font-mono-code text-xs">
        <Link
          to="/projects"
          className="text-[#949089] hover:text-[#EDEAE4] flex items-center gap-2 group transition-colors"
          data-cursor="BACK"
        >
          <span>←</span>
          <span>Back to Archive</span>
        </Link>
        <div className="flex items-center gap-3 text-[#5C5A55]">
          <span className="text-[#FF3B00]">[{project.number}]</span>
          <span>{project.category}</span>
          <span>// {project.year}</span>
        </div>
      </div>

      {/* Main Title Header */}
      <div className="space-y-4">
        <div className="font-mono-code text-xs text-[#FF3B00] uppercase tracking-widest">
          [CASE STUDY SPECIFICATION]
        </div>
        <h1 className="font-display text-4xl md:text-7xl text-[#EDEAE4] tracking-tight">
          {project.title}
        </h1>
        <p className="font-mono-code text-sm md:text-base text-[#949089] max-w-2xl">
          {project.tagline}
        </p>
      </div>

      {/* Quantitative Metrics Matrix */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-[#121215] border border-white/10 font-mono-code">
        {project.metrics.map((metric, i) => (
          <div key={i}>
            <span className="block text-[10px] text-[#5C5A55] uppercase tracking-wider">
              {metric.label}
            </span>
            <span className="block text-base md:text-lg font-bold text-[#EDEAE4] mt-1">
              {metric.value}
            </span>
          </div>
        ))}
      </div>

      {/* Deep Dive Architecture Sections */}
      <div className="space-y-12 text-[#949089] leading-relaxed">
        {/* Problem */}
        <section className="space-y-3">
          <h2 className="font-mono-code text-xs text-[#EDEAE4] uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#FF3B00] rounded-full" />
            The Operational Problem
          </h2>
          <p className="font-sans text-sm md:text-base text-[#EDEAE4]/90">
            {project.problem}
          </p>
        </section>

        {/* Engineering Approach */}
        <section className="space-y-3">
          <h2 className="font-mono-code text-xs text-[#EDEAE4] uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#FF3B00] rounded-full" />
            Engineering Approach &amp; Design Decisions
          </h2>
          <p className="font-sans text-sm md:text-base text-[#EDEAE4]/90">
            {project.approach}
          </p>
        </section>

        {/* Signal Architecture */}
        <section className="space-y-3">
          <h2 className="font-mono-code text-xs text-[#EDEAE4] uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#FF3B00] rounded-full" />
            System &amp; Data Pipeline Architecture
          </h2>
          <div className="p-6 bg-black border border-white/10 font-mono-code text-xs md:text-sm text-[#EDEAE4] leading-loose rounded">
            {project.architecture}
          </div>
        </section>

        {/* Key Features & Invariants */}
        <section className="space-y-4">
          <h2 className="font-mono-code text-xs text-[#EDEAE4] uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#FF3B00] rounded-full" />
            Key Technical Invariants &amp; Capabilities
          </h2>
          <ul className="space-y-3 list-none">
            {project.features.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-3 font-sans text-sm text-[#EDEAE4]/90">
                <span className="font-mono-code text-[#FF3B00] mt-0.5">↳</span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Module Stack */}
        <section className="space-y-3">
          <h2 className="font-mono-code text-xs text-[#EDEAE4] uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#FF3B00] rounded-full" />
            Technology Stack &amp; Protocols
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="font-mono-code text-xs text-[#EDEAE4] bg-[#121215] border border-white/10 px-3 py-1.5 rounded"
              >
                {s}
              </span>
            ))}
          </div>
        </section>
      </div>

      {/* Action Footnotes */}
      <div className="hairline-t pt-10 flex flex-wrap items-center gap-6 font-mono-code text-xs">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 bg-[#EDEAE4] hover:bg-[#FF3B00] text-black hover:text-white font-semibold uppercase tracking-wider transition-colors"
          data-cursor="GITHUB"
        >
          Review Codebase on GitHub ↗
        </a>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-white/20 hover:border-[#FF3B00] text-[#EDEAE4] hover:text-[#FF3B00] uppercase tracking-wider transition-colors"
            data-cursor="DEMO"
          >
            Launch Live Deployment ↗
          </a>
        )}
      </div>
    </div>
  );
};
