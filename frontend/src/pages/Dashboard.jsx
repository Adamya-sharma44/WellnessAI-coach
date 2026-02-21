import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <header>
        <h1>Welcome to WellnessAI Coach</h1>
        <button onClick={handleLogout}>Logout</button>
      </header>

      {user && (
        <div className="user-info">
          <h2>Hello, {user.name}!</h2>
          <p>Email: {user.email}</p>
        </div>
      )}

      <section className="features">
        <h3>Features</h3>
        <ul>
          <li>Personalized wellness coaching</li>
          <li>AI-powered fitness recommendations</li>
          <li>Track your health goals</li>
          <li>Get real-time guidance</li>
        </ul>
      </section>

      <section className="coach-section">
        <h3>AI Coach</h3>
        <p>Start your wellness journey with AI-powered personalized coaching!</p>
        <button onClick={() => navigate('/coach')}>Open Coach</button>
      </section>
    </div>
  );
}
