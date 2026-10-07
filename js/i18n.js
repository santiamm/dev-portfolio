/* =============================================================
   i18n.js — Language toggle system (EN / ES)
   
   Contract:
   - Elements with [data-i18n="key"] get their textContent replaced.
   - Elements with [data-i18n-aria="key"] get their aria-label replaced.
   - document.documentElement.lang is kept in sync.
   - The footer year is injected once on load (not a translation key).
   
   Phase 2: fill in the empty string values below.
============================================================= */

'use strict';

// ------------------------------------------------------------------
// Translation strings
// Keys are intentionally empty — filled in Phase 2.
// ------------------------------------------------------------------

const translations = {
  en: {
    // Language toggle label (shows target language)
    lang_toggle:      'ES',
    aria_lang_toggle: 'Switch to Spanish',   // "Switch to Spanish" / "Switch to English"

    // Hero
    hero_name:      'Jhoseph Mendez',
    hero_role:      'Systems Engineering Student · Web Developer',   // "Systems Engineering Student · Web Developer"
    hero_about:     'Hi, I\'m Jhoseph — a systems engineering student who builds full web applications, mostly with PHP/Laravel, JavaScript, and Python. I like understanding a project end to end, from the database to the interface, and I\'m currently branching out into cloud and DevOps. Take a look at what I\'ve built below.',   // presentation paragraph (includes greeting)
    hero_cta:       'See my work',
    cv_download:    'Download CV',
    hero_photo_alt: 'Portrait of Jhoseph',

    // Skills section
    skills_heading:       'Skills',
    skills_subheading:    'Technologies I\'ve worked with',
    skills_cat_languages: 'Languages & Core',   // "Languages & Core"
    skills_cat_databases: 'Databases',   // "Databases"
    skills_cat_cloud:     'Cloud & DevOps (learning)',   // "Cloud & DevOps"
    skills_cat_other:     'Other Tools',   // "Other Tools"

    // Projects section
    projects_heading:    'Projects',
    projects_subheading: 'A few things I\'ve built',
    projects_view_code:  'View code',
    projects_view_demo:  '',   // no demo for any project — key kept for future use

    // Project: Booking system
    project_booking_title: 'Appointment Booking System',
    project_booking_desc:  'Small businesses often lose time — and clients — juggling appointments by phone or messages, with double bookings and mixed-up schedules. This system lets clients see real availability and book their own appointment in seconds, with no back-and-forth needed.',

    // Project: StockSync
    project_stocksync_title: 'Inventory Management from Excel',
    project_stocksync_desc:  'Many small businesses still track their inventory in Excel — and it works, until it doesn\'t. This tool lets them keep using the spreadsheets they already have, while turning that data into a clear, organized view of their stock.',

    // Project: Literacy app
    project_literacy_title: 'Digital Literacy Platform',
    project_literacy_desc:  'Scammers increasingly target older adults — fake calls, phishing messages, fraudulent links, misleading ads. This platform helps them recognize and avoid these threats, so they can live their digital life with confidence instead of fear.',

    // Contact section
    contact_heading:      'Contact',
    contact_subheading:   'Feel free to reach out',
    contact_email_label:  'Send me an email',
    contact_social_label: '',

    // ARIA labels for floating icon links
    aria_github:   'Visit my GitHub profile',
    aria_linkedin: 'Visit my LinkedIn profile',
    aria_email:    'Send me an email',

    // Footer ("Built by [name]" — year appended by JS)
    footer_built_by: 'Built by Jhoseph Mendez ·',
  },

  es: {
    lang_toggle:      'EN',
    aria_lang_toggle: 'Cambiar a inglés',

    hero_name:      'Jhoseph Mendez',
    hero_role:      'Estudiante de Ingeniería de Sistemas · Desarrollador Web',
    hero_about:     'Hola, soy Jhoseph — estudiante de ingeniería de sistemas que construye aplicaciones web completas, principalmente con PHP/Laravel, JavaScript y Python. Me gusta entender un proyecto de punta a punta, desde la base de datos hasta la interfaz, y actualmente estoy incursionando en cloud y DevOps. Échale un vistazo a lo que he construido más abajo.',
    hero_cta:       'Ver mis proyectos',
    cv_download:    'Descargar CV',
    hero_photo_alt: 'Retrato de Jhoseph',

    skills_heading:       'Habilidades',
    skills_subheading:    'Tecnologías con las que he trabajado',
    skills_cat_languages: 'Lenguajes y base',
    skills_cat_databases: 'Bases de datos',
    skills_cat_cloud:     'Cloud y DevOps (aprendiendo)',
    skills_cat_other:     'Otras herramientas',

    projects_heading:    'Proyectos',
    projects_subheading: 'Algunas cosas que he construido',
    projects_view_code:  'Ver código',
    projects_view_demo:  '',

    project_booking_title: 'Sistema de Reservas y Citas',
    project_booking_desc:  'Muchos pequeños negocios pierden tiempo — y clientes — coordinando citas por teléfono o mensajes, con doble reservas y horarios confusos. Este sistema permite que los clientes vean la disponibilidad real y agenden su propia cita en segundos, sin ida y vuelta.',

    project_stocksync_title: 'Gestión de Inventario desde Excel',
    project_stocksync_desc:  'Muchos pequeños negocios siguen manejando su inventario en Excel, y funciona, hasta que deja de ser suficiente. Esta herramienta les permite seguir usando las hojas de cálculo que ya tienen, mientras convierte esa información en una vista clara y organizada de su stock.',

    project_literacy_title: 'Plataforma de Alfabetización Digital',
    project_literacy_desc:  'Los adultos mayores son cada vez más blanco de estafas: llamadas falsas, mensajes de phishing, links fraudulentos, anuncios engañosos. Esta plataforma les ayuda a reconocer y evitar estas amenazas, para que puedan vivir su vida digital con confianza en vez de miedo.',

    contact_heading:      'Contacto',
    contact_subheading:   'Siéntete libre de escribirme',
    contact_email_label:  'Envíame un correo',
    contact_social_label: '',

    aria_github:   'Visita mi perfil de GitHub',
    aria_linkedin: 'Visita mi perfil de LinkedIn',
    aria_email:    'Envíame un correo',

    footer_built_by: 'Creado por Jhoseph Mendez ·',
  },
};


