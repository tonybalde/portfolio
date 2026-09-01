(() => {
  const html = document.documentElement;

  /* ---------------- i18n -------------- */
  const dict = {
    es: {
      "nav.about": "Quién soy",
      "nav.projects": "Proyectos",
      "nav.contact": "Contacto",
      "nav.cv": "Descargar CV",
      "cv.wordpress": "CV WordPress",
      "cv.frontend": "CV Frontend",
      "hero.eyebrow": "Desarrollador Frontend & WordPress",
      "hero.title": "Construyo interfaces <em>y</em> mantengo los sitios que las sostienen.",
      "hero.lead": "Trabajo en ambos lados: interfaces frontend a medida y administración/seguridad de sitios WordPress. Usá el switch para ver un lado u otro de mi trabajo.",
      "hero.ctaPrimary": "Ver proyectos",
      "switch.eyebrow": "Modo actual",
      "switch.caption": "Mostrando:",
      "switch.frontend": "FrontEnd",
      "switch.wordpress": "WordPress",
      "about.eyebrow": "Sobre mí",
      "about.title": "Quién soy",
      "about.p1": "[Placeholder — reemplazá con tu bio real: quién sos, hace cuánto programás, qué te llevó a especializarte en frontend y WordPress.]",
      "about.p2": "[Placeholder — un párrafo sobre cómo trabajás: stack habitual, cómo encarás un proyecto, qué te diferencia.]",
      "projects.eyebrow": "Trabajo",
      "projects.title": "Proyectos",
      "projects.noteFrontend": "Mostrando proyectos frontend — usá el switch para ver WordPress",
      "projects.noteWordpress": "Mostrando proyectos WordPress — usá el switch para ver Frontend",
      "contact.eyebrow": "Contacto",
      "contact.title": "Contactarme",
      "contact.lead": "¿Tenés un proyecto en mente? Contame de qué se trata y te respondo lo antes posible.",
      "contact.name": "Nombre",
      "contact.email": "Email",
      "contact.message": "Mensaje",
      "contact.submit": "Enviar mensaje",
      "contact.status": "Abriendo tu cliente de correo…",
      "footer.text": "© 2026 Tony Baldessari",
      "footer.email": "Email",
      "footer.emailCopied": "Correo electrónico copiado"
    },
    en: {
      "nav.about": "About",
      "nav.projects": "Projects",
      "nav.contact": "Contact",
      "nav.cv": "Download Resumé",
      "cv.wordpress": "WordPress Resumé",
      "cv.frontend": "Frontend Resumé",
      "hero.eyebrow": "Frontend & WordPress Developer",
      "hero.title": "I build interfaces <em>and</em> keep the sites underneath them running.",
      "hero.lead": "I work on both sides: custom frontend interfaces and WordPress site administration/security. Use the switch to see one side of my work or the other.",
      "hero.ctaPrimary": "View projects",
      "switch.eyebrow": "Current mode",
      "switch.caption": "Showing:",
      "switch.frontend": "FrontEnd",
      "switch.wordpress": "WordPress",
      "about.eyebrow": "About me",
      "about.title": "Who I am",
      "about.p1": "[Placeholder — replace with your real bio: who you are, how long you've been coding, what led you to specialize in frontend and WordPress.]",
      "about.p2": "[Placeholder — a paragraph on how you work: usual stack, how you approach a project, what sets you apart.]",
      "projects.eyebrow": "Work",
      "projects.title": "Projects",
      "projects.noteFrontend": "Showing frontend projects — use the switch to see WordPress",
      "projects.noteWordpress": "Showing WordPress projects — use the switch to see Frontend",
      "contact.eyebrow": "Contact",
      "contact.title": "Get in touch",
      "contact.lead": "Have a project in mind? Tell me about it and I'll get back to you as soon as I can.",
      "contact.name": "Name",
      "contact.email": "Email",
      "contact.message": "Message",
      "contact.submit": "Send message",
      "contact.status": "Opening your email client…",
      "footer.text": "© 2026 Tony Baldessari",
      "footer.email": "Email",
      "footer.emailCopied": "Email copied"
    }
  };

  function applyI18n(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[lang][key] !== undefined) el.textContent = dict[lang][key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (dict[lang][key] !== undefined) el.innerHTML = dict[lang][key];
    });
    document.getElementById('switchCaptionValue').setAttribute('data-i18n',
      html.getAttribute('data-track') === 'wordpress' ? 'switch.wordpress' : 'switch.frontend');
    document.getElementById('trackNote').setAttribute('data-i18n',
      html.getAttribute('data-track') === 'wordpress' ? 'projects.noteWordpress' : 'projects.noteFrontend');
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[lang][key] !== undefined) el.textContent = dict[lang][key];
    });
    html.setAttribute('lang', lang);
    html.setAttribute('data-lang', lang);
  }

  function updateCvLinks(lang) {
    document.querySelectorAll('[data-cv-link]').forEach(a => {
      const track = a.getAttribute('data-cv-link');
      a.setAttribute('href', `cv/${track}-${lang}.pdf`);
    });
  }

  document.querySelectorAll('[data-lang-btn]').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang-btn');
      document.querySelectorAll('[data-lang-btn]').forEach(b =>
        b.setAttribute('aria-pressed', b === btn ? 'true' : 'false'));
      applyI18n(lang);
      updateCvLinks(lang);
    });
  });

  /* ---------------- mode switch ---------------- */

  const projects = {
    frontend: [
      {
        tags: ['Astro', 'Frontend'],
        title: 'Naaloo — Landing page',
        desc: {
          es: 'Landing de Naaloo (SaaS de HR para LATAM) construida en Astro, con mega-menú de funcionalidades, sistema de diseño propio y versión standalone en HTML.',
          en: 'Naaloo landing page (HR SaaS for LATAM) built in Astro, with a features mega-menu, custom design system, and a standalone HTML version.'
        }
      },
      {
        tags: ['Next.js', 'TypeScript'],
        title: 'Naaloo — Migración a stack moderno',
        desc: {
          es: 'Planificación de migración del sitio de WordPress + Elementor a Next.js 14, Sanity.io y una API en Node/Express.',
          en: 'Migration plan from WordPress + Elementor to Next.js 14, Sanity.io and a Node/Express API.'
        }
      }
    ],
    wordpress: [
      {
        tags: ['WordPress', 'Seguridad'],
        title: 'Naaloo.com — Remediación de malware',
        desc: {
          es: 'Limpieza de malware y hardening de seguridad continuo en el sitio WordPress de producción de Naaloo.',
          en: 'Malware remediation and ongoing security hardening for Naaloo\'s production WordPress site.'
        }
      }
    ]
  };

  function renderProjects(track, lang) {
    const grid = document.getElementById('projectGrid');
    grid.innerHTML = '';
    projects[track].forEach(p => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.innerHTML = `
        <div class="tag-row">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
        <h3>${p.title}</h3>
        <p>${p.desc[lang]}</p>
      `;
      grid.appendChild(card);
    });
    // trailing placeholder slot so the grid never feels empty/uneven
    const ph = document.createElement('div');
    ph.className = 'project-card placeholder';
    ph.textContent = lang === 'es' ? '+ Agregá tu próximo proyecto acá' : '+ Add your next project here';
    grid.appendChild(ph);
  }

  function setTrack(track) {
    html.setAttribute('data-track', track);
    document.querySelectorAll('[data-track-label]').forEach(el => {
      const active = el.getAttribute('data-track-label') === track;
      el.setAttribute('data-active', active ? 'true' : 'false');
      el.setAttribute('aria-checked', active ? 'true' : 'false');
    });
    const lang = html.getAttribute('data-lang');
    renderProjects(track, lang);
    document.getElementById('switchCaptionValue').setAttribute('data-i18n',
      track === 'wordpress' ? 'switch.wordpress' : 'switch.frontend');
    document.getElementById('trackNote').setAttribute('data-i18n',
      track === 'wordpress' ? 'projects.noteWordpress' : 'projects.noteFrontend');
    applyI18n(lang);
  }

  document.querySelectorAll('.switch-option').forEach(btn => {
    btn.addEventListener('click', () => setTrack(btn.getAttribute('data-track-label')));
  });

  /* ---------------- CV dropdown ---------------- */
  const cvDropdown = document.getElementById('cvDropdown');
  const cvBtn = document.getElementById('cvBtn');

  cvBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = cvDropdown.getAttribute('data-open') === 'true';
    cvDropdown.setAttribute('data-open', open ? 'false' : 'true');
    cvBtn.setAttribute('aria-expanded', open ? 'false' : 'true');
  });
  document.addEventListener('click', () => cvDropdown.setAttribute('data-open', 'false'));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') cvDropdown.setAttribute('data-open', 'false');
  });

  /* ---------------- dark mode ---------------- */
  const themeToggle = document.getElementById('themeToggle');
  const moonPath = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>';
  const sunPath = '<circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"></path>';

  function setTheme(mode) {
    if (mode === 'dark') {
      html.setAttribute('data-theme', 'dark');
      themeToggle.setAttribute('aria-checked', 'true');
      document.getElementById('themeIcon').innerHTML = moonPath;
    } else {
      html.removeAttribute('data-theme');
      themeToggle.setAttribute('aria-checked', 'false');
      document.getElementById('themeIcon').innerHTML = sunPath;
    }
  }

  themeToggle.addEventListener('click', () => {
    const isDark = themeToggle.getAttribute('aria-checked') === 'true';
    setTheme(isDark ? 'light' : 'dark');
  });

  /* ---------------- logo scroll to top ---------------- */
  document.getElementById('logoLink').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---------------- contact form ---------------- */
  const contactForm = document.getElementById('contactForm');
  const contactStatus = document.getElementById('contactStatus');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('cf-name').value.trim();
    const fromEmail = document.getElementById('cf-email').value.trim();
    const message = document.getElementById('cf-message').value.trim();

    const subject = `Portfolio contact — ${name}`;
    const body = `${message}\n\n—\n${name} (${fromEmail})`;
    const mailto = `mailto:tonybaldessari@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;

    const lang = html.getAttribute('data-lang');
    contactStatus.textContent = dict[lang]['contact.status'];
    contactStatus.setAttribute('data-show', 'true');
    setTimeout(() => contactStatus.setAttribute('data-show', 'false'), 4000);
  });

  /* ---------------- email copy ---------------- */
  const emailCopyBtn = document.getElementById('emailCopyBtn');
  const emailToast = document.getElementById('emailToast');
  let emailToastTimer = null;

  emailCopyBtn.addEventListener('click', async () => {
    const email = emailCopyBtn.getAttribute('data-email');
    try {
      await navigator.clipboard.writeText(email);
    } catch (err) {
      const tmp = document.createElement('textarea');
      tmp.value = email;
      document.body.appendChild(tmp);
      tmp.select();
      document.execCommand('copy');
      document.body.removeChild(tmp);
    }
    emailToast.setAttribute('data-show', 'true');
    clearTimeout(emailToastTimer);
    emailToastTimer = setTimeout(() => {
      emailToast.setAttribute('data-show', 'false');
    }, 2000);
  });

  /* ---------------- mobile menu ---------------- */
  const burgerBtn = document.getElementById('burgerBtn');
  const mobileLinks = document.getElementById('mobileLinks');

  burgerBtn.addEventListener('click', () => {
    const open = mobileLinks.getAttribute('data-open') === 'true';
    mobileLinks.setAttribute('data-open', open ? 'false' : 'true');
    burgerBtn.setAttribute('aria-expanded', open ? 'false' : 'true');
  });
  mobileLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    mobileLinks.setAttribute('data-open', 'false');
    burgerBtn.setAttribute('aria-expanded', 'false');
  }));

  /* ---------------- init ---------------- */
  setTrack('frontend');
  updateCvLinks('en');
  setTheme('dark');
})();
