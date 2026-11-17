/* ============================================================
   DOCTOR UMERKHAN JUNAIDKHAN — OBSIDIAN RED SCRIPT
   Cinematic Particles · Theme Toggle · Dynamic Project Modals
   ============================================================ */

/* ── DOM READY ── */
document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initNavbar();
  initMobileMenu();
  initScrollReveal();
  initActiveNavLinks();
  initSkillPillHover();
  initBackToTop();
  initStatCounters();
  initProjectCardTilt();
  initContactForm();
  initObsidianCanvas();
  initCardGlow();
  initProjectModal();
  initCertGallery();
});

/* ============================================================
   THEME TOGGLE — OBSIDIAN DARK / PURE LIGHT MODE
   ============================================================ */
function initThemeToggle() {
  const currentTheme = localStorage.getItem('uk-portfolio-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = activeTheme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('uk-portfolio-theme', newTheme);
      updateThemeIcon(newTheme);
    });
  });
}

function updateThemeIcon(theme) {
  const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
  toggleBtns.forEach(btn => {
    if (theme === 'light') {
      btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
      btn.setAttribute('aria-label', 'Switch to Dark Mode');
      btn.setAttribute('title', 'Switch to Dark Mode');
    } else {
      btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
      btn.setAttribute('aria-label', 'Switch to Light Mode');
      btn.setAttribute('title', 'Switch to Light Mode');
    }
  });
}

/* ============================================================
   NAVBAR — scrolled class + backdrop transition
   ============================================================ */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const onScroll = () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ============================================================
   MOBILE MENU — overlay / hamburger
   ============================================================ */
function initMobileMenu() {
  const hamburger     = document.getElementById('hamburger');
  const mobileOverlay = document.getElementById('mobileOverlay');
  const closeMenu     = document.getElementById('closeMenu');
  const mobileLinks   = document.querySelectorAll('.mobile-links a');

  if (!hamburger || !mobileOverlay) return;

  const openMenu = () => {
    mobileOverlay.classList.add('active');
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeMenuFn = () => {
    mobileOverlay.classList.remove('active');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  hamburger.addEventListener('click', openMenu);
  if (closeMenu) closeMenu.addEventListener('click', closeMenuFn);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenuFn);
  });

  mobileOverlay.addEventListener('click', (e) => {
    if (e.target === mobileOverlay) closeMenuFn();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenuFn();
  });
}

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
function initScrollReveal() {
  const revealEls = document.querySelectorAll('.reveal');
  if (!revealEls.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  revealEls.forEach(el => observer.observe(el));
}

/* ============================================================
   ACTIVE NAV LINKS
   ============================================================ */
function initActiveNavLinks() {
  const navLinks = document.querySelectorAll('.nav-link, .mobile-links a');
  if (!navLinks.length) return;

  const currentPath = window.location.pathname;
  let currentPage = currentPath.substring(currentPath.lastIndexOf('/') + 1);

  if (currentPage === "") {
    currentPage = "index.html";
  }

  navLinks.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    if (currentPage === href || (currentPage === "index.html" && href === "index.html")) {
      link.classList.add('active');
    }
  });
}

/* ============================================================
   SKILL PILL HOVER
   ============================================================ */
function initSkillPillHover() {
  const pills = document.querySelectorAll('.skill-pill');
  pills.forEach(pill => {
    pill.addEventListener('mouseenter', () => {
      pill.style.transform = 'translateY(-3px)';
    });
    pill.addEventListener('mouseleave', () => {
      pill.style.transform = '';
    });
  });
}

/* ============================================================
   BACK TO TOP BUTTON
   ============================================================ */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ============================================================
   STAT COUNTERS
   ============================================================ */
