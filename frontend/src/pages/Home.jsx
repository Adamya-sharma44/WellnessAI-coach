import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <header>
        <h1>🏃 WellnessAI Coach</h1>
        <p>Your personal AI wellness and fitness companion</p>
      </header>

      <section className="hero">
        <h2>Transform Your Health with AI</h2>
        <p>Get personalized workout plans, nutrition guidance, and wellness coaching powered by AI.</p>
        <button onClick={() => navigate('/register')}>Get Started</button>
        <button onClick={() => navigate('/login')}>Sign In</button>
      </section>

      <section className="features">
        <h2>Features</h2>
        <div className="feature-grid">
          <div className="feature">
            <h3>Personalized Plans</h3>
            <p>AI creates custom wellness plans based on your goals</p>
          </div>
          <div className="feature">
            <h3>Real-time Coaching</h3>
            <p>Get instant guidance and recommendations</p>
          </div>
          <div className="feature">
            <h3>Progress Tracking</h3>
            <p>Monitor your health and fitness improvements</p>
          </div>
          <div className="feature">
            <h3>AI Support</h3>
            <p>Chat with your AI wellness coach anytime</p>
          </div>
        </div>
      </section>
    </div>
  );
}
