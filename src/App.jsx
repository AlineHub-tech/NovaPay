import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import Pages
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Services from './pages/Services';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

// New Professional Pages
import Security from './pages/Security';
import FinancialServices from './pages/FinancialServices';
import Collaborators from './pages/Collaborators';
import Support from './pages/Support';

// Import Global Styles
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        {/* Navbar remains sticky at the top */}
        <Navbar />

        <main className="main-content">
          <Routes>
            {/* Main Landing Page (Hero, Innovation, Features) */}
            <Route path="/" element={<LandingPage />} />
            
            {/* Company Trust Pages */}
            <Route path="/about" element={<About />} />
            <Route path="/security" element={<Security />} />
            
            {/* Service & Product Pages */}
            <Route path="/services" element={<Services />} />
            <Route path="/financial-services" element={<FinancialServices />} />
            <Route path="/collaborators" element={<Collaborators />} />
            
            {/* Support & Help Center */}
            <Route path="/support" element={<Support />} />
            
            {/* User Account Journey */}
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            
            {/* 404 Redirect to Home */}
            <Route path="*" element={<LandingPage />} />
          </Routes>
        </main>

        {/* Footer with global links and newsletter */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
