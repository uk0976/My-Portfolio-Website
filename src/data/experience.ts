export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'Internship' | 'Contract / Client Work';
  description: string;
  achievements: string[];
  skills: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    id: 'examsetu',
    role: 'Full Stack Web Development Intern',
    company: 'ExamSetu',
    location: 'Remote',
    period: 'July 2026 – August 2026',
    type: 'Internship',
    description: 'Engineered core full-stack platform features for a high-traffic assessment portal, focusing on client-side latency, component modularity, and database query efficiency.',
    achievements: [
      'Developed and deployed end-to-end full-stack modules connecting dynamic React views with asynchronous backend endpoints',
      'Refactored assessment delivery pipelines, cutting client-side render lag across diverse low-bandwidth environments',
      'Collaborated closely with product leads to ship responsive UI layouts tested across tablet and desktop viewports'
    ],
    skills: ['React.js', 'Node.js', 'Express.js', 'REST APIs', 'Full-Stack Architecture']
  },
  {
    id: 'mpi-automotives',
    role: 'Web Development Intern',
    company: 'MPI Automotives',
    location: 'Pune, Maharashtra',
    period: 'May 2026 – July 2026',
    type: 'Internship',
    description: 'Architected and shipped a commercial web platform for an automotive parts manufacturer, delivering a modern catalog showcase and streamlined client inquiry workflows.',
    achievements: [
      'Built a fully responsive commercial web application from wireframe to production deployment',
      'Optimized catalog asset payloads and script bundles, achieving near-zero layout shifts (CLS < 0.03)',
      'Worked directly with stakeholders to align technical specifications with business lead-generation targets'
    ],
    skills: ['Web Development', 'Responsive Design', 'JavaScript', 'HTML5/CSS3', 'Client Engineering']
  },
  {
    id: 'irabot',
    role: 'Python Developer Intern',
    company: 'IRABOT TechEd LLP',
    location: 'Thane, Maharashtra',
    period: 'June 2023 – July 2023',
    type: 'Internship',
    description: 'Constructed automated Python scripts and machine learning experiments under the mentorship of senior AI engineers in an applied EdTech laboratory.',
    achievements: [
      'Authored modular Python scripts for data cleaning, automated testing, and model evaluation routines',
      'Collaborated on AI-driven educational software prototypes, profiling execution hotspots in numerical routines',
      'Strengthened production Git branching workflows, peer review protocols, and modular codebase documentation'
    ],
    skills: ['Python', 'Software Debugging', 'AI Prototyping', 'Git Version Control', 'Team Collaboration']
  },
  {
    id: 'freelance',
    role: 'Independent AI & Python Developer',
    company: 'Self-Employed',
    location: 'Remote / Global',
    period: '2023 – Present',
    type: 'Contract / Client Work',
    description: 'Directly contracted with small business founders and researchers across 10+ engagements to build automated web scrapers, data pipelines, and custom ML prototypes.',
    achievements: [
      'Completed 15+ bespoke deliverables spanning automated data extraction, sentiment analysis, and forecasting tools',
      'Maintained 100% on-time delivery across all freelance contracts with zero scope creep',
      'Managed end-to-end client engineering: requirement scoping, architecture design, testing, and deployment handoff'
    ],
    skills: ['Automation', 'Web Scraping', 'Machine Learning', 'Client Communication', 'Full Ownership']
  }
];

export interface Recognition {
  id: string;
  title: string;
  issuer: string;
  year: string;
  category: 'Award' | 'Certification' | 'Workshop / Leadership';
  summary: string;
  verified: boolean;
  imagePath?: string;
  tag: string;
}

