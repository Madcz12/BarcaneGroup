import React, { useRef } from 'react';
import WhatsAppIcon from '../icons/WhatsAppIcon';
import './FeaturedProducts.css';

export default function FeaturedProducts() {
  const scrollRef = useRef(null);

  const products = [
    {
      name: 'Bolsa Ejecutiva Premium',
      image: '/images/items/barcanegroup_bolsas1.png'
    },
    {
      name: 'Papel Manteca Personalizado',
      image: '/images/items/barcanegroup_papel_manteca.webp'
    },
    {
      name: 'Bolsa Kraft Personalizada',
      image: '/images/items/barcanegroup_bolsas3.webp'
    },
    {
      name: 'Calendarios Corporativos',
      image: '/images/items/barcanegroup_calendars.webp'
    },
    {
      name: 'Merchandising Corporativo',
      image: '/images/items/barcanegroup_bolsas4.webp'
    }
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75; // Scroll by 75% of container width
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="productos" className="featured-section section-padding">
      <div className="container">
        
        {/* Header with Navigation Arrows */}
        <div className="featured-header">
          <div>
            <h2 className="featured-title">Productos destacados</h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="carousel-nav-arrows">
            <button 
              className="arrow-btn" 
              onClick={() => scroll('left')} 
              aria-label="Desplazar a la izquierda"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button 
              className="arrow-btn" 
              onClick={() => scroll('right')} 
              aria-label="Desplazar a la derecha"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="carousel-outer">
          <div className="carousel-track" ref={scrollRef}>
            {products.map((product, index) => (
              <div className="product-card" key={index}>
                <div className="product-image-wrapper">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="product-image"
                    loading="lazy"
                  />
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <a 
                    href={`https://wa.me/51943703905?text=Hola%20BarcaneGroup,%20quisiera%20solicitar%20una%20cotizaci%C3%B3n%20para%20${encodeURIComponent(product.name)}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-pink btn-sm"
                  >
                    <WhatsAppIcon size={16} />
                    Solicitar cotización
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
