import React, { useEffect, useRef, useState } from 'react';
import { useMotion } from '../context/MotionContext';

interface ProjectChannel {
  id: string;
  name: string;
  label: string;
  tagline: string;
  tech: string;
  demoUrl?: string;
  githubUrl: string;
  type: string;
}

const HERO_PROJECTS: ProjectChannel[] = [
  {
    id: 'voiceguard',
    name: 'VoiceGuard',
    label: '2026 · AI Forensics',
    tagline: 'Real-time deepfake speech detection with chunk-level Wav2Vec2 inference & spectral jitter analysis.',
    tech: 'FastAPI · PyTorch · Wav2Vec2 · React 18 · WebSockets · Librosa',
    demoUrl: 'https://voiceguard-app.onrender.com',
    githubUrl: 'https://github.com/uk0976/VoiceGuard---AI-Voice-Clone-Deepfake-Detector',
    type: 'audio',
  },
  {
    id: 'medinsight',
    name: 'MedInsight',
    label: 'Clinical RAG',
    tagline: 'Multilingual EHR & clinical report summarizer with BioBERT token classification and FAISS vector retrieval.',
    tech: 'Python · LangChain · BioBERT · FAISS · Llama-3 · FastAPI',
    githubUrl: 'https://github.com/uk0976/MedInsight---RAG-Based-AI-Medical-Report-Summarizer',
    type: 'neural',
  },
  {
    id: 'face-attendance',
    name: 'Face Recognition',
    label: 'IJRAR 2024 Paper',
    tagline: 'Automated attendance system using Haar Cascades, LBPH texture histograms, and transactional SQL recording.',
    tech: 'Python · OpenCV · LBPH · Haar Cascade · SQLite · Tkinter',
    githubUrl: 'https://github.com/uk0976/Multiple-Face-Recognition-Attendance-System',
    type: 'vision',
  },
  {
    id: 'blockloan',
    name: 'BlockLoan',
    label: 'Protocol & Web3',
    tagline: 'Decentralized peer-to-peer lending protocol with automated escrow, interest calculation, and zero intermediaries.',
    tech: 'Solidity · Hardhat · Ethers.js · React 18 · IPFS',
    githubUrl: 'https://github.com/uk0976/BlockLoan-Blockchain-Based-Decentralized-Peer-to-Peer-Lending-Platform',
    type: 'chain',
  },
  {
    id: 'codemedic-ai',
    name: 'CodeMedic AI',
    label: 'Dev Platform',
    tagline: 'Developer platform diagnosing AST semantic runtime anomalies and synthesizing automated unit test fixtures.',
    tech: 'TypeScript · FastAPI · Python AST · React 18 · Docker',
    githubUrl: 'https://github.com/uk0976',
    type: 'code',
  },
];

interface SkhiladzeHeroProps {
  onOpenViewer: (project: ProjectChannel) => void;
}

