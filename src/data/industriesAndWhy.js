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
  },
  {
    title: 'Soluciones adaptadas a tu negocio',
    desc: 'Tamaños, diseños y materiales hechos a tu medida.',
    iconKey: 'puzzle',
  },
  {
    title: 'Mayor recordación de marca',
    desc: 'Tu logo y diseño permanecen en la mente de tus clientes.',
    iconKey: 'tag',
  },
  {
    title: 'Funcionalidad para cada necesidad',
    desc: 'Empaques resistentes, seguros y prácticos para transporte.',
    iconKey: 'delivery',
  },
  {
    title: 'Mejor experiencia para el cliente',
    desc: 'Cada detalle cuenta y mejora la percepción de tu negocio.',
    iconKey: 'smile',
  },
  {
    title: 'Alternativas para distintos presupuestos',
    desc: 'Tenemos alternativas que se ajustan a tus necesidades.',
    iconKey: 'budget',
  },
];

export const materials = [
  { 
    name: 'Papel manteca antigrasa', 
    badge: 'Alta Demanda', 
    iconKey: 'grease-paper',
    image: '/images/items/barcanegroup_papel_manteca.webp',
    layoutType: 'tall'
  },
  { 
    name: 'Papel kraft', 
    badge: '¡El más pedido!', 
    iconKey: 'kraft',
    image: '/images/items/bgroup_bolsakraft1.webp',
    layoutType: 'wide'
  },

  { 
    name: 'Papel blanco', 
    iconKey: 'white-paper',
    image: '/images/items/papelblanco.webp',
    layoutType: 'standard'
  },
  { 
    name: 'Adhesivos', 
    badge: 'Ideal Delivery', 
    iconKey: 'sticker',
    image: '/images/items/adhesivos.webp',
    layoutType: 'tall'
  },
  { 
    name: 'Cartón para cajas', 
    badge: '¡El más pedido!', 
    iconKey: 'cardboard-box',
    image: '/images/items/bgroup_foodbox.webp',
    layoutType: 'large'
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