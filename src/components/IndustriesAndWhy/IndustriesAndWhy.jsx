import React from 'react';
import './IndustriesAndWhy.css';

export default function IndustriesAndWhy() {
  const industries = [
    {
      name: 'Restaurantes',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      )
    },
    {
      name: 'Cafeterías',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
          <line x1="6" y1="1" x2="6" y2="4"></line>
          <line x1="10" y1="1" x2="10" y2="4"></line>
          <line x1="14" y1="1" x2="14" y2="4"></line>
        </svg>
      )
    },
    {
      name: 'Panaderías',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M2 12a10 10 0 0 1 20 0z"></path>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M6 12c0-3.3 2.7-6 6-6s6 2.7 6 6"></path>
        </svg>
      )
    },
    {
      name: 'Empresas',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      )
    },
    {
      name: 'Instituciones Públicas',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 22V4c0-.5.2-1 .6-1.4C5 2.2 5.5 2 6 2h12c.5 0 1 .2 1.4.6.4.4.6.9.6 1.4v18"></path>
          <line x1="2" y1="22" x2="22" y2="22"></line>
          <line x1="12" y1="6" x2="12" y2="18"></line>
          <line x1="8" y1="10" x2="16" y2="10"></line>
        </svg>
      )
    },
    {
      name: 'Universidades',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
        </svg>
      )
    },
    {
      name: 'Hoteles',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      )
    },
    {
      name: 'Eventos',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      )
    }
  ];

  const features = [
    {
      title: 'Fabricación propia',
      desc: 'Controlamos la calidad en cada etapa del proceso.',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 10v6M2 10v6M12 2v20M2 10h20M2 16h20"></path>
          <rect x="6" y="6" width="12" height="12" rx="2"></rect>
        </svg>
      )
    },
    {
      title: 'Calidad garantizada',
      desc: 'Materiales de primera y acabados profesionales.',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      )
    },
    {
      title: 'Personalización',
      desc: 'Adaptamos cada producto a la identidad de tu marca.',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
          <path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
        </svg>
      )
    },
    {
      title: 'Entregas puntuales',
      desc: 'Cumplimos tus tiempos, siempre.',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      )
    },
    {
      title: 'Cobertura nacional',
      desc: 'Llegamos a todo el Perú con entregas seguras.',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      )
    },
    {
      title: 'Atención personalizada',
      desc: 'Te acompañamos en todo tu proyecto.',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="industrias" className="industries-why-section section-padding">
      <div className="container split-container">
        
        {/* Left Side: Industries */}
        <div className="industries-col">
          <h2 className="section-title">Industrias que atendemos</h2>
          <div className="title-underline"></div>
          
          <div className="industries-grid-inner">
            {industries.map((ind, idx) => (
              <div className="industry-item" key={idx}>
                <div className="industry-icon-wrapper">
                  {ind.icon}
                </div>
                <span className="industry-name">{ind.name}</span>
              </div>
            ))}
          </div>
          
          <div className="industries-actions">
            <a href="#contacto" className="btn-industries-outline">
              Ver todas las industrias
            </a>
          </div>
        </div>

        {/* Right Side: Why Choose Us */}
        <div className="why-col">
          <h2 className="section-title">¿Por qué elegir Barcane Group?</h2>
          <div className="title-underline"></div>

          <div className="why-grid-inner">
            {features.map((feat, idx) => (
              <div className="why-item" key={idx}>
                <div className="why-icon-wrapper">
                  {feat.icon}
                </div>
                <div className="why-info">
                  <h3 className="why-item-title">{feat.title}</h3>
                  <p className="why-item-desc">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
