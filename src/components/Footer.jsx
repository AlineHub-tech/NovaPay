import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, Twitter, Instagram, Linkedin, Send, 
  Phone, Mail, MapPin, ShieldCheck, UserPlus, 
  HelpCircle, CreditCard, Handshake 
} from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-main">
      <div className="footer-top">
        <div className="footer-grid">
          
          {/* 1. BRAND & ABOUT ACCOUNT */}
          <div className="footer-section">
            <div className="footer-logo">
              <div className="logo-box">N</div>
              <span>NOVAPAY</span>
            </div>
            <p className="footer-text">
              NovaPay is Rwanda's premier digital financial ecosystem, designed to empower you with secure, 
              fast, and innovative banking tools for a better tomorrow.
            </p>
            <div className="footer-badge">
              <ShieldCheck size={18} color="#00AEEF" />
              <span>BNR Licensed & Regulated</span>
            </div>
          </div>

          {/* 2. QUICK LINKS */}
          <div className="footer-section">
            <h4>Quick Navigation</h4>
            <ul className="footer-links">
              <li><Link to="/">Home Dashboard</Link></li>
              <li><Link to="/about">Our Story</Link></li>
              <li><Link to="/financial-services">Financial Services</Link></li>
              <li><Link to="/security">Security Center</Link></li>
            </ul>
          </div>

          {/* 3. ACCOUNT & COLLABORATION */}
          <div className="footer-section">
            <h4>My Account</h4>
            <ul className="footer-links">
              <li><Link to="/register"><UserPlus size={14}/> Open Account</Link></li>
              <li><Link to="/dashboard"><CreditCard size={14}/> Card Management</Link></li>
              <li><Link to="/support"><HelpCircle size={14}/> Support Center</Link></li>
              <li><Link to="/collaborators"><Handshake size={14}/> Collaboration</Link></li>
            </ul>
          </div>

          {/* 4. NEWSLETTER & CONTACT */}
          <div className="footer-section">
            <h4>Stay Updated</h4>
            <p className="small-text">Subscribe to receive financial tips and news.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your Email Address" required />
              <button type="submit"><Send size={18} /></button>
            </form>
            <div className="footer-contact">
              <div className="c-item"><Phone size={14}/> +250 788 000 000</div>
              <div className="c-item"><Mail size={14}/> support@novapay.rw</div>
            </div>
          </div>

        </div>
      </div>

      {/* FOOTER BOTTOM: SOCIALS & COPYRIGHT */}
      <div className="footer-bottom">
        <div className="bottom-content">
          <p>&copy; {new Date().getFullYear()} NovaPay Rwanda. All Rights Reserved.</p>
          <div className="social-links">
            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
          </div>
 <p className="dev-credit">Developed by <a href="https://byte-flow-ltd.vercel.app/">ByteFlow</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
