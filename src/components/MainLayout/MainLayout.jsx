import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import FloatingWhatsApp from '../FloatingWhatsApp/FloatingWhatsApp';
import './MainLayout.css';

// Layout shell shared by every routed page: Navbar on top, page content via
// <Outlet />, Footer at the bottom, and a floating WhatsApp FAB.
export default function MainLayout() {
  return (
    <div className="main-layout">
      <Navbar />
      <div className="main-layout-content">
        <Outlet />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}