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
  const bgCanvasRef = useRef<HTMLCanvasElement>(null);
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);

  // Background 3D Perspective Tunnel Corridor Canvas (matching Skhiladze frame_120s.jpg)
  useEffect(() => {
    const canvas = bgCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let time = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    const drawCorridor = () => {
      time += motionEnabled ? 0.008 : 0;
      const w = window.innerWidth;
      const h = window.innerHeight;
      const cx = w * 0.5;
      const cy = h * 0.46;

      ctx.clearRect(0, 0, w, h);

      // Deep dark base
      ctx.fillStyle = '#090C12';
      ctx.fillRect(0, 0, w, h);

      // Subtle atmospheric purple glow from the top center (like in Skhiladze showreel)
      const glow = ctx.createRadialGradient(cx, cy * 0.3, 10, cx, cy * 0.5, w * 0.6);
      glow.addColorStop(0, 'rgba(150, 40, 200, 0.16)');
      glow.addColorStop(0.5, 'rgba(251, 94, 40, 0.06)');
      glow.addColorStop(1, 'transparent');
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, w, h);

      // Receding vertical cards along left and right walls of the tunnel
      const rows = 12;
      const speed = time * 0.4;

      for (let r = 0; r < rows; r++) {
        // depth from 0 (close) to 1 (far)
        const depth = ((r / rows + speed) % 1);
        const invDepth = 1 - depth; // 1 = close, 0 = far
        const scale = Math.pow(invDepth, 2.2);

        if (scale < 0.05) continue;

        const cardW = 120 * scale;
        const cardH = 200 * scale;
        const xOffset = (w * 0.52) * Math.pow(invDepth, 1.3);

        const alpha = Math.min(0.25, invDepth * 0.35);

        // Left card
        const lx = cx - xOffset - cardW;
        const ly = cy - cardH * 0.5;
        ctx.fillStyle = `rgba(20, 25, 38, ${alpha})`;
        ctx.strokeStyle = `rgba(180, 80, 250, ${alpha * 0.8})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.roundRect(lx, ly, cardW, cardH, 4 * scale);
        ctx.fill();
        ctx.stroke();

        // Right card
        const rx = cx + xOffset;
        const ry = cy - cardH * 0.5;
        ctx.fillStyle = `rgba(20, 25, 38, ${alpha})`;
        ctx.strokeStyle = `rgba(180, 80, 250, ${alpha * 0.8})`;
        ctx.beginPath();
        ctx.roundRect(rx, ry, cardW, cardH, 4 * scale);
        ctx.fill();
        ctx.stroke();
      }

      if (motionEnabled) {
        animId = requestAnimationFrame(drawCorridor);
      }
    };

    drawCorridor();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, [motionEnabled]);

  // Central Card Interactive Visualizer
  useEffect(() => {
    const canvas = previewCanvasRef.current;
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

    const renderPreview = () => {
      t += motionEnabled ? 0.03 : 0;
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      ctx.clearRect(0, 0, w, h);

      // Deep radial glow
      const bgGrad = ctx.createRadialGradient(w / 2, h / 2, 10, w / 2, h / 2, w / 1.3);
      bgGrad.addColorStop(0, '#161B26');
      bgGrad.addColorStop(1, '#0A0D14');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, w, h);

      const active = HERO_PROJECTS[activeIndex];

      if (active.type === 'audio') {
        // VoiceGuard: Acoustic wave harmonics & jitter
        const lines = 16;
        for (let l = 0; l < lines; l++) {
          ctx.beginPath();
          const isCenter = l === 8;
          ctx.strokeStyle = isCenter ? '#FB5E28' : `rgba(242, 242, 239, ${0.08 + l * 0.03})`;
          ctx.lineWidth = isCenter ? 2.5 : 1;

          for (let x = 0; x < w; x += 3) {
            const normX = x / w;
            const envelope = Math.sin(normX * Math.PI);
            const wave1 = Math.sin(normX * 16 + t * 2.2 + l * 0.35);
            const wave2 = Math.cos(normX * 32 - t * 1.8);
            const y = h * 0.5 + (wave1 * 34 + wave2 * 14) * envelope * (1 - Math.abs(l - 8) / 9);

            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
        }
      } else if (active.type === 'neural') {
        // MedInsight: Neural graph constellation
        const nodes = 22;
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

          // Lines to neighbor
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

        // Facial landmarks
        ctx.fillStyle = 'rgba(242, 242, 239, 0.8)';
        const landmarks = [
          [bx + 55, by + 75], [bx + 125, by + 75],
          [bx + 90, by + 115],
          [bx + 70, by + 155], [bx + 110, by + 155],
        ];
        landmarks.forEach(([lx, ly]) => {
          ctx.beginPath();
          ctx.arc(lx, ly, 3, 0, Math.PI * 2);
          ctx.fill();
        });
      } else {
        // Grid Matrix
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

      // Live HUD Telemetry
      ctx.fillStyle = 'rgba(242, 242, 239, 0.5)';
      ctx.font = '11px monospace';
      ctx.fillText(`CHANNEL: [0${activeIndex + 1}] // ${active.name.toUpperCase()}`, 20, 30);
      ctx.fillText(`METRICS: ${active.metrics}`, 20, h - 20);

      if (motionEnabled) {
        animId = requestAnimationFrame(renderPreview);
      }
    };

    renderPreview();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, [activeIndex, motionEnabled]);

  const activeProject = HERO_PROJECTS[activeIndex];

  return (
    <section id="top" className="relative min-h-[92vh] flex flex-col justify-between pt-24 pb-32 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Background 3D Perspective Tunnel Canvas */}
      <canvas
        ref={bgCanvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none -z-10"
      />

      {/* Main Central Gate Monitor (16:9 aspect ratio, exactly matching Skhiladze) */}
      <div className="relative my-auto flex flex-col items-center justify-center">
        <div className="relative w-full max-w-3xl aspect-[16/9] rounded-2xl overflow-hidden border border-white/[0.12] bg-[#0A0D14] shadow-[0_20px_60px_rgba(0,0,0,0.8)] group">
          {/* Visualizer Canvas */}
          <canvas
            ref={previewCanvasRef}
            className="w-full h-full block cursor-pointer"
            onClick={() => onOpenViewer(activeProject)}
          />

          {/* Bottom Left Pill Badge (e.g. "VoiceGuard 2026 · AI Forensics") */}
          <div className="absolute bottom-5 left-5 z-10">
            <div className="px-4 py-1.5 rounded-full bg-white text-black font-display font-bold text-xs sm:text-sm tracking-tight shadow-xl flex items-center gap-2">
              <span>{activeProject.name}</span>
              <span className="font-mono-code font-normal text-[11px] text-[#5C626D]">{activeProject.label}</span>
            </div>
          </div>

          {/* Bottom Right Circle Play Button */}
          <div className="absolute bottom-5 right-5 z-10">
            <button
              type="button"
              onClick={() => onOpenViewer(activeProject)}
              className="w-10 h-10 rounded-full bg-white text-black hover:bg-[#FB5E28] hover:text-white flex items-center justify-center shadow-xl transition-all duration-300 cursor-pointer"
              aria-label={`Play ${activeProject.name}`}
            >
              <svg width="12" height="12" viewBox="0 0 58 58" fill="currentColor">
                <path d="M21.9 19.5V38.5L39 29Z" />
              </svg>
            </button>
          </div>
        </div>

        {/* 5 Channel Dashes with Orange Reticle Tracker (matching frame_120s.jpg) */}
        <div className="flex items-center gap-3 mt-6">
          {HERO_PROJECTS.map((proj, idx) => {
            const isCurrent = idx === activeIndex;
            return (
              <button
                key={proj.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className="group p-2 cursor-pointer flex items-center justify-center"
                aria-label={`Switch to ${proj.name}`}
              >
                {isCurrent ? (
                  <div className="flex items-center gap-1.5">
                    <span className="w-4 h-0.5 bg-[#FB5E28] rounded-full" />
                    <span className="w-2.5 h-2.5 rounded-full border border-[#FB5E28] flex items-center justify-center">
                      <span className="w-1 h-1 rounded-full bg-[#FB5E28]" />
                    </span>
                    <span className="w-4 h-0.5 bg-[#FB5E28] rounded-full" />
                  </div>
                ) : (
                  <span className="w-6 h-0.5 bg-white/20 group-hover:bg-white/50 rounded-full transition-colors" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Telemetry Row & Action Links */}
      <div className="pt-6 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-8 font-mono-code text-xs text-[#5C626D]">
          <div>
            <span className="text-[#F2F2EF] font-bold text-sm block">16+</span>
            <span>SYSTEMS SHIPPED</span>
          </div>
          <div>
            <span className="text-[#F2F2EF] font-bold text-sm block">03</span>
            <span>INTERNSHIPS</span>
          </div>
          <div>
            <span className="text-[#F2F2EF] font-bold text-sm block">#1 RANK</span>
            <span>90.33% DIPLOMA</span>
          </div>
          <div>
            <span className="text-[#F2F2EF] font-bold text-sm block">01 PAPER</span>
            <span>IJRAR 2024</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#work"
            className="px-6 py-2.5 bg-[#F2F2EF] hover:bg-[#FB5E28] text-black hover:text-white font-mono-code text-xs uppercase tracking-wider font-semibold transition-all rounded-full shadow"
          >
            Explore Work ↓
          </a>
          <a
            href="/Umerkhan_Resume.pdf"
            download
            className="px-6 py-2.5 border border-white/20 hover:border-white/40 text-[#F2F2EF] font-mono-code text-xs uppercase tracking-wider rounded-full transition-all"
          >
            Resume (PDF) ↗
          </a>
        </div>
      </div>
    </section>
  );
};