export const RECOGNITIONS: Recognition[] = [
  {
    id: 'rank1-diploma',
    title: 'Class Rank #1 & 90.33% Overall Aggregate',
    issuer: 'MSBTE / A. R. Kalsekar Polytechnic',
    year: '2024',
    category: 'Award',
    summary: 'Ranked 1st in class in 1st Semester and consistently across the 3rd through 6th semesters. Graduated with an overall aggregate of 90.33% in Diploma AI & ML.',
    verified: true,
    tag: 'Academic Distinction'
  },
  {
    id: 'paper-award',
    title: '3rd Prize – Technical Paper Presentation',
    issuer: 'F. R. Agnel College of Engineering & Technology, Vashi',
    year: '2024',
    category: 'Award',
    summary: 'Won 3rd place in state-level collegiate technical symposium presenting algorithmic computer vision methodologies for real-time automated face recognition attendance.',
    verified: true,
    tag: 'Competitive Symposium'
  },
  {
    id: 'best-student',
    title: 'Best Student Award (Awarded Twice)',
    issuer: 'Academic Council & Student Affairs',
    year: '2022 & 2023',
    category: 'Award',
    summary: 'Conferred twice with the Best Student Award recognizing academic consistency, peer mentorship, and contributions to technical departmental activities.',
    verified: true,
    tag: 'Leadership Award'
  },
  {
    id: 'best-orator',
    title: 'Best Orator Award',
    issuer: 'Inter-Collegiate Speech & Technical Forum',
    year: '2023',
    category: 'Award',
    summary: 'Awarded for public speaking excellence and articulation of complex technical subjects to diverse audiences.',
    verified: true,
    tag: 'Public Speaking'
  },
  {
    id: 'agentic-ai-speaker',
    title: 'Speaker & Lead Volunteer – 2-Day Agentic AI Workshop',
    issuer: 'Terna Engineering College, Department of AI & DS',
    year: '2026',
    category: 'Workshop / Leadership',
    summary: 'Invited as speaker and volunteer coordinator for an intensive 2-day hands-on workshop teaching autonomous AI agent architectures and tool-calling pipelines to student engineers.',
    verified: true,
    tag: 'Workshop Speaker'
  },
  {
    id: 'google-genai',
    title: 'Google Gen AI Exchange Program',
    issuer: 'Google',
    year: '2024',
    category: 'Certification',
    summary: 'Completed intensive training in foundation model architectures, prompt engineering, vector embeddings, and RAG systems.',
    verified: true,
    tag: 'AI Certification'
  },
  {
    id: 'google-arcade',
    title: 'Google Arcade Cloud Skills Credential',
    issuer: 'Google Cloud Skills Boost',
    year: '2024',
    category: 'Certification',
    summary: 'Earned hands-on badges in Google Cloud Platform services including Compute Engine, Cloud Storage, and BigQuery analytics.',
    verified: true,
    tag: 'Cloud Credential'
  },
  {
    id: 'deloitte-cybersecurity',
    title: 'Deloitte Cybersecurity Job Simulation',
    issuer: 'Deloitte / Forage',
    year: '2024',
    category: 'Certification',
    summary: 'Executed forensic threat triage, log event analysis, and client security advisory reports.',
    verified: true,
    tag: 'Job Simulation'
  },
  {
    id: 'deloitte-data-analytics',
    title: 'Deloitte Data Analytics Job Simulation',
    issuer: 'Deloitte / Forage',
    year: '2024',
    category: 'Certification',
    summary: 'Conducted statistical data preparation, exploratory data analysis, and dashboard communications for corporate decision-makers.',
    verified: true,
    tag: 'Job Simulation'
  },
  {
    id: 'tcs-data-viz',
    title: 'TCS Data Visualization Job Simulation',
    issuer: 'Tata Consultancy Services / Forage',
    year: '2024',
    category: 'Certification',
    summary: 'Created dynamic dashboard telemetry and executive summaries visualizing business operational KPIs.',
    verified: true,
    tag: 'Job Simulation'
  },
  {
    id: 'google-gear',
    title: 'Google GEAR Engineering Track',
    issuer: 'Google',
    year: '2026 (In Progress)',
    category: 'Certification',
    summary: 'Currently pursuing Google’s advanced engineering readiness track focused on scalable architectures, data structures, and algorithmic optimization.',
    verified: true,
    tag: 'In Progress'
  }
];

export interface SkillCategory {
  title: string;
  tagline: string;
  items: { name: string; context: string }[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'AI, ML & Forensics',
    tagline: 'Deep representations, audio DSP, and retrieval-augmented systems',
    items: [
      { name: 'PyTorch & TorchAudio', context: 'Acoustic tensors & Wav2Vec2 fine-tuning' },
      { name: 'Wav2Vec 2.0', context: 'Self-supervised speech representations in VoiceGuard' },
      { name: 'Librosa DSP', context: 'Spectral flatness, micro-jitter, phase extraction' },
      { name: 'LangChain & RAG', context: 'Document retrieval & context engineering in MedInsight' },
      { name: 'FAISS Vector Index', context: 'Sub-millisecond semantic medical embeddings' },
      { name: 'BioBERT Transformers', context: 'Clinical Named Entity Recognition' },
      { name: 'OpenCV & Computer Vision', context: 'Haar Cascade & LBPH attendance models (IJRAR paper)' },
      { name: 'Prompt Engineering', context: 'Context-calibrated zero-shot & few-shot LLM schemas' }
    ]
  },
  {
    title: 'Languages & Core Systems',
    tagline: 'Strong algorithmic foundations, object-oriented architecture, and protocols',
    items: [
      { name: 'Python', context: 'Primary system & ML pipeline language (FastAPI, PyTorch, Librosa)' },
      { name: 'Solidity (^0.8.20)', context: 'Non-custodial lending smart contracts & Hardhat tests in BlockLoan' },
      { name: 'Java', context: 'Object-oriented data structures and algorithmic foundations' },
      { name: 'TypeScript & JavaScript', context: 'Type-safe React architectures, WebSockets, Ethers.js' },
      { name: 'SQL', context: 'Relational data modeling with MySQL & PostgreSQL' },
      { name: 'HTML5 & Modern CSS', context: 'Fluid typography, custom CSS grid, responsive viewports' }
    ]
  },
  {
    title: 'Full-Stack, WebGL & Cloud Tools',
    tagline: 'Production-ready runtime environments, state management, and real-time streams',
    items: [
      { name: 'FastAPI', context: 'High-concurrency async inference microservices & WebSockets' },
      { name: 'React 18 & Vite', context: 'Component-driven frontend architectures & HUDs' },
      { name: 'WebSockets', context: 'Chunk-level duplex audio telemetry in VoiceGuard' },
      { name: 'Web3.py & Ethers.js', context: 'On-chain event listeners and smart contract interfaces' },
      { name: 'PostgreSQL & Supabase', context: 'Persistent relational stores & event log caching' },
      { name: 'Git & GitHub', context: 'Collaborative code reviews, branch governance, CI/CD' },
      { name: 'Docker / Linux', context: 'Containerized deployment & POSIX environment automation' },
      { name: 'GSAP & Three.js', context: 'Physics-based animation timelines and WebGL shaders' }
    ]
  }
];
