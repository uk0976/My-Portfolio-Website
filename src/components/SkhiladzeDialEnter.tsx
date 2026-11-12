import React, { useEffect, useRef, useState } from 'react';

interface SkhiladzeDialEnterProps {
  onEnter: () => void;
}

const SECTORS = [
  { name: 'VOICE FORENSICS', project: 'VoiceGuard', tag: 'AI Speech' },
  { name: 'CLINICAL RAG', project: 'MedInsight', tag: 'BioBERT' },
  { name: 'COMPUTER VISION', project: 'Face Attendance', tag: 'IJRAR 2024' },
  { name: 'DEEP LEARNING', project: 'PyTorch / Wav2Vec2', tag: 'Acoustics' },
  { name: 'SMART CONTRACTS', project: 'BlockLoan', tag: 'Web3 Protocol' },
  { name: 'DEV PLATFORMS', project: 'CodeMedic AI', tag: 'AST Engine' },
  { name: 'FULL-STACK SYSTEMS', project: 'ExamSetu', tag: 'FastAPI / React' },
  { name: 'RESEARCH PAPER', project: 'IJRAR 2024', tag: 'Published' },
  { name: 'ATTENDANCE DB', project: 'LBPH / SQL', tag: 'Biometrics' },
  { name: 'NLP & LLMS', project: 'Llama-3', tag: 'RAG Pipeline' },
  { name: 'AUTOMATION', project: 'IRABOT TechEd', tag: 'Robotics' },
  { name: 'WEB ARCHITECTURE', project: 'MPI Automotives', tag: 'Scale' },
];

