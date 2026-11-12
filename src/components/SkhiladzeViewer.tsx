import React from 'react';

interface ViewerProject {
  id?: string;
  name?: string;
  title?: string;
  label?: string;
  tagline?: string;
  desc?: string;
  description?: string;
  tech?: string;
  demoUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
}

interface SkhiladzeViewerProps {
  project: ViewerProject | null;
  onClose: () => void;
}

export const SkhiladzeViewer: React.FC<SkhiladzeViewerProps> = ({ project, onClose }) => {
  if (!project) return null;

  const title = project.name || project.title || 'System Overview';
  const label = project.label || 'Production';
  const desc = project.tagline || project.desc || project.description || '';
  const live = project.demoUrl || project.liveUrl;
  const github = project.githubUrl;

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 110,
        backgroundColor: 'rgba(5, 6, 9, 0.85)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '780px',
          backgroundColor: 'var(--bg-2, #11151c)',
          borderRadius: '16px',
          border: '1px solid var(--hairline)',
          overflow: 'hidden',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Visual Preview Stage */}
        <div
          style={{
            width: '100%',
            aspectRatio: '16 / 9',
            backgroundColor: '#090c12',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderBottom: '1px solid var(--hairline)',
          }}
        >
          <div style={{ textAlign: 'center', padding: '24px' }}>
            <span
              style={{
                fontFamily: 'monospace',
                fontSize: '11px',
                color: 'var(--accent, #fb5e28)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              [INSPECTING SYSTEM]
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-display, "Martian Display", sans-serif)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 700,
                color: 'var(--ink, #f2f2ef)',
                marginTop: '8px',
                letterSpacing: '-0.03em',
              }}
            >
              {title}
            </h2>
            <p
              style={{
                fontFamily: 'monospace',
                fontSize: '12px',
                color: 'var(--muted, #9aa0aa)',
                marginTop: '4px',
              }}
            >
              {label}
            </p>
          </div>
        </div>

        {/* Content & Metadata */}
        <div style={{ padding: '32px' }}>
          <p
            style={{
              fontFamily: 'sans-serif',
              fontSize: '15px',
              lineHeight: 1.6,
              color: 'var(--ink, #f2f2ef)',
              marginBottom: '24px',
            }}
          >
            {desc}
          </p>

          {project.tech && (
            <p
              style={{
                fontFamily: 'monospace',
                fontSize: '12px',
                color: 'var(--accent-hi, #ff7a4d)',
                marginBottom: '28px',
              }}
            >
              Stack: {project.tech}
            </p>
          )}

          {/* Action CTAs */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="skh-btn"
              >
                Open Live System ↗
              </a>
            )}

            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '10px 20px',
                  borderRadius: '999px',
                  border: '1px solid var(--hairline)',
                  color: 'var(--ink, #f2f2ef)',
                  textDecoration: 'none',
                  fontFamily: 'monospace',
                  fontSize: '13px',
                }}
              >
                Inspect Source on GitHub ↗
              </a>
            )}

            <button
              type="button"
              onClick={onClose}
              style={{
                marginLeft: 'auto',
                background: 'none',
                border: 'none',
                color: 'var(--muted, #9aa0aa)',
                fontFamily: 'monospace',
                fontSize: '13px',
                cursor: 'pointer',
              }}
            >
              Close [×]
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
