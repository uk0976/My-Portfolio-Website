import React from 'react';
import { EXPERIENCES } from '../data/experience';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-28 pb-24 px-6 md:px-12 max-w-7xl mx-auto space-y-24">
      {/* Header */}
      <div className="hairline-b pb-12">
        <div className="font-mono-code text-xs text-[#FF3B00] uppercase tracking-widest mb-3">
          [02 // TRAJECTORY &amp; FOUNDATIONS]
        </div>
        <h1 className="font-display text-4xl md:text-7xl text-[#EDEAE4] tracking-tight">
          About &amp; Background
        </h1>
      </div>

      {/* Main Grid: Portrait + Detailed Narrative */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Sticky Column */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#18181B] border border-white/10 group">
            <img
              src="/assets/profile/hero-umer.png"
              alt="Umerkhan Junaidkhan Doctor"
              className="w-full h-full object-cover object-top grayscale contrast-125 brightness-90 group-hover:scale-102 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono-code text-[11px] text-[#EDEAE4]">
              <span>UMERKHAN JUNAIDKHAN</span>
              <span className="text-[#FF3B00]">2026 // ED.</span>
            </div>
          </div>

          <div className="p-6 bg-white/[0.02] border border-white/5 space-y-4 font-mono-code text-xs">
            <div className="flex items-center justify-between pb-3 hairline-b">
              <span className="text-[#5C5A55] uppercase">Degree</span>
              <span className="text-[#EDEAE4]">B.E. AI &amp; Data Science</span>
            </div>
            <div className="flex items-center justify-between pb-3 hairline-b">
              <span className="text-[#5C5A55] uppercase">University</span>
              <span className="text-[#EDEAE4]">Terna Engg / Mumbai Univ (2027)</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#5C5A55] uppercase">Diploma Aggregate</span>
              <span className="text-[#FF3B00] font-bold">Rank #1 (90.33%)</span>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative + Education + Internships */}
        <div className="lg:col-span-7 space-y-16">
          {/* Engineering Narrative */}
          <div className="space-y-6 font-display text-2xl sm:text-3xl text-[#EDEAE4] leading-snug tracking-tight">
            <p>
              I build systems from the foundational layer upwards.
            </p>
            <p className="text-[#949089]">
              My focus is not superficial AI wrappers. I engineer verifiable software: fine-tuning
              self-supervised acoustic models (Wav2Vec2) to isolate deepfake micro-jitter artifacts at 16kHz,
              building clinical RAG pipelines conditioned on medical ontologies, and deploying non-custodial
              financial protocols tested against reentrancy invariants.
            </p>
            <p className="text-base font-sans text-[#949089] leading-relaxed">
              My formal foundation started with a 3-year Diploma in Artificial Intelligence &amp; Machine Learning
              at A. R. Kalsekar Polytechnic (MSBTE), where I placed Class Rank #1 across 4 semesters and finished with
              a 90.33% aggregate. Today I am pursuing my Bachelor of Engineering in AI &amp; Data Science at Terna
              Engineering College, Navi Mumbai.
            </p>
          </div>

          {/* Peer-Reviewed Publication */}
          <div className="p-8 bg-[#121215] border border-white/10 space-y-4">
            <div className="flex items-center justify-between font-mono-code text-xs">
              <span className="text-[#FF3B00] uppercase tracking-wider">[PEER-REVIEWED RESEARCH PAPER]</span>
              <span className="text-[#5C5A55]">IJRAR // MARCH 2024</span>
            </div>
            <h2 className="font-display text-2xl text-[#EDEAE4]">
              Multiple Face Recognition Attendance System
            </h2>
            <p className="font-sans text-xs md:text-sm text-[#949089] leading-relaxed">
              Authored and published in the <em>International Journal of Research and Analytical Reviews (IJRAR)</em>.
              Presents an automated multi-person facial verification system employing Haar Cascade spatial detection
              alongside Local Binary Pattern Histograms (LBPH) to execute illumination-invariant matching logged into an SQL store.
            </p>
            <div className="pt-2 flex flex-wrap gap-2 font-mono-code text-[11px] text-[#5C5A55]">
              <span>[COMPUTER VISION]</span>
              <span>[LBPH ALGORITHM]</span>
              <span>[OPENCV]</span>
              <span>[RELATIONAL SQL LOGGING]</span>
            </div>
          </div>

          {/* Formal Industrial Experience Timeline */}
          <div className="space-y-8">
            <div className="font-mono-code text-xs text-[#FF3B00] uppercase tracking-widest">
              [FORMAL INDUSTRIAL INTERNSHIPS]
            </div>

            <div className="space-y-8 border-l border-white/10 pl-6 ml-2">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="relative group">
                  <span className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#09090B] border border-white/30 group-hover:border-[#FF3B00] group-hover:bg-[#FF3B00] transition-colors" />

                  <div className="flex flex-wrap items-baseline justify-between gap-2 font-mono-code text-xs mb-1">
                    <span className="text-[#EDEAE4] font-semibold text-sm">{exp.role}</span>
                    <span className="text-[#5C5A55]">{exp.period}</span>
                  </div>

                  <div className="font-mono-code text-xs text-[#FF3B00] mb-3">
                    {exp.company} · {exp.location}
                  </div>

                  <p className="text-xs md:text-sm text-[#949089] leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <ul className="space-y-1.5 mb-4 text-xs text-[#949089]">
                    {exp.achievements.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#FF3B00] font-mono-code">↳</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((s) => (
                      <span
                        key={s}
                        className="font-mono-code text-[10px] text-[#949089] bg-white/[0.03] border border-white/5 px-2 py-0.5 rounded"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
