import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, CheckCircle2, User, Mail, Target, Wallet, ArrowRight } from 'lucide-react';
import '../styles/Register.css';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', goal: '', balance: '' });
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    
    const newUser = {
      ...formData,
      id: Math.random().toString(36).substr(2, 6).toUpperCase(),
      joinedDate: new Date().toLocaleString(),
      notifications: [
        { time: new Date().toLocaleString(), message: "Welcome to NovaPay! Your account is active.", type: 'success' }
      ]
    };

    localStorage.setItem('novaUser', JSON.stringify(newUser));
    
    // Show Success Modal first
    setIsSuccess(true);
    
    // Redirect to dashboard after 3 seconds
    setTimeout(() => {
      navigate('/dashboard');
    }, 3000);
  };

  return (
    <div className="register-full-container">
      <div className="register-grid">
        
        {/* LEFT SIDE: TRUST CONTENT */}
        <div className="register-info-side">
          <div className="info-content">
            <span className="badge-pro">NovaPay Enrollment</span>
            <h1>Start Your <span>Financial</span> Revolution</h1>
            <p>Join over 500,000 Rwandans building wealth with institutional-grade security.</p>
            
            <div className="trust-points">
              <div className="t-point"><ShieldCheck size={20}/> 256-bit AES Encryption</div>
              <div className="t-point"><CheckCircle2 size={20}/> BNR Regulated Ecosystem</div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: THE FORM */}
        <div className="register-form-side">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="form-card-pro"
          >
            <h2>Create Personal Account</h2>
            <p>Please enter your legal information as per your National ID.</p>

            <form onSubmit={handleRegister}>
              <div className="input-field-pro">
                <label><User size={16}/> Full Name</label>
                <input type="text" placeholder="e.g. Jean Damascene" required 
                  onChange={(e) => setFormData({...formData, name: e.target.value})} />
              </div>

              <div className="input-field-pro">
                <label><Mail size={16}/> Email Address</label>
                <input type="email" placeholder="name@example.com" required 
                  onChange={(e) => setFormData({...formData, email: e.target.value})} />
              </div>

              <div className="input-field-pro">
                <label><Target size={16}/> Your Financial Goal</label>
                <input type="text" placeholder="e.g. Buying a Modern House" required 
                  onChange={(e) => setFormData({...formData, goal: e.target.value})} />
              </div>

              <div className="input-field-pro">
                <label><Wallet size={16}/> Initial Deposit (RWF)</label>
                <input type="number" placeholder="Enter amount to start" required 
                  onChange={(e) => setFormData({...formData, balance: e.target.value})} />
              </div>

              <button type="submit" className="btn-register-pro">
                Verify & Open Account <ArrowRight size={18}/>
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* SUCCESS MODAL OVERLAY */}
      <AnimatePresence>
        {isSuccess && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="success-overlay"
          >
            <motion.div 
              initial={{ scale: 0.8, y: 20 }} 
              animate={{ scale: 1, y: 0 }}
              className="success-modal"
            >
              <div className="success-icon-box">
                <CheckCircle2 size={60} color="#2ecc71" />
              </div>
              <h3>Account Created!</h3>
              <p>Welcome to NovaPay, <strong>{formData.name}</strong>. Your digital vault is being prepared...</p>
              <div className="loader-bar"><div className="fill"></div></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Register;
