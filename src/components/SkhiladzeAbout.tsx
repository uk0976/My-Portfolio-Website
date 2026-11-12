import React, { useEffect, useRef, useState } from 'react';
import { useMotion } from '../context/MotionContext';

interface Milestone {
  num: string;
  year: string;
  title: string;
  body: string;
  meta: string;
}

const MILESTONES: Milestone[] = [
  {
    num: '01',
    year: '2021–2024',
    title: 'Diploma in AI & Machine Learning',
    body: 'A. R. Kalsekar Polytechnic. Graduated with 90.33% aggregate. Ranked #1 in class across all six consecutive semesters with top marks in machine learning algorithms, discrete mathematics, and database management.',
    meta: 'Rank #1 · 90.33% Aggregate',
  },
  {
    num: '02',
    year: '2024',
    title: 'Published Research in IJRAR',
    body: 'Author of peer-reviewed paper: "Multiple Face Recognition Attendance System" published in the International Journal of Research and Analytical Reviews (IJRAR 2024). Presented empirical accuracy evaluations across variable illumination and multi-subject frames.',
    meta: 'IJRAR 2024 · Peer-Reviewed',
  },
  {
    num: '03',
    year: '2024–2025',
    title: 'Three Industrial Internships',
    body: 'Shipped production code across three companies: ExamSetu (full-stack examination platform architecture), MPI Automotives (enterprise web architecture and performance overhaul), and IRABOT TechEd (Python robotics curriculum & automation engines).',
    meta: 'ExamSetu · MPI Automotives · IRABOT',
  },
  {
    num: '04',
    year: '2024–2027',
    title: 'B.E. in Artificial Intelligence & Data Science',
    body: 'Terna Engineering College, Navi Mumbai. Deep focus on deep neural architectures, transformers, distributed systems, and real-time inference latency minimization.',
    meta: 'Bachelor of Engineering · Ongoing',
  },
  {
    num: '05',
    year: '2026 →',
    title: 'Independent AI & Systems Engineer',
    body: 'Architecting and deploying 16+ production systems. Specializing in voice forensics (VoiceGuard), clinical RAG summarization (MedInsight), and non-custodial smart contracts (BlockLoan) for 10+ freelance clients worldwide.',
    meta: '16+ Shipped Systems · 10+ Clients',
  },
];

