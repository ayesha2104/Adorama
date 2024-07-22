import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './forgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
      e.preventDefault();
      const user = JSON.parse(localStorage.getItem(email));
      if (user) {
          setMessage('Password reset link has been sent to your email.');
      } else {
          setMessage('No account found with this email.');
      }
  };

  return (
      <div className="forgot-password-container">
          <div className="forgot-password-box">
              <h2>Forgot Password</h2>
              <form onSubmit={handleSubmit}>
                  <div className="input-group">
                      <label>Your Email:</label>
                      <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                      />
                  </div>
                  <button type="submit" className="btn-primary">RESET PASSWORD</button>
                  {message && <p className="message">{message}</p>}
              </form>
          </div>
      </div>
  );
};

export default ForgotPassword;
