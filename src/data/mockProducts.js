// Mock product catalog for BarcaneGroup packaging & corporate merch company.
// Configured with catalog products and multi-item carousels per product line.

const mockProducts = [
  {
    id: 'bolsas-comerciales',
    name: 'Bolsas Comerciales',
    category: 'packaging',
    tag: 'PACKAGING',
    description:
      'En diferentes materiales de papel y de alta resistencia, diseñadas a medida para potenciar la presentación de tu marca.',
    feature: 'Acabados finos y asas a elección',
    price: 'Consultar cotización',
    image: '/images/catalog/Products/bcgroup_boutique_bags.webp',
    items: [
      {
        id: 'bolsas-comerciales',
        name: 'Bolsas Comerciales',
        image: '/images/catalog/Products/bcgroup_boutique_bags.webp',
        tag: 'PACKAGING',
        feature: 'Acabados finos y asas a elección',
        description:
          'En diferentes materiales de papel y de alta resistencia, diseñadas a medida para potenciar la presentación de tu marca.',
      },
      {
        id: 'bolsas-ejecutivas-premium',
        name: 'Bolsas Ejecutivas Premium',
        image: '/images/items/barcanegroup_bolsas3.webp',
        tag: 'PACKAGING',
        feature: 'Asas de cordón y acabado mate o brillo',
        description:
          'Empaques ejecutivos elegantes en couché con solapa reforzada para boutiques de lujo.',
      },
      {
        id: 'bolsas-kraft-ecologicas',
        name: 'Bolsas Kraft Ecológicas',
        image: '/images/items/bgroup_bolsakraft1.webp',
        tag: 'PACKAGING',
        feature: 'Papel kraft 100% reciclable',
        description:
          'Bolsas ecológicas de gran durabilidad ideales para envíos, tiendas y delivery comercial.',
      },
      {
        id: 'bolsas-packabags',
        name: 'Bolsas Boutique & Packaging Packabags',
        image: '/images/catalog/Products/bcgroup_catalog_packabags.webp',
        tag: 'PACKAGING',
        feature: 'Impresión personalizada y alta resistencia',
        description:
          'Bolsas de papel boutique y kraft con diseños exclusivos y acabados de alta durabilidad para marcas.',
      },
    ],
  },
  {
    id: 'kits-corporativos-merchandising',
    name: 'Kits Corporativos – Merchandising',
    category: 'merchandising',
    tag: 'MERCHANDISING',
    description:
      'Sets personalizados de productos branding ideales para bienvenida de colaboradores, regalos institucionales y eventos VIP.',
    feature: 'Combinaciones y empaques personalizados',
    price: 'Consultar cotización',
    image: '/images/catalog/Products/bcgroup_corpokit.webp',
    items: [
      {
        id: 'kits-corporativos-merchandising',
        name: 'Kits Corporativos – Merchandising',
        image: '/images/catalog/Products/bcgroup_corpokit.webp',
        tag: 'MERCHANDISING',
        feature: 'Combinaciones y empaques personalizados',
        description:
          'Sets personalizados de productos branding ideales para bienvenida de colaboradores, regalos institucionales y eventos VIP.',
      },
      {
        id: 'merch-textil-accesorios',
        name: 'Merchandising Textil & Accesorios',
        image: '/images/catalog/MerchTextile/bcgroup_textile_corporate.webp',
        tag: 'MERCHANDISING',
        feature: 'Prendas y accesorios con bordado o estampado',
        description:
          'Textiles corporativos de alta calidad y accesorios personalizados para la imagen de tu empresa.',
      },
      {
        id: 'botellas-tazas-promocionales',
        name: 'Toma-todos & Tazas Promocionales',
        image: '/images/catalog/MerchTextile/bcgroup_merch_bottles.webp',
        tag: 'MERCHANDISING',
        feature: 'Grabado láser y tampografía duradera',
        description:
          'Productos reutilizables para oficina, eventos corporativos y campañas promocionales.',
      },
    ],
  },
  {
    id: 'empaques-packaging',
    name: 'Empaques - Packaging',
    category: 'packaging',
    tag: 'PACKAGING',
    description:
      'Cajas rígidas y empaques premium con acabados especiales, diseñados para destacar tus productos.',
    feature: 'Estructuras rígidas y acabados premium',
    price: 'Consultar cotización',
    image: '/images/catalog/Products/bcgroup_glam_packaging.webp',
    items: [
      {
        id: 'empaques-packaging',
        name: 'Empaques - Packaging',
        image: '/images/catalog/Products/bcgroup_glam_packaging.webp',
        tag: 'PACKAGING',
        feature: 'Estructuras rígidas y acabados premium',
        description:
          'Cajas rígidas y empaques premium con acabados especiales, diseñados para destacar tus productos.',
      },
      {
        id: 'cajas-rigidas-iman',
        name: 'Cajas Rígidas con Cierre Magnético',
        image: '/images/catalog/Packaging/bggroup_packaging_boxes.webp',
        tag: 'PACKAGING',
        feature: 'Cierre magnético e interiores a medida',
        description:
          'Empaques de alta gama con espuma troquelada o guata para productos de edición especial.',
      },
      {
        id: 'fajas-empaques-alimentos',
        name: 'Fajas & Papeles de Empaque',
        image: '/images/catalog/Packaging/bggroup_packaging_papers_sleeves.webp',
        tag: 'PACKAGING',
        feature: 'Impresión grado alimenticio y fajas kraft',
        description:
          'Presentación higiénica y personalizada para alimentos, repostería y regalos finos.',
      },
    ],
  },
  {
    id: 'hangtags',
    name: 'Hangtags',
    category: 'etiquetas',
    tag: 'ETIQUETAS',
    description:
      'Etiquetas colgantes en diferentes materiales para ropa, accesorios y productos retail.',
    feature: 'Variedad de cartulinas y formas troqueladas',
    price: 'Consultar cotización',
    image: '/images/catalog/Products/bcgroup_hangtags.webp',
    items: [
      {
        id: 'hangtags',
        name: 'Hangtags',
        image: '/images/catalog/Products/bcgroup_hangtags.webp',
        tag: 'ETIQUETAS',
        feature: 'Variedad de cartulinas y formas troqueladas',
        description:
          'Etiquetas colgantes en diferentes materiales para ropa, accesorios y productos retail.',
      },
      {
        id: 'etiquetas-ropa-troqueladas',
        name: 'Etiquetas para Ropa & Retail',
        image: '/images/items/card_tags_packages.webp',
        tag: 'ETIQUETAS',
        feature: 'Perforación y cordones incluidos',
        description:
          'Branding de prendas y accesorios con acabado fino, plastificado mate y relieve.',
      },
    ],
  },
  {
    id: 'folletos-jalavistas-tripticos-carpetas',
    name: 'Folletos, Jalavistas, Tripticos, Cuadernillos, Carpetas',
    category: 'editorial',
    tag: 'EDITORIAL',
    description:
      'Impresos para propuestas comerciales y entregas institucionales.',
    feature: 'Con solapa, hendiduras y troqueles a medida',
    price: 'Consultar cotización',
    image: '/images/catalog/Products/bcgroup_perso_folders.webp',
    items: [
      {
        id: 'folletos-jalavistas-tripticos-carpetas',
        name: 'Folletos, Jalavistas, Tripticos, Cuadernillos, Carpetas',
        image: '/images/catalog/Products/bcgroup_perso_folders.webp',
        tag: 'EDITORIAL',
        feature: 'Con solapa, hendiduras y troqueles a medida',
        description:
          'Impresos para propuestas comerciales y entregas institucionales.',
      },
      {
        id: 'carpetas-institucionales-executive',
        name: 'Carpetas Institucionales Executive',
        image: '/images/catalog/CorpPrints/bggroup_corp_impr_item2.webp',
        tag: 'EDITORIAL',
        feature: 'Laminado mate y reserva UV',
        description:
          'Carpetas profesionales de alta rigidez para licitaciones, propuestas y documentación corporativa.',
      },
      {
        id: 'folletos-promocionales',
        name: 'Folletos & Jalavistas Publicitarios',
        image: '/images/catalog/CorpPrints/bggroup_corp_impr_item3.webp',
        tag: 'EDITORIAL',
        feature: 'Papel cuché brillo o mate',
        description:
          'Piezas publicitarias de alta resolución para punto de venta y captación de clientes.',
      },
    ],
  },
  {
    id: 'calendarios-blocks-revistas-cuadernos-libros',
    name: 'Calendarios, Blocks, Revistas, Cuadernos, Libros',
    category: 'editorial',
    tag: 'EDITORIAL',
    description:
      'Material informativo y promocional impreso en alta calidad para campañas comerciales, ferias y atención al cliente.',
    feature: 'Múltiples gramajes, encuadernados y acabados',
    price: 'Consultar cotización',
    image: '/images/items/barcanegroup_calendars.webp',
    items: [
      {
        id: 'calendarios-blocks-revistas-cuadernos-libros',
        name: 'Calendarios, Blocks, Revistas, Cuadernos, Libros',
        image: '/images/items/barcanegroup_calendars.webp',
        tag: 'EDITORIAL',
        feature: 'Múltiples gramajes, encuadernados y acabados',
        description:
          'Material informativo y promocional impreso en alta calidad para campañas comerciales, ferias y atención al cliente.',
      },
      {
        id: 'blocks-cuadernos-corporativos',
        name: 'Blocks & Cuadernos Corporativos',
        image: '/images/catalog/Products/bcgroup_tripticblock_flyers.webp',
        tag: 'EDITORIAL',
        feature: 'Anillado doble ring o encolado',
        description:
          'Cuadernos y blocks de notas corporativos con portadas personalizadas y acabado premium.',
      },
      {
        id: 'revistas-catalogos-institucionales',
        name: 'Revistas & Libros Institucionales',
        image: '/images/catalog/CorpPrints/bggroup_corp_impr_item1.webp',
        tag: 'EDITORIAL',
        feature: 'Encuadernación cosida o pegada al lomo',
        description:
          'Publicaciones editoriales de alta calidad gráfica y acabado prolijo.',
      },
    ],
  },
  {
    id: 'etiquetas',
    name: 'Etiquetas',
    category: 'etiquetas',
    tag: 'ETIQUETAS',
    description:
      'Etiquetas en papel, adhesivo o vinil para envases, cierres de empaques y branding publicitario; con acabados rectos, troquelados y con relieve.',
    feature: 'Acabados rectos, troquelados y con relieve',
    price: 'Consultar cotización',
    image: '/images/catalog/Products/bcgroup_stickers_two.webp',
    items: [
      {
        id: 'etiquetas',
        name: 'Etiquetas',
        image: '/images/catalog/Products/bcgroup_stickers_two.webp',
        tag: 'ETIQUETAS',
        feature: 'Acabados rectos, troquelados y con relieve',
        description:
          'Etiquetas en papel, adhesivo o vinil para envases, cierres de empaques y branding publicitario; con acabados rectos, troquelados y con relieve.',
      },
      {
        id: 'stickers-relieve-acabados',
        name: 'Stickers con Relieve & Acabados Especiales',
        image: '/images/catalog/Products/bcgroup_stickers_relieves.webp',
        tag: 'ETIQUETAS',
        feature: 'Texturas con relieve y brillo metálico',
        description:
          'Etiquetas adhesivas con efecto 3D, lacado UV selectivo y stamping metalizado para productos de alta gama.',
      },
      {
        id: 'stickers-vinilo-impermeable',
        name: 'Stickers de Vinil Impermeable',
        image: '/images/items/bgroup_stickers.png',
        tag: 'ETIQUETAS',
        feature: 'Resistentes al agua y rayos UV',
        description:
          'Calcomanías personalizadas con troquel exacto para botellas, envases y uso en exteriores.',
      },
    ],
  },
  {
    id: 'photochecks-y-lanyards',
    name: 'Photochecks y Lanyards',
    category: 'merchandising',
    tag: 'MERCHANDISING',
    description:
      'Credenciales en PVC y cintas estampadas con el logo de tu empresa para control de acceso e identificación.',
    feature: 'Impresión en alta definición y accesorios duraderos',
    price: 'Consultar cotización',
    image: '/images/catalog/Products/bcgroup_photocheck_lanyards.webp',
    items: [
      {
        id: 'photochecks-y-lanyards',
        name: 'Photochecks y Lanyards',
        image: '/images/catalog/Products/bcgroup_photocheck_lanyards.webp',
        tag: 'MERCHANDISING',
        feature: 'Impresión en alta definición y accesorios duraderos',
        description:
          'Credenciales en PVC y cintas estampadas con el logo de tu empresa para control de acceso e identificación.',
      },
      {
        id: 'cintas-lanyards-sublimadas',
        name: 'Lanyards Sublimados Full Color',
        image: '/images/items/bggroup_new_brand_equipment_notext.webp',
        tag: 'MERCHANDISING',
        feature: 'Mosquetón metálico y hebilla rachet',
        description:
          'Cintas porta carnet duraderas de alta visibilidad para ferias, congresos y personal corporativo.',
      },
    ],
  },
  {
    id: 'plegables-especiales',
    name: 'Plegables Especiales',
    category: 'editorial',
    tag: 'EDITORIAL',
    description:
      'Desplegables con cortes y troqueles interactivos para presentaciones comerciales de alto impacto.',
    feature: 'Cortes y troqueles interactivos a medida',
    price: 'Consultar cotización',
    image: '/images/catalog/Products/bcgroup_individual_fold.webp',
    items: [
      {
        id: 'plegables-especiales',
        name: 'Plegables Especiales',
        image: '/images/catalog/Products/bcgroup_individual_fold.webp',
        tag: 'EDITORIAL',
        feature: 'Cortes y troqueles interactivos a medida',
        description:
          'Desplegables con cortes y troqueles interactivos para presentaciones comerciales de alto impacto.',
      },
      {
        id: 'desplegables-interactivos',
        name: 'Desplegables & Cartas de Presentación',
        image: '/images/catalog/CorpPrints/bggroup_corp_impr_item4.webp',
        tag: 'EDITORIAL',
        feature: 'Formatos acordonados y troquelados',
        description:
          'Material promocional único para activaciones de marca y lanzamientos de productos.',
      },
    ],
  },
  {
    id: 'banners-y-viniles',
    name: 'Banners y Viniles',
    category: 'gran-formato',
    tag: 'GRAN FORMATO',
    description:
      'De alta resolución y resistentes diseñados para hacer destacar tu marca en cualquier espacio.',
    feature: 'Alta resolución y resistencia para exteriores e interiores',
    price: 'Consultar cotización',
    image: '/images/catalog/Equipment/bccgroup_gigantic_format.webp',
    items: [
      {
        id: 'banners-y-viniles',
        name: 'Banners y Viniles',
        image: '/images/catalog/Equipment/bccgroup_gigantic_format.webp',
        tag: 'GRAN FORMATO',
        feature: 'Alta resolución y resistencia para exteriores e interiores',
        description:
          'De alta resolución y resistentes diseñados para hacer destacar tu marca en cualquier espacio.',
      },
      {
        id: 'viniles-decorativos-comerciales',
        name: 'Viniles Decorativos & Comerciales',
        image: '/images/catalog/Equipment/bcgroup_evt_spaces.webp',
        tag: 'GRAN FORMATO',
        feature: 'Adherencia duradera y acabado mate o brillo',
        description:
          'Viniles adhesivos de alta adherencia y calidad fotográfica para muros, vidrios y vehículos.',
      },
    ],
  },
  {
    id: 'displays-exhibidores-materiales-pop',
    name: 'Displays para interiores y exteriores, Exhibidores, Materiales POP',
    category: 'gran-formato',
    tag: 'GRAN FORMATO',
    description:
      'Estructuras metálicas y de madera ideal para la comunicación visual de reuniones, lanzamientos y otros eventos.',
    feature: 'Estructuras metálicas y de madera a medida',
    price: 'Consultar cotización',
    image: '/images/catalog/Equipment/bcgroup_backinggirl_equipment.webp',
    items: [
      {
        id: 'displays-exhibidores-materiales-pop',
        name: 'Displays para interiores y exteriores, Exhibidores, Materiales POP',
        image: '/images/catalog/Equipment/bcgroup_backinggirl_equipment.webp',
        tag: 'GRAN FORMATO',
        feature: 'Estructuras metálicas y de madera a medida',
        description:
          'Estructuras metálicas y de madera ideal para la comunicación visual de reuniones, lanzamientos y otros eventos.',
      },
      {
        id: 'exhibidores-punto-venta',
        name: 'Exhibidores & Materiales POP',
        image: '/images/catalog/Equipment/bcgroup_pos.webp',
        tag: 'GRAN FORMATO',
        feature: 'Stands y módulos de exhibición de alto impacto',
        description:
          'Módulos y displays de exhibición para punto de venta y ferias comerciales.',
      },
      {
        id: 'backings-estructuras-eventos',
        name: 'Backings & Estructuras para Eventos',
        image: '/images/catalog/Equipment/bcgroup_evt_snacks.webp',
        tag: 'GRAN FORMATO',
        feature: 'Fácil montaje y transporte',
        description:
          'Estructuras modulares para branding en conferencias, lanzamientos y eventos.',
      },
    ],
  },
  {
    id: 'textiles',
    name: 'Textiles',
    category: 'merchandising',
    tag: 'MERCHANDISING',
    description:
      'Uniformes, prendas y accesorios personalizados para promocionar tu marca y fidelizar clientes.',
    feature: 'Bordados, estampados y confección de calidad',
    price: 'Consultar cotización',
    image: '/images/catalog/MerchTextile/bcgroup_textile_corporate.webp',
    items: [
      {
        id: 'textiles',
        name: 'Textiles',
        image: '/images/catalog/MerchTextile/bcgroup_textile_corporate.webp',
        tag: 'MERCHANDISING',
        feature: 'Bordados, estampados y confección de calidad',
        description:
          'Uniformes, prendas y accesorios personalizados para promocionar tu marca y fidelizar clientes.',
      },
      {
        id: 'uniformes-prendas-corporativas',
        name: 'Uniformes & Prendas Corporativas',
        image: '/images/items/card_merch_cloth.webp',
        tag: 'MERCHANDISING',
        feature: 'Polos, camisas, casacas y chalecos',
        description:
          'Prendas de alta durabilidad con bordado o estampado computarizado de precisión.',
      },
      {
        id: 'accesorios-textiles-promocionales',
        name: 'Accesorios Textiles Promocionales',
        image: '/images/catalog/MerchTextile/bcgroup_campaign_events.webp',
        tag: 'MERCHANDISING',
        feature: 'Gorros, tote bags y accesorios',
        description:
          'Gorros, bolsas ecológicas de tela y accesorios para eventos y campañas de fidelización.',
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
    'bolsas-boutique-kraft': 'bolsas-comerciales',
    'kits-corporativos': 'kits-corporativos-merchandising',
    'packaging-cajas-lujo': 'empaques-packaging',
    'hangtags-etiquetas-colgantes': 'hangtags',
    'plegables-folletos-especiales': 'plegables-especiales',
    'carpetas-corporativas': 'folletos-jalavistas-tripticos-carpetas',
    'stickers-relieve-acabados': 'etiquetas',
    'stickers-etiquetas-autoadhesivas': 'etiquetas',
    'tripticos-blocks-flyers': 'calendarios-blocks-revistas-cuadernos-libros',
    'impresos-corporativos': 'folletos-jalavistas-tripticos-carpetas',
    'empaques-personalizados': 'empaques-packaging',
    'merchandising': 'kits-corporativos-merchandising',
    'material-publicitario': 'etiquetas',
    'papeles-especiales': 'calendarios-blocks-revistas-cuadernos-libros',
    'acabados-especiales': 'etiquetas',
  };
  if (idMap[id]) {
    return getProductById(idMap[id]);
  }

  // Fallback search by category or partial match
  return (
    mockProducts.find((p) => id && id.includes(p.category)) || mockProducts[0]
  );
}

export default mockProducts;
export { getProductById };