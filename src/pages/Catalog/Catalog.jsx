import React, { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import mockProducts from '../../data/mockProducts';
import WhatsAppIcon from '../../components/icons/WhatsAppIcon';
import './Catalog.css';

// Category filter options aligned with reference catalog structure
const CATEGORIES = [
  { id: 'all', label: 'Todos' },
  { id: 'packaging', label: 'Packaging' },
  { id: 'papeles', label: 'Papeles' },
  { id: 'etiquetas', label: 'Etiquetas' },
  { id: 'gran-formato', label: 'Gran formato' },
  { id: 'editorial', label: 'Editorial' },
  { id: 'merchandising', label: 'Merchandising' },
  { id: 'acabados', label: 'Acabados' },
];

export default function Catalog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get('categoria');
  const activeCategory = CATEGORIES.some((c) => c.id === categoryFromUrl)
    ? categoryFromUrl
    : 'all';

  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Initial loader timeout for smooth user feedback on entry
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 450);

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryChange = (categoryId) => {
    if (categoryId === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ categoria: categoryId });
    }
  };

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') return mockProducts;
    return mockProducts.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="catalog-section">
      {/* Header section matching reference structure */}
      <div className="catalog-header">
        <h1 className="catalog-title">Soluciones que hacen visible tu marca</h1>
        <p className="catalog-subtitle">
          Explora nuestras principales líneas de productos y desarrollos gráficos personalizados.
        </p>
        <p className="catalog-subtext">
          Adaptamos materiales, formatos, cantidades y acabados a las necesidades de cada proyecto.
        </p>
        <div className="catalog-underline" />
      </div>

      {/* Filter pills bar */}
      <div className="catalog-filters">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            className={`catalog-filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => handleCategoryChange(cat.id)}
            type="button"
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Loader indicator or Catalog Content */}
      {isLoading ? (
        <div className="catalog-loader-container">
          <div className="catalog-spinner" />
          <p className="catalog-loader-text">Cargando catálogo BarcaneGroup...</p>
        </div>
      ) : (
        <>
          {/* Product cards grid */}
          <div className="catalog-grid animate-fade-in">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/productos/${product.id}`}
                className="catalog-card"
              >
                {/* Image Placeholder Area */}
                <div className="catalog-card-image-wrap">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="catalog-card-image"
                      loading="lazy"
                    />
                  ) : (
                    <div className="catalog-card-placeholder">
                      <div className="catalog-card-placeholder-icon">
                        <svg
                          width="38"
                          height="38"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect x="3" y="3" width="18" height="18" rx="3" ry="3" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <polyline points="21 15 16 10 5 21" />
                        </svg>
                      </div>
                      <span className="catalog-card-placeholder-text">Imagen próximamente</span>
                    </div>
                  )}
                </div>

                {/* Card Content Body */}
                <div className="catalog-card-body">
                  <span className="catalog-card-tag">{product.tag}</span>
                  <h3 className="catalog-card-name">{product.name}</h3>
                  <p className="catalog-card-desc">{product.description}</p>

                  {/* Pink check feature item */}
                  <div className="catalog-card-feature">
                    <span className="catalog-card-check-icon">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span>{product.feature}</span>
                  </div>

                  {/* Solicitar cotizacion CTA */}
                  <div className="catalog-card-cta">
                    <span>Solicitar cotización</span>
                    <svg
                      className="catalog-card-cta-arrow"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom CTA Banner matching reference */}
          <div className="catalog-cta-banner animate-fade-in">
            <div className="catalog-cta-banner-icon">
              <WhatsAppIcon size={24} />
            </div>
            <div className="catalog-cta-banner-content">
              <h3 className="catalog-cta-banner-title">¿No encuentras exactamente lo que necesitas?</h3>
              <p className="catalog-cta-banner-desc">
                Cuéntanos tu idea. Desarrollamos soluciones personalizadas según tu producto, industria, presupuesto y objetivo.
              </p>
            </div>
            <a
              href="https://wa.me/51943703905?text=Hola%20BarcaneGroup,%20quisiera%20cotizar%20un%20proyecto%20personalizado"
              target="_blank"
              rel="noopener noreferrer"
              className="catalog-cta-banner-btn"
            >
              <WhatsAppIcon size={20} />
              <span>Cotiza tu proyecto por WhatsApp</span>
            </a>
          </div>
        </>
      )}

      {/* Back to top floating button */}
      {showBackToTop && (
        <button
          className="back-to-top-btn"
          onClick={scrollToTop}
          aria-label="Volver al inicio"
          type="button"
        >
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </button>
      )}
    </section>
  );
}