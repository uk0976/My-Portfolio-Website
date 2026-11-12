import React, { useState } from 'react';

export const ShowreelModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  return (
    <section className="px-6 md:px-12 max-w-7xl mx-auto hairline-t py-28">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="font-mono-code text-xs text-[#FF3B00] uppercase tracking-widest mb-3">
            [EXPERIENCE REEL // LUKA CLASS]
          </div>
          <h2 className="font-display text-4xl md:text-6xl text-[#EDEAE4] tracking-tight">
            Systems in Motion
          </h2>
        </div>
        <p className="max-w-md font-sans text-sm text-[#949089] leading-relaxed">
          Watch real-time live detection pipelines, clinical RAG summarization workflows, and biometric attendance matching.
        </p>
      </div>

      {/* Showreel Preview Frame (Skhiladze Vault Corridor Style) */}
      <div
        onClick={() => setIsOpen(true)}
        className="relative w-full aspect-[21/9] min-h-[380px] bg-[#121215] border border-white/10 hover:border-[#FF3B00] transition-all overflow-hidden flex flex-col justify-between p-8 sm:p-12 cursor-pointer group shadow-2xl"
        data-cursor="PLAY"
      >
        {/* Subtle Video / Particle Background Backdrop */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-85" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,59,0,0.12),transparent_70%)]" />

        {/* Top Ticker */}
        <div className="relative z-10 flex items-center justify-between font-mono-code text-xs">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF3B00] animate-ping" />
            <span className="text-[#EDEAE4] font-semibold">2026 COMPREHENSIVE PRODUCTION SHOWREEL</span>
          </div>
          <span className="text-[#5C5A55]">01:45 MIN // 1080P 60FPS</span>
        </div>

        {/* Center Play Button & Title */}
        <div className="relative z-10 my-auto text-center space-y-4">
          <div className="w-20 h-20 rounded-full border border-white/20 group-hover:border-[#FF3B00] bg-white/[0.03] group-hover:bg-[#FF3B00] text-[#EDEAE4] group-hover:text-black mx-auto flex items-center justify-center transition-all duration-300 shadow-xl group-hover:scale-110">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="6 3 20 12 6 21 6 3" />
            </svg>
          </div>
          <div className="font-display text-2xl sm:text-4xl text-[#EDEAE4]">
            Launch High-Throughput Engineering Reel
          </div>
          <p className="font-mono-code text-xs text-[#949089]">
            VOICEGUARD · MEDINSIGHT · FACE ATTENDANCE · BLOCKLOAN
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="relative z-10 flex items-center justify-between font-mono-code text-xs text-[#5C5A55] hairline-t pt-4">
          <span>CLICK TO EXPAND CINEMATIC THEATER VIEW</span>
          <span className="text-[#EDEAE4]">AUDIO ENABLED</span>
        </div>
      </div>

      {/* Fullscreen Video Modal Theater (Skhiladze expanded state) */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[10000] bg-black/95 backdrop-blur-xl flex flex-col justify-between p-6 md:p-12 animate-in fade-in duration-300"
          onClick={() => setIsOpen(false)}
        >
          {/* Modal Top Bar */}
          <div className="flex items-center justify-between font-mono-code text-xs text-[#EDEAE4] hairline-b pb-4">
            <div className="flex items-center gap-4">
              <span className="text-[#FF3B00] font-bold">[ENGINEERING SHOWREEL // ACTIVE]</span>
              <span>1080P MASTER STREAM</span>
            </div>
            <div className="flex items-center gap-6">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSoundEnabled(!soundEnabled);
                }}
                className="px-3 py-1 border border-white/20 hover:border-[#FF3B00] text-xs font-mono-code transition-colors cursor-pointer"
              >
                SOUND: {soundEnabled ? 'ON 🔊' : 'MUTED 🔇'}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[#949089] hover:text-[#EDEAE4] text-sm cursor-pointer"
              >
                ✕ ESC
              </button>
            </div>
          </div>

          {/* Video / Simulation Screen Container */}
          <div
            className="my-auto max-w-5xl mx-auto w-full aspect-video bg-[#09090B] border border-white/20 flex flex-col justify-between p-8 sm:p-12 relative overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between font-mono-code text-xs text-[#949089]">
              <span>CHANNEL 01 // LIVE TELEMETRY</span>
              <span className="text-[#FF3B00]">RECORDING SIMULATION</span>
            </div>

            <div className="space-y-4 text-center my-auto">
              <div className="font-mono-code text-xs text-[#FF3B00] uppercase tracking-widest">
                [SYSTEMS IN MOTION]
              </div>
              <h3 className="font-display text-3xl sm:text-5xl text-[#EDEAE4]">
                VoiceGuard Forensic Detection
              </h3>
              <p className="font-sans text-sm text-[#949089] max-w-lg mx-auto">
                Real-time chunk-level classification comparing synthesized ElevenLabs audio against live human biometric pitch distributions.
              </p>
              <div className="pt-4 flex justify-center gap-4">
                <a
                  href="https://voiceguard-app.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#EDEAE4] hover:bg-[#FF3B00] text-black hover:text-white font-mono-code text-xs uppercase font-semibold transition-colors"
                >
                  Test VoiceGuard Live Demo ↗
                </a>
              </div>
            </div>

            <div className="flex items-center justify-between font-mono-code text-xs text-[#5C5A55] hairline-t pt-4">
              <span>LATENCY: 240ms</span>
              <span>RENDER HOSTED</span>
            </div>
          </div>

          {/* Modal Bottom Bar */}
          <div className="font-mono-code text-xs text-[#5C5A55] text-center">
            PRESS ESC OR CLICK OUTSIDE TO RETURN TO PAGE
          </div>
        </div>
      )}
    </section>
  );
};
