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
  const heroMaterials = materials.filter((mat) => mat.badge);
  const compactMaterials = materials.filter((mat) => !mat.badge);

  const cardVariants = reducedMotion
    ? {}
    : {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
      };

  const animateProps = reducedMotion
    ? {}
    : { initial: 'hidden', whileInView: 'visible' };

  return (
    <div className="iw-materials">
      <div className="iw-materials__grid-wrapper">
        
        {/* ---- Left: Hero cards (badged materials) ---- */}
        <div className="iw-materials__hero">
          {heroMaterials.map((mat, idx) => (
            <m.div
              key={idx}
              className="iw-material-card iw-material-card--hero"
              viewport={{ once: true, amount: 0.15 }}
              variants={cardVariants}
              {...animateProps}
            >
              {mat.badge && (
                <span className="iw-material-card__badge">{mat.badge}</span>
              )}
              <div className="iw-material-card__icon">{iconMap[mat.iconKey]}</div>
              <span className="iw-material-card__name">{mat.name}</span>
            </m.div>
          ))}
        </div>

        {/* ---- Right: Compact grid (non-badged materials) ---- */}
        <div className="iw-materials__compact">
          {compactMaterials.map((mat, idx) => (
            <m.div
              key={idx}
              className="iw-material-card iw-material-card--compact"
              viewport={{ once: true, amount: 0.15 }}
              variants={cardVariants}
              {...animateProps}
            >
              <div className="iw-material-card__icon">{iconMap[mat.iconKey]}</div>
              <span className="iw-material-card__name">{mat.name}</span>
            </m.div>
          ))}
        </div>

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