export const SkhiladzeDialEnter: React.FC<SkhiladzeDialEnterProps> = ({ onEnter }) => {
  const [activeAngle, setActiveAngle] = useState(0);
  const [isZooming, setIsZooming] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Sound generator using Web Audio API for the signature tune-in sound
  const playTuneSound = () => {
    if (!soundOn) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(320, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.35);

      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.45);
    } catch {
      // AudioContext fallback
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isZooming || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const dx = e.clientX - rect.left - cx;
    const dy = e.clientY - rect.top - cy;
    let angle = Math.atan2(dy, dx) + Math.PI / 2;
    if (angle < 0) angle += Math.PI * 2;
    setActiveAngle(angle);
  };

  const handleEnterClick = () => {
    if (isZooming) return;
    playTuneSound();
    setIsZooming(true);
    setTimeout(() => {
      onEnter();
    }, 700);
  };

  // Render the radial dial and sectors onto the background canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    const render = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const cx = w / 2;
      const cy = h / 2;
      const radius = Math.min(w, h) * 0.28;

      ctx.clearRect(0, 0, w, h);

      // Deep canvas background
      ctx.fillStyle = '#090C12';
      ctx.fillRect(0, 0, w, h);

      // Radial web spokes
      const sectorsCount = SECTORS.length;
      ctx.strokeStyle = 'rgba(242, 242, 239, 0.06)';
      ctx.lineWidth = 1;

      for (let i = 0; i < sectorsCount; i++) {
        const theta = (i / sectorsCount) * Math.PI * 2 - Math.PI / 2;
        const outerX = cx + Math.cos(theta) * (radius * 2.8);
        const outerY = cy + Math.sin(theta) * (radius * 2.8);
        const innerX = cx + Math.cos(theta) * radius;
        const innerY = cy + Math.sin(theta) * radius;

        ctx.beginPath();
        ctx.moveTo(innerX, innerY);
        ctx.lineTo(outerX, outerY);
        ctx.stroke();
      }

      // Outer Web curves
      ctx.strokeStyle = 'rgba(242, 242, 239, 0.04)';
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 1.6, 0, Math.PI * 2);
      ctx.stroke();

      // Radial Compass Ticks (120 ticks)
      const tickCount = 120;
      for (let t = 0; t < tickCount; t++) {
        const theta = (t / tickCount) * Math.PI * 2;
        const isMajor = t % 10 === 0;
        const r1 = radius - (isMajor ? 12 : 6);
        const r2 = radius;

        ctx.strokeStyle = isMajor ? 'rgba(242, 242, 239, 0.4)' : 'rgba(242, 242, 239, 0.15)';
        ctx.lineWidth = isMajor ? 1.5 : 1;

        ctx.beginPath();
        ctx.moveTo(cx + Math.cos(theta) * r1, cy + Math.sin(theta) * r1);
        ctx.lineTo(cx + Math.cos(theta) * r2, cy + Math.sin(theta) * r2);
        ctx.stroke();
      }

      // Active glowing indicator dot on the compass rim
      const indicatorX = cx + Math.sin(activeAngle) * radius;
      const indicatorY = cy - Math.cos(activeAngle) * radius;

      // Glow halo
      ctx.fillStyle = 'rgba(251, 94, 40, 0.25)';
      ctx.beginPath();
      ctx.arc(indicatorX, indicatorY, 14, 0, Math.PI * 2);
      ctx.fill();

      // Solid dot
      ctx.fillStyle = '#FB5E28';
      ctx.beginPath();
      ctx.arc(indicatorX, indicatorY, 4.5, 0, Math.PI * 2);
      ctx.fill();

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, [activeAngle]);

  const activeSectorIndex = Math.floor(
    (((activeAngle + Math.PI / 12) % (Math.PI * 2)) / (Math.PI * 2)) * SECTORS.length
  );
  const currentSector = SECTORS[activeSectorIndex] || SECTORS[0];

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onClick={handleEnterClick}
      className={`fixed inset-0 z-50 overflow-hidden select-none cursor-pointer transition-transform duration-700 ${
        isZooming ? 'scale-[3.5] opacity-0 pointer-events-none' : 'scale-100 opacity-100'
      }`}
      style={{ backgroundColor: '#090C12' }}
    >
      {/* Background Canvas (Radial Compass & Web Lines) */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />

      {/* Central Dial Cluster */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        {/* Top Hint: CLICK TO TUNE IN / ENTER, WITH SOUND */}
        <div className="mb-6 flex flex-col items-center">
          <span className="font-mono-code text-[11px] tracking-[0.2em] uppercase text-[#FB5E28] font-semibold animate-pulse">
            {soundOn ? 'ENTER, WITH SOUND' : 'CLICK TO ENTER'}
          </span>
          <span className="font-mono-code text-[9px] text-[#5C626D] tracking-widest uppercase mt-0.5">
            [HOVER TO ROTATE // CLICK TO ENTER]
          </span>
        </div>

        {/* Center Title */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#F2F2EF] drop-shadow-2xl">
          Umer Khan
        </h1>

        {/* Current Hovered Sector Tagline */}
        <div className="mt-4 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md">
          <span className="font-mono-code text-xs text-[#9AA0AA]">
            <span className="text-[#FB5E28] font-bold mr-1.5">↳</span>
            {currentSector.name} · <span className="text-[#F2F2EF] font-semibold">{currentSector.project}</span>
          </span>
        </div>
      </div>

      {/* Perimeter Sector Labels placed around the ring */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        {SECTORS.map((sec, idx) => {
          const angle = (idx / SECTORS.length) * Math.PI * 2 - Math.PI / 2;
          const distPercent = 38; // 38% from center
          const leftPercent = 50 + Math.cos(angle) * distPercent;
          const topPercent = 50 + Math.sin(angle) * distPercent;
          const isCurrent = idx === activeSectorIndex;

          return (
            <div
              key={sec.name}
              className={`absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-200 text-center ${
                isCurrent ? 'scale-110 opacity-100' : 'opacity-40'
              }`}
              style={{ left: `${leftPercent}%`, top: `${topPercent}%` }}
            >
              <div
                className={`font-mono-code text-[10px] tracking-widest font-semibold uppercase ${
                  isCurrent ? 'text-[#FB5E28]' : 'text-[#F2F2EF]'
                }`}
              >
                {sec.name}
              </div>
              <div className="font-sans text-[11px] text-[#9AA0AA] truncate max-w-[120px]">
                {sec.project}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Left Dock: Sound on/off & EN/RU */}
      <div
        className="absolute bottom-6 left-6 z-20 flex items-center gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#11151C]/80 border border-white/10 backdrop-blur-md font-mono-code text-xs text-[#F2F2EF]">
          <span className="text-[#FB5E28] font-bold">EN</span>
          <span className="text-white/20">/</span>
          <span className="text-[#5C626D]">HI</span>
        </div>

        <button
          type="button"
          onClick={() => setSoundOn(!soundOn)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#11151C]/80 border border-white/10 backdrop-blur-md font-mono-code text-xs text-[#9AA0AA] hover:text-[#F2F2EF] cursor-pointer"
        >
          <span className={`w-1.5 h-1.5 rounded-full ${soundOn ? 'bg-[#FB5E28]' : 'bg-[#5C626D]'}`} />
          <span>{soundOn ? 'Sound on' : 'Sound off'}</span>
        </button>
      </div>

      {/* Bottom Right: Direct Telegram/Transmission Action */}
      <div
        className="absolute bottom-6 right-6 z-20"
        onClick={(e) => e.stopPropagation()}
      >
        <a
          href="mailto:umerkhan0976@gmail.com"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FB5E28] hover:bg-[#FF7A4D] text-white font-mono-code text-xs uppercase tracking-wider font-semibold shadow-lg transition-all"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span>Write on Telegram</span>
        </a>
      </div>
    </div>
  );
};
