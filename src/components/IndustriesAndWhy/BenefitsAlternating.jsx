import { m } from 'framer-motion';
import { reasons } from '../../data/industriesAndWhy';
import iconMap from './icons';
import './BenefitsAlternating.css';

/**
 * Grid layout for the 6 benefits (3 columns, 2 rows on desktop).
 * Center-aligned premium cards matching the marquee carousel style.
 * responsive sizing and hover lift animations.
 */
export default function BenefitsAlternating({ reducedMotion = false }) {
  const containerVariants = reducedMotion
    ? {}
    : {
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } },
      };

  const itemVariants = reducedMotion
    ? {}
    : {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      };

  const animateProps = reducedMotion
    ? {}
    : { initial: 'hidden', whileInView: 'visible' };

  return (
    <m.div
      className="iw-benefits"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      {...animateProps}
    >
      {reasons.map((reason, idx) => (
        <m.div
          key={idx}
          className="iw-benefit"
          variants={itemVariants}
        >
          <div className="iw-benefit__visual">
            <div className="iw-benefit__icon-circle">
              {iconMap[reason.iconKey]}
            </div>
          </div>
          <div className="iw-benefit__content">
            <h3 className="iw-benefit__title">{reason.title}</h3>
            <p className="iw-benefit__desc">{reason.desc}</p>
          </div>
        </m.div>
      ))}
    </m.div>
  );
}