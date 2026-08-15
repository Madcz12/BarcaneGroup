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
      <div id="industrias-y-proceso" className="iw-wrapper">
        {/* ---- Block 1: Industries marquee ---- */}
        <section className="iw-section section-padding">
          <div className="container">
            <div className="iw-section__block">
              <h2 className="block-title">
                Soluciones gráficas para multiples industrias
              </h2>
              <IndustriesMarquee reducedMotion={prefersReducedMotion} />
            </div>
          </div>
        </section>

        {/* ---- Block 2: Why personalize (benefits) — Dark Navy ---- */}
        <section className="iw-section iw-section--why-dark section-padding">
          <div className="container">
            <div className="iw-section__block">
              <h2 className="block-title">
                ¿Por qué elegir soluciones personalizadas para tu negocio?
              </h2>
              <p className="block-subtitle">
                En Barcane Group desarrollamos materiales y soluciones que ayudan
                a tu marca a comunicar mejor, diferenciarse y generar una
                experiencia más profesional para tus clientes.
              </p>
              <BenefitsAlternating reducedMotion={prefersReducedMotion} />
            </div>
          </div>
        </section>

        {/* ---- Block 3 & 4: Materials & Process ---- */}
        <section className="iw-section section-padding">
          <div className="container">
            {/* ---- Block 3: Materials & finishes ---- */}
            <div className="iw-section__block">
              <h2 className="block-title">
                Calidad que se siente en cada detalle
              </h2>
              <p className="block-subtitle">
                Trabajamos con diferentes materiales, formatos y acabados para desarrollar soluciones adaptadas a las necesidades de cada proyecto.
              </p>
              <MaterialsHeroGrid reducedMotion={prefersReducedMotion} />
            </div>

            {/* ---- Block 4: How we work (process) ---- */}
            <div className="iw-section__block" style={{ marginTop: '50px' }}>
              <h2 className="block-title">¿Cómo hacemos realidad tu proyecto?</h2>
              <ProcessTimeline reducedMotion={prefersReducedMotion} />
            </div>
          </div>
        </section>
      </div>
    </LazyMotion>
  );
}