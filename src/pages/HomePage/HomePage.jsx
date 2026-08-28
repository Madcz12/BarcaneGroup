import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TopMarquee from '../../components/TopMarquee/TopMarquee';
import Hero from '../../components/Hero/Hero';
// import Nosotros from '../../components/Nosotros/Nosotros'; // TODO: sección no solicitada por el cliente aún — evaluar más adelante
import Services from '../../components/Services/Services';
import IndustriesAndWhy from '../../components/IndustriesAndWhy/IndustriesAndWhy';
/* import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'; */
import ProcessAndCTA from '../../components/ProcessAndCTA/ProcessAndCTA';

// Home page: landing sections rendered inside the MainLayout shell.
// Navbar and Footer are provided by MainLayout, so this component only
// renders its own page-specific content.
export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.hash ? location.hash.replace('#', '') : location.state?.scrollTo;
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  }, [location]);

  return (
    <main>
      <TopMarquee />
      <Hero />
      {/* <Nosotros /> */}
      <Services />
      <IndustriesAndWhy />
      {/* <FeaturedProducts /> */}
      <ProcessAndCTA />
    </main>
  );
}