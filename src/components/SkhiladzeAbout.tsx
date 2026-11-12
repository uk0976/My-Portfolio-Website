import React, { useState } from 'react';

interface Milestone {
  num: string;
  year: string;
  badge: string;
  title: string;
  body: string;
  meta: string;
}

const MILESTONES: Milestone[] = [
  {
    num: '01',
    year: '2021–2024',
    badge: 'Class Rank #1',
    title: 'Diploma in AI & Machine Learning',
    body: 'A. R. Kalsekar Polytechnic. Graduated with 90.33% aggregate. Ranked #1 in class across all six consecutive semesters with top marks in machine learning algorithms, discrete mathematics, and database management.',
    meta: 'Rank #1 · 90.33% Aggregate · 6 of 6 Semesters',
  },
  {
    num: '02',
    year: '2024',
    badge: 'Peer-Reviewed Paper',
    title: 'Published Research in IJRAR',
    body: 'Author of peer-reviewed paper: "Multiple Face Recognition Attendance System" published in the International Journal of Research and Analytical Reviews (IJRAR 2024). Presented empirical accuracy evaluations across variable illumination and multi-subject frames.',
    meta: 'IJRAR 2024 · State Symposium Presentation',
  },
  {
    num: '03',
    year: '2024–2025',
    badge: '3 Internships',
    title: 'Three Industrial Internships',
    body: 'Shipped production code across three companies: ExamSetu (full-stack examination platform architecture), MPI Automotives (enterprise web architecture and performance overhaul), and IRABOT TechEd (Python robotics curriculum & automation engines).',
    meta: 'ExamSetu · MPI Automotives · IRABOT TechEd',
  },
  {
    num: '04',
    year: '2024–2027',
    badge: 'B.E. Degree',
    title: 'B.E. in Artificial Intelligence & Data Science',
    body: 'Terna Engineering College, Navi Mumbai. Deep focus on deep neural architectures, transformers, distributed systems, and real-time inference latency minimization.',
    meta: 'Bachelor of Engineering · Ongoing',
  },
  {
    num: '05',
    year: '2026 →',
    badge: 'Production Systems',
    title: 'Independent AI & Systems Engineer',
    body: 'Architecting and deploying 16+ production systems. Specializing in voice forensics (VoiceGuard), clinical RAG summarization (MedInsight), and non-custodial smart contracts (BlockLoan) for 10+ freelance clients worldwide.',
    meta: '16+ Shipped Systems · 10+ Freelance Clients',
  },
];

