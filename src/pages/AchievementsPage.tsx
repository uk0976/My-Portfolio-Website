import React from 'react';
import { Link } from 'react-router-dom';

interface Achievement {
  id: string;
  badge: string;
  title: string;
  issuer: string;
  year: string;
  summary: string;
  distinction: string;
  details: string[];
}

const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'rank1-diploma',
    badge: 'ACADEMIC EXCELLENCE',
    title: 'Class Rank #1 & 90.33% Overall Aggregate Distinction',
    issuer: 'MSBTE / A. R. Kalsekar Polytechnic',
    year: '2021 – 2024',
    distinction: 'Ranked 1st in Class Across All 6 Semesters',
    summary: 'Consistently achieved top ranking in the Diploma in Artificial Intelligence & Machine Learning program, culminating in an overall aggregate of 90.33%.',
    details: [
      'Maintained Semester Grade Point Averages above 9.0 in every examination cycle',
      'Coursework mastery: Data Structures, Machine Learning, Computer Vision, and Database Architecture',
      'Recognized at annual convocation ceremony for departmental academic leadership'
    ]
  },
  {
    id: 'paper-award',
    badge: 'STATE-LEVEL SYMPOSIUM',
    title: '3rd Prize – Technical Paper Presentation',
    issuer: 'F. R. Agnel College of Engineering & Technology, Vashi',
    year: '2024',
    distinction: '3rd Place State-Wide Award',
    summary: 'Awarded 3rd place in state-level collegiate technical symposium for presenting novel computer vision research on illumination-invariant attendance recognition.',
    details: [
      'Presented the underlying algorithm behind the Multiple Face Recognition Attendance System',
      'Evaluated by university faculty and industry adjudicators against 40+ engineering teams',
      'Demonstrated real-time Haar Cascade ROI localization and LBPH texture histogram extraction'
    ]
  },
  {
    id: 'best-student-award',
    badge: 'LEADERSHIP & MERIT',
    title: 'Best Student Award (Conferred Twice)',
    issuer: 'Academic Council & Student Affairs Committee',
    year: '2022 & 2023',
    distinction: 'Back-to-Back Annual Recipient',
    summary: 'Conferred twice with the institution’s highest student honour for academic excellence, technical mentoring of junior batches, and departmental leadership.',
    details: [
      'Recognized for exceptional dual performance in academics and extracurricular technical forums',
      'Mentored 30+ junior students in Python programming, algorithmic reasoning, and Git workflows',
      'Organized departmental code sprints, debugging jams, and tech workshops'
    ]
  },
  {
    id: 'best-orator-award',
    badge: 'COMMUNICATION & KEYNOTE',
    title: 'Best Orator Award',
    issuer: 'Inter-Collegiate Speech & Technical Forum',
    year: '2023',
    distinction: 'First Place Oratory Distinction',
    summary: 'Conferred the Best Orator distinction for clarity, rhetorical articulation, and technical depth in presenting complex software engineering subjects.',
    details: [
      'Delivered keynote presentation on the societal and ethical dimensions of generative AI',
      'Judged on technical rigor, audience engagement, timing discipline, and Q&A defense',
      'Distinguished among participants from premier engineering institutions across the region'
    ]
  },
  {
    id: 'agentic-ai-workshop',
    badge: 'DEPARTMENTAL KEYNOTE',
    title: 'Speaker & Lead Volunteer – 2-Day Agentic AI Workshop',
    issuer: 'Department of AI & Data Science, Terna Engineering College',
    year: '2026',
    distinction: 'Invited Departmental Speaker',
    summary: 'Served as speaker and lead coordinator for an intensive 2-day hands-on workshop teaching autonomous AI agent swarms and tool-calling architectures.',
    details: [
      'Designed curriculum demonstrating LLM tool-calling, LangChain agents, and structured memory',
      'Guided 80+ engineering undergraduates through building their first autonomous agents',
      'Commended by department leadership for pedagogical clarity and hands-on system demonstrations'
    ]
  }
];

