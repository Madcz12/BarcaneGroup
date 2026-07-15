import { LazyMotion, domAnimation, useReducedMotion } from 'framer-motion';
import IndustriesMarquee from './IndustriesMarquee';
import BenefitsAlternating from './BenefitsAlternating';
import MaterialsHeroGrid from './MaterialsHeroGrid';
import ProcessTimeline from './ProcessTimeline';
import './IndustriesAndWhy.css';

/**
 * IndustriesAndWhy — shell component.
 *
 * Composes 4 sub-components, each owning its own data import, animation
 * logic, and CSS.  The shell provides:
 *   - <LazyMotion features={domAnimation} strict> — tree-shaken framer-motion
 *   - useReducedMotion() gate, propagated to every child
 *   - Section wrapping, headings, and globally-reusable utility classes
 */
export default function IndustriesAndWhy() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <LazyMotion features={domAnimation} strict>
      <section id="industrias-y-proceso" className="iw-section section-padding">
        <div className="container">

          {/* ---- Block 1: Industries marquee ---- */}
          <div className="iw-section__block">
            <h2 className="block-title">Ideal para negocios como:</h2>
            <div className="title-underline"></div>
            <IndustriesMarquee reducedMotion={prefersReducedMotion} />
          </div>

          {/* ---- Block 2: Why personalize (benefits) ---- */}
          <div className="iw-section__block">
            <h2 className="block-title">¿Por qué personalizar tus empaques?</h2>
            <div className="title-underline"></div>
            <BenefitsAlternating reducedMotion={prefersReducedMotion} />
          </div>

          {/* ---- Block 3: Materials & finishes ---- */}
          <div className="iw-section__block">
            <h2 className="block-title">Materiales y acabados</h2>
            <div className="title-underline"></div>
            <MaterialsHeroGrid reducedMotion={prefersReducedMotion} />
          </div>

          {/* ---- Block 4: How we work (process) ---- */}
          <div className="iw-section__block">
            <h2 className="block-title">¿Cómo trabajamos tu empaque?</h2>
            <div className="title-underline"></div>
            <ProcessTimeline reducedMotion={prefersReducedMotion} />
          </div>

        </div>
      </section>
    </LazyMotion>
  );
}