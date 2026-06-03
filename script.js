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
    document.body.style.overflow = 'hidden';
  };

  const closeMenuFn = () => {
    mobileOverlay.classList.remove('active');
    hamburger.classList.remove('open');
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