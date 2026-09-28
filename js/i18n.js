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
    lang_toggle:      '',
    aria_lang_toggle: '',   // "Switch to Spanish" / "Switch to English"

    // Hero
    hero_name:    '',
    hero_role:    '',   // "Systems Engineering Student · Web Developer"
    hero_about:   '',   // presentation paragraph (includes greeting)
    hero_cta:     '',
    cv_download:  '',

    // Skills section
    skills_heading:       '',
    skills_subheading:    '',
    skills_cat_languages: '',   // "Languages & Core"
    skills_cat_databases: '',   // "Databases"
    skills_cat_cloud:     '',   // "Cloud & DevOps"
    skills_cat_other:     '',   // "Other Tools"

    // Projects section
    projects_heading:    '',
    projects_subheading: '',
    projects_view_code:  '',   // "View code"
    projects_view_demo:  '',   // "Live demo" — rendered conditionally in Phase 2

    // Project: Booking system
    project_booking_title: '',
    project_booking_desc:  '',

    // Project: StockSync
    project_stocksync_title: '',
    project_stocksync_desc:  '',

    // Project: Literacy app
    project_literacy_title: '',
    project_literacy_desc:  '',

    // Contact section
    contact_heading:      '',
    contact_subheading:   '',
    contact_email_label:  '',
    contact_social_label: '',

    // ARIA labels for floating icon links
    aria_github:   '',   // "Visit my GitHub profile"
    aria_linkedin: '',   // "Visit my LinkedIn profile"
    aria_email:    '',   // "Send me an email"

    // Footer ("Built by [name]" — year appended by JS)
    footer_built_by: '',
  },

  es: {
    lang_toggle:      '',
    aria_lang_toggle: '',

    hero_name:    '',
    hero_role:    '',
    hero_about:   '',
    hero_cta:     '',
    cv_download:  '',

    skills_heading:       '',
    skills_subheading:    '',
    skills_cat_languages: '',
    skills_cat_databases: '',
    skills_cat_cloud:     '',
    skills_cat_other:     '',

    projects_heading:    '',
    projects_subheading: '',
    projects_view_code:  '',
    projects_view_demo:  '',

    project_booking_title: '',
    project_booking_desc:  '',

    project_stocksync_title: '',
    project_stocksync_desc:  '',

    project_literacy_title: '',
    project_literacy_desc:  '',

    contact_heading:      '',
    contact_subheading:   '',
    contact_email_label:  '',
    contact_social_label: '',

    aria_github:   '',
    aria_linkedin: '',
    aria_email:    '',

    footer_built_by: '',
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

  // 4. Persist choice across page loads
  localStorage.setItem('preferred-lang', lang);
}


// ------------------------------------------------------------------
// Footer year (not a translation — injected once)
// ------------------------------------------------------------------

function injectFooterYear() {
  const yearEl = document.getElementById('footer-year');
  if (yearEl) {
    yearEl.textContent = ` · ${new Date().getFullYear()}`;
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
