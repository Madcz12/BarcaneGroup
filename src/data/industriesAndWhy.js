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
  { name: 'Restaurantes', iconKey: 'restaurant' },
  { name: 'Hamburgueserías', iconKey: 'burger' },
  { name: 'Cafeterías', iconKey: 'coffee' },
  { name: 'Panaderías', iconKey: 'bread' },
  { name: 'Pastelerías', iconKey: 'cake' },
  { name: 'Dark kitchens', iconKey: 'dark-kitchen' },
  { name: 'Food trucks', iconKey: 'food-truck' },
  { name: 'Catering y eventos', iconKey: 'catering' },
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
  { name: 'Papel manteca antigrasa', badge: 'Alta Demanda', iconKey: 'grease-paper' },
  { name: 'Papel kraft', badge: '¡El más pedido!', iconKey: 'kraft' },
  { name: 'Cartulina', iconKey: 'cardstock' },
  { name: 'Papel blanco', iconKey: 'white-paper' },
  { name: 'Adhesivos', badge: 'Ideal Delivery', iconKey: 'sticker' },
  { name: 'Cartón para cajas', badge: '¡El más pedido!', iconKey: 'cardboard-box' },
  { name: 'Impresión a una tinta', iconKey: 'single-print' },
  { name: 'Impresión full color', badge: 'Alta Demanda', iconKey: 'full-color' },
  { name: 'Acabados mate o brillantes', iconKey: 'finish' },
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