import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck, Users, Globe, Award } from 'lucide-react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-page-wrapper">
      {/* HERO SECTION */}
      <section className="about-hero-section">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="about-hero-content"
        >
          <span className="badge-bk">Our Story</span>
          <h1>Pioneering Digital <br/><span>Financial Trust</span></h1>
          <p>Founded in 2024, NovaPay is dedicated to bridging the gap between traditional banking stability and modern digital innovation for all Rwandans.</p>
        </motion.div>
      </section>

      {/* MISSION & VISION GRID */}
      <section className="mv-section">
        <div className="mv-container">
          <div className="mv-card">
            <Target size={40} className="icon-blue" />
            <h3>Our Mission</h3>
            <p>To empower every individual and business in Rwanda with accessible, secure, and high-speed digital financial tools that foster long-term growth.</p>
          </div>
          <div className="mv-card">
            <Eye size={40} className="icon-blue" />
            <h3>Our Vision</h3>
            <p>To be the leading FinTech ecosystem in East Africa, recognized for absolute security, customer-centric innovation, and financial inclusion.</p>
          </div>
        </div>
      </section>

      {/* CORE VALUES - CONTENT HEAVY */}
      <section className="values-section">
        <h2 className="section-title-bk">Our Core Values</h2>
        <div className="values-grid-bk">
          <div className="value-box">
            <ShieldCheck size={32} />
            <h4>Integrity First</h4>
            <p>We maintain the highest standards of transparency in every transaction and partnership we undertake.</p>
          </div>
          <div className="value-box">
            <Users size={32} />
            <h4>Customer Centric</h4>
            <p>Your financial goals are our priority. Every feature we build starts with solving a user need.</p>
          </div>
          <div className="value-box">
            <Award size={32} />
            <h4>Excellence</h4>
            <p>We strive for perfection in our security protocols and user interface to provide a world-class experience.</p>
          </div>
          <div className="value-box">
            <Globe size={32} />
            <h4>Innovation</h4>
            <p>We embrace the latest technologies like AI and Blockchain to stay ahead of financial threats.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