export const SkhiladzeHero: React.FC<SkhiladzeHeroProps> = ({ onOpenViewer }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { motionEnabled } = useMotion();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);

  // Background Perspective Strip Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
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

    const draw = () => {
      time += motionEnabled ? 0.012 : 0;
      const w = window.innerWidth;
      const h = window.innerHeight;

      ctx.clearRect(0, 0, w, h);

      // Render 5 perspective columns receding into depth
      const cols = 5;
      const colWidth = w / cols;
      const horizonY = h * 0.48;

      ctx.strokeStyle = 'rgba(242, 242, 239, 0.04)';
      ctx.lineWidth = 1;

      // Vanishing lines
      for (let i = 0; i <= cols; i++) {
        const x = i * colWidth;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(w * 0.5 + (x - w * 0.5) * 0.35, horizonY);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(w * 0.5 + (x - w * 0.5) * 0.35, horizonY);
        ctx.lineTo(x, h);
        ctx.stroke();
      }

      // Horizontal depth rings
      for (let r = 0; r < 8; r++) {
        const t = (r / 8 + time * 0.05) % 1;
        const yTop = horizonY * (1 - Math.pow(t, 1.8));
        const yBottom = horizonY + (h - horizonY) * Math.pow(t, 1.8);

        ctx.strokeStyle = `rgba(242, 242, 239, ${0.02 + (1 - t) * 0.04})`;
        ctx.beginPath();
        ctx.moveTo(0, yTop);
        ctx.lineTo(w, yTop);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, yBottom);
        ctx.lineTo(w, yBottom);
        ctx.stroke();
      }

      if (motionEnabled) {
        animId = requestAnimationFrame(draw);
      }
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, [motionEnabled]);

  // Central Gate Active Graphic Canvas (Acoustic / Neural / Vision / Chain visualizer)
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

      // Dark background with subtle gradient
      const bgGrad = ctx.createRadialGradient(w / 2, h / 2, 10, w / 2, h / 2, w / 1.5);
      bgGrad.addColorStop(0, '#151a24');
      bgGrad.addColorStop(1, '#090c12');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, w, h);

      const active = HERO_PROJECTS[activeIndex];

      if (active.type === 'audio') {
        // VoiceGuard: Acoustic wave harmonics & jitter
        const lines = 12;
        for (let l = 0; l < lines; l++) {
          ctx.beginPath();
          ctx.strokeStyle = l === 6 ? '#fb5e28' : `rgba(242, 242, 239, ${0.1 + l * 0.04})`;
          ctx.lineWidth = l === 6 ? 2 : 1;

          for (let x = 0; x < w; x += 4) {
            const normX = x / w;
            const envelope = Math.sin(normX * Math.PI);
            const freq1 = Math.sin(normX * 18 + t * 2 + l * 0.4);
            const freq2 = Math.cos(normX * 36 - t * 1.5);
            const y = h * 0.5 + (freq1 * 28 + freq2 * 14) * envelope * (1 - Math.abs(l - 6) / 7);

            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
        }
      } else if (active.type === 'neural') {
        // MedInsight: Neural graph node cluster
        const nodes = 18;
        const centerX = w * 0.5;
        const centerY = h * 0.5;

        for (let i = 0; i < nodes; i++) {
          const angle = (i / nodes) * Math.PI * 2 + t * 0.2;
          const radius = 60 + Math.sin(i * 1.5 + t) * 25;
          const x = centerX + Math.cos(angle) * radius;
          const y = centerY + Math.sin(angle) * (radius * 0.6);

          // Connect to center
          ctx.strokeStyle = 'rgba(251, 94, 40, 0.25)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(centerX, centerY);
          ctx.lineTo(x, y);
          ctx.stroke();

          // Connect to neighbors
          const nextAngle = ((i + 1) / nodes) * Math.PI * 2 + t * 0.2;
          const nextR = 60 + Math.sin((i + 1) * 1.5 + t) * 25;
          ctx.strokeStyle = 'rgba(242, 242, 239, 0.12)';
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(centerX + Math.cos(nextAngle) * nextR, centerY + Math.sin(nextAngle) * (nextR * 0.6));
          ctx.stroke();

          // Node dot
          ctx.fillStyle = i % 3 === 0 ? '#fb5e28' : '#f2f2ef';
          ctx.beginPath();
          ctx.arc(x, y, i % 3 === 0 ? 3.5 : 2, 0, Math.PI * 2);
          ctx.fill();
        }
      } else if (active.type === 'vision') {
        // Face Recognition: Bounding boxes & facial landmark mesh
        ctx.strokeStyle = '#fb5e28';
        ctx.lineWidth = 1.5;
        const boxW = 140;
        const boxH = 170;
        const bx = (w - boxW) / 2;
        const by = (h - boxH) / 2;

        // Bounding brackets
        const bLen = 18;
        ctx.beginPath();
        // Top-left
        ctx.moveTo(bx, by + bLen); ctx.lineTo(bx, by); ctx.lineTo(bx + bLen, by);
        // Top-right
        ctx.moveTo(bx + boxW - bLen, by); ctx.lineTo(bx + boxW, by); ctx.lineTo(bx + boxW, by + bLen);
        // Bottom-left
        ctx.moveTo(bx, by + boxH - bLen); ctx.lineTo(bx, by + boxH); ctx.lineTo(bx + bLen, by + boxH);
        // Bottom-right
        ctx.moveTo(bx + boxW - bLen, by + boxH); ctx.lineTo(bx + boxW, by + boxH); ctx.lineTo(bx + boxW, by + boxH - bLen);
        ctx.stroke();

        // Scanline
        const scanY = by + (Math.sin(t * 2) * 0.5 + 0.5) * boxH;
        ctx.strokeStyle = 'rgba(251, 94, 40, 0.6)';
        ctx.beginPath();
        ctx.moveTo(bx + 5, scanY);
        ctx.lineTo(bx + boxW - 5, scanY);
        ctx.stroke();
      } else {
        // BlockLoan / Code: Grid matrix
        ctx.strokeStyle = 'rgba(242, 242, 239, 0.08)';
        ctx.lineWidth = 1;
        const step = 24;
        for (let x = 0; x < w; x += step) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, h);
          ctx.stroke();
        }
        for (let y = 0; y < h; y += step) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(w, y);
          ctx.stroke();
        }
        // Active data pulses
        ctx.fillStyle = '#fb5e28';
        const pulseX = (Math.floor(t * 3) * step) % w;
        ctx.fillRect(pulseX, h * 0.5, step, step);
      }

      // Live HUD labels
      ctx.fillStyle = 'rgba(242, 242, 239, 0.4)';
      ctx.font = '10px monospace';
      ctx.fillText(`CHANNEL: [0${activeIndex + 1}] // ${active.name.toUpperCase()}`, 16, 24);
      ctx.fillText(`INFERENCE: REAL-TIME // ACCURACY: 98.4%`, 16, h - 16);

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
    <section className="hero" id="top" data-items="5" data-centres="[0, 1, 2, 3, 4]">
      <h1 className="sr">Umer Khan, AI &amp; systems engineer</h1>

      <div className="hero__pin">
        {/* Fullscreen Perspective Corridor Canvas */}
        <canvas className="strip" ref={canvasRef} aria-hidden="true" />

        {/* Central Skhiladze Perspective Gate (.gate) */}
        <div className="gate">
          <div className="gate__frame">
            {/* Live Interactive Preview Canvas */}
            <canvas
              ref={previewCanvasRef}
              className="gate__v is-on"
              style={{ width: '100%', height: '100%', display: 'block' }}
              onClick={() => onOpenViewer(activeProject)}
            />

            {/* Row Selector Tabs with Play Buttons */}
            <div className="gate__rows">
              {HERO_PROJECTS.map((proj, idx) => {
                const isCurrent = idx === activeIndex;
                return (
                  <div
                    key={proj.id}
                    className={`gate__row ${isCurrent ? 'is-on' : ''}`}
                    data-i={idx}
                    aria-current={isCurrent ? 'true' : undefined}
                    onMouseEnter={() => setActiveIndex(idx)}
                    onClick={() => onOpenViewer(proj)}
                  >
                    <span className="gate__tab" data-gl-shield>
                      <b>{proj.name}</b> <span>{proj.label}</span>
                    </span>

                    <button
                      className="gate__play"
                      type="button"
                      data-gl-shield
                      aria-label={`Inspect ${proj.name}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenViewer(proj);
                      }}
                    >
                      <span className="gate__pl" aria-hidden="true">
                        {isCurrent ? 'Watch with sound' : 'Inspect system'}
                      </span>
                      <svg className="gate__ic" viewBox="0 0 58 58" aria-hidden="true">
                        <path d="M21.9 19.5V38.5L39 29Z" />
                      </svg>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Channel Switcher Dots (.dots) */}
        <div className="dots" role="group" aria-label="Projects in the corridor">
          {HERO_PROJECTS.map((proj, idx) => (
            <button
              key={proj.id}
              className={`dots__b ${idx === activeIndex ? 'is-on' : ''}`}
              type="button"
              data-i={idx}
              aria-label={proj.name}
              aria-current={idx === activeIndex ? 'true' : undefined}
              onClick={() => setActiveIndex(idx)}
            />
          ))}
        </div>

        {/* Swipe Prompt */}
        <p className="swipe" aria-hidden="true">
          <svg className="swipe__ic" viewBox="0 0 16 30">
            <path d="M2.6 26L8 20.6 13.4 26" />
            <path d="M2.6 17L8 11.6 13.4 17" />
            <circle cx="8" cy="4.4" r="2.5" />
          </svg>
          <span className="swipe__t">Scroll to explore</span>
        </p>

        {/* Telegram Direct Action Button (.hero__tg) */}
        <a
          className="btn btn--tg hero__tg"
          href="mailto:umerkhan0976@gmail.com"
          aria-label="Direct transmission to Umer Khan"
        >
          <span className="pt" aria-hidden="true"></span>
          <span className="roll">
            <span>Direct Transmission</span>
            <span aria-hidden="true" data-t="Direct Transmission"></span>
          </span>
        </a>
      </div>
    </section>
  );
};
