import React, { useState } from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage('Thank you for subscribing us! 🎉');
    setEmail('');
  };

  return (
    <div className="newsletter-container">
      <p className="newsletter-title">
        Subscribe To Our Newsletter Now!!
      </p>
      <p className="newsletter-description">
        Don&apos;t Miss Out! 🎉 Join our community for insider deals, new arrivals, and all things awesome. Get the scoop in your inbox!!
      </p>
      
      <form onSubmit={handleSubmit} className="newsletter-form">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`newsletter-input ${email ? 'newsletter-input-rounded-left' : 'newsletter-input-rounded'}`}
          placeholder="Enter your email"
          required
        />

        {email && (
          <button
            type="submit"
            className="newsletter-button"
          >
            Subscribe
          </button>
        )}
      </form>

      {successMessage && (
        <p className="newsletter-success-message">{successMessage}</p>
      )}
    </div>
  );
};

export default NewsLetter;
