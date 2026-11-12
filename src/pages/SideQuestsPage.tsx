import React from 'react';
import { Link } from 'react-router-dom';

export const SideQuestsPage: React.FC = () => {
  const quests = [
    {
      title: '2-Day Agentic AI Workshop Speaker & Lead Volunteer',
      year: '2026',
      tag: 'LEADERSHIP / WORKSHOP',
      desc: 'Invited as speaker and coordinator for an intensive 2-day technical workshop at Terna Engineering College, teaching students autonomous agent tool-calling patterns, LangChain agents, and local LLM execution.',
      linkText: 'View Recognition Details',
      linkUrl: '/recognition',
    },
    {
      title: 'Competitive Hackathon Sprints',
      year: '2025–2026',
      tag: 'COMPETITIVE SPRINT',
      desc: 'Active participant across high-intensity hackathons: OpenAI Codex 2026, HackDevengers, HackCelestial 2.0 / 3.0, Spark the Code, and Smart India Hackathon (SIH 2025). Building high-velocity prototypes under 36-hour sprint constraints.',
      linkText: 'View GitHub Repos',
      linkUrl: 'https://github.com/uk0976',
      external: true,
    },
    {
      title: 'State-Level Technical Paper Symposia',
      year: '2024',
      tag: 'ORATORY & RESEARCH',
      desc: 'Awarded 3rd Prize in Technical Paper Presentation at F. R. Agnel College of Engineering & Technology, Vashi, presenting computer vision algorithms for biometric tracking. Conferred Best Orator Award.',
      linkText: 'Read Published Paper Details',
      linkUrl: '/about',
    },
    {
      title: 'Open Source Developer Utilities & Algorithms Journey',
      year: 'Ongoing',
      tag: 'ALGORITHMS & DSA',
      desc: 'Curated repository documenting solutions to complex algorithmic challenges across trees, graphs, and dynamic programming with visual trace walkthroughs.',
      linkText: 'Inspect DSA Repo',
      linkUrl: 'https://github.com/uk0976/Data-Structures-Algorithms-DSA-Journey',
      external: true,
    },
  ];

  return (
    <div className="pt-28 pb-24 px-6 md:px-12 max-w-5xl mx-auto space-y-16">
      {/* Header */}
      <div className="hairline-b pb-12">
        <div className="font-mono-code text-xs text-[#FF3B00] uppercase tracking-widest mb-3">
          [OFF-PATH EXPLORATIONS]
        </div>
        <h1 className="font-display text-4xl md:text-7xl text-[#EDEAE4] tracking-tight">
          Side Quests
        </h1>
        <p className="font-sans text-sm md:text-base text-[#949089] mt-4 max-w-2xl leading-relaxed">
          Competitions, hackathons, workshops, and technical speaking engagements outside formal coursework.
        </p>
      </div>

      {/* Grid of Quests */}
      <div className="space-y-8">
        {quests.map((q, idx) => (
          <div key={idx} className="p-8 bg-[#121215] border border-white/10 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 font-mono-code text-xs">
              <span className="text-[#FF3B00] uppercase tracking-wider">{q.tag}</span>
              <span className="text-[#5C5A55]">{q.year}</span>
            </div>

            <h2 className="font-display text-2xl md:text-3xl text-[#EDEAE4] tracking-tight">
              {q.title}
            </h2>

            <p className="font-sans text-sm text-[#949089] leading-relaxed">
              {q.desc}
            </p>

            <div className="pt-4 hairline-t font-mono-code text-xs">
              {q.external ? (
                <a
                  href={q.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#EDEAE4] hover:text-[#FF3B00] transition-colors inline-flex items-center gap-1.5"
                  data-cursor="EXTERNAL"
                >
                  <span>{q.linkText}</span>
                  <span>↗</span>
                </a>
              ) : (
                <Link
                  to={q.linkUrl}
                  className="text-[#EDEAE4] hover:text-[#FF3B00] transition-colors inline-flex items-center gap-1.5"
                  data-cursor="GO"
                >
                  <span>{q.linkText}</span>
                  <span>→</span>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
