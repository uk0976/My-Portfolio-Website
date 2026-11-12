import React, { useState } from 'react';
import { PROJECTS } from '../data/projects';

interface SkhiladzeFullProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SkhiladzeFull: React.FC<SkhiladzeFullProps> = ({ isOpen, onClose }) => {
  const [hoveredProject, setHoveredProject] = useState(PROJECTS[0]);

  if (!isOpen) return null;

  const aiProjects = PROJECTS.filter((p) =>
    ['voiceguard', 'medinsight', 'face-attendance', 'smart-attendance-system'].includes(p.id) ||
    p.category.toLowerCase().includes('ai') ||
    p.category.toLowerCase().includes('vision')
  );

  const fullstackProjects = PROJECTS.filter(
    (p) => !aiProjects.includes(p) && !p.id.includes('blockloan')
  );

  const protocolProjects = PROJECTS.filter((p) => p.id === 'blockloan' || p.category.toLowerCase().includes('blockchain'));

  return (
    <section
      className="full is-open"
      id="full"
      aria-label="All work"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 90,
        backgroundColor: 'var(--bg, #090c12)',
        overflowY: 'auto',
        display: 'block',
        padding: '32px 24px 60px',
      }}
    >
      <div className="full__veil" aria-hidden="true" />

      {/* Top Header bar with Close Button */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid var(--hairline)',
          paddingBottom: '20px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-display, "Martian Display", sans-serif)',
              fontSize: '28px',
              fontWeight: 700,
              color: 'var(--ink, #f2f2ef)',
              margin: 0,
            }}
          >
            All Work
          </h2>
          <span style={{ fontFamily: 'monospace', fontSize: '12px', color: 'var(--accent, #fb5e28)' }}>
            [16+ SYSTEMS DIRECTORY]
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          style={{
            background: 'none',
            border: '1px solid var(--hairline)',
            color: 'var(--ink, #f2f2ef)',
            borderRadius: '999px',
            padding: '8px 20px',
            fontFamily: 'monospace',
            fontSize: '12px',
            cursor: 'pointer',
          }}
        >
          Close [×]
        </button>
      </div>

      <div
        className="full__in"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
        }}
      >
        {/* Left Column: Project Lists by Category */}
        <div className="full__lists">
          {/* AI Systems */}
          <p
            className="full__g"
            style={{
              fontFamily: 'monospace',
              fontSize: '11px',
              textTransform: 'uppercase',
              color: 'var(--accent, #fb5e28)',
              letterSpacing: '0.1em',
              marginBottom: '16px',
            }}
          >
            01 · AI, Audio &amp; Computer Vision
          </p>
          <ul
            className="full__list"
            style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}
          >
            {aiProjects.map((p) => (
              <li key={p.id}>
                <a
                  className="full__it"
                  href={p.liveUrl || p.githubUrl || `/work/${p.id}`}
                  target={p.liveUrl?.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHoveredProject(p)}
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'space-between',
                    padding: '10px 14px',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    color: hoveredProject.id === p.id ? '#fff' : 'var(--ink, #f2f2ef)',
                    backgroundColor: hoveredProject.id === p.id ? 'rgba(251, 94, 40, 0.12)' : 'transparent',
                    border: '1px solid',
                    borderColor: hoveredProject.id === p.id ? 'var(--accent, #fb5e28)' : 'transparent',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <span className="full__t" style={{ fontWeight: 600, fontSize: '15px' }}>
                    {p.title}
                  </span>
                  <span className="full__m" style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--muted, #9aa0aa)' }}>
                    {p.metrics?.[0]?.value || p.year}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {/* Full-Stack Platforms */}
          <p
            className="full__g"
            style={{
              fontFamily: 'monospace',
              fontSize: '11px',
              textTransform: 'uppercase',
              color: 'var(--accent, #fb5e28)',
              letterSpacing: '0.1em',
              marginBottom: '16px',
            }}
          >
            02 · Full-Stack &amp; Developer Tooling
          </p>
          <ul
            className="full__list"
            style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}
          >
            {fullstackProjects.map((p) => (
              <li key={p.id}>
                <a
                  className="full__it"
                  href={p.liveUrl || p.githubUrl || `/work/${p.id}`}
                  target={p.liveUrl?.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHoveredProject(p)}
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'space-between',
                    padding: '10px 14px',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    color: hoveredProject.id === p.id ? '#fff' : 'var(--ink, #f2f2ef)',
                    backgroundColor: hoveredProject.id === p.id ? 'rgba(251, 94, 40, 0.12)' : 'transparent',
                    border: '1px solid',
                    borderColor: hoveredProject.id === p.id ? 'var(--accent, #fb5e28)' : 'transparent',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <span className="full__t" style={{ fontWeight: 600, fontSize: '15px' }}>
                    {p.title}
                  </span>
                  <span className="full__m" style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--muted, #9aa0aa)' }}>
                    {p.year}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {/* Protocol & Web3 */}
          {protocolProjects.length > 0 && (
            <>
              <p
                className="full__g"
                style={{
                  fontFamily: 'monospace',
                  fontSize: '11px',
                  textTransform: 'uppercase',
                  color: 'var(--accent, #fb5e28)',
                  letterSpacing: '0.1em',
                  marginBottom: '16px',
                }}
              >
                03 · Decentralized Protocols
              </p>
              <ul
                className="full__list"
                style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}
              >
                {protocolProjects.map((p) => (
                  <li key={p.id}>
                    <a
                      className="full__it"
                      href={p.githubUrl || `/work/${p.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => setHoveredProject(p)}
                      style={{
                        display: 'flex',
                        alignItems: 'baseline',
                        justifyContent: 'space-between',
                        padding: '10px 14px',
                        borderRadius: '6px',
                        textDecoration: 'none',
                        color: hoveredProject.id === p.id ? '#fff' : 'var(--ink, #f2f2ef)',
                        backgroundColor: hoveredProject.id === p.id ? 'rgba(251, 94, 40, 0.12)' : 'transparent',
                        border: '1px solid',
                        borderColor: hoveredProject.id === p.id ? 'var(--accent, #fb5e28)' : 'transparent',
                        transition: 'all 0.15s ease',
                      }}
                    >
                      <span className="full__t" style={{ fontWeight: 600, fontSize: '15px' }}>
                        {p.title}
                      </span>
                      <span className="full__m" style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--muted, #9aa0aa)' }}>
                        Smart Contract
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        {/* Right Column: Active Project Inspector Card (.full__card) */}
        <div
          className="full__card"
          aria-live="polite"
          style={{
            position: 'sticky',
            top: '20px',
            height: 'fit-content',
            padding: '32px',
            borderRadius: '16px',
            background: 'var(--bg-2, #11151c)',
            border: '1px solid var(--hairline)',
          }}
        >
          <p
            className="full__cn"
            style={{ fontFamily: 'monospace', fontSize: '12px', color: 'var(--accent, #fb5e28)', marginBottom: '8px' }}
          >
            [{hoveredProject.number}] · {hoveredProject.year}
          </p>

          <h3
            className="full__ct"
            style={{
              fontFamily: 'var(--font-display, "Martian Display", sans-serif)',
              fontSize: '28px',
              fontWeight: 700,
              color: 'var(--ink, #f2f2ef)',
              marginBottom: '12px',
            }}
          >
            {hoveredProject.title}
          </h3>

          <p
            className="full__cd"
            style={{ fontFamily: 'sans-serif', fontSize: '13px', lineHeight: 1.6, color: 'var(--muted, #9aa0aa)', marginBottom: '24px' }}
          >
            {hoveredProject.summary || hoveredProject.tagline}
          </p>

          <div
            style={{
              fontFamily: 'monospace',
              fontSize: '11px',
              color: 'var(--dim, #5c626d)',
              marginBottom: '24px',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '6px',
            }}
          >
            {hoveredProject.stack.map((s) => (
              <span key={s} style={{ background: 'rgba(255,255,255,0.04)', padding: '2px 8px', borderRadius: '4px' }}>
                {s}
              </span>
            ))}
          </div>

          <div className="full__ca" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {hoveredProject.liveUrl && (
              <a
                className="full__go skh-btn"
                href={hoveredProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Launch Demo ↗
              </a>
            )}
            {hoveredProject.githubUrl && (
              <a
                className="full__go"
                href={hoveredProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '10px 18px',
                  borderRadius: '999px',
                  border: '1px solid var(--hairline)',
                  color: 'var(--ink, #f2f2ef)',
                  textDecoration: 'none',
                  fontFamily: 'monospace',
                  fontSize: '12px',
                }}
              >
                GitHub Repo ↗
              </a>
            )}
          </div>
        </div>
      </div>

      <p
        className="full__note"
        style={{
          textAlign: 'center',
          marginTop: '60px',
          fontFamily: 'monospace',
          fontSize: '11px',
          color: 'var(--dim, #5c626d)',
        }}
      >
        All 16+ systems and algorithms architected, trained, and deployed by Umer Khan.
      </p>
    </section>
  );
};
