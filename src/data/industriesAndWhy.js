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
    title: 'Mejor presentación del producto',
    desc: 'Una presentación cuidada genera más confianza y valor percibido.',
    iconKey: 'presentation',
  },
  {
    title: 'Adaptado a tu negocio',
    desc: 'Tamaños, diseños y materiales hechos a tu medida.',
    iconKey: 'puzzle',
  },
  {
    title: 'Mayor recordación de marca',
    desc: 'Tu logo y diseño permanecen en la mente de tus clientes.',
    iconKey: 'tag',
  },
  {
    title: 'Ideal para delivery y take away',
    desc: 'Empaques resistentes, seguros y prácticos para transporte.',
    iconKey: 'delivery',
  },
  {
    title: 'Experiencia más cuidada para el cliente',
    desc: 'Cada detalle cuenta y mejora la percepción de tu negocio.',
    iconKey: 'smile',
  },
  {
    title: 'Opciones para diferentes presupuestos',
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
    number: '1',
    title: 'Nos cuentas qué necesitas',
    desc: 'Cuéntanos el tipo de producto, cantidad y fecha de entrega.',
    iconKey: 'chat',
  },
  {
    number: '2',
    title: 'Preparamos una propuesta',
    desc: 'Te enviamos una propuesta de diseño y cotización.',
    iconKey: 'pen',
  },
  {
    number: '3',
    title: 'Personalizamos tu empaque',
    desc: 'Aprobamos el diseño y producimos a tu medida.',
    iconKey: 'customize',
  },
  {
    number: '4',
    title: 'Fabricamos y entregamos',
    desc: 'Producimos con calidad y entregamos a tiempo.',
    iconKey: 'truck',
  },
];