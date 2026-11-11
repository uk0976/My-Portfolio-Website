import React from 'react';
import { SKILL_CATEGORIES } from '../data/experience';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-7xl mx-auto hairline-t">
      {/* Section Tag & Heading */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="font-mono-code text-xs text-[#FF3B00] uppercase tracking-widest mb-3">
            [03 // TECHNICAL STACK INDEX]
          </div>
          <h2 className="font-display text-4xl md:text-6xl text-[#EDEAE4] tracking-tight">
            Capabilities &amp; Real-World Context
          </h2>
        </div>
        <p className="max-w-md font-sans text-sm text-[#949089] leading-relaxed">
          No generic percentage bars. Every tool is contextualized by the systems and pipelines where it was actively deployed.
        </p>
      </div>

      {/* Grouped Stack Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SKILL_CATEGORIES.map((cat, i) => (
          <div
            key={i}
            className="p-8 bg-[#121215] border border-white/10 flex flex-col justify-between"
          >
            <div>
              <div className="font-mono-code text-xs text-[#FF3B00] uppercase tracking-wider mb-2">
                // 0{i + 1}
              </div>
              <h3 className="font-display text-2xl text-[#EDEAE4] tracking-tight mb-2">
                {cat.title}
              </h3>
              <p className="font-sans text-xs text-[#949089] leading-relaxed mb-6">
                {cat.tagline}
              </p>

              <div className="space-y-4 hairline-t pt-6">
                {cat.items.map((item, idx) => (
                  <div key={idx} className="group">
                    <div className="font-mono-code text-xs text-[#EDEAE4] font-semibold group-hover:text-[#FF3B00] transition-colors">
                      {item.name}
                    </div>
                    <div className="font-sans text-[11px] text-[#5C5A55] mt-0.5">
                      {item.context}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 mt-8 hairline-t font-mono-code text-[10px] text-[#5C5A55] uppercase tracking-widest flex items-center justify-between">
              <span>VERIFIED PRODUCTION USE</span>
              <span>[OK]</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