function initStatCounters() {
  const stats = document.querySelectorAll('.stat-number, .hstat-num');
  if (!stats.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  stats.forEach(stat => observer.observe(stat));
}

function animateCounter(el) {
  const raw      = el.textContent.trim();
  const isFloat  = raw.includes('.');
  const suffix   = raw.replace(/[\d.]/g, '');
  const target   = parseFloat(raw);
  if (isNaN(target)) return;
  const duration = 1400;
  const step     = 16;
  const steps    = Math.ceil(duration / step);
  let   count    = 0;
  const increment = target / steps;

  const timer = setInterval(() => {
    count += increment;
    if (count >= target) {
      count = target;
      clearInterval(timer);
    }
    el.textContent = isFloat
      ? count.toFixed(2) + suffix
      : Math.floor(count) + suffix;
  }, step);
}

/* ============================================================
   PROJECT CARD SUBTLE TILT
   ============================================================ */
function initProjectCardTilt() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const cards = document.querySelectorAll('.project-card, .editorial-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x    = e.clientX - rect.left;
      const y    = e.clientY - rect.top;
      const cx   = rect.width  / 2;
      const cy   = rect.height / 2;
      const rotX = ((y - cy) / cy) * -4;
      const rotY = ((x - cx) / cx) *  4;
      card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

/* ============================================================
   CONTACT FORM — AJAX (Formspree)
   ============================================================ */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const fname    = document.getElementById('fname');
    const femail   = document.getElementById('femail');
    const fsubject = document.getElementById('fsubject');
    const fmessage = document.getElementById('fmessage');
    const formMsg  = document.getElementById('formMsg');
    const sendBtn  = document.getElementById('sendBtn');

    [fname, femail, fsubject, fmessage].forEach(el => {
      if (el) el.style.borderColor = '';
    });

    const existing = document.getElementById('formError');
    if (existing) existing.remove();

    let valid = true;
    const markError = (el) => {
      if (el) {
        el.style.borderColor = '#C62828';
        el.focus();
      }
      valid = false;
    };

    if (!fmessage || !fmessage.value.trim()) markError(fmessage);
    if (!fsubject  || !fsubject.value.trim()) markError(fsubject);
    if (!femail    || !isValidEmail(femail.value.trim())) markError(femail);
    if (!fname     || !fname.value.trim()) markError(fname);

    if (!valid) {
      showFormError('Please complete all fields with valid information.');
      return;
    }

    sendBtn.textContent = 'Sending Message…';
    sendBtn.disabled    = true;

    try {
      const response = await fetch('https://formspree.io/f/xrevgzve', {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });

      if (response.ok) {
        if (formMsg) {
          formMsg.style.display = 'block';
          formMsg.innerHTML = '✓ Message received! I will get in touch with you shortly.';
          setTimeout(() => { formMsg.style.display = 'none'; }, 6000);
        }
        [fname, femail, fsubject, fmessage].forEach(el => {
          if (el) el.value = '';
        });
      } else {
        showFormError('Failed to dispatch message. Please try again or email directly.');
      }
    } catch (error) {
      showFormError('Network communication error. Please check your connection.');
    }

    sendBtn.textContent = 'Send Message →';
    sendBtn.disabled    = false;
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showFormError(msg) {
  const existing = document.getElementById('formError');
  if (existing) existing.remove();

  const errEl = document.createElement('p');
  errEl.id    = 'formError';
  errEl.textContent = msg;
  errEl.style.cssText = `
    color: #E53935;
    font-size: 0.875rem;
    margin-top: 0.6rem;
    font-weight: 500;
  `;

  const sendBtn = document.getElementById('sendBtn');
  if (sendBtn) sendBtn.insertAdjacentElement('afterend', errEl);
  setTimeout(() => errEl.remove(), 4000);
}

/* ============================================================
   CINEMATIC OBSIDIAN CANVAS (Subtle Crimson & Charcoal Dust)
   ============================================================ */
function initObsidianCanvas() {
  const canvas = document.getElementById('cosmic-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  let particles = [];
  let mouseX = 0;
  let mouseY = 0;
  let targetMouseX = 0;
  let targetMouseY = 0;

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
  };

  const initParticles = () => {
    particles = [];
    const count = Math.floor((canvas.width * canvas.height) / 14000);
    for (let i = 0; i < count; i++) {
      const isRed = Math.random() < 0.28;
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.3,
        alpha: Math.random() * 0.6 + 0.2,
        speed: Math.random() * 0.09 + 0.02,
        parallaxSpeed: Math.random() * 10 + 4,
        color: isRed ? '#C62828' : '#777777'
      });
    }
  };

  window.addEventListener('resize', resize, { passive: true });
  window.addEventListener('mousemove', (e) => {
    targetMouseX = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
    targetMouseY = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
  }, { passive: true });

  const animate = () => {
    mouseX += (targetMouseX - mouseX) * 0.06;
    mouseY += (targetMouseY - mouseY) * 0.06;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.y -= p.speed;
      if (p.y < 0) {
        p.y = canvas.height;
        p.x = Math.random() * canvas.width;
      }

      const px = p.x - mouseX * p.parallaxSpeed;
      const py = p.y - mouseY * p.parallaxSpeed;

      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(px, py, p.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });

    requestAnimationFrame(animate);
  };

  resize();
  animate();
}

