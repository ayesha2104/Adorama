
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
      <div className="newCustomer">
       <p>ADORAMA</p> 
      </div>
      <div className="loginBox">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="inputGroup">
            <label>Your Email:</label>
            <input
              type="email"
              placeholder='Email Adress'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required />
          </div>
          <div className="inputGroup">
            <label>Password:</label>
            <input
              type="password"
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required />
          </div>
          <div className="inputGroup">
            <label>
              <input  type="checkbox" /> <p>Remember Me</p>
            </label>
          </div>
          <button type="submit" className="btnPrimary">SIGN IN</button>
          {error && <p className="error">{error}</p>}
          <Link to="/forgot-password" className="forgotPassword">Forgot Password?</Link>
          <div className="divider">OR</div>
          <button type="button" className="btnSecondary">Sign in with Apple</button>
          <button type="button" className="btnSecondary">Sign in with Google</button>
        </form>
        <span>New Customer? <Link to="/signup"><br/>Create an Account</Link></span>
      </div>
    
    </div>
  );
}

export default Login;
