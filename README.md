# Guía del Estudiante — IESP "Manuel Antonio Hierro Pozo"

Servicio social: portal que explica a estudiantes internos y externos qué área visitar, qué documentos presentar,
cuánto cuesta y cuánto demora cada trámite. Este módulo cubre **Certificados y Constancias** (Capítulo 8 del
Manual de Procesos Académicos) con sus 6 subprocesos.

## Ejecutar

```bash
npm install
npm run dev
```

## Estructura

- `src/data/certificateProcesses.js` — datos reales del MPA (costos, plazos, requisitos, pasos y responsables).
- `src/data/catalog.js` — tarjetas del catálogo de la landing.
- `src/components/Hero.jsx` — hero de ancho completo (solo en la landing).
- `src/pages/` — una página por tarjeta del catálogo, cada una con su URL: `/matricula`, `/traslados`, `/constancias`, `/certificados`, `/titulacion`, `/enfermeria` (y `/matricula/mat-reserva` para un trámite concreto). `LandingPage` es `/`. `pages/index.js` las registra y `App.jsx` define las rutas con react-router-dom.
- `src/components/ProcessDetail.jsx` — vista de trámite que reutilizan las páginas (filtro, línea de tiempo y requisitos).
- `src/components/Timeline.jsx` — línea de tiempo interactiva.
- `public/escudo.png` — escudo institucional (fondo en mosaico y hero). `public/hero.png` — foto del hero.

## Publicar en GitHub Pages

El sitio usa URLs limpias (`/landing`, `/matricula`…). Para un repositorio `usuario/repositorio`:

```powershell
$env:VITE_BASE="/repositorio/"; npm run build
```

Publica la carpeta `dist`. `public/404.html` redirige las rutas al `index.html` (si el sitio está en la raíz del dominio, pon `pathSegmentsToKeep = 0` en ese archivo).
