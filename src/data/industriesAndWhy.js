/* ------------------------------------------------------------------ *
 *  Data module for the IndustriesAndWhy section.
 *
 *  All text/metadata lives here.  No JSX, no React elements — this file
 *  is a plain JS module consumable by non-React tooling (tests, scripts,
 *  etc.).  Icon visuals stay in icons.jsx (lookup map keyed by iconKey).
 *
 *  Array sizes (spec contract):
 *    industries  → 8   { name, iconKey }
 *    reasons     → 6   { title, desc, iconKey }
 *    materials   → 9   { name, badge?, iconKey }
 *    steps       → 4   { number, title, desc, iconKey }
 * ------------------------------------------------------------------ */

export const industries = [
  {
    name: 'Gastronomía',
    iconKey: 'restaurant',
    label: 'Restaurantes, pollerías, cafeterías, fast food y food trucks',
    hoverCopy: 'Empaques, menúes, uniformes, bolsas, papelería y material publicitario',
  },
  {
    name: 'Hoteles y Turismo',
    iconKey: 'hotel',
    label: 'Hoteles, hostales, resorts y negocios del sector turismo',
    hoverCopy: 'Papelería corporativa, señalética, amenities, material promocional y merchandising',
  },
  {
    name: 'Educación',
    iconKey: 'education',
    label: 'Colegios, institutos, academias y centros de formación',
    hoverCopy: 'Agendas, cuadernos de control, folders, diplomas y material institucional',
  },
  {
    name: 'Salud',
    iconKey: 'health',
    label: 'Clínicas, laboratorios, consultorios y centros clínicos',
    hoverCopy: 'Papelería, señalización, carpetas, material informativo y piezas corporativas',
  },
  {
    name: 'Inmobiliarias y construcción',
    iconKey: 'real-estate',
    label: 'Inmobiliarias, constructoras y proyectos residenciales o comerciales',
    hoverCopy: 'Brochures, folders, paneles de venta, señalización y material promocional',
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
    title: 'Mayor recordación de marca',
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
    name: 'Papeles especiales',
    subtitle: 'Antigrasa, seda y otras alternativas',
    iconKey: 'grease-paper',
    image: '/images/items/bggroup_special_papers.webp',
  },
  { 
    id: 'kraft-y-ecologicos',
    name: 'Kraft y ecológicos',
    subtitle: 'Soluciones versátiles con apariencia natural',
    iconKey: 'kraft',
    image: '/images/items/bgroup_bolsakraft1.webp',
  },
  { 
    id: 'adhesivos-y-etiquetas',
    name: 'Adhesivos y etiquetas',
    subtitle: 'Para aplicaciones comerciales y corporativas',
    iconKey: 'sticker',
    image: '/images/items/bggroup_sticks.webp',
  },
  { 
    id: 'cartones-y-corrugados',
    name: 'Cartones y corrugados',
    subtitle: 'Packaging, cajas y desarrollos especiales',
    iconKey: 'cardboard-box',
    image: '/images/items/bggroup_boxes.webp',
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
    number: '01',
    title: 'Cuéntanos qué necesitas',
    desc: 'Producto, cantidad y características',
    iconKey: 'chat',
  },
  {
    number: '02',
    title: 'Preparamos tu propuesta',
    desc: 'Asesoría, alternativas y cotización',
    iconKey: 'pen',
  },
  {
    number: '03',
    title: 'Diseñamos y producimos',
    desc: 'Aprobación y producción',
    iconKey: 'customize',
  },
  {
    number: '04',
    title: 'Entregamos tu pedido',
    desc: 'Coordinación y entrega',
    iconKey: 'truck',
  },
];