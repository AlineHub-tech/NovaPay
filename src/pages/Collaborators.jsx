import React from 'react';
import { Handshake, Building2, ShieldCheck, Globe } from 'lucide-react';
import '../styles/ProPages.css';

const Collaborators = () => {
  return (
    <div className="pro-page-container">
      <section className="collab-hero">
        <h1>Building a Unified <br/><span>Financial Ecosystem</span></h1>
        <p>NovaPay collaborates with leading national and international institutions to provide a seamless banking experience.</p>
      </section>
      <section className="partners-list">
        <div className="partner-item">
          <Building2 size={30}/>
          <div>
            <h4>Central Bank (BNR)</h4>
            <p>Fully compliant with the National Bank of Rwanda regulations.</p>
          </div>
        </div>
        <div className="partner-item">
          <ShieldCheck size={30}/>
          <div>
            <h4>RRA Integration</h4>
            <p>Direct portal for instant tax declarations and payments.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Collaborators;
