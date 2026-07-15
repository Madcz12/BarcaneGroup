import { useEffect, useState } from 'react';
import { m } from 'framer-motion';
import { steps } from '../../data/industriesAndWhy';
import iconMap from './icons';
import './ProcessTimeline.css';

function useMediaQuery(query) {
  const [matches, setMatches] = useState(
    () => (typeof window !== 'undefined' ? window.matchMedia(query).matches : false),
  );
  useEffect(() => {
    const mq = window.matchMedia(query);
    const handler = (e) => setMatches(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [query]);
  return matches;
}

export default function ProcessTimeline({ reducedMotion = false }) {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  const containerVariants = reducedMotion
    ? {}
    : {
        hidden: {},
        visible: { transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
      };

  const stepVariants = reducedMotion
    ? {}
    : {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
      };

  const animateProps = reducedMotion
    ? {}
    : { initial: 'hidden', whileInView: 'visible' };

  return (
    <div className={`iw-timeline ${isDesktop ? 'iw-timeline--desktop' : 'iw-timeline--mobile'}`}>
      <m.ol
        className="iw-timeline__list"
        aria-label="Proceso de trabajo"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        {...animateProps}
      >
        {steps.map((step, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <m.li
              key={idx}
              className={`iw-timeline__step ${isLeft ? 'iw-timeline__step--left' : 'iw-timeline__step--right'}`}
              variants={stepVariants}
            >
              <div className="iw-timeline__step-card">
                <div className="iw-timeline__step-header">
                  <div className="iw-timeline__step-icon">
                    {iconMap[step.iconKey]}
                  </div>
                  <span className="iw-timeline__step-number">{step.number}</span>
                </div>
                <div className="iw-timeline__step-content">
                  <h3 className="iw-timeline__step-title">{step.title}</h3>
                  <p className="iw-timeline__step-desc">{step.desc}</p>
                </div>
              </div>
            </m.li>
          );
        })}
      </m.ol>
    </div>
  );
}
