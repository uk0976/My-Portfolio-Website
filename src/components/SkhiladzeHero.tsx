import React, { useEffect, useRef, useState } from 'react';
import { useMotion } from '../context/MotionContext';

export interface HeroProject {
  id: string;
  number: string;
  name: string;
  label: string;
  tagline: string;
  tech: string;
  metrics: string;
  demoUrl?: string;
  githubUrl: string;
  type: 'audio' | 'neural' | 'vision' | 'chain' | 'code';
}

const HERO_PROJECTS: HeroProject[] = [
  {
    id: 'voiceguard',
    number: '01',
    name: 'VoiceGuard',
    label: '2026 · AI Forensics',
    tagline: 'Real-time biometric deepfake speech detection with chunk-level Wav2Vec2 inference & spectral jitter analysis.',
    tech: 'FastAPI · PyTorch · Wav2Vec2 · React 18 · WebSockets · Librosa',
    metrics: '98.4% Accuracy · < 280ms Stream Latency',
    demoUrl: 'https://voiceguard-app.onrender.com',
    githubUrl: 'https://github.com/uk0976/VoiceGuard---AI-Voice-Clone-Deepfake-Detector',
    type: 'audio',
  },
  {
    id: 'medinsight',
    number: '02',
    name: 'MedInsight',
    label: 'Clinical RAG & LLMs',
    tagline: 'Multilingual EHR clinical report summarizer with BioBERT token extraction and FAISS vector retrieval.',
    tech: 'Python · LangChain · BioBERT · FAISS · Llama-3 · FastAPI',
    metrics: 'Multilingual Clinical Summaries · Zero Token Leakage',
    githubUrl: 'https://github.com/uk0976/MedInsight---RAG-Based-AI-Medical-Report-Summarizer',
    type: 'neural',
  },
  {
    id: 'face-attendance',
    number: '03',
    name: 'Face Recognition System',
    label: 'IJRAR 2024 Paper',
    tagline: 'Real-time multi-person facial detection, LBPH texture histograms, and transactional SQL attendance database.',
    tech: 'Python · OpenCV · LBPH · Haar Cascade · SQLite · Tkinter',
    metrics: 'Published in IJRAR 2024 · 99.2% Accuracy',
    githubUrl: 'https://github.com/uk0976/Multiple-Face-Recognition-Attendance-System',
    type: 'vision',
  },
  {
    id: 'blockloan',
    number: '04',
    name: 'BlockLoan',
    label: 'Decentralized Protocol',
    tagline: 'Non-custodial smart contracts for peer-to-peer lending with automated escrow, interest calculation, and zero intermediaries.',
    tech: 'Solidity · Hardhat · Ethers.js · React 18 · IPFS',
    metrics: '100% Invariant Pass Rate · Zero Intermediaries',
    githubUrl: 'https://github.com/uk0976/BlockLoan-Blockchain-Based-Decentralized-Peer-to-Peer-Lending-Platform',
    type: 'chain',
  },
  {
    id: 'codemedic-ai',
    number: '05',
    name: 'CodeMedic AI',
    label: 'Developer Platform',
    tagline: 'Developer platform diagnosing AST semantic runtime anomalies and synthesizing automated unit test fixtures.',
    tech: 'TypeScript · FastAPI · Python AST · React 18 · Docker',
    metrics: 'Automated AST Regression Testing',
    githubUrl: 'https://github.com/uk0976',
    type: 'code',
  },
];

interface SkhiladzeHeroProps {
  onOpenViewer: (project: HeroProject) => void;
}

