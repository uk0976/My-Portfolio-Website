import React, { useState } from 'react';

interface CategoryItem {
  num: string;
  title: string;
  leadName: string;
  leadLabel: string;
  desc: string;
  examples: { name: string; label: string; url: string }[];
  detailUrl: string;
}

const CATEGORIES: CategoryItem[] = [
  {
    num: '01',
    title: 'Voice & audio biometrics',
    leadName: 'VoiceGuard',
    leadLabel: '2026 · AI Forensics',
    desc: 'Real-time deepfake speech detection, spectral jitter analysis, and chunk-level Wav2Vec2 inference over low-latency WebSockets.',
    examples: [
      { name: 'VoiceGuard Live', label: 'Production', url: 'https://voiceguard-app.onrender.com' },
      { name: 'Acoustic Feature Extractor', label: 'PyTorch', url: 'https://github.com/uk0976/VoiceGuard---AI-Voice-Clone-Deepfake-Detector' },
      { name: 'Spectral Invariant Suite', label: 'Librosa', url: 'https://github.com/uk0976/VoiceGuard---AI-Voice-Clone-Deepfake-Detector' },
    ],
    detailUrl: '/work/voiceguard',
  },
  {
    num: '02',
    title: 'Clinical RAG & LLMs',
    leadName: 'MedInsight',
    leadLabel: 'Clinical RAG',
    desc: 'Domain-adapted knowledge retrieval, BioBERT token extraction, and calibrated clinical summaries from unstructured EHRs.',
    examples: [
      { name: 'MedInsight RAG', label: 'Core', url: 'https://github.com/uk0976/MedInsight---RAG-Based-AI-Medical-Report-Summarizer' },
      { name: 'BioBERT Entity Extractor', label: 'NLP', url: 'https://github.com/uk0976/MedInsight---RAG-Based-AI-Medical-Report-Summarizer' },
      { name: 'Multilingual EHR Parser', label: 'Llama-3', url: 'https://github.com/uk0976/MedInsight---RAG-Based-AI-Medical-Report-Summarizer' },
    ],
    detailUrl: '/work/medinsight',
  },
  {
    num: '03',
    title: 'Computer vision & attendance',
    leadName: 'Face Recognition System',
    leadLabel: 'IJRAR 2024 Paper',
    desc: 'Real-time multi-person facial detection, LBPH texture histograms, and transactional SQL database logging for educational institutions.',
    examples: [
      { name: 'Multiple Face Recognition', label: 'Published Paper', url: 'https://github.com/uk0976/Multiple-Face-Recognition-Attendance-System' },
      { name: 'Haar Cascade Pipeline', label: 'OpenCV', url: 'https://github.com/uk0976/Multiple-Face-Recognition-Attendance-System' },
      { name: 'Automated Attendance DB', label: 'SQL', url: 'https://github.com/uk0976/Multiple-Face-Recognition-Attendance-System' },
    ],
    detailUrl: '/work/face-attendance',
  },
  {
    num: '04',
    title: 'Decentralized protocols',
    leadName: 'BlockLoan',
    leadLabel: 'Smart Contracts',
    desc: 'Non-custodial smart contracts, simple interest state machines, automated escrow verification, and zero intermediary lending.',
    examples: [
      { name: 'BlockLoan Protocol', label: 'Solidity', url: 'https://github.com/uk0976/BlockLoan-Blockchain-Based-Decentralized-Peer-to-Peer-Lending-Platform' },
      { name: 'Hardhat Test Suites', label: 'Web3', url: 'https://github.com/uk0976/BlockLoan-Blockchain-Based-Decentralized-Peer-to-Peer-Lending-Platform' },
    ],
    detailUrl: '/work/blockloan',
  },
  {
    num: '05',
    title: 'Developer platforms & tooling',
    leadName: 'CodeMedic AI',
    leadLabel: 'Dev Ergonomics',
    desc: 'Automated AST semantic runtime diagnostics, bug localization, and automated regression test fixture synthesis.',
    examples: [
      { name: 'CodeMedic Core', label: 'Platform', url: 'https://github.com/uk0976' },
      { name: 'ExamSetu Engine', label: 'Full-Stack', url: 'https://github.com/uk0976' },
      { name: 'MPI Web Architecture', label: 'Architecture', url: 'https://github.com/uk0976' },
    ],
    detailUrl: '/work/codemedic-ai',
  },
  {
    num: '06',
    title: 'Peer-reviewed research',
    leadName: 'IJRAR 2024 Publication',
    leadLabel: 'Empirical Paper',
    desc: 'Empirical experimentation on biometric facial recognition, accuracy benchmarks under variable lighting, and symposium presentations.',
    examples: [
      { name: 'IJRAR 2024 Paper', label: 'Peer-Reviewed', url: 'https://github.com/uk0976/Multiple-Face-Recognition-Attendance-System' },
      { name: 'State Symposium Presentation', label: 'Honor', url: '/about' },
      { name: 'Diploma Rank #1 (6/6 Sems)', label: '90.33%', url: '/about' },
    ],
    detailUrl: '/about',
  },
];

interface SkhiladzeMakeProps {
  onOpenViewer?: (project: { name: string; label: string; desc: string; url: string }) => void;
}

