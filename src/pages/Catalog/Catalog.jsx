import React, { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import mockProducts from '../../data/mockProducts';
import './Catalog.css';

// Category filter options shown in the filter bar.
const CATEGORIES = [
  { id: 'all', label: 'Todos' },
  { id: 'empaques', label: 'Empaques' },
  { id: 'bolsas', label: 'Bolsas' },
  { id: 'merchandising', label: 'Merchandising' },
  { id: 'editorial', label: 'Editorial' },
];

export default function Catalog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get('categoria');
  const activeCategory = CATEGORIES.some((c) => c.id === categoryFromUrl)
    ? categoryFromUrl
    : 'all';

  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
      {/* Header */}
      <div className="catalog-header">
        <h1 className="catalog-title">Catálogo de Productos</h1>
        <p className="catalog-subtitle">
          Explora nuestra línea completa de empaques, bolsas, merchandising y editorial corporativo personalizado para tu empresa.
        </p>
        <div className="catalog-underline" />
      </div>

      {/* Filter bar */}
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

      {/* Product grid */}
      <div className="catalog-grid">
        {filteredProducts.map((product) => (
          <Link
            key={product.id}
            to={`/productos/${product.id}`}
            className="catalog-card"
          >
            <div className="catalog-card-image-wrap">
              <img
                src={product.image}
                alt={product.name}
                className="catalog-card-image"
                loading="lazy"
              />
            </div>
            <div className="catalog-card-body">
              <span className="catalog-card-category">{product.category}</span>
              <h3 className="catalog-card-name">{product.name}</h3>
              <p className="catalog-card-desc">{product.description}</p>
              <span className="catalog-card-price">{product.price}</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Back to top button */}
      {showBackToTop && (
        <button
          className="back-to-top-btn"
          onClick={scrollToTop}
          aria-label="Volver al inicio"
          type="button"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 15l-6-6-6 6"/>
          </svg>
        </button>
      )}
    </section>
  );
}