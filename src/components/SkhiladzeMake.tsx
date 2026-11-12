import React, { useState } from 'react';

interface CategoryItem {
  num: string;
  title: string;
  leadName: string;
  leadLabel: string;
  desc: string;
  architecture: string;
  stack: string[];
  liveUrl?: string;
  githubUrl: string;
  detailUrl: string;
}

const CATEGORIES: CategoryItem[] = [
  {
    num: '01',
    title: 'Voice & audio biometrics',
    leadName: 'VoiceGuard',
    leadLabel: '2026 · AI Forensics',
    desc: 'Real-time deepfake speech detection, spectral jitter analysis, and chunk-level Wav2Vec2 inference over low-latency WebSockets.',
    architecture: 'Microphone stream → 16kHz PCM chunker → WebSocket broadcast → FastAPI worker → Parallel Wav2Vec2 + Librosa DSP heuristics.',
    stack: ['FastAPI', 'PyTorch', 'Wav2Vec2', 'React 18', 'WebSockets', 'Librosa'],
    liveUrl: 'https://voiceguard-app.onrender.com',
    githubUrl: 'https://github.com/uk0976/VoiceGuard---AI-Voice-Clone-Deepfake-Detector',
    detailUrl: '/work/voiceguard',
  },
  {
    num: '02',
    title: 'Clinical RAG & LLMs',
    leadName: 'MedInsight',
    leadLabel: 'Clinical RAG',
    desc: 'Domain-adapted knowledge retrieval, BioBERT token extraction, and calibrated clinical summaries from unstructured EHRs.',
    architecture: 'Unstructured medical reports → BioBERT NER pipeline → FAISS vector index → Llama-3 clinical distillation prompts.',
    stack: ['Python', 'LangChain', 'BioBERT', 'FAISS', 'Llama-3', 'FastAPI'],
    githubUrl: 'https://github.com/uk0976/MedInsight---RAG-Based-AI-Medical-Report-Summarizer',
    detailUrl: '/work/medinsight',
  },
  {
    num: '03',
    title: 'Computer vision & attendance',
    leadName: 'Multiple Face Recognition System',
    leadLabel: 'IJRAR 2024 Paper',
    desc: 'Real-time multi-person facial detection, LBPH texture histograms, and transactional SQL database logging for educational institutions.',
    architecture: 'Real-time RTSP/Webcam stream → Haar Cascade face locator → LBPH histogram extractor → Transactional SQL attendance ledger.',
    stack: ['Python', 'OpenCV', 'LBPH', 'Haar Cascade', 'SQLite', 'Tkinter'],
    githubUrl: 'https://github.com/uk0976/Multiple-Face-Recognition-Attendance-System',
    detailUrl: '/work/face-attendance',
  },
  {
    num: '04',
    title: 'Decentralized protocols',
    leadName: 'BlockLoan',
    leadLabel: 'Smart Contracts',
    desc: 'Non-custodial smart contracts, simple interest state machines, automated escrow verification, and zero intermediary peer-to-peer lending.',
    architecture: 'Solidity smart contracts → Automated collateral escrow → Hardhat invariant suites → React 18 Web3 interface.',
    stack: ['Solidity', 'Hardhat', 'Ethers.js', 'React 18', 'IPFS'],
    githubUrl: 'https://github.com/uk0976/BlockLoan-Blockchain-Based-Decentralized-Peer-to-Peer-Lending-Platform',
    detailUrl: '/work/blockloan',
  },
  {
    num: '05',
    title: 'Developer platforms & tooling',
    leadName: 'CodeMedic AI',
    leadLabel: 'Dev Ergonomics',
    desc: 'Automated AST semantic runtime diagnostics, bug localization, and automated regression test fixture synthesis.',
    architecture: 'Source file ingestion → AST parser & semantic anomaly detection → Automated pytest fixture generation → FastAPI service.',
    stack: ['TypeScript', 'FastAPI', 'Python AST', 'React 18', 'Docker'],
    githubUrl: 'https://github.com/uk0976',
    detailUrl: '/work/codemedic-ai',
  },
  {
    num: '06',
    title: 'Peer-reviewed research',
    leadName: 'IJRAR 2024 Publication',
    leadLabel: 'Empirical Paper',
    desc: 'Empirical experimentation on biometric facial recognition, accuracy benchmarks under variable illumination, and state symposium presentations.',
    architecture: 'Empirical multi-subject dataset → Multi-illumination testing suite → Comparative Haar vs. Deep CNN benchmark report.',
    stack: ['IJRAR 2024', 'OpenCV', 'Academic Research', 'Peer-Reviewed'],
    githubUrl: 'https://github.com/uk0976/Multiple-Face-Recognition-Attendance-System',
    detailUrl: '/about',
  },
];

