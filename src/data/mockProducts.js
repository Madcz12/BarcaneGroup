// Mock product catalog for BarcaneGroup packaging & corporate merch company.
// Configured with catalog products and multi-item carousels per product line.

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
    items: [
      {
        id: 'bolsas-boutique-kraft',
        name: 'Bolsas Boutique & Kraft Personalizadas',
        image: '/images/catalog/Products/bcgroup_boutique_bags.webp',
        tag: 'PACKAGING',
        feature: 'Acabados finos y asas a elección',
        description: 'Bolsas de papel boutique y kraft de alta resistencia, diseñadas a medida para potenciar la presentación de tu marca.',
      },
      {
        id: 'bolsas-ejecutivas-premium',
        name: 'Bolsas Ejecutivas Premium',
        image: '/images/items/barcanegroup_bolsas3.webp',
        tag: 'PACKAGING',
        feature: 'Asas de cordón y acabado mate o brillo',
        description: 'Empaques ejecutivos elegantes en couché con solapa reforzada para boutiques de lujo.',
      },
      {
        id: 'bolsas-kraft-ecologicas',
        name: 'Bolsas Kraft Ecológicas',
        image: '/images/items/bgroup_bolsakraft1.webp',
        tag: 'PACKAGING',
        feature: 'Papel kraft 100% reciclable',
        description: 'Bolsas ecológicas de gran durabilidad ideales para envíos, tiendas y delivery comercial.',
      },
      {
        id: 'bolsas-packabags',
        name: 'Bolsas Boutique & Packaging Packabags',
        image: '/images/catalog/Products/bcgroup_catalog_packabags.webp',
        tag: 'PACKAGING',
        feature: 'Impresión personalizada y alta resistencia',
        description: 'Bolsas de papel boutique y kraft con diseños exclusivos y acabados de alta durabilidad para marcas.',
      },
    ],
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
    items: [
      {
        id: 'kits-corporativos',
        name: 'Kits Corporativos & Bienvenida',
        image: '/images/catalog/Products/bcgroup_corpokit.webp',
        tag: 'MERCHANDISING',
        feature: 'Combinaciones y empaques personalizados',
        description: 'Sets personalizados de branding corporativo ideales para onboarding de colaboradores, regalos institucionales y eventos VIP.',
      },
      {
        id: 'merch-textil-accesorios',
        name: 'Merchandising Textil & Accesorios',
        image: '/images/catalog/MerchTextile/bcgroup_textile_corporate.webp',
        tag: 'MERCHANDISING',
        feature: 'Prendas y accesorios con bordado o estampado',
        description: 'Textiles corporativos de alta calidad y accesorios personalizados para la imagen de tu empresa.',
      },
      {
        id: 'botellas-tazas-promocionales',
        name: 'Toma-todos & Tazas Promocionales',
        image: '/images/catalog/MerchTextile/bcgroup_merch_bottles.webp',
        tag: 'MERCHANDISING',
        feature: 'Grabado láser y tampografía duradera',
        description: 'Productos reutilizables para oficina, eventos corporativos y campañas promocionales.',
      },
    ],
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
    items: [
      {
        id: 'packaging-cajas-lujo',
        name: 'Packaging & Cajas de Lujo',
        image: '/images/catalog/Products/bcgroup_glam_packaging.webp',
        tag: 'PACKAGING',
        feature: 'Estructuras rígidas y acabados premium',
        description: 'Cajas rígidas y empaques premium con acabados especiales, diseñados para destacar productos exclusivos.',
      },
      {
        id: 'cajas-rigidas-iman',
        name: 'Cajas Rígidas con Cierre Magnético',
        image: '/images/catalog/Packaging/bggroup_packaging_boxes.webp',
        tag: 'PACKAGING',
        feature: 'Cierre magnético e interiores a medida',
        description: 'Empaques de alta gama con espuma troquelada o guata para productos de edición especial.',
      },
      {
        id: 'fajas-empaques-alimentos',
        name: 'Fajas & Papeles de Empaque',
        image: '/images/catalog/Packaging/bggroup_packaging_papers_sleeves.webp',
        tag: 'PACKAGING',
        feature: 'Impresión grado alimenticio y fajas kraft',
        description: 'Presentación higiénica y personalizada para alimentos, repostería y regalos finos.',
      },
    ],
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
    items: [
      {
        id: 'hangtags-etiquetas-colgantes',
        name: 'Hangtags & Etiquetas Colgantes',
        image: '/images/catalog/Products/bcgroup_hangtags.webp',
        tag: 'ETIQUETAS',
        feature: 'Variedad de cartulinas y formas troqueladas',
        description: 'Etiquetas colgantes en cartulinas finas para ropa, accesorios y productos retail con perforación y cordones.',
      },
      {
        id: 'etiquetas-ropa-troqueladas',
        name: 'Etiquetas para Ropa & Retail',
        image: '/images/items/card_tags_packages.webp',
        tag: 'ETIQUETAS',
        feature: 'Perforación y cordones incluidos',
        description: 'Branding de prendas y accesorios con acabado fino, plastificado mate y relieve.',
      },
    ],
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
    items: [
      {
        id: 'plegables-folletos-especiales',
        name: 'Plegables & Folletos Especiales',
        image: '/images/catalog/Products/bcgroup_individual_fold.webp',
        tag: 'EDITORIAL',
        feature: 'Plegados y troquelados a medida',
        description: 'Impresos desplegables con cortes y troqueles interactivos para presentaciones comerciales de alto impacto.',
      },
      {
        id: 'desplegables-interactivos',
        name: 'Desplegables & Cartas de Presentación',
        image: '/images/catalog/CorpPrints/bggroup_corp_impr_item1.webp',
        tag: 'EDITORIAL',
        feature: 'Formatos acordonados y troquelados',
        description: 'Material promocional único para activaciones de marca y lanzamientos de productos.',
      },
    ],
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
    items: [
      {
        id: 'carpetas-corporativas',
        name: 'Carpetas Corporativas Personalizadas',
        image: '/images/catalog/Products/bcgroup_perso_folders.webp',
        tag: 'EDITORIAL',
        feature: 'Con solapa e hendidura para tarjeta',
        description: 'Carpetas de presentación con solapa para documentos, propuestas comerciales y entregas institucionales.',
      },
      {
        id: 'carpetas-institucionales-executive',
        name: 'Carpetas Institucionales Executive',
        image: '/images/catalog/CorpPrints/bggroup_corp_impr_item2.webp',
        tag: 'EDITORIAL',
        feature: 'Laminado mate y reserva UV',
        description: 'Carpetas profesionales de alta rigidez para licitaciones, propuestas y documentación corporativa.',
      },
    ],
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
    items: [
      {
        id: 'photochecks-lanyards',
        name: 'Photochecks & Lanyards Corporativos',
        image: '/images/catalog/Products/bcgroup_photocheck_lanyards.webp',
        tag: 'MERCHANDISING',
        feature: 'Impresión en alta definición y accesorios duraderos',
        description: 'Credenciales en PVC y cintas estampadas con el logo de tu empresa para control de acceso e identificación.',
      },
      {
        id: 'cintas-lanyards-sublimadas',
        name: 'Lanyards Sublimados Full Color',
        image: '/images/items/bggroup_new_brand_equipment_notext.webp',
        tag: 'MERCHANDISING',
        feature: 'Mosquetón metálico y hebilla rachet',
        description: 'Cintas porta carnet duraderas de alta visibilidad para ferias, congresos y personal corporativo.',
      },
    ],
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
    items: [
      {
        id: 'stickers-relieve-acabados',
        name: 'Stickers con Relieve & Acabados Especiales',
        image: '/images/catalog/Products/bcgroup_stickers_relieves.webp',
        tag: 'ETIQUETAS',
        feature: 'Texturas con relieve y brillo metálico',
        description: 'Etiquetas adhesivas con efecto 3D, lacado UV selectivo y stamping metalizado para productos de alta gama.',
      },
      {
        id: 'etiquetas-seguridad-resina',
        name: 'Etiquetas Gota de Resina & Seguridad',
        image: '/images/items/bggroup_sec_stickers.webp',
        tag: 'ETIQUETAS',
        feature: 'Efecto domo 3D y adhesivo reforzado',
        description: 'Etiquetas resinadas de alta durabilidad e impecables acabados sobre superficies metálicas o plásticas.',
      },
    ],
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
    items: [
      {
        id: 'stickers-etiquetas-autoadhesivas',
        name: 'Stickers & Etiquetas Autoadhesivas',
        image: '/images/catalog/Products/bcgroup_stickers_two.webp',
        tag: 'ETIQUETAS',
        feature: 'Corte preciso troquelado o en pliegos',
        description: 'Stickers troquelados en vinil o papel autoadhesivo para envases, cierres de empaques y branding publicitario.',
      },
      {
        id: 'stickers-vinilo-impermeable',
        name: 'Stickers de Vinil Impermeable',
        image: '/images/items/bgroup_stickers.png',
        tag: 'ETIQUETAS',
        feature: 'Resistentes al agua y rayos UV',
        description: 'Calcomanías personalizadas con troquel exacto para botellas, envases y uso en exteriores.',
      },
    ],
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
    items: [
      {
        id: 'tripticos-blocks-flyers',
        name: 'Trípticos, Blocks & Flyers',
        image: '/images/catalog/Products/bcgroup_tripticblock_flyers.webp',
        tag: 'EDITORIAL',
        feature: 'Múltiples gramajes y acabados de superficie',
        description: 'Material informativo y promocional impreso en alta calidad para campañas comerciales, ferias y atención al cliente.',
      },
      {
        id: 'flyers-afiches-publicitarios',
        name: 'Flyers & Afiches Publicitarios',
        image: '/images/catalog/CorpPrints/bggroup_corp_impr_item3.webp',
        tag: 'EDITORIAL',
        feature: 'Papel cuché brillo o mate',
        description: 'Volantes y afiches impresos con alta vivacidad de color para distribución comercial masiva.',
      },
    ],
  },
];

// Helper: find a single product by its slug id (with fallback to first match).
function getProductById(id) {
  // Direct match at root level
  const rootFound = mockProducts.find((product) => product.id === id);
  if (rootFound) return rootFound;

  // Search inside item galleries
  for (const product of mockProducts) {
    if (product.items) {
      const subItem = product.items.find((item) => item.id === id);
      if (subItem) {
        return {
          ...product,
          ...subItem,
        };
      }
    }
  }

  const idMap = {
    'impresos-corporativos': 'carpetas-corporativas',
    'empaques-personalizados': 'packaging-cajas-lujo',
    'merchandising': 'kits-corporativos',
    'material-publicitario': 'stickers-etiquetas-autoadhesivas',
    'papeles-especiales': 'tripticos-blocks-flyers',
    'acabados-especiales': 'stickers-relieve-acabados',
  };
  if (idMap[id]) {
    return getProductById(idMap[id]);
  }

  // Fallback search by category or partial match
  return mockProducts.find((p) => id && id.includes(p.category)) || mockProducts[0];
}

export default mockProducts;
export { getProductById };