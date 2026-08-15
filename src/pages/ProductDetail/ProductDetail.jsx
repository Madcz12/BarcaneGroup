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
  const product = getProductById(id);
  const [isLoading, setIsLoading] = useState(true);

  // Scroll to top on mount/id change and show smooth entry loader
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 450);

    return () => clearTimeout(timer);
  }, [id]);

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
        {/* Image column */}
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

        {/* Info column */}
        <div className="detail-info">
          <Link to="/productos" className="detail-back-top">
            ← Volver al catálogo
          </Link>

          <span className="detail-category">{product.category}</span>
          <h1 className="detail-name">{product.name}</h1>
          <span className="detail-price">{product.price}</span>
          <p className="detail-desc">{product.description}</p>

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