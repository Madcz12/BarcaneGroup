import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout/MainLayout';
import HomePage from './pages/HomePage/HomePage';
import Catalog from './pages/Catalog/Catalog';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import './App.css';

// Route configuration: MainLayout wraps every page with Navbar + Footer.
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="productos" element={<Catalog />} />
        <Route path="productos/:id" element={<ProductDetail />} />
      </Route>
    </Routes>
  );
}

export default App;