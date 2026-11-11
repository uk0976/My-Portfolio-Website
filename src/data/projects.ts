export interface Project {
  id: string;
  number: string;
  title: string;
  category: 'AI / Audio Forensics' | 'Clinical AI & RAG' | 'Blockchain Protocol' | 'Developer Tools' | 'Computer Vision' | 'Web Systems';
  tagline: string;
  year: string;
  role: string;
  summary: string;
  problem: string;
  approach: string;
  architecture: string;
  features: string[];
  metrics: { label: string; value: string }[];
  stack: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  diagramSvg?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'voiceguard',
    number: '01',
    title: 'VoiceGuard',
    category: 'AI / Audio Forensics',
    tagline: 'Real-time biometric neural forensics for synthetic voice & deepfake detection',
    year: '2026',
    role: 'Lead Architect & ML Engineer',
    summary: 'An enterprise-grade biometric audio forensics system engineered to detect synthetic voice clones, AI-generated speech, and audio deepfakes in both pre-recorded files and live microphone WebSocket streams.',
    problem: 'Commercial voice synthesis (ElevenLabs, Tortoise, VALL-E) has reached indistinguishable parity with human speech, enabling high-stakes financial fraud and impersonation attacks. Existing tools rely on slow batch models that fail on live calls and lack forensic explainability.',
    approach: 'Engineered a dual-engine architecture combining deep self-supervised acoustic representations (Wav2Vec 2.0 fine-tuned on synthetic audio artifacts) alongside real-time discrete digital signal processing (DSP) heuristics measuring phase incoherence, micro-jitter absence, and abnormal spectral flatness.',
    architecture: 'Microphone stream → 16kHz PCM chunker → WebSocket broadcast → FastAPI asynchronous inference worker → Parallel Wav2Vec2 + Librosa DSP pipeline → Confidence fusion & PDF forensic audit generator → React 18 Canvas HUD.',
    features: [
      'Dual-engine inference fusing Wav2Vec 2.0 representations with raw DSP heuristics',
      'Real-time WebSocket audio streaming with chunk-level forensic classification (< 280ms latency)',
      'Signal explainability reporting: phase incoherence, micro-jitter degradation, and unnatural spectral flatness',
      'Zero-retention ephemeral privacy pipeline with automated PDF forensic audit generation'
    ],
    metrics: [
      { label: 'Inference Latency', value: '< 280ms' },
      { label: 'Sample Rate', value: '16 kHz PCM' },
      { label: 'Detection Pipeline', value: 'Dual-Engine' },
      { label: 'Privacy Model', value: 'Zero-Retention' }
    ],
    stack: ['FastAPI', 'PyTorch', 'TorchAudio', 'Wav2Vec 2.0', 'Librosa', 'WebSockets', 'React 18', 'Vite'],
    githubUrl: 'https://github.com/uk0976/VoiceGuard---AI-Voice-Clone-Deepfake-Detector',
    liveUrl: 'https://voiceguard-app.onrender.com',
    featured: true
  },
  {
    id: 'medinsight',
    number: '02',
    title: 'MedInsight',
    category: 'Clinical AI & RAG',
    tagline: 'Multilingual clinical report summarizer powered by BioBERT and RAG',
    year: '2024–2026',
    role: 'Core ML & Pipeline Developer',
    summary: 'A multilingual AI healthcare platform utilizing Retrieval-Augmented Generation (RAG) and BioBERT entity extraction to distill complex laboratory pathology and radiology reports into calibrated doctor and patient summaries.',
    problem: 'Pathology and radiology reports are dense with clinical jargon that patients struggle to comprehend, while clinicians lose hours reviewing routine diagnostic summaries across multiple languages.',
    approach: 'Constructed a specialized RAG pipeline using LangChain, FAISS vector indexes, BioBERT clinical named entity recognition (NER), and Groq Llama-3 inference. Summaries adapt dynamically based on recipient role (layman patient vs attending physician) with multilingual voice narration.',
    architecture: 'Document upload (PDF/OCR) → BioBERT Clinical NER → FAISS vector retrieval on medical knowledge bases → Prompt synthesis via Llama-3 → Calibrated dual-view breakdown with audio synthesis.',
    features: [
      'Retrieval-Augmented Generation indexing clinical terminology via FAISS vector store',
      'Clinical Named Entity Recognition using fine-tuned BioBERT transformers',
      'Role-conditioned outputs: plain-language patient briefs vs clinical diagnostic memos',
      'Multilingual synthesis and voice readout for patient accessibility'
    ],
    metrics: [
      { label: 'Vector Index', value: 'FAISS Exact' },
      { label: 'Clinical NER', value: 'BioBERT' },
      { label: 'Foundation Model', value: 'Llama-3 (Groq)' },
      { label: 'Interface', value: 'Streamlit' }
    ],
    stack: ['Python', 'LangChain', 'FAISS', 'BioBERT', 'Hugging Face', 'Groq Llama-3', 'Streamlit'],
    githubUrl: 'https://github.com/uk0976/MedInsight---RAG-Based-AI-Medical-Report-Summarizer',
    featured: true
  },
  {
    id: 'blockloan',
    number: '03',
    title: 'BlockLoan',
    category: 'Blockchain Protocol',
    tagline: 'Decentralized, non-custodial peer-to-peer lending protocol on Ethereum',
    year: '2026',
    role: 'Smart Contract & Full-Stack Engineer',
    summary: 'A decentralized, non-custodial peer-to-peer lending protocol and DApp that eliminates centralized financial intermediaries through verified Ethereum smart contracts, event indexers, and a React interface.',
    problem: 'Traditional financial credit mechanisms impose high intermediary fees, slow settlement times, and opaque centralized credit assessments that exclude unbanked borrowers.',
    approach: 'Engineered Solidity smart contracts (v0.8.20) autonomously managing loan principal, interest accrual, and collateral escrow. Built a companion FastAPI and Web3.py backend event indexer caching on-chain logs to deliver sub-millisecond query performance for the React 18 TypeScript frontend.',
    architecture: 'Solidity ^0.8.20 contracts (Hardhat) → Ethereum Network → Web3.py asynchronous event indexer → SQLite/PostgreSQL cache → Ethers.js + React 18 frontend.',
    features: [
      'Non-custodial smart contracts autonomously governing principal, interest, and collateral lifecycle',
      'Open decentralized liquidity marketplace connecting lenders directly with verified borrowers',
      'FastAPI + Web3.py backend event caching service for sub-second log queries',
      '58 Hardhat unit test cases proving invariant safety against reentrancy and arithmetic overflow'
    ],
    metrics: [
      { label: 'Unit Test Coverage', value: '58 Test Cases' },
      { label: 'Smart Contract', value: 'Solidity 0.8.20' },
      { label: 'Indexing Service', value: 'Web3.py Async' },
      { label: 'Frontend', value: 'React 18 + TS' }
    ],
    stack: ['Solidity', 'Ethereum', 'Hardhat', 'FastAPI', 'Web3.py', 'React 18', 'TypeScript', 'Ethers.js'],
    githubUrl: 'https://github.com/uk0976/BlockLoan-Blockchain-Based-Decentralized-Peer-to-Peer-Lending-Platform',
    featured: true
  },
  {
    id: 'codemedic-ai',
    number: '04',
    title: 'CodeMedic AI',
    category: 'Developer Tools',
    tagline: 'Full-stack AI developer platform for automated bug detection and security scanning',
    year: '2026',
    role: 'Full-Stack Developer',
    summary: 'An autonomous code diagnostic engine that parses repository commits to discover security vulnerabilities, runtime race conditions, and performance regressions with AI-generated test scaffolding.',
    problem: 'Engineering teams waste critical sprint cycles triaging pull request bugs and security leaks that traditional static linters fail to contextualize.',
    approach: 'Developed a Next.js and FastAPI platform that parses code Abstract Syntax Trees (AST) and pairs them with LLM reasoning to generate targeted fix suggestions and automated test suites.',
    architecture: 'Next.js App Router → FastAPI REST API → AST tokenization & LLM security scan → PostgreSQL storage → Real-time diff inspector.',
    features: [
      'Automated semantic bug analysis and security vulnerability assessment',
      'Instant test suite generation for edge-case reproduction',
      'Performance profiling recommendations with code patch diffs'
    ],
    metrics: [
      { label: 'API Architecture', value: 'FastAPI' },
      { label: 'Frontend', value: 'Next.js 14' },
      { label: 'Database', value: 'PostgreSQL' }
    ],
    stack: ['Next.js', 'FastAPI', 'Python', 'PostgreSQL', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/uk0976/CodeMedic-AI',
    featured: false
  },
  {
    id: 'face-attendance',
    number: '05',
    title: 'Multiple Face Attendance System',
    category: 'Computer Vision',
    tagline: 'Peer-reviewed automated multi-person attendance recognition system (IJRAR 2024)',
    year: '2024',
    role: 'Lead Researcher & Author',
    summary: 'An automated attendance management system leveraging OpenCV Haar Cascade detection and Local Binary Pattern Histograms (LBPH) to log multiple faces in real-time under natural classroom illumination.',
    problem: 'Manual paper or biometric fingerprint attendance in crowded university halls creates long entry queues and suffers high error rates.',
    approach: 'Formulated a multi-stage recognition pipeline combining Haar Cascade classifiers for rapid facial detection with LBPH for lighting-invariant feature extraction, connected to a relational SQL database.',
    architecture: 'Camera feed → Haar Cascade ROI extraction → LBPH feature matching → SQL attendance verification & logging.',
    features: [
      'Multi-face concurrent detection in crowded frames',
      'Illumination-invariant LBPH feature extraction',
      'Automated SQL attendance logging with sub-second verification',
      'Published and peer-reviewed in International Journal of Research and Analytical Reviews (IJRAR)'
    ],
    metrics: [
      { label: 'Publication', value: 'IJRAR March 2024' },
      { label: 'Classifier', value: 'LBPH + Haar' },
      { label: 'Backend Database', value: 'MySQL' }
    ],
    stack: ['Python', 'OpenCV', 'LBPH Algorithm', 'Haar Cascades', 'MySQL', 'Tkinter'],
    githubUrl: 'https://github.com/uk0976/Multiple-Face-Recognition-Attendance-System',
    featured: false
  },
  {
    id: 'coreforge-studio',
    number: '06',
    title: 'CoreForge Studio',
    category: 'Web Systems',
    tagline: 'High-performance digital design agency web architecture',
    year: '2026',
    role: 'Frontend Architect',
    summary: 'A minimalist digital agency web platform engineered with React, Vite, and responsive utility architecture to showcase creative tech services with zero layout shifts.',
    problem: 'Modern digital agency sites often suffer heavy bundle bloat and sluggish frame rates from unoptimized third-party animation libraries.',
    approach: 'Engineered clean React components with utility CSS layout primitives, lightweight asset pipelines, and targeted micro-interactions.',
    architecture: 'React 18 SPA → Vite bundler → Modular component architecture → Responsive CSS layouts.',
    features: [
      'High-velocity asset loading with zero Cumulative Layout Shift (CLS)',
      'Editorial dark aesthetic with typography-driven hierarchy',
      'Fluid interactive portfolio showcase'
    ],
    metrics: [
      { label: 'Bundle', value: 'Vite Optimized' },
      { label: 'Layout Shift', value: 'CLS < 0.02' }
    ],
    stack: ['React 18', 'JavaScript', 'Vite', 'Tailwind CSS', 'Responsive UI'],
    githubUrl: 'https://github.com/uk0976/CoreForge-Studio',
    featured: false
  },
  {
    id: 'smart-task-scheduler',
    number: '07',
    title: 'Smart Task Scheduler',
    category: 'AI / Audio Forensics',
    tagline: 'NLP-powered intelligent task prioritization and scheduling engine',
    year: '2024',
    role: 'Developer',
    summary: 'An intelligent task management system powered by natural language processing and machine learning that extracts tasks from conversational English to automatically schedule and prioritize workflows.',
    problem: 'Users spend excessive manual time formatting calendar blocks and manually assigning urgency levels to free-text to-do lists.',
    approach: 'Built a text parsing and classification pipeline using Python NLP libraries to extract temporal entities and predict urgency classes.',
    architecture: 'Text input → NLP entity extraction → Urgency classification model → Automated calendar queue.',
    features: [
      'Natural language task parsing (date, time, duration)',
      'Automated priority categorization based on text semantics',
      'Clean interactive management interface'
    ],
    metrics: [
      { label: 'Core Language', value: 'Python' },
      { label: 'Technique', value: 'NLP Entity Extraction' }
    ],
    stack: ['Python', 'NLP', 'Scikit-learn', 'Tkinter'],
    githubUrl: 'https://github.com/uk0976/Smart-Task-Scheduler-with-AI-Integration',
    featured: false
  },
  {
    id: 'stocksage',
    number: '08',
    title: 'StockSage Forecast & Chatbot',
    category: 'AI / Audio Forensics',
    tagline: 'Predictive equity analytics engine with conversational market intelligence',
    year: '2024',
    role: 'Developer',
    summary: 'A dual-function analytics application combining machine learning stock price trend forecasting with an interactive natural language assistant for financial telemetry.',
    problem: 'Retail investors face fragmented workflows between raw technical price charts and conversational answers regarding historical equity movements.',
    approach: 'Coupled historical price feature engineering (moving averages, momentum indicators) with predictive regressors and an NLP query interpreter.',
    architecture: 'Yahoo Finance API / CSV ingest → Feature engineering pipeline → Regression model → Chatbot query interface.',
    features: [
      'Predictive trend modeling on equity closing prices',
      'Integrated conversational query bot for historical telemetry',
      'Automated Matplotlib visual charting'
    ],
    metrics: [
      { label: 'Data Processing', value: 'Pandas & NumPy' },
      { label: 'Predictive Model', value: 'Scikit-learn Regressors' }
    ],
    stack: ['Python', 'Machine Learning', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib'],
    githubUrl: 'https://github.com/uk0976/StockSage---Stock-Prediction-System-with-Integrated-ChatBot',
    featured: false
  }
];