export const SkhiladzeHero: React.FC<SkhiladzeHeroProps> = ({ onOpenViewer }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { motionEnabled } = useMotion();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Dynamic visualizer for the active project
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    const render = () => {
      t += motionEnabled ? 0.03 : 0;
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      ctx.clearRect(0, 0, w, h);

      // Deep studio background
      const bgGrad = ctx.createRadialGradient(w / 2, h / 2, 10, w / 2, h / 2, w / 1.4);
      bgGrad.addColorStop(0, '#151A24');
      bgGrad.addColorStop(1, '#090C12');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, w, h);

      const active = HERO_PROJECTS[activeIndex];

      if (active.type === 'audio') {
        // VoiceGuard: Acoustic wave harmonics & jitter
        const lines = 14;
        for (let l = 0; l < lines; l++) {
          ctx.beginPath();
          const isCenter = l === 7;
          ctx.strokeStyle = isCenter ? '#FB5E28' : `rgba(242, 242, 239, ${0.08 + l * 0.03})`;
          ctx.lineWidth = isCenter ? 2.5 : 1;

          for (let x = 0; x < w; x += 3) {
            const normX = x / w;
            const envelope = Math.sin(normX * Math.PI);
            const wave1 = Math.sin(normX * 16 + t * 2.2 + l * 0.35);
            const wave2 = Math.cos(normX * 32 - t * 1.8);
            const y = h * 0.5 + (wave1 * 34 + wave2 * 14) * envelope * (1 - Math.abs(l - 7) / 8);

            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
        }
      } else if (active.type === 'neural') {
        // MedInsight: Neural graph constellation
        const nodes = 20;
        const cx = w * 0.5;
        const cy = h * 0.5;

        for (let i = 0; i < nodes; i++) {
          const angle = (i / nodes) * Math.PI * 2 + t * 0.15;
          const radius = 70 + Math.sin(i * 1.8 + t) * 30;
          const x = cx + Math.cos(angle) * radius;
          const y = cy + Math.sin(angle) * (radius * 0.65);

          // Lines to center
          ctx.strokeStyle = 'rgba(251, 94, 40, 0.25)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.lineTo(x, y);
          ctx.stroke();

          // Lines to next
          const nextAngle = ((i + 1) / nodes) * Math.PI * 2 + t * 0.15;
          const nextR = 70 + Math.sin((i + 1) * 1.8 + t) * 30;
          ctx.strokeStyle = 'rgba(242, 242, 239, 0.1)';
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(cx + Math.cos(nextAngle) * nextR, cy + Math.sin(nextAngle) * (nextR * 0.65));
          ctx.stroke();

          // Nodes
          ctx.fillStyle = i % 4 === 0 ? '#FB5E28' : '#F2F2EF';
          ctx.beginPath();
          ctx.arc(x, y, i % 4 === 0 ? 4 : 2, 0, Math.PI * 2);
          ctx.fill();
        }
      } else if (active.type === 'vision') {
        // Face Recognition: Bounding reticle and scanline
        const bw = 180;
        const bh = 220;
        const bx = (w - bw) / 2;
        const by = (h - bh) / 2;
        const bLen = 22;

        ctx.strokeStyle = '#FB5E28';
        ctx.lineWidth = 2;
        ctx.beginPath();
        // Corners
        ctx.moveTo(bx, by + bLen); ctx.lineTo(bx, by); ctx.lineTo(bx + bLen, by);
        ctx.moveTo(bx + bw - bLen, by); ctx.lineTo(bx + bw, by); ctx.lineTo(bx + bw, by + bLen);
        ctx.moveTo(bx, by + bh - bLen); ctx.lineTo(bx, by + bh); ctx.lineTo(bx + bLen, by + bh);
        ctx.moveTo(bx + bw - bLen, by + bh); ctx.lineTo(bx + bw, by + bh); ctx.lineTo(bx + bw, by + bh - bLen);
        ctx.stroke();

        // Scanline
        const scanY = by + (Math.sin(t * 2) * 0.5 + 0.5) * bh;
        ctx.strokeStyle = 'rgba(251, 94, 40, 0.7)';
        ctx.beginPath();
        ctx.moveTo(bx + 4, scanY);
        ctx.lineTo(bx + bw - 4, scanY);
        ctx.stroke();

        // Face mesh landmark points
        ctx.fillStyle = 'rgba(242, 242, 239, 0.8)';
        const landmarks = [
          [bx + 55, by + 75], [bx + 125, by + 75], // eyes
          [bx + 90, by + 115], // nose
          [bx + 70, by + 155], [bx + 110, by + 155], // mouth
        ];
        landmarks.forEach(([lx, ly]) => {
          ctx.beginPath();
          ctx.arc(lx, ly, 3, 0, Math.PI * 2);
          ctx.fill();
        });
      } else {
        // Matrix Grid
        ctx.strokeStyle = 'rgba(242, 242, 239, 0.08)';
        ctx.lineWidth = 1;
        const step = 28;
        for (let x = 0; x < w; x += step) {
          ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
        }
        for (let y = 0; y < h; y += step) {
          ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
        }
        ctx.fillStyle = '#FB5E28';
        const pulse = (Math.floor(t * 4) * step) % w;
        ctx.fillRect(pulse, h * 0.5, step, step);
      }

      // HUD Telemetry
      ctx.fillStyle = 'rgba(242, 242, 239, 0.5)';
      ctx.font = '11px monospace';
      ctx.fillText(`SYSTEM: [0${activeIndex + 1}] // ${active.name.toUpperCase()}`, 20, 30);
      ctx.fillText(`METRICS: ${active.metrics}`, 20, h - 20);

      if (motionEnabled) {
        animId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, [activeIndex, motionEnabled]);

  const activeProject = HERO_PROJECTS[activeIndex];

  return (
    <section id="top" className="relative pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Top Header Typography & Bio */}
      <div className="flex flex-col items-start mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#FB5E28] animate-pulse" />
          <p className="font-mono-code text-xs md:text-sm tracking-widest text-[#FB5E28] uppercase font-semibold">
            [AI &amp; SYSTEMS ENGINEER]
          </p>
        </div>

        <h1 className="font-display text-[12vw] sm:text-[9vw] lg:text-[7.5vw] font-bold leading-[0.88] tracking-[-0.04em] text-[#F2F2EF] uppercase">
          UMER KHAN
        </h1>

        <div className="w-full flex flex-col md:flex-row md:items-baseline md:justify-between gap-4 mt-4">
          <p className="font-mono-code text-xs md:text-sm text-[#F2F2EF] uppercase tracking-wider">
            DOCTOR UMERKHAN JUNAIDKHAN
          </p>
          <p className="max-w-xl font-sans text-sm md:text-base text-[#9AA0AA] leading-relaxed">
            I engineer biometric audio forensics, clinical RAG architectures, and computer vision systems—and ship the production backend and web platforms to scale them.
          </p>
        </div>

        {/* Three-Beat Signature Intro Line */}
        <div className="mt-6 px-4 py-3 bg-[#11151C] border border-white/[0.08] rounded-md font-mono-code text-xs text-[#F2F2EF] tracking-wider uppercase flex items-center gap-2">
          <span className="text-[#FB5E28]">↳</span>
          <span>Trained in AI. Tested in internships. Shipped in production.</span>
        </div>
      </div>

      {/* Skhiladze Signature Central Gate / Showreel Theater */}
      <div className="relative my-8">
        <div className="relative rounded-2xl overflow-hidden border border-white/[0.12] bg-[#090C12] shadow-2xl">
          {/* 16:9 Screen */}
          <div className="relative w-full aspect-video md:aspect-[21/9] bg-black overflow-hidden">
            <canvas
              ref={canvasRef}
              className="w-full h-full block cursor-pointer"
              onClick={() => onOpenViewer(activeProject)}
            />

            {/* Play Button Overlay */}
            <div className="absolute bottom-6 right-6 z-10">
              <button
                type="button"
                onClick={() => onOpenViewer(activeProject)}
                className="flex items-center gap-3 px-5 py-3 rounded-full bg-[#F2F2EF] hover:bg-[#FB5E28] text-black hover:text-white font-mono-code text-xs uppercase tracking-wider font-semibold transition-all duration-300 shadow-xl cursor-pointer"
              >
                <span>Inspect System</span>
                <svg width="14" height="14" viewBox="0 0 58 58" fill="currentColor">
                  <path d="M21.9 19.5V38.5L39 29Z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Skhiladze 5 Project Channel Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-5 border-t border-white/[0.08] divide-x divide-white/[0.08] bg-[#11151C]">
            {HERO_PROJECTS.map((proj, idx) => {
              const isCurrent = idx === activeIndex;
              return (
                <button
                  key={proj.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`p-4 text-left transition-colors cursor-pointer flex flex-col justify-between gap-1.5 ${
                    isCurrent
                      ? 'bg-white/[0.06] border-b-2 border-b-[#FB5E28]'
                      : 'hover:bg-white/[0.02]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono-code text-[11px] text-[#FB5E28]">
                      [{proj.number}]
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  </div>
                  <div>
                    <div className="font-display text-sm md:text-base font-bold text-[#F2F2EF]">
                      {proj.name}
                    </div>
                    <div className="font-mono-code text-[10px] text-[#9AA0AA] truncate">
                      {proj.label}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Telemetry Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 mt-6 border-t border-white/[0.08] font-mono-code text-xs text-[#5C626D]">
        <div>
          <span className="block text-3xl font-bold text-[#F2F2EF] tabular-nums">16+</span>
          <span>SYSTEMS SHIPPED</span>
        </div>
        <div>
          <span className="block text-3xl font-bold text-[#F2F2EF] tabular-nums">03</span>
          <span>INDUSTRY INTERNSHIPS</span>
        </div>
        <div>
          <span className="block text-3xl font-bold text-[#F2F2EF] tabular-nums">#1 RANK</span>
          <span>6 OF 6 SEMS (90.33%)</span>
        </div>
        <div>
          <span className="block text-3xl font-bold text-[#F2F2EF] tabular-nums">01 PAPER</span>
          <span>IJRAR 2024 PUBLISHED</span>
        </div>
      </div>

      {/* Fast Action Buttons */}
      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href="#work"
          className="px-7 py-3.5 bg-[#F2F2EF] hover:bg-[#FB5E28] text-black hover:text-white font-mono-code text-xs uppercase tracking-wider font-semibold transition-all duration-300 rounded-full cursor-pointer shadow-lg"
        >
          Explore Work [01] →
        </a>

        <a
          href="/Umerkhan_Resume.pdf"
          download
          className="px-7 py-3.5 border border-white/15 hover:border-white/40 bg-white/[0.02] text-[#F2F2EF] font-mono-code text-xs uppercase tracking-wider rounded-full transition-all duration-300 cursor-pointer"
        >
          Download Resume (PDF) ↗
        </a>

        <a
          href="mailto:umerkhan0976@gmail.com"
          className="px-6 py-3.5 text-[#9AA0AA] hover:text-[#F2F2EF] font-mono-code text-xs uppercase tracking-wider transition-colors cursor-pointer"
        >
          Direct Transmission →
        </a>
      </div>
    </section>
  );
};
