import React, { useState } from 'react';
import { RECOGNITIONS } from '../data/experience';

export const RecognitionPage: React.FC = () => {
  const [filter, setFilter] = useState<'ALL' | 'Award' | 'Certification' | 'Workshop / Leadership'>('ALL');

  const filtered =
    filter === 'ALL'
      ? RECOGNITIONS
      : RECOGNITIONS.filter((r) => r.category === filter);

  return (
    <div className="pt-28 pb-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-12">
        <div>
          <div className="font-mono-code text-xs text-[#FB5E28] uppercase tracking-widest mb-3">
            [04 // RECOGNITION &amp; CERTIFICATIONS]
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-[#F2F2EF] tracking-tight">
            Awards &amp; Credentials
          </h1>
        </div>
        <p className="max-w-md font-sans text-sm text-[#9AA0AA] leading-relaxed">
          Academic rank #1 distinctions, competitive symposium trophies, industry job simulations, and verified cloud &amp; AI credentials.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-white/[0.08] font-mono-code text-xs">
        {(['ALL', 'Award', 'Certification', 'Workshop / Leadership'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
              filter === tab
                ? 'bg-[#FB5E28] text-white font-semibold'
                : 'text-[#9AA0AA] hover:text-[#F2F2EF] hover:bg-white/[0.04]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="p-8 bg-[#11151C] border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between rounded-lg"
          >
            <div>
              <div className="flex items-center justify-between font-mono-code text-xs mb-3">
                <span className="text-[#FB5E28] uppercase tracking-wider font-semibold">
                  {item.tag}
                </span>
                <span className="text-[#5C626D]">{item.year}</span>
              </div>
              <h2 className="font-display text-xl md:text-2xl font-bold text-[#F2F2EF] tracking-tight mb-2">
                {item.title}
              </h2>
              <div className="font-mono-code text-xs text-[#9AA0AA] mb-4">
                {item.issuer}
              </div>
              <p className="font-sans text-xs md:text-sm text-[#9AA0AA] leading-relaxed">
                {item.summary}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between font-mono-code text-[11px] text-[#5C626D]">
              <span>RECORD: ACCREDITED</span>
              <span className="text-[#FB5E28] font-semibold">VERIFIED ✓</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
