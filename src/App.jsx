import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import IndustriesAndWhy from './components/IndustriesAndWhy/IndustriesAndWhy';
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts';
import ProcessAndCTA from './components/ProcessAndCTA/ProcessAndCTA';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <IndustriesAndWhy />
        <FeaturedProducts />
        <ProcessAndCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
