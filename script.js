/* ============================================================
   DOCTOR UMERKHAN JUNAIDKHAN — PORTFOLIO SCRIPT
   ============================================================ */

/* ── DOM READY ── */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initScrollReveal();
  initActiveNavLinks();
  initSkillPillHover();
  initBackToTop();
  initStatCounters();
  initProjectCardTilt();
  initContactForm();
  initCosmicCanvas();
  initCardGlow();
  initProjectModal();
});

/* ============================================================
   NAVBAR — scrolled class + shadow
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
   MOBILE MENU — hamburger / overlay / close
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
   SCROLL REVEAL — fade-up animation for .reveal elements
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
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealEls.forEach(el => observer.observe(el));
}

/* ============================================================
   ACTIVE NAV LINKS — highlight current section link
   ============================================================ */
function initActiveNavLinks() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  if (!sections.length || !navLinks.length) return;

  const navHeight = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue('--nav-h') || '72'
  );

  const onScroll = () => {
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - navHeight - 20;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ============================================================
   SKILL PILL HOVER — subtle glow pulse on hover
   ============================================================ */
function initSkillPillHover() {
  const pills = document.querySelectorAll('.skill-pill');
  pills.forEach(pill => {
    pill.addEventListener('mouseenter', () => {
      pill.style.transform = 'translateY(-3px) scale(1.04)';
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
   STAT COUNTERS — animate numbers when hero stats are visible
   ============================================================ */
function initStatCounters() {
  const stats = document.querySelectorAll('.stat-number');
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
   PROJECT CARD SUBTLE TILT on mouse move
   ============================================================ */
function initProjectCardTilt() {
  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x    = e.clientX - rect.left;
      const y    = e.clientY - rect.top;
      const cx   = rect.width  / 2;
      const cy   = rect.height / 2;
      const rotX = ((y - cy) / cy) * -5;
      const rotY = ((x - cx) / cx) *  5;
      card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-6px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

/* ============================================================
   CONTACT FORM — Formspree AJAX (no page redirect)
   ============================================================ */
function initContactForm() {
  const form    = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', async function (e) {
    e.preventDefault(); // ✅ Stops redirect to Formspree page

    const fname    = document.getElementById('fname');
    const femail   = document.getElementById('femail');
    const fsubject = document.getElementById('fsubject');
    const fmessage = document.getElementById('fmessage');
    const formMsg  = document.getElementById('formMsg');
    const sendBtn  = document.getElementById('sendBtn');

    // Clear previous error styles
    [fname, femail, fsubject, fmessage].forEach(el => {
      if (el) el.style.borderColor = '';
    });

    // Remove previous error message if any
    const existing = document.getElementById('formError');
    if (existing) existing.remove();

    // Validation
    let valid = true;

    const markError = (el) => {
      if (el) {
        el.style.borderColor = '#ff4d6d';
        el.focus();
      }
      valid = false;
    };

    if (!fmessage || !fmessage.value.trim()) markError(fmessage);
    if (!fsubject  || !fsubject.value.trim()) markError(fsubject);
    if (!femail    || !isValidEmail(femail.value.trim())) markError(femail);
    if (!fname     || !fname.value.trim()) markError(fname);

    if (!valid) {
      showFormError('Please fill in all fields correctly.');
      return;
    }

    // Send via Formspree
    sendBtn.textContent = 'Sending…';
    sendBtn.disabled    = true;

    try {
      const response = await fetch('https://formspree.io/f/xrevgzve', {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });

      if (response.ok) {
        // ✅ Show success on your own page
        if (formMsg) {
          formMsg.style.display = 'block';
          formMsg.innerHTML = '✅ Message sent! I\'ll get back to you soon.';
          setTimeout(() => { formMsg.style.display = 'none'; }, 5000);
        }

        // Reset form fields
        [fname, femail, fsubject, fmessage].forEach(el => {
          if (el) el.value = '';
        });

      } else {
        showFormError('❌ Something went wrong. Please try again.');
      }

    } catch (error) {
      showFormError('❌ Network error. Please check your connection.');
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
    color: #ff4d6d;
    font-size: 0.875rem;
    margin-top: 0.5rem;
  `;

  const sendBtn = document.getElementById('sendBtn');
  if (sendBtn) sendBtn.insertAdjacentElement('afterend', errEl);

  setTimeout(() => errEl.remove(), 3500);
}

/* ============================================================
   SMOOTH SCROLL for nav links (fallback for older browsers)
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ============================================================
   UPGRADE: COSMIC CANVAS BACKGROUND
   ============================================================ */
function initCosmicCanvas() {
  const canvas = document.getElementById('cosmic-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  let stars = [];
  let mouseX = 0;
  let mouseY = 0;
  let targetMouseX = 0;
  let targetMouseY = 0;
  
  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initStars();
  };
  
  const initStars = () => {
    stars = [];
    const count = Math.floor((canvas.width * canvas.height) / 11000);
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.6 + 0.4,
        alpha: Math.random() * 0.7 + 0.3,
        speed: Math.random() * 0.08 + 0.02,
        parallaxSpeed: Math.random() * 12 + 6,
        color: Math.random() > 0.45 ? '#00d4ff' : '#9b5cff'
      });
    }
  };
  
  window.addEventListener('resize', resize, { passive: true });
  window.addEventListener('mousemove', (e) => {
    targetMouseX = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
    targetMouseY = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
  }, { passive: true });
  
  const animate = () => {
    mouseX += (targetMouseX - mouseX) * 0.07;
    mouseY += (targetMouseY - mouseY) * 0.07;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    stars.forEach(star => {
      star.y -= star.speed;
      if (star.y < 0) {
        star.y = canvas.height;
        star.x = Math.random() * canvas.width;
      }
      
      const px = star.x - mouseX * star.parallaxSpeed;
      const py = star.y - mouseY * star.parallaxSpeed;
      
      ctx.save();
      ctx.globalAlpha = star.alpha;
      ctx.fillStyle = star.color;
      ctx.beginPath();
      ctx.arc(px, py, star.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });
    
    requestAnimationFrame(animate);
  };
  
  resize();
  animate();
}

/* ============================================================
   UPGRADE: CARD GLOW DYNAMIC POSITIONING
   ============================================================ */
function initCardGlow() {
  const cards = document.querySelectorAll('.project-card, .cert-card, .achieve-card, .build-item, .tool-item, .beyond-card');
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
   UPGRADE: INTERACTIVE PROJECT DETAIL MODALS
   ============================================================ */
function initProjectModal() {
  const modal = document.getElementById('projectModal');
  const closeBtn = document.getElementById('modalClose');
  const closeFooterBtn = document.getElementById('modalCloseBtn');
  const detailButtons = document.querySelectorAll('.view-details-btn');
  
  if (!modal) return;
  
  const projectData = {
    "face-recognition": {
      title: "Multiple Face Recognition Attendance System",
      icon: "👥",
      tags: ["Python", "OpenCV", "Haar Cascade", "LBPH", "SQL"],
      summary: "An automated attendance system that detects and recognizes multiple human faces in real-time, matching them against a registration database to log entries automatically.",
      features: [
        "Real-time simultaneous detection of multiple faces in a single video input stream",
        "Haar Cascade Classifiers utilized for fast and lightweight face bounding-box detection",
        "Local Binary Patterns Histograms (LBPH) algorithm used for facial feature extraction and match scoring",
        "Integrated SQL database to maintain profiles, registration states, and logs with exportable formats",
        "Automated attendance sheets generated instantly upon system operation session closure"
      ],
      architecture: "Engineered as an end-to-end Python pipeline using OpenCV for real-time video grab and preprocessing, an LBPH model for face prediction, and MySQL Connector for log transactions. Features a desktop interface built in Tkinter.",
      github: "https://github.com/uk0976"
    },
    "task-scheduler": {
      title: "Smart Task Scheduler with AI Integration",
      icon: "📅",
      tags: ["Python", "NLP", "Machine Learning"],
      summary: "An intelligent productivity scheduler that parses task details from natural language, predicts task priorities using machine learning, and structures optimal daily schedules.",
      features: [
        "Natural Language Processing (NLP) parses details from raw messages like 'remind me to prepare presentation tomorrow'",
        "Advanced text classifier automatically tags task categories based on keywords and embeddings",
        "Machine learning model predicts importance scores based on deadlines, descriptions, and user categories",
        "Intelligent scheduling algorithm dynamic ranks daily task order to optimize user focus and output"
      ],
      architecture: "Constructed with a Python core using NLTK/SpaCy for linguistic analysis, scikit-learn models for priority prediction, and a light Web UI for tasks listing.",
      github: "https://github.com/uk0976"
    },
    "stock-prediction": {
      title: "Stock Prediction System with Integrated Chatbot",
      icon: "📈",
      tags: ["Python", "Machine Learning", "Data Analysis"],
      summary: "A robust analytics platform that predicts financial trends using historical market datasets, paired with a smart chatbot for answering quantitative financial queries.",
      features: [
        "Real-time historical stock market data retrieval via yfinance APIs",
        "Time-series prediction models forecast upcoming price directions and trend confidence",
        "Interactive chatbot provides immediate answers about predictions, general stock performance, and company profiles",
        "Beautiful Matplotlib dashboards visualize historical stock prices overlaid with prediction projections"
      ],
      architecture: "Built in Python using Pandas and NumPy for complex data handling, Scikit-Learn/TensorFlow for prediction modeling, and NLTK for the rules-based financial query chatbot.",
      github: "https://github.com/uk0976"
    },
    "medical-summarizer": {
      title: "Medical Report Summarizer",
      icon: "🏥",
      tags: ["Python", "NLP", "Machine Learning", "AI"],
      summary: "An AI-powered document helper that converts scanned clinical sheets to digital text, highlights critical medical entities, and constructs concise layman-friendly summaries.",
      features: [
        "Optical Character Recognition (OCR) converts paper clinical reports into digital data streams",
        "Named Entity Recognition (NER) extracts key medical entities (symptoms, drugs, dosages, diagnostics)",
        "Advanced Summarizer compresses complex medical records into structured 1-page summaries",
        "Built-in visual dictionary helps patients click on complex medical terms to view clear definitions"
      ],
      architecture: "Uses Python with PyTesseract for PDF OCR, SpaCy NER models for clinical terms extraction, and Hugging Face transformer models (like BART/T5) for summary generation.",
      github: "https://github.com/uk0976"
    },
    "library-management": {
      title: "Library Management System",
      icon: "📚",
      tags: ["Python", "Tkinter", "SQL", "MySQL Workbench"],
      summary: "A production-ready desktop utility to automate library cataloging, rentals, borrower directories, and database auditing via an intuitive interface.",
      features: [
        "Comprehensive database catalog search supporting title, author, category, or ISBN tags",
        "Transactions tracker manages active rentals, return dates, late-fines computations, and status reports",
        "Optimized relational schema featuring custom constraints, views, and index parameters",
        "Clean administrative dashboards showcase inventory metrics and quick actions panels"
      ],
      architecture: "A desktop Python desktop app using Tkinter for GUI layout and MySQL Workbench for database modeling, utilizing raw SQL connectors for optimized queries.",
      github: "https://github.com/uk0976"
    },
    "sentiment-analysis": {
      title: "Sentiment Analysis Project",
      icon: "💬",
      tags: ["Python", "NLP", "ML", "Matplotlib", "Jupyter"],
      summary: "A text classification pipeline that identifies positive, negative, or neutral sentiment in textual datasets, with detailed graphical summaries.",
      features: [
        "Feature engineering pipeline applying TF-IDF vectorization, lemmatization, and stop-words filters",
        "Multi-model comparisons analyzing Naive Bayes, Logistic Regression, and SVM performance metrics",
        "Data visualization plots showcasing sentiments distributions, accuracy metrics, and word-clouds",
        "Structured Jupyter pipeline documenting steps from raw data ingest to evaluation reports"
      ],
      architecture: "Built on top of Python's scientific libraries (Pandas, NumPy, Scikit-Learn, Matplotlib) and visualized in Jupyter Notebook for quick experimentation.",
      github: "https://github.com/uk0976"
    },
    "snake-ladder": {
      title: "Snake and Ladder GUI Game",
      icon: "🎲",
      tags: ["Python", "Tkinter", "GUI Development"],
      summary: "A polished interactive desktop recreation of the classic board game, featuring custom canvas animations and dynamic player turn management.",
      features: [
        "Custom coordinates grid mapping automatically calculates movement paths across the board",
        "Animated tokens transition smoothly step-by-step to emulate dice rolls rather than jumping",
        "Supports both human-versus-human play and computer-driven AI opponents",
        "Interactive dice component features clean frame animations showing face rolls"
      ],
      architecture: "Engineered in Python using the Tkinter library, focusing on canvas grid drawings and asynchronous animation loops.",
      github: "https://github.com/uk0976"
    },
    "secure-identity": {
      title: "Secure Identity Verification Using Face Biometrics",
      icon: "🔒",
      tags: ["Python", "OpenCV", "LBPH", "Haar Cascade", "SQL"],
      summary: "A biometric access control portal that verifies identity signatures using facial matching and cross-references active directories.",
      features: [
        "Secure webcam authentication system matching active user frames with registered profiles",
        "Facial landmark analysis flags photo or screen attacks to ensure liveness",
        "Security logs directory tracks successful auths, failure alerts, match scores, and timestamp metrics",
        "Admin user control panels manage user enrollment, role privileges, and faceprint updates"
      ],
      architecture: "Constructed with Python, leveraging OpenCV for image parsing, LBPH for mapping facial profiles, and MySQL for logs.",
      github: "https://github.com/uk0976"
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
    
    const featuresHtml = data.features.map(f => `<li>${f}</li>`).join('');
    document.getElementById('modalBody').innerHTML = `
      <p><strong>Overview:</strong> ${data.summary}</p>
      <h4>Key Features</h4>
      <ul>${featuresHtml}</ul>
      <h4>Technical Architecture</h4>
      <p>${data.architecture}</p>
    `;
    
    const ghLink = document.getElementById('modalGithub');
    if (ghLink) ghLink.href = data.github || "https://github.com/uk0976";
    
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
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-project-id');
      openModal(id);
    });
  });
  
  closeBtn.addEventListener('click', closeModal);
  if (closeFooterBtn) closeFooterBtn.addEventListener('click', closeModal);
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
  });
}