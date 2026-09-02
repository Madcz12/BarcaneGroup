import React, { useState, useMemo, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
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

function CatalogCard({ product }) {
  const items = useMemo(() => {
    if (product.items && product.items.length > 0) {
      return product.items;
    }
    return [
      {
        id: product.id,
        name: product.name,
        image: product.image,
        tag: product.tag,
        feature: product.feature,
        description: product.description,
      },
    ];
  }, [product]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const touchStartX = useRef(null);
  const touchDeltaX = useRef(0);

  const [showPopover, setShowPopover] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const firstItem = items[0];
  const activeItem = items[activeIndex] || items[0];

  const handlePrev = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const handleSelectDot = (e, index) => {
    e.stopPropagation();
    e.preventDefault();
    setActiveIndex(index);
  };

  const handlePointerDown = (e) => {
    touchStartX.current = e.clientX || (e.touches && e.touches[0]?.clientX) || 0;
    touchDeltaX.current = 0;
    setIsDragging(false);
  };

  const handlePointerMove = (e) => {
    if (e.pointerType !== 'touch' && (!e.touches || e.touches.length === 0)) {
      setCursorPos({ x: e.clientX, y: e.clientY });
      setShowPopover(true);
    }

    if (touchStartX.current === null) return;
    const currentX = e.clientX || (e.touches && e.touches[0]?.clientX) || 0;
    const diff = currentX - touchStartX.current;
    touchDeltaX.current = diff;
    if (Math.abs(diff) > 10) {
      setIsDragging(true);
    }
  };

  const handlePointerUp = (e) => {
    if (touchStartX.current !== null && Math.abs(touchDeltaX.current) > 35) {
      if (touchDeltaX.current < 0) {
        handleNext(e);
      } else {
        handlePrev(e);
      }
    }
    touchStartX.current = null;
    touchDeltaX.current = 0;
    setTimeout(() => setIsDragging(false), 50);
  };

  const handleMouseLeave = (e) => {
    handlePointerUp(e);
    setShowPopover(false);
  };

  const handleCardClick = (e) => {
    if (isDragging) {
      e.preventDefault();
    }
  };

  const popoverWidth = typeof window !== 'undefined' && window.innerWidth < 1100 ? 350 : 420;
  const popoverHeight = Math.round(popoverWidth * 0.75);
  const halfW = popoverWidth / 2;
  const halfH = popoverHeight / 2;
  const clampedX = typeof window !== 'undefined' ? Math.max(halfW + 12, Math.min(window.innerWidth - halfW - 12, cursorPos.x)) : cursorPos.x;
  const clampedY = typeof window !== 'undefined' ? Math.max(halfH + 12, Math.min(window.innerHeight - halfH - 12, cursorPos.y)) : cursorPos.y;

  return (
    <Link
      to={`/productos/${firstItem.id}`}
      className="catalog-card"
      onClick={handleCardClick}
    >
      {/* Image Carousel Wrap */}
      <div
        className="catalog-card-image-wrap"
        onMouseDown={handlePointerDown}
        onMouseMove={handlePointerMove}
        onMouseUp={handlePointerUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handlePointerDown}
        onTouchMove={handlePointerMove}
        onTouchEnd={handlePointerUp}
      >
        <div
          className="catalog-card-carousel-track"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {items.map((item, idx) => (
            <div className="catalog-card-slide" key={item.id || idx}>
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.name}
                  className="catalog-card-image"
                  loading="lazy"
                  draggable="false"
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
                  <span className="catalog-card-placeholder-text">
                    Imagen próximamente
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Carousel Navigation Arrows */}
        {items.length > 1 && (
          <>
            <button
              type="button"
              className="catalog-card-arrow catalog-card-arrow-left"
              onClick={handlePrev}
              aria-label="Anterior producto"
            >
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <button
              type="button"
              className="catalog-card-arrow catalog-card-arrow-right"
              onClick={handleNext}
              aria-label="Siguiente producto"
            >
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            {/* Carousel Dots */}
            <div className="catalog-card-dots">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`catalog-card-dot ${idx === activeIndex ? 'active' : ''}`}
                  onClick={(e) => handleSelectDot(e, idx)}
                  aria-label={`Ir al producto ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* External Full Image Preview Popover Window at Cursor Position */}
      {showPopover && activeItem.image && !isDragging && createPortal(
        <div
          className="catalog-card-zoom-popover"
          style={{
            left: `${clampedX}px`,
            top: `${clampedY}px`,
          }}
        >
          <img
            src={activeItem.image}
            alt={activeItem.name}
            className="catalog-card-zoom-popover-img"
          />
        </div>,
        document.body
      )}

      {/* Card Content Body */}
      <div className="catalog-card-body">
        <span className="catalog-card-tag">{firstItem.tag}</span>
        <h3 className="catalog-card-name">{firstItem.name}</h3>
        <p className="catalog-card-desc">{firstItem.description}</p>

        {/* Feature item */}
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
          <span>{firstItem.feature}</span>
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
  );
}

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
        <h1 className="catalog-title">
          Ideas que toman forma. Marcas que se hacen visibles.
        </h1>
        <p className="catalog-subtitle">
          Producimos materiales gráficos, empaques, textiles y elementos
          publicitarios para empresas que buscan comunicar mejor, dentro y fuera
          de sus espacios.
        </p>
        <p className="catalog-subtext">
          Adaptamos materiales, formatos, cantidades y acabados a las
          necesidades de cada proyecto.
        </p>
        <div className="catalog-underline" />
      </div>

      {/* Filter pills bar */}
      <div className="catalog-filters">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            className={`catalog-filter-btn ${activeCategory === cat.id ? "active" : ""}`}
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
          <p className="catalog-loader-text">
            Cargando catálogo BarcaneGroup...
          </p>
        </div>
      ) : (
        <>
          {/* Product cards grid */}
          <div className="catalog-grid animate-fade-in">
            {filteredProducts.map((product) => (
              <CatalogCard key={product.id} product={product} />
            ))}
          </div>

          {/* Bottom CTA Banner matching reference */}
          <div className="catalog-cta-banner animate-fade-in">
            <div className="catalog-cta-banner-icon">
              <WhatsAppIcon size={24} />
            </div>
            <div className="catalog-cta-banner-content">
              <h3 className="catalog-cta-banner-title">
                ¿No encuentras exactamente lo que necesitas?
              </h3>
              <p className="catalog-cta-banner-desc">
                Cuéntanos tu idea. Desarrollamos soluciones personalizadas según
                tu producto, industria, presupuesto y objetivo.
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