export const SkhiladzeAbout: React.FC = () => {
  const [activeChap, setActiveChap] = useState(0);
  const curr = MILESTONES[activeChap];

  return (
    <section id="about" className="pt-24 pb-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/[0.08]">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-12 h-3.5 inline-block text-[#FB5E28]">
            <svg viewBox="0 0 52.9 14" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M1.00 1.4L6.76 8.23Q9.60 11.60 12.44 8.23L18.20 1.4" />
              <path d="M20.80 1.4L24.49 5.77Q26.30 7.93 28.12 5.77L31.81 1.4" />
              <path d="M33.47 1.4L35.83 4.20Q36.99 5.58 38.16 4.20L40.52 1.4" />
              <path d="M41.58 1.4L43.09 3.19Q43.84 4.07 44.58 3.19L46.09 1.4" />
              <path d="M46.77 1.4L47.74 2.55Q48.22 3.11 48.69 2.55L49.66 1.4" />
              <path d="M50.09 1.4L50.71 2.13Q51.02 2.50 51.32 2.13L51.94 1.4" />
              <circle cx="9.60" cy="7.32" r="2.4" fill="currentColor" />
            </svg>
          </span>
          <span className="font-mono-code text-xs text-[#FB5E28] uppercase tracking-widest">
            [02 // TRAJECTORY]
          </span>
        </div>

        <h2 className="font-display text-4xl md:text-5xl font-bold text-[#F2F2EF] tracking-tight">
          About &amp; Milestones
        </h2>
      </div>

      {/* Timeline Chapter Selector */}
      <div className="flex flex-wrap gap-2 mb-8">
        {MILESTONES.map((m, idx) => (
          <button
            key={m.num}
            type="button"
            onClick={() => setActiveChap(idx)}
            className={`px-4 py-2 rounded-full font-mono-code text-xs transition-all cursor-pointer ${
              idx === activeChap
                ? 'bg-[#FB5E28] text-white shadow-lg'
                : 'bg-white/[0.04] hover:bg-white/[0.08] text-[#9AA0AA] border border-white/[0.08]'
            }`}
          >
            [{m.num}] {m.year} · {m.badge}
          </button>
        ))}
      </div>

      {/* Active Milestone Card */}
      <div className="p-8 md:p-10 rounded-2xl bg-[#11151C] border border-white/[0.12] mb-16 shadow-xl">
        <span className="font-mono-code text-xs text-[#FB5E28] uppercase tracking-widest font-semibold block mb-2">
          {curr.meta}
        </span>
        <h3 className="font-display text-2xl md:text-4xl font-bold text-[#F2F2EF] mb-4">
          {curr.title}
        </h3>
        <p className="font-sans text-base md:text-lg text-[#9AA0AA] leading-relaxed max-w-3xl">
          {curr.body}
        </p>
      </div>

      {/* Skhiladze Signature Conclusion (.op-final) */}
      <div className="p-8 md:p-12 rounded-2xl bg-[#090C12] border border-white/[0.08] relative overflow-hidden">
        <div className="flex items-center gap-2 mb-4">
          <span className="font-display text-2xl md:text-3xl font-bold text-[#F2F2EF]">
            Umer Khan
          </span>
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FB5E28] shadow-[0_0_10px_rgba(251,94,40,0.8)]" />
        </div>

        <p className="font-display text-xl md:text-3xl font-normal text-[#F2F2EF] max-w-4xl leading-snug tracking-tight">
          "You get the whole cycle from one person: idea, model, pipeline, backend, and production deployment."
        </p>

        {/* Fact Sheet */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-8 pt-8 border-t border-white/[0.08] font-mono-code text-xs">
          <div>
            <span className="text-[#5C626D] block mb-1">BASED IN</span>
            <span className="text-[#F2F2EF]">Kalyan, Maharashtra, India</span>
          </div>
          <div>
            <span className="text-[#5C626D] block mb-1">LANGUAGES</span>
            <span className="text-[#F2F2EF]">English, Hindi, Urdu, Marathi</span>
          </div>
          <div>
            <span className="text-[#5C626D] block mb-1">AVAILABILITY</span>
            <span className="text-[#FB5E28]">Remotely, Worldwide</span>
          </div>
        </div>

        {/* Direct CTAs */}
        <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/[0.08]">
          <a
            href="mailto:umerkhan0976@gmail.com"
            className="px-6 py-3.5 rounded-full bg-[#FB5E28] hover:bg-[#FF7A4D] text-white font-mono-code text-xs uppercase tracking-wider font-semibold transition-all shadow-lg cursor-pointer"
          >
            Direct Transmission (Email) →
          </a>

          <a
            href="/Umerkhan_Resume.pdf"
            download
            className="px-6 py-3.5 rounded-full border border-white/15 hover:border-white/40 bg-white/[0.03] text-[#F2F2EF] font-mono-code text-xs uppercase tracking-wider transition-all cursor-pointer"
          >
            Resume (PDF) ↗
          </a>

          <div className="flex items-center gap-4 ml-auto font-mono-code text-xs text-[#9AA0AA]">
            <a
              href="https://www.linkedin.com/in/umer-khan-57a458288/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F2F2EF] transition-colors"
            >
              LinkedIn
            </a>
            <span>·</span>
            <a
              href="https://github.com/uk0976"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F2F2EF] transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
