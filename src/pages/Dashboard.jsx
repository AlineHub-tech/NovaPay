import React, { useEffect, useState } from 'react';
import { 
  Wallet, User, Bell, TrendingUp, ArrowUpRight, 
  ArrowDownLeft, Edit3, Save, CreditCard, RefreshCcw, 
  X, Target, CheckCircle2, Clock, Smartphone
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Dashboard.css';

const Dashboard = () => {
  // Load user from localStorage
  const savedUser = JSON.parse(localStorage.getItem('novaUser')) || {
    name: 'User Name',
    balance: 0,
    goal: 'Building a House',
    email: 'user@example.com',
    joinedDate: new Date().toLocaleDateString()
  };

  const [user, setUser] = useState(savedUser);
  const [view, setView] = useState('balance');
  const [isEditing, setIsEditing] = useState(false);
  const [tempUser, setTempUser] = useState({ ...user });
  const [showModal, setShowModal] = useState(null); // 'deposit' or 'withdraw'
  const [amount, setAmount] = useState('');
  const [transactions, setTransactions] = useState([
    { id: 1, type: 'deposit', desc: 'Initial Deposit', amt: savedUser.balance, date: 'Account Opening' }
  ]);

  // Sync tempUser when user changes
  useEffect(() => {
    setTempUser({ ...user });
  }, [user]);

  const handleTransaction = () => {
    const val = parseFloat(amount);
    if (isNaN(val) || val <= 0) return alert("Enter a valid amount");

    let currentBalance = parseFloat(user.balance);
    if (showModal === 'withdraw' && val > currentBalance) return alert("Insufficient Balance");

    const newBalance = showModal === 'deposit' ? currentBalance + val : currentBalance - val;
    const newTrans = {
      id: Date.now(),
      type: showModal,
      desc: showModal === 'deposit' ? 'Funds Received' : 'Funds Withdrawn',
      amt: val,
      date: new Date().toLocaleString()
    };

    const updatedUser = { ...user, balance: newBalance };
    setUser(updatedUser);
    localStorage.setItem('novaUser', JSON.stringify(updatedUser));
    setTransactions([newTrans, ...transactions]);
    setAmount('');
    setShowModal(null);
  };

  const saveProfile = () => {
    setUser(tempUser);
    localStorage.setItem('novaUser', JSON.stringify(tempUser));
    setIsEditing(false);
  };

  return (
    <div className="dash-master">
      {/* HEADER SECTION */}
      <header className="dash-header">
        <div className="user-intro">
          <h1>Welcome, {user.name.split(' ')[0]}</h1>
          <p className="id-tag">Premium Account • NV-99204</p>
        </div>
        <div className="exchange-widget">
          <RefreshCcw size={14} className="spin-icon" /> 
          <span>1 USD = 1,295 RWF</span>
        </div>
      </header>

      {/* TABS NAVIGATION */}
      <nav className="dash-nav-tabs">
        <button className={view === 'balance' ? 'active' : ''} onClick={() => setView('balance')}>
          <Wallet size={18}/> Overview
        </button>
        <button className={view === 'profile' ? 'active' : ''} onClick={() => setView('profile')}>
          <User size={18}/> Profile
        </button>
        <button className={view === 'notifications' ? 'active' : ''} onClick={() => setView('notifications')}>
          <Bell size={18}/> Activity
        </button>
      </nav>

      {/* CONTENT AREA */}
      <main className="dash-content-body">
        <AnimatePresence mode="wait">
          {view === 'balance' && (
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className="overview-grid">
              <div className="stats-col">
                <div className="main-balance-card">
                  <p>Current Total Balance</p>
                  <h2>RWF {Number(user.balance).toLocaleString()}</h2>
                  <div className="action-row">
                    <button className="btn-dash deposit" onClick={() => setShowModal('deposit')}><ArrowUpRight size={16}/> Deposit</button>
                    <button className="btn-dash withdraw" onClick={() => setShowModal('withdraw')}><ArrowDownLeft size={16}/> Withdraw</button>
                  </div>
                </div>

                <div className="goal-card-pro">
                  <div className="goal-head">
                    <Target size={20} color="#00AEEF" />
                    <h4>Saving for: {user.goal}</h4>
                  </div>
                  <div className="progress-bg"><div className="progress-fill" style={{width: '65%'}}></div></div>
                  <div className="goal-meta"><span>65% Accomplished</span> <span>Target: 5M</span></div>
                </div>
              </div>

              <div className="history-col">
                <div className="history-head">
                  <h3>Recent Transactions</h3>
                  <button className="btn-req"><CreditCard size={14}/> Request Card</button>
                </div>
                <div className="transaction-scroll">
                  {transactions.map(t => (
                    <div key={t.id} className="t-row">
                      <div className={`t-icon-box ${t.type}`}><Clock size={16}/></div>
                      <div className="t-details"><strong>{t.desc}</strong><p>{t.date}</p></div>
                      <div className={`t-value ${t.type}`}>{t.type === 'deposit' ? '+' : '-'} {Number(t.amt).toLocaleString()}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {view === 'profile' && (
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className="profile-view">
               <div className="profile-top">
                 <h3>Account Information</h3>
                 {!isEditing ? (
                   <button onClick={() => setIsEditing(true)} className="btn-edit-dash"><Edit3 size={16}/> Edit</button>
                 ) : (
                   <button onClick={saveProfile} className="btn-save-dash"><Save size={16}/> Save</button>
                 )}
               </div>
               <div className="form-grid">
                 <div className="input-field">
                   <label>Full Name</label>
                   <input type="text" value={tempUser.name} disabled={!isEditing} onChange={e => setTempUser({...tempUser, name: e.target.value})} />
                 </div>
                 <div className="input-field">
                   <label>Email Address</label>
                   <input type="email" value={tempUser.email} disabled={!isEditing} onChange={e => setTempUser({...tempUser, email: e.target.value})} />
                 </div>
                 <div className="input-field">
                   <label>Financial Goal</label>
                   <input type="text" value={tempUser.goal} disabled={!isEditing} onChange={e => setTempUser({...tempUser, goal: e.target.value})} />
                 </div>
               </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* TRANSACTION MODAL */}
      <AnimatePresence>
        {showModal && (
          <motion.div className="modal-backdrop" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <div className="modal-surface">
              <div className="modal-header">
                <h3>{showModal === 'deposit' ? 'Deposit' : 'Withdraw'} RWF</h3>
                <X className="close-btn" onClick={() => setShowModal(null)} />
              </div>
              <div className="modal-inputs">
                <p>Available: RWF {Number(user.balance).toLocaleString()}</p>
                <input type="number" placeholder="Enter Amount" value={amount} onChange={e => setAmount(e.target.value)} autoFocus />
                <button className="btn-confirm-action" onClick={handleTransaction}>Confirm & Process</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dashboard;
