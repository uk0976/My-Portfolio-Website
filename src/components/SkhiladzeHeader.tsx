import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useMotion } from '../context/MotionContext';

interface SkhiladzeHeaderProps {
  onOpenMenu: () => void;
  currentView?: 'featured' | 'full';
  onToggleView?: () => void;
}

export const SkhiladzeHeader: React.FC<SkhiladzeHeaderProps> = ({
  onOpenMenu,
  currentView = 'featured',
  onToggleView,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [istTime, setIstTime] = useState('');
  const { motionEnabled, toggleMotion } = useMotion();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setIstTime(new Intl.DateTimeFormat('en-GB', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (anchorId: string, pathFallback: string) => (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const el = document.getElementById(anchorId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      navigate(pathFallback);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090C12]/90 backdrop-blur-md py-3.5 border-b border-white/[0.08]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Mark: Umer Khan with Skhiladze glowing dot */}
        <Link
          to="/"
          onClick={(e) => {
            if (location.pathname === '/') {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="flex items-center gap-3 text-left group cursor-pointer text-decoration-none"
        >
          <div>
            <div className="flex items-center">
              <span className="font-display font-bold text-lg md:text-xl tracking-tight text-[#F2F2EF] group-hover:text-[#FB5E28] transition-colors">
                Umer Khan
              </span>
              <span className="inline-block w-2 h-2 rounded-full bg-[#FB5E28] ml-1.5 shadow-[0_0_8px_rgba(251,94,40,0.8)]" />
            </div>
            <span className="hidden sm:block font-mono-code text-[10px] text-[#5C626D] tracking-widest uppercase">
              KALYAN, IN · {istTime} IST
            </span>
          </div>
        </Link>

        {/* Center Nav: All older site sections + modern routes */}
        <nav className="hidden lg:flex items-center gap-6 font-mono-code text-xs uppercase tracking-wider">
          <a
            href="/#work"
            onClick={handleNavClick('work', '/work')}
            className={`transition-colors flex items-center gap-1 ${
              location.pathname === '/work' ? 'text-[#FB5E28]' : 'text-[#9AA0AA] hover:text-[#F2F2EF]'
            }`}
          >
            <span>Work</span>
          </a>
          <a
            href="/#about"
            onClick={handleNavClick('about', '/about')}
            className={`transition-colors flex items-center gap-1 ${
              location.pathname === '/about' ? 'text-[#FB5E28]' : 'text-[#9AA0AA] hover:text-[#F2F2EF]'
            }`}
          >
            <span>About</span>
          </a>
          <Link
            to="/skills"
            className={`transition-colors flex items-center gap-1 ${
              location.pathname === '/skills' ? 'text-[#FB5E28]' : 'text-[#9AA0AA] hover:text-[#F2F2EF]'
            }`}
          >
            <span>Skills</span>
          </Link>
          <Link
            to="/certificates"
            className={`transition-colors flex items-center gap-1 ${
              location.pathname === '/certificates' ? 'text-[#FB5E28]' : 'text-[#9AA0AA] hover:text-[#F2F2EF]'
            }`}
          >
            <span>Certificates</span>
          </Link>
          <Link
            to="/achievements"
            className={`transition-colors flex items-center gap-1 ${
              location.pathname === '/achievements' ? 'text-[#FB5E28]' : 'text-[#9AA0AA] hover:text-[#F2F2EF]'
            }`}
          >
            <span>Achievements</span>
          </Link>
          <Link
            to="/how-i-work"
            className={`transition-colors flex items-center gap-1 ${
              location.pathname === '/how-i-work' ? 'text-[#FB5E28]' : 'text-[#9AA0AA] hover:text-[#F2F2EF]'
            }`}
          >
            <span>How I Work</span>
          </Link>
          <Link
            to="/contact"
            className={`transition-colors flex items-center gap-1 ${
              location.pathname === '/contact' ? 'text-[#FB5E28]' : 'text-[#9AA0AA] hover:text-[#F2F2EF]'
            }`}
          >
            <span>Contact</span>
          </Link>
          <a
            href="/Umerkhan_Resume.pdf"
            download
            className="text-[#FB5E28] hover:underline transition-colors flex items-center gap-1"
          >
            <span>Resume (PDF) ↗</span>
          </a>
        </nav>

        {/* Right End: Featured. Full toggle + Motion on/off + Menu Button */}
        <div className="flex items-center gap-3">
          {onToggleView && (
            <button
              type="button"
              onClick={onToggleView}
              className="hidden sm:flex items-center gap-1 font-mono-code text-xs text-[#9AA0AA] hover:text-[#F2F2EF] px-2.5 py-1 rounded-full border border-white/10 hover:border-white/25 cursor-pointer transition-colors"
            >
              <span className={currentView === 'featured' ? 'text-[#FB5E28] font-bold' : ''}>
                Featured.
              </span>
              <span className={currentView === 'full' ? 'text-[#FB5E28] font-bold' : ''}>
                Full
              </span>
            </button>
          )}

          <button
            type="button"
            onClick={toggleMotion}
            className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 hover:border-white/20 bg-white/[0.03] text-xs font-mono-code text-[#9AA0AA] hover:text-[#F2F2EF] transition-all cursor-pointer"
            title={motionEnabled ? 'Disable kinetic animations' : 'Enable kinetic animations'}
          >
            <span className="inline-block w-2.5 h-2.5 relative">
              <span
                className={`block w-0.5 h-2 bg-[#FB5E28] mx-auto origin-top ${
                  motionEnabled ? 'pendulum-swing' : ''
                }`}
              />
            </span>
            <span>{motionEnabled ? 'Motion on' : 'Motion off'}</span>
          </button>

          <button
            type="button"
            onClick={onOpenMenu}
            className="px-4 py-1.5 rounded-full border border-white/15 hover:border-white/40 bg-white/[0.04] hover:bg-white/[0.08] text-xs font-mono-code uppercase tracking-wider text-[#F2F2EF] transition-all cursor-pointer"
          >
            Menu
          </button>
        </div>
      </div>
    </header>
  );
};
