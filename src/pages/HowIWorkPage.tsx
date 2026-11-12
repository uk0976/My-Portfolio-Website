import React from 'react';
import { Link } from 'react-router-dom';

export const HowIWorkPage: React.FC = () => {
  const principles = [
    {
      num: '01',
      title: 'Zero Notebook Deliverables',
      statement: 'Jupyter notebooks are scratchpads, not production software.',
      detail:
        'A model is not shipped until it is wrapped in an asynchronous service (FastAPI), handles streaming chunks under 280ms, emits structured logs, and runs behind automated regression tests.',
    },
    {
      num: '02',
      title: 'Latency is a Core Architecture Invariant',
      statement: 'A 99% accurate model that takes 4 seconds to respond is commercially useless.',
      detail:
        'In VoiceGuard, I paired deep neural representations (Wav2Vec2) with classical DSP heuristics (spectral flatness, phase coherence) to provide real-time stream feedback while the heavy transformer executes in parallel.',
    },
    {
      num: '03',
      title: 'Invariants Before Interfaces',
      statement: 'Never design a UI for an untested data pipeline.',
      detail:
        'Before building the frontend HUD for BlockLoan, I authored 58 Hardhat unit test cases proving smart contract reentrancy resistance and exact simple interest state transitions.',
    },
    {
      num: '04',
      title: 'First-Principles Privacy & Zero-Retention',
      statement: 'Biometric telemetry must never persist unencrypted.',
      detail:
        'Voice forensics systems must process audio in memory with ephemeral buffers. Raw voice waveforms are never retained on disk, preventing secondary forensic leaks.',
    },
    {
      num: '05',
      title: 'Full Ownership Means Shipping the Entire Stack',
      statement: 'Designing the architecture, writing the contract, indexing logs, and deploying the HUD.',
      detail:
        'True velocity comes from engineers who can inspect a PyTorch acoustic tensor in Python and immediately build the responsive WebSocket HUD in TypeScript without a committee.',
    },
  ];

  return (
    <div className="pt-28 pb-24 px-6 md:px-12 max-w-5xl mx-auto space-y-20">
      {/* Header */}
      <div className="hairline-b pb-12">
        <div className="font-mono-code text-xs text-[#FF3B00] uppercase tracking-widest mb-3">
          [ENGINEERING DOCTRINE]
        </div>
        <h1 className="font-display text-4xl md:text-7xl text-[#EDEAE4] tracking-tight">
          How I Work
        </h1>
        <p className="font-sans text-sm md:text-base text-[#949089] mt-4 max-w-2xl leading-relaxed">
          Five principles derived from debugging real latency bottlenecks, deploying async WebSockets, and shipping production systems.
        </p>
      </div>

      {/* Principles List */}
      <div className="space-y-16">
        {principles.map((p) => (
          <div key={p.num} className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start hairline-b pb-12">
            <div className="md:col-span-3 font-mono-code text-xs text-[#FF3B00] font-bold">
              // PRINCIPLE {p.num}
            </div>
            <div className="md:col-span-9 space-y-4">
              <h2 className="font-display text-2xl md:text-3xl text-[#EDEAE4] tracking-tight">
                {p.title}
              </h2>
              <p className="font-mono-code text-xs md:text-sm text-[#FF3B00]">
                "{p.statement}"
              </p>
              <p className="font-sans text-sm md:text-base text-[#949089] leading-relaxed">
                {p.detail}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="p-8 bg-[#121215] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 font-mono-code text-xs">
        <div>
          <span className="text-[#EDEAE4] font-bold block mb-1">INTERESTED IN DISCUSSING ARCHITECTURE?</span>
          <span className="text-[#5C5A55]">Open to engineering opportunities and technical conversations.</span>
        </div>
        <Link
          to="/contact"
          className="px-6 py-3 bg-[#EDEAE4] hover:bg-[#FF3B00] text-black hover:text-white uppercase tracking-wider font-semibold transition-colors"
          data-cursor="CONTACT"
        >
          Get In Touch →
        </Link>
      </div>
    </div>
  );
};
