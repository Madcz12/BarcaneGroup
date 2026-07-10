import React, { useEffect } from 'react';
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

  // Scroll to top on mount and when product id changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);

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
      <div className="detail-container">
        {/* Image column */}
        <div className="detail-image-wrap">
          <img
            src={product.image}
            alt={product.name}
            className="detail-image"
          />
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