import React, { useEffect, useState } from 'react';
import { useMotion } from '../context/MotionContext';

interface SkhiladzeHeaderProps {
  onOpenMenu: () => void;
}

export const SkhiladzeHeader: React.FC<SkhiladzeHeaderProps> = ({ onOpenMenu }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { motionEnabled, toggleMotion } = useMotion();

  useEffect(() => {
    const handleScroll = () => {
      // Show .back navigation when scrolled past the hero section
      setIsScrolled(window.scrollY > 350);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar on Hero (.bar) */}
      <header className="bar">
        <div className="bar__mark">
          <a href="#top" aria-label="Umer Khan home">
            <span className="name">
              <span className="name__a">Umer</span> <span className="name__b">Khan</span>
              <span className="pt pt--stop" aria-hidden="true"></span>
            </span>
          </a>
        </div>

        <nav className="bar__nav" aria-label="Sections">
          <span className="bar__half">
            <a href="#work">Work</a>
          </span>
          <span className="bar__half">
            <a href="#about">About</a>
          </span>
        </nav>

        <div className="bar__end">
          <button
            className="motion-sw"
            type="button"
            aria-pressed={motionEnabled}
            onClick={toggleMotion}
            title={motionEnabled ? 'Disable motion' : 'Enable motion'}
          >
            <span className="mo" aria-hidden="true">
              <span className={`mo__arm ${motionEnabled ? 'pendulum-swing' : ''}`}></span>
            </span>
            <span className="mo__on">Motion on</span>
            <span className="mo__off">Motion off</span>
          </button>

          <button
            className="bar__menu"
            type="button"
            aria-expanded="false"
            aria-controls="menu"
            onClick={onOpenMenu}
          >
            Menu
          </button>
        </div>
      </header>

      {/* Floating Sticky Bottom Bar (.back) */}
      <nav className={`back ${isScrolled ? 'is-on' : ''}`} aria-label="Page sections">
        <a className="back__mark" href="#top" aria-label="Back to top">
          <span className="name">
            <span className="name__a">Umer</span> <span className="name__b">Khan</span>
            <span className="pt pt--stop" aria-hidden="true"></span>
          </span>
        </a>
        <span className="back__nav">
          <a href="#work">Work</a>
          <a href="#about">About</a>
        </span>
        <button
          className="back__menu"
          type="button"
          aria-expanded="false"
          aria-controls="menu"
          onClick={onOpenMenu}
        >
          Menu
        </button>
      </nav>
    </>
  );
};
