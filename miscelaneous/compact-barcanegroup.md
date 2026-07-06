# BarcaneGroup — Project Compact

> Generado: 2026-07-06
> Stack: React 19 + Vite 8 + Vanilla CSS
> Tipo: Landing Page corporativa (single-page)
> Persistencia SDD: Engram

---

## 🏢 Sobre el Proyecto

Landing page profesional para **BarcaneGroup**, empresa peruana dedicada a la fabricación y distribución de **empaques personalizados, merchandising corporativo e impresión editorial** para restaurantes, empresas e instituciones en todo el Perú.

**Propósito del sitio:** Generar leads calificados vía WhatsApp mostrando el portafolio de productos y servicios, construyendo confianza mediante una presencia visual premium.

**Idioma:** Español (Perú) — todo el contenido está en español latino neutral.

---

## 🏗️ Stack Técnico

| Capa | Tecnología |
|---|---|
| Framework | React 19.2.7 |
| Bundler | Vite 8.1.1 |
| Lenguaje | JavaScript (JSX) + @types/react (solo tipos dev) |
| Estilos | CSS Vanilla con Custom Properties (design tokens) |
| Linter | oxlint 1.71 |
| Testing | ❌ No configurado |
| Tipado | ❌ JavaScript vanilla (sin TypeScript) |

**Scripts disponibles:**
- `npm run dev` — Dev server
- `npm run build` — Build estático
- `npm run preview` — Preview del build
- `npm run lint` — Oxlint

**Deploy:** Build estático para FTP (DonWeb).

---

## 📁 Estructura del Proyecto

```
barcanegroup/
├── index.html                    # Entry HTML con SEO, OG tags, Google Fonts
├── vite.config.js                # Config Vite (plugin-react)
├── package.json
├── public/
│   ├── images/
│   │   ├── Barcanegroup_bghero.png       # Fondo principal del Hero
│   │   ├── BarcaneGroupLogo-bgless.png   # Logo oficial (sin fondo)
│   │   ├── favicon_barcanegroup.ico      # Favicon oficial
│   │   ├── carrousel/                    # Slides del Hero (4 webp)
│   │   ├── items/                        # Fotos de productos (10+)
│   │   └── ... (fondos, banners)
│   └── favicon.svg, icons.svg
└── src/
    ├── main.jsx                 # Entry point
    ├── App.jsx                  # Layout raíz
    ├── index.css                # Design tokens, reset, utilities
    ├── App.css                  # Layout .app-container
    └── components/
        ├── Navbar/              # Navbar fijo + menú mobile + dropdown
        ├── Hero/                # Hero con carrusel de fondo
        ├── Services/            # Grid de empaques y servicios corporativos
        ├── IndustriesAndWhy/    # Industrias, razones, materiales, proceso
        ├── FeaturedProducts/    # Carrusel horizontal de productos
        ├── ProcessAndCTA/       # CTA principal con WhatsApp + email
        ├── Footer/              # Footer completo + newsletter
        └── icons/
            └── WhatsAppIcon.jsx # Icono SVG de WhatsApp centralizado
```

---

## 🧩 Componentes y Secciones

### 1. Navbar (`#inicio`)
- **Header fijo** con detección de scroll (fondo se vuelve traslúcido con blur)
- **Logo** imagen oficial (`BarcaneGroupLogo-bgless.png`) + texto "Barcane **Group**" y eslogan "GESTIONAMOS TUS PROYECTOS"
- **Navegación:** Inicio, Nosotros, Soluciones (dropdown con 4 líneas), Industrias, Productos, Blog, Contacto
- **Mobile:** Menú hamburguesa con drawer lateral derecho, CTA de WhatsApp al final
- **Desktop:** Dropdown hover con tarjetas de soluciones, CTA de WhatsApp visible
- **Links de anclaje** a secciones de la página

### 2. Hero (`#inicio`)
- **Carrusel de fondo automático** (conveyor belt con loop seamless)
  - 4 slides: `barcanegroup-corpmerchcarrouselv2.webp`, `-gastrocateringcarrouselv2.webp`, `-kraftbagscarrouselv2.webp`, `-premiumbagscarrouselv2.webp`
  - Transición de 5s, animación 0.8s con warp reset
- **Overlay degradado**: vertical en mobile, horizontal (izquierda a derecha) en desktop
- **Contenido:** Título "Soluciones que impulsan **tu marca**", subtítulo descriptivo
- **CTAs:** "Solicitar cotización" (WhatsApp, rosa) y "Ver catálogo" (outline)
- **Badges strip:** Fabricación propia, Personalización total, Cobertura nacional, Entregas puntuales
- **Mobile:** Vertical stack, badges en grid 2x2
- **Desktop:** 540px max-width content, imagen desplazada 10vw a la derecha

### 3. Services / Soluciones (`#que-hacemos`)
Fondo rosa suave (`#e4cbd0`). Dos grupos:

**A. Empaques (grid 6 columnas en desktop):**
1. Papel manteca personalizado
2. Bolsas kraft para delivery
3. Cajas para alimentos
4. Stickers y etiquetas
5. Fajas para empaques
6. Servilletas personalizadas

