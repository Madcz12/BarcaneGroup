import React, { useState, useEffect } from 'react';
import WhatsAppIcon from '../icons/WhatsAppIcon';
import './FloatingWhatsApp.css';

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initial position in case page loads scrolled
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      href="https://wa.me/51943703905?text=Hola%20BarcaneGroup,%20quisiera%20solicitar%20una%20cotizaci%C3%B3n"
      target="_blank"
      rel="noopener noreferrer"
      className={`floating-whatsapp${visible ? ' floating-whatsapp--visible' : ''}`}
      aria-label="Contactar por WhatsApp"
      title="Chatea con nosotros por WhatsApp"
    >
      <WhatsAppIcon size={26} />
      <span className="floating-whatsapp__label">Cotizar ahora</span>
    </a>
  );
}
