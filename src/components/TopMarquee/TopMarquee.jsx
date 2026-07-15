import React from 'react';
import './TopMarquee.css';

const badges = [
  { icon: 'truck', text: 'Envíos a todo el Perú' },
  { icon: 'factory', text: 'Fabricación propia' },
  { icon: 'catalog', text: 'Catálogo personalizado' },
  { icon: 'quality', text: 'Calidad garantizada' },
  { icon: 'time', text: 'Entregas puntuales' },
  { icon: 'support', text: 'Asesoría dedicada' },
];

const iconSVGs = {
  truck: (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13"></rect>
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
      <circle cx="5.5" cy="18.5" r="2.5"></circle>
      <circle cx="18.5" cy="18.5" r="2.5"></circle>
    </svg>
  ),
  factory: (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 20h20V8l-6 4V8l-6 4V4H2v16z"></path>
      <path d="M17 20v-4"></path>
      <path d="M13 20v-4"></path>
      <path d="M9 20v-4"></path>
    </svg>
  ),
  catalog: (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
      <line x1="9" y1="7" x2="16" y2="7"></line>
      <line x1="9" y1="11" x2="14" y2="11"></line>
    </svg>
  ),
  quality: (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      <polyline points="9 12 11 14 15 10"></polyline>
    </svg>
  ),
  time: (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  ),
  support: (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      <line x1="9" y1="10" x2="15" y2="10"></line>
      <line x1="12" y1="7" x2="12" y2="13"></line>
    </svg>
  ),
};

export default function TopMarquee() {
  const allBadges = [...badges, ...badges];

  return (
    <div className="top-marquee" aria-label="Información destacada">
      <div className="top-marquee-track">
        {allBadges.map((badge, index) => (
          <div className="top-marquee-badge" key={`${badge.icon}-${index}`}>
            <span className="top-marquee-icon">{iconSVGs[badge.icon]}</span>
            <span className="top-marquee-text">{badge.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