export const AchievementsPage: React.FC = () => {
  return (
    <div className="pt-28 pb-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-12">
        <div>
          <div className="font-mono-code text-xs text-[#FB5E28] uppercase tracking-widest mb-3">
            [05 // HONORS &amp; MERIT INDEX]
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-[#F2F2EF] tracking-tight">
            Achievements &amp; Awards
          </h1>
        </div>
        <p className="max-w-md font-sans text-sm text-[#9AA0AA] leading-relaxed">
          Verifiable academic distinctions, state-wide symposium trophies, departmental orator honours, and leadership acknowledgements.
        </p>
      </div>

      {/* Metric Counters Banner */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-[#11151C] border border-white/[0.08] font-mono-code rounded-lg">
        <div>
          <span className="block text-[10px] text-[#5C626D] uppercase tracking-wider">DIPLOMA MERIT</span>
          <span className="block text-2xl font-bold text-[#FB5E28] mt-1">90.33%</span>
          <span className="text-[11px] text-[#9AA0AA]">Class Rank #1</span>
        </div>
        <div>
          <span className="block text-[10px] text-[#5C626D] uppercase tracking-wider">PAPER PRIZE</span>
          <span className="block text-2xl font-bold text-[#F2F2EF] mt-1">3rd Prize</span>
          <span className="text-[11px] text-[#9AA0AA]">State Symposium</span>
        </div>
        <div>
          <span className="block text-[10px] text-[#5C626D] uppercase tracking-wider">BEST STUDENT</span>
          <span className="block text-2xl font-bold text-[#F2F2EF] mt-1">×2 Conferred</span>
          <span className="text-[11px] text-[#9AA0AA]">2022 &amp; 2023</span>
        </div>
        <div>
          <span className="block text-[10px] text-[#5C626D] uppercase tracking-wider">INVITED SPEAKER</span>
          <span className="block text-2xl font-bold text-[#FB5E28] mt-1">Agentic AI</span>
          <span className="text-[11px] text-[#9AA0AA]">Terna Workshop 2026</span>
        </div>
      </div>

      {/* Honors Matrix */}
      <div className="space-y-8">
        {ACHIEVEMENTS.map((item, idx) => (
          <div
            key={item.id}
            className="p-8 bg-[#11151C] border border-white/[0.08] hover:border-white/20 transition-all rounded-lg flex flex-col lg:flex-row lg:items-start justify-between gap-8"
          >
            <div className="lg:w-2/3 space-y-4">
              <div className="flex flex-wrap items-center gap-3 font-mono-code text-xs">
                <span className="px-2.5 py-0.5 rounded bg-[#FB5E28]/10 border border-[#FB5E28]/25 text-[#FB5E28] font-semibold">
                  {item.badge}
                </span>
                <span className="text-[#5C626D]">// 0{idx + 1}</span>
                <span className="text-[#5C626D]">·</span>
                <span className="text-[#9AA0AA]">{item.year}</span>
              </div>

              <h2 className="font-display text-2xl md:text-3xl font-bold text-[#F2F2EF] tracking-tight">
                {item.title}
              </h2>

              <div className="font-mono-code text-xs text-[#9AA0AA]">
                Conferred by <span className="text-[#F2F2EF] font-semibold">{item.issuer}</span>
              </div>

              <p className="font-sans text-sm text-[#9AA0AA] leading-relaxed">
                {item.summary}
              </p>

              <ul className="space-y-2 font-sans text-xs text-[#9AA0AA] border-t border-white/[0.06] pt-4">
                {item.details.map((d, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#FB5E28] font-mono-code">↳</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Distinction Seal */}
            <div className="lg:w-1/3 flex flex-col justify-between items-start lg:items-end border-t lg:border-t-0 lg:border-l border-white/[0.08] pt-6 lg:pt-0 lg:pl-8 space-y-6">
              <div className="text-left lg:text-right">
                <span className="block font-mono-code text-[10px] text-[#5C626D] uppercase tracking-wider">
                  VERIFIED CITATION
                </span>
                <span className="block font-mono-code text-xs text-[#FB5E28] font-bold mt-1">
                  {item.distinction}
                </span>
              </div>

              <div className="px-3 py-1.5 rounded bg-white/[0.03] border border-white/[0.06] font-mono-code text-[11px] text-[#5C626D]">
                STATUS: VERIFIED RECORD ✓
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Navigation Action */}
      <div className="p-8 bg-[#11151C] border border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-6 font-mono-code text-xs rounded-lg">
        <div>
          <span className="text-[#F2F2EF] font-bold block mb-1">LOOKING FOR INDUSTRIAL CREDENTIALS?</span>
          <span className="text-[#5C626D]">Explore verified internships, Google Cloud, and enterprise job simulations.</span>
        </div>
        <Link
          to="/certificates"
          className="px-6 py-3 bg-[#FB5E28] hover:bg-[#FF7A4D] text-white uppercase tracking-wider font-semibold transition-colors rounded shadow-lg shadow-[#FB5E28]/20"
        >
          View Certificates &amp; Experience →
        </Link>
      </div>
    </div>
  );
};
