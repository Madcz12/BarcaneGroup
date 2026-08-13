import React from 'react';
import WhatsAppIcon from '../icons/WhatsAppIcon';
import './ProcessAndCTA.css';

export default function ProcessAndCTA() {
  return (
    <section id="contacto" className="process-cta-section">
      {/* Background image layer — same pattern as Hero */}
      <div className="process-bg-layer">
        <div
          className="process-bg-image"
          style={{ backgroundImage: "url('/images/barcanegroup_processctaimg.webp')" }}
        />
        <div className="process-bg-overlay" />
      </div>

      {/* Foreground content */}
      <div className="container process-cta-grid process-cta-content">
        {/* Process Flow / Text Content */}
        <div className="process-side">
          <h2 className="process-main-heading">
            ¿Buscas una solución gráfica <br />
            <span className="text-highlight">hecha a tu medida?</span>
          </h2>

          <p className="process-main-desc">
            Cuéntanos qué necesitas y te ayudamos a encontrar la mejor
            alternativa para tu proyecto.
          </p>

          {/* Inline Action Elements: WhatsApp & Email Contact */}
          <div className="process-actions">
            <a
              href="https://wa.me/51943703905?text=Hola%20BarcaneGroup,%20quisiera%20solicitar%20una%20cotizaci%C3%B3n"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-pink btn-process-whatsapp"
            >
              <WhatsAppIcon size={20} />
              Solicitar cotización por WhatsApp
            </a>
          </div>
          <br />
          <div className="process-email">
            o escríbenos a{" "}
            <a href="mailto:ventas@barcanegroup.com">ventas@barcanegroup.com</a>
          </div>
        </div>
      </div>
    </section>
  );
}