export const SkhiladzeMake: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const current = CATEGORIES[activeCategory];

  return (
    <section id="work" className="pt-24 pb-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/[0.08]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Pinned Sidebar with Flock SVG & 6 Categories */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-8">
          <div>
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
                [01 // SPECIALIZATIONS]
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#F2F2EF] tracking-tight">
              What I make
            </h2>
          </div>

          {/* Interactive Category List */}
          <div className="flex flex-col divide-y divide-white/[0.08]">
            {CATEGORIES.map((cat, idx) => {
              const isSelected = idx === activeCategory;
              return (
                <button
                  key={cat.num}
                  type="button"
                  onClick={() => setActiveCategory(idx)}
                  className={`py-4 px-3 flex items-center justify-between text-left transition-all cursor-pointer rounded-lg ${
                    isSelected
                      ? 'bg-white/[0.06] text-[#F2F2EF]'
                      : 'text-[#9AA0AA] hover:text-[#F2F2EF] hover:bg-white/[0.02]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`font-mono-code text-xs font-semibold ${
                        isSelected ? 'text-[#FB5E28]' : 'text-[#5C626D]'
                      }`}
                    >
                      {cat.num}
                    </span>
                    <span className="font-display text-lg md:text-xl font-bold tracking-tight">
                      {cat.title}
                    </span>
                  </div>

                  <span
                    className={`font-mono-code text-xs transition-transform duration-200 ${
                      isSelected ? 'text-[#FB5E28] translate-x-1' : 'text-[#5C626D]'
                    }`}
                  >
                    →
                  </span>
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-white/[0.08]">
            <p className="font-mono-code text-[11px] text-[#5C626D] leading-relaxed">
              Tools: PyTorch, FastAPI, React 18, LangChain, FAISS, BioBERT, OpenCV, Next.js, Supabase, PostgreSQL, GCP, Git.
            </p>
          </div>
        </div>

        {/* Right Column: Active Category Showcase Card */}
        <div className="lg:col-span-7">
          <div className="p-8 md:p-10 rounded-2xl bg-[#11151C] border border-white/[0.12] shadow-2xl relative overflow-hidden">
            {/* Top Indicator */}
            <div className="flex items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
              <span className="font-mono-code text-xs text-[#FB5E28] uppercase tracking-wider font-semibold">
                CATEGORY [{current.num}] · {current.title.toUpperCase()}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 font-mono-code text-[11px] text-[#F2F2EF]">
                {current.leadLabel}
              </span>
            </div>

            {/* Title & Tagline */}
            <div className="my-8">
              <h3 className="font-display text-3xl md:text-5xl font-bold text-[#F2F2EF] tracking-tight">
                {current.leadName}
              </h3>
              <p className="font-sans text-base md:text-lg text-[#9AA0AA] mt-4 leading-relaxed">
                {current.desc}
              </p>
            </div>

            {/* Architecture Invariant */}
            <div className="p-4 rounded-xl bg-[#090C12] border border-white/[0.06] my-6">
              <span className="block font-mono-code text-[10px] text-[#5C626D] tracking-widest uppercase mb-1.5">
                [SYSTEM PIPELINE &amp; ARCHITECTURE]
              </span>
              <p className="font-mono-code text-xs text-[#F2F2EF] leading-relaxed">
                {current.architecture}
              </p>
            </div>

            {/* Tech Stack Chips */}
            <div className="flex flex-wrap gap-2 my-6">
              {current.stack.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] font-mono-code text-xs text-[#9AA0AA]"
                >
                  {s}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/[0.08]">
              {current.liveUrl && (
                <a
                  href={current.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-[#FB5E28] hover:bg-[#FF7A4D] text-white font-mono-code text-xs uppercase tracking-wider font-semibold transition-all shadow-lg cursor-pointer"
                >
                  Launch Live System ↗
                </a>
              )}

              {current.githubUrl && (
                <a
                  href={current.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full border border-white/15 hover:border-white/30 bg-white/[0.03] text-[#F2F2EF] font-mono-code text-xs uppercase tracking-wider transition-all cursor-pointer"
                >
                  Inspect on GitHub ↗
                </a>
              )}

              <a
                href={current.detailUrl}
                className="px-5 py-3 text-[#9AA0AA] hover:text-[#F2F2EF] font-mono-code text-xs uppercase tracking-wider transition-colors ml-auto cursor-pointer"
              >
                Case Study →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
