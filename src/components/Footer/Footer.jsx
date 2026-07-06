import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container footer-grid">
        
        {/* Logo and About Column */}
        <div className="footer-col-brand">
          <a href="#inicio" className="footer-logo">
            <img 
              src="/images/BarcaneGroupLogo-bgless.png" 
              alt="Logo BarcaneGroup" 
              className="logo-img-footer" 
            />
            <span className='footer-col-brand-title'>BarcaneGroup</span>
          </a>
          <p className="footer-brand-desc">
            Fabricación e impresión de empaques corporativos, editorial y merchandising de alta gama para empresas en todo el Perú.
          </p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>

        {/* Links Column */}
        <div className="footer-col">
          <h3 className="footer-title">Enlaces</h3>
          <ul className="footer-links">
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="#que-hacemos">Soluciones</a></li>
            <li><a href="#industrias">Industrias</a></li>
            <li><Link to="/productos">Productos</Link></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>

        {/* Products Column */}
        <div className="footer-col">
          <h3 className="footer-title">Productos</h3>
          <ul className="footer-links">
            <li><a href="#que-hacemos">Empaques para Gastronomía</a></li>
            <li><a href="#que-hacemos">Bolsas Ejecutivas</a></li>
            <li><a href="#que-hacemos">Merchandising Corporativo</a></li>
            <li><a href="#que-hacemos">Impresión y Editorial</a></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="footer-col">
          <h3 className="footer-title">Contáctanos</h3>
          <ul className="footer-contact-info">
            <li>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>943 703 905</span>
            </li>
            <li>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>ventas@barcanegroup.com</span>
            </li>
            <li>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>Lima, Perú</span>
            </li>
          </ul>

          {/* Newsletter inside contact column / next column */}
          <div className="footer-newsletter">
            <h4 className="newsletter-title">Boletín</h4>
            <p className="newsletter-desc">Recibe nuestras novedades y promociones.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className="newsletter-input" 
                required 
              />
              <button type="submit" className="newsletter-btn" aria-label="Suscribirse">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </form>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p>© 2026 Barcane Group. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
