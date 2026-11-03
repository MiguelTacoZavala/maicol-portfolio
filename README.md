# Portafolio — Miguel Angel Taco

Portafolio profesional de **Miguel Angel Taco Zavala**, estudiante de Ingeniería de Software en la UNMSM, orientado a desarrollo web full-stack.

Sitio estático, minimalista y oscuro, con un fondo animado de líneas de fractura y acentos dorados.

## Stack

- **React 19** + **Vite 8**
- **TypeScript**
- **Tailwind CSS v4** (vía `@tailwindcss/vite`)
- **lucide-react** para iconografía
- Animaciones CSS nativas (`transform` / `opacity`), respetando `prefers-reduced-motion`

## Estructura

```
├── public/                 Assets estáticos (logos de proyectos, favicon)
├── src/
│   ├── components/
│   │   ├── layout/         Header, Footer
│   │   ├── sections/       Hero, Stack, Projects, Contact
│   │   └── ui/             BackgroundLines, FadeIn
│   ├── data/
│   │   └── portfolio.ts    Fuente única de contenido
│   ├── hooks/              useFadeInOnScroll
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css           Tokens CSS, animaciones y estilos base
├── index.html
├── vercel.json             Rewrites SPA
└── vite.config.ts
```

Todo el contenido editable (textos, proyectos, enlaces) vive en `src/data/portfolio.ts`.

## Desarrollo local

Requiere **Node.js 20.19+** (o 22.12+).

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build de producción

```bash
npm run build    # genera dist/
npm run preview  # sirve dist/ localmente
```

## Deploy en Vercel

1. Importar este repositorio en [Vercel](https://vercel.com/new).
2. Framework preset: **Vite** (autodetectado).
3. Build command: `npm run build` · Output directory: `dist`.
4. No requiere variables de entorno ni configuración adicional: `vercel.json` ya incluye el rewrite de rutas SPA hacia `index.html`.

## Accesibilidad

- HTML semántico, jerarquía de encabezados y foco visible.
- Contraste WCAG AA sobre fondo oscuro.
- `prefers-reduced-motion: reduce` desactiva las animaciones del fondo.
