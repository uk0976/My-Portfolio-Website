import React from 'react';
import { EXPERIENCES } from '../data/experience';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto hairline-t">
      {/* Section Tag */}
      <div className="font-mono-code text-xs text-[#FF3B00] uppercase tracking-widest mb-3">
        [02 // TRAJECTORY &amp; FOUNDATIONS]
      </div>

      {/* Main Asymmetric Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Sticky Column with Portrait */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#18181B] border border-white/10 group">
            <img
              src="/assets/profile/hero-umer.png"
              alt="Umerkhan Junaidkhan Doctor"
              className="w-full h-full object-cover object-top grayscale contrast-125 brightness-90 group-hover:scale-102 transition-transform duration-700 ease-out"
            />
            {/* Subtle Duotone Gradient & Film Noise */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono-code text-[11px] text-[#EDEAE4]">
              <span>UMERKHAN JUNAIDKHAN</span>
              <span className="text-[#FF3B00]">2026 // ED.</span>
            </div>
          </div>

          {/* Quick Academic Highlights Box */}
          <div className="p-6 bg-white/[0.02] border border-white/5 space-y-4 font-mono-code text-xs">
            <div className="flex items-center justify-between pb-3 hairline-b">
              <span className="text-[#5C5A55] uppercase">Education Track</span>
              <span className="text-[#EDEAE4]">AI &amp; Data Science</span>
            </div>
            <div className="flex items-center justify-between pb-3 hairline-b">
              <span className="text-[#5C5A55] uppercase">Undergrad Degree</span>
              <span className="text-[#EDEAE4]">B.E. Terna Engg (2027)</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#5C5A55] uppercase">Diploma Milestone</span>
              <span className="text-[#FF3B00] font-bold">Rank #1 (90.33%)</span>
            </div>
          </div>
        </div>

        {/* Right Scrollable Column: Narrative + Experience Timeline + Publication */}
        <div className="lg:col-span-7 space-y-16">
          {/* Engineering Philosophy Narrative */}
          <div className="space-y-6 font-display text-2xl sm:text-3xl text-[#EDEAE4] leading-snug tracking-tight">
            <p>
              I am an engineer focused on the intersection of deep representations and high-velocity systems.
            </p>
            <p className="text-[#949089]">
              My focus is not wrapper scripts. I build verifiable systems: extracting acoustic artifacts
              from synthetic voice clones at 16kHz, engineering clinical RAG pipelines with specialized
              medical NER, and authoring invariant-verified smart contracts.
            </p>
            <p className="text-base font-sans text-[#949089] leading-relaxed">
              My technical grounding began with a 3-year Diploma in AI &amp; ML at A. R. Kalsekar Polytechnic,
              where I ranked 1st in class across four consecutive semesters and graduated with 90.33%.
              Today I am pursuing my Bachelor of Engineering in AI &amp; Data Science at Terna Engineering
              College, Mumbai University.
            </p>
          </div>

          {/* Peer-Reviewed Publication Highlight */}
          <div className="p-8 bg-[#121215] border border-white/10 space-y-4">
            <div className="flex items-center justify-between font-mono-code text-xs">
              <span className="text-[#FF3B00] uppercase tracking-wider">[PEER-REVIEWED RESEARCH]</span>
              <span className="text-[#5C5A55]">IJRAR // MARCH 2024</span>
            </div>
            <h3 className="font-display text-2xl text-[#EDEAE4]">
              Multiple Face Recognition Attendance System
            </h3>
            <p className="font-sans text-xs md:text-sm text-[#949089] leading-relaxed">
              Published in the <em>International Journal of Research and Analytical Reviews (IJRAR)</em>.
              Demonstrates real-time multi-person facial detection and recognition using Haar Cascade
              classifiers and Local Binary Pattern Histograms (LBPH) integrated with relational database logging.
            </p>
            <div className="pt-2 flex flex-wrap gap-2 font-mono-code text-[11px] text-[#5C5A55]">
              <span>[COMPUTER VISION]</span>
              <span>[LBPH ALGORITHM]</span>
              <span>[OPENCV]</span>
              <span>[SQL TRANSACTION LOGGING]</span>
            </div>
          </div>

          {/* Industrial Experience Timeline */}
          <div className="space-y-8">
            <div className="font-mono-code text-xs text-[#FF3B00] uppercase tracking-widest">
              [INDUSTRY INTERNSHIPS &amp; CLIENT WORK]
            </div>

            <div className="space-y-8 border-l border-white/10 pl-6 ml-2">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="relative group">
                  {/* Timeline Tick Indicator */}
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
    </section>
  );
};
