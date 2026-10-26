# Portafolio de Jhoseph Mendez

🌐 **En línea:** [santiamm.github.io/dev-portfolio](https://santiamm.github.io/dev-portfolio/)

Página personal con mi hoja de vida, mis habilidades y mis proyectos académicos. Estudio Tecnología en Desarrollo de Sistemas Informáticos en las Unidades Tecnológicas de Santander (UTS, Bucaramanga) y busco trabajo en soporte técnico, servicio al cliente o bodega, presencial o remoto.

El sitio se hizo con ayuda de herramientas de IA: yo decidí el contenido y la estructura, y revisé que todo funcionara.

> 🇺🇸 *Personal portfolio (Spanish / English): CV download, skills and academic projects. I'm a Systems Development Technology student at UTS, Colombia. Built with AI assistance; I decided the content and checked that it works.*

## Qué tiene

- **Inicio:** presentación, foto y botón para descargar la hoja de vida en PDF.
- **Habilidades:** herramientas que he usado en la universidad y en mis proyectos, a nivel académico.
- **Proyectos:** con captura, estado y enlace al código:
  - [StockSync](https://github.com/santiamm/stocksync-enterprise): inventario de bodega en Laravel.
  - [Plataforma de alfabetización digital](https://github.com/santiamm/plataforma-alfabetizacion-digital): proyecto de grado, en curso.
- **Contacto:** correo y LinkedIn.
- **Español / inglés:** la primera vez se abre en el idioma del navegador; después recuerda el que elija el visitante.

## Tecnologías

HTML, CSS y JavaScript sin frameworks ni dependencias. Publicado con GitHub Pages desde la rama `master`.

## Verlo en local

No necesita instalar nada:

```bash
git clone https://github.com/santiamm/dev-portfolio.git
```

Luego se abre `index.html` en el navegador.

## Estructura

```
index.html            página
css/                  estilos (variables.css tiene colores y tamaños)
js/i18n.js            textos en español e inglés y botón de idioma
assets/docs/          hoja de vida en PDF
assets/images/        foto y capturas de los proyectos
```

Para cambiar un texto se edita `js/i18n.js` (en los dos idiomas).
