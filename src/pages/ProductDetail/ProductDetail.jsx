import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import WhatsAppIcon from '../../components/icons/WhatsAppIcon';
import { getProductById } from '../../data/mockProducts';
import './ProductDetail.css';

// Builds the WhatsApp quote link with the product name pre-filled.
function buildWhatsAppLink(productName) {
  const base = 'https://wa.me/51943703905';
  const message = `Hola BarcaneGroup, quisiera solicitar una cotización para ${productName}`;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export default function ProductDetail() {
  const { id } = useParams();
  const initialProduct = getProductById(id);
  const [currentProduct, setCurrentProduct] = useState(initialProduct);
  const [isLoading, setIsLoading] = useState(true);

  // Scroll to top on mount/id change and show smooth entry loader
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setIsLoading(true);
    setCurrentProduct(getProductById(id));

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 450);

    return () => clearTimeout(timer);
  }, [id]);

  const product = currentProduct || initialProduct;

  // Loading state
  if (isLoading) {
    return (
      <section className="detail-section">
        <div className="detail-loader-container">
          <div className="detail-spinner" />
          <p className="detail-loader-text">Cargando producto BarcaneGroup...</p>
        </div>
      </section>
    );
  }

  // Not found fallback
  if (!product) {
    return (
      <section className="detail-section">
        <div className="detail-container">
          <div className="detail-not-found">
            <Link to="/productos" className="detail-back-top">
              ← Volver al catálogo
            </Link>
            <h2>Producto no encontrado</h2>
            <p>El producto que buscas no existe o no está disponible.</p>
            <Link to="/productos" className="detail-not-found-link">
              Ver todos los productos
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="detail-section">
      <div className="detail-container animate-fade-in">
        {/* Image / Gallery column */}
        <div className="detail-gallery-column">
          <div className="detail-image-wrap">
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="detail-image"
              />
            ) : (
              <div className="catalog-card-placeholder">
                <span className="catalog-card-placeholder-text">Imagen próximamente</span>
              </div>
            )}
          </div>

          {/* Gallery thumbnails if product has multiple items */}
          {product.items && product.items.length > 1 && (
            <div className="detail-thumbnails">
              {product.items.map((item, idx) => {
                const isActive =
                  item.id === product.id || item.image === product.image;
                return (
                  <button
                    key={item.id || idx}
                    type="button"
                    className={`detail-thumb-btn ${isActive ? 'active' : ''}`}
                    onClick={() => setCurrentProduct({ ...product, ...item })}
                    aria-label={`Ver ${item.name}`}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="detail-thumb-img"
                    />
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Info column */}
        <div className="detail-info">
          <Link to="/productos" className="detail-back-top">
            ← Volver al catálogo
          </Link>

          <span className="detail-category">{product.category}</span>
          <h1 className="detail-name">{product.name}</h1>
          <span className="detail-price">{product.price}</span>
          <p className="detail-desc">{product.description}</p>

          {product.feature && (
            <div className="detail-feature-badge">
              <span className="detail-feature-check">
                <svg
                  width="13"
                  height="13"
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
          )}

          <div className="detail-cta">
            <a
              href={buildWhatsAppLink(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-pink"
            >
              <WhatsAppIcon size={18} />
              Solicitar cotización
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}