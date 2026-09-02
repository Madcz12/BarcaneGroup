import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout/MainLayout';
import HomePage from './pages/HomePage/HomePage';
import Catalog from './pages/Catalog/Catalog';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import CorporatePrints from './pages/CorporatePrints/CorporatePrints';
import CustomPackaging from './pages/CustomPackaging/CustomPackaging';
import MerchTextile from './pages/MerchTextile/MerchTextile';
import AdEquipment from './pages/AdEquipment/AdEquipment';
import MaterialsPage from './pages/MaterialsPage/MaterialsPage';
import './App.css';

// Route configuration: MainLayout wraps every page with Navbar + Footer.
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="productos" element={<Catalog />} />
        <Route path="productos/:id" element={<ProductDetail />} />
        <Route path="servicios/impresos-corporativos" element={<CorporatePrints />} />
        <Route path="servicios/empaques-personalizados" element={<CustomPackaging />} />
        <Route path="servicios/merchandising-y-textil" element={<MerchTextile />} />
        <Route path="servicios/publicidad-y-equipamiento" element={<AdEquipment />} />
        <Route path="materiales" element={<MaterialsPage />} />
        <Route path="materiales-y-acabados" element={<MaterialsPage />} />
        <Route path="servicios/materiales" element={<MaterialsPage />} />
      </Route>
    </Routes>
  );
}

export default App;