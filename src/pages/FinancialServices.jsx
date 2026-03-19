import React from 'react';
import { CreditCard, Landmark, Briefcase, TrendingUp, Zap, Smartphone } from 'lucide-react';
import '../styles/ProPages.css';

const FinancialServices = () => {
  const services = [
    { icon: <Landmark />, title: "Personal Savings", desc: "High-yield savings accounts with automated goal tracking and 5% annual growth." },
    { icon: <Briefcase />, title: "Business Banking", desc: "Tailored solutions for Rwandan SMEs, including bulk payroll and tax integration." },
    { icon: <CreditCard />, title: "Virtual Cards", desc: "Instant virtual cards for secure international online payments and subscriptions." },
    { icon: <TrendingUp />, title: "Investment Portfolios", desc: "Access managed funds and local stocks directly through your NovaPay dashboard." }
  ];

  return (
    <div className="pro-page-container">
      <section className="fs-hero">
        <h1>Solutions Designed <br/> For <span>Economic Growth</span></h1>
        <p>From micro-savings to corporate liquidity management, NovaPay is your partner in prosperity.</p>
      </section>
      <div className="fs-grid">
        {services.map((s, i) => (
          <div key={i} className="fs-card">
            <div className="fs-icon-box">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <button className="btn-fs-link">Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FinancialServices;
