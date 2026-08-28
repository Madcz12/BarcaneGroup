import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import WhatsAppIcon from '../../components/icons/WhatsAppIcon';
import './AdEquipment.css';

export default function AdEquipment() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const buildWhatsAppLink = (categoryName) => {
    const message = `Hola BarcaneGroup, quisiera solicitar información y cotización sobre ${categoryName} (Publicidad y equipamiento).`;
    return `https://wa.me/51943703905?text=${encodeURIComponent(message)}`;
  };

  const productCategories = [
    {
      id: 'expositores-banners',
      title: 'Publicidad de gran formato',
      image: null,
      items: [
        'Banners',
        'Gigantografías',
        'Lonas',
        'Viniles',
      ],
    },
    {
      id: 'viniles-pavonados',
      title: 'Exhibición',
      image: null,
      items: [
        'Roll Screens',
        'Displays',
        'Backings',
        'Photocalls',
      ],
    },
    {
      id: 'banderas-totems',
      title: 'Punto de venta',
      image: null,
      items: [
        'Material POP',
        'Exhibidores',
        'Displays de producto',
        'Elementos promocionales',
      ],
    },
    {
      id: 'estructuras-activaciones',
      title: 'Eventos y espacios',
      image: null,
      items: [
        'Stands',
        'Módulos publicitarios',
        'Counters',
        'Señalética',
        'Elementos para ferias',
      ],
    },
  ];

  return (
    <div className="service-detail-page ad-equipment-page animate-fade-in">
      {/* Edge-to-Edge 100% Full-Bleed Hero Banner */}
      <header className="service-detail-hero-fullbleed ad-equipment-hero">
        <img
          src="/images/items/bggroup_new_brand_equipment_notext.webp"
          alt="Publicidad y equipamiento BarcaneGroup"
          className="service-detail-hero-img"
        />

        {/* Dark Left-Side Contrast Overlay */}
        <div className="service-detail-hero-overlay" />

        {/* Content Layer (Back Link + Far-Left Aligned Text Block) */}
        <div className="service-detail-hero-content-wrap">
          <div className="service-detail-hero-container">
            {/* Back link directly on top of image background */}
            <div className="service-detail-hero-nav">
              <Link
                to="/#material-publicitario"
                className="service-detail-hero-back-link"
              >
                ← Volver a Lineas Comerciales
              </Link>
            </div>

            {/* Text Card aligned to the left zone */}
            <div className="service-detail-hero-card">
              <h1 className="service-detail-hero-title">
                Publicidad y equipamiento
              </h1>
              <p
                className="service-detail-hero-subtitle ad-equipment-subtitle"
                style={{ color: "#cd9fff" }}
              >
                Hazte visible donde realmente importa.
              </p>
              <p className="service-detail-hero-desc">
                Banner, viniles rollscreen, backing, pavonados, plumas, totem,
                ruleta.
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
                {/* Image Box / Placeholder */}
                <div className="corporate-card-placeholder">
                  {category.image ? (
                    <img
                      src={category.image}
                      alt={category.title}
                      className="corporate-card-img"
                      style={
                        category.objectPosition
                          ? { objectPosition: category.objectPosition }
                          : undefined
                      }
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
                        <rect
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"
                        />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <polyline points="21 15 16 10 5 21" />
                      </svg>
                      <span className="corporate-placeholder-text">
                        Imagen próximamente
                      </span>
                    </div>
                  )}
                </div>

                {/* Text Content Box */}
                <div className="corporate-card-info">
                  <h2 className="corporate-card-title">{category.title}</h2>
                  <p className="corporate-card-items">
                    {category.items.join(" · ")}
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
