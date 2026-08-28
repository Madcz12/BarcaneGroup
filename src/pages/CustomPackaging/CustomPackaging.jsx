import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import WhatsAppIcon from '../../components/icons/WhatsAppIcon';
import './CustomPackaging.css';

export default function CustomPackaging() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const buildWhatsAppLink = (categoryName) => {
    const message = `Hola BarcaneGroup, quisiera solicitar información y cotización sobre ${categoryName} (Empaques y etiquetas).`;
    return `https://wa.me/51943703905?text=${encodeURIComponent(message)}`;
  };

  const productCategories = [
    {
      id: 'empaques',
      title: 'Empaques',
      image: '/images/catalog/Packaging/bggroup_packaging_boxes.webp',
      items: [
        'Cajas plegadizas',
        'Cajas corrugadas',
        'Estuches',
        'Bolsas',
        'Packaging personalizado',
      ],
    },
    {
      id: 'papeles-envoltorios',
      title: 'Papeles y envoltorios',
      image: '/images/catalog/Packaging/bcgroup_food_wrapperv3.webp',
      objectPosition: 'center',
      items: [
        'Papel antigrasa',
        'Papel personalizado',
        'Envoltorios',
        'Fajas y sleeves',
      ],
    },
    {
      id: 'etiquetas',
      title: 'Etiquetas',
      image: '/images/catalog/Packaging/bcgroup_lbl_stickers.webp',
      items: [
        'Etiquetas adhesivas',
        'Stickers',
        'Etiquetas troqueladas',
        'Etiquetas especiales',
      ],
    },
    {
      id: 'identificacion-producto',
      title: 'Identificación de producto',
      image: '/images/catalog/Packaging/bggroup_packaging_papers_sleeves.webp',
      items: [
        'Hangtags',
        'Tags',
        'Fajas',
        'Elementos de presentación',
      ],
    },
  ];

  return (
    <div className="service-detail-page custom-packaging-page animate-fade-in">
      {/* Edge-to-Edge 100% Full-Bleed Hero Banner */}
      <header className="service-detail-hero-fullbleed custom-packaging-hero">
        <img
          src="/images/catalog/Packaging/bggroup_packaging_wideheadsec.jpg"
          alt="Empaques y etiquetas BarcaneGroup"
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
                to="/#empaques-personalizados"
                className="service-detail-hero-back-link"
              >
                ← Volver a Lineas Comerciales
              </Link>
            </div>

            {/* Text Card aligned to the left zone */}
            <div className="service-detail-hero-card">
              <h1 className="service-detail-hero-title">
                Empaques y etiquetas
              </h1>
              <p
                className="service-detail-hero-subtitle custom-packaging-subtitle"
                style={{ color: "#cd9fff" }}
              >
                Packaging que presenta, protege y diferencia tu marca.
              </p>
              <p className="service-detail-hero-desc">
                Desde cajas y envoltorios hasta etiquetas y desarrollos
                especiales que convierten cada entrega en parte de la
                experiencia del cliente.
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
