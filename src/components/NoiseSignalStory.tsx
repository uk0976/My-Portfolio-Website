import React, { useState } from 'react';

interface ScrollStoryFrame {
  num: string;
  label: string;
  snr: string;
  heading: string;
  body: string;
  metric: string;
}

const FRAMES: ScrollStoryFrame[] = [
  {
    num: '01',
    label: 'RAW',
    snr: '-18.4 dB (NOISE DOMINANT)',
    heading: 'Every system starts as noise.',
    body: 'Raw audio telemetry, unstructured clinical pathology notes, unverified transactions. Messy data with zero commercial value until isolated.',
    metric: 'INPUT: 16 kHz UNPROCESSED STREAM',
  },
  {
    num: '02',
    label: 'MODEL',
    snr: '-02.1 dB (CONVERGENCE)',
    heading: 'Then it learns the pattern.',
    body: 'Self-supervised speech representations (Wav2Vec2), BioBERT clinical entity extraction, and DSP spectral heuristics isolate the anomalies.',
    metric: 'WEIGHTS: ACOUSTIC LATENTS RESOLVED',
  },
  {
    num: '03',
    label: 'THE GAP',
    snr: '+14.8 dB (PRODUCTION RISK)',
    heading: 'Most models die in a notebook.',
    body: 'Jupyter notebooks do not handle WebSocket dropouts, out-of-gas smart contracts, or real-time latency spikes. The handoff is where software breaks.',
    metric: 'LATENCY CEILING: < 280ms CHUNK BUDGET',
  },
  {
    num: '04',
    label: 'SHIPPED',
    snr: '+42.0 dB (DETERMINISTIC SIGNAL)',
    heading: 'I ship them.',
    body: 'Asynchronous FastAPI microservices, non-custodial Solidity protocols, and React HUD dashboards. Verified by unit tests and live on Render.',
    metric: 'STATUS: PRODUCTION DEPLOYED',
  },
];

export const NoiseSignalStory: React.FC = () => {
  const [activeFrame, setActiveFrame] = useState<number>(0);

  return (
    <section className="px-6 md:px-12 max-w-7xl mx-auto hairline-t py-28">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="font-mono-code text-xs text-[#FF3B00] uppercase tracking-widest mb-3">
            [THE SIGNATURE THESIS // NOISE → SIGNAL]
          </div>
          <h2 className="font-display text-4xl md:text-6xl text-[#EDEAE4] tracking-tight">
            From Messy Data to Deployed Signal
          </h2>
        </div>
        <p className="max-w-md font-sans text-sm text-[#949089] leading-relaxed">
          The difference between an experimental notebook and an engineered system is deterministic production execution.
        </p>
      </div>

      {/* Interactive Frame Navigator */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Frame Selector Strip */}
        <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            {FRAMES.map((f, idx) => (
              <button
                key={f.num}
                onClick={() => setActiveFrame(idx)}
                className={`w-full p-5 text-left border transition-all cursor-pointer font-mono-code text-xs flex items-center justify-between ${
                  activeFrame === idx
                    ? 'bg-[#18181C] border-[#FF3B00] text-[#EDEAE4]'
                    : 'bg-[#121214] border-white/5 text-[#949089] hover:border-white/20'
                }`}
                data-cursor="SELECT"
              >
                <div className="flex items-center gap-3">
                  <span className={activeFrame === idx ? 'text-[#FF3B00] font-bold' : 'text-[#5C5A55]'}>
                    [{f.num}]
                  </span>
                  <span className="font-semibold">{f.label}</span>
                </div>
                <span className="text-[10px] text-[#5C5A55]">{f.snr.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Dynamic SNR Telemetry readout box */}
          <div className="p-6 bg-black/80 border border-white/10 font-mono-code text-xs space-y-2">
            <div className="flex items-center justify-between text-[#5C5A55]">
              <span>ACTIVE SNR TELEMETRY:</span>
              <span className="w-2 h-2 rounded-full bg-[#FF3B00] animate-ping" />
            </div>
            <div className="text-xl md:text-2xl font-bold text-[#FF3B00] tabular-nums">
              {FRAMES[activeFrame].snr}
            </div>
            <div className="text-[11px] text-[#EDEAE4] pt-2 hairline-t">
              {FRAMES[activeFrame].metric}
            </div>
          </div>
        </div>

        {/* Frame Detail Stage */}
        <div className="lg:col-span-8 p-8 md:p-14 bg-[#121215] border border-white/10 flex flex-col justify-between relative overflow-hidden">
          {/* Subtle 45° Motif Background Watermark */}
          <div className="absolute top-6 right-8 font-mono-code text-7xl md:text-9xl font-bold text-white/[0.02] select-none pointer-events-none">
            {FRAMES[activeFrame].num}
          </div>

          <div className="relative z-10 space-y-6">
            <div className="font-mono-code text-xs text-[#FF3B00] uppercase tracking-wider">
              PHASE {FRAMES[activeFrame].num} // {FRAMES[activeFrame].label}
            </div>
            <h3 className="font-display text-3xl sm:text-5xl md:text-6xl text-[#EDEAE4] tracking-tight leading-tight">
              "{FRAMES[activeFrame].heading}"
            </h3>
            <p className="font-sans text-base md:text-lg text-[#949089] max-w-xl leading-relaxed">
              {FRAMES[activeFrame].body}
            </p>
          </div>

          {/* Footer of the Frame */}
          <div className="relative z-10 pt-10 mt-12 hairline-t flex flex-wrap items-center justify-between gap-4 font-mono-code text-xs text-[#5C5A55]">
            <div className="flex items-center gap-2">
              <span className="text-[#FF3B00]">↳</span>
              <span>VERIFIED AGAINST PRODUCTION ARTIFACTS</span>
            </div>
            <span>FRAME {activeFrame + 1} OF 4</span>
          </div>
        </div>
      </div>
    </section>
  );
};
