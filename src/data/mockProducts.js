// Mock product catalog for BarcaneGroup packaging & corporate merch company.
// Aligned with official product lines from catalog structure reference.

const mockProducts = [
  {
    id: 'packaging-cajas-personalizadas',
    name: 'Packaging & cajas personalizadas',
    category: 'packaging',
    tag: 'PACKAGING',
    description:
      'Cajas, estuches y desarrollos especiales diseñados para proteger, presentar y diferenciar tus productos.',
    feature: 'A medida de tu proyecto',
    price: 'Consultar cotización',
    image: '/images/catalog/bgroup_packages.webp',
  },
  {
    id: 'papeles-especiales',
    name: 'Papeles especiales',
    category: 'papeles',
    tag: 'PAPELES',
    description:
      'Papel antigrasa, papeles personalizados, cartulinas y otras alternativas para aplicaciones comerciales y gastronómicas.',
    feature: 'Materiales y formatos personalizados',
    price: 'Consultar cotización',
    image: '/images/items/bggroup_special_papers.webp',
  },
  {
    id: 'etiquetas-adhesivos',
    name: 'Etiquetas & adhesivos',
    category: 'etiquetas',
    tag: 'ETIQUETAS',
    description:
      'Etiquetas autoadhesivas, stickers, viniles y soluciones personalizadas para productos, empaques y comunicación de marca.',
    feature: 'Diferentes materiales y acabados',
    price: 'Consultar cotización',
    image: '/images/catalog/bgroup_catstickers.webp',
  },
  {
    id: 'bolsas-corporativas',
    name: 'Bolsas corporativas',
    category: 'packaging',
    tag: 'PACKAGING',
    description:
      'Bolsas de papel, kraft y otros materiales personalizadas con la identidad de tu empresa.',
    feature: 'Diseños, tamaños y materiales a medida',
    price: 'Consultar cotización',
    image: '/images/catalog/bgroup_corpbags.webp',
  },
  {
    id: 'roll-screens-banners-gigantografias',
    name: 'Roll screens, banners & gigantografías',
    category: 'gran-formato',
    tag: 'GRAN FORMATO',
    description:
      'Soluciones de gran formato para eventos, puntos de venta, oficinas, activaciones y espacios comerciales.',
    feature: 'Alto impacto visual',
    price: 'Consultar cotización',
    image: null,
  },
  {
    id: 'editorial-papeleria-corporativa',
    name: 'Editorial & papelería corporativa',
    category: 'editorial',
    tag: 'EDITORIAL',
    description:
      'Cuadernos, agendas, calendarios, catálogos, brochures y piezas impresas desarrolladas para tu empresa.',
    feature: 'Producción personalizada',
    price: 'Consultar cotización',
    image: '/images/catalog/bgroup_editorial_papers.webp',
  },
  {
    id: 'merchandising-corporativo',
    name: 'Merchandising corporativo',
    category: 'merchandising',
    tag: 'MERCHANDISING',
    description:
      'Productos personalizados para campañas, eventos, equipos de trabajo, clientes y acciones promocionales.',
    feature: 'Fortalece la presencia de tu marca',
    price: 'Consultar cotización',
    image: '/images/catalog/bgroup_corpmerch.webp',
  },
  {
    id: 'acabados-especiales',
    name: 'Acabados especiales',
    category: 'acabados',
    tag: 'ACABADOS',
    description:
      'Laminados mate y brillante, stamping, plastificados, troquelados y acabados que aportan diferenciación a cada pieza.',
    feature: 'El detalle que transforma el resultado',
    price: 'Consultar cotización',
    image: '/images/items/bggroup_prints_new.webp',
  },
];

// Helper: find a single product by its slug id (with fallback to first match).
function getProductById(id) {
  const found = mockProducts.find((product) => product.id === id);
  if (found) return found;
  // Fallback search by category or partial match
  return mockProducts.find((p) => id && id.includes(p.category)) || mockProducts[0];
}

export default mockProducts;
export { getProductById };