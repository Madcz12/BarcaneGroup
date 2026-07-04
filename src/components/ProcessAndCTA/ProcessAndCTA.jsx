import React from 'react';
import WhatsAppIcon from '../icons/WhatsAppIcon';
import './ProcessAndCTA.css';

export default function ProcessAndCTA() {
  const steps = [
    {
      num: '1',
      title: 'Cuéntanos tu idea',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      )
    },
    {
      num: '2',
      title: 'Diseñamos la propuesta',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
        </svg>
      )
    },
    {
      num: '3',
      title: 'Fabricamos con calidad',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      )
    },
    {
      num: '4',
      title: 'Entregamos en todo el Perú',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="1" y="3" width="15" height="13"></rect>
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
          <circle cx="5.5" cy="18.5" r="2.5"></circle>
          <circle cx="18.5" cy="18.5" r="2.5"></circle>
        </svg>
      )
    }
  ];

  return (
    <section className="process-cta-section section-padding">
      <div className="container process-cta-grid">
        
        {/* Left Side: Proceso */}
        <div className="process-side">
          <h2 className="process-title">Nuestro proceso</h2>
          <div className="title-underline"></div>
          
          <div className="process-steps">
            {steps.map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="step-card">
                  <div className="step-number-badge">{step.num}</div>
                  <div className="step-icon-wrapper">{step.icon}</div>
                  <h3 className="step-card-title">{step.title}</h3>
                </div>
                {idx < 3 && (
                  <div className="step-arrow">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Right Side: CTA Banner */}
        <div id="contacto" className="cta-banner-side">
          <div className="cta-card">
            <div className="cta-card-content">
              <h2 className="cta-heading">¿Tienes un proyecto en mente?</h2>
              <p className="cta-desc">Estamos listos para ayudarte a hacerlo realidad.</p>
              
              <a 
                href="https://wa.me/51943703905?text=Hola%20BarcaneGroup,%20quisiera%20solicitar%20una%20cotizaci%C3%B3n" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-pink btn-cta-whatsapp"
              >
                <WhatsAppIcon size={20} />
                Solicitar cotización por WhatsApp
              </a>
              
              <div className="cta-email">
                o escríbenos a <a href="mailto:ventas@barcanegroup.com">ventas@barcanegroup.com</a>
              </div>
            </div>

            <div className="cta-card-image-wrapper">
              <img 
                src="/images/items/BarcaneGroup_worker.webp" 
                alt="Agente de servicio BarcaneGroup" 
                className="cta-agent-img"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
