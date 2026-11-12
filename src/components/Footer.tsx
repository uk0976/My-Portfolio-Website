import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const [psstOpen, setPsstOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="py-16 px-6 md:px-12 max-w-7xl mx-auto hairline-t font-mono-code text-xs text-[#5C5A55] space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <Link to="/" className="text-[#EDEAE4] font-bold hover:text-[#FF3B00] transition-colors">
              UMER KHAN
            </Link>
            <span className="block text-[11px] text-[#5C5A55] mt-0.5">
              Doctor Umerkhan Junaidkhan · AI &amp; Systems Engineer
            </span>
          </div>

          {/* Site Pages Directory */}
          <div className="flex flex-wrap items-center gap-6 text-[#949089]">
            <Link to="/work" className="hover:text-[#EDEAE4] transition-colors">
              Work
            </Link>
            <Link to="/about" className="hover:text-[#EDEAE4] transition-colors">
              About
            </Link>
            <Link to="/how-i-work" className="hover:text-[#EDEAE4] transition-colors">
              How I Work
            </Link>
            <Link to="/side-quests" className="hover:text-[#EDEAE4] transition-colors">
              Side Quests
            </Link>
            <Link to="/recognition" className="hover:text-[#EDEAE4] transition-colors">
              Recognition
            </Link>
            <Link to="/how-this-site-was-made" className="hover:text-[#EDEAE4] transition-colors">
              Colophon
            </Link>
            <Link to="/contact" className="hover:text-[#EDEAE4] transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setPsstOpen(true)}
              className="text-[#FF3B00] hover:underline cursor-pointer"
              data-cursor="PSST"
              title="Quick-view credentials"
            >
              [psst...]
            </button>
            <button
              onClick={scrollToTop}
              className="text-[#949089] hover:text-[#FF3B00] transition-colors cursor-pointer"
              data-cursor="TOP"
            >
              BACK TO TOP [↑]
            </button>
          </div>
        </div>

        <div className="hairline-t pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px]">
          <span>DESIGNED AND BUILT BY THE SAME HANDS. KALYAN, MAHARASHTRA, INDIA.</span>
          <span>© 2026 UMER KHAN. ALL PRODUCTION INVARIANTS VERIFIED.</span>
        </div>
      </footer>

      {/* Hidden "psst" Easter Egg Modal (Daff / Denny reference) */}
      {psstOpen && (
        <div
          className="fixed inset-0 z-[10000] bg-black/85 backdrop-blur-md flex items-center justify-center p-6 animate-in fade-in"
          onClick={() => setPsstOpen(false)}
        >
          <div
            className="w-full max-w-xl bg-[#121215] border border-[#FF3B00]/40 p-8 font-mono-code text-xs space-y-6 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between hairline-b pb-4">
              <span className="text-[#FF3B00] font-bold">[PSST // QUICK CREDENTIAL TERMINAL]</span>
              <button onClick={() => setPsstOpen(false)} className="text-[#EDEAE4] hover:text-[#FF3B00]">
                ✕ CLOSE
              </button>
            </div>

            <div className="space-y-3 text-[#EDEAE4]">
              <p className="text-[#949089]">You found the secret quick-read sheet.</p>
              <div>NAME: Umer Khan (Doctor Umerkhan Junaidkhan)</div>
              <div>LOCATION: Kalyan, Maharashtra, India 421301</div>
              <div>DEGREE: B.E. AI &amp; DS (Terna Engg, 2024–2027)</div>
              <div>DIPLOMA: AI &amp; ML (MSBTE, 90.33%, Class Rank #1 all 6 semesters)</div>
              <div>FLAGSHIP: VoiceGuard (Deepfake audio detector on Render)</div>
              <div>INTERNSHIPS: ExamSetu, MPI Automotives, IRABOT TechEd</div>
              <div>EMAIL: umerkhandoctor04@gmail.com | +91 9820098685</div>
            </div>

            <div className="hairline-t pt-4 flex items-center justify-between">
              <a
                href="/Umerkhan_Resume.pdf"
                download
                className="px-4 py-2 bg-[#EDEAE4] text-black font-semibold hover:bg-[#FF3B00] hover:text-white transition-colors"
              >
                Download Official PDF Resume ↗
              </a>
              <span className="text-[#5C5A55]">ESC to exit</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
