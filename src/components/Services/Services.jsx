import React from 'react';
import WhatsAppIcon from '../icons/WhatsAppIcon';
import './Services.css';

export default function Services() {
  const buildWhatsAppLink = (productName) => {
    const message = `Hola BarcaneGroup, vi su ${productName} en la web y me gustaría solicitar una cotización.`;
    return `https://wa.me/51943703905?text=${encodeURIComponent(message)}`;
  };
  const servicesList = [
    {
      id: "impresos-corporativos",
      title: "Impresos corporativos",
      description:
        "Papelería ejecutiva, formatos, revistas, libros y cuadernos de control.",
      image: "/images/items/bggroup_new_impress_corp_notext.webp",
    },
    {
      id: "empaques-personalizados",
      title: "Empaques y etiquetas",
      description:
        "Cajas ecológicas, bolsas boutique, hangtags, papel membretado, etiquetas troqueladas, precintos de seguridad.",
      image: "/images/items/bggroup_new_packages_stickers_notext.webp",
    },
    {
      id: "merchandising",
      title: "Merchandising y textil",
      description:
        "Lapiceros, resaltadores, lanyards, fotochecks, mugs, tomadotodos, polos, gorros, bolsas de tela.",
      image: "/images/items/bggroup_merch_cloth_notextv2.jpg",
    },
    {
      id: "material-publicitario",
      title: "Publicidad y equipamento",
      description:
        "Banner, viniles rollscreen, backing, pavonados, plumas, totem, ruleta.",
      image: "/images/items/bggroup_new_brand_equipment_notext.webp",
    },
  ];

  const renderCard = (item) => (
    <article className="service-card" key={item.id} id={item.id}>
      <div className="service-card-image-wrap">
        <img 
          src={item.image} 
          alt={item.title} 
          className="service-card-image"
          loading="lazy"
        />
        <div className="service-card-overlay">
          <div className="service-card-overlay-content">
            <h3 className="service-card-title">{item.title}</h3>
            <p className="service-card-desc">{item.description}</p>
            <a 
              href={buildWhatsAppLink(item.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="service-link"
            >
              <WhatsAppIcon size={14} />
              Cotizar
            </a>
          </div>
        </div>
      </div>
    </article>
  );

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
