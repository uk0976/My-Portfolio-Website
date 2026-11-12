import React from 'react';
import { useMotion } from '../context/MotionContext';

interface SkhiladzeMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectView: (view: 'featured' | 'full') => void;
  currentView: 'featured' | 'full';
}

export const SkhiladzeMenu: React.FC<SkhiladzeMenuProps> = ({
  isOpen,
  onClose,
  onSelectView,
  currentView,
}) => {
  const { motionEnabled, toggleMotion } = useMotion();

  if (!isOpen) return null;

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div
      className="menu is-open"
      id="menu"
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        backgroundColor: 'var(--bg, #090c12)',
        color: 'var(--ink, #f2f2ef)',
        padding: '24px 32px',
        overflowY: 'auto',
      }}
    >
      {/* Top Header */}
      <div
        className="menu__top"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid var(--hairline)',
          paddingBottom: '20px',
        }}
      >
        <a
          className="menu__mark"
          href="#top"
          onClick={handleLinkClick}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <span className="name">
            <span className="name__a">Umer</span> <span className="name__b">Khan</span>
            <span className="pt pt--stop" aria-hidden="true"></span>
          </span>
        </a>

        <button
          className="menu__x"
          type="button"
          onClick={onClose}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--ink, #f2f2ef)',
            fontSize: '14px',
            fontFamily: 'inherit',
            cursor: 'pointer',
            padding: '8px 16px',
            borderRadius: '999px',
            borderStyle: 'solid',
            borderWidth: '1px',
            borderColor: 'var(--hairline)',
          }}
        >
          Close
        </button>
      </div>

      {/* Main Numbered Navigation */}
      <nav
        className="menu__nav"
        aria-label="Sections"
        style={{ margin: 'auto 0', padding: '40px 0' }}
      >
        <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <li>
            <a
              href="#work"
              onClick={handleLinkClick}
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '16px',
                textDecoration: 'none',
                color: 'var(--ink, #f2f2ef)',
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontFamily: 'var(--font-display, "Martian Display", sans-serif)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
              }}
            >
              <span className="menu__n" style={{ fontSize: '1rem', color: 'var(--accent, #fb5e28)', fontFamily: 'monospace' }}>01</span>
              <span className="menu__w">Work</span>
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={handleLinkClick}
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '16px',
                textDecoration: 'none',
                color: 'var(--ink, #f2f2ef)',
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontFamily: 'var(--font-display, "Martian Display", sans-serif)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
              }}
            >
              <span className="menu__n" style={{ fontSize: '1rem', color: 'var(--accent, #fb5e28)', fontFamily: 'monospace' }}>02</span>
              <span className="menu__w">About</span>
            </a>
          </li>
          <li>
            <a
              href="/how-i-work"
              onClick={handleLinkClick}
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '16px',
                textDecoration: 'none',
                color: 'var(--ink, #f2f2ef)',
                fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)',
                fontFamily: 'var(--font-display, "Martian Display", sans-serif)',
                fontWeight: 700,
                opacity: 0.85,
              }}
            >
              <span className="menu__n" style={{ fontSize: '1rem', color: 'var(--muted, #9aa0aa)', fontFamily: 'monospace' }}>03</span>
              <span className="menu__w">How I Work</span>
            </a>
          </li>
          <li>
            <a
              href="/side-quests"
              onClick={handleLinkClick}
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '16px',
                textDecoration: 'none',
                color: 'var(--ink, #f2f2ef)',
                fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)',
                fontFamily: 'var(--font-display, "Martian Display", sans-serif)',
                fontWeight: 700,
                opacity: 0.85,
              }}
            >
              <span className="menu__n" style={{ fontSize: '1rem', color: 'var(--muted, #9aa0aa)', fontFamily: 'monospace' }}>04</span>
              <span className="menu__w">Side Quests</span>
            </a>
          </li>
          <li>
            <a
              href="/Umerkhan_Resume.pdf"
              download
              onClick={handleLinkClick}
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '16px',
                textDecoration: 'none',
                color: 'var(--ink, #f2f2ef)',
                fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)',
                fontFamily: 'var(--font-display, "Martian Display", sans-serif)',
                fontWeight: 700,
                opacity: 0.85,
              }}
            >
              <span className="menu__n" style={{ fontSize: '1rem', color: 'var(--muted, #9aa0aa)', fontFamily: 'monospace' }}>05</span>
              <span className="menu__w">Resume (PDF) ↗</span>
            </a>
          </li>
        </ol>
      </nav>

      {/* Footer Controls & Direct Links */}
      <div
        className="menu__bottom"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
          borderTop: '1px solid var(--hairline)',
          paddingTop: '24px',
          fontFamily: 'monospace',
          fontSize: '12px',
        }}
      >
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          <a
            href="mailto:umerkhan0976@gmail.com"
            style={{ color: 'var(--muted, #9aa0aa)', textDecoration: 'none' }}
          >
            umerkhan0976@gmail.com
          </a>
          <a
            href="https://t.me/vaivuiskh"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--muted, #9aa0aa)', textDecoration: 'none' }}
          >
            Telegram
          </a>
          <a
            href="https://www.linkedin.com/in/umer-khan-57a458288/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--muted, #9aa0aa)', textDecoration: 'none' }}
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/uk0976"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--muted, #9aa0aa)', textDecoration: 'none' }}
          >
            GitHub
          </a>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          {/* Motion switch in menu */}
          <button
            className="motion-sw"
            type="button"
            aria-pressed={motionEnabled}
            onClick={toggleMotion}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <span className="mo" aria-hidden="true">
              <span className={`mo__arm ${motionEnabled ? 'pendulum-swing' : ''}`}></span>
            </span>
            <span className="mo__on">Motion on</span>
            <span className="mo__off">Motion off</span>
          </button>

          {/* View toggle in menu */}
          <div className="menu__view" role="group" aria-label="View">
            <span className="menu__k" style={{ marginRight: '8px', color: 'var(--muted, #9aa0aa)' }}>View</span>
            <button
              className="menu__vb"
              type="button"
              data-view="featured"
              aria-pressed={currentView === 'featured'}
              onClick={() => {
                onSelectView('featured');
                onClose();
              }}
              style={{
                padding: '4px 10px',
                borderRadius: '4px',
                background: currentView === 'featured' ? 'var(--accent, #fb5e28)' : 'transparent',
                color: currentView === 'featured' ? '#fff' : 'inherit',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Featured
            </button>
            <button
              className="menu__vb"
              type="button"
              data-view="full"
              aria-pressed={currentView === 'full'}
              onClick={() => {
                onSelectView('full');
                onClose();
              }}
              style={{
                padding: '4px 10px',
                borderRadius: '4px',
                background: currentView === 'full' ? 'var(--accent, #fb5e28)' : 'transparent',
                color: currentView === 'full' ? '#fff' : 'inherit',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Full
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