/* ============================================================
   CARD GLOW CURSOR POSITIONING
   ============================================================ */
function initCardGlow() {
  const cards = document.querySelectorAll('.project-card, .cert-card, .cert-gallery-card, .achieve-card, .build-item, .tool-item, .editorial-card, .edu-content, .contact-form-wrap, .intern-card, .pub-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    }, { passive: true });
  });
}

/* ============================================================
   PROJECT MODAL DIALOG & FULL DATA STORE
   ============================================================ */
function initProjectModal() {
  const modal = document.getElementById('projectModal');
  const closeBtn = document.getElementById('modalClose');
  const detailButtons = document.querySelectorAll('.view-details-btn');
  
  if (!modal) return;

  const projectData = {
    "face-recognition": {
      title: "Multiple Face Recognition Attendance System",
      icon: "👤",
      tags: ["Python", "OpenCV", "LBPH", "Haar Cascade", "SQL"],
      summary: "A peer-reviewed computer vision attendance system published in IJRAR (March 2024). Detects and recognizes multiple student faces simultaneously from live camera streams with automated SQL logging.",
      features: [
        "Simultaneous multi-face detection using Haar Feature-based Cascade Classifiers",
        "Robust grayscale texture recognition via Local Binary Pattern Histograms (LBPH)",
        "Automated structured SQL logging eliminating manual attendance paper logs",
        "Peer-reviewed research published in the International Journal of Research and Analytical Reviews"
      ],
      architecture: "Python desktop runtime leveraging OpenCV video capture pipelines, local LBPH model trainers, and SQL relational tables.",
      github: "https://github.com/uk0976/Multiple-Face-Recognition-Attendance-System"
    },
    "task-scheduler": {
      title: "Smart Task Scheduler with AI Integration",
      icon: "⚡",
      tags: ["Python", "NLP", "Machine Learning", "Workflow Automation"],
      summary: "An intelligent productivity engine that parses natural language inputs, extracts scheduling semantics, and dynamically optimizes task priorities.",
      features: [
        "Natural language date/time/action entity parsing from raw text queries",
        "Rule-based and heuristic prioritization algorithms ordering urgent tasks",
        "Calendar synchronization and automated deadline reminders",
        "Clean productivity dashboard tracking weekly completion velocity"
      ],
      architecture: "Python NLP extraction modules processing input streams and delegating to scheduling managers with local persistent state.",
      github: "https://github.com/uk0976/Smart-Task-Scheduler-with-AI-Integration"
    },
    "stock-prediction": {
      title: "Stock Prediction System with Integrated Chatbot",
      icon: "📈",
      tags: ["Python", "Machine Learning", "Streamlit", "Data Analytics"],
      summary: "A financial intelligence platform combining predictive stock price forecasting models with an interactive advisory chatbot for real-time market context.",
      features: [
        "Historical OHLCV financial timeseries forecasting using ML regressors",
        "Interactive conversational bot answering equity queries and ticker comparisons",
        "Comprehensive visualization charts with technical trend indicators",
        "Streamlit-powered responsive web interface"
      ],
      architecture: "Streamlit UI coupled with Yahoo Finance API ingestion pipelines and Scikit-learn regressors.",
      github: "https://github.com/uk0976/StockSage---Stock-Prediction-System-with-Integrated-ChatBot"
    },
    "medical-summarizer": {
      title: "MedInsight — RAG-Based AI Medical Report Summarizer",
      icon: "🏥",
      tags: ["RAG", "LangChain", "BioBERT", "FAISS", "Llama-3", "Streamlit"],
      summary: "A clinical AI platform that transforms complex pathology, lab, and discharge reports into role-tailored summaries for doctors, patients, and paramedics.",
      features: [
        "Retrieval-Augmented Generation (RAG) pipeline utilizing FAISS vector storage",
        "BioBERT clinical named-entity recognition (NER) extracting medical terminology",
        "Llama-3 LLM reasoning via Groq delivering instant multi-perspective briefs",
        "Multilingual voice readout synthesis for accessible patient comprehension"
      ],
      architecture: "Streamlit frontend hosting LangChain document loaders, chunking engines, BioBERT embeddings, FAISS vector index, and Llama-3 inference pipelines.",
      github: "https://github.com/uk0976/MedInsight---RAG-Based-AI-Medical-Report-Summarizer"
    },
    "library-management": {
      title: "Library Management System",
      icon: "📚",
      tags: ["Python", "Tkinter", "SQL", "Database Design"],
      summary: "A comprehensive institutional library automation platform managing book acquisitions, member records, and book issue/return lifecycles.",
      features: [
        "CRUD operations for catalog management and student membership tiers",
        "Automated overdue fine computation and penalty status trackers",
        "SQL transaction management preventing conflicting checkouts",
        "Responsive desktop GUI built with Python Tkinter"
      ],
      architecture: "Python Tkinter client interacting with MySQL relational schemas via parameterized SQL connectors.",
      github: "https://github.com/uk0976/Library-Management-System"
    },
    "sentiment-analysis": {
      title: "Sentiment Analysis on Movie Reviews",
      icon: "🎭",
      tags: ["Python", "NLP", "Scikit-learn", "TF-IDF"],
      summary: "A text classification pipeline trained on large-scale IMDB movie reviews to classify viewer sentiments with high accuracy.",
      features: [
        "Text pre-processing pipeline including regex normalization, stopword filtering, and lemmatization",
        "TF-IDF n-gram vectorization capturing linguistic nuances and idioms",
        "Comparative evaluation across Naive Bayes, Logistic Regression, and SVM classifiers",
        "Real-time review prediction input console"
      ],
      architecture: "Modular Python data science pipeline using Pandas, NLTK, and Scikit-learn.",
      github: "https://github.com/uk0976/Sentiment-Analysis-on-Movie-Reviews"
    },
    "snake-ladder": {
      title: "Snake and Ladder Game",
      icon: "🎲",
      tags: ["Python", "OOP", "Game Logic", "CLI"],
      summary: "An object-oriented implementation of the classic Indian board game featuring multi-player support, automated AI opponents, and statistical dice roll simulation.",
      features: [
        "Clean Object-Oriented Architecture (Board, Player, Die, and Rule-Engine classes)",
        "Configurable snakes and ladders coordinates with cycle detection",
        "Turn-based console animation with position feedback",
        "AI computer player automated strategy"
      ],
      architecture: "Pure Python OOP module designed with modular class hierarchies and testable invariants.",
      github: "https://github.com/uk0976/Snake-and-Ladder-Game"
    },
    "secure-identity": {
      title: "Secure Identity & Access Control System",
      icon: "🔐",
      tags: ["Python", "OpenCV", "Biometrics", "Cybersecurity", "Access Control"],
      summary: "An integrated physical security platform combining biometric facial verification with cryptographic credential hashing.",
      features: [
        "Dual-factor authentication: Face verification + salted cryptographic password hashing",
        "Anti-spoofing heuristic verification preventing static photo attacks",
        "Tamper-evident audit logging for access granted and denied events",
        "Role-based privilege management (Admin, Staff, Guest)"
      ],
      architecture: "Python OpenCV computer vision layer integrated with hashlib/bcrypt authentication services and secure access control logs.",
      github: "https://github.com/uk0976/Secure-Identity-and-Access-Control-System"
    },
    "codemedic-ai": {
      title: "CodeMedic AI — Full-Stack AI Code Analysis Platform",
      icon: "🩺",
      tags: ["Next.js", "FastAPI", "Python", "PostgreSQL", "LLMs", "DevTools"],
      summary: "An automated software engineering copilot for automated bug triage, security scanning (CVE/OWASP patterns), performance optimization, and unit test generation.",
      features: [
        "Static code parsing and LLM AST inspection flagging security vulnerabilities and memory leaks",
        "Automated unit test generation matching pytest and Jest standards",
        "Performance refactoring suggestions with Big-O complexity estimates",
        "Interactive dashboard displaying repository health scores"
      ],
      architecture: "Next.js frontend coupled with a FastAPI Python microservice running analysis workers against a PostgreSQL storage layer.",
      github: "https://github.com/uk0976/CodeMedic-AI"
    },
    "nirman": {
      title: "Nirman — Construction & Infrastructure Marketplace",
      icon: "🏗️",
      tags: ["React", "Node.js", "Express", "MongoDB", "Material Tracking"],
      summary: "A specialized B2B marketplace bridging builders, contractors, and material suppliers with transparent procurement tracking.",
      features: [
        "Real-time catalog of verified construction materials and machinery rentals",
        "Milestone-based contractor bidding and quotation management",
        "Live order dispatch tracking and digital invoicing",
        "Role-based portals for suppliers, contractors, and developers"
      ],
      architecture: "MERN stack (MongoDB, Express.js, React, Node.js) with JWT authentication and RESTful endpoints.",
      github: "https://github.com/uk0976/Nirman"
    },
    "nsers": {
      title: "NSERS — National Smart Emergency Response System",
      icon: "🚨",
      tags: ["Python", "Emergency Dispatch", "IoT", "GPS", "Hackathon Finalist"],
      summary: "A mission-critical emergency triage platform connecting emergency victims, ambulances, police, and hospitals with real-time GPS routing.",
      features: [
        "One-click multi-department emergency dispatch with live geolocation broadcast",
        "Automated hospital bed and blood-bank inventory match based on transit proximity",
        "Driver navigation app with dynamic congestion avoidance",
        "Built for the Smart India Hackathon (SIH) competition"
      ],
      architecture: "Distributed microservices coordinating geolocation broadcasts, WebSocket telemetry, and emergency services dashboards.",
      github: "https://github.com/uk0976/NSERS"
    },
    "safestep": {
      title: "SafeStep — AI-Assisted Smart Safety Companion",
      icon: "🛡️",
      tags: ["JavaScript", "Journey Tracking", "Risk Alerts", "Notifications"],
      summary: "A safety companion application for commuters featuring anomaly route detection, scheduled check-ins, and automated emergency dispatches.",
      features: [
        "Live location tracking with expected-route corridor boundaries",
        "Automated risk alerts if the commuter is detained or deviates significantly",
        "Emergency SMS/WhatsApp dispatch to trusted circles without app download",
        "Developed for the HackDevengers hackathon"
      ],
      architecture: "Responsive web client utilizing Geolocation API and third-party SMS/webhook dispatch bridges.",
      github: "https://github.com/uk0976/SafeStep"
    },
    "dsa-journey": {
      title: "Data Structures & Algorithms Journey",
      icon: "🚩",
      tags: ["Python", "DSA", "LeetCode", "Algorithms", "Problem Solving"],
      summary: "A comprehensive laboratory of optimized algorithmic solutions across LeetCode, GeekForGeeks, and technical interview benchmarks.",
      features: [
        "Clean, documented Python implementations across Arrays, Trees, Graphs, and DP",
        "Detailed time and space complexity ($O(N)$, $O(\log N)$) annotations",
        "Visual trace explanations for complex recursion and graph traversals",
        "Placement preparation roadmap tracking core algorithmic competencies"
      ],
      architecture: "Modular Python codebase organized by data structure paradigm with test execution suites.",
      github: "https://github.com/uk0976/Data-Structures-Algorithms-DSA-Journey"
    },
    "voiceguard": {
      title: "VoiceGuard — AI Voice Clone Deepfake Detector",
      icon: "🎙️",
      tags: ["FastAPI", "PyTorch", "Wav2Vec2", "React 18", "Librosa", "WebSockets"],
      summary: "An enterprise biometric audio forensics system engineered to detect synthetic voice clones, AI-generated speech, and audio deepfakes in real-time streams and recorded audio.",
      features: [
        "Dual-engine inference combining deep Wav2Vec2 representations with acoustic DSP heuristics",
        "Live microphone WebSocket audio streaming with chunk-level forensic classification",
        "Heuristic explainability reporting phase incoherence, micro-jitter absence, and spectral flatness",
        "Zero-retention ephemeral privacy pipeline with comprehensive PDF audit reports"
      ],
      architecture: "FastAPI backend hosting PyTorch and TorchAudio neural pipelines alongside Librosa DSP processors, streaming telemetry via WebSockets to a React 18 & Vite dashboard.",
      github: "https://github.com/uk0976/VoiceGuard---AI-Voice-Clone-Deepfake-Detector"
    },
    "blockloan": {
      title: "BlockLoan — Decentralized Peer-to-Peer Lending Platform",
      icon: "⛓️",
      tags: ["Solidity", "Ethereum", "Hardhat", "React 18", "TypeScript", "FastAPI", "Web3.py"],
      summary: "A decentralized, non-custodial peer-to-peer lending protocol and DApp that eliminates centralized financial intermediaries through Ethereum smart contracts.",
      features: [
        "Non-custodial smart contracts autonomously enforcing loan principal, simple interest, and collateral states",
        "Open decentralized liquidity marketplace allowing direct funding between borrowers and lenders",
        "FastAPI and Web3.py backend event indexer caching on-chain logs for low-latency queries",
        "58 Hardhat unit test cases verifying protocol invariants against reentrancy and overflows"
      ],
      architecture: "Solidity ^0.8.20 smart contracts deployed on Ethereum/Hardhat network, integrated with a Web3.py event indexing microservice and a React 18 TypeScript frontend.",
      github: "https://github.com/uk0976/BlockLoan-Blockchain-Based-Decentralized-Peer-to-Peer-Lending-Platform"
    },
    "coreforge-studio": {
      title: "CoreForge Studio — Digital Agency Platform",
      icon: "💻",
      tags: ["React", "JavaScript", "Vite", "Tailwind CSS", "UI/UX"],
      summary: "A high-performance modern web platform for a digital design and engineering agency showcasing creative tech services and client case studies.",
      features: [
        "Responsive component-driven React architecture optimized for rapid navigation and zero layout shifts",
        "Dynamic interactive service showcases highlighting UI/UX, full-stack, and brand design capabilities",
        "Obsidian dark aesthetic with refined CSS animations and optimized asset loading"
      ],
      architecture: "Custom single-page React application bundled with Vite and styled with responsive utility architectures.",
      github: "https://github.com/uk0976/CoreForge-Studio"
    }
  };

  const openModal = (id) => {
    const data = projectData[id];
    if (!data) return;

    document.getElementById('modalIcon').textContent = data.icon;
    document.getElementById('modalName').textContent = data.title;

    const tagsContainer = document.getElementById('modalTags');
    tagsContainer.innerHTML = '';
    data.tags.forEach(tag => {
      const span = document.createElement('span');
      span.textContent = tag;
      tagsContainer.appendChild(span);
    });

    const bodyContainer = document.getElementById('modalBody');
    bodyContainer.innerHTML = `
      <div style="margin-bottom: 1.5rem;">
        <h4 style="font-size: 0.82rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--crimson); margin-bottom: 0.5rem; font-family: var(--font-mono);">Overview</h4>
        <p style="font-size: 0.98rem; line-height: 1.65; color: var(--text-secondary);">${data.summary}</p>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4 style="font-size: 0.82rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--crimson); margin-bottom: 0.5rem; font-family: var(--font-mono);">Key Capabilities &amp; Architecture</h4>
        <ul style="padding-left: 1.25rem; display: flex; flex-direction: column; gap: 0.5rem; color: var(--text-secondary); font-size: 0.94rem;">
          ${data.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
      </div>

      <div style="margin-bottom: 1.75rem; padding: 1.15rem; background: rgba(255, 255, 255, 0.03); border-radius: 8px; border: 1px solid var(--border);">
        <h4 style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--soft-grey); margin-bottom: 0.35rem; font-family: var(--font-mono);">System Architecture</h4>
        <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.55; margin: 0;">${data.architecture}</p>
      </div>

      <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
        ${data.github ? `
          <a href="${data.github}" target="_blank" class="proj-btn" style="padding: 0.65rem 1.35rem;">
            <span>Open Dedicated Repository</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
          </a>
        ` : ''}
        <button type="button" class="proj-btn proj-btn-ghost" id="modalCloseBtn" style="padding: 0.65rem 1.35rem;">Close Details</button>
      </div>
    `;

    document.getElementById('modalCloseBtn')?.addEventListener('click', closeModal);
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  detailButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-project-id');
      if (id) openModal(id);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
  });
}

