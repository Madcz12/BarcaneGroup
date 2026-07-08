import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import WhatsAppIcon from '../icons/WhatsAppIcon';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const solutions = [
    {
      id: 'gastronomy',
      title: 'Empaques Gastronomía',
      desc: 'Cajas, papel manteca y empaques para alimentos',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2v20M18 2v20M6 12h12"></path>
          <circle cx="12" cy="7" r="3"></circle>
        </svg>
      )
    },
    {
      id: 'bags',
      title: 'Bolsas Ejecutivas',
      desc: 'Bolsas de papel de alta gama personalizadas',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
      )
    },
    {
      id: 'merchandising',
      title: 'Merchandising Corporativo',
      desc: 'Artículos promocionales y regalos corporativos',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="9" y1="3" x2="9" y2="21"></line>
          <line x1="15" y1="3" x2="15" y2="21"></line>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="3" y1="15" x2="21" y2="15"></line>
        </svg>
      )
    },
    {
      id: 'editorial',
      title: 'Impresión y Editorial',
      desc: 'Catálogos, agendas, libros y material corporativo',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </svg>
      )
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setDropdownOpen(false);
    }
  };

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img 
            src="/images/BarcaneGroupLogo-bgless.png" 
            alt="Logo BarcaneGroup" 
            className="logo-img" 
          />
          <div className="logo-text">
            <div className="logo-brand">
              Barcane<span>Group</span>
            </div>
            <div className="logo-slogan">GESTIONAMOS TUS PROYECTOS</div>
          </div>
        </Link>

        {/* Hamburger Toggle */}
        <button 
          className={`navbar-toggle ${isOpen ? 'active' : ''}`} 
          onClick={toggleMenu} 
          aria-label="Abrir menú de navegación"
          aria-expanded={isOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Navigation Links */}
        <nav className={`navbar-nav ${isOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link active" onClick={() => { setIsOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Inicio</Link>
            </li>
            <li className="nav-item">
              <a href="#que-hacemos" className="nav-link" onClick={() => setIsOpen(false)}>Nosotros</a>
            </li>
            <li className={`nav-item dropdown ${dropdownOpen ? 'dropdown-open' : ''}`}>
              <button 
                className="nav-link dropdown-toggle-btn"
                onClick={(e) => {
                  e.preventDefault();
                  setDropdownOpen(!dropdownOpen);
                }}
                aria-expanded={dropdownOpen}
              >
                Soluciones
                <svg className="dropdown-arrow" viewBox="0 0 24 24" width="16" height="16">
                  <path fill="currentColor" d="M7 10l5 5 5-5H7z"/>
                </svg>
              </button>
              <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                {solutions.map((solution) => (
                  <li key={solution.id}>
                    <a 
                      href={`#${solution.id}`} 
                      onClick={() => {
                        setIsOpen(false);
                        setDropdownOpen(false);
                      }}
                      className="dropdown-item-link"
                    >
                      <span className="dropdown-item-icon">{solution.icon}</span>
                      <div className="dropdown-item-text">
                        <span className="dropdown-item-title">{solution.title}</span>
                      <span className="dropdown-item-desc">{solution.desc}</span>
                    </div>
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li className="nav-item">
              <a href="#industrias-y-proceso" className="nav-link" onClick={() => setIsOpen(false)}>Industrias</a>
            </li>
            <li className="nav-item">
              <Link to="/productos" className="nav-link" onClick={() => setIsOpen(false)}>Productos</Link>
            </li>
            <li className="nav-item">
              <a href="#contacto" className="nav-link" onClick={() => setIsOpen(false)}>Contacto</a>
            </li>
          </ul>
          
          <div className="navbar-cta-mobile">
            <a 
              href="https://wa.me/51943703905?text=Hola%20BarcaneGroup,%20quisiera%20solicitar%20una%20cotizaci%C3%B3n" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-pink" 
              onClick={() => setIsOpen(false)}
            >
              <WhatsAppIcon size={18} />
              Solicitar cotización
            </a>
          </div>
        </nav>

        {/* Desktop CTA */}
        <div className="navbar-cta-desktop">
          <a 
            href="https://wa.me/51943703905?text=Hola%20BarcaneGroup,%20quisiera%20solicitar%20una%20cotizaci%C3%B3n" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-pink"
          >
            <WhatsAppIcon size={18} />
            Solicitar cotización
          </a>
        </div>
      </div>
    </header>
  );
}
