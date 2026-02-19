import React, { useState } from 'react';

export default function Coach() {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello! I\'m your AI wellness coach. How can I help you today?', sender: 'bot' },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    
    if (!input.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    // Simulate AI response
    setLoading(true);
    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        text: 'Thanks for your message! This is a demo. Connect to OpenAI API for real responses.',
        sender: 'bot',
      };
      setMessages((prev) => [...prev, botMessage]);
      setLoading(false);
    }, 500);
  };

  return (
    <div className="coach-container">
      <h1>AI Wellness Coach</h1>
      <div className="chat-box">
        <div className="messages">
          {messages.map((msg) => (
            <div key={msg.id} className={`message ${msg.sender}`}>
              <p>{msg.text}</p>
            </div>
          ))}
          {loading && <div className="message bot"><p>Thinking...</p></div>}
        </div>

        <form onSubmit={handleSendMessage} className="message-input">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask your wellness question..."
            disabled={loading}
          />
          <button type="submit" disabled={loading}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
