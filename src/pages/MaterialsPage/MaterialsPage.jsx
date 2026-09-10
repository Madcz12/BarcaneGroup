import React, { useEffect, useState, useCallback, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import PillarsShowcase from './PillarsShowcase';
import './MaterialsPage.css';

export default function MaterialsPage() {
  const location = useLocation();

  // Carousel images configuration
  const slides = [
    {
      id: 'papeles-especiales',
      image: '/images/items/InfoMaterials/bggroup_material_info_papers.webp',
      title: 'Papeles y cartulinas finas',
      subtitle: 'Bond, couche, antigrasa, seda y otras alternativas',
      tag: 'Bond · Couche · Antigrasa · Seda',
    },
    {
      id: 'kraft-y-ecologicos',
      image: '/images/items/InfoMaterials/bggroup_material_info_boxes.webp',
      title: 'Fibras ecológicas y cartones corrugados',
      subtitle: 'Resistencia, funcionalidad y apariencia natural en materiales responsables',
      tag: 'Kraft · Microcorrugado · Biodegradable',
      objectPosition: 'center top',
    },
    {
      id: 'adhesivos-y-etiquetas',
      image: '/images/items/InfoMaterials/bggroup_material_info_stickers.webp',
      title: 'Adhesivos y etiquetas de seguridad',
      subtitle: 'La adherencia ideal para aplicaciones comerciales y corporativas',
      tag: 'Adhesivos · Seguridad · Troquelados',
    },
    {
      id: 'acabados-especiales',
      image: '/images/items/InfoMaterials/bggroup_material_info_prints.webp',
      title: 'Acabados especiales',
      subtitle: 'Laminados, stamping, relieves y troquelados',
      tag: 'Stamping · Barniz UV · Relieves · Laminados',
    },
  ];

  const searchParams = new URLSearchParams(location.search);
  const requestedId = searchParams.get('id') || location.state?.materialId || location.hash?.replace('#', '');
  const initialIndex = slides.findIndex((s) => s.id === requestedId);
  const startingSlide = initialIndex >= 0 ? initialIndex : 0;

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Embla setup
  const autoplay = useRef(
    Autoplay({ delay: 4500, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, duration: 25, startIndex: startingSlide },
    [autoplay.current]
  );

  const [selectedIndex, setSelectedIndex] = useState(startingSlide);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  useEffect(() => {
    if (!emblaApi) return;
    if (initialIndex >= 0) {
      emblaApi.scrollTo(initialIndex, true);
      setSelectedIndex(initialIndex);
    }
  }, [emblaApi, initialIndex]);

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );

  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="service-detail-page materials-page animate-fade-in">
      {/* Edge-to-Edge 100% Full-Bleed Hero Banner with Carousel */}
      <header className="service-detail-hero-fullbleed materials-hero">
        <div className="materials-hero-carousel" ref={emblaRef}>
          <div className="materials-hero-carousel-container">
            {slides.map((slide, idx) => (
              <div className="materials-hero-slide" key={slide.id || idx}>
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="service-detail-hero-img"
                  style={slide.objectPosition ? { objectPosition: slide.objectPosition } : undefined}
                  loading={idx === 0 ? 'eager' : 'lazy'}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dark Contrast Overlay */}
        <div className="service-detail-hero-overlay" />

        {/* Carousel Prev/Next Navigation Controls */}
        <button
          type="button"
          onClick={scrollPrev}
          className="materials-carousel-arrow materials-carousel-arrow-prev"
          aria-label="Imagen anterior"
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <button
          type="button"
          onClick={scrollNext}
          className="materials-carousel-arrow materials-carousel-arrow-next"
          aria-label="Siguiente imagen"
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* Content Layer (Back Link + Hero Card) */}
        <div className="service-detail-hero-content-wrap">
          <div className="service-detail-hero-container">
            {/* Back link */}
            <div className="service-detail-hero-nav">
              <Link to="/#asesoria" className="service-detail-hero-back-link">
                ← Volver al Inicio
              </Link>
            </div>

            {/* Text Card aligned to the left */}
            <div className="service-detail-hero-card">
              <h1 className="service-detail-hero-title">
                {slides[selectedIndex]?.title || 'Materiales y Asesoría'}
              </h1>
              <p
                className="service-detail-hero-subtitle materials-hero-subtitle"
                style={{ color: '#cd9fff' }}
              >
                {slides[selectedIndex]?.subtitle || 'Soluciones a tu medida'}
              </p>
              <p className="service-detail-hero-desc">
                Te ayudamos a encontrar materiales, formatos y acabados adecuados para que cada pieza destaque con la máxima calidad.
              </p>
            </div>
          </div>
        </div>

        {/* Carousel Dots Indicator */}
        <div className="materials-carousel-dots" role="tablist" aria-label="Selector de diapositivas">
          {scrollSnaps.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`materials-carousel-dot ${idx === selectedIndex ? 'is-active' : ''}`}
              onClick={() => scrollTo(idx)}
              aria-label={`Ir a la diapositiva ${idx + 1}`}
              role="tab"
              aria-selected={idx === selectedIndex}
            />
          ))}
        </div>
      </header>

      {/* Main Pillars Showcase Section */}
      <section className="materials-content-section">
        <div className="container">
          <PillarsShowcase />
        </div>
      </section>
    </div>
  );
}
