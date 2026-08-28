/* ------------------------------------------------------------------ *
 *  Data module for the IndustriesAndWhy section.
 *
 *  All text/metadata lives here.  No JSX, no React elements — this file
 *  is a plain JS module consumable by non-React tooling (tests, scripts,
 *  etc.).  Icon visuals stay in icons.jsx (lookup map keyed by iconKey).
 *
 *  Array sizes (spec contract):
 *    industries  → 5   { name, iconKey }
 *    reasons     → 6   { title, desc, iconKey }
 *    materials   → 9   { name, badge?, iconKey }
 *    steps       → 4   { number, title, desc, iconKey }
 * ------------------------------------------------------------------ */

export const industries = [
  {
    name: 'Alimentos, hoteles\ny\nTurismo',
    iconKey: 'hospitality-food-tourism',
    label: 'RESTAURANTES, POLLERÍAS, CAFETERÍAS, FAST FOOD, HOTELES, RESORT, HOSPEDAJES Y NEGOCIOS DEL SECTOR TURISMO',
    hoverCopy: 'Empaques, cartas, uniformes, bolsas, papelería, señalética, merchandising y material publicitario',
  },
  {
    name: 'Educación',
    iconKey: 'education',
    label: 'COLEGIOS, ACADEMIAS, INSTITUTOS Y CENTROS DE FORMACIÓN',
    hoverCopy: 'Agendas, cuadernos de control, folders, diplomas y material institucional',
  },
  {
    name: 'Salud',
    iconKey: 'health',
    label: 'CLÍNICAS, LABORATORIOS, CONSULTORIOS Y CENTROS CLÍNICOS',
    hoverCopy: 'Papelería, señalización, carpetas, material informativo y piezas corporativas',
  },
  {
    name: 'Inmobiliarias\ny\nfinancieras',
    iconKey: 'real-estate',
    label: 'INMOBILIARIAS, CONSTRUCTORAS, SEGUROS, ENTIDADES FINANCIERAS Y COMERCIALES',
    hoverCopy: 'Brochures, folders, paneles de venta, señalización y material promocional',
  },
  {
    name: 'Otras industrias',
    iconKey: 'other-industries',
    label: 'COMERCIO, SERVICIOS, TECNOLOGÍA Y NEGOCIOS EN GENERAL',
    hoverCopy: 'Soluciones gráficas y de empaque personalizadas para cualquier sector comercial o corporativo',
  },
];

export const reasons = [
  {
    title: 'Mejor presentación de tu marca',
    desc: 'Una presentación cuidada genera más confianza y valor percibido.',
    iconKey: 'presentation',
    colorTheme: 'coral',
  },
  {
    title: 'Soluciones adaptadas a tu negocio',
    desc: 'Tamaños, diseños y materiales hechos a tu medida.',
    iconKey: 'puzzle',
    colorTheme: 'green',
  },
  {
    title: 'Mayor impacto y recordatorio',
    desc: 'Tu logo y diseño permanecen en la mente de tus clientes.',
    iconKey: 'tag',
    colorTheme: 'amber',
  },
  {
    title: 'Funcionalidad para cada necesidad',
    desc: 'Empaques resistentes, seguros y prácticos para transporte.',
    iconKey: 'delivery',
    colorTheme: 'green',
  },
  {
    title: 'Mejor experiencia para el cliente',
    desc: 'Cada detalle cuenta y mejora la percepción de tu negocio.',
    iconKey: 'smile',
    colorTheme: 'amber',
  },
  {
    title: 'Alternativas para distintos presupuestos',
    desc: 'Tenemos alternativas que se ajustan a tus necesidades.',
    iconKey: 'budget',
    colorTheme: 'coral',
  },
];

export const materials = [
  { 
    id: 'papeles-especiales',
    name: 'Papeles y cartulinas finas',
    subtitle: 'Bond, couche, antigrasa, seda y otras alternativas',
    iconKey: 'grease-paper',
    image: '/images/items/bggroup_special_papers.webp',
  },
  { 
    id: 'kraft-y-ecologicos',
    name: 'Fibras ecológicas y cartones corrugados',
    subtitle: 'Resistencia, funcionalidad y apariencia natural en materiales responsables',
    iconKey: 'kraft',
    image: '/images/items/bggroup_new_kraftboxes.webp',
  },
  { 
    id: 'adhesivos-y-etiquetas',
    name: 'Adhesivos y etiquetas de seguridad',
    subtitle: 'La adherencia ideal para aplicaciones comerciales y corporativas',
    iconKey: 'sticker',
    image: '/images/items/bggroup_sec_stickers.webp',
  },
  { 
    id: 'acabados-especiales',
    name: 'Acabados especiales',
    subtitle: 'Laminados, stamping, relieves y troquelados',
    iconKey: 'finish',
    image: '/images/items/bggroup_prints_new.webp',
  },
];

export const steps = [
  {

    title: 'Cuéntanos qué necesitas',
    desc: 'Producto, cantidad y características',
    iconKey: 'chat',
  },
  {

    title: 'Preparamos tu propuesta',
    desc: 'Asesoría, alternativas y cotización',
    iconKey: 'pen',
  },
  {

    title: 'Diseñamos y producimos',
    desc: 'Aprobación y producción',
    iconKey: 'customize',
  },
  {

    title: 'Entregamos tu pedido',
    desc: 'Coordinación y entrega',
    iconKey: 'truck',
  },
];