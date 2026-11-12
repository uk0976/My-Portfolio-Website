export interface Project {
  id: string;
  number: string;
  title: string;
  category: 'AI / Audio Forensics' | 'Clinical AI & RAG' | 'Blockchain Protocol' | 'Developer Tools' | 'Computer Vision' | 'Web Systems' | 'AI & Cloud Systems' | 'Algorithms & Foundations';
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
    id: 'face-attendance',
    number: '04',
    title: 'Multiple Face Recognition Attendance System',
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
    featured: true
  },
  {
    id: 'codemedic-ai',
    number: '05',
    title: 'CodeMedic AI',
    category: 'Developer Tools',
    tagline: 'Full-stack autonomous AI assistant for real-time bug detection and code analysis',
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
    featured: true
  },
  {
    id: 'nirman',
    number: '06',
    title: 'Nirman',
    category: 'Developer Tools',
    tagline: 'Autonomous AI software development company powered by collaborative agent swarms',
    year: '2026',
    role: 'Lead Architect',
    summary: 'From vision to production, powered by AI. An autonomous software development company driven by a collaborative swarm of specialized AI agents that plan, design, develop, test, secure, document, and deploy software from a single prompt.',
    problem: 'Bootstrapping new software products requires synchronizing disparate roles (product management, architecture, frontend, backend, QA, DevOps) leading to lengthy development cycles.',
    approach: 'Engineered a multi-agent orchestration architecture where role-specialized LLM agents execute coordinated tasks through shared state, automated git pull requests, and verified CI test suites.',
    architecture: 'Product brief prompt → Orchestration director → Role-specialized agents (Design, Code, Test, SecOps) → Automated verification runner → Packaged deployment.',
    features: [
      'Autonomous multi-agent task planning and code generation',
      'Integrated security audit and unit test validation',
      'Automated documentation generation and architecture mapping'
    ],
    metrics: [
      { label: 'Agent Pipeline', value: 'Multi-Role Swarm' },
      { label: 'Execution', value: 'Autonomous CI/CD' }
    ],
    stack: ['Python', 'Multi-Agent Swarms', 'LLMs', 'FastAPI', 'Docker', 'Git Automation'],
    githubUrl: 'https://github.com/uk0976/Nirman',
    featured: false
  },
  {
    id: 'nsers',
    number: '07',
    title: 'NSERS Emergency Response',
    category: 'AI & Cloud Systems',
    tagline: 'National Smart Emergency Response System with multimodal AI and Google Cloud',
    year: '2026',
    role: 'Cloud & AI Engineer',
    summary: 'An AI-powered disaster and emergency response platform built with Google Cloud. It enables real-time incident reporting, multimodal AI verification, intelligent dispatch, live tracking, and fraud analytics across India.',
    problem: 'Emergency response coordination suffers from false alarms, fragmented regional dispatch, and delayed resource allocation during natural disasters and urgent crises.',
    approach: 'Leveraged Google Cloud infrastructure with multimodal vision and audio verification models to screen emergency alerts, compute optimal dispatch routes, and prevent fraudulent submissions.',
    architecture: 'Incident mobile client → Google Cloud API Gateway → Multimodal AI verification filter → Geospatial dispatch routing engine → Emergency responder dashboard.',
    features: [
      'Multimodal AI verification filtering false alarms and duplicates',
      'Real-time geospatial dispatch and routing optimization',
      'Scalable cloud infrastructure designed for nationwide surge tolerance'
    ],
    metrics: [
      { label: 'Cloud Infrastructure', value: 'Google Cloud Platform' },
      { label: 'Verification', value: 'Multimodal AI' }
    ],
    stack: ['Google Cloud', 'Python', 'FastAPI', 'Multimodal AI', 'Geospatial GIS', 'React'],
    githubUrl: 'https://github.com/uk0976/NSERS---National-Smart-Emergency-Response-System',
    featured: false
  },
  {
    id: 'safestep',
    number: '08',
    title: 'SafeStep AI Check-In',
    category: 'AI & Cloud Systems',
    tagline: 'AI-assisted real-time safety check-in & risk alert platform for solo travelers',
    year: '2025',
    role: 'Lead Developer',
    summary: 'An AI-assisted real-time safety check-in platform engineered for HackDevengers 1.0, featuring journey tracking, smart risk alerts, and automated notifications for emergency contacts.',
    problem: 'Solo travelers and late-night commuters face personal safety hazards with inadequate automated escalation protocols when deviating from scheduled routes.',
    approach: 'Engineered an automated heartbeat check-in loop with anomaly detection on route coordinates and temporal delays, automatically notifying designated contacts upon missed check-in windows.',
    architecture: 'Mobile client GPS telemetry → Anomaly detection engine → Automated SMS/Email emergency dispatch → Emergency contacts dashboard.',
    features: [
      'Automated recurring check-in protocol with configurable time thresholds',
      'GPS route deviation and anomaly detection',
      'Instant SMS/Email alert dispatch to emergency contacts upon trigger'
    ],
    metrics: [
      { label: 'Hackathon', value: 'HackDevengers 1.0' },
      { label: 'Platform', value: 'Web & Mobile' }
    ],
    stack: ['Python', 'FastAPI', 'React', 'Geolocation API', 'Twilio / SMS API'],
    githubUrl: 'https://github.com/uk0976/SafeStep',
    featured: false
  },
  {
    id: 'stocksage',
    number: '09',
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
  },
  {
    id: 'smart-task-scheduler',
    number: '10',
    title: 'Smart Task Scheduler',
    category: 'AI / Audio Forensics',
    tagline: 'NLP-powered intelligent task prioritization and scheduling engine',
    year: '2024',
    role: 'Developer',
    summary: 'An intelligent task management system powered by natural language processing and machine learning that understands natural language inputs to automatically schedule, prioritize, and manage tasks.',
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
    id: 'coreforge-studio',
    number: '11',
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
    id: 'dsa-journey',
    number: '12',
    title: 'DSA & Algorithms Journey',
    category: 'Algorithms & Foundations',
    tagline: 'Comprehensive problem-solving repository across LeetCode, GFG, and placements',
    year: '2023–2026',
    role: 'Engineer',
    summary: 'A structured algorithmic repository documenting problem-solving progression across LeetCode, GeeksForGeeks, and technical interview benchmarks with clean time-complexity proofs.',
    problem: 'Algorithmic mastery requires disciplined practice across diverse patterns (dynamic programming, graphs, trees, two pointers) with reproducible solutions.',
    approach: 'Implemented structured, fully-documented solutions in Python and Java, analyzing worst-case big-O time and space complexity with unit test harnesses.',
    architecture: 'Categorized problem taxonomy → Clean code implementation → Time/Space complexity analysis → Verification test suite.',
    features: [
      'Extensive catalog of solutions spanning graph algorithms, DP, and trees',
      'Rigorous time & space complexity annotations for every pattern',
      'Optimized space-efficient implementations'
    ],
    metrics: [
      { label: 'Languages', value: 'Python & Java' },
      { label: 'Platforms', value: 'LeetCode / GFG' }
    ],
    stack: ['Python', 'Java', 'Data Structures', 'Algorithms', 'Big-O Analysis'],
    githubUrl: 'https://github.com/uk0976/Data-Structures-Algorithms-DSA-Journey',
    featured: false
  },
  {
    id: 'library-management',
    number: '13',
    title: 'Library Management System',
    category: 'Web Systems',
    tagline: 'Desktop library management platform with book cataloging and member records',
    year: '2023',
    role: 'Developer',
    summary: 'A full-featured desktop library management application with a graphical user interface, enabling book cataloging, member management, borrowing records, and database-backed operations through a clean Tkinter interface.',
    problem: 'Local institutional libraries often struggle with paper-based registers that lead to misplaced borrowing records and delayed overdue tracking.',
    approach: 'Constructed an ACID-compliant relational SQL backend paired with an intuitive Python Tkinter desktop interface with real-time book search and member verification.',
    architecture: 'Tkinter GUI → Python transaction controller → Relational SQL database schema.',
    features: [
      'Complete book inventory cataloging with instant title/author search',
      'Member issuance and return tracking with automatic overdue calculation',
      'Database transaction safety and persistent record logs'
    ],
    metrics: [
      { label: 'UI Framework', value: 'Python Tkinter' },
      { label: 'Database', value: 'Relational SQL' }
    ],
    stack: ['Python', 'Tkinter', 'SQL', 'Database Management', 'Desktop GUI'],
    githubUrl: 'https://github.com/uk0976/Library-Management-System',
    featured: false
  },
  {
    id: 'sentiment-analysis',
    number: '14',
    title: 'Sentiment Analysis Pipeline',
    category: 'AI / Audio Forensics',
    tagline: 'NLP machine learning pipeline for text sentiment classification and visual storytelling',
    year: '2023',
    role: 'Developer',
    summary: 'A machine learning pipeline that classifies text sentiment (positive, negative, neutral) from datasets, with rich visual insights using Matplotlib for data storytelling and pattern exploration.',
    problem: 'Raw customer feedback and textual reviews contain high variance in sentiment polarity that manual inspection cannot scale to summarize.',
    approach: 'Trained text feature vectorizers (TF-IDF) alongside classification models, producing automated distribution plots and confusion matrices.',
    architecture: 'Raw corpus ingest → Tokenization & TF-IDF vectorization → Classifier inference → Matplotlib visual report.',
    features: [
      'Text preprocessing, stopword removal, and n-gram TF-IDF vectorization',
      'Multi-class sentiment probability scoring',
      'Automated visual charts illustrating sentiment distributions'
    ],
    metrics: [
      { label: 'NLP Approach', value: 'TF-IDF + ML' },
      { label: 'Visualization', value: 'Matplotlib' }
    ],
    stack: ['Python', 'Scikit-learn', 'NLP', 'Pandas', 'Matplotlib'],
    githubUrl: 'https://github.com/uk0976',
    featured: false
  },
  {
    id: 'snake-ladder-game',
    number: '15',
    title: 'Snake and Ladder GUI Game',
    category: 'Web Systems',
    tagline: 'Interactive multiplayer board game with graphical physics and desktop UI',
    year: '2023',
    role: 'Developer',
    summary: 'A fully interactive Snake and Ladder game built with Python\'s Tkinter framework, featuring a graphical board, animated gameplay, multi-player support, and a polished desktop UI experience.',
    problem: 'Demonstrating object-oriented game state management and graphical coordinate mapping in native Python without third-party game engines.',
    approach: 'Modeled the 100-cell board with exact coordinate translation logic, snake/ladder jump matrices, randomized dice mechanics, and turn-based player state.',
    architecture: 'Game loop controller → Board coordinate mapper → Tkinter 2D Canvas renderer.',
    features: [
      'Multiplayer turn-based gameplay with animated dice roll simulation',
      'Exact board coordinate mapping for automatic jumps and slide-downs',
      'Intuitive desktop graphical interface'
    ],
    metrics: [
      { label: 'Language', value: 'Python' },
      { label: 'GUI Framework', value: 'Tkinter' }
    ],
    stack: ['Python', 'Tkinter', 'Game Development', 'Object-Oriented Design'],
    githubUrl: 'https://github.com/uk0976/Snakes-and-Ladder-Game',
    featured: false
  },
  {
    id: 'face-biometrics-verification',
    number: '16',
    title: 'Secure Face Biometric Verification',
    category: 'Computer Vision',
    tagline: 'Biometric identity authentication system with Haar Cascade and SQL management',
    year: '2024',
    role: 'Lead Developer',
    summary: 'A biometric security system that authenticates individuals through facial recognition using LBPH and Haar Cascade algorithms, with SQL-backed identity management for secure and scalable verification.',
    problem: 'Unauthorized access to secured digital systems requires reliable biometric authentication that can operate locally without external cloud dependencies.',
    approach: 'Implemented facial feature extraction pipelines with lighting normalization and threshold matching against securely indexed local SQL templates.',
    architecture: 'Video capture → Haar Cascade crop → Lighting normalization → LBPH distance calculation → Access decision & audit log.',
    features: [
      'Local on-device inference without cloud image transmission',
      'Confidence threshold tuning to minimize false acceptance rates (FAR)',
      'Comprehensive security access logs stored in SQL database'
    ],
    metrics: [
      { label: 'Security Model', value: 'Local On-Device' },
      { label: 'Database', value: 'MySQL / SQLite' }
    ],
    stack: ['Python', 'OpenCV', 'LBPH Algorithm', 'Haar Cascades', 'SQL', 'Biometrics'],
    githubUrl: 'https://github.com/uk0976/Multiple-Face-Recognition-Attendance-System',
    featured: false
  }
];
