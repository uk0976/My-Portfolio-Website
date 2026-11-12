import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  category: 'Internship' | 'Cloud & AI' | 'Job Simulation';
  year: string;
  badge: string;
  summary: string;
  skills: string[];
  verification: string;
}

const CERTIFICATES: Certificate[] = [
  {
    id: 'irabot-internship',
    title: 'Python Developer Internship',
    issuer: 'IRABOT TechEd LLP',
    category: 'Internship',
    year: 'June 2023 – July 2023',
    badge: 'FORMAL INTERNSHIP',
    summary: 'Built modular Python automation pipelines, data cleaning scripts, and machine learning prototypes under senior AI mentors in an applied robotics and EdTech laboratory.',
    skills: ['Python', 'Machine Learning', 'Data Pipelines', 'Software Debugging', 'Git'],
    verification: 'Accredited Completion Certificate'
  },
  {
    id: 'examsetu-internship',
    title: 'Full Stack Web Development Internship',
    issuer: 'ExamSetu',
    category: 'Internship',
    year: 'July 2026 – August 2026',
    badge: 'CORE ENGINEERING',
    summary: 'Engineered responsive full-stack features for a high-traffic assessment portal, integrating dynamic React views with asynchronous Node/Express backend endpoints.',
    skills: ['React.js', 'Node.js', 'Express.js', 'REST APIs', 'Full-Stack Architecture'],
    verification: 'Industry Experience Letter'
  },
  {
    id: 'mpi-internship',
    title: 'Web Development Internship',
    issuer: 'MPI Automotives',
    category: 'Internship',
    year: 'May 2026 – July 2026',
    badge: 'COMMERCIAL WEB ARCHITECTURE',
    summary: 'Architected and shipped a commercial web showcase for an automotive parts manufacturer, achieving near-zero layout shifts (CLS < 0.03) and rapid lead generation.',
    skills: ['JavaScript', 'Web Architecture', 'HTML5/CSS3', 'Performance Profiling'],
    verification: 'Client & Corporate Reference'
  },
  {
    id: 'freelance-cert',
    title: 'Freelance AI & Python Development',
    issuer: 'Self-Employed / Independent Engagements',
    category: 'Internship',
    year: '2023 – Present',
    badge: '10+ CLIENT CONTRACTS',
    summary: 'Delivered 15+ bespoke engineering solutions across automated data extraction, sentiment analysis, and machine learning prototypes with 100% on-time milestone delivery.',
    skills: ['Client Engineering', 'Web Scraping', 'ML Prototyping', 'Production Delivery'],
    verification: 'Verified Client Deliverables'
  },
  {
    id: 'google-genai',
    title: 'Google Gen AI Exchange Program',
    issuer: 'Google',
    category: 'Cloud & AI',
    year: '2024',
    badge: 'GENERATIVE AI',
    summary: 'Completed intensive training in foundation model architectures, prompt engineering, vector embeddings, and retrieval-augmented generation (RAG) workflows.',
    skills: ['Foundation Models', 'Prompt Engineering', 'Vector Embeddings', 'RAG'],
    verification: 'Google Verified Credential'
  },
  {
    id: 'google-arcade',
    title: 'Google Arcade Cloud Skills Credential',
    issuer: 'Google Cloud Skills Boost',
    category: 'Cloud & AI',
    year: '2024',
    badge: 'CLOUD PLATFORM',
    summary: 'Earned hands-on technical badges in Google Cloud Platform infrastructure, managing Compute Engine, Cloud Storage, and BigQuery analytics.',
    skills: ['Google Cloud', 'Compute Engine', 'BigQuery', 'Cloud Storage'],
    verification: 'Google Cloud Credential ID'
  },
  {
    id: 'blockchain-workshop',
    title: 'Blockchain Technology Workshop',
    issuer: 'Terna Engineering College',
    category: 'Cloud & AI',
    year: '2024',
    badge: 'WEB3 ARCHITECTURE',
    summary: 'Intensive technical laboratory covering cryptographic hashing, consensus algorithms, Ethereum smart contracts, and decentralized application architecture.',
    skills: ['Solidity', 'Ethereum', 'Smart Contracts', 'Web3 Protocols'],
    verification: 'Institutional Workshop Certificate'
  },
  {
    id: 'deloitte-cybersecurity',
    title: 'Deloitte Cybersecurity Job Simulation',
    issuer: 'Deloitte / Forage',
    category: 'Job Simulation',
    year: '2024',
    badge: 'SECURITY AUDITING',
    summary: 'Executed forensic threat triage, log event analysis, and client security advisory reports mimicking enterprise cybersecurity incident response workflows.',
    skills: ['Threat Analysis', 'Log Inspection', 'Incident Response', 'Security Advisory'],
    verification: 'Forage Verified Simulation'
  },
  {
    id: 'deloitte-data-analytics',
    title: 'Deloitte Data Analytics Job Simulation',
    issuer: 'Deloitte / Forage',
    category: 'Job Simulation',
    year: '2024',
    badge: 'ANALYTICS & BI',
    summary: 'Conducted statistical data preparation, exploratory data analysis, and dashboard communications for corporate decision-makers.',
    skills: ['Data Preparation', 'EDA', 'Statistical Analysis', 'Business Intelligence'],
    verification: 'Forage Verified Simulation'
  },
  {
    id: 'tcs-data-viz',
    title: 'TCS Data Visualization Job Simulation',
    issuer: 'Tata Consultancy Services / Forage',
    category: 'Job Simulation',
    year: '2024',
    badge: 'DATA VISUALIZATION',
    summary: 'Created dynamic dashboard telemetry and executive summaries visualizing business operational KPIs.',
    skills: ['Data Storytelling', 'KPI Dashboards', 'Executive Presentation'],
    verification: 'Forage Verified Simulation'
  },
  {
    id: 'google-gear',
    title: 'Google GEAR Engineering Track',
    issuer: 'Google',
    category: 'Cloud & AI',
    year: '2026 (In Progress)',
    badge: 'ADVANCED READINESS',
    summary: 'Currently pursuing Google’s advanced engineering readiness track focused on scalable architectures, data structures, and algorithmic optimization.',
    skills: ['System Design', 'Data Structures', 'Algorithmic Optimization'],
    verification: 'Active Track Enrollment'
  }
];

