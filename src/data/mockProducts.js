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
    image: '/images/catalog/Ecobags/Firefly fondo blanco y colocarle asas a la bolsa.webp',
    items: [
      {
        id: 'bolsas-comerciales',
        name: 'Bolsas Comerciales',
        image: '/images/catalog/Ecobags/Firefly fondo blanco y colocarle asas a la bolsa.webp',
        tag: 'PACKAGING',
        feature: 'Acabados finos y asas a elección',
        description:
          'En diferentes materiales de papel y de alta resistencia, diseñadas a medida para potenciar la presentación de tu marca.',
      },
      {
        id: 'bolsas-ecobags-externos',
        name: 'Bolsas Ecológicas con Asas',
        image: '/images/catalog/Ecobags/Firefly-quitar-los-textos-externos.webp',
        tag: 'PACKAGING',
        feature: 'Asas de cordón y acabado premium',
        description:
          'Empaques ejecutivos elegantes con solapa reforzada y acabados de lujo para boutiques.',
      },
      {
        id: 'bolsas-kraft-sostenibles',
        name: 'Bolsas Kraft Sostenibles',
        image: '/images/catalog/Ecobags/Firefly-retirar-la-descripcion-inferior.webp',
        tag: 'PACKAGING',
        feature: 'Papel kraft 100% reciclable',
        description:
          'Bolsas ecológicas de gran durabilidad ideales para envíos, tiendas y delivery comercial.',
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
    image: '/images/catalog/MerchTextile/merch_kit1.webp',
    items: [
      {
        id: 'kits-corporativos-merchandising',
        name: 'Kits Corporativos – Merchandising',
        image: '/images/catalog/MerchTextile/merch_kit1.webp',
        tag: 'MERCHANDISING',
        feature: 'Combinaciones y empaques personalizados',
        description:
          'Sets personalizados de productos branding ideales para bienvenida de colaboradores, regalos institucionales y eventos VIP.',
      },
      {
        id: 'merch-kit-welcome-pack',
        name: 'Welcome Packs & Cajas Onboarding',
        image: '/images/catalog/MerchTextile/merch_kit2.webp',
        tag: 'MERCHANDISING',
        feature: 'Cajas branding y artículos corporativos',
        description:
          'Packs corporativos de bienvenida para colaboradores con libretas, termos y accesorios.',
      },
      {
        id: 'merch-kit-premium-box',
        name: 'Kits Ejecutivos Premium',
        image: '/images/catalog/MerchTextile/merch_kit3.webp',
        tag: 'MERCHANDISING',
        feature: 'Presentación de lujo y branding institucional',
        description:
          'Kits corporativos de alta gama para regalos institucionales, fin de año y clientes VIP.',
      },
      {
        id: 'merch-kit-eventos',
        name: 'Kits para Eventos & Ferias',
        image: '/images/catalog/MerchTextile/merch_kit4.webp',
        tag: 'MERCHANDISING',
        feature: 'Artículos promocionales coordinados',
        description:
          'Soluciones publicitarias integrales para conferencias, convenciones y lanzamientos.',
      },
      {
        id: 'botellas-tazas-promocionales',
        name: 'Toma-todos & Botellas Promocionales',
        image: '/images/catalog/MerchTextile/bcgroup_merch_bottles.webp',
        tag: 'MERCHANDISING',
        feature: 'Grabado láser y tampografía duradera',
        description:
          'Productos reutilizables y tomatodos metálicos o plásticos para eventos y oficina.',
      },
      {
        id: 'merch-textil-accesorios',
        name: 'Accesorios & Bolsas Promocionales',
        image: '/images/catalog/MerchTextile/bcgroup_corpo_adds_bags.webp',
        tag: 'MERCHANDISING',
        feature: 'Prendas y accesorios con bordado o estampado',
        description:
          'Textiles corporativos y accesorios personalizados para la imagen de tu empresa.',
      },
      {
        id: 'merch-eventos-campanas',
        name: 'Merchandising para Campañas',
        image: '/images/catalog/MerchTextile/bcgroup_campaign_events.webp',
        tag: 'MERCHANDISING',
        feature: 'Artículos promocionales de alto impacto',
        description:
          'Materiales publicitarios para ferias, conferencias y lanzamientos institucionales.',
      },
      {
        id: 'merch-cartucheras-tocuyo',
        name: 'Cartucheras & Accesorios de Tocuyo',
        image: '/images/catalog/MerchTextile/Firefly cambiar esa bolsa por una cartuchera de tocuyo.webp',
        tag: 'MERCHANDISING',
        feature: 'Tela de tocuyo 100% ecológica',
        description:
          'Accesorios sustentables para kits corporativos y regalos institucionales.',
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
    image: '/images/catalog/Packaging/packaging1.webp',
    items: [
      {
        id: 'empaques-packaging',
        name: 'Empaques - Packaging',
        image: '/images/catalog/Packaging/packaging1.webp',
        tag: 'PACKAGING',
        feature: 'Estructuras rígidas y acabados premium',
        description:
          'Cajas rígidas y empaques premium con acabados especiales, diseñados para destacar tus productos.',
      },
      {
        id: 'packaging-cajas-lujo',
        name: 'Cajas Rígidas y Estuches de Lujo',
        image: '/images/catalog/Packaging/packaging2.webp',
        tag: 'PACKAGING',
        feature: 'Cierre magnético e interiores a medida',
        description:
          'Empaques de alta gama con acabados finos para productos de edición especial.',
      },
      {
        id: 'packaging-cajas-kraft',
        name: 'Cajas Kraft & Empaques Ecológicos',
        image: '/images/catalog/Packaging/packaging3.webp',
        tag: 'PACKAGING',
        feature: 'Material reciclable y alta resistencia',
        description:
          'Empaques resistentes y ecológicos para envíos, tiendas y productos artesanales.',
      },
      {
        id: 'cajas-rigidas-iman',
        name: 'Cajas Rígidas con Acabados Finos',
        image: '/images/catalog/Packaging/bggroup_packaging_boxes.webp',
        tag: 'PACKAGING',
        feature: 'Espuma troquelada o guata a medida',
        description:
          'Empaques exclusivos con acabados mate, brillo y reserva UV.',
      },
      {
        id: 'envolturas-grado-alimenticio',
        name: 'Papel Antigrasa & Envolturas Food',
        image: '/images/catalog/Packaging/bcgroup_food_wrappers.webp',
        tag: 'PACKAGING',
        feature: 'Papel antigrasa certificado y personalizado',
        description:
          'Envolturas para gastronomía, hamburgueserías y repostería con impresión inocua de alta calidad.',
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
    image: '/images/catalog/Hangtags/Firefly la imagen mas luz o nitida.webp',
    items: [
      {
        id: 'hangtags',
        name: 'Hangtags',
        image: '/images/catalog/Hangtags/Firefly la imagen mas luz o nitida.webp',
        tag: 'ETIQUETAS',
        feature: 'Variedad de cartulinas y formas troqueladas',
        description:
          'Etiquetas colgantes en diferentes materiales para ropa, accesorios y productos retail.',
      },
      {
        id: 'etiquetas-ropa-troqueladas',
        name: 'Etiquetas para Ropa & Retail',
        image: '/images/catalog/Hangtags/bcgroup_hangtags.jpg',
        tag: 'ETIQUETAS',
        feature: 'Perforación y acabados especiales',
        description:
          'Branding de prendas y accesorios con acabado fino, plastificado mate y relieve.',
      },
      {
        id: 'hangtags-cordon-lanyard',
        name: 'Hangtags con Lanyard & Ojalillo',
        image: '/images/catalog/Hangtags/Firefly mejorar la imagen aadirle un lanyard.webp',
        tag: 'ETIQUETAS',
        feature: 'Ojal metálico y cordón personalizado',
        description:
          'Etiquetas colgantes de alta durabilidad con accesorios metálicos y cinta branding.',
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
    image: '/images/catalog/BooksFoldersTriptics/bggroup_corp_impr_item1.webp',
    items: [
      {
        id: 'folletos-jalavistas-tripticos-carpetas',
        name: 'Folletos, Jalavistas, Tripticos, Cuadernillos, Carpetas',
        image: '/images/catalog/BooksFoldersTriptics/bggroup_corp_impr_item1.webp',
        tag: 'EDITORIAL',
        feature: 'Con solapa, hendiduras y troqueles a medida',
        description:
          'Impresos para propuestas comerciales y entregas institucionales.',
      },
      {
        id: 'carpetas-institucionales-executive',
        name: 'Carpetas Institucionales Executive',
        image: '/images/catalog/BooksFoldersTriptics/bggroup_corp_impr_item2.webp',
        tag: 'EDITORIAL',
        feature: 'Laminado mate y reserva UV',
        description:
          'Carpetas profesionales de alta rigidez para licitaciones, propuestas y documentación corporativa.',
      },
      {
        id: 'folletos-promocionales',
        name: 'Folletos & Jalavistas Publicitarios',
        image: '/images/catalog/BooksFoldersTriptics/bggroup_corp_impr_item3.webp',
        tag: 'EDITORIAL',
        feature: 'Papel cuché brillo o mate',
        description:
          'Piezas publicitarias de alta resolución para punto de venta y captación de clientes.',
      },
      {
        id: 'tripticos-blocks-flyers-corporativos',
        name: 'Trípticos, Cuadernillos y Blocks',
        image: '/images/catalog/BooksFoldersTriptics/bcgroup_tripticblock_flyers.jpg',
        tag: 'EDITORIAL',
        feature: 'Doblados de precisión y acabados a medida',
        description:
          'Material editorial e informativo para propuestas comerciales, eventos y difusión de marca.',
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
    image: '/images/catalog/Calendars/calendar1.webp',
    items: [
      {
        id: 'calendarios-blocks-revistas-cuadernos-libros',
        name: 'Calendarios, Blocks, Revistas, Cuadernos, Libros',
        image: '/images/catalog/Calendars/calendar1.webp',
        tag: 'EDITORIAL',
        feature: 'Múltiples gramajes, encuadernados y acabados',
        description:
          'Material informativo y promocional impreso en alta calidad para campañas comerciales, ferias y atención al cliente.',
      },
      {
        id: 'carpetas-calendarios-corporativos',
        name: 'Planificadores & Calendarios Corporativos',
        image: '/images/catalog/Calendars/bcgroup_perso_folders.jpg',
        tag: 'EDITORIAL',
        feature: 'Encuadernación anillada o de escritorio',
        description:
          'Calendarios de mesa y pared personalizados para regalos corporativos de fin de año.',
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
    image: '/images/catalog/PrintTags/tag1.webp',
    items: [
      {
        id: 'etiquetas',
        name: 'Etiquetas',
        image: '/images/catalog/PrintTags/tag1.webp',
        tag: 'ETIQUETAS',
        feature: 'Acabados rectos, troquelados y con relieve',
        description:
          'Etiquetas en papel, adhesivo o vinil para envases, cierres de empaques y branding publicitario; con acabados rectos, troquelados y con relieve.',
      },
      {
        id: 'etiquetas-tag-2',
        name: 'Etiquetas Adhesivas Personalizadas',
        image: '/images/catalog/PrintTags/tag2.webp',
        tag: 'ETIQUETAS',
        feature: 'Cortes troquelados y colores vibrantes',
        description:
          'Etiquetas adhesivas resistentes para botellas, envases cosméticos y alimentos.',
      },
      {
        id: 'etiquetas-tag-3',
        name: 'Stickers en Rollo & Empaques',
        image: '/images/catalog/PrintTags/tag3.webp',
        tag: 'ETIQUETAS',
        feature: 'Dispensado fácil y adhesión permanente',
        description:
          'Stickers para cierre de bolsas, sellado de empaques y branding en punto de venta.',
      },
      {
        id: 'etiquetas-tag-4',
        name: 'Etiquetas Troqueladas de Alta Definición',
        image: '/images/catalog/PrintTags/tag4.webp',
        tag: 'ETIQUETAS',
        feature: 'Texturas con relieve y brillo metálico',
        description:
          'Etiquetas de alta gama con laminado UV y acabados metalizados para marcas exclusivas.',
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
    image: '/images/catalog/bggroup_mold.webp',
    items: [
      {
        id: 'plegables-especiales',
        name: 'Plegables Especiales',
        image: '/images/catalog/bggroup_mold.webp',
        tag: 'EDITORIAL',
        feature: 'Cortes y troqueles interactivos a medida',
        description:
          'Desplegables con cortes y troqueles interactivos para presentaciones comerciales de alto impacto.',
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
    image: '/images/catalog/VInils/vinil1.webp',
    items: [
      {
        id: 'banners-y-viniles',
        name: 'Banners y Viniles',
        image: '/images/catalog/VInils/vinil1.webp',
        tag: 'GRAN FORMATO',
        feature: 'Alta resolución y resistencia para exteriores e interiores',
        description:
          'De alta resolución y resistentes diseñados para hacer destacar tu marca en cualquier espacio.',
      },
      {
        id: 'viniles-rotulacion-gran-formato',
        name: 'Viniles y Gráfica Gran Formato',
        image: '/images/catalog/VInils/vinil2.webp',
        tag: 'GRAN FORMATO',
        feature: 'Adherencia premium en paredes y cristales',
        description:
          'Rotulación y ambientación de oficinas, vitrinas y fachadas comerciales de alto impacto.',
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
    image: '/images/catalog/ExteriorDisplay/ext_display1.webp',
    items: [
      {
        id: 'displays-exhibidores-materiales-pop',
        name: 'Displays para interiores y exteriores, Exhibidores, Materiales POP',
        image: '/images/catalog/ExteriorDisplay/ext_display1.webp',
        tag: 'GRAN FORMATO',
        feature: 'Estructuras metálicas y de madera a medida',
        description:
          'Estructuras metálicas y de madera ideal para la comunicación visual de reuniones, lanzamientos y otros eventos.',
      },
      {
        id: 'exhibidores-display-2',
        name: 'Exhibidores & Displays Promocionales',
        image: '/images/catalog/ExteriorDisplay/ext_display2.webp',
        tag: 'GRAN FORMATO',
        feature: 'Stands y módulos de exhibición de alto impacto',
        description:
          'Módulos y displays de exhibición para punto de venta y ferias comerciales.',
      },
      {
        id: 'exhibidores-display-3',
        name: 'Módulos y Backings para Eventos',
        image: '/images/catalog/ExteriorDisplay/ext_display3.webp',
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
    image: '/images/catalog/Textils/textil1.webp',
    items: [
      {
        id: 'textiles',
        name: 'Textiles',
        image: '/images/catalog/Textils/textil1.webp',
        tag: 'MERCHANDISING',
        feature: 'Bordados, estampados y confección de calidad',
        description:
          'Uniformes, prendas y accesorios personalizados para promocionar tu marca y fidelizar clientes.',
      },
      {
        id: 'textiles-prendas-corporativas-2',
        name: 'Prendas y Uniformes Corporativos',
        image: '/images/catalog/Textils/textil2.webp',
        tag: 'MERCHANDISING',
        feature: 'Algodón pima, pique y bordado computarizado',
        description:
          'Prendas corporativas de alta calidad para colaboradores y personal de atención.',
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