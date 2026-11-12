import React from 'react';
import { Link } from 'react-router-dom';
import { AudioWaveformCanvas } from '../components/AudioWaveformCanvas';
import { PROJECTS } from '../data/projects';
import { EXPERIENCES } from '../data/experience';

export const HomePage: React.FC = () => {
  const featuredProjects = PROJECTS.filter((p) => p.featured).slice(0, 3);
  const featuredExperiences = EXPERIENCES.slice(0, 3);

  return (
    <div className="space-y-32 pb-24">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col justify-between pt-28 pb-12 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
        <AudioWaveformCanvas />

        {/* Top Status Bar */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 font-mono-code text-xs text-[#949089] tracking-wider uppercase hairline-b pb-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#FF3B00] animate-pulse" />
            <span>STATUS: OPEN FOR SDE &amp; AI ROLES</span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-[#5C5A55]">
            <span>ACOUSTIC FORENSICS · CLINICAL RAG · ETHEREUM PROTOCOLS</span>
            <span>KALYAN, IN (REMOTE-READY)</span>
          </div>
        </div>

        {/* Massive Editorial Name Block */}
        <div className="relative z-10 my-auto py-12 md:py-16 flex flex-col items-start">
          <div className="overflow-hidden mb-4">
            <p className="font-mono-code text-xs md:text-sm tracking-widest text-[#FF3B00] uppercase">
              [AI ENGINEER &amp; SYSTEMS ARCHITECT]
            </p>
          </div>

          <div className="overflow-hidden w-full">
            <h1 className="font-display text-[12vw] sm:text-[10vw] lg:text-[8.5vw] font-normal leading-[0.88] tracking-[-0.035em] text-[#EDEAE4] uppercase">
              UMERKHAN
            </h1>
          </div>
          <div className="overflow-hidden w-full flex flex-col md:flex-row md:items-baseline md:justify-between gap-4">
            <h1 className="font-display text-[12vw] sm:text-[10vw] lg:text-[8.5vw] font-normal leading-[0.88] tracking-[-0.035em] text-[#EDEAE4] uppercase">
              JUNAIDKHAN
            </h1>
            <p className="max-w-md font-sans text-sm md:text-base text-[#949089] leading-relaxed md:pb-2">
              I build and ship production systems: real-time biometric voice forensics with Wav2Vec2,
              clinical RAG architectures, and audited Ethereum smart contracts.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="mt-10 md:mt-14 flex flex-wrap items-center gap-4">
            <Link
              to="/projects"
              className="group flex items-center gap-3 px-6 py-3.5 bg-[#EDEAE4] hover:bg-[#FF3B00] text-black hover:text-white font-mono-code text-xs uppercase tracking-wider transition-all duration-300 shadow-lg cursor-pointer"
              data-cursor="PROJECTS"
            >
              <span>Explore Projects [01]</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>

            <a
              href="/Umerkhan_Resume.pdf"
              download
              className="flex items-center gap-3 px-6 py-3.5 border border-white/15 hover:border-white/40 bg-white/[0.02] text-[#EDEAE4] font-mono-code text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer"
              data-cursor="PDF"
            >
              <span>Download Resume (PDF)</span>
              <span>↗</span>
            </a>

            <Link
              to="/contact"
              className="px-6 py-3.5 text-[#949089] hover:text-[#EDEAE4] font-mono-code text-xs uppercase tracking-wider transition-colors cursor-pointer"
              data-cursor="CONTACT"
            >
              Direct Transmission →
            </Link>
          </div>
        </div>

        {/* Quantitative Performance Strip */}
        <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 hairline-t font-mono-code">
          <div>
            <span className="block text-2xl md:text-3xl font-bold text-[#EDEAE4] tabular-nums tracking-tight">
              16+
            </span>
            <span className="block text-[11px] text-[#5C5A55] uppercase tracking-wider mt-1">
              Systems Built
            </span>
          </div>
          <div>
            <span className="block text-2xl md:text-3xl font-bold text-[#EDEAE4] tabular-nums tracking-tight">
              03
            </span>
            <span className="block text-[11px] text-[#5C5A55] uppercase tracking-wider mt-1">
              Industry Internships
            </span>
          </div>
          <div>
            <span className="block text-2xl md:text-3xl font-bold text-[#EDEAE4] tabular-nums tracking-tight">
              #1
            </span>
            <span className="block text-[11px] text-[#5C5A55] uppercase tracking-wider mt-1">
              Class Rank (90.33%)
            </span>
          </div>
          <div>
            <span className="block text-2xl md:text-3xl font-bold text-[#EDEAE4] tabular-nums tracking-tight">
              01
            </span>
            <span className="block text-[11px] text-[#5C5A55] uppercase tracking-wider mt-1">
              Published Paper (IJRAR)
            </span>
          </div>
        </div>
      </section>

      {/* 2. FEATURED FLAGSHIP SYSTEMS REEL */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto hairline-t pt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="font-mono-code text-xs text-[#FF3B00] uppercase tracking-widest mb-3">
              [SELECTED FLAGSHIP WORK]
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-[#EDEAE4] tracking-tight">
              Core Architectures
            </h2>
          </div>
          <Link
            to="/projects"
            className="font-mono-code text-xs text-[#EDEAE4] hover:text-[#FF3B00] flex items-center gap-2 group transition-colors"
            data-cursor="ALL"
          >
            <span>View All 16+ Projects Archive</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <Link
              to={`/projects/${project.id}`}
              key={project.id}
              className="group p-8 bg-[#121215] border border-white/10 hover:border-[#FF3B00] transition-all flex flex-col justify-between"
              data-cursor="VIEW"
            >
              <div>
                <div className="flex items-center justify-between font-mono-code text-xs mb-4">
                  <span className="text-[#FF3B00]">[{project.number}]</span>
                  <span className="text-[#5C5A55]">{project.year}</span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-[#EDEAE4] group-hover:text-[#FF3B00] transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="font-sans text-xs text-[#949089] leading-relaxed mb-6">
                  {project.tagline}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {project.stack.slice(0, 3).map((s) => (
                    <span
                      key={s}
                      className="font-mono-code text-[10px] text-[#949089] bg-white/[0.02] border border-white/5 px-2 py-0.5 rounded"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="hairline-t pt-4 flex items-center justify-between font-mono-code text-xs text-[#5C5A55] group-hover:text-[#EDEAE4] transition-colors">
                <span>Specification</span>
                <span>↳ Inspect</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. EXPERIENCE TEASER */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto hairline-t pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="font-mono-code text-xs text-[#FF3B00] uppercase tracking-widest">
              [TRAJECTORY &amp; INTERNSHIPS]
            </div>
            <h2 className="font-display text-3xl md:text-5xl text-[#EDEAE4] tracking-tight">
              Production Experience
            </h2>
            <p className="font-sans text-sm text-[#949089] leading-relaxed">
              Three formal engineering internships spanning full-stack web platforms, automotive software, and AI EdTech laboratories, alongside 10+ freelance client contracts.
            </p>
            <div className="pt-4">
              <Link
                to="/about"
                className="font-mono-code text-xs text-[#EDEAE4] hover:text-[#FF3B00] flex items-center gap-2 group transition-colors"
                data-cursor="ABOUT"
              >
                <span>Read Full Biography &amp; Education</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            {featuredExperiences.map((exp) => (
              <div key={exp.id} className="p-6 bg-[#121215] border border-white/10">
                <div className="flex flex-wrap items-baseline justify-between gap-2 font-mono-code text-xs mb-1">
                  <span className="text-[#EDEAE4] font-semibold text-sm">{exp.role}</span>
                  <span className="text-[#5C5A55]">{exp.period}</span>
                </div>
                <div className="font-mono-code text-xs text-[#FF3B00] mb-2">
                  {exp.company} · {exp.location}
                </div>
                <p className="font-sans text-xs text-[#949089] leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION STRIP */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto hairline-t pt-24 text-center">
        <div className="p-12 md:p-16 bg-[#121215] border border-white/10 space-y-6">
          <div className="font-mono-code text-xs text-[#FF3B00] uppercase tracking-widest">
            [AVAILABLE FOR FULL-TIME / SDE ROLES]
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-[#EDEAE4] tracking-tight max-w-2xl mx-auto">
            Ready to deploy high-throughput systems with a team that moves fast.
          </h2>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-[#EDEAE4] hover:bg-[#FF3B00] text-black hover:text-white font-mono-code text-xs uppercase tracking-wider transition-colors cursor-pointer"
              data-cursor="CONNECT"
            >
              Get In Touch →
            </Link>
            <a
              href="/Umerkhan_Resume.pdf"
              download
              className="px-8 py-4 border border-white/15 hover:border-white/40 text-[#EDEAE4] font-mono-code text-xs uppercase tracking-wider transition-colors cursor-pointer"
              data-cursor="PDF"
            >
              Download Resume (PDF) ↗
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
