import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import WhatsAppIcon from '../icons/WhatsAppIcon';
import './Hero.css';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const slides = [
    '/images/carrousel/barcanegroup-corpmerchcarrouselv2.webp',
    '/images/carrousel/barcanegroup-gastrocateringcarrouselv2.webp',
    '/images/carrousel/barcanegroup-kraftbagscarrouselv2.webp',
    '/images/carrousel/barcanegroup-premiumbagscarrouselv2.webp',
    '/images/carrousel/bgroup_oficial_bags.webp'
  ];

  // Extend slides array by appending a clone of the first slide to create a seamless loop
  const extendedSlides = [...slides, slides[0]];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setCurrentSlide((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Handle transition warp back to slide 0 after sliding to the clone slide
  useEffect(() => {
    if (currentSlide === slides.length) {
      const warpTimer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(0);
      }, 800); // Matches the 0.8s transition duration defined in CSS/inline styles
      return () => clearTimeout(warpTimer);
    }
  }, [currentSlide, slides.length]);

  return (
    <section id="inicio" className="hero-section">
      {/* Background Sliding Carousel */}
      <div className="hero-bg-carousel">
        <div 
          className="hero-bg-track"
          style={{
            width: `${extendedSlides.length * 100}%`,
            transform: `translateX(-${(currentSlide * 100) / extendedSlides.length}%)`,
            transition: isTransitioning ? 'transform 0.8s cubic-bezier(0.77, 0, 0.175, 1)' : 'none'
          }}
        >
          {extendedSlides.map((slide, index) => (
            <div
              key={`${slide}-${index}`}
              className="hero-bg-slide"
              style={{ 
                backgroundImage: `url(${slide})`,
                width: `${100 / extendedSlides.length}%`,
                ...(slide.includes('carrouselbags') ? { backgroundSize: '110% 110%' } : {})
              }}
            />
          ))}
        </div>
        {/* Protective Gradient Overlay */}
        <div className="hero-bg-overlay" />
      </div>

      {/* Hero Content Overlay */}
      <div className="container hero-container animate-fade-in-up">
        <div className="hero-content">
          <h1 className="hero-title">
            Soluciones que <br />
            impulsan <span className="text-highlight">tu marca</span>
          </h1>
          
          <p className="hero-subtitle">
            Fabricamos y distribuimos empaques, merchandising e impresión personalizados para empresas e instituciones en todo el Perú.
          </p>

          <div className="hero-actions">
            <a 
              href="https://wa.me/51943703905?text=Hola%20BarcaneGroup,%20quisiera%20solicitar%20una%20cotizaci%C3%B3n" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-pink"
            >
              <WhatsAppIcon size={18} />
              Solicitar cotización
            </a>
            
            <Link to="/productos" className="btn btn-outline">
              Ver catálogo
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px' }}>
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </Link>
          </div>

          {/* Badges strip integrated at the bottom of hero content */}
          <div className="hero-badges">
            <div className="hero-badge-item">
              <div className="hero-badge-icon">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10v6M12 2v20M2 10h20M2 16h20"></path>
                  <rect x="6" y="6" width="12" height="12" rx="2"></rect>
                </svg>
              </div>
              <span className="hero-badge-text">Fabricación propia</span>
            </div>

            <div className="hero-badge-item">
              <div className="hero-badge-icon">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
              </div>
              <span className="hero-badge-text">Personalización total</span>
            </div>

            <div className="hero-badge-item">
              <div className="hero-badge-icon">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <span className="hero-badge-text">Cobertura nacional</span>
            </div>

            <div className="hero-badge-item">
              <div className="hero-badge-icon">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="3" width="15" height="13"></rect>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                  <circle cx="5.5" cy="18.5" r="2.5"></circle>
                  <circle cx="18.5" cy="18.5" r="2.5"></circle>
                </svg>
              </div>
              <span className="hero-badge-text">Entregas puntuales</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
