import React from 'react';
import { EXPERIENCES } from '../data/experience';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-28 pb-24 px-6 md:px-12 max-w-7xl mx-auto space-y-24">
      {/* Header */}
      <div className="border-b border-white/[0.08] pb-12">
        <div className="font-mono-code text-xs text-[#FB5E28] uppercase tracking-widest mb-3">
          [02 // TRAJECTORY &amp; FOUNDATIONS]
        </div>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-[#F2F2EF] tracking-tight">
          About &amp; Story
        </h1>
      </div>

      {/* Main Grid: Portrait + Detailed Story */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Sticky Column */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#11151C] border border-white/[0.08] group rounded-lg">
            <img
              src="/assets/profile/hero-umer.png"
              alt="Umer Khan (Doctor Umerkhan Junaidkhan)"
              className="w-full h-full object-cover object-top grayscale contrast-125 brightness-95 group-hover:scale-102 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090C12] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono-code text-[11px] text-[#F2F2EF]">
              <span>UMER KHAN</span>
              <span className="text-[#FB5E28]">2026 // ED.</span>
            </div>
          </div>

          <div className="p-6 bg-[#11151C] border border-white/[0.08] space-y-4 font-mono-code text-xs rounded-lg">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
              <span className="text-[#5C626D] uppercase">Degree</span>
              <span className="text-[#F2F2EF]">B.E. AI &amp; Data Science</span>
            </div>
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
              <span className="text-[#5C626D] uppercase">Institution</span>
              <span className="text-[#F2F2EF]">Terna Engg (2024–2027)</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#5C626D] uppercase">Diploma Milestone</span>
              <span className="text-[#FB5E28] font-bold">Rank #1 (90.33%)</span>
            </div>
          </div>
        </div>

        {/* Right Column: Skhiladze-Style Storytelling Timeline */}
        <div className="lg:col-span-7 space-y-16">
          {/* Engineering Narrative */}
          <div className="space-y-6 font-display text-2xl sm:text-3xl text-[#F2F2EF] leading-snug tracking-tight">
            <p>
              I build systems from the foundational layer upwards.
            </p>
            <p className="text-[#9AA0AA]">
              My focus is not superficial AI wrappers. I engineer verifiable software: fine-tuning
              self-supervised acoustic models (Wav2Vec2) to isolate deepfake micro-jitter artifacts at 16kHz,
              building clinical RAG pipelines conditioned on medical ontologies, and deploying non-custodial
              financial protocols tested against reentrancy invariants.
            </p>
            <p className="text-base font-sans text-[#9AA0AA] leading-relaxed">
              My formal foundation started with a 3-year Diploma in Artificial Intelligence &amp; Machine Learning
              at A. R. Kalsekar Polytechnic (MSBTE), where I placed Class Rank #1 across all 6 semesters and finished with
              a 90.33% aggregate. Today I am pursuing my Bachelor of Engineering in AI &amp; Data Science at Terna
              Engineering College, Mumbai University.
            </p>
          </div>

          {/* Peer-Reviewed Publication */}
          <div className="p-8 bg-[#11151C] border border-white/[0.08] space-y-4 rounded-lg">
            <div className="flex items-center justify-between font-mono-code text-xs">
              <span className="text-[#FB5E28] uppercase tracking-wider font-semibold">[PEER-REVIEWED RESEARCH PAPER]</span>
              <span className="text-[#5C626D]">IJRAR // MARCH 2024</span>
            </div>
            <h2 className="font-display text-2xl font-bold text-[#F2F2EF]">
              Multiple Face Recognition Attendance System
            </h2>
            <p className="font-sans text-xs md:text-sm text-[#9AA0AA] leading-relaxed">
              Authored and published in the <em>International Journal of Research and Analytical Reviews (IJRAR)</em>.
              Presents an automated multi-person facial verification system employing Haar Cascade spatial detection
              alongside Local Binary Pattern Histograms (LBPH) to execute illumination-invariant matching logged into an SQL store.
            </p>
            <div className="pt-2 flex flex-wrap gap-2 font-mono-code text-[11px] text-[#5C626D]">
              <span className="px-2 py-0.5 rounded bg-white/[0.04]">[COMPUTER VISION]</span>
              <span className="px-2 py-0.5 rounded bg-white/[0.04]">[LBPH ALGORITHM]</span>
              <span className="px-2 py-0.5 rounded bg-white/[0.04]">[OPENCV]</span>
              <span className="px-2 py-0.5 rounded bg-white/[0.04]">[RELATIONAL SQL LOGGING]</span>
            </div>
          </div>

          {/* Formal Industrial Experience Timeline */}
          <div className="space-y-8">
            <div className="font-mono-code text-xs text-[#FB5E28] uppercase tracking-widest font-semibold">
              [FORMAL INDUSTRIAL INTERNSHIPS]
            </div>

            <div className="space-y-8 border-l border-white/[0.08] pl-6 ml-2">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="relative space-y-3">
                  <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#FB5E28] shadow-[0_0_8px_rgba(251,94,40,0.8)]" />
                  <div className="flex flex-wrap items-baseline justify-between gap-2 font-mono-code text-xs">
                    <span className="text-[#FB5E28] uppercase tracking-wider font-semibold">
                      {exp.company}
                    </span>
                    <span className="text-[#5C626D]">{exp.period}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#F2F2EF]">
                    {exp.role}
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-[#9AA0AA] leading-relaxed">
                    {exp.description}
                  </p>
                  <ul className="space-y-1.5 text-xs text-[#9AA0AA] list-disc list-inside">
                    {exp.achievements.map((ach, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {ach}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.skills.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] font-mono-code text-[10px] text-[#5C626D]"
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
