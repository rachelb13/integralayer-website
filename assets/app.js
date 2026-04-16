// Mobile nav toggle
(function () {
  const btn = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (btn && links) {
    btn.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        links.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  }
})();

// Nav dropdown (Perspectives) — click to open, outside-click / Esc to close
(function () {
  const dropdowns = document.querySelectorAll('.nav-dropdown');
  if (!dropdowns.length) return;

  dropdowns.forEach((dd) => {
    const trigger = dd.querySelector('.nav-dropdown-trigger');
    if (!trigger) return;
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const willOpen = !dd.classList.contains('open');
      // close siblings
      dropdowns.forEach((other) => {
        if (other !== dd) {
          other.classList.remove('open');
          const t = other.querySelector('.nav-dropdown-trigger');
          if (t) t.setAttribute('aria-expanded', 'false');
        }
      });
      dd.classList.toggle('open', willOpen);
      trigger.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
    });
  });

  document.addEventListener('click', (e) => {
    dropdowns.forEach((dd) => {
      if (!dd.contains(e.target)) {
        dd.classList.remove('open');
        const t = dd.querySelector('.nav-dropdown-trigger');
        if (t) t.setAttribute('aria-expanded', 'false');
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      dropdowns.forEach((dd) => {
        dd.classList.remove('open');
        const t = dd.querySelector('.nav-dropdown-trigger');
        if (t) t.setAttribute('aria-expanded', 'false');
      });
    }
  });
})();

// Contact form "thanks" banner after redirect from FormSubmit
(function () {
  if (new URLSearchParams(window.location.search).get('sent') === '1') {
    const form = document.querySelector('.contact-form');
    if (!form) return;
    const banner = document.createElement('div');
    banner.className = 'form-success';
    banner.innerHTML = '<strong>Thanks — your message is in.</strong><br/>Rachel will get back to you shortly. Want to grab a time directly? <a href="https://calendly.com/rachel-integralayer/30min" target="_blank" rel="noopener">Book a call →</a>';
    form.parentNode.insertBefore(banner, form);
    form.style.display = 'none';
    banner.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
})();

// Reveal-on-scroll
(function () {
  const targets = document.querySelectorAll('.section, .hero-copy, .hero-visual, .step, .card, .pillar');
  targets.forEach((el) => el.classList.add('reveal'));
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  targets.forEach((el) => io.observe(el));
})();
