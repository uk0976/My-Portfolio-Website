import React from 'react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-6 md:px-12 max-w-7xl mx-auto hairline-t font-mono-code text-xs text-[#5C5A55]">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <span className="text-[#EDEAE4] font-bold">UMERKHAN JUNAIDKHAN DOCTOR</span>
          <span>// 2026 EDITION</span>
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
