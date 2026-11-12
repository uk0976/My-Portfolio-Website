import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-6 md:px-12 max-w-7xl mx-auto hairline-t font-mono-code text-xs text-[#5C5A55]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-[#EDEAE4] font-bold hover:text-[#FF3B00] transition-colors">
            UMERKHAN JUNAIDKHAN DOCTOR
          </Link>
          <span>// 2026 EDITION</span>
        </div>

        {/* Quick Slices */}
        <div className="flex items-center gap-6 text-[#949089]">
          <Link to="/projects" className="hover:text-[#EDEAE4] transition-colors">
            Projects
          </Link>
          <Link to="/about" className="hover:text-[#EDEAE4] transition-colors">
            About
          </Link>
          <Link to="/skills" className="hover:text-[#EDEAE4] transition-colors">
            Skills
          </Link>
          <Link to="/recognition" className="hover:text-[#EDEAE4] transition-colors">
            Recognition
          </Link>
          <Link to="/contact" className="hover:text-[#EDEAE4] transition-colors">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <span>KALYAN, MH · INDIA</span>
          <button
            onClick={scrollToTop}
            className="text-[#949089] hover:text-[#FF3B00] transition-colors cursor-pointer"
            data-cursor="TOP"
          >
            BACK TO TOP [↑]
          </button>
        </div>
      </div>
    </footer>
  );
};
