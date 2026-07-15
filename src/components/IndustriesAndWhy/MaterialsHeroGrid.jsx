import { m } from 'framer-motion';
import { materials } from '../../data/industriesAndWhy';
import iconMap from './icons';
import './MaterialsHeroGrid.css';

/**
 * Materials grid.
 * Left: 5 badged cards in a horizontal 1-row grid.
 * Right: 4 non-badged cards in a 2x2 grid.
 * Responsive mobile layout wraps gracefully.
 */
export default function MaterialsHeroGrid({ reducedMotion = false }) {
  const cardVariants = reducedMotion
    ? {}
    : {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
      };

  const animateProps = reducedMotion
    ? {}
    : { initial: 'hidden', whileInView: 'visible' };

  return (
    <div className="iw-materials">
      {/* ---- Bento Grid containing all materials ---- */}
      <div className="iw-materials__bento-grid">
        {materials.map((mat, idx) => (
          <m.div
            key={idx}
            className="iw-material-card"
            viewport={{ once: true, amount: 0.1 }}
            variants={cardVariants}
            {...animateProps}
          >
            {/* Background Image */}
            <div className="iw-material-card__image-wrapper">
              <img 
                src={mat.image} 
                alt={mat.name} 
                className="iw-material-card__image" 
                loading="lazy" 
              />
            </div>

            {/* Badge (if applicable) */}
            {mat.badge && (
              <span className="iw-material-card__badge">{mat.badge}</span>
            )}

            {/* Bottom Content (Icon + Title) */}
            <div className="iw-material-card__bottom">
              <div className="iw-material-card__icon-wrapper">
                <div className="iw-material-card__icon">{iconMap[mat.iconKey]}</div>
              </div>
              <h3 className="iw-material-card__name">{mat.name}</h3>
            </div>
          </m.div>
        ))}
      </div>

      {/* ---- Advisor banner ---- */}
      <div className="iw-materials__advisor">
        <div className="iw-materials__advisor-icon">{iconMap.advisor}</div>
        <p className="iw-materials__advisor-text">
          Te asesoramos para elegir el material adecuado según el tipo de
          alimento, presentación y uso del empaque.
        </p>
      </div>
    </div>
  );
}