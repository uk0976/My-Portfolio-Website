import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NoiseSignalCanvas } from '../components/NoiseSignalCanvas';
import { ChromeCoinBadge } from '../components/ChromeCoinBadge';
import { NoiseSignalStory } from '../components/NoiseSignalStory';
import { BlueprintLiveReveal } from '../components/BlueprintLiveReveal';
import { ShowreelModal } from '../components/ShowreelModal';
import { PROJECTS } from '../data/projects';

export const HomePage: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const featuredWork = PROJECTS.slice(0, 5);

  const whatIMake = [
    {
      num: '01',
      title: 'Voice & Audio Biometrics',
      desc: 'Real-time deepfake speech detection, spectral jitter analysis, and chunk-level neural inference.',
      leadProject: 'VoiceGuard',
      url: '/work/voiceguard',
    },
    {
      num: '02',
      title: 'Clinical RAG & LLMs',
      desc: 'Domain-adapted knowledge retrieval, BioBERT entity extraction, and calibrated clinical summaries.',
      leadProject: 'MedInsight',
      url: '/work/medinsight',
    },
    {
      num: '03',
      title: 'Computer Vision',
      desc: 'Real-time multi-person detection, LBPH facial matching, and transactional attendance logging.',
      leadProject: 'Multiple Face Attendance System',
      url: '/work/face-attendance',
    },
    {
      num: '04',
      title: 'Decentralized Protocols',
      desc: 'Non-custodial smart contracts, simple interest state machines, and Hardhat invariant suites.',
      leadProject: 'BlockLoan',
      url: '/work/blockloan',
    },
    {
      num: '05',
      title: 'Full-Stack Developer Platforms',
      desc: 'Asynchronous FastAPI backends, AST semantic bug detection, and high-velocity React interfaces.',
      leadProject: 'CodeMedic AI',
      url: '/work/codemedic-ai',
    },
    {
      num: '06',
      title: 'Peer-Reviewed Research',
      desc: 'Empirical experimentation, academic symposium presentations, and published papers.',
      leadProject: 'IJRAR 2024 Publication',
      url: '/about',
    },
  ];

  return (
    <div className="space-y-24 pb-24">
      {/* 1. HERO SECTION WITH 3D CHROME COIN BADGE (Daff Reference) */}
      <section className="relative min-h-[94vh] flex flex-col justify-between pt-28 pb-10 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
        {/* Background WebGL Noise Waveform */}
        <NoiseSignalCanvas clarityFactor={0.2} />

        {/* Top Info Strip */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 font-mono-code text-xs text-[#949089] tracking-wider uppercase hairline-b pb-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#FF3B00] animate-pulse" />
            <span>KALYAN, INDIA · OPEN TO SDE &amp; AI ROLES</span>
          </div>
          <a
            href="#work-preview"
            className="hidden sm:inline-flex items-center gap-1.5 text-[#5C5A55] hover:text-[#EDEAE4] transition-colors"
          >
            <span>Skip to the work [↓]</span>
          </a>
        </div>

        {/* Center Grid: Typography on Left + 3D Chrome Badge on Right */}
        <div className="relative z-10 my-auto py-10 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 flex flex-col items-start">
            <div className="overflow-hidden mb-3">
              <p className="font-mono-code text-xs md:text-sm tracking-widest text-[#FF3B00] uppercase">
                [AI &amp; DATA SCIENCE ENGINEER]
              </p>
            </div>

            <div className="overflow-hidden w-full">
              <h1 className="font-display text-[13vw] sm:text-[10vw] lg:text-[8.5vw] font-normal leading-[0.88] tracking-[-0.035em] text-[#EDEAE4] uppercase">
                UMER KHAN
              </h1>
            </div>

            <div className="overflow-hidden w-full flex flex-col md:flex-row md:items-baseline md:justify-between gap-4 mt-2">
              <p className="font-mono-code text-xs md:text-sm text-[#EDEAE4] uppercase tracking-wider">
                DOCTOR UMERKHAN JUNAIDKHAN
              </p>
              <p className="max-w-md font-sans text-sm md:text-base text-[#949089] leading-relaxed">
                I build voice forensics, clinical RAG architectures, and computer vision systems—and ship them to production.
              </p>
            </div>

            {/* Three-Beat Signature Intro Line */}
            <div className="mt-8 p-4 bg-[#121215] border border-white/10 font-mono-code text-xs text-[#EDEAE4] tracking-wider uppercase">
              <span className="text-[#FF3B00]">↳ </span>
              Trained in AI. Tested in internships. Shipped in production.
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/work"
                className="px-7 py-3.5 bg-[#EDEAE4] hover:bg-[#FF3B00] text-black hover:text-white font-mono-code text-xs uppercase tracking-wider font-semibold transition-all duration-300 cursor-pointer shadow-lg"
                data-cursor="WORK"
              >
                See Work [01] →
              </Link>

              <a
                href="/Umerkhan_Resume.pdf"
                download
                className="px-7 py-3.5 border border-white/15 hover:border-white/40 bg-white/[0.02] text-[#EDEAE4] font-mono-code text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer"
                data-cursor="PDF"
              >
                Resume (PDF) ↗
              </a>

              <Link
                to="/contact"
                className="px-6 py-3.5 text-[#949089] hover:text-[#EDEAE4] font-mono-code text-xs uppercase tracking-wider transition-colors cursor-pointer"
                data-cursor="MESSAGE"
              >
                Direct Transmission →
              </Link>
            </div>
          </div>

          {/* Right Column: 3D Polished Chrome Badge (Click to flip) */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center relative">
            <ChromeCoinBadge />
            <span className="font-mono-code text-[10px] text-[#5C5A55] tracking-widest uppercase mt-3">
              [CLICK TO FLIP // THREE.JS CHROME]
            </span>
          </div>
        </div>

        {/* Hero Bottom Telemetry */}
        <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-5 hairline-t font-mono-code text-xs text-[#5C5A55]">
          <div>
            <span className="block text-2xl font-bold text-[#EDEAE4] tabular-nums">16+</span>
            <span>SYSTEMS SHIPPED</span>
          </div>
          <div>
            <span className="block text-2xl font-bold text-[#EDEAE4] tabular-nums">03</span>
            <span>INDUSTRY INTERNSHIPS</span>
          </div>
          <div>
            <span className="block text-2xl font-bold text-[#EDEAE4] tabular-nums">#1 RANK</span>
            <span>6 OF 6 SEMESTERS (90.33%)</span>
          </div>
          <div>
            <span className="block text-2xl font-bold text-[#EDEAE4] tabular-nums">01 PAPER</span>
            <span>IJRAR 2024 PUBLISHED</span>
          </div>
        </div>
      </section>

      {/* 2. THE SIGNATURE SCROLL STORY (Denny Dive & Live SNR Counter) */}
      <NoiseSignalStory />

      {/* 3. BLUEPRINT-TO-LIVE REVEAL (Denny "Both Sides of the Line") */}
      <BlueprintLiveReveal />

      {/* 4. SHOWREEL / PRODUCTION MOMENT (Luka Skhiladze Style) */}
      <ShowreelModal />

      {/* 5. SELECTED WORK PREVIEW (Hover-to-Preview List) */}
      <section id="work-preview" className="px-6 md:px-12 max-w-7xl mx-auto hairline-t pt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="font-mono-code text-xs text-[#FF3B00] uppercase tracking-widest mb-3">
              [01 // SELECTED ARCHIVE]
            </div>
            <h2 className="font-display text-4xl md:text-6xl text-[#EDEAE4] tracking-tight">
              Selected Systems
            </h2>
          </div>
          <Link
            to="/work"
            className="font-mono-code text-xs text-[#EDEAE4] hover:text-[#FF3B00] flex items-center gap-2 group transition-colors"
            data-cursor="ALL"
          >
            <span>View Full Directory (16+ Projects)</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        {/* Hover-Driven Editorial Row List */}
        <div className="flex flex-col divide-y divide-white/10">
          {featuredWork.map((project) => (
            <Link
              to={`/work/${project.id}`}
              key={project.id}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className={`group py-8 md:py-10 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all duration-300 px-4 cursor-pointer ${
                hoveredProject && hoveredProject !== project.id
                  ? 'opacity-40'
                  : 'opacity-100 hover:bg-white/[0.02]'
              }`}
              data-cursor="INSPECT"
            >
              <div className="flex items-start md:items-baseline gap-6 md:w-2/3">
                <span className="font-mono-code text-sm text-[#FF3B00] font-semibold">
                  [{project.number}]
                </span>
                <div>
                  <h3 className="font-display text-2xl md:text-4xl text-[#EDEAE4] group-hover:text-[#FF3B00] transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-[#949089] mt-1 max-w-lg">
                    {project.tagline}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-6 font-mono-code text-xs text-[#949089]">
                <span className="text-[#5C5A55]">{project.year}</span>
                <span className="text-[#EDEAE4] group-hover:text-[#FF3B00] font-semibold flex items-center gap-1.5 transition-colors">
                  <span>Specification</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. "WHAT I MAKE" (Luka-Style 6 Numbered Categories) */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto hairline-t pt-24">
        <div className="font-mono-code text-xs text-[#FF3B00] uppercase tracking-widest mb-3">
          [CAPABILITY INDEX]
        </div>
        <h2 className="font-display text-4xl md:text-5xl text-[#EDEAE4] tracking-tight mb-16">
          What I Make
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whatIMake.map((cat) => (
            <Link
              to={cat.url}
              key={cat.num}
              className="p-8 bg-[#121215] border border-white/10 hover:border-[#FF3B00] transition-all flex flex-col justify-between group"
              data-cursor="GO"
            >
              <div>
                <div className="font-mono-code text-xs text-[#FF3B00] uppercase tracking-widest mb-4">
                  //{cat.num}
                </div>
                <h3 className="font-display text-2xl text-[#EDEAE4] group-hover:text-[#FF3B00] transition-colors mb-2">
                  {cat.title}
                </h3>
                <p className="font-sans text-xs md:text-sm text-[#949089] leading-relaxed mb-6">
                  {cat.desc}
                </p>
              </div>

              <div className="hairline-t pt-4 flex items-center justify-between font-mono-code text-xs text-[#5C5A55] group-hover:text-[#EDEAE4] transition-colors">
                <span>Lead: {cat.leadProject}</span>
                <span>→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. CONTACT TEASER BLOCK */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto hairline-t pt-24 text-center">
        <div className="p-12 md:p-16 bg-[#121215] border border-white/10 space-y-6">
          <div className="font-mono-code text-xs text-[#FF3B00] uppercase tracking-widest">
            [TRANSMISSION READY]
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-[#EDEAE4] tracking-tight max-w-2xl mx-auto">
            Ready to deploy high-throughput systems with a team that moves fast.
          </h2>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-[#EDEAE4] hover:bg-[#FF3B00] text-black hover:text-white font-mono-code text-xs uppercase tracking-wider font-semibold transition-colors cursor-pointer"
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
