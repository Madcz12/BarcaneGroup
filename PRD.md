# BarcaneGroup — PRD (Product Requirements Document)

> **Versión:** 1.0 — Julio 2026
> **Tipo:** Landing Page Corporativa
> **Cliente:** BarcaneGroup
> **Responsable:** Equipo de Desarrollo

---

## 1. Resumen Ejecutivo

Landing page profesional para **BarcaneGroup**, empresa peruana dedicada a la fabricación y distribución de **empaques personalizados, merchandising corporativo e impresión editorial** para restaurantes, empresas e instituciones en todo el Perú.

**Objetivo del sitio:** Generar leads calificados vía WhatsApp mostrando el portafolio de productos y servicios, construyendo confianza mediante una presencia visual premium.

**Idioma:** Español (Perú) — todo el contenido está en español latino neutral.

---

## 2. Stack Tecnológico

| Capa | Tecnología | Versión |
|---|---|---|
| Framework | React | 19.2.7 |
| Bundler | Vite | 8.1.1 |
| Lenguaje | JavaScript (JSX) | — |
| Estilos | CSS Vanilla con Custom Properties | — |
| Router | React Router DOM | 7.18.1 |
| Linter | oxlint | 1.71.0 |
| Tipografía | Google Fonts — Inter (300–800) | — |
| Testing | No configurado | — |
| TypeScript | No (JSX vanilla) | — |
| Backend | No (sitio estático) | — |
| Deploy | Build estático → FTP (DonWeb) | — |

**Scripts:**
- `npm run dev` — Servidor de desarrollo
- `npm run build` — Build de producción
- `npm run preview` — Preview del build
- `npm run lint` — Oxlint

---

## 3. Arquitectura del Proyecto

```
barcanegroup/
├── index.html                     # Entry point con SEO, OG tags, Google Fonts
├── vite.config.js                 # Configuración Vite + plugin-react
├── package.json
├── public/
│   ├── images/
│   │   ├── carrousel/             # Slides del Hero (5 imágenes .webp)
│   │   ├── items/                 # Fotos de productos (10+ imágenes)
│   │   ├── BarcaneGroupLogo-bgless.png   # Logo oficial
│   │   ├── bgroup_worker_def.webp        # Fondo CTA
│   │   └── ... (fondos, banners, favicon)
│   └── favicon.svg, icons.svg
└── src/
    ├── main.jsx                   # Entry point: StrictMode + BrowserRouter
    ├── App.jsx                    # Rutas: /, /productos, /productos/:id
    ├── index.css                  # Design tokens, reset CSS, utilidades
    ├── App.css                    # Estilos globales de layout
    ├── components/
    │   ├── Navbar/                # Header fijo + menú mobile + dropdown
    │   ├── Hero/                  # Hero con carrusel de fondo
    │   ├── Services/              # Grid de empaques + servicios corporativos
    │   ├── IndustriesAndWhy/      # Industrias, razones, materiales, proceso
    │   ├── FeaturedProducts/      # Carrusel horizontal de productos destacados
    │   ├── ProcessAndCTA/         # CTA principal con WhatsApp + email
    │   ├── Footer/                # Footer multi-columna + newsletter
    │   ├── MainLayout/            # Layout shell (Navbar + Outlet + Footer)
    │   └── icons/
    │       └── WhatsAppIcon.jsx   # Icono SVG de WhatsApp reutilizable
    ├── pages/
    │   ├── HomePage/              # Landing page (todas las secciones)
    │   ├── Catalog/               # Catálogo con filtros por categoría
    │   └── ProductDetail/         # Detalle de producto individual
    └── data/
        └── mockProducts.js        # Catálogo mock (9 productos en 4 categorías)
```

### 3.1 Routing

| Ruta | Componente | Descripción |
|---|---|---|
| `/` | `HomePage` | Landing page con todas las secciones |
| `/productos` | `Catalog` | Catálogo filtrable por categoría |
| `/productos/:id` | `ProductDetail` | Detalle de producto individual |

Todas las rutas están envueltas en `MainLayout` (Navbar + Footer compartidos).

---

## 4. Componentes y Funcionalidades

### 4.1 Navbar (`#inicio`)

