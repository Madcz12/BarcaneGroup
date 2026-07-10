import React from 'react';
import './Nosotros.css';

export default function Nosotros() {
  const stats = [
    { value: 'Fabricación', label: 'propia sin intermediarios' },
    { value: 'Personalización', label: 'total a tu medida' },
    { value: 'Cobertura', label: 'nacional en todo el Perú' },
    { value: 'Asesoría', label: 'especializada por proyecto' },
  ];

  return (
    <section id="nosotros" className="nosotros-section">
      <div className="container">
        <div className="nosotros-grid">
          {/* Text column */}
          <div className="nosotros-content">
            <h2 className="nosotros-title">
              Fabricantes directos de{' '}
              <span className="text-highlight">empaques personalizados</span>
            </h2>
            <p className="nosotros-desc">
              En <strong>BarcaneGroup</strong> no somos intermediarios. Diseñamos,
              fabricamos y distribuimos empaques corporativos, merchandising y
              material editorial directamente para tu empresa, sin sobrecostos
              ni demoras innecesarias.
            </p>
            <p className="nosotros-desc">
              Trabajamos con restaurantes, cafeterías, dark kitchens, empresas
              retail e instituciones en todo el Perú, entregando productos que
              refuerzan la identidad de tu marca con calidad y puntualidad.
            </p>
          </div>

          {/* Stats column */}
          <div className="nosotros-stats">
            {stats.map((stat, idx) => (
              <div className="nosotros-stat-item" key={idx}>
                <span className="nosotros-stat-value">{stat.value}</span>
                <span className="nosotros-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
