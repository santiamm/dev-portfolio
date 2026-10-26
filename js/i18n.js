/* =============================================================
   i18n.js — Language toggle system (EN / ES)

   Contract:
   - Elements with [data-i18n="key"] get their textContent replaced.
   - Elements with [data-i18n-aria="key"] get their aria-label replaced.
   - Elements with [data-i18n-alt="key"] get their alt replaced.
   - document.documentElement.lang is kept in sync.
   - First visit: language follows the browser (Spanish → ES, else EN).
     After that, the visitor's choice is remembered.
============================================================= */

'use strict';

// ------------------------------------------------------------------
// Translation strings
// ------------------------------------------------------------------

const translations = {
  en: {
    // Language toggle label (shows target language)
    lang_toggle:      'ES',
    aria_lang_toggle: 'Switch to Spanish',

    // Hero
    hero_name:      'Jhoseph Mendez',
    hero_role:      'Systems Development Technology student · IT support & web',
    hero_about:     'Hi, I\'m Jhoseph, a 6th-semester student of Systems Development Technology at UTS (Bucaramanga, Colombia). My projects are academic: I define what the system has to do and its rules, use AI tools to write the code, and test that it works. I completed IBM\'s "Introduction to DevOps" and I\'m continuing the DevOps program on Coursera. I\'m looking for IT support, customer service or warehouse roles, on-site or remote. English: B1 certified.',
    hero_cta:       'See my projects',
    cv_download:    'Download CV (ES)',
    hero_photo_alt: 'Portrait of Jhoseph',

    // Skills section
    skills_heading:       'Skills',
    skills_subheading:    'Tools I\'ve used at university and in my projects, at an academic level.',
    skills_cat_languages: 'Languages',
    skills_cat_databases: 'Databases',
    skills_cat_cloud:     'Cloud & DevOps (learning)',
    skills_cat_other:     'Frameworks & tools',
    skills_cat_support:   'Support & work',
    skill_customer_service: 'Customer service',
    skill_it_support:       'Tier 1 user support',
    skill_linux:            'Linux (command line)',
    skill_excel:            'Excel (intermediate)',
    skill_english:          'English B1',

    // Projects section
    projects_heading:    'Projects',
    projects_subheading: 'Academic projects built with AI assistance: I set the rules, the AI helped write the code, and I tested it.',
    projects_view_code:  'View code',
    projects_note:       'More class projects on my GitHub.',
    project_status_done:     'Academic project',
    project_status_progress: 'Degree project · in progress',
    aria_project_tags:       'Technologies used',

    // Project: StockSync
    project_stocksync_title: 'StockSync: warehouse inventory',
    project_stocksync_desc:  'Web app to manage the inventory of a small warehouse: products by category, stock in, out and adjustments with user and date, low-stock alerts, and Excel import/export. It blocks deletions that would lose history and never lets stock go negative.',
    project_stocksync_alt:   'StockSync dashboard with inventory value, low-stock products and latest movements',

    // Project: Literacy platform
    project_literacy_title: 'Digital literacy platform',
    project_literacy_desc:  'Team degree project at UTS: a web platform where older adults learn to use technology safely, with lessons, exercises, progress tracking and a certificate. It includes accessibility options such as high contrast and larger text.',
    project_literacy_alt:   'Home page of the digital literacy platform with text size and high contrast buttons',

    // Contact section
    contact_heading:        'Contact',
    contact_subheading:     'Available for on-site work in Bucaramanga or remote work. Write to me in Spanish or English.',
    contact_email_label:    'Send me an email',
    contact_linkedin_label: 'LinkedIn',

    // ARIA labels for floating icon links
    aria_github:   'Visit my GitHub profile',
    aria_linkedin: 'Visit my LinkedIn profile',
    aria_email:    'Send me an email',

    // Footer ("Built by [name]" — year appended by JS)
    footer_built_by: 'Jhoseph Mendez ·',
  },

  es: {
    lang_toggle:      'EN',
    aria_lang_toggle: 'Cambiar a inglés',

    hero_name:      'Jhoseph Mendez',
    hero_role:      'Estudiante de Tecnología en Desarrollo de Sistemas Informáticos · Soporte TI y web',
    hero_about:     'Hola, soy Jhoseph, estudiante de 6.º semestre de Tecnología en Desarrollo de Sistemas Informáticos en las UTS (Bucaramanga, Colombia). Mis proyectos son académicos: yo defino qué debe hacer el sistema y sus reglas, uso herramientas de IA para escribir el código y pruebo que funcione. Terminé "Introduction to DevOps" de IBM y sigo con el programa de DevOps en Coursera. Busco trabajo en soporte técnico, servicio al cliente o bodega, presencial o remoto. Inglés B1 certificado.',
    hero_cta:       'Ver mis proyectos',
    cv_download:    'Descargar hoja de vida',
    hero_photo_alt: 'Retrato de Jhoseph',

    skills_heading:       'Habilidades',
    skills_subheading:    'Herramientas que he usado en la universidad y en mis proyectos, a nivel académico.',
    skills_cat_languages: 'Lenguajes',
    skills_cat_databases: 'Bases de datos',
    skills_cat_cloud:     'Cloud y DevOps (aprendiendo)',
    skills_cat_other:     'Frameworks y herramientas',
    skills_cat_support:   'Soporte y trabajo',
    skill_customer_service: 'Atención al cliente',
    skill_it_support:       'Soporte a usuarios N1',
    skill_linux:            'Linux (línea de comandos)',
    skill_excel:            'Excel intermedio',
    skill_english:          'Inglés B1',

    projects_heading:    'Proyectos',
    projects_subheading: 'Proyectos académicos hechos con ayuda de IA: yo definí las reglas, la IA ayudó a escribir el código y yo lo probé.',
    projects_view_code:  'Ver código',
    projects_note:       'Más proyectos de clase en mi GitHub.',
    project_status_done:     'Proyecto académico',
    project_status_progress: 'Proyecto de grado · en curso',
    aria_project_tags:       'Tecnologías usadas',

    project_stocksync_title: 'StockSync: inventario de bodega',
    project_stocksync_desc:  'Aplicación web para llevar el inventario de una bodega pequeña: productos por categoría, entradas, salidas y ajustes con usuario y fecha, alertas de stock bajo e importación/exportación a Excel. No deja borrar lo que haría perder el historial ni sacar más stock del que hay.',
    project_stocksync_alt:   'Panel de StockSync con el valor del inventario, productos por reponer y últimos movimientos',

    project_literacy_title: 'Plataforma de alfabetización digital',
    project_literacy_desc:  'Proyecto de grado en equipo en las UTS: una plataforma web para que adultos mayores aprendan a usar la tecnología de forma segura, con lecciones, ejercicios, progreso y certificado. Incluye opciones de accesibilidad como alto contraste y letra más grande.',
    project_literacy_alt:   'Página de inicio de la plataforma de alfabetización digital con botones de tamaño de letra y alto contraste',

    contact_heading:        'Contacto',
    contact_subheading:     'Disponible para trabajo presencial en Bucaramanga o remoto. Escríbeme en español o inglés.',
    contact_email_label:    'Envíame un correo',
    contact_linkedin_label: 'LinkedIn',

    aria_github:   'Visita mi perfil de GitHub',
    aria_linkedin: 'Visita mi perfil de LinkedIn',
    aria_email:    'Envíame un correo',

    footer_built_by: 'Jhoseph Mendez ·',
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

  // 5. Persist choice across page loads (storage may be blocked)
  try { localStorage.setItem('preferred-lang', lang); } catch (e) { /* ignore */ }
}


function readSavedLang() {
  try {
    const saved = localStorage.getItem('preferred-lang');
    return (saved === 'en' || saved === 'es') ? saved : null;
  } catch (e) {
    return null;
  }
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

  // Restore persisted choice; on a first visit follow the browser language
  const saved = readSavedLang();
  const browser = (navigator.language || '').toLowerCase().startsWith('es') ? 'es' : 'en';
  setLanguage(saved || browser);
}

// Run after DOM is ready
document.addEventListener('DOMContentLoaded', init);
