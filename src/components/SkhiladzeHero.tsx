import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
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
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { motionEnabled } = useMotion();
  const bgCanvasRef = useRef<HTMLCanvasElement>(null);
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);

  // 1. Genuine Three.js 3D WebGL Perspective Corridor Tunnel
  useEffect(() => {
    const canvas = bgCanvasRef.current;
    if (!canvas) return;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Scene & Fog
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2('#090C12', 0.016);

    // Camera
    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 300);
    camera.position.set(0, 0, 16);

    // Lighting
    const ambientLight = new THREE.AmbientLight('#ffffff', 0.4);
    scene.add(ambientLight);

    const pointLightVermilion = new THREE.PointLight('#FB5E28', 2.5, 80);
    pointLightVermilion.position.set(0, 5, -20);
    scene.add(pointLightVermilion);

    const pointLightViolet = new THREE.PointLight('#7B3FE4', 1.8, 100);
    pointLightViolet.position.set(0, -10, -50);
    scene.add(pointLightViolet);

    // 3D Portal Frames (The Receding Tunnel)
    const portalGroup = new THREE.Group();
    scene.add(portalGroup);

    const portalCount = 22;
    const portalSpacing = 8;
    const tunnelLength = portalCount * portalSpacing;
    const portals: THREE.LineSegments[] = [];

    const frameWidth = 26;
    const frameHeight = 15;
    const boxGeo = new THREE.BoxGeometry(frameWidth, frameHeight, 1.2);
    const edgesGeo = new THREE.EdgesGeometry(boxGeo);

    for (let i = 0; i < portalCount; i++) {
      const zPos = -i * portalSpacing;
      const isAccent = i % 4 === 0;

      const mat = new THREE.LineBasicMaterial({
        color: isAccent ? new THREE.Color('#FB5E28') : new THREE.Color('#222B3D'),
        transparent: true,
        opacity: isAccent ? 0.65 : 0.25,
      });

      const line = new THREE.LineSegments(edgesGeo, mat);
      line.position.set(0, 0, zPos);
      portalGroup.add(line);
      portals.push(line);
    }

    // 3D Floating Particles / Volumetric Stars
    const particleCount = 750;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 60;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 40;
      particlePositions[i * 3 + 2] = -Math.random() * tunnelLength + 10;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: new THREE.Color('#F2F2EF'),
      size: 0.18,
      transparent: true,
      opacity: 0.4,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Mouse Parallax Targets
    let targetX = 0;
    let targetY = 0;

    const onPointerMove = (e: PointerEvent) => {
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = (e.clientY / window.innerHeight) * 2 - 1;
      targetX = normX;
      targetY = normY;
      setMousePos({ x: normX, y: normY });
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', onResize);

    // Animation Loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const delta = clock.getDelta();
      const speed = motionEnabled ? delta * 12 : 0;

      // Advance portals forward toward camera
      for (let i = 0; i < portals.length; i++) {
        portals[i].position.z += speed;
        if (portals[i].position.z > 18) {
          portals[i].position.z -= tunnelLength;
        }
      }

      // Smooth camera parallax
      camera.position.x += (targetX * 3.5 - camera.position.x) * 0.05;
      camera.position.y += (-targetY * 2.5 - camera.position.y) * 0.05;
      camera.rotation.z += (-targetX * 0.03 - camera.rotation.z) * 0.05;
      camera.lookAt(0, 0, -45);

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animId);
      boxGeo.dispose();
      edgesGeo.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, [motionEnabled]);

  // 2. Central 16:9 Gate Interactive Visualizer
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

          ctx.fillStyle = i % 3 === 0 ? '#FB5E28' : 'rgba(242, 242, 239, 0.7)';
          ctx.beginPath();
          ctx.arc(x, y, 3.5, 0, Math.PI * 2);
          ctx.fill();

          if (i > 0) {
            ctx.strokeStyle = 'rgba(242, 242, 239, 0.12)';
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(x, y);
            ctx.stroke();
          }
        }
      } else if (active.type === 'vision') {
        // Face Attendance: Facial Landmark Mesh
        const bx = w * 0.5 - 90;
        const by = h * 0.5 - 110;
        ctx.strokeStyle = '#FB5E28';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(bx, by, 180, 220);

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

  // 3D dynamic tilt for the floating monitor gate
  const tiltX = -mousePos.y * 8;
  const tiltY = mousePos.x * 10;

  return (
    <section id="top" className="relative min-h-[94vh] flex flex-col justify-between pt-24 pb-32 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Background 3D Perspective WebGL Corridor Canvas */}
      <canvas
        ref={bgCanvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none -z-10 block"
      />

      {/* Main Central Gate Monitor (16:9 aspect ratio with 3D tilt) */}
      <div
        className="relative my-auto flex flex-col items-center justify-center transition-transform duration-200 ease-out"
        style={{
          transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
        }}
      >
        <div className="relative w-full max-w-3xl aspect-[16/9] rounded-2xl overflow-hidden border border-white/[0.14] bg-[#0A0D14] shadow-[0_25px_70px_rgba(0,0,0,0.85)] group backdrop-blur-sm">
          {/* Visualizer Canvas */}
          <canvas
            ref={previewCanvasRef}
            className="w-full h-full block cursor-pointer"
            onClick={() => onOpenViewer(activeProject)}
          />

          {/* Bottom Left Pill Badge */}
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

        {/* 5 Channel Dashes with Orange Reticle Tracker */}
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
            href="/#work"
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
