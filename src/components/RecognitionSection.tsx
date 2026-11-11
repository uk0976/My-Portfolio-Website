import React, { useState } from 'react';
import { RECOGNITIONS } from '../data/experience';

export const RecognitionSection: React.FC = () => {
  const [filter, setFilter] = useState<'ALL' | 'Award' | 'Certification' | 'Workshop / Leadership'>('ALL');

  const filtered =
    filter === 'ALL'
      ? RECOGNITIONS
      : RECOGNITIONS.filter((r) => r.category === filter);

  return (
    <section id="recognition" className="py-24 px-6 md:px-12 max-w-7xl mx-auto hairline-t">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="font-mono-code text-xs text-[#FF3B00] uppercase tracking-widest mb-3">
            [04 // RECOGNITION &amp; CERTIFICATIONS]
          </div>
          <h2 className="font-display text-4xl md:text-6xl text-[#EDEAE4] tracking-tight">
            Awards, Credentials &amp; Leadership
          </h2>
        </div>
        <p className="max-w-md font-sans text-sm text-[#949089] leading-relaxed">
          Academic ranks, competitive collegiate awards, industry job simulations, and developer leadership programs.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 hairline-b font-mono-code text-xs">
        {(['ALL', 'Award', 'Certification', 'Workshop / Leadership'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
              filter === tab
                ? 'bg-[#EDEAE4] text-black font-semibold'
                : 'text-[#949089] hover:text-[#EDEAE4] hover:bg-white/[0.04]'
            }`}
            data-cursor="FILTER"
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Grid of Recognition Rows */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="p-8 bg-[#121215] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between font-mono-code text-xs mb-3">
                <span className="text-[#FF3B00] uppercase tracking-wider">{item.tag}</span>
                <span className="text-[#5C5A55]">{item.year}</span>
              </div>
              <h3 className="font-display text-xl md:text-2xl text-[#EDEAE4] tracking-tight mb-2">
                {item.title}
              </h3>
              <div className="font-mono-code text-xs text-[#949089] mb-4">
                {item.issuer}
              </div>
              <p className="font-sans text-xs md:text-sm text-[#949089] leading-relaxed">
                {item.summary}
              </p>
            </div>

            <div className="pt-6 mt-6 hairline-t flex items-center justify-between font-mono-code text-[11px] text-[#5C5A55]">
              <span>STATUS: VERIFIED RECORD</span>
              <span className="text-[#EDEAE4]">ACCREDITED</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
