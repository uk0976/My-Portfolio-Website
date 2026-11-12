import React, { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

export const Header: React.FC = () => {
  const [istTime, setIstTime] = useState<string>('');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    // Scroll window to top on route change
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  }, [location.pathname]);

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

    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const navItems = [
    { to: '/', label: 'Home', mono: '[00]' },
    { to: '/projects', label: 'Projects', mono: '[01]' },
    { to: '/about', label: 'About', mono: '[02]' },
    { to: '/skills', label: 'Skills', mono: '[03]' },
    { to: '/recognition', label: 'Recognition', mono: '[04]' },
    { to: '/contact', label: 'Contact', mono: '[05]' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#09090B]/90 backdrop-blur-md py-4 hairline-b'
          : 'bg-transparent py-6 md:py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Monogram / Home Link */}
        <Link
          to="/"
          className="group text-left cursor-pointer"
          data-cursor="HOME"
        >
          <span className="font-display font-bold text-lg md:text-xl tracking-tight text-[#EDEAE4] group-hover:text-[#FF3B00] transition-colors">
            Umerkhan J.
          </span>
          <span className="hidden sm:block font-mono-code text-[11px] text-[#5C5A55] tracking-widest uppercase">
            Kalyan, IN · {istTime} IST
          </span>
        </Link>

        {/* Desktop Multi-Page Route Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `group flex items-baseline gap-1.5 text-xs font-mono-code uppercase tracking-wider transition-colors cursor-pointer ${
                  isActive ? 'text-[#FF3B00]' : 'text-[#949089] hover:text-[#EDEAE4]'
                }`
              }
              data-cursor="ROUTE"
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`text-[10px] transition-colors ${
                      isActive ? 'text-[#FF3B00]' : 'text-[#5C5A55] group-hover:text-[#FF3B00]'
                    }`}
                  >
                    {item.mono}
                  </span>
                  <span>{item.label}</span>
                </>
              )}
            </NavLink>
          ))}

          {/* Download Resume Direct Link */}
          <a
            href="/Umerkhan_Resume.pdf"
            download
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 hover:border-[#FF3B00] bg-white/[0.02] hover:bg-[#FF3B00]/10 text-xs font-mono-code text-[#EDEAE4] hover:text-[#FF3B00] transition-all cursor-pointer"
            data-cursor="PDF"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B00] animate-pulse" />
            <span>Resume (PDF)</span>
          </a>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <a
            href="/Umerkhan_Resume.pdf"
            download
            className="text-[11px] font-mono-code text-[#FF3B00] border border-[#FF3B00]/30 px-2.5 py-1 rounded"
          >
            CV
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#EDEAE4] focus:outline-none"
            aria-label="Toggle navigation"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 bg-[#EDEAE4] transition-transform duration-300 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block h-0.5 bg-[#EDEAE4] transition-opacity duration-300 ${
                  mobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 bg-[#EDEAE4] transition-transform duration-300 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-full bg-[#09090B] border-b border-white/10 px-6 py-8 flex flex-col gap-6 shadow-2xl">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-baseline justify-between text-left text-lg font-display text-[#EDEAE4] hover:text-[#FF3B00]"
            >
              <span>{item.label}</span>
              <span className="font-mono-code text-xs text-[#5C5A55]">{item.mono}</span>
            </Link>
          ))}
          <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono-code text-[#5C5A55]">
            <span>AVAILABILITY: IMMEDIATE</span>
            <span>KALYAN / REMOTE</span>
          </div>
        </div>
      )}
    </header>
  );
};
