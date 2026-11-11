import React from 'react';
import { AudioWaveformCanvas } from './AudioWaveformCanvas';

interface HeroProps {
  onExploreWork: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onOpenContact }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Interactive WebGL Spectrogram Wave Field */}
      <AudioWaveformCanvas />

      {/* Top Technical Metadata Ticker */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 font-mono-code text-xs text-[#949089] tracking-wider uppercase hairline-b pb-4">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#FF3B00] animate-pulse" />
          <span>STATUS: OPEN FOR SDE &amp; AI ROLES</span>
        </div>
        <div className="hidden sm:flex items-center gap-6 text-[#5C5A55]">
          <span>FOCUS: ACOUSTIC FORENSICS · RAG · SMART CONTRACTS</span>
          <span>LOCATION: KALYAN, IN (REMOTE-READY)</span>
        </div>
      </div>

      {/* Center Cinematic Typography Block */}
      <div className="relative z-10 my-auto py-12 md:py-20 flex flex-col items-start">
        {/* Editorial Subtitle */}
        <div className="overflow-hidden mb-4">
          <p className="font-mono-code text-xs md:text-sm tracking-widest text-[#FF3B00] uppercase">
            [AI ENGINEER &amp; SYSTEMS DEVELOPER]
          </p>
        </div>

        {/* Monolithic Name */}
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

        {/* Action Button Row */}
        <div className="mt-10 md:mt-14 flex flex-wrap items-center gap-4">
          <button
            onClick={onExploreWork}
            className="group flex items-center gap-3 px-6 py-3.5 bg-[#EDEAE4] hover:bg-[#FF3B00] text-black hover:text-white font-mono-code text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-lg"
            data-cursor="EXPLORE"
          >
            <span>Selected Systems [01]</span>
            <span className="transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
          </button>

          <a
            href="/Umerkhan_Resume.pdf"
            download
            className="flex items-center gap-3 px-6 py-3.5 border border-white/15 hover:border-white/40 bg-white/[0.02] text-[#EDEAE4] font-mono-code text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer"
            data-cursor="DOWNLOAD"
          >
            <span>Download Resume (PDF)</span>
            <span>↗</span>
          </a>

          <button
            onClick={onOpenContact}
            className="px-6 py-3.5 text-[#949089] hover:text-[#EDEAE4] font-mono-code text-xs uppercase tracking-wider transition-colors cursor-pointer"
            data-cursor="MESSAGE"
          >
            Direct Inquiries →
          </button>
        </div>
      </div>

      {/* Bottom Key Metric Ticker Bar */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 hairline-t font-mono-code">
        <div>
          <span className="block text-2xl md:text-3xl font-bold text-[#EDEAE4] tabular-nums tracking-tight">
            16+
          </span>
          <span className="block text-[11px] text-[#5C5A55] uppercase tracking-wider mt-1">
            Projects Built
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
            Peer-Reviewed Paper (IJRAR)
          </span>
        </div>
      </div>
    </section>
  );
};
