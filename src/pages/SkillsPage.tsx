import React from 'react';
import { SKILL_CATEGORIES } from '../data/experience';

export const SkillsPage: React.FC = () => {
  return (
    <div className="pt-28 pb-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-12">
        <div>
          <div className="font-mono-code text-xs text-[#FB5E28] uppercase tracking-widest mb-3">
            [03 // TECHNICAL CAPABILITIES &amp; STACK]
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-[#F2F2EF] tracking-tight">
            Skills &amp; Capabilities
          </h1>
        </div>
        <p className="max-w-md font-sans text-sm text-[#9AA0AA] leading-relaxed">
          Categorized by core engineering disciplines. Every skill listed represents hands-on production code, research papers, or deployed client deliverables.
        </p>
      </div>

      {/* Grid of 6 Main Disciplines */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILL_CATEGORIES.map((cat, i) => (
          <div
            key={i}
            className="p-8 bg-[#11151C] border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between rounded-lg"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono-code text-xs text-[#FB5E28] font-bold">
                  // 0{i + 1}
                </span>
                <span className="font-mono-code text-[10px] text-[#5C626D] uppercase tracking-wider">
                  VERIFIED
                </span>
              </div>
              <h2 className="font-display text-xl md:text-2xl font-bold text-[#F2F2EF] tracking-tight mb-2">
                {cat.title}
              </h2>
              <p className="font-sans text-xs text-[#9AA0AA] leading-relaxed mb-6">
                {cat.tagline}
              </p>

              <div className="space-y-3.5 border-t border-white/[0.08] pt-5">
                {cat.items.map((item, idx) => (
                  <div key={idx} className="group">
                    <div className="font-mono-code text-xs text-[#F2F2EF] font-semibold group-hover:text-[#FB5E28] transition-colors flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-[#FB5E28]" />
                      <span>{item.name}</span>
                    </div>
                    <div className="font-sans text-[11px] text-[#5C626D] pl-2.5 mt-0.5">
                      {item.context}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/[0.08] font-mono-code text-[10px] text-[#5C626D] uppercase tracking-widest flex items-center justify-between">
              <span>PRODUCTION BENCHMARK</span>
              <span className="text-[#FB5E28]">[OK]</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
