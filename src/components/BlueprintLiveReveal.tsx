import React, { useState, useRef } from 'react';

export const BlueprintLiveReveal: React.FC = () => {
  const [sliderPos, setSliderPos] = useState<number>(50); // percentage 0 - 100
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPos(percent);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPos(percent);
  };

  return (
    <section className="px-6 md:px-12 max-w-7xl mx-auto hairline-t py-28">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="font-mono-code text-xs text-[#FF3B00] uppercase tracking-widest mb-3">
            [BLUEPRINT TO PRODUCTION // DENNY EFFECT]
          </div>
          <h2 className="font-display text-4xl md:text-6xl text-[#EDEAE4] tracking-tight">
            Both Sides of the Pipeline
          </h2>
        </div>
        <p className="max-w-md font-sans text-sm text-[#949089] leading-relaxed">
          Drag horizontally across the frame to peel back the live VoiceGuard HUD and reveal the raw telemetry architecture underneath.
        </p>
      </div>

      {/* Interactive 23.6° / 45° Split Stage */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="relative w-full aspect-[16/9] min-h-[420px] max-h-[640px] bg-[#09090B] border border-white/10 overflow-hidden select-none cursor-ew-resize group"
        data-cursor="DRAG"
      >
        {/* UNDER LAYER: TECHNICAL BLUEPRINT SCHEMATIC */}
        <div className="absolute inset-0 p-8 sm:p-12 flex flex-col justify-between bg-[#080B10] text-[#00E5FF] font-mono-code text-xs overflow-hidden">
          {/* Blueprint Grid Lines & Dimensions */}
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#00e5ff_1px,transparent_1px)] [background-size:24px_24px]" />

          {/* Top Blueprint Annotations */}
          <div className="relative z-10 flex items-center justify-between border-b border-[#00E5FF]/20 pb-4">
            <div className="space-y-1">
              <span className="block font-bold">[CAD-SCHEMATIC: VOICEGUARD-BIOMETRIC-ENGINE]</span>
              <span className="text-[#00E5FF]/60 text-[10px]">COORDINATES: 16 kHz PCM // DUAL-ENGINE INFERENCE</span>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-[#00E5FF]/60">INSPECTION AXIS</span>
              <span className="block font-bold">23.6° WIPE TOLERANCE</span>
            </div>
          </div>

          {/* Center SVG Circuit & Audio Pipeline Vector */}
          <div className="relative z-10 my-auto py-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="p-4 border border-[#00E5FF]/30 bg-[#00E5FF]/5 space-y-2">
              <div className="text-[11px] font-bold">01 · WEBSOCKET CHUNKER</div>
              <div className="text-[10px] text-[#00E5FF]/70">Incoming PCM stream sliced to 250ms audio frames</div>
              <div className="text-[9px] text-[#00E5FF]/40">LATENCY BUDGET: 280ms</div>
            </div>

            <div className="p-4 border border-[#00E5FF]/30 bg-[#00E5FF]/5 space-y-2">
              <div className="text-[11px] font-bold">02 · DUAL-ENGINE FUSION</div>
              <div className="text-[10px] text-[#00E5FF]/70">Wav2Vec2 Latents ⇄ Librosa Phase Incoherence DSP</div>
              <div className="text-[9px] text-[#00E5FF]/40">SPECTRAL FLATNESS HEURISTIC</div>
            </div>

            <div className="p-4 border border-[#00E5FF]/30 bg-[#00E5FF]/5 space-y-2">
              <div className="text-[11px] font-bold">03 · AUDIT EMITTER</div>
              <div className="text-[10px] text-[#00E5FF]/70">Ephemeral zero-retention memory buffer + PDF auditor</div>
              <div className="text-[9px] text-[#00E5FF]/40">STATE: VERIFIED CLEAN</div>
            </div>
          </div>

          {/* Bottom Blueprint Dimensions */}
          <div className="relative z-10 flex items-center justify-between border-t border-[#00E5FF]/20 pt-4 text-[10px] text-[#00E5FF]/60">
            <span>FIGURE 1.0 — ASYNCHRONOUS FASTAPI TOPOLOGY</span>
            <span>SYSTEM AUDIT PASSED [OK]</span>
          </div>
        </div>

        {/* OVER LAYER: LIVE PRODUCTION SYSTEM HUD (Clipped by slider position) */}
        <div
          className="absolute inset-0 overflow-hidden z-10"
          style={{
            clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`,
            backgroundColor: '#11151C',
          }}
        >
          <div
            className="w-full h-full p-8 sm:p-12 flex flex-col justify-between text-[#F2F2EF]"
            style={{ backgroundColor: '#11151C' }}
          >
            {/* Top Bar Live Status */}
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 font-mono-code text-xs">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FB5E28] animate-pulse" />
                <span className="font-bold text-[#F2F2EF]">VOICEGUARD · PRODUCTION HUD</span>
              </div>
              <span className="text-[#FB5E28]">LIVE INFERENCE STREAM</span>
            </div>

            {/* Center Visual Mockup */}
            <div className="my-auto py-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="font-mono-code text-xs text-[#5C626D] uppercase">
                  CLASSIFICATION CONFIDENCE
                </div>
                <div className="text-4xl sm:text-6xl font-display font-bold text-[#F2F2EF] tracking-tight">
                  99.4% REAL
                </div>
                <div className="flex gap-2 font-mono-code text-[11px] text-[#9AA0AA]">
                  <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded">Phase Coherent</span>
                  <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded">Micro-Jitter Present</span>
                </div>
              </div>

              {/* Waveform Telemetry Visualizer */}
              <div className="h-28 bg-black/60 border border-white/10 rounded-xl flex items-center justify-around px-4 gap-1">
                {[45, 60, 25, 80, 95, 30, 70, 85, 40, 65, 90, 35, 75, 50, 85, 60, 40, 70, 95, 30].map((h, i) => (
                  <div
                    key={i}
                    className="w-1.5 bg-[#FB5E28] rounded-full transition-all duration-300"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Bottom Production Status */}
            <div className="flex items-center justify-between font-mono-code text-xs text-[#5C626D] border-t border-white/[0.08] pt-4">
              <span>HOST: RENDER DEPLOYED</span>
              <span className="text-[#F2F2EF]">RENDER LATENCY: 240ms</span>
            </div>
          </div>
        </div>

        {/* Divider Slider Handle */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-[#FB5E28] z-20 pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#FB5E28] text-white flex items-center justify-center text-[10px] shadow-lg font-bold">
            ⇄
          </div>
        </div>

        {/* DRAGGABLE DIVIDER HANDLE */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-[#FF3B00] cursor-ew-resize flex items-center justify-center -ml-0.5 pointer-events-none shadow-xl"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="w-8 h-8 rounded-full bg-[#FF3B00] text-black font-mono-code text-[10px] font-bold flex items-center justify-center shadow-lg">
            ⇄
          </div>
        </div>
      </div>
    </section>
  );
};
