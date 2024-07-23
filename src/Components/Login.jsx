

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem(email));
    if (user && user.password === password) {
      localStorage.setItem('loggedInUser', email);
      navigate('/dashboard'); 
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="loginContainer">
      <div className="loginLeft">
        <h1>Adorama</h1>
        <p>New Customer?</p>
        <Link to="/signup" className="createAccountLink">CREATE AN ACCOUNT</Link>
      </div>
      <div className="loginBox">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="inputGroup">
            <label>Your Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required />
          </div>
          <div className="inputGroup">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required />
          </div>
          <div className="inputGroup rememberMe">
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            <Link to="/forgot-password" className="forgotPassword">Forgot Password?</Link>
          </div>
          <button type="submit" className="btnPrimary">SIGN IN</button>
          {error && <p className="error">{error}</p>}
          <div className="divider">OR</div>
          <button type="button" className="btnSecondary">Sign in with Apple</button>
          <button type="button" className="btnSecondary">Sign in with Google</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