export const CertificatesPage: React.FC = () => {
  const [filter, setFilter] = useState<'ALL' | 'Internship' | 'Cloud & AI' | 'Job Simulation'>('ALL');

  const filtered =
    filter === 'ALL' ? CERTIFICATES : CERTIFICATES.filter((c) => c.category === filter);

  return (
    <div className="pt-28 pb-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-12">
        <div>
          <div className="font-mono-code text-xs text-[#FB5E28] uppercase tracking-widest mb-3">
            [04 // CREDENTIALS &amp; INDUSTRY EXPERIENCE]
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-[#F2F2EF] tracking-tight">
            Certificates &amp; Experience
          </h1>
        </div>
        <p className="max-w-md font-sans text-sm text-[#9AA0AA] leading-relaxed">
          Industry internships, verified Google Cloud and AI credentials, and top-tier corporate engineering simulations.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-white/[0.08] font-mono-code text-xs">
        {(['ALL', 'Internship', 'Cloud & AI', 'Job Simulation'] as const).map((tab) => (
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

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="p-8 bg-[#11151C] border border-white/[0.08] hover:border-white/20 transition-all rounded-lg flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between font-mono-code text-xs mb-3">
                <span className="text-[#FB5E28] uppercase tracking-wider font-semibold">
                  {item.badge}
                </span>
                <span className="text-[#5C626D]">{item.year}</span>
              </div>

              <h2 className="font-display text-xl md:text-2xl font-bold text-[#F2F2EF] tracking-tight mb-1">
                {item.title}
              </h2>

              <div className="font-mono-code text-xs text-[#9AA0AA] mb-4">
                {item.issuer}
              </div>

              <p className="font-sans text-xs md:text-sm text-[#9AA0AA] leading-relaxed">
                {item.summary}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-4">
                {item.skills.map((s) => (
                  <span
                    key={s}
                    className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] font-mono-code text-[10px] text-[#9AA0AA]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between font-mono-code text-[11px] text-[#5C626D]">
              <span>{item.verification}</span>
              <span className="text-[#FB5E28] font-semibold">ACCREDITED ✓</span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Navigation Action */}
      <div className="p-8 bg-[#11151C] border border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-6 font-mono-code text-xs rounded-lg">
        <div>
          <span className="text-[#F2F2EF] font-bold block mb-1">WANT TO REVIEW ACADEMIC DISTINCTIONS?</span>
          <span className="text-[#5C626D]">Check Class Rank #1, state symposium trophies, and best orator awards.</span>
        </div>
        <Link
          to="/achievements"
          className="px-6 py-3 bg-[#FB5E28] hover:bg-[#FF7A4D] text-white uppercase tracking-wider font-semibold transition-colors rounded shadow-lg shadow-[#FB5E28]/20"
        >
          View Achievements &amp; Awards →
        </Link>
      </div>
    </div>
  );
};
