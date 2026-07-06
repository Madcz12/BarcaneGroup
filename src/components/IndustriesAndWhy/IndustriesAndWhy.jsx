import React from 'react';
import './IndustriesAndWhy.css';

export default function IndustriesAndWhy() {
  const industries = [
    {
      name: 'Restaurantes',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 20h18" />
          <path d="M5 20a7 7 0 0 1 14 0" />
          <path d="M12 5V3m0 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
      )
    },
    {
      name: 'Hamburgueserías',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 11c0-3.3 2.7-6 6-6h6c3.3 0 6 2.7 6 6H3z" />
          <path d="M2 14c.5 0 1-.5 1.5-1s1-.5 1.5 0 1 .5 1.5 0 1-.5 1.5-1 1-.5 1.5 0 1 .5 1.5 0 1-.5 1.5-1 1-.5 1.5 0c.5.5 1 .5 1.5 0" />
          <rect x="3" y="15" width="18" height="2" rx="1" />
          <path d="M4 19c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-2H4v2z" />
        </svg>
      )
    },
    {
      name: 'Cafeterías',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
          <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z" />
          <line x1="6" y1="2" x2="6" y2="5" />
          <line x1="10" y1="2" x2="10" y2="5" />
          <line x1="14" y1="2" x2="14" y2="5" />
        </svg>
      )
    },
    {
      name: 'Panaderías',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 13c0-3 2-5 5-5h8c3 0 5 2 5 5 0 2-1 4-3 5H6c-2-1-3-3-3-5z" />
          <line x1="7" y1="10" x2="9" y2="15" />
          <line x1="11" y1="9" x2="13" y2="16" />
          <line x1="15" y1="10" x2="17" y2="15" />
        </svg>
      )
    },
    {
      name: 'Pastelerías',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 20h14" />
          <path d="M12 20v-3" />
          <path d="M4 17h16" />
          <rect x="6" y="10" width="12" height="7" rx="1" />
          <path d="M12 7c.8 0 1.5.5 1.5 1.2a1.5 1.5 0 1 1-3 0c0-.7.7-1.2 1.5-1.2z" />
          <line x1="12" y1="10" x2="12" y2="8.5" />
        </svg>
      )
    },
    {
      name: 'Dark kitchens',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <path d="M8 15h8" />
          <path d="M9 15a3 3 0 0 1 6 0" />
        </svg>
      )
    },
    {
      name: 'Food trucks',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 18H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6" />
          <path d="M18 10h4l2 3v3h-4" />
          <circle cx="7.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
          <rect x="8" y="9" width="6" height="4" rx="0.5" />
        </svg>
      )
    },
    {
      name: 'Catering y eventos',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 12h12v4a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-4z" />
          <path d="M3 12h18" />
          <path d="M12 12V8a4 4 0 0 0-4-4" />
          <path d="M12 8a4 4 0 0 1 4-4" />
          <circle cx="12" cy="3" r="1" />
          <path d="M3 15v-3M21 15v-3" />
        </svg>
      )
    }
  ];

  const reasons = [
    {
      title: 'Mejor presentación del producto',
      desc: 'Una presentación cuidada genera más confianza y valor percibido.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 3h12l4 6-10 12L2 9z" />
          <path d="M11 3 8 9l4 12 4-12-3-6" />
          <path d="M2 9h20" />
        </svg>
      )
    },
    {
      title: 'Adaptado a tu negocio',
      desc: 'Tamaños, diseños y materiales hechos a tu medida.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19.439 12.015A2.996 2.996 0 0 0 19 10.5V5a2 2 0 0 0-2-2h-5.5a3 3 0 1 0-5 0H5a2 2 0 0 0-2 2v5.5a3 3 0 1 0 0 5V19a2 2 0 0 0 2 2h5.5c.34-.606.985-1 1.718-1h1.564c.733 0 1.378.394 1.718 1H17a2 2 0 0 0 2-2v-5.5a2.996 2.996 0 0 0 .439-1.485z" />
        </svg>
      )
    },
    {
      title: 'Mayor recordación de marca',
      desc: 'Tu logo y diseño permanecen en la mente de tus clientes.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
          <line x1="7" y1="7" x2="7.01" y2="7" />
        </svg>
      )
    },
    {
      title: 'Ideal para delivery y take away',
      desc: 'Empaques resistentes, seguros y prácticos para transporte.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="6" cy="18" r="2" />
          <circle cx="18" cy="18" r="2" />
          <path d="M10 18.5h6" />
          <path d="M5.5 16.5l2-4h9.5" />
          <path d="M12 12.5V8h4l1.5 2h2" />
          <rect x="5" y="6" width="6" height="6" rx="1" />
        </svg>
      )
    },
    {
      title: 'Experiencia más cuidada para el cliente',
      desc: 'Cada detalle cuenta y mejora la percepción de tu negocio.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <line x1="9" y1="9" x2="9.01" y2="9" />
          <line x1="15" y1="9" x2="15.01" y2="9" />
        </svg>
      )
    },
    {
      title: 'Opciones para diferentes presupuestos',
      desc: 'Tenemos alternativas que se ajustan a tus necesidades.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v12M15 9H10.5a2.5 2.5 0 0 0 0 5H13.5a2.5 2.5 0 0 1 0 5H9" />
        </svg>
      )
    }
  ];

  const materials = [
    {
      name: 'Papel manteca antigrasa',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 18h11a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2z" />
          <path d="M8 21h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2" opacity="0.5" />
        </svg>
      )
    },
    {
      name: 'Papel kraft',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4H6z" />
          <path d="M3 6h18" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
      )
    },
    {
      name: 'Cartulina',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 17h14v-9l-5-5h-9v14z" />
          <path d="M14 3v5h5" />
          <path d="M9 20h11v-12" opacity="0.5" />
        </svg>
      )
    },
    {
      name: 'Papel blanco',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
        </svg>
      )
    },
    {
      name: 'Adhesivos',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a10 10 0 0 0-10 10c0 5.5 4.5 10 10 10a10 10 0 0 0 10-10" />
          <path d="M22 12h-6a4 4 0 0 1-4-4V2" />
          <path d="M22 12a10 10 0 0 0-10-10" opacity="0.3" />
        </svg>
      )
    },
    {
      name: 'Cartón para cajas',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      )
    },
    {
      name: 'Impresión a una tinta',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="3" width="12" height="6" rx="1" />
          <path d="M16 6h2v6a2 2 0 0 1-2 2H9v5" />
          <rect x="8" y="19" width="2" height="3" rx="0.5" />
        </svg>
      )
    },
    {
      name: 'Impresión full color',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="9" r="5" />
          <circle cx="8" cy="15" r="5" opacity="0.7" />
          <circle cx="16" cy="15" r="5" opacity="0.7" />
        </svg>
      )
    },
    {
      name: 'Acabados mate o brillantes',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3c.134 2.68 1.32 3.866 4 4-2.68.134-3.866 1.32-4 4-.134-2.68-1.32-3.866-4-4 2.68-.134 3.866-1.32 4-4zM19 13c.067 1.34.66 1.933 2 2-1.34.067-1.933.66-2 2-.067-1.34-.66-1.933-2-2 1.34-.067 1.933-.66 2-2zM6 15c.067 1.34.66 1.933 2 2-1.34.067-1.933.66-2 2-.067-1.34-.66-1.933-2-2 1.34-.067 1.933-.66 2-2z" />
        </svg>
      )
    }
  ];

  const steps = [
    {
      number: '1',
      title: 'Nos cuentas qué necesitas',
      desc: 'Cuéntanos el tipo de producto, cantidad y fecha de entrega.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <circle cx="8" cy="10" r="1" fill="currentColor" />
          <circle cx="12" cy="10" r="1" fill="currentColor" />
          <circle cx="16" cy="10" r="1" fill="currentColor" />
        </svg>
      )
    },
    {
      number: '2',
      title: 'Preparamos una propuesta',
      desc: 'Te enviamos una propuesta de diseño y cotización.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
      )
    },
    {
      number: '3',
      title: 'Personalizamos tu empaque',
      desc: 'Aprobamos el diseño y producimos a tu medida.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="21 8 21 21 3 21 3 8" />
          <rect x="1" y="3" width="22" height="5" rx="1" />
          <line x1="10" y1="12" x2="14" y2="12" />
        </svg>
      )
    },
    {
      number: '4',
      title: 'Fabricamos y entregamos',
      desc: 'Producimos con calidad y entregamos a tiempo.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13" rx="2" />
          <polygon points="16 8 20 8 23 11 23 16 16 16" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      )
    }
  ];

  return (
    <section id="industrias-y-proceso" className="industries-why-section section-padding">
      <div className="container">
        
        {/* Row 1: Ideal para negocios como */}
        <div className="target-businesses-block">
          <h2 className="block-title">Ideal para negocios como:</h2>
          <div className="title-underline"></div>
          
          <div className="industries-horizontal-grid">
            {industries.map((ind, idx) => (
              <div className="industry-horizontal-item" key={idx}>
                <div className="industry-icon-wrapper">
                  {ind.icon}
                </div>
                <span className="industry-name">{ind.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Columns split for Why & Materials */}
        <div className="why-materials-split-row">
          
          {/* Column A: Why customize? */}
          <div className="why-customize-col">
            <h2 className="block-title">¿Por qué personalizar tus empaques?</h2>
            <div className="title-underline"></div>
            
            <div className="reasons-list">
              {reasons.map((item, idx) => (
                <div className="reason-card-item" key={idx}>
                  <div className="reason-icon-circle">
                    {item.icon}
                  </div>
                  <div className="reason-content">
                    <h3 className="reason-item-title">{item.title}</h3>
                    <p className="reason-item-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column B: Materials & Finishes */}
          <div className="materials-finishes-col">
            <h2 className="block-title">Materiales y acabados</h2>
            <div className="title-underline"></div>

            <div className="materials-grid">
              {materials.map((mat, idx) => (
                <div className="material-card-item" key={idx}>
                  <div className="material-icon-wrapper">
                    {mat.icon}
                  </div>
                  <span className="material-card-name">{mat.name}</span>
                </div>
              ))}
            </div>

            <div className="materials-advisor-banner">
              <div className="advisor-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
              </div>
              <p className="advisor-text">
                Te asesoramos para elegir el material adecuado según el tipo de alimento, presentación y uso del empaque.
              </p>
            </div>
          </div>

        </div>

        {/* Row 3: How we work (Process) */}
        <div className="process-block">
          <h2 className="block-title">¿Cómo trabajamos tu empaque?</h2>
          <div className="title-underline"></div>

          <div className="process-flow-container">
            {steps.map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="process-step-item">
                  <div className="step-circle-icon-group">
                    <div className="step-main-icon-circle">
                      {step.icon}
                    </div>
                    <div className="step-number-circle">
                      {step.number}
                    </div>
                  </div>
                  <div className="step-info-block">
                    <h3 className="step-item-title">{step.title}</h3>
                    <p className="step-item-desc">{step.desc}</p>
                  </div>
                </div>
                {idx < steps.length - 1 && (
                  <div className="process-connector-arrow">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" strokeDasharray="4 4" />
                      <path d="M13 6l6 6-6 6" />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
