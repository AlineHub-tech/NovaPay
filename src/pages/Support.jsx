import React from 'react';
import { HelpCircle, MessageSquare, PhoneCall, Mail } from 'lucide-react';
import '../styles/ProPages.css';

const Support = () => {
  return (
    <div className="pro-page-container">
      <section className="support-hero">
        <h1>How can we <span>Help you?</span></h1>
        <div className="search-box-pro">
          <input type="text" placeholder="Search for help (e.g. Reset Password)" />
        </div>
      </section>
      <div className="support-grid">
        <div className="sup-card">
          <MessageSquare color="#003366" />
          <h4>Live Chat</h4>
          <p>Available 24/7 for instant assistance.</p>
        </div>
        <div className="sup-card">
          <PhoneCall color="#003366" />
          <h4>Call Center</h4>
          <p>Contact us at 4545 (Toll Free).</p>
        </div>
      </div>
    </div>
  );
};
export default Support;