- **Header fijo** con detección de scroll: fondo traslúcido + backdrop blur al hacer scroll > 50px
- **Logo:** Imagen oficial (`BarcaneGroupLogo-bgless.png`) + texto "Barcane **Group**" + eslogan "GESTIONAMOS TUS PROYECTOS"
- **Navegación desktop:** Inicio, Nosotros, Soluciones (dropdown), Industrias, Productos, Contacto
- **Dropdown "Soluciones":** 4 tarjetas con ícono, título y descripción:
  - Empaques Gastronomía
  - Bolsas Ejecutivas
  - Merchandising Corporativo
  - Impresión y Editorial
- **CTA WhatsApp:** "Solicitar cotización" visible en desktop y mobile
- **Mobile:** Menú hamburguesa animado, drawer lateral con links de navegación + CTA
- **Links de anclaje** con smooth scroll a secciones de la landing

### 4.2 Hero (`#inicio`)

- **Carrusel de fondo automático:**
  - 5 slides con loop seamless (clon del primer slide al final)
  - Intervalo de 5 segundos, transición 0.8s cubic-bezier
  - Overlay degradado: vertical en mobile, horizontal en desktop
- **Contenido superpuesto:**
  - Título: "Soluciones que impulsan **tu marca**"
  - Subtítulo descriptivo del negocio
  - CTAs: "Solicitar cotización" (WhatsApp) + "Ver catálogo" (link a `/productos`)
- **Badges strip:** Fabricación propia, Personalización total, Cobertura nacional, Entregas puntuales

### 4.3 Services / Soluciones (`#que-hacemos`)

Fondo rosa suave (`#e4cbd0`). Dos secciones:

**A. Empaques para Gastronomía (grid 6 columnas en desktop):**
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

Cada card contiene: imagen (lazy loaded), título, descripción corta, link "Cotizar este producto".

### 4.4 IndustriesAndWhy (`#industrias-y-proceso`)

Fondo salmón suave (`#ffcbba`). Organizado en tres filas:

**Fila 1 — Industrias objetivo (grid horizontal responsive):**
Restaurantes, Hamburgueserías, Cafeterías, Panaderías, Pastelerías, Dark kitchens, Food trucks, Catering y eventos. Cada una con ícono SVG inline y nombre.

**Fila 2 — ¿Por qué personalizar? + Materiales (split column en desktop):**
- **Columna A:** 6 razones con íconos circulares y descripción (mejor presentación, adaptado a tu negocio, mayor recordación, ideal para delivery, experiencia cuidada, opciones por presupuesto)
- **Columna B:** Grid de 9 materiales y acabados con íconos (papel manteca, kraft, cartulina, papel blanco, adhesivos, cartón, impresión 1 tinta, full color, acabados mate/brillantes) + banner de asesoría

**Fila 3 — Proceso de trabajo (4 pasos con conectores):**
1. Nos cuentas qué necesitas
2. Preparamos una propuesta
3. Personalizamos tu empaque
4. Fabricamos y entregamos

### 4.5 FeaturedProducts (`#productos`)

Fondo azul grisáceo (`#b8c2d9`). Carrusel horizontal con scroll:
- 5 productos destacados con imagen, nombre y CTA individual de WhatsApp
- Flechas de navegación izquierda/derecha con scroll suave (75% del viewport)
- Responsive: tarjetas de 82% → 46% → 31.5% → 23.5% del viewport según breakpoint

### 4.6 ProcessAndCTA (`#contacto`)

- **Fondo:** Imagen (`bgroup_worker_def.webp`) con overlay oscuro degradado
- **Título:** "¿Quieres empaques personalizados para **tu restaurante?**"
- **CTA WhatsApp:** Botón verde principal con texto predefinido
- **Email alternativo:** `ventas@barcanegroup.com`
- Layout responsivo: stack vertical en mobile, row en tablet+

### 4.7 Footer

- **Grid 4 columnas** en desktop:
  - **Col 1:** Logo + descripción + redes sociales (Facebook, Instagram, LinkedIn)
  - **Col 2:** Enlaces del sitio (Nosotros, Soluciones, Industrias, Productos, Contacto)
  - **Col 3:** Productos (links a secciones de la landing)
  - **Col 4:** Contacto (teléfono, email, ubicación) + formulario de newsletter (solo frontend)
