import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Landmark, CreditCard, PieChart, ShieldAlert, Zap } from 'lucide-react';
import '../styles/Services.css';

const Services = () => {
  const services = [
    { icon: <Smartphone />, title: "Mobile Banking", desc: "Access your account 24/7 from any smartphone. Manage transfers, bills, and airtime instantly." },
    { icon: <Landmark />, title: "Personal Savings", desc: "High-interest savings accounts designed to help you reach your goals faster with automated tools." },
    { icon: <CreditCard />, title: "Virtual Cards", desc: "Generate secure virtual cards for safe online shopping and global subscriptions instantly." },
    { icon: <PieChart />, title: "Wealth Analytics", desc: "Get AI-powered reports on your spending habits and personalized advice on how to save more." },
    { icon: <ShieldAlert />, title: "Fraud Protection", desc: "Advanced biometric security and real-time monitoring to keep your funds safe from any threat." },
    { icon: <Zap />, title: "Instant Transfers", desc: "Move money between NovaPay, MoMo, and any local bank in under 5 seconds." }
  ];

  return (
    <div className="services-page-wrapper">
      <section className="services-hero">
        <h1>Solutions Tailored <br/> For <span>Your Growth</span></h1>
        <p>From personal savings to corporate liquidity, we provide the ultimate digital financial suite.</p>
      </section>

      <section className="services-grid-container">
        <div className="s-grid">
          {services.map((s, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -10 }}
              className="service-pro-card"
            >
              <div className="s-icon-box">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <button className="s-learn-more">Learn More</button>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
