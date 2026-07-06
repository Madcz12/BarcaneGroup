// Mock product catalog for BarcaneGroup packaging & corporate merch company.
// Each product represents a realistic item a packaging company would offer.

const mockProducts = [
  {
    id: 'bolsa-ejecutiva-premium',
    name: 'Bolsa Ejecutiva Premium',
    description:
      'Bolsa de papel de alta gama con asas reforzadas y acabado mate personalizado. Ideal para retail corporativo, eventos y regalos ejecutivos. Impresión a tinta Full Color con stamping opcional en hot foil.',
    price: 'Desde S/ 2.50 c/u',
    image: '/images/items/barcanegroup_bolsas3.webp',
    category: 'bolsas',
  },
  {
    id: 'papel-manteca-personalizado',
    name: 'Papel Manteca Personalizado',
    description:
      'Papel manteca anti-grasa con impresión personalizada para envoltura de alimentos. Apto para contacto directo con alimentos y resistente a temperaturas medias. Disponible en gramajes de 40g a 60g.',
    price: 'Desde S/ 0.35 c/u',
    image: '/images/items/barcanegroup_papel_manteca.webp',
    category: 'empaques',
  },
  {
    id: 'bolsa-kraft-personalizada',
    name: 'Bolsa Kraft Personalizada',
    description:
      'Bolsa de papel kraft natural con handles de algodón o cinta de yute. Ecológica, reciclable y con excelente resistencia de carga. Personalización con tu logo a una o varias tintas.',
    price: 'Desde S/ 1.80 c/u',
    image: '/images/items/bgroup_bolsakraft1.webp',
    category: 'bolsas',
  },
  {
    id: 'calendarios-corporativos',
    name: 'Calendarios Corporativos',
    description:
      'Calendarios de escritorio y pared con diseño personalizado de tu marca. Impresión de alta resolución en papel couché brillante o mate, con base troquelada de soporte. Perfectos para cierre de año.',
    price: 'Desde S/ 4.50 c/u',
    image: '/images/items/barcanegroup_calendars.webp',
    category: 'editorial',
  },
  {
    id: 'merchandising-corporativo',
    name: 'Merchandising Corporativo',
    description:
      'Set de merchandising personalizado que incluye bolsas, libretas, stickers y más. Soluciones integrales para campañas promocionales, kits de bienvenida y regalos corporativos. Empaque coordinado con tu identidad.',
    price: 'Consultar precio',
    image: '/images/items/barcanegroup_bolsas4.webp',
    category: 'merchandising',
  },
  {
    id: 'food-box-personalizado',
    name: 'Food Box Personalizado',
    description:
      'Caja de cartón para delivery de alimentos con impresión Full Color y troquelado a medida. Resistente a grasa y humedad, apta para comida caliente. Fabricada con cartón ecológico certificado.',
    price: 'Desde S/ 1.20 c/u',
    image: '/images/items/bgroup_foodbox.webp',
    category: 'empaques',
  },
  {
    id: 'servilletas-personalizadas',
    name: 'Servilletas Personalizadas',
    description:
      'Servilletas de papel impresas a 1 o 2 tintas con tu logo o diseño. Disponibles en tamaños cóctel, intermedias y Sonntag. Ideales para restaurantes, cafeterías y eventos corporativos.',
    price: 'Desde S/ 0.15 c/u',
    image: '/images/items/bgroup_servilletas.png',
    category: 'empaques',
  },
  {
    id: 'stickers-personalizados',
    name: 'Stickers Personalizados',
    description:
      'Stickers y etiquetas adhesivas con corte a medida y acabado mate, brillante o holográfico. Resistentes al agua y rayado. Perfectos para branding de productos, sellos de garantía y promociones.',
    price: 'Desde S/ 0.08 c/u',
    image: '/images/items/bgroup_stickers.png',
    category: 'merchandising',
  },
  {
    id: 'fajas-personalizadas',
    name: 'Fajas Personalizadas',
    description:
      'Fajas de papel para envoltura de productos con impresión personalizada y fácil arranca. Refuerzan la identidad de marca en el punto de venta y protegen el producto. Múltiples tamaños disponibles.',
    price: 'Desde S/ 0.25 c/u',
    image: '/images/items/bgroup_fajas.png',
    category: 'empaques',
  },
  {
    id: 'bolsas-promocionales',
    name: 'Bolsas Promocionales',
    description:
      'Bolsas de papel promocionales con impresión Full Color y acabados premium. Diseñadas para campañas de lanzamiento, ferias y eventos corporativos. Reforzadas con base cartón para mayor durabilidad.',
    price: 'Desde S/ 2.00 c/u',
    image: '/images/items/barcanegroup_bolsas3.webp',
    category: 'bolsas',
  },
];

// Helper: find a single product by its slug id.
function getProductById(id) {
  return mockProducts.find((product) => product.id === id);
}

export default mockProducts;
export { getProductById };