// ------------------------------------------------------------------
// State
// ------------------------------------------------------------------

let currentLang = 'en';


// ------------------------------------------------------------------
// Core: apply a language to the page
// ------------------------------------------------------------------

/**
 * Switches the active language and updates all translatable elements.
 * @param {'en'|'es'} lang
 */
function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;

  // 1. Sync <html lang="...">
  document.documentElement.lang = lang;

  // 2. Update all [data-i18n] text nodes
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    const text = translations[lang][key];
    if (text !== undefined) {
      el.textContent = text;
    }
  });

  // 3. Update all [data-i18n-aria] aria-label attributes
  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const key = el.dataset.i18nAria;
    const text = translations[lang][key];
    if (text !== undefined) {
      el.setAttribute('aria-label', text);
    }
  });

  // 4. Update all [data-i18n-alt] alt attributes
  document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
    const key = el.dataset.i18nAlt;
    const text = translations[lang][key];
    if (text !== undefined) {
      el.setAttribute('alt', text);
    }
  });

  // 5. Persist choice across page loads
  localStorage.setItem('preferred-lang', lang);
}


// ------------------------------------------------------------------
// Footer year (not a translation — injected once)
// ------------------------------------------------------------------

function injectFooterYear() {
  const yearEl = document.getElementById('footer-year');
  if (yearEl) {
    yearEl.textContent = ` ${new Date().getFullYear()}`;
  }
}


// ------------------------------------------------------------------
// Toggle handler
// ------------------------------------------------------------------

function toggleLanguage() {
  const next = currentLang === 'en' ? 'es' : 'en';
  setLanguage(next);
}


// ------------------------------------------------------------------
// Init
// ------------------------------------------------------------------

function init() {
  // Inject static footer year
  injectFooterYear();

  // Wire up the toggle button
  const toggleBtn = document.getElementById('lang-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleLanguage);
  }

  // Restore persisted language preference, falling back to 'en'
  const saved = localStorage.getItem('preferred-lang');
  const initial = (saved === 'en' || saved === 'es') ? saved : 'en';
  setLanguage(initial);
}

// Run after DOM is ready
document.addEventListener('DOMContentLoaded', init);
