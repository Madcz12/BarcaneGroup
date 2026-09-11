// Mock product catalog for BarcaneGroup packaging & corporate merch company.
// Configured with catalog products and multi-item carousels per product line.

const mockProducts = [
  {
    id: 'bolsas-comerciales',
    name: 'Bolsas comerciales',
    category: 'packaging',
    tag: 'PACKAGING',
    description:
      'En diferentes materiales de papel y de alta resistencia, diseñadas a medida para potenciar la presentación de tu marca.',
    feature: 'Acabados finos y asas a elección',
    price: 'Consultar cotización',
    image: '/images/catalog/CatalogFinale/BAGS/1_BAG.webp',
    items: [
      {
        id: 'bolsas-comerciales-1',
        name: 'Bolsas comerciales',
        image: '/images/catalog/CatalogFinale/BAGS/1_BAG.webp',
        tag: 'PACKAGING',
        feature: 'Acabados finos y asas a elección',
        description:
          'En diferentes materiales de papel y de alta resistencia, diseñadas a medida para potenciar la presentación de tu marca.',
      },
      {
        id: 'bolsas-comerciales-2',
        name: 'Bolsas Ecológicas con Asas',
        image: '/images/catalog/CatalogFinale/BAGS/2_BOL.webp',
        tag: 'PACKAGING',
        feature: 'Asas de cordón y acabado premium',
        description:
          'Empaques ejecutivos elegantes con solapa reforzada y acabados de lujo para boutiques.',
      },
      {
        id: 'bolsas-comerciales-3',
        name: 'Bolsas Kraft Sostenibles',
        image: '/images/catalog/CatalogFinale/BAGS/3_BOL.webp',
        tag: 'PACKAGING',
        feature: 'Papel kraft 100% reciclable',
        description:
          'Bolsas ecológicas de gran durabilidad ideales para envíos, tiendas y delivery comercial.',
      },
      {
        id: 'bolsas-comerciales-4',
        name: 'Bolsas Comerciales Personalizadas',
        image: '/images/catalog/CatalogFinale/BAGS/4_BOL.webp',
        tag: 'PACKAGING',
        feature: 'Impresión de alta definición y asas reforzadas',
        description:
          'Bolsas a medida para eventos, tiendas retail y presentación de marca corporativa.',
      },
      {
        id: 'bolsas-comerciales-5',
        name: 'Bolsas de Papel con Acabados Especiales',
        image: '/images/catalog/CatalogFinale/BAGS/5_BOL.webp',
        tag: 'PACKAGING',
        feature: 'Acabados mate, brillo y sectorizado',
        description:
          'Empaques de alta gama con máxima resistencia y detalles exclusivos para boutiques.',
      },
      {
        id: 'bolsas-comerciales-6',
        name: 'Bolsas de Lujo para Boutiques',
        image: '/images/catalog/CatalogFinale/BAGS/6_BOL.webp',
        tag: 'PACKAGING',
        feature: 'Cordón de algodón y solapa reforzada',
        description:
          'Presentación premium para tiendas exclusivas, joyerías y marcas de moda.',
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
    image: '/images/catalog/CatalogFinale/KITS/1_KIT.webp',
    items: [
      {
        id: 'kits-corporativos-1',
        name: 'Kits Corporativos – Merchandising',
        image: '/images/catalog/CatalogFinale/KITS/1_KIT.webp',
        tag: 'MERCHANDISING',
        feature: 'Combinaciones y empaques personalizados',
        description:
          'Sets personalizados de productos branding ideales para bienvenida de colaboradores, regalos institucionales y eventos VIP.',
      },
      {
        id: 'kits-corporativos-2',
        name: 'Welcome Packs & Cajas Onboarding',
        image: '/images/catalog/CatalogFinale/KITS/2_KIT.webp',
        tag: 'MERCHANDISING',
        feature: 'Cajas branding y artículos corporativos',
        description:
          'Packs corporativos de bienvenida para colaboradores con libretas, termos y accesorios.',
      },
      {
        id: 'kits-corporativos-3',
        name: 'Kits Ejecutivos Premium',
        image: '/images/catalog/CatalogFinale/KITS/3_KIT.webp',
        tag: 'MERCHANDISING',
        feature: 'Presentación de lujo y branding institucional',
        description:
          'Kits corporativos de alta gama para regalos institucionales, fin de año y clientes VIP.',
      },
      {
        id: 'kits-corporativos-4',
        name: 'Kits para Eventos & Ferias',
        image: '/images/catalog/CatalogFinale/KITS/4_KIT.webp',
        tag: 'MERCHANDISING',
        feature: 'Artículos promocionales coordinados',
        description:
          'Soluciones publicitarias integrales para conferencias, convenciones y lanzamientos.',
      },
      {
        id: 'kits-corporativos-5',
        name: 'Toma-todos & Botellas Promocionales',
        image: '/images/catalog/CatalogFinale/KITS/5_KIT.webp',
        tag: 'MERCHANDISING',
        feature: 'Grabado láser y tampografía duradera',
        description:
          'Productos reutilizables y tomatodos metálicos o plásticos para eventos y oficina.',
      },
      {
        id: 'kits-corporativos-6',
        name: 'Accesorios & Bolsas Promocionales',
        image: '/images/catalog/CatalogFinale/KITS/6_KIT.webp',
        tag: 'MERCHANDISING',
        feature: 'Prendas y accesorios con bordado o estampado',
        description:
          'Textiles corporativos y accesorios personalizados para la imagen de tu empresa.',
      },
      {
        id: 'kits-corporativos-7',
        name: 'Merchandising para Campañas',
        image: '/images/catalog/CatalogFinale/KITS/7_KIT.webp',
        tag: 'MERCHANDISING',
        feature: 'Artículos promocionales de alto impacto',
        description:
          'Materiales publicitarios para ferias, conferencias y lanzamientos institucionales.',
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
    image: '/images/catalog/CatalogFinale/PACKAGES/1_EMP.webp',
    items: [
      {
        id: 'empaques-packaging-1',
        name: 'Empaques - Packaging',
        image: '/images/catalog/CatalogFinale/PACKAGES/1_EMP.webp',
        tag: 'PACKAGING',
        feature: 'Estructuras rígidas y acabados premium',
        description:
          'Cajas rígidas y empaques premium con acabados especiales, diseñados para destacar tus productos.',
      },
      {
        id: 'empaques-packaging-2',
        name: 'Cajas Rígidas y Estuches de Lujo',
        image: '/images/catalog/CatalogFinale/PACKAGES/2_EMP.webp',
        tag: 'PACKAGING',
        feature: 'Cierre magnético e interiores a medida',
        description:
          'Empaques de alta gama con acabados finos para productos de edición especial.',
      },
      {
        id: 'empaques-packaging-3',
        name: 'Cajas Kraft & Empaques Ecológicos',
        image: '/images/catalog/CatalogFinale/PACKAGES/3_EMP.webp',
        tag: 'PACKAGING',
        feature: 'Material reciclable y alta resistencia',
        description:
          'Empaques resistentes y ecológicos para envíos, tiendas y productos artesanales.',
      },
      {
        id: 'empaques-packaging-4',
        name: 'Cajas Rígidas con Acabados Finos',
        image: '/images/catalog/CatalogFinale/PACKAGES/4_EMP.webp',
        tag: 'PACKAGING',
        feature: 'Espuma troquelada o guata a medida',
        description:
          'Empaques exclusivos con acabados mate, brillo y reserva UV.',
      },
    ],
  },
  {
    id: 'hangtags',
    name: 'HANGTAGS',
    category: 'etiquetas',
    tag: 'ETIQUETAS',
    description:
      'Etiquetas colgantes en diferentes materiales para ropa, accesorios y productos retail.',
    feature: 'Variedad de cartulinas y formas troqueladas',
    price: 'Consultar cotización',
    image: '/images/catalog/CatalogFinale/HANGTAGS/1_HANG.webp',
    items: [
      {
        id: 'hangtags-1',
        name: 'HANGTAGS',
        image: '/images/catalog/CatalogFinale/HANGTAGS/1_HANG.webp',
        tag: 'ETIQUETAS',
        feature: 'Variedad de cartulinas y formas troqueladas',
        description:
          'Etiquetas colgantes en diferentes materiales para ropa, accesorios y productos retail.',
      },
      {
        id: 'hangtags-2',
        name: 'Etiquetas para Ropa & Retail',
        image: '/images/catalog/CatalogFinale/HANGTAGS/2_HANG.webp',
        tag: 'ETIQUETAS',
        feature: 'Perforación y acabados especiales',
        description:
          'Branding de prendas y accesorios con acabado fino, plastificado mate y relieve.',
      },
      {
        id: 'hangtags-3',
        name: 'Hangtags con Lanyard & Ojalillo',
        image: '/images/catalog/CatalogFinale/HANGTAGS/3_HANG.webp',
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
    image: '/images/catalog/CatalogFinale/FLYERS-FOLDERS/1_FOLL.webp',
    items: [
      {
        id: 'folletos-jalavistas-1',
        name: 'Folletos, Jalavistas, Tripticos, Cuadernillos, Carpetas',
        image: '/images/catalog/CatalogFinale/FLYERS-FOLDERS/1_FOLL.webp',
        tag: 'EDITORIAL',
        feature: 'Con solapa, hendiduras y troqueles a medida',
        description:
          'Impresos para propuestas comerciales y entregas institucionales.',
      },
      {
        id: 'folletos-jalavistas-2',
        name: 'Carpetas Institucionales Executive',
        image: '/images/catalog/CatalogFinale/FLYERS-FOLDERS/2_FOLL.webp',
        tag: 'EDITORIAL',
        feature: 'Laminado mate y reserva UV',
        description:
          'Carpetas profesionales de alta rigidez para licitaciones, propuestas y documentación corporativa.',
      },
      {
        id: 'folletos-jalavistas-3',
        name: 'Folletos & Jalavistas Publicitarios',
        image: '/images/catalog/CatalogFinale/FLYERS-FOLDERS/3_FOLL.webp',
        tag: 'EDITORIAL',
        feature: 'Papel cuché brillo o mate',
        description:
          'Piezas publicitarias de alta resolución para punto de venta y captación de clientes.',
      },
      {
        id: 'folletos-jalavistas-4',
        name: 'Trípticos, Cuadernillos y Blocks',
        image: '/images/catalog/CatalogFinale/FLYERS-FOLDERS/4_FOLL.webp',
        tag: 'EDITORIAL',
        feature: 'Doblados de precisión y acabados a medida',
        description:
          'Material editorial e informativo para propuestas comerciales, eventos y difusión de marca.',
      },
    ],
  },
  {
    id: 'calendarios-blocks-revistas-cuadernos-libros',
    name: 'Calendarios, blocks, Revistas, Cuadernos, Libros',
    category: 'editorial',
    tag: 'EDITORIAL',
    description:
      'Material informativo y promocional impreso en alta calidad para campañas comerciales, ferias y atención al cliente.',
    feature: 'Múltiples gramajes, encuadernados y acabados',
    price: 'Consultar cotización',
    image: '/images/catalog/CatalogFinale/CALENDARS-BOOKS/1_CUA.webp',
    items: [
      {
        id: 'calendarios-blocks-1',
        name: 'Calendarios, blocks, Revistas, Cuadernos, Libros',
        image: '/images/catalog/CatalogFinale/CALENDARS-BOOKS/1_CUA.webp',
        tag: 'EDITORIAL',
        feature: 'Múltiples gramajes, encuadernados y acabados',
        description:
          'Material informativo y promocional impreso en alta calidad para campañas comerciales, ferias y atención al cliente.',
      },
      {
        id: 'calendarios-blocks-2',
        name: 'Planificadores & Calendarios Corporativos',
        image: '/images/catalog/CatalogFinale/CALENDARS-BOOKS/2_CUA.webp',
        tag: 'EDITORIAL',
        feature: 'Encuadernación anillada o de escritorio',
        description:
          'Calendarios de mesa y pared personalizados para regalos corporativos de fin de año.',
      },
      {
        id: 'calendarios-blocks-3',
        name: 'Cuadernos y Libretas Institucionales',
        image: '/images/catalog/CatalogFinale/CALENDARS-BOOKS/3_CUA.webp',
        tag: 'EDITORIAL',
        feature: 'Tapa dura, anillado doble ring y hojas membretadas',
        description:
          'Cuadernos personalizados y agendas corporativas para colaboradores y eventos.',
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
    image: '/images/catalog/CatalogFinale/TAGS-STICKERS/1_ETIQUETA.webp',
    items: [
      {
        id: 'etiquetas-1',
        name: 'Etiquetas',
        image: '/images/catalog/CatalogFinale/TAGS-STICKERS/1_ETIQUETA.webp',
        tag: 'ETIQUETAS',
        feature: 'Acabados rectos, troquelados y con relieve',
        description:
          'Etiquetas en papel, adhesivo o vinil para envases, cierres de empaques y branding publicitario; con acabados rectos, troquelados y con relieve.',
      },
      {
        id: 'etiquetas-2',
        name: 'Etiquetas Adhesivas Personalizadas',
        image: '/images/catalog/CatalogFinale/TAGS-STICKERS/2_ETIQ.webp',
        tag: 'ETIQUETAS',
        feature: 'Cortes troquelados y colores vibrantes',
        description:
          'Etiquetas adhesivas resistentes para botellas, envases cosméticos y alimentos.',
      },
      {
        id: 'etiquetas-3',
        name: 'Stickers en Rollo & Empaques',
        image: '/images/catalog/CatalogFinale/TAGS-STICKERS/3_ETIQ.webp',
        tag: 'ETIQUETAS',
        feature: 'Dispensado fácil y adhesión permanente',
        description:
          'Stickers para cierre de bolsas, sellado de empaques y branding en punto de venta.',
      },
      {
        id: 'etiquetas-4',
        name: 'Etiquetas Troqueladas de Alta Definición',
        image: '/images/catalog/CatalogFinale/TAGS-STICKERS/4_ETIQ.webp',
        tag: 'ETIQUETAS',
        feature: 'Texturas con relieve y brillo metálico',
        description:
          'Etiquetas de alta gama con laminado UV y acabados metalizados para marcas exclusivas.',
      },
      {
        id: 'etiquetas-5',
        name: 'Etiquetas y Stickers Especiales',
        image: '/images/catalog/CatalogFinale/TAGS-STICKERS/5_ETIQ.webp',
        tag: 'ETIQUETAS',
        feature: 'Material autoadhesivo y acabados premium',
        description:
          'Soluciones adhesivas de alta resistencia para packaging y productos retail.',
      },
    ],
  },
  {
    id: 'photochecks-y-lanyards',
    name: 'Fotochecks y Lanyards',
    category: 'merchandising',
    tag: 'MERCHANDISING',
    description:
      'Credenciales en PVC y cintas estampadas con el logo de tu empresa para control de acceso e identificación.',
    feature: 'Impresión en alta definición y accesorios duraderos',
    price: 'Consultar cotización',
    image: '/images/catalog/CatalogFinale/PHOTOS-LANYARDS/1_FOTO.webp',
    items: [
      {
        id: 'photochecks-y-lanyards-1',
        name: 'Fotochecks y Lanyards',
        image: '/images/catalog/CatalogFinale/PHOTOS-LANYARDS/1_FOTO.webp',
        tag: 'MERCHANDISING',
        feature: 'Impresión en alta definición y accesorios duraderos',
        description:
          'Credenciales en PVC y cintas estampadas con el logo de tu empresa para control de acceso e identificación.',
      },
      {
        id: 'photochecks-y-lanyards-2',
        name: 'Cintas y Lanyards Sublimados',
        image: '/images/catalog/CatalogFinale/PHOTOS-LANYARDS/2_FOTO.webp',
        tag: 'MERCHANDISING',
        feature: 'Cintas sublimadas con mosquetón y broches',
        description:
          'Lanyards corporativos con impresión nítida a full color y accesorios de sujeción resistentes.',
      },
    ],
  },
  {
    id: 'plegables-especiales',
    name: 'Plegables especiales',
    category: 'editorial',
    tag: 'EDITORIAL',
    description:
      'Desplegables con cortes y troqueles interactivos para presentaciones comerciales de alto impacto.',
    feature: 'Cortes y troqueles interactivos a medida',
    price: 'Consultar cotización',
    image: '/images/catalog/CatalogFinale/SPECIALFOLDING/1_PLE.webp',
    items: [
      {
        id: 'plegables-especiales-1',
        name: 'Plegables especiales',
        image: '/images/catalog/CatalogFinale/SPECIALFOLDING/1_PLE.webp',
        tag: 'EDITORIAL',
        feature: 'Cortes y troqueles interactivos a medida',
        description:
          'Desplegables con cortes y troqueles interactivos para presentaciones comerciales de alto impacto.',
      },
      {
        id: 'plegables-especiales-2',
        name: 'Desplegables y Folletos Troquelados',
        image: '/images/catalog/CatalogFinale/SPECIALFOLDING/2_PLE.webp',
        tag: 'EDITORIAL',
        feature: 'Formatos creativos y acabados especiales',
        description:
          'Piezas plegables personalizadas con cortes dinámicos para marketing de alto impacto.',
      },
      {
        id: 'plegables-especiales-3',
        name: 'Plegables Creativos de Alto Impacto',
        image: '/images/catalog/CatalogFinale/SPECIALFOLDING/3_PLE.webp',
        tag: 'EDITORIAL',
        feature: 'Troqueles de precisión y dobleces especiales',
        description:
          'Soluciones editoriales interactivas para lanzamientos, eventos y presentaciones de marca.',
      },
      {
        id: 'plegables-especiales-4',
        name: 'Plegados Especiales Personalizados',
        image: '/images/catalog/CatalogFinale/SPECIALFOLDING/4_PLE.webp',
        tag: 'EDITORIAL',
        feature: 'Diseños dinámicos y acabados de precisión',
        description:
          'Estructuras plegables interactivas que destacan el valor de tu marca.',
      },
      {
        id: 'plegables-especiales-5',
        name: 'Formatos Desplegables Promocionales',
        image: '/images/catalog/CatalogFinale/SPECIALFOLDING/5_PLE.webp',
        tag: 'EDITORIAL',
        feature: 'Troqueles e ingeniería en papel',
        description:
          'Piezas gráficas innovadoras para campañas de marketing y presentaciones exclusivas.',
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
    image: '/images/catalog/CatalogFinale/VINILS-BANERS/1_BANN.webp',
    items: [
      {
        id: 'banners-y-viniles-1',
        name: 'Banners y Viniles',
        image: '/images/catalog/CatalogFinale/VINILS-BANERS/1_BANN.webp',
        tag: 'GRAN FORMATO',
        feature: 'Alta resolución y resistencia para exteriores e interiores',
        description:
          'De alta resolución y resistentes diseñados para hacer destacar tu marca en cualquier espacio.',
      },
      {
        id: 'banners-y-viniles-2',
        name: 'Viniles y Gráfica Gran Formato',
        image: '/images/catalog/CatalogFinale/VINILS-BANERS/2_BANN.webp',
        tag: 'GRAN FORMATO',
        feature: 'Adherencia premium en paredes y cristales',
        description:
          'Rotulación y ambientación de oficinas, vitrinas y fachadas comerciales de alto impacto.',
      },
      {
        id: 'banners-y-viniles-3',
        name: 'Banners Publicitarios para Eventos',
        image: '/images/catalog/CatalogFinale/VINILS-BANERS/3_BANN.webp',
        tag: 'GRAN FORMATO',
        feature: 'Lona de alta durabilidad e impresión HD',
        description:
          'Banners resistentes para señalización, eventos y promociones exteriores.',
      },
    ],
  },
  {
    id: 'displays-exhibidores-materiales-pop',
    name: 'Displays para interiores y exteriores, exhibidores, materiales POP',
    category: 'gran-formato',
    tag: 'GRAN FORMATO',
    description:
      'Estructuras metálicas y de madera ideal para la comunicación visual de reuniones, lanzamientos y otros eventos.',
    feature: 'Estructuras metálicas y de madera a medida',
    price: 'Consultar cotización',
    image: '/images/catalog/CatalogFinale/DISPLAYS/1_DIS.webp',
    items: [
      {
        id: 'displays-exhibidores-1',
        name: 'Displays para interiores y exteriores, exhibidores, materiales POP',
        image: '/images/catalog/CatalogFinale/DISPLAYS/1_DIS.webp',
        tag: 'GRAN FORMATO',
        feature: 'Estructuras metálicas y de madera a medida',
        description:
          'Estructuras metálicas y de madera ideal para la comunicación visual de reuniones, lanzamientos y otros eventos.',
      },
      {
        id: 'displays-exhibidores-2',
        name: 'Exhibidores & Displays Promocionales',
        image: '/images/catalog/CatalogFinale/DISPLAYS/2_DIS.webp',
        tag: 'GRAN FORMATO',
        feature: 'Stands y módulos de exhibición de alto impacto',
        description:
          'Módulos y displays de exhibición para punto de venta y ferias comerciales.',
      },
      {
        id: 'displays-exhibidores-3',
        name: 'Módulos y Backings para Eventos',
        image: '/images/catalog/CatalogFinale/DISPLAYS/3_DIS.webp',
        tag: 'GRAN FORMATO',
        feature: 'Fácil montaje y transporte',
        description:
          'Estructuras modulares para branding en conferencias, lanzamientos y eventos.',
      },
      {
        id: 'displays-exhibidores-4',
        name: 'Tótem y Displays Publicitarios',
        image: '/images/catalog/CatalogFinale/DISPLAYS/4_DIS.webp',
        tag: 'GRAN FORMATO',
        feature: 'Estructuras ligeras y de alto impacto',
        description:
          'Sistemas portátiles y tótems ideales para ferias, activaciones y recepciones.',
      },
      {
        id: 'displays-exhibidores-5',
        name: 'Exhibidores de Punto de Venta',
        image: '/images/catalog/CatalogFinale/DISPLAYS/5_DIS.webp',
        tag: 'GRAN FORMATO',
        feature: 'Materiales resistentes y acabados a color',
        description:
          'Exhibidores diseñados para destacar productos en retail y centros comerciales.',
      },
      {
        id: 'displays-exhibidores-6',
        name: 'Stands y Paneles Informativos',
        image: '/images/catalog/CatalogFinale/DISPLAYS/6_DIS.webp',
        tag: 'GRAN FORMATO',
        feature: 'Fácil armado y gráfica intercambiable',
        description:
          'Paneles y stands modulares para eventos corporativos y ferias.',
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
    image: '/images/catalog/CatalogFinale/TEXTILS/1_TEX.webp',
    items: [
      {
        id: 'textiles-1',
        name: 'Textiles',
        image: '/images/catalog/CatalogFinale/TEXTILS/1_TEX.webp',
        tag: 'MERCHANDISING',
        feature: 'Bordados, estampados y confección de calidad',
        description:
          'Uniformes, prendas y accesorios personalizados para promocionar tu marca y fidelizar clientes.',
      },
      {
        id: 'textiles-2',
        name: 'Prendas y Uniformes Corporativos',
        image: '/images/catalog/CatalogFinale/TEXTILS/2_TEX.webp',
        tag: 'MERCHANDISING',
        feature: 'Algodón pima, pique y bordado computarizado',
        description:
          'Prendas corporativas de alta calidad para colaboradores y personal de atención.',
      },
      {
        id: 'textiles-3',
        name: 'Polos y Camisas Institucionales',
        image: '/images/catalog/CatalogFinale/TEXTILS/3_TEX.webp',
        tag: 'MERCHANDISING',
        feature: 'Algodón suave y estampado duradero',
        description:
          'Prendas cómodas con bordado o estampado de tu identidad corporativa.',
      },
      {
        id: 'textiles-4',
        name: 'Casacas y Chalecos Corporativos',
        image: '/images/catalog/CatalogFinale/TEXTILS/4_TEX.webp',
        tag: 'MERCHANDISING',
        feature: 'Material térmico e impermeable',
        description:
          'Prendas ejecutivas y operativas para el personal en todo clima.',
      },
      {
        id: 'textiles-5',
        name: 'Gorras y Accesorios Textiles',
        image: '/images/catalog/CatalogFinale/TEXTILS/5_TEX.webp',
        tag: 'MERCHANDISING',
        feature: 'Bordado 3D y broches ajustables',
        description:
          'Gorros y complementos ideales para merchandising promocional y eventos.',
      },
      {
        id: 'textiles-6',
        name: 'Bolsas y Mochilas de Tela',
        image: '/images/catalog/CatalogFinale/TEXTILS/6_TEX.webp',
        tag: 'MERCHANDISING',
        feature: 'Material reciclable y alta resistencia',
        description:
          'Tote bags y mochilas textiles para branding sustentable.',
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
    'bolsas-especiales': 'bolsas-comerciales',
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