**B. Servicios Corporativos (grid 3 columnas):**
1. Bolsas Ejecutivas
2. Merchandising Ejecutivo
3. Impresión y Editorial

Cada card: imagen (150-180px), título, descripción, link "Cotizar este producto"

### 4. IndustriesAndWhy (`#industrias-y-proceso`)
Fondo salmón suave (`#ffcbba`). Tres bloques:

**A. Industrias objetivo:** Grid horizontal (2→4→8 columnas)
- Restaurantes, Hamburgueserías, Cafeterías, Panaderías, Pastelerías, Dark kitchens, Food trucks, Catering y eventos

**B. ¿Por qué personalizar? + Materiales** (split column en desktop)
- 6 razones con íconos circulares
- 10 materiales/acabados en grid (papel manteca, kraft, cartulina, adhesivos, etc.)
- Banner asesoría: "Te asesoramos para elegir el material adecuado"

**C. Proceso de trabajo** (4 pasos, horizontal en desktop):
1. Nos cuentas qué necesitas
2. Preparamos una propuesta
3. Personalizamos tu empaque
4. Fabricamos y entregamos

### 5. FeaturedProducts (`#productos`)
Fondo azul grisáceo (`#b8c2d9`). Carrusel horizontal con scroll snap:
- 5 productos con imagen y CTA individual de WhatsApp
- Flechas de navegación (izquierda/derecha)
- Responsive: 82% → 46% → 31.5% → 23.5% del viewport

### 6. ProcessAndCTA
- **Fondo imagen** (`bgroup_worker_def.webp`) con overlay degradado oscuro
- **Heading:** "¿Quieres empaques personalizados para **tu restaurante?**"
- **CTA principal:** Botón WhatsApp verde (`#25d366`) + email alternativo
- Mobile: left-aligned, tablet: row layout

### 7. Footer
- **Grid 4 columnas** en desktop
- **Col 1:** Logo + descripción + redes sociales (Facebook, Instagram, LinkedIn)
- **Col 2:** Enlaces del sitio
- **Col 3:** Productos
- **Col 4:** Contacto (teléfono, email, ubicación) + formulario de newsletter
- **Bottom bar:** Copyright 2026

---

## 🎨 Design System

| Token | Valor | Uso |
|---|---|---|
| `--clr-primary-pink` | `hsl(335, 85%, 52%)` | Rosa corporativo (CTAs, acentos) |
| `--clr-navy-deep` | `hsl(240, 35%, 7%)` | Fondo oscuro principal |
| `--clr-navy-medium` | `#16203a` | Navbar, footer |
| `--font-heading`/`--font-body` | Inter | Tipografía global |
| `--max-width-content` | `1240px` | Contenedor máximo |

**Fondos de sección:** Cada sección tiene un color de fondo distintivo creando una secuencia visual:
- Hero: `#111422` (dark navy)
- Services: `#e4cbd0` (rosa pálido)
- IndustriesAndWhy: `#ffcbba` (salmón claro)
- FeaturedProducts: `#b8c2d9` (azul grisáceo)
- ProcessAndCTA: `#111422` (dark navy)
- Footer: `#16203a` (navy medio)

---

## 📱 Responsive Design

**Mobile First** con puntos de quiebre:
- `640px` — Ajustes tablet pequeños
- `768px` — Tablet
- `1024px` — Desktop
- `1200px` — Pantallas grandes

---

## 📞 Lead Generation

- **Canal principal:** WhatsApp Business `+51 943 703 905`
- **Texto predefinido:** "Hola BarcaneGroup, quisiera solicitar una cotización"
- **CTAs:** Navbar, Hero, cada producto destacado, cada card de servicio, sección ProcessAndCTA
- **Email alternativo:** `ventas@barcanegroup.com`
- **Newsletter:** Formulario en footer (sin backend actual)

---

## ✅ Estado Actual

- Landing page **completa y funcional**
- SEO básico implementado (meta tags, OG, keywords)
- Tipografía Inter de Google Fonts
- Favicon oficial
- Logos oficiales sin filtros CSS
- Build estático listo para deploy
- **Sin testing** (no hay suite configurada)
- **Sin TypeScript** (JSX plano)
- **Sin backend** (estática, lead gen via WhatsApp/email)
- **Sin blog implementado** (link existe en nav pero sin sección)

---

## 🔮 Próximos Pasos Potenciales

1. Implementar sección de Blog (ya linkeada en navbar)
2. Sección "Nosotros" (linkeada pero sin contenido real)
3. Formulario de newsletter funcional (actualmente solo frontend)
4. Galería de proyectos / casos de éxito
5. Optimización de imágenes (WebP nativo, lazy loading ya implementado)
6. Agregar analytics
7. Stripe/WhatsApp API para catálogo interactivo

---

## 🧠 Memoria SDD

Session Preflight: `interactive` | `engram` | `ask-always` | `400 lines`
SDD Init: ✅ Completado (proyecto sin testing → TDD desactivado)