/* ============================================================
   CERTIFICATE GALLERY FILTER & LIGHTBOX
   ============================================================ */
function initCertGallery() {
  const filterBtns = document.querySelectorAll('.cert-filter-btn');
  const cards = document.querySelectorAll('.cert-gallery-card');

  if (filterBtns.length && cards.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');

        cards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }
}

function openCertLightbox(imgSrc, title, issuer) {
  const lightbox = document.getElementById('certLightbox');
  const img = document.getElementById('certLightboxImg');
  const titleEl = document.getElementById('certLightboxTitle');
  const issuerEl = document.getElementById('certLightboxIssuer');
  const downloadLink = document.getElementById('certDownloadLink');

  if (!lightbox) return;

  if (img) img.src = imgSrc;
  if (titleEl) titleEl.textContent = title || 'Certificate Preview';
  if (issuerEl) issuerEl.textContent = issuer || '';
  if (downloadLink) {
    downloadLink.href = imgSrc;
    downloadLink.setAttribute('download', (title || 'Certificate').replace(/\s+/g, '_') + '.jpg');
  }

  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCertLightbox() {
  const lightbox = document.getElementById('certLightbox');
  if (lightbox) {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
}

window.openCertLightbox = openCertLightbox;
window.closeCertLightbox = closeCertLightbox;
window.scrollToTop = scrollToTop;
