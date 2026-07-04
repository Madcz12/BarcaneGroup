import React from 'react';
import './Services.css';

export default function Services() {
  const servicesList = [
    {
      id: 'gastronomy',
      title: 'Empaques para Gastronomía',
      description: 'Papel manteca, bolsas, cajas y empaques personalizados para restaurantes y negocios de comida.',
      image: '/images/service_gastronomy.png',
      badgeIcon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 2v20M18 2v20M6 12h12"></path>
          <circle cx="12" cy="7" r="3"></circle>
        </svg>
      )
    },
    {
      id: 'bags',
      title: 'Bolsas Ejecutivas',
      description: 'Bolsas corporativas personalizadas que reflejan la identidad y elegancia de tu empresa.',
      image: '/images/items/barcanegroup_bolsas3.webp',
      badgeIcon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
      )
    },
    {
      id: 'merchandising',
      title: 'Merchandising Corporativo',
      description: 'Artículos promocionales que fortalecen tu marca y generan recordación.',
      image: '/images/items/barcanegroup_bolsas4.webp',
      badgeIcon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="9" y1="3" x2="9" y2="21"></line>
          <line x1="15" y1="3" x2="15" y2="21"></line>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="3" y1="15" x2="21" y2="15"></line>
        </svg>
      )
    },
    {
      id: 'editorial',
      title: 'Impresión y Editorial',
      description: 'Libros, calendarios, agendas, catálogos y material impreso de alta calidad.',
      image: '/images/items/barcanegroup_calendars.webp',
      badgeIcon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="que-hacemos" className="services-section section-padding">
      <div className="container">
        <div className="services-header">
          <h2 className="services-title">¿Qué hacemos?</h2>
          <div className="title-underline"></div>
        </div>

        <div className="services-grid">
          {servicesList.map((service) => (
            <article className="service-card" key={service.id} id={service.id}>
              <div className="service-badge">
                {service.badgeIcon}
              </div>
              <div className="service-image-container">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="service-card-image"
                  loading="lazy"
                />
              </div>
              <div className="service-info">
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.description}</p>
                <a href="#contacto" className="service-link">
                  Ver más 
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="arrow-icon">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