- **Bottom bar:** © 2026 Barcane Group. Todos los derechos reservados.

### 4.8 WhatsAppIcon

Componente reutilizable de ícono SVG de WhatsApp, acepta prop `size` para escalar. Usado en Navbar, Hero, FeaturedProducts, ProcessAndCTA.

---

## 5. Páginas Secundarias

### 5.1 Catálogo (`/productos`)

- **Header:** Título, subtítulo y underline decorativo
- **Filtro de categorías:** Todos, Empaques, Bolsas, Merchandising, Editorial
- **Grid de productos:** Cards con imagen (lazy loaded), categoría tag, nombre, descripción y precio. Cada card es un `<Link>` al detalle.
- **Back-to-top button:** Aparece al hacer scroll > 400px
- **Datos:** Alimentado por `mockProducts.js` (9 productos en 4 categorías)

### 5.2 Detalle de Producto (`/productos/:id`)

- Layout split: imagen a la izquierda, información a la derecha
- Muestra: categoría, nombre, precio, descripción completa
- CTA WhatsApp con el nombre del producto pre-rellenado en el mensaje
- Manejo de producto no encontrado (404 amigable con link de retorno)
- Link "← Volver al catálogo"

---

## 6. Catálogo de Productos (Mock Data)

9 productos en 4 categorías:

| ID | Nombre | Categoría | Precio desde |
|---|---|---|---|
| `bolsa-ejecutiva-premium` | Bolsa Ejecutiva Premium | bolsas | S/ 2.50 c/u |
| `papel-manteca-personalizado` | Papel Manteca Personalizado | empaques | S/ 0.35 c/u |
| `bolsa-kraft-personalizada` | Bolsa Kraft Personalizada | bolsas | S/ 1.80 c/u |
| `calendarios-corporativos` | Calendarios Corporativos | editorial | S/ 4.50 c/u |
| `merchandising-corporativo` | Merchandising Corporativo | merchandising | Consultar |
| `food-box-personalizado` | Food Box Personalizado | empaques | S/ 1.20 c/u |
| `servilletas-personalizadas` | Servilletas Personalizadas | empaques | S/ 0.15 c/u |
| `stickers-personalizados` | Stickers Personalizados | merchandising | S/ 0.08 c/u |
| `fajas-personalizadas` | Fajas Personalizadas | empaques | S/ 0.25 c/u |

---

## 7. Design System

### 7.1 Design Tokens

| Token | Valor | Uso |
|---|---|---|
| `--clr-primary-pink` | `hsl(335, 85%, 52%)` | Rosa corporativo (CTAs, acentos) |
| `--clr-navy-deep` | `hsl(240, 35%, 7%)` | Fondo oscuro principal |
| `--clr-navy-medium` | `#16203a` | Navbar, footer |
| `--font-heading` / `--font-body` | `Inter` | Tipografía global |
| `--max-width-content` | `1240px` | Contenedor máximo |

### 7.2 Secuencia de Fondos por Sección

| Sección | Color de fondo |
|---|---|
| Hero | `#111422` (dark navy) |
| Services | `#e4cbd0` (rosa pálido) |
| IndustriesAndWhy | `#ffcbba` (salmón claro) |
| FeaturedProducts | `#b8c2d9` (azul grisáceo) |
| ProcessAndCTA | `#111422` (dark navy) |
| Footer | `#16203a` (navy medio) |

### 7.3 Breakpoints Responsive

Diseño Mobile First con puntos de quiebre:

| Breakpoint | Dispositivo |
|---|---|
| `640px` | Tablets pequeños |
| `768px` | Tablets |
| `1024px` | Desktop |
| `1200px` | Pantallas grandes |

---

## 8. Estrategia de Lead Generation

- **Canal principal:** WhatsApp Business `+51 943 703 905`
- **Mensaje predefinido:** "Hola BarcaneGroup, quisiera solicitar una cotización"
- **Puntos de conversión (CTAs):**
  - Navbar (desktop y mobile)
  - Hero (botón principal + secundario "Ver catálogo")
  - Cada card de FeaturedProducts
  - Cada card de Services ("Cotizar este producto")
  - Sección ProcessAndCTA (botón principal)
  - Página de detalle de producto
