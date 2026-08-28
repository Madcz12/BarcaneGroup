// Mock product catalog for BarcaneGroup packaging & corporate merch company.
// Configured with the 10 catalog product items in WebP format.

const mockProducts = [
  {
    id: 'bolsas-boutique-kraft',
    name: 'Bolsas Boutique & Kraft Personalizadas',
    category: 'packaging',
    tag: 'PACKAGING',
    description:
      'Bolsas de papel boutique y kraft de alta resistencia, diseñadas a medida para potenciar la presentación de tu marca.',
    feature: 'Acabados finos y asas a elección',
    price: 'Consultar cotización',
    image: '/images/catalog/Products/bcgroup_boutique_bags.webp',
  },
  {
    id: 'kits-corporativos',
    name: 'Kits Corporativos & Bienvenida',
    category: 'merchandising',
    tag: 'MERCHANDISING',
    description:
      'Sets personalizados de branding corporativo ideales para onboarding de colaboradores, regalos institucionales y eventos VIP.',
    feature: 'Combinaciones y empaques personalizados',
    price: 'Consultar cotización',
    image: '/images/catalog/Products/bcgroup_corpokit.webp',
  },
  {
    id: 'packaging-cajas-lujo',
    name: 'Packaging & Cajas de Lujo',
    category: 'packaging',
    tag: 'PACKAGING',
    description:
      'Cajas rígidas y empaques premium con acabados especiales, diseñados para destacar productos exclusivos.',
    feature: 'Estructuras rígidas y acabados premium',
    price: 'Consultar cotización',
    image: '/images/catalog/Products/bcgroup_glam_packaging.webp',
  },
  {
    id: 'hangtags-etiquetas-colgantes',
    name: 'Hangtags & Etiquetas Colgantes',
    category: 'etiquetas',
    tag: 'ETIQUETAS',
    description:
      'Etiquetas colgantes en cartulinas finas para ropa, accesorios y productos retail con perforación y cordones.',
    feature: 'Variedad de cartulinas y formas troqueladas',
    price: 'Consultar cotización',
    image: '/images/catalog/Products/bcgroup_hangtags.webp',
  },
  {
    id: 'plegables-folletos-especiales',
    name: 'Plegables & Folletos Especiales',
    category: 'editorial',
    tag: 'EDITORIAL',
    description:
      'Impresos desplegables con cortes y troqueles interactivos para presentaciones comerciales de alto impacto.',
    feature: 'Plegados y troquelados a medida',
    price: 'Consultar cotización',
    image: '/images/catalog/Products/bcgroup_individual_fold.webp',
  },
  {
    id: 'carpetas-corporativas',
    name: 'Carpetas Corporativas Personalizadas',
    category: 'editorial',
    tag: 'EDITORIAL',
    description:
      'Carpetas de presentación con solapa para documentos, propuestas comerciales y entregas institucionales.',
    feature: 'Con solapa e hendidura para tarjeta',
    price: 'Consultar cotización',
    image: '/images/catalog/Products/bcgroup_perso_folders.webp',
  },
  {
    id: 'photochecks-lanyards',
    name: 'Photochecks & Lanyards Corporativos',
    category: 'merchandising',
    tag: 'MERCHANDISING',
    description:
      'Credenciales en PVC y cintas estampadas con el logo de tu empresa para control de acceso e identificación.',
    feature: 'Impresión en alta definición y accesorios duraderos',
    price: 'Consultar cotización',
    image: '/images/catalog/Products/bcgroup_photocheck_lanyards.webp',
  },
  {
    id: 'stickers-relieve-acabados',
    name: 'Stickers con Relieve & Acabados Especiales',
    category: 'etiquetas',
    tag: 'ETIQUETAS',
    description:
      'Etiquetas adhesivas con efecto 3D, lacado UV selectivo y stamping metalizado para productos de alta gama.',
    feature: 'Texturas con relieve y brillo metálico',
    price: 'Consultar cotización',
    image: '/images/catalog/Products/bcgroup_stickers_relieves.webp',
  },
  {
    id: 'stickers-etiquetas-autoadhesivas',
    name: 'Stickers & Etiquetas Autoadhesivas',
    category: 'etiquetas',
    tag: 'ETIQUETAS',
    description:
      'Stickers troquelados en vinil o papel autoadhesivo para envases, cierres de empaques y branding publicitario.',
    feature: 'Corte preciso troquelado o en pliegos',
    price: 'Consultar cotización',
    image: '/images/catalog/Products/bcgroup_stickers_two.webp',
  },
  {
    id: 'tripticos-blocks-flyers',
    name: 'Trípticos, Blocks & Flyers',
    category: 'editorial',
    tag: 'EDITORIAL',
    description:
      'Material informativo y promocional impreso en alta calidad para campañas comerciales, ferias y atención al cliente.',
    feature: 'Múltiples gramajes y acabados de superficie',
    price: 'Consultar cotización',
    image: '/images/catalog/Products/bcgroup_tripticblock_flyers.webp',
  },
];

// Helper: find a single product by its slug id (with fallback to first match).
function getProductById(id) {
  const found = mockProducts.find((product) => product.id === id);
  if (found) return found;

  const idMap = {
    'impresos-corporativos': 'carpetas-corporativas',
    'empaques-personalizados': 'packaging-cajas-lujo',
    'merchandising': 'kits-corporativos',
    'material-publicitario': 'stickers-etiquetas-autoadhesivas',
    'papeles-especiales': 'tripticos-blocks-flyers',
    'acabados-especiales': 'stickers-relieve-acabados',
  };
  if (idMap[id]) {
    return mockProducts.find((product) => product.id === idMap[id]);
  }

  // Fallback search by category or partial match
  return mockProducts.find((p) => id && id.includes(p.category)) || mockProducts[0];
}

export default mockProducts;
export { getProductById };