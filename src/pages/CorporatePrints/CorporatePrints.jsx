import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import WhatsAppIcon from '../../components/icons/WhatsAppIcon';
import './CorporatePrints.css';

export default function CorporatePrints() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const buildWhatsAppLink = (categoryName) => {
    const message = `Hola BarcaneGroup, quisiera solicitar información y cotización sobre ${categoryName} (Impresos Corporativos).`;
    return `https://wa.me/51943703905?text=${encodeURIComponent(message)}`;
  };

  const productCategories = [
    {
      id: 'papeleria',
      title: 'Papelería',
      image: '/images/catalog/CorpPrints/bggroup_corp_impr_item1.webp',
      items: [
        'Tarjetas de presentación',
        'Hojas membretadas',
        'Sobres',
        'Carpetas',
        'Blocks',
        'Formularios',
      ],
    },
    {
      id: 'comunicacion-comercial',
      title: 'Comunicación comercial',
      image: '/images/catalog/CorpPrints/bggroup_corp_impr_item2.webp',
      items: [
        'Brochures',
        'Catálogos',
        'Flyers',
        'Dípticos',
        'Trípticos',
        'Fichas comerciales',
      ],
    },
    {
      id: 'editorial-corporativo',
      title: 'Editorial y corporativo',
      image: '/images/catalog/CorpPrints/bggroup_corp_impr_item3.webp',
      items: [
        'Agendas',
        'Cuadernos',
        'Manuales',
        'Revistas',
        'Memorias corporativas',
      ],
    },
    {
      id: 'especializados',
      title: 'Especializados',
      image: '/images/catalog/CorpPrints/bggroup_corp_impr_item4.webp',
      items: [
        'Menús',
        'Cartas',
        'Certificados',
        'Invitaciones',
        'Material informativo',
      ],
    },
  ];

  return (
    <div className="service-detail-page corporate-prints-page animate-fade-in">
      {/* Edge-to-Edge 100% Full-Bleed Hero Banner */}
      <header className="service-detail-hero-fullbleed corporate-prints-hero">
        <img
          src="/images/catalog/CorpPrints/bggroup_corpprint_wideheadsec.webp"
          alt="Impresos corporativos BarcaneGroup"
          className="service-detail-hero-img"
        />

        {/* Dark Left-Side Contrast Overlay */}
        <div className="service-detail-hero-overlay" />

        {/* Content Layer (Back Link + Far-Left Aligned Text Block) */}
        <div className="service-detail-hero-content-wrap">
          <div className="service-detail-hero-container">
            {/* Back link directly on top of image background */}
            <div className="service-detail-hero-nav">
              <Link to="/#impresos-corporativos" className="service-detail-hero-back-link">
                ← Volver a Servicios
              </Link>
            </div>

            {/* Text Card aligned to the left zone */}
            <div className="service-detail-hero-card">
              <h1 className="service-detail-hero-title">
                Impresos corporativos
              </h1>
              <p className="service-detail-hero-subtitle corporate-prints-subtitle" style={{ color: '#cd9fff' }}>
                Tu identidad presente en cada marca.
              </p>
              <p className="service-detail-hero-desc">
                Materiales impresos que comunican, presentan y fortalecen la identidad de tu marca.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Product Grid Section Below Header */}
      <section className="corporate-products-section">
        <div className="corporate-products-container">
          <div className="corporate-products-grid">
            {productCategories.map((category) => (
              <div className="corporate-product-card" key={category.id}>
                {/* Image Box */}
                <div className="corporate-card-placeholder">
                  {category.image ? (
                    <img
                      src={category.image}
                      alt={category.title}
                      className="corporate-card-img"
                      style={category.objectPosition ? { objectPosition: category.objectPosition } : undefined}
                    />
                  ) : (
                    <div className="corporate-placeholder-inner">
                      <svg
                        viewBox="0 0 24 24"
                        width="36"
                        height="36"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="corporate-placeholder-icon"
                      >
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <polyline points="21 15 16 10 5 21" />
                      </svg>
                      <span className="corporate-placeholder-text">Imagen próximamente</span>
                    </div>
                  )}
                </div>

                {/* Text Content Box */}
                <div className="corporate-card-info">
                  <h2 className="corporate-card-title">{category.title}</h2>
                  <p className="corporate-card-items">
                    {category.items.join(' · ')}
                  </p>
                  <div className="corporate-card-footer">
                    <a
                      href={buildWhatsAppLink(category.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="corporate-card-cta"
                    >
                      <WhatsAppIcon size={18} />
                      Cotizar
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