- **Canal secundario:** Email `ventas@barcanegroup.com`
- **Newsletter:** Formulario de suscripción en footer (solo frontend)

---

## 9. SEO

Implementado en `index.html`:
- **Meta tags:** description, keywords, author, robots
- **Open Graph:** title, description, image para compartir en redes sociales
- **Favicon:** `.ico` oficial
- **Tipografía:** Precargada desde Google Fonts (Inter 300–800)
- **Lang:** `es` (español)
- Imágenes con `loading="lazy"` para optimización de carga

---

## 10. Estado del Proyecto

### 10.1 Completado ✅

- [x] Landing page completa con 7 secciones
- [x] Navbar responsive con dropdown y menú mobile
- [x] Hero con carrusel de fondo automático (loop seamless)
- [x] Grid de servicios (empaques + corporativos)
- [x] Sección de industrias, razones, materiales y proceso
- [x] Carrusel de productos destacados con navegación
- [x] CTA de contacto con WhatsApp y email
- [x] Footer multi-columna con newsletter
- [x] Página de catálogo con filtros por categoría
- [x] Página de detalle de producto
- [x] SEO básico (meta tags, OG, favicon)
- [x] Diseño responsive (mobile first)
- [x] Lazy loading en imágenes
- [x] Build estático listo para deploy
- [x] Integración con WhatsApp Business API (deep link)
- [x] Logo oficial sin filtros CSS

### 10.2 Pendiente / Backlog 🔲

- [ ] Sección "Nosotros" (linkeada en navbar pero redirige a `#que-hacemos`)
- [ ] Sección de Blog (linkeada en navbar compact anterior pero no implementada)
- [ ] Formulario de newsletter funcional (backend)
- [ ] Testing automatizado (sin suite configurada)
- [ ] TypeScript migration
- [ ] Analytics
- [ ] Galería de proyectos / casos de éxito
- [ ] Optimización avanzada de imágenes (WebP universal, responsive images)
- [ ] Integración con WhatsApp API para catálogo interactivo
- [ ] Animaciones de entrada (fade-in-up en scroll)

---

## 11. Historial de Commits Relevantes

| Commit | Descripción |
|---|---|
| `eb9bd1a` | fix: navegación y focus en sección Catalog |
| `b56a1c4` | fix: nuevas imágenes para carrusel del Hero |
| `a5b696d` | feat: Catálogo con mock data y espaciado |
| `95c0fa6` | fix: smooth scroll entre secciones |
| `32ccb6f` | fix: copy y dimensiones del ProcessCTA |
| `885bf6e` | fix: opciones del navbar y edición del ProcessCTA |
| `07c8399` | fix: padding de FeaturedProducts |
| `2c036d0` | fix: cambios en IndustriesAndWhy y ProcessCTA |
| `713faee` | feat: carrusel de imágenes para el hero |
| `e5ec30b` | fix: sección hero modificada |
| `ce1ba91` | fix: reorganización de imágenes + cambio de color en navbar/footer |
| `ad38fd5` | fix: reorganización de imágenes en featured products |
| `716f0b5` | fix: cambio de colores en UI |
| `7f4e1cd` | fix: UI mobile modificada |

---

## 12. Notas Técnicas

- El proyecto **no usa TypeScript**. Hay paquetes `@types/react` y `@types/react-dom` instalados solo para soporte de editor.
- Las imágenes del carrusel del Hero usan una técnica de **clon del primer slide** para lograr un loop infinito visual sin flickering. El "warp reset" ocurre en 0ms cuando el carrusel llega al slide clon.
- Los links de anclaje (`#que-hacemos`, `#industrias-y-proceso`, `#contacto`) dependen de IDs en los elementos del DOM para el smooth scroll nativo.
- Las redes sociales en el footer usan URLs placeholder (`facebook.com`, `instagram.com`, `linkedin.com`).
- El formulario de newsletter es solo presentacional (`e.preventDefault()` vacío).
- Los precios en el catálogo son texto estático; no hay lógica de cálculo ni variantes de producto.