export const SkhiladzeMake: React.FC<SkhiladzeMakeProps> = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="make" id="work" aria-labelledby="make-h">
      <div className="make__scene" style={{ '--k': 6 } as React.CSSProperties}>
        <div className="make__pin" data-hold>
          {/* Left Column: Flock SVG, Heading, 6 Categories */}
          <div className="make__side">
            <h2 className="make__h" id="make-h" data-arrive style={{ '--ai': 0 } as React.CSSProperties}>
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
              What I make
            </h2>

            <ol className="make__list">
              {CATEGORIES.map((cat, idx) => {
                const isCurrent = idx === activeCategory;
                return (
                  <li
                    key={cat.num}
                    className={`make__item ${isCurrent ? 'is-on' : ''}`}
                    data-i={idx}
                    data-arrive
                    style={{ '--ai': idx + 1 } as React.CSSProperties}
                  >
                    <button
                      className="make__b"
                      type="button"
                      onClick={() => setActiveCategory(idx)}
                    >
                      <span className="make__n">{cat.num}</span>
                      <span className="make__t">{cat.title}</span>
                    </button>

                    {/* Expandable Accordion for Mobile / Viewport */}
                    <div className="make__more">
                      <div>
                        <a
                          className="make__mw"
                          href={cat.detailUrl}
                          aria-label={`${cat.leadName} ${cat.leadLabel}, ${cat.title}`}
                        >
                          <div
                            style={{
                              width: '100%',
                              aspectRatio: '16/9',
                              background: '#11151c',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              position: 'relative',
                              borderRadius: '8px',
                              overflow: 'hidden',
                              border: '1px solid var(--hairline)',
                            }}
                          >
                            <span
                              style={{
                                fontFamily: 'monospace',
                                fontSize: '11px',
                                color: 'var(--accent, #fb5e28)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                              }}
                            >
                              [{cat.num}] {cat.leadName}
                            </span>
                          </div>

                          <span className="make__tab">
                            <b>{cat.leadName}</b> <span>{cat.leadLabel}</span>
                          </span>

                          <span className="make__go" aria-hidden="true">
                            <svg className="make__ic" viewBox="0 0 58 58" aria-hidden="true">
                              <path d="M21.9 19.5V38.5L39 29Z" />
                            </svg>
                          </span>
                        </a>

                        <p className="make__s">{cat.desc}</p>

                        <p className="make__ex">
                          {cat.examples.map((ex, exIdx) => (
                            <React.Fragment key={ex.name}>
                              {exIdx > 0 && ', '}
                              <a
                                href={ex.url}
                                target={ex.url.startsWith('http') ? '_blank' : undefined}
                                rel={ex.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                              >
                                {ex.name}
                              </a>{' '}
                              <span className="make__lab">{ex.label}</span>
                            </React.Fragment>
                          ))}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>

            <p className="make__tools" data-arrive style={{ '--ai': 7 } as React.CSSProperties}>
              Tools: PyTorch, FastAPI, React 18, LangChain, FAISS, BioBERT, OpenCV, Next.js, Supabase, PostgreSQL, GCP, Git.
            </p>
          </div>

          {/* Right Column: Interactive Stage Cards (.make__frame) */}
          <div className="make__frame" data-land>
            <canvas className="make__field" aria-hidden="true" />

            {CATEGORIES.map((cat, idx) => {
              const isCurrent = idx === activeCategory;
              return (
                <a
                  key={cat.num}
                  className={`make__win ${isCurrent ? 'is-on' : ''}`}
                  href={cat.detailUrl}
                  tabIndex={isCurrent ? 0 : -1}
                  aria-label={`${cat.leadName} ${cat.leadLabel}, ${cat.title}`}
                  style={{ textDecoration: 'none' }}
                >
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      background: 'radial-gradient(circle at center, #181d28 0%, #090c12 100%)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: '32px',
                      position: 'relative',
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        top: '20px',
                        left: '20px',
                        fontFamily: 'monospace',
                        fontSize: '11px',
                        color: 'var(--muted, #9aa0aa)',
                      }}
                    >
                      CATEGORY: [{cat.num}] // {cat.title.toUpperCase()}
                    </div>

                    <div
                      style={{
                        fontFamily: 'var(--font-display, "Martian Display", sans-serif)',
                        fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                        fontWeight: 700,
                        color: 'var(--ink, #f2f2ef)',
                        textAlign: 'center',
                        letterSpacing: '-0.03em',
                      }}
                    >
                      {cat.leadName}
                    </div>

                    <div
                      style={{
                        maxWidth: '440px',
                        fontFamily: 'sans-serif',
                        fontSize: '13px',
                        lineHeight: 1.6,
                        color: 'var(--muted, #9aa0aa)',
                        textAlign: 'center',
                        marginTop: '16px',
                      }}
                    >
                      {cat.desc}
                    </div>
                  </div>

                  <span className="make__tab">
                    <b>{cat.leadName}</b> <span>{cat.leadLabel}</span>
                  </span>

                  <span className="make__go" aria-hidden="true">
                    <svg className="make__ic" viewBox="0 0 58 58" aria-hidden="true">
                      <path d="M21.9 19.5V38.5L39 29Z" />
                    </svg>
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
