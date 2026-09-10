import React, { useState } from 'react';
import './PillarsShowcase.css';

// SVG Icons matching the brand aesthetics
const CompassIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="currentColor" fillOpacity="0.2" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const LayersIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

// SpotlightCard Component with Mouse-Tracking Glow
export const SpotlightCard = ({
  children,
  className = '',
  spotlightColor = 'rgba(233, 30, 99, 0.12)',
  borderColor = 'rgba(233, 30, 99, 0.35)',
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`spotlight-card ${className}`}
    >
      {/* Dynamic Cursor Spotlight Effect */}
      <div
        className="spotlight-card__glow"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(550px circle at ${mousePosition.x}px ${mousePosition.y}px, ${spotlightColor}, transparent 55%)`,
        }}
      />

      {/* Subtle Luminous Border */}
      <div
        className="spotlight-card__border"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(350px circle at ${mousePosition.x}px ${mousePosition.y}px, ${borderColor}, transparent 50%)`,
        }}
      />

      <div className="spotlight-card__inner">{children}</div>
    </div>
  );
};

export const PillarsShowcase = () => {
  return (
    <div className="pillars-showcase-section">
      <h1 className="pillars-main-heading">Nuestros Procesos</h1>
      <div className="pillars-grid">
        {/* Card 1: Pensamos contigo (7 columnas) */}
        <SpotlightCard
          className="pillar-col-7"
          spotlightColor="rgba(245, 158, 11, 0.14)"
          borderColor="rgba(245, 158, 11, 0.4)"
        >
          <div className="pillar-card-content">
            <div className="pillar-icon-box pillar-icon-box--amber">
              <CompassIcon />
            </div>
            <h3 className="pillar-title">Pensamos contigo</h3>
            <p className="pillar-desc">
              No todo proyecto empieza con un archivo listo para imprimir. Te ayudamos a encontrar materiales, formatos y acabados adecuados para que tu propuesta destaque con máxima eficiencia.
            </p>
          </div>
        </SpotlightCard>

        {/* Card 2: Producimos con criterio (5 columnas) */}
        <SpotlightCard
          className="pillar-col-5"
          spotlightColor="rgba(16, 185, 129, 0.14)"
          borderColor="rgba(16, 185, 129, 0.4)"
        >
          <div className="pillar-card-content">
            <div className="pillar-icon-box pillar-icon-box--emerald">
              <ShieldCheckIcon />
            </div>
            <h3 className="pillar-title">Producimos con criterio</h3>
            <p className="pillar-desc">
              Elegimos cada alternativa considerando uso, presentación, presupuesto y resultado final con los más altos estándares.
            </p>
          </div>
        </SpotlightCard>

        {/* Card 3: Resolvemos en un solo lugar (Ancho completo - 12 columnas) */}
        <SpotlightCard
          className="pillar-col-12"
          spotlightColor="rgba(233, 30, 99, 0.12)"
          borderColor="rgba(233, 30, 99, 0.35)"
        >
          <div className="pillar-card-content pillar-card-content--full">
            <div className="pillar-icon-box pillar-icon-box--pink">
              <LayersIcon />
            </div>
            <div className="pillar-card-text-group">
              <h3 className="pillar-title">Resolvemos en un solo lugar</h3>
              <p className="pillar-desc">
                Desde impresos y packaging hasta merchandising, textiles y elementos para tus espacios comerciales y corporativos.
              </p>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
};

export default PillarsShowcase;
