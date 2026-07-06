import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
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
  const [activeCategory, setActiveCategory] = useState('all');

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
            onClick={() => setActiveCategory(cat.id)}
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
    </section>
  );
}