import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

export default function Services() {
  const servicesList = [
    {
      id: "impresos-corporativos",
      title: "Impresos corporativos",
      subtitle: "Tu identidad, presente en cada pieza.",
      description:
        "Papelería ejecutiva, formatos, revistas, libros y cuadernos de control.",
      image: "/images/items/bggroup_new_impress_corp_notext.webp",
      route: "/servicios/impresos-corporativos",
    },
    {
      id: "empaques-personalizados",
      title: "Empaques y etiquetas",
      subtitle: "Packaging que presenta, protege y diferencia tu marca.",
      description:
        "Cajas ecológicas, bolsas boutique, hangtags, papel membretado, etiquetas troqueladas, precintos de seguridad.",
      image: "/images/items/bggroup_new_packages_stickers_notext.webp",
      route: "/servicios/empaques-personalizados",
    },
    {
      id: "merchandising",
      title: "Merchandising y textil",
      subtitle: "Productos que mantienen tu marca siempre presente.",
      description:
        "Lapiceros, resaltadores, lanyards, fotochecks, mugs, tomadotodos, polos, gorros, bolsas de tela.",
      image: "/images/items/bggroup_merch_cloth_notextv2.jpg",
      route: "/servicios/merchandising-y-textil",
    },
    {
      id: "material-publicitario",
      title: "Publicidad y equipamiento",
      subtitle: "Hazte visible donde realmente importa.",
      description:
        "Banner, viniles rollscreen, backing, pavonados, plumas, totem, ruleta.",
      image: "/images/items/bggroup_new_brand_equipment_notext.webp",
    },
  ];

  const renderCard = (item) => {
    const isClickable = Boolean(item.route);

    return (
      <div className="service-card-wrapper" key={item.id}>
        <div className="service-card-header">
          {isClickable ? (
            <Link to={item.route} className="service-card-header-link">
              <h3 className="service-card-header-title">{item.title}</h3>
            </Link>
          ) : (
            <h3 className="service-card-header-title">{item.title}</h3>
          )}
        </div>
        {isClickable ? (
          <Link to={item.route} className="service-card service-card-link" id={item.id}>
            <div className="service-card-image-wrap">
              <img 
                src={item.image} 
                alt={item.title} 
                className="service-card-image"
                loading="lazy"
              />
            </div>
          </Link>
        ) : (
          <article className="service-card" id={item.id}>
            <div className="service-card-image-wrap">
              <img 
                src={item.image} 
                alt={item.title} 
                className="service-card-image"
                loading="lazy"
              />
            </div>
          </article>
        )}
        <div className="service-card-footer">
          <p className="service-card-header-subtitle">{item.subtitle}</p>
        </div>
      </div>
    );
  };

  return (
    <section id="que-hacemos" className="services-section section-padding">
      <div className="container services-container">
        <div className="services-group">
          <div className="services-header">
            <h2 className="services-title">¿Qué ofrecemos?</h2>
            <div className="title-underline"></div>
          </div>
          <div className="services-grid services-grid-4">
            {servicesList.map(renderCard)}
          </div>
        </div>
      </div>
    </section>
  );
}
