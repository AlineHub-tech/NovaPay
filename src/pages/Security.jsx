import React from 'react';
import { ShieldCheck, Lock, Fingerprint, Eye, ShieldAlert, Key } from 'lucide-react';
import '../styles/ProPages.css';

const Security = () => {
  return (
    <div className="pro-page-container">
      <section className="sec-hero">
        <div className="hero-inner">
          <span className="badge-pro">Safety First</span>
          <h1>Institutional Grade <br/><span>Data Protection</span></h1>
          <p>NovaPay utilizes 256-bit AES encryption and multi-factor biometric protocols to ensure your wealth remains inaccessible to unauthorized entities.</p>
        </div>
      </section>

      <section className="sec-features-grid">
        <div className="sec-card-pro">
          <Fingerprint size={40} color="#00AEEF" />
          <h3>Biometric Vault</h3>
          <p>Access your funds using Face ID or Fingerprint authentication, adding a physical layer of security to your digital assets.</p>
        </div>
        <div className="sec-card-pro">
          <Lock size={40} color="#00AEEF" />
          <h3>End-to-End Encryption</h3>
          <p>Every transaction and message is encrypted from the moment it leaves your device until it reaches our secure servers.</p>
        </div>
        <div className="sec-card-pro">
          <ShieldAlert size={40} color="#00AEEF" />
          <h3>Fraud Monitoring</h3>
          <p>Our AI-driven system monitors accounts 24/7 for suspicious patterns and instantly freezes unauthorized activity.</p>
        </div>
      </section>
    </div>
  );
};
export default Security;
