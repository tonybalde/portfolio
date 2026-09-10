(() => {
  const html = document.documentElement;

  let galleryTimer = null;

  /* =====================================================
     TRANSLATIONS
  ===================================================== */

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

      "contact.status":
        "Abriendo tu cliente de correo…",

      "footer.text":
        "© 2026 Tony Baldessari",

      "footer.email":
        "Email",

      "footer.emailCopied":
        "Correo electrónico copiado"
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

      "contact.status":
        "Opening your email client…",

      "footer.text":
        "© 2026 Tony Baldessari",

      "footer.email":
        "Email",

      "footer.emailCopied":
        "Email copied"
    }
  };


  /* =====================================================
     TRACK CONTENT
  ===================================================== */

  const trackContent = {
    frontend: {
      es: {
        heroEyebrow:
          "Frontend Developer",

        heroTitle:
          "Construyo interfaces que convierten ideas en productos.",

        heroLead:
          "Desarrollo interfaces web y aplicaciones responsive con tecnologías frontend modernas, enfocándome en usabilidad, claridad y código mantenible.",

        aboutP1:
          "Soy Tony Baldessari, desarrollador frontend autodidacta y Analista de Sistemas. Me enfoco en construir interfaces y aplicaciones web modernas, claras y responsive.",

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
        heroEyebrow:
          "Frontend Developer",

        heroTitle:
          "I build interfaces that turn ideas into products.",

        heroLead:
          "I build responsive web interfaces and applications with modern frontend technologies, focusing on usability, clarity and maintainable code.",

        aboutP1:
          "I'm Tony Baldessari, a self-taught frontend developer and Systems Analyst focused on building modern, clear and responsive web interfaces and applications.",

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
        heroEyebrow:
          "WordPress Developer",

        heroTitle:
          "Creo y mantengo sitios WordPress pensados para funcionar de verdad.",

        heroLead:
          "Diseño, desarrollo, mantengo y optimizo sitios WordPress combinando constructores visuales, diseño responsive y código personalizado cuando el proyecto lo necesita.",

        aboutP1:
          "También trabajo como desarrollador WordPress, creando y manteniendo sitios web para empresas, organizaciones e instituciones.",

        aboutP2:
          "Trabajo con WordPress, Elementor Pro, Divi, PHP, JavaScript, HTML, CSS, MySQL, cPanel y entornos Linux, además de migraciones, mantenimiento, seguridad y resolución de problemas.",

        skills: [
          "WordPress",
          "Elementor Pro",
          "Divi",
          "PHP",
          "JavaScript",
          "HTML",
          "CSS",
          "MySQL",
          "cPanel",
          "Linux"
        ],

        trackNote:
          "Mostrando proyectos WordPress — usá el switch para ver Frontend"
      },

      en: {
        heroEyebrow:
          "WordPress Developer",

        heroTitle:
          "I build and maintain WordPress sites made to work in the real world.",

        heroLead:
          "I design, develop, maintain and optimize WordPress websites, combining visual builders, responsive design and custom code whenever a project needs it.",

        aboutP1:
          "I also work as a WordPress developer, building and maintaining websites for companies, organizations and institutions.",

        aboutP2:
          "I work with WordPress, Elementor Pro, Divi, PHP, JavaScript, HTML, CSS, MySQL, cPanel and Linux environments, as well as migrations, maintenance, security and troubleshooting.",

        skills: [
          "WordPress",
          "Elementor Pro",
          "Divi",
          "PHP",
          "JavaScript",
          "HTML",
          "CSS",
          "MySQL",
          "cPanel",
          "Linux"
        ],

        trackNote:
          "Showing WordPress projects — use the switch to see Frontend"
      }
    }
  };


  /* =====================================================
     PROJECTS
  ===================================================== */

  const projects = {
    frontend: [
      {
        featured: true,

        title:
          "YourUnits",

        subtitle: {
          es:
            "Gestión de propiedades y alquileres",

          en:
            "Property & Rental Management"
        },

        tags: [
          "React",
          "Supabase",
          "Tailwind",
          "Vite"
        ],

        description: {
          es:
            "Una aplicación web para la gestión de propiedades y alquileres, con dashboards diferenciados por rol, contratos, servicios, facturas, pagos y herramientas para administrar la relación entre propietarios e inquilinos.",

          en:
            "A web application for property and rental management, with role-based dashboards, contracts, utilities, invoices, payments and tools for managing the relationship between property owners and tenants."
        },

        features: {
          es: [
            "Gestión de complejos y propiedades individuales",
            "Administración de contratos e inquilinos",
            "Servicios, facturas y pagos",
            "Dashboards para propietarios e inquilinos",
            "Notificaciones y recordatorios",
            "Interfaz moderna, responsive y fácil de usar"
          ],

          en: [
            "Complex and individual property management",
            "Contract and tenant administration",
            "Utilities, invoices and payments",
            "Dashboards for owners and tenants",
            "Notifications and reminders",
            "Modern, responsive and easy-to-use interface"
          ]
        },

        images: [
          {
            src:
              "assets/yourunits/owner-dashboard.png",

            label: {
              es:
                "Dashboard Propietario",

              en:
                "Owner Dashboard"
            }
          },

          {
            src:
              "assets/yourunits/tenant-dashboard.png",

            label: {
              es:
                "Dashboard Inquilino",

              en:
                "Tenant Dashboard"
            }
          },

          {
            src:
              "assets/yourunits/login.png",

            label: {
              es:
                "Inicio de sesión",

              en:
                "Sign in"
            },

            className:
              "login-thumb"
          }
        ],

        links: [
          {
            type:
              "website",

            url:
              "https://www.yourunits.com",

            label: {
              es:
                "Visitar sitio web",

              en:
                "Visit website"
            }
          }
        ]
      }
    ],


    /* =====================================================
       WORDPRESS PROJECTS
    ===================================================== */

    wordpress: [
      {
        title:
          "AAENDE",

        subtitle: {
          es:
            "Asociación Argentina de Ensayos No Destructivos y Estructurales",

          en:
            "Argentine Association for Non-Destructive and Structural Testing"
        },

        image:
          "assets/wordpress/aaende.png",

        tags: [
          "WordPress",
          "Elementor Pro",
          "Responsive"
        ],

        description: {
          es:
            "Participé en el desarrollo del sitio web de AAENDE desde cero utilizando WordPress y Elementor Pro, creando y adaptando sus páginas y diseños responsive.",

          en:
            "I helped build the AAENDE website from scratch using WordPress and Elementor Pro, creating and adapting its pages and responsive layouts."
        },

        url:
          "https://aaende.org.ar/"
      },


      {
        title:
          "Fundación Balseiro",

        subtitle: {
          es:
            "Sitio institucional y migración de hosting",

          en:
            "Institutional website and hosting migration"
        },

        image:
          "assets/wordpress/fundacion-balseiro.png",

        tags: [
          "WordPress",
          "Elementor Pro",
          "Hosting Migration"
        ],

        description: {
          es:
            "Participé en la reconstrucción del sitio web de Fundación Balseiro, realizando la migración desde el hosting anterior, reinstalando WordPress y reconstruyendo el sitio con Elementor Pro.",

          en:
            "I helped rebuild the Fundación Balseiro website, migrating it from its previous hosting environment, reinstalling WordPress and rebuilding the site with Elementor Pro."
        },

        url:
          "https://fundacionbalseiro.org/"
      },


      {
        title:
          "WiN Global",

        subtitle: {
          es:
            "Soporte y personalización WordPress",

          en:
            "WordPress support and customization"
        },

        image:
          "assets/wordpress/win-global.png",

        tags: [
          "WordPress",
          "PHP",
          "CSS",
          "HTML",
          "Linux"
        ],

        description: {
          es:
            "Brindo soporte técnico y desarrollo para WiN Global, personalizando el theme existente y modificando archivos PHP, CSS y HTML directamente desde la terminal Linux del hosting.",

          en:
            "I provide technical support and development for WiN Global, customizing the existing theme and modifying PHP, CSS and HTML directly through the Linux terminal on the hosting environment."
        },

        url:
          "https://win-global.org/"
      },


      {
        title:
          "IB50K",

        subtitle: {
          es:
            "Sitio web del concurso IB50K",

          en:
            "IB50K competition website"
        },

        image:
          "assets/wordpress/ib50k.png",

        tags: [
          "WordPress",
          "Divi",
          "Responsive"
        ],

        description: {
          es:
            "Desarrollé el sitio web de IB50K desde cero utilizando WordPress y el constructor visual Divi, creando sus páginas, layouts y experiencia responsive.",

          en:
            "I developed the IB50K website from scratch using WordPress and the Divi visual builder, creating its pages, layouts and responsive experience."
        },

        url:
          "https://ib50k.ib.edu.ar/"
      }
    ]
  };


  /* =====================================================
     I18N
  ===================================================== */

  function applyI18n(lang) {
    document
      .querySelectorAll("[data-i18n]")
      .forEach((element) => {
        const key =
          element.getAttribute(
            "data-i18n"
          );

        if (
          dict[lang] &&
          dict[lang][key] !== undefined
        ) {
          element.textContent =
            dict[lang][key];
        }
      });


    html.setAttribute(
      "lang",
      lang
    );

    html.setAttribute(
      "data-lang",
      lang
    );


    document
      .querySelectorAll("[data-lang-btn]")
      .forEach((button) => {
        const active =
          button.getAttribute(
            "data-lang-btn"
          ) === lang;

        button.setAttribute(
          "aria-pressed",
          active
            ? "true"
            : "false"
        );
      });
  }


  /* =====================================================
     CV
  ===================================================== */
  function updateCvLinks(lang) {
    document
      .querySelectorAll("[data-cv-link]")
      .forEach((link) => {
        const track =
          link.getAttribute(
            "data-cv-link"
          );

        link.setAttribute(
          "href",
          `/assets/cv/tony-baldessari-${track}-${lang}.pdf`
        );
      });
  }


  /* =====================================================
     TRACK CONTENT
  ===================================================== */

  function renderTrackContent(
    track,
    lang
  ) {
    const content =
      trackContent[track][lang];


    document.getElementById(
      "heroEyebrow"
    ).textContent =
      content.heroEyebrow;


    document.getElementById(
      "heroTitle"
    ).textContent =
      content.heroTitle;


    document.getElementById(
      "heroLead"
    ).textContent =
      content.heroLead;


    document.getElementById(
      "aboutP1"
    ).textContent =
      content.aboutP1;


    document.getElementById(
      "aboutP2"
    ).textContent =
      content.aboutP2;


    document.getElementById(
      "trackNote"
    ).textContent =
      content.trackNote;


    document.getElementById(
      "switchCaptionValue"
    ).textContent =
      track === "frontend"
        ? "Frontend"
        : "WordPress";


    const skillsList =
      document.getElementById(
        "skillsList"
      );


    skillsList.innerHTML =
      "";


    content.skills.forEach(
      (skill) => {
        const span =
          document.createElement(
            "span"
          );

        span.textContent =
          skill;

        skillsList.appendChild(
          span
        );
      }
    );
  }


  /* =====================================================
     FEATURED PROJECT - YOURUNITS
  ===================================================== */

  function renderFeaturedProject(
    project,
    lang
  ) {
    const article =
      document.createElement(
        "article"
      );


    article.className =
      "project-card featured-project";


    const featuresHTML =
      project.features[lang]
        .map(
          feature =>
            `<li>${feature}</li>`
        )
        .join("");


    const thumbsHTML =
      project.images
        .map(
          (image, index) => `
            <button
              class="
                gallery-thumb
                ${index === 0 ? "active" : ""}
                ${image.className || ""}
              "
              type="button"
              data-gallery-index="${index}"
            >
              <img
                src="${image.src}"
                alt="${image.label[lang]}"
              >

              <span class="gallery-thumb-label">
                ${image.label[lang]}
              </span>
            </button>
          `
        )
        .join("");


    const dotsHTML =
      project.images
        .map(
          (image, index) => `
            <button
              class="
                gallery-dot
                ${index === 0 ? "active" : ""}
              "
              type="button"
              data-gallery-dot="${index}"
              aria-label="${image.label[lang]}"
            ></button>
          `
        )
        .join("");


    article.innerHTML = `
      <div class="project-gallery">

        <div class="gallery-browser">

          <div class="gallery-browser-bar">
            <span class="browser-dot"></span>
            <span class="browser-dot"></span>
            <span class="browser-dot"></span>
          </div>


          <div class="gallery-stage">

            <img
              class="gallery-main-image"
              src="${project.images[0].src}"
              alt="${project.images[0].label[lang]}"
            >


            <button
              class="gallery-arrow prev"
              type="button"
              aria-label="Previous image"
            >
              ‹
            </button>


            <button
              class="gallery-arrow next"
              type="button"
              aria-label="Next image"
            >
              ›
            </button>

          </div>

        </div>


        <div class="gallery-thumbnails">
          ${thumbsHTML}
        </div>


        <div class="gallery-dots">
          ${dotsHTML}
        </div>

      </div>


      <div class="project-info">

        <div class="tag-row">

          ${project.tags
            .map(
              tag =>
                `<span>${tag}</span>`
            )
            .join("")
          }

        </div>


        <h3>
          ${project.title}
        </h3>


        <p class="project-subtitle">
          ${project.subtitle[lang]}
        </p>


        <p class="project-description">
          ${project.description[lang]}
        </p>


        <ul class="project-features">
          ${featuresHTML}
        </ul>


        <div class="project-links">

          <a
            class="project-link primary"
            href="${project.links[0].url}"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="project-link-icon">
              ↗
            </span>

            <span>
              ${project.links[0].label[lang]}
            </span>
          </a>

        </div>

      </div>
    `;


    activateGallery(
      article,
      project,
      lang
    );


    return article;
  }


  /* =====================================================
     YOURUNITS SLIDER
  ===================================================== */

  function activateGallery(
    article,
    project,
    lang
  ) {
    let currentIndex =
      0;


    const mainImage =
      article.querySelector(
        ".gallery-main-image"
      );


    const thumbs =
      article.querySelectorAll(
        ".gallery-thumb"
      );


    const dots =
      article.querySelectorAll(
        ".gallery-dot"
      );


    const prev =
      article.querySelector(
        ".gallery-arrow.prev"
      );


    const next =
      article.querySelector(
        ".gallery-arrow.next"
      );


    function showSlide(index) {
      if (index < 0) {
        index =
          project.images.length - 1;
      }


      if (
        index >=
        project.images.length
      ) {
        index =
          0;
      }


      currentIndex =
        index;


      const image =
        project.images[
          currentIndex
        ];


      mainImage.src =
        image.src;


      mainImage.alt =
        image.label[lang];


      thumbs.forEach(
        (thumb, thumbIndex) => {
          thumb.classList.toggle(
            "active",
            thumbIndex ===
              currentIndex
          );
        }
      );


      dots.forEach(
        (dot, dotIndex) => {
          dot.classList.toggle(
            "active",
            dotIndex ===
              currentIndex
          );
        }
      );
    }


    function startAutoplay() {
      clearInterval(
        galleryTimer
      );


      if (
        window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches
      ) {
        return;
      }


      galleryTimer =
        setInterval(
          () => {
            showSlide(
              currentIndex + 1
            );
          },
          2000
        );
    }


    function resetAutoplay() {
      startAutoplay();
    }


    prev.addEventListener(
      "click",
      () => {
        showSlide(
          currentIndex - 1
        );

        resetAutoplay();
      }
    );


    next.addEventListener(
      "click",
      () => {
        showSlide(
          currentIndex + 1
        );

        resetAutoplay();
      }
    );


    thumbs.forEach(
      thumb => {
        thumb.addEventListener(
          "click",
          () => {
            showSlide(
              Number(
                thumb.dataset.galleryIndex
              )
            );

            resetAutoplay();
          }
        );
      }
    );


    dots.forEach(
      dot => {
        dot.addEventListener(
          "click",
          () => {
            showSlide(
              Number(
                dot.dataset.galleryDot
              )
            );

            resetAutoplay();
          }
        );
      }
    );


    article.addEventListener(
      "mouseenter",
      () => {
        clearInterval(
          galleryTimer
        );
      }
    );


    article.addEventListener(
      "mouseleave",
      () => {
        startAutoplay();
      }
    );


    startAutoplay();
  }


  /* =====================================================
     WORDPRESS PROJECT CARD
  ===================================================== */

  function renderWordPressProject(
    project,
    lang
  ) {
    const article =
      document.createElement(
        "article"
      );


    article.className =
      "project-card wordpress-project";


    article.innerHTML = `
      <div class="wordpress-project-image">

        <img
          src="${project.image}"
          alt="${project.title}"
          loading="lazy"
        >

      </div>


      <div class="wordpress-project-content">

        <h3>
          ${project.title}
        </h3>


        <p class="wordpress-project-subtitle">
          ${project.subtitle[lang]}
        </p>


        <div class="tag-row">

          ${project.tags
            .map(
              tag =>
                `<span>${tag}</span>`
            )
            .join("")
          }

        </div>


        <p class="wordpress-project-description">
          ${project.description[lang]}
        </p>


        <div class="wordpress-project-footer">

          <a
            class="project-link wordpress-link"
            href="${project.url}"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              ${
                lang === "es"
                  ? "Visitar sitio web"
                  : "Visit website"
              }
            </span>

            <span>
              ↗
            </span>
          </a>

        </div>

      </div>
    `;


    return article;
  }


  /* =====================================================
     PROJECT RENDER
  ===================================================== */

  function renderProjects(
    track,
    lang
  ) {
    clearInterval(
      galleryTimer
    );


    const grid =
      document.getElementById(
        "projectGrid"
      );


    grid.innerHTML =
      "";


    grid.classList.toggle(
      "wordpress-grid",
      track === "wordpress"
    );


    projects[track].forEach(
      project => {
        let element;


        if (
          track === "frontend" &&
          project.featured
        ) {
          element =
            renderFeaturedProject(
              project,
              lang
            );
        }

        else {
          element =
            renderWordPressProject(
              project,
              lang
            );
        }


        grid.appendChild(
          element
        );
      }
    );
  }


  /* =====================================================
     TRACK SWITCH
  ===================================================== */

  function setTrack(track) {
    html.setAttribute(
      "data-track",
      track
    );


    document
      .querySelectorAll(
        "[data-track-label]"
      )
      .forEach(
        button => {
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
        }
      );


    const lang =
      html.getAttribute(
        "data-lang"
      ) || "en";


    renderTrackContent(
      track,
      lang
    );


    renderProjects(
      track,
      lang
    );
  }


  /* =====================================================
     LANGUAGE
  ===================================================== */

  function setLanguage(lang) {
    applyI18n(
      lang
    );


    updateCvLinks(
      lang
    );


    const track =
      html.getAttribute(
        "data-track"
      ) || "frontend";


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
    .querySelectorAll(
      "[data-lang-btn]"
    )
    .forEach(
      button => {
        button.addEventListener(
          "click",
          () => {
            setLanguage(
              button.getAttribute(
                "data-lang-btn"
              )
            );
          }
        );
      }
    );


  document
    .querySelectorAll(
      ".switch-option"
    )
    .forEach(
      button => {
        button.addEventListener(
          "click",
          () => {
            setTrack(
              button.getAttribute(
                "data-track-label"
              )
            );
          }
        );
      }
    );


  /* =====================================================
     CV DROPDOWN
  ===================================================== */

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
    event => {
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
    event => {
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
    event => {
      if (
        event.key === "Escape"
      ) {
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


  /* =====================================================
     THEME
  ===================================================== */

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
      d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
    ></path>
  `;


  const sunPath = `
    <circle
      cx="12"
      cy="12"
      r="4"
    ></circle>

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
      "
    ></path>
  `;


  function setTheme(mode) {
    if (
      mode === "dark"
    ) {
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
    }

    else {
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


  /* =====================================================
     LOGO
  ===================================================== */

  document
    .getElementById(
      "logoLink"
    )
    .addEventListener(
      "click",
      event => {
        event.preventDefault();


        window.scrollTo({
          top:
            0,

          behavior:
            "smooth"
        });
      }
    );



   /* =====================================================
     CONTACT FORM - RESEND / VERCEL / TURNSTILE / HONEYPOT
  ===================================================== */

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
    async event => {
      event.preventDefault();

      const name =
        document
          .getElementById(
            "cf-name"
          )
          .value
          .trim();

      const fromEmail =
        document
          .getElementById(
            "cf-email"
          )
          .value
          .trim();

      const message =
        document
          .getElementById(
            "cf-message"
          )
          .value
          .trim();

      /* -----------------------------------------------
         HONEYPOT
      ------------------------------------------------ */

      const website =
        document
          .getElementById(
            "cf-website"
          )
          ?.value
          ?.trim() || "";

      const lang =
        html.getAttribute(
          "data-lang"
        ) || "en";

      const submitButton =
        contactForm.querySelector(
          'button[type="submit"]'
        );

      /* -----------------------------------------------
         REQUIRED FIELDS
      ------------------------------------------------ */

      if (
        !name ||
        !fromEmail ||
        !message
      ) {
        contactStatus.textContent =
          lang === "es"
            ? "Completá todos los campos."
            : "Please complete all fields.";

        contactStatus.setAttribute(
          "data-show",
          "true"
        );

        return;
      }

      /* -----------------------------------------------
         TURNSTILE TOKEN
      ------------------------------------------------ */

      const turnstileTokenInput =
        contactForm.querySelector(
          '[name="cf-turnstile-response"]'
        );

      const turnstileToken =
        turnstileTokenInput
          ?.value
          ?.trim();

      if (!turnstileToken) {
        contactStatus.textContent =
          lang === "es"
            ? "Completá la verificación de seguridad."
            : "Please complete the security verification.";

        contactStatus.setAttribute(
          "data-show",
          "true"
        );

        return;
      }

      /* -----------------------------------------------
         DISABLE BUTTON
      ------------------------------------------------ */

      if (submitButton) {
        submitButton.disabled =
          true;

        submitButton.textContent =
          lang === "es"
            ? "Enviando..."
            : "Sending...";
      }

      contactStatus.setAttribute(
        "data-show",
        "false"
      );

      /* -----------------------------------------------
         SEND MESSAGE
      ------------------------------------------------ */

      try {
        const response =
          await fetch(
            "/api/contact",
            {
              method:
                "POST",

              headers: {
                "Content-Type":
                  "application/json"
              },

              body:
                JSON.stringify({
                  name,
                  email:
                    fromEmail,
                  message,
                  lang,
                  turnstileToken,
                  website
                })
            }
          );

        const result =
          await response.json();

        if (!response.ok) {
          throw new Error(
            result.error ||
              "Unable to send message"
          );
        }

        /* -----------------------------------------------
           SUCCESS
        ------------------------------------------------ */

        contactStatus.textContent =
          lang === "es"
            ? "¡Mensaje enviado correctamente!"
            : "Message sent successfully!";

        contactStatus.setAttribute(
          "data-show",
          "true"
        );

        contactForm.reset();

        if (
          typeof turnstile !==
          "undefined"
        ) {
          turnstile.reset();
        }
      }

      catch (error) {
        console.error(
          "Contact form error:",
          error
        );

        contactStatus.textContent =
          lang === "es"
            ? "No se pudo enviar el mensaje. Intentá nuevamente."
            : "The message could not be sent. Please try again.";

        contactStatus.setAttribute(
          "data-show",
          "true"
        );

        if (
          typeof turnstile !==
          "undefined"
        ) {
          turnstile.reset();
        }
      }

      finally {
        /* -----------------------------------------------
           RESTORE BUTTON
        ------------------------------------------------ */

        if (submitButton) {
          submitButton.disabled =
            false;

          submitButton.textContent =
            lang === "es"
              ? "Enviar mensaje"
              : "Send message";
        }

        setTimeout(
          () => {
            contactStatus.setAttribute(
              "data-show",
              "false"
            );
          },
          6000
        );
      }
    }
  );
  /* =====================================================
     COPY EMAIL
  ===================================================== */

  const emailCopyBtn =
    document.getElementById(
      "emailCopyBtn"
    );


  const emailToast =
    document.getElementById(
      "emailToast"
    );


  let emailToastTimer =
    null;


  emailCopyBtn.addEventListener(
    "click",
    async () => {
      const email =
        emailCopyBtn.getAttribute(
          "data-email"
        );


      try {
        await navigator
          .clipboard
          .writeText(
            email
          );
      }

      catch {
        const textarea =
          document.createElement(
            "textarea"
          );


        textarea.value =
          email;


        document.body.appendChild(
          textarea
        );


        textarea.select();


        document.execCommand(
          "copy"
        );


        document.body.removeChild(
          textarea
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
        setTimeout(
          () => {
            emailToast.setAttribute(
              "data-show",
              "false"
            );
          },
          2000
        );
    }
  );


  /* =====================================================
     MOBILE MENU
  ===================================================== */

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
    .forEach(
      link => {
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
      }
    );


  /* =====================================================
     INIT
  ===================================================== */

  const savedTheme =
    localStorage.getItem(
      "portfolio-theme"
    );


  setTheme(
    savedTheme ||
    "dark"
  );


  setLanguage(
    "en"
  );


  setTrack(
    "frontend"
  );

})();