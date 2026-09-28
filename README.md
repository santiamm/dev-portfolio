# Dev Portfolio

Personal developer portfolio — static bilingual site (EN/ES) hosted on GitHub Pages.

## Tech stack

- Pure HTML5 / CSS3 / Vanilla JS (no frameworks, no build step)
- Google Fonts — Inter
- GitHub Pages for deployment

## Project structure

```
dev-portfolio/
├── index.html          # Main entry point
├── README.md
├── .gitignore
├── css/
│   ├── variables.css   # Design tokens (colors, typography, spacing)
│   └── main.css        # Global styles and layout
├── js/
│   └── i18n.js         # Language toggle system (EN / ES)
└── assets/
    ├── images/         # Photos, project screenshots
    └── icons/          # SVG icons
```

## Running locally

No build step required. Just open `index.html` in your browser, or use any static server:

```bash
# With Python
python -m http.server 8080

# With Node (npx)
npx serve .
```

## Phases

- **Phase 1** ✅ — Project setup: structure, tokens, i18n skeleton
- **Phase 2** — Content: hero, skills, projects, contact
- **Phase 3** — Polish: animations, responsiveness, accessibility audit
- **Phase 4** — Deploy to GitHub Pages

## License

MIT
