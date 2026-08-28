import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import WhatsAppIcon from '../../components/icons/WhatsAppIcon';
import './MerchTextile.css';

export default function MerchTextile() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const buildWhatsAppLink = (categoryName) => {
    const message = `Hola BarcaneGroup, quisiera solicitar información y cotización sobre ${categoryName} (Merchandising y textil).`;
    return `https://wa.me/51943703905?text=${encodeURIComponent(message)}`;
  };

  const productCategories = [
    {
      id: 'textil-corporativo',
      title: 'Textil corporativo',
      image: '/images/catalog/MerchTextile/bcgroup_textile_corporate.webp',
      items: [
        'Polos',
        'Camisas',
        'Hoodies',
        'Chaquetas',
        'Uniformes',
      ],
    },
    {
      id: 'accesorios-textiles',
      title: 'Accesorios textiles',
      image: '/images/catalog/MerchTextile/bcgroup_corpo_adds_bags.webp',
      items: [
        'Gorras',
        'Tote bags',
        'Bolsos',
        'Mochilas',
      ],
    },
    {
      id: 'merchandising',
      title: 'Merchandising',
      image: '/images/catalog/MerchTextile/bcgroup_new_lens_bottles_merch.webp',
      items: [
        'Termos',
        'Botellas',
        'Tazas',
        'Lanyards',
        'Artículos promocionales',
      ],
    },
    {
      id: 'campanas-eventos',
      title: 'Campañas y eventos',
      image: '/images/catalog/MerchTextile/bcgroup_merch_bottles.webp',
      items: [
        'Kits corporativos',
        'Welcome packs',
        'Regalos empresariales',
        'Productos para activaciones',
      ],
    },
  ];

  return (
    <div className="service-detail-page merch-textile-page animate-fade-in">
      {/* Edge-to-Edge 100% Full-Bleed Hero Banner */}
      <header className="service-detail-hero-fullbleed merch-textile-hero">
        <img
          src="/images/catalog/MerchTextile/bcgroup_merch_cloth_widehead.webp"
          alt="Merchandising & textil BarcaneGroup"
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
                to="/#merchandising"
                className="service-detail-hero-back-link"
              >
                ← Volver a Lineas Comerciales
              </Link>
            </div>

            {/* Text Card aligned to the left zone */}
            <div className="service-detail-hero-card">
              <h1 className="service-detail-hero-title">
                Merchandising & textil
              </h1>
              <p
                className="service-detail-hero-subtitle merch-textile-subtitle"
                style={{ color: "#cd9fff" }}
              >
                Productos que mantienen tu marca siempre presente.
              </p>
              <p className="service-detail-hero-desc">
                Polos, gorras, tote bags, mugs, lanyards, termos y kits
                corporativos para tu marca.
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
