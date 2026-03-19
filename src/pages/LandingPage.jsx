import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Zap, Target, ArrowRight, CheckCircle2, Globe, Smartphone, Lock, 
  Trophy, Users, Fingerprint, Activity, CreditCard, PieChart, ShieldAlert, 
  RefreshCcw, Headphones, DownloadCloud, Apple, PlayCircle, Landmark, UserCheck
} from 'lucide-react';
import '../styles/LandingPage.css';

const LandingPage = () => {
  return (
    <div className="lp-master-wrapper">
      {/* 1. ELITE HERO - EDGE TO EDGE */}
      <section className="hero-section">
        <div className="hero-grid">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-text-area"
          >
            <div className="hero-top-badge">
              <span className="dot"></span> 
              Official Digital Banking Partner in Rwanda
            </div>
            <h1>The New Standard of <br/><span>Institutional Finance</span></h1>
            <p className="hero-sub">
              NovaPay delivers a world-class financial ecosystem. We combine 
              military-grade 256-bit encryption with intelligent wealth-building 
              strategies to secure your family's future and grow your corporate assets.
            </p>
            <div className="hero-cta-box">
              <button className="btn-main-bk">Open Corporate Account <ArrowRight size={16}/></button>
              <button className="btn-outline-bk">View Rates & Fees</button>
            </div>
            <div className="trust-metrics-hero">
              <div className="t-item"><UserCheck size={14}/> BNR Regulated</div>
              <div className="t-item"><Lock size={14}/> End-to-End Encrypted</div>
              <div className="t-item"><Landmark size={14}/> Rwandan Owned</div>
            </div>
          </motion.div>

          <div className="hero-visual-area">
            {/* THE PROFESSIONAL PHONE MOCKUP MOTION */}
            <div className="phone-mockup-container">
               <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="phone-frame"
              >
                <div className="phone-screen">
                  <div className="app-header">NOVAPAY</div>
                  <div className="app-card">
                    <p>Current Balance</p>
                    <h3>RWF 1,240,500</h3>
                  </div>
                  <div className="app-stats">
                    <div className="stat-bar" style={{height: '40%'}}></div>
                    <div className="stat-bar" style={{height: '90%'}}></div>
                    <div className="stat-bar" style={{height: '60%'}}></div>
                  </div>
                  <div className="app-footer">Secure Transaction</div>
                </div>
              </motion.div>

              {/* Floating UI Elements */}
              <motion.div 
                animate={{ x: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="floating-ui security-ui"
              >
                <Fingerprint size={18} color="#00AEEF"/>
                <span>Biometric Identity Verified</span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INNOVATION METRICS BAR */}
      <section className="innovation-bar">
        <div className="metric-container">
          <div className="metric-box">
            <Users size={28}/>
            <div><h3>500,000+</h3><p>Active Rwandan Clients</p></div>
          </div>
          <div className="metric-box">
            <Globe size={28}/>
            <div><h3>100%</h3><p>Nationwide Digital Reach</p></div>
          </div>
          <div className="metric-box">
            <Trophy size={28}/>
            <div><h3>Top Rated</h3><p>Financial Security App 2024</p></div>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES - CONTENT HEAVY */}
      <section className="services-detailed">
        <div className="section-head-bk">
          <span>Our Solutions</span>
          <h2>Comprehensive Financial Management</h2>
        </div>
        <div className="services-grid-bk">
          <div className="service-card-bk">
            <Target className="icon-bk" />
            <h3>Intelligent Goal Savings</h3>
            <p>Our AI-driven engine tracks your progress towards home ownership or tuition. It calculates your daily spending patterns and optimizes your savings automatically.</p>
          </div>
          <div className="service-card-bk">
            <CreditCard className="icon-bk" />
            <h3>Corporate Transactions</h3>
            <p>Handle business payroll, supplier payments, and international transfers within seconds. Our system is integrated with government portals.</p>
          </div>
          <div className="service-card-bk">
            <ShieldCheck className="icon-bk" />
            <h3>Institutional Security</h3>
            <p>Protected by 256-bit AES encryption and multi-factor biometric authentication. Your wealth is guarded by world-class infrastructure.</p>
          </div>
        </div>
      </section>

      {/* 4. SECURITY INFRASTRUCTURE */}
      <section className="security-detailed">
        <div className="sec-content">
          <h2>Your Security is our DNA</h2>
          <div className="sec-grid">
            <div className="sec-box">
              <Smartphone size={32} color="#003366"/>
              <h4>Biometric Guard</h4>
              <p>Advanced Face ID and Fingerprint protocols ensure total control.</p>
            </div>
            <div className="sec-box">
              <RefreshCcw size={32} color="#003366"/>
              <h4>Real-Time Alerts</h4>
              <p>Instant SMS and App notifications for every movement.</p>
            </div>
            <div className="sec-box">
              <ShieldAlert size={32} color="#003366"/>
              <h4>Fraud Monitoring</h4>
              <p>24/7 AI-driven analysis of suspicious activity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DOWNLOAD APP SECTION */}
      <section className="download-section">
        <div className="download-inner">
          <h2>Bank Anywhere, Anytime.</h2>
          <p>Get the NovaPay app for a seamless experience on your smartphone.</p>
          <div className="app-store-btns">
            <button className="store-btn"><Apple /> App Store</button>
            <button className="store-btn"><PlayCircle /> Google Play</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