export const SkhiladzeAbout: React.FC = () => {
  const [activeChap, setActiveChap] = useState(0);
  const { motionEnabled } = useMotion();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Background Interactive Line Canvas
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

    const draw = () => {
      t += motionEnabled ? 0.02 : 0;
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      ctx.clearRect(0, 0, w, h);

      // Subtle horizontal waveform guideline
      ctx.strokeStyle = 'rgba(251, 94, 40, 0.28)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();

      for (let x = 0; x < w; x += 5) {
        const norm = x / w;
        const wave = Math.sin(norm * 10 + t) * 16 * Math.sin(norm * Math.PI);
        const y = h * 0.55 + wave;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Current milestone glowing point
      const activeX = (w * (activeChap + 0.5)) / MILESTONES.length;
      const activeY = h * 0.55;
      ctx.fillStyle = '#fb5e28';
      ctx.beginPath();
      ctx.arc(activeX, activeY, 5, 0, Math.PI * 2);
      ctx.fill();

      if (motionEnabled) {
        animId = requestAnimationFrame(draw);
      }
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, [activeChap, motionEnabled]);

  const curr = MILESTONES[activeChap];

  return (
    <section className="op" id="about" aria-labelledby="about-h">
      <a className="skip" href="#contact">
        Skip to the end of the About
      </a>

      <div className="op-track" style={{ height: 'auto', minHeight: '100vh' }}>
        <div className="op-stage" style={{ position: 'relative', height: 'auto', minHeight: '100vh', padding: '100px 32px 80px' }}>
          {/* Subtle Dynamic Line Canvas */}
          <canvas
            ref={canvasRef}
            className="op-line"
            aria-hidden="true"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
          />

          <div className="op-head">
            <h2 className="op-h" id="about-h">
              <span className="flock" aria-hidden="true">
                <svg viewBox="0 0 52.9 14">
                  <path d="M1.00 1.4L6.76 8.23Q9.60 11.60 12.44 8.23L18.20 1.4" />
                  <path d="M20.80 1.4L24.49 5.77Q26.30 7.93 28.12 5.77L31.81 1.4" />
                  <path d="M33.47 1.4L35.83 4.20Q36.99 5.58 38.16 4.20L40.52 1.4" />
                  <path d="M41.58 1.4L43.09 3.19Q43.84 4.07 44.58 3.19L46.09 1.4" />
                  <path d="M46.77 1.4L47.74 2.55Q48.22 3.11 48.69 2.55L49.66 1.4" />
                  <path d="M50.09 1.4L50.71 2.13Q51.02 2.50 51.32 2.13L51.94 1.4" />
                  <circle cx="9.60" cy="7.32" r="2.4" />
                </svg>
              </span>
              About
            </h2>

            <p className="op-chap" aria-hidden="true">
              <span className="op-n">[{curr.num}]</span>
              <span className="op-ct">{curr.year} · {curr.title}</span>
            </p>
          </div>

          {/* Timeline Chapter Selector */}
          <div
            style={{
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap',
              margin: '32px 0',
              zIndex: 5,
              position: 'relative',
            }}
          >
            {MILESTONES.map((m, idx) => (
              <button
                key={m.num}
                type="button"
                onClick={() => setActiveChap(idx)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '999px',
                  border: '1px solid',
                  borderColor: idx === activeChap ? 'var(--accent, #fb5e28)' : 'var(--hairline)',
                  background: idx === activeChap ? 'rgba(251, 94, 40, 0.12)' : 'transparent',
                  color: idx === activeChap ? 'var(--accent-hi, #ff7a4d)' : 'var(--muted, #9aa0aa)',
                  fontFamily: 'monospace',
                  fontSize: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                [{m.num}] {m.year}
              </button>
            ))}
          </div>

          {/* Active Milestone Card */}
          <div
            style={{
              maxWidth: '720px',
              margin: '0 auto 60px 0',
              padding: '36px',
              borderRadius: '16px',
              background: 'rgba(17, 21, 28, 0.75)',
              border: '1px solid var(--hairline)',
              backdropFilter: 'blur(10px)',
              position: 'relative',
              zIndex: 5,
            }}
          >
            <div
              style={{
                fontFamily: 'monospace',
                fontSize: '11px',
                color: 'var(--accent, #fb5e28)',
                letterSpacing: '0.1em',
                marginBottom: '10px',
              }}
            >
              {curr.meta.toUpperCase()}
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-display, "Martian Display", sans-serif)',
                fontSize: 'clamp(1.5rem, 3.5vw, 2.4rem)',
                fontWeight: 700,
                color: 'var(--ink, #f2f2ef)',
                letterSpacing: '-0.03em',
                marginBottom: '16px',
              }}
            >
              {curr.title}
            </h3>

            <p
              style={{
                fontFamily: 'sans-serif',
                fontSize: '14px',
                lineHeight: 1.7,
                color: 'var(--muted, #9aa0aa)',
              }}
            >
              {curr.body}
            </p>
          </div>

          {/* Skhiladze Signature Conclusion (.op-final) */}
          <div className="op-final">
            <p className="op-word" aria-hidden="true">
              <span className="op-w-a">Umer</span> <span className="op-w-b">Khan</span>
              <span className="pt pt--stop"></span>
            </p>

            <p className="op-copy">
              You get the whole cycle from one person: idea, model, pipeline, backend, and production deployment. Trained in deep AI architectures, tested across three industrial internships, and proven by 16+ shipped systems.
            </p>

            <dl className="op-facts">
              <div>
                <dt>Based in</dt>
                <dd>Kalyan, Maharashtra, India</dd>
              </div>
              <div>
                <dt>Languages</dt>
                <dd>English, Hindi, Urdu, Marathi</dd>
              </div>
              <div>
                <dt>Works</dt>
                <dd>Remotely, worldwide</dd>
              </div>
            </dl>

            <p className="op-cta">
              <a
                className="btn btn--tg op-tg"
                href="mailto:umerkhan0976@gmail.com"
                aria-label="Direct Transmission to Umer Khan"
              >
                <span className="pt" aria-hidden="true"></span>
                <span className="roll">
                  <span>Direct Transmission</span>
                  <span aria-hidden="true" data-t="Direct Transmission"></span>
                </span>
              </a>

              <span className="op-cl">
                <a href="mailto:umerkhan0976@gmail.com">umerkhan0976@gmail.com</a>
                <a href="https://www.linkedin.com/in/umer-khan-57a458288/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                <a href="https://github.com/uk0976" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href="/Umerkhan_Resume.pdf" download>
                  Resume (PDF) ↗
                </a>
              </span>
            </p>

            <p className="op-last">
              <span className="op-motto">A point, a line, a neural weight, a shipped system.</span>
              <a
                href="#top"
                className="op-again"
                style={{ textDecoration: 'none', color: 'inherit', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <svg className="op-again__ic" viewBox="0 0 24 24" aria-hidden="true" width="16" height="16">
                  <polyline points="1 4 1 10 7 10" />
                  <path d="M3.5 15a9 9 0 1 0 2.1-9.4L1 10" />
                </svg>
                Back to top
              </a>
            </p>
          </div>
        </div>

        <span className="op-end" id="contact"></span>
      </div>
    </section>
  );
};
