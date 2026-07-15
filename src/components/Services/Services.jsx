import React from 'react';
import WhatsAppIcon from '../icons/WhatsAppIcon';
import './Services.css';

export default function Services() {
  const buildWhatsAppLink = (productName) => {
    const message = `Hola BarcaneGroup, vi su ${productName} en la web y me gustaría solicitar una cotización.`;
    return `https://wa.me/51943703905?text=${encodeURIComponent(message)}`;
  };
  const packagingList = [
    {
      id: 'papel-manteca',
      title: 'Papel manteca personalizado',
      description: 'Papel antigrasa ideal para alimentos. Personalizado con tu logo o diseño.',
      image: '/images/items/barcanegroup_papel_manteca.webp'
    },
    {
      id: 'bolsas-kraft',
      title: 'Bolsas kraft para delivery',
      description: 'Resistentes y funcionales. Ideales para delivery, take away y pedidos.',
      image: '/images/items/bgroup_bolsakraft1.webp'
    },
    {
      id: 'cajas-alimentos',
      title: 'Cajas para alimentos',
      description: 'Cajas personalizadas para todo tipo de alimentos. Prácticas y seguras.',
      image: '/images/items/bgroup_foodbox.webp'
    },
    {
      id: 'stickers-etiquetas',
      title: 'Stickers y etiquetas',
      description: 'Personaliza cada detalle de tu empaque con stickers y etiquetas a tu medida.',
      image: '/images/items/bgroup_stickers.png'
    },
    {
      id: 'fajas-empaques',
      title: 'Fajas para empaques',
      description: 'Fajas personalizadas que refuerzan la identidad de tu marca.',
      image: '/images/items/bgroup_fajas.png'
    },
    {
      id: 'servilletas-personalizadas',
      title: 'Servilletas personalizadas',
      description: 'Servilletas impresas con tu logo o diseño para una presentación completa.',
      image: '/images/items/bgroup_servilletas.png'
    }
  ];

  const corporateList = [
    {
      id: 'bolsas-ejecutivas',
      title: 'Bolsas Ejecutivas',
      description: 'Bolsas corporativas personalizadas que reflejan la identidad y elegancia de tu empresa.',
      image: '/images/bgroup_new_bagspremium.webp'
    },
    {
      id: 'merchandising-ejecutivo',
      title: 'Merchandising Ejecutivo',
      description: 'Artículos promocionales de alta calidad que fortalecen tu marca y generan recordación.',
      image: '/images/items/barcanegroup_bolsas4.webp'
    },
    {
      id: 'impresion-editorial',
      title: 'Impresos',
      description: 'Libros, calendarios, agendas, catálogos y material impreso de alta calidad.',
      image: '/images/items/barcanegroup_calendars.webp'
    }
  ];

  const renderCard = (item) => (
    <article className="service-card" key={item.id} id={item.id}>
      <div className="service-card-image-wrap">
        <img 
          src={item.image} 
          alt={item.title} 
          className="service-card-image"
          loading="lazy"
        />
        <span className="service-card-label">{item.title}</span>
        <div className="service-card-overlay">
          <div className="service-card-overlay-content">
            <h3 className="service-card-title">{item.title}</h3>
            <p className="service-card-desc">{item.description}</p>
            <a 
              href={buildWhatsAppLink(item.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="service-link"
            >
              <WhatsAppIcon size={14} />
              Cotizar
            </a>
          </div>
        </div>
      </div>
    </article>
  );

  return (
    <section id="que-hacemos" className="services-section section-padding">
      <div className="container">
        {/* Main Section: Packaging */}
        <div className="services-group">
          <div className="services-header">
            <h2 className="services-title">¿Qué ofrecemos?</h2>
            <div className="title-underline"></div>
          </div>
          <div className="services-grid services-grid-6">
            {packagingList.map(renderCard)}
          </div>
        </div>

        {/* Secondary Section: Corporate Services */}
        <div className="services-group corporate-group">
          <div className="services-header">
            <h2 className="services-title">Otros servicios corporativos</h2>
            <div className="title-underline"></div>
          </div>
          <div className="services-grid services-grid-3">
            {corporateList.map(renderCard)}
          </div>
        </div>
      </div>
    </section>
  );
}
