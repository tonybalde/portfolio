(() => {
  const html = document.documentElement;

  /* =========================================================
     TRANSLATIONS
  ========================================================= */

  const dict = {
    es: {
      "nav.about": "Quién soy",
      "nav.projects": "Proyectos",
      "nav.contact": "Contacto",
      "nav.cv": "Descargar CV",

      "cv.wordpress": "CV WordPress",
      "cv.frontend": "CV Frontend",

      "switch.caption": "Mostrando:",

      "hero.ctaPrimary": "Ver proyectos",

      "about.eyebrow": "Sobre mí",
      "about.title": "Quién soy",

      "projects.eyebrow": "Trabajo",
      "projects.title": "Proyectos",

      "contact.eyebrow": "Contacto",
      "contact.title": "Contactarme",
      "contact.lead":
        "¿Tenés un proyecto en mente? Contame de qué se trata y te respondo lo antes posible.",
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

      "switch.caption": "Showing:",

      "hero.ctaPrimary": "View projects",

      "about.eyebrow": "About me",
      "about.title": "Who I am",

      "projects.eyebrow": "Work",
      "projects.title": "Projects",

      "contact.eyebrow": "Contact",
      "contact.title": "Get in touch",
      "contact.lead":
        "Have a project in mind? Tell me about it and I'll get back to you as soon as I can.",
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

  /* =========================================================
     FRONTEND / WORDPRESS CONTENT
  ========================================================= */

  const trackContent = {
    frontend: {
      es: {
        heroEyebrow: "Frontend Developer",

        heroTitle:
          "Construyo interfaces que convierten ideas en productos.",

        heroLead:
          "Desarrollo interfaces web y aplicaciones responsive con tecnologías frontend modernas, enfocándome en usabilidad, claridad y código mantenible.",

        aboutP1:
          "Soy Tony Baldessari, desarrollador frontend autodidacta y Analista de Sistemas. Programo desde 2023 y me enfoco en construir interfaces y aplicaciones web modernas, claras y responsive.",

        aboutP2:
          "Trabajo principalmente con React, JavaScript, TypeScript, Tailwind, Git, GitHub y Supabase, incorporando otras herramientas según lo que necesite cada proyecto.",

        skills: [
          "React",
          "JavaScript",
          "TypeScript",
          "Tailwind",
          "Supabase",
          "Git",
          "GitHub",
          "Vite"
        ],

        trackNote:
          "Mostrando proyectos frontend — usá el switch para ver WordPress"
      },

      en: {
        heroEyebrow: "Frontend Developer",

        heroTitle:
          "I build interfaces that turn ideas into products.",

        heroLead:
          "I build responsive web interfaces and applications with modern frontend technologies, focusing on usability, clarity and maintainable code.",

        aboutP1:
          "I'm Tony Baldessari, a self-taught frontend developer and Systems Analyst. I've been coding since 2023, focused on building modern, clear and responsive web interfaces and applications.",

        aboutP2:
          "I work mainly with React, JavaScript, TypeScript, Tailwind, Git, GitHub and Supabase, adding other tools depending on what each project needs.",

        skills: [
          "React",
          "JavaScript",
          "TypeScript",
          "Tailwind",
          "Supabase",
          "Git",
          "GitHub",
          "Vite"
        ],

        trackNote:
          "Showing frontend projects — use the switch to see WordPress"
      }
    },

    wordpress: {
      es: {
        heroEyebrow: "WordPress Developer",

        heroTitle:
          "Creo y mantengo sitios WordPress pensados para funcionar de verdad.",

        heroLead:
          "Diseño, desarrollo, mantengo y optimizo sitios WordPress combinando constructores visuales, diseño responsive y código personalizado cuando el proyecto lo necesita.",

        aboutP1:
          "También trabajo como desarrollador WordPress, creando y manteniendo sitios web para empresas y proyectos que necesitan una plataforma flexible, administrable y estable.",

        aboutP2:
          "Mi stack habitual incluye WordPress, Elementor Pro, Divi, Figma, PHP, JavaScript, HTML, CSS, MySQL y cPanel. También trabajo en mantenimiento, seguridad, performance y resolución de problemas.",

        skills: [
          "WordPress",
          "Elementor Pro",
          "Divi",
          "Figma",
          "PHP",
          "JavaScript",
          "HTML",
          "CSS",
          "MySQL",
          "cPanel"
        ],

        trackNote:
          "Mostrando proyectos WordPress — usá el switch para ver Frontend"
      },

      en: {
        heroEyebrow: "WordPress Developer",

        heroTitle:
          "I build and maintain WordPress sites made to work in the real world.",

        heroLead:
          "I design, develop, maintain and optimize WordPress websites, combining visual builders, responsive design and custom code whenever a project needs it.",

        aboutP1:
          "I also work as a WordPress developer, building and maintaining websites for companies and projects that need a flexible, manageable and reliable platform.",

        aboutP2:
          "My usual stack includes WordPress, Elementor Pro, Divi, Figma, PHP, JavaScript, HTML, CSS, MySQL and cPanel. I also work on maintenance, security, performance and troubleshooting.",

        skills: [
          "WordPress",
          "Elementor Pro",
          "Divi",
          "Figma",
          "PHP",
          "JavaScript",
          "HTML",
          "CSS",
          "MySQL",
          "cPanel"
        ],

        trackNote:
          "Showing WordPress projects — use the switch to see Frontend"
      }
    }
  };

  /* =========================================================
     PROJECTS
  ========================================================= */

  const projects = {
    frontend: [
      {
        featured: true,

        title: "YourUnits",

        tags: [
          "React",
          "Supabase",
          "Tailwind",
          "Vite"
        ],

        previewText: "YourUnits",

        /*
         * Cuando tengamos la captura real podemos poner:
         *
         * image: "images/yourunits-dashboard.webp"
         *
         * Por ahora queda vacío y se muestra el nombre.
         */
        image: "",

        desc: {
          es:
            "Aplicación web para la gestión de propiedades y alquileres, con dashboards diferenciados por rol, contratos, servicios, facturas, pagos y seguimiento de la relación entre propietarios e inquilinos.",

          en:
            "Web application for property and rental management, with role-based dashboards, contracts, utilities, invoices, payments and workflows connecting property owners and tenants."
        },

        /*
         * Después podemos agregar:
         *
         * {
         *   label: {
         *     es: "Ver demo",
         *     en: "Live Demo"
         *   },
         *   url: "https://..."
         * }
         */
        links: []
      }
    ],

    wordpress: [
      {
        featured: true,

        title: "Naaloo.com — Seguridad y mantenimiento",

        tags: [
          "WordPress",
          "Elementor",
          "Security"
        ],

        previewText: "Naaloo",

        image: "",

        desc: {
          es:
            "Mantenimiento y remediación de seguridad en un sitio WordPress en producción, incluyendo limpieza de malware, revisión de plugins, ajustes y tareas de hardening.",

          en:
            "Maintenance and security remediation for a production WordPress website, including malware cleanup, plugin review, fixes and security hardening."
        },

        links: []
      }
    ]
  };

  /* =========================================================
     GENERAL TRANSLATION
  ========================================================= */

  function applyI18n(lang) {
    document
      .querySelectorAll("[data-i18n]")
      .forEach((el) => {
        const key = el.getAttribute("data-i18n");

        if (dict[lang][key] !== undefined) {
          el.textContent = dict[lang][key];
        }
      });

    html.setAttribute("lang", lang);
    html.setAttribute("data-lang", lang);

    document
      .querySelectorAll("[data-lang-btn]")
      .forEach((btn) => {
        btn.setAttribute(
          "aria-pressed",
          btn.getAttribute("data-lang-btn") === lang
            ? "true"
            : "false"
        );
      });
  }

  /* =========================================================
     CV LANGUAGE
  ========================================================= */

  function updateCvLinks(lang) {
    document
      .querySelectorAll("[data-cv-link]")
      .forEach((link) => {
        const track =
          link.getAttribute("data-cv-link");

        link.setAttribute(
          "href",
          `cv/${track}-${lang}.pdf`
        );
      });
  }

  /* =========================================================
     RENDER FRONTEND / WORDPRESS CONTENT
  ========================================================= */

  function renderTrackContent(track, lang) {
    const content =
      trackContent[track][lang];

    document.getElementById(
      "heroEyebrow"
    ).textContent = content.heroEyebrow;

    document.getElementById(
      "heroTitle"
    ).textContent = content.heroTitle;

    document.getElementById(
      "heroLead"
    ).textContent = content.heroLead;

    document.getElementById(
      "aboutP1"
    ).textContent = content.aboutP1;

    document.getElementById(
      "aboutP2"
    ).textContent = content.aboutP2;

    document.getElementById(
      "trackNote"
    ).textContent = content.trackNote;

    document.getElementById(
      "switchCaptionValue"
    ).textContent =
      track === "frontend"
        ? "Frontend"
        : "WordPress";

    /* Skills */

    const skillsList =
      document.getElementById("skillsList");

    skillsList.innerHTML = "";

    content.skills.forEach((skill) => {
      const item =
        document.createElement("span");

      item.textContent = skill;

      skillsList.appendChild(item);
    });
  }

  /* =========================================================
     PROJECT CARDS
  ========================================================= */

  function renderProjects(track, lang) {
    const grid =
      document.getElementById("projectGrid");

    grid.innerHTML = "";

    const trackProjects =
      projects[track];

    /*
     * Si solamente existe un proyecto, como ahora
     * con YourUnits, usamos una card más grande.
     */
    grid.classList.toggle(
      "single-project",
      trackProjects.length === 1
    );

    trackProjects.forEach((project) => {
      const card =
        document.createElement("article");

      card.className = [
        "project-card",
        project.featured
          ? "is-featured"
          : ""
      ]
        .filter(Boolean)
        .join(" ");

      /* Screenshot / preview */

      const preview = project.image
        ? `
          <div class="project-preview">
            <img
              src="${project.image}"
              alt="${project.title}"
            >
          </div>
        `
        : `
          <div class="project-preview">
            <span class="project-preview-placeholder">
              ${project.previewText}
            </span>
          </div>
        `;

      /* Project links */

      const links =
        project.links &&
        project.links.length
          ? `
            <div class="project-links">

              ${project.links
                .map(
                  (link) => `
                    <a
                      href="${link.url}"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ${link.label[lang]}
                    </a>
                  `
                )
                .join("")}

            </div>
          `
          : "";

      /* Complete card */

      card.innerHTML = `
        ${preview}

        <div class="project-content">

          <div class="tag-row">

            ${project.tags
              .map(
                (tag) =>
                  `<span>${tag}</span>`
              )
              .join("")}

          </div>

          <h3>${project.title}</h3>

          <p>
            ${project.desc[lang]}
          </p>

          ${links}

        </div>
      `;

      grid.appendChild(card);
    });
  }

  /* =========================================================
     TRACK SWITCH
  ========================================================= */

  function setTrack(track) {
    html.setAttribute(
      "data-track",
      track
    );

    document
      .querySelectorAll(
        "[data-track-label]"
      )
      .forEach((button) => {
        const active =
          button.getAttribute(
            "data-track-label"
          ) === track;

        button.setAttribute(
          "data-active",
          active
            ? "true"
            : "false"
        );

        button.setAttribute(
          "aria-checked",
          active
            ? "true"
            : "false"
        );
      });

    const lang =
      html.getAttribute("data-lang") ||
      "en";

    renderTrackContent(
      track,
      lang
    );

    renderProjects(
      track,
      lang
    );
  }

  /* =========================================================
     LANGUAGE
  ========================================================= */

  function setLanguage(lang) {
    applyI18n(lang);

    updateCvLinks(lang);

    const track =
      html.getAttribute("data-track") ||
      "frontend";

    renderTrackContent(
      track,
      lang
    );

    renderProjects(
      track,
      lang
    );
  }

  document
    .querySelectorAll("[data-lang-btn]")
    .forEach((btn) => {
      btn.addEventListener(
        "click",
        () => {
          setLanguage(
            btn.getAttribute(
              "data-lang-btn"
            )
          );
        }
      );
    });

  /* =========================================================
     FRONTEND / WORDPRESS SWITCH EVENTS
  ========================================================= */

  document
    .querySelectorAll(".switch-option")
    .forEach((btn) => {
      btn.addEventListener(
        "click",
        () => {
          setTrack(
            btn.getAttribute(
              "data-track-label"
            )
          );
        }
      );
    });

  /* =========================================================
     CV DROPDOWN
  ========================================================= */

  const cvDropdown =
    document.getElementById(
      "cvDropdown"
    );

  const cvBtn =
    document.getElementById(
      "cvBtn"
    );

  cvBtn.addEventListener(
    "click",
    (event) => {
      event.stopPropagation();

      const open =
        cvDropdown.getAttribute(
          "data-open"
        ) === "true";

      cvDropdown.setAttribute(
        "data-open",
        open
          ? "false"
          : "true"
      );

      cvBtn.setAttribute(
        "aria-expanded",
        open
          ? "false"
          : "true"
      );
    }
  );

  cvDropdown.addEventListener(
    "click",
    (event) => {
      event.stopPropagation();
    }
  );

  document.addEventListener(
    "click",
    () => {
      cvDropdown.setAttribute(
        "data-open",
        "false"
      );

      cvBtn.setAttribute(
        "aria-expanded",
        "false"
      );
    }
  );

  document.addEventListener(
    "keydown",
    (event) => {
      if (event.key === "Escape") {
        cvDropdown.setAttribute(
          "data-open",
          "false"
        );

        cvBtn.setAttribute(
          "aria-expanded",
          "false"
        );
      }
    }
  );

  /* =========================================================
     DARK / LIGHT MODE
  ========================================================= */

  const themeToggle =
    document.getElementById(
      "themeToggle"
    );

  const themeIcon =
    document.getElementById(
      "themeIcon"
    );

  const moonPath = `
    <path
      d="M21 12.79A9 9 0 1 1 11.21 3
      7 7 0 0 0 21 12.79z">
    </path>
  `;

  const sunPath = `
    <circle
      cx="12"
      cy="12"
      r="4">
    </circle>

    <path
      d="
        M12 2v2
        M12 20v2
        M4.9 4.9l1.4 1.4
        M17.7 17.7l1.4 1.4
        M2 12h2
        M20 12h2
        M4.9 19.1l1.4-1.4
        M17.7 6.3l1.4-1.4
      ">
    </path>
  `;

  function setTheme(mode) {
    if (mode === "dark") {
      html.setAttribute(
        "data-theme",
        "dark"
      );

      themeToggle.setAttribute(
        "aria-checked",
        "true"
      );

      themeIcon.innerHTML =
        moonPath;

      localStorage.setItem(
        "portfolio-theme",
        "dark"
      );
    } else {
      html.removeAttribute(
        "data-theme"
      );

      themeToggle.setAttribute(
        "aria-checked",
        "false"
      );

      themeIcon.innerHTML =
        sunPath;

      localStorage.setItem(
        "portfolio-theme",
        "light"
      );
    }
  }

  themeToggle.addEventListener(
    "click",
    () => {
      const isDark =
        themeToggle.getAttribute(
          "aria-checked"
        ) === "true";

      setTheme(
        isDark
          ? "light"
          : "dark"
      );
    }
  );

  /* =========================================================
     LOGO → TOP
  ========================================================= */

  document
    .getElementById("logoLink")
    .addEventListener(
      "click",
      (event) => {
        event.preventDefault();

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    );

  /* =========================================================
     CONTACT FORM
  ========================================================= */

  const contactForm =
    document.getElementById(
      "contactForm"
    );

  const contactStatus =
    document.getElementById(
      "contactStatus"
    );

  contactForm.addEventListener(
    "submit",
    (event) => {
      event.preventDefault();

      const name =
        document
          .getElementById("cf-name")
          .value.trim();

      const fromEmail =
        document
          .getElementById("cf-email")
          .value.trim();

      const message =
        document
          .getElementById("cf-message")
          .value.trim();

      const subject =
        `Portfolio contact — ${name}`;

      const body =
        `${message}\n\n—\n${name} (${fromEmail})`;

      const mailto =
        `mailto:tonybaldessari@outlook.com` +
        `?subject=${encodeURIComponent(
          subject
        )}` +
        `&body=${encodeURIComponent(
          body
        )}`;

      window.location.href =
        mailto;

      const lang =
        html.getAttribute(
          "data-lang"
        ) || "en";

      contactStatus.textContent =
        dict[lang][
          "contact.status"
        ];

      contactStatus.setAttribute(
        "data-show",
        "true"
      );

      setTimeout(() => {
        contactStatus.setAttribute(
          "data-show",
          "false"
        );
      }, 4000);
    }
  );

  /* =========================================================
     COPY EMAIL
  ========================================================= */

  const emailCopyBtn =
    document.getElementById(
      "emailCopyBtn"
    );

  const emailToast =
    document.getElementById(
      "emailToast"
    );

  let emailToastTimer = null;

  emailCopyBtn.addEventListener(
    "click",
    async () => {
      const email =
        emailCopyBtn.getAttribute(
          "data-email"
        );

      try {
        await navigator.clipboard.writeText(
          email
        );
      } catch (error) {
        const temporaryTextarea =
          document.createElement(
            "textarea"
          );

        temporaryTextarea.value =
          email;

        document.body.appendChild(
          temporaryTextarea
        );

        temporaryTextarea.select();

        document.execCommand(
          "copy"
        );

        document.body.removeChild(
          temporaryTextarea
        );
      }

      emailToast.setAttribute(
        "data-show",
        "true"
      );

      clearTimeout(
        emailToastTimer
      );

      emailToastTimer =
        setTimeout(() => {
          emailToast.setAttribute(
            "data-show",
            "false"
          );
        }, 2000);
    }
  );

  /* =========================================================
     MOBILE MENU
  ========================================================= */

  const burgerBtn =
    document.getElementById(
      "burgerBtn"
    );

  const mobileLinks =
    document.getElementById(
      "mobileLinks"
    );

  burgerBtn.addEventListener(
    "click",
    () => {
      const open =
        mobileLinks.getAttribute(
          "data-open"
        ) === "true";

      mobileLinks.setAttribute(
        "data-open",
        open
          ? "false"
          : "true"
      );

      burgerBtn.setAttribute(
        "aria-expanded",
        open
          ? "false"
          : "true"
      );
    }
  );

  mobileLinks
    .querySelectorAll("a")
    .forEach((link) => {
      link.addEventListener(
        "click",
        () => {
          mobileLinks.setAttribute(
            "data-open",
            "false"
          );

          burgerBtn.setAttribute(
            "aria-expanded",
            "false"
          );
        }
      );
    });

  /* =========================================================
     INIT
  ========================================================= */

  const savedTheme =
    localStorage.getItem(
      "portfolio-theme"
    );

  setTheme(
    savedTheme || "dark"
  );

  setLanguage("en");

  setTrack("frontend");
})();