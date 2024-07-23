import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './signup.css';
const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    localStorage.setItem(email, JSON.stringify({ firstName, lastName, password }));
    navigate('/login');
  };

  return (
    <div className="signupContainer">
      <div className="newCustomer">
        <p>ADORAMA</p>
      </div>
      <div className="signupBox">
        <h2>Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <div className='name'>
          <div className="inputGroup">
            <label>First Name:</label>
            <input
              type="text" 
              placeholder='First Name'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="inputGroup">
            <label>Last Name:</label>
            <input
              type="text"
               placeholder='Last Name'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            </div>
          </div>
          <div className="inputGroup">
            <label>Your Email:</label>
            <input
              type="email"
               placeholder='Email Adress'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="inputGroup">
            <label>Password:</label>
            <input
              type="password"
               placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="inputGroup">
            <label>Confirm Password:</label>
            <input
              type="password"
               placeholder='Confirm Password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="inputGroup">
            <label>
              <input type="checkbox" /> <p>Yes, I would like to receive expert tips, special offers, and product news.</p>
            </label>
          </div>
          <div className="inputGroup">
            <label>
              <input type="checkbox" /><p id="yes"> Yes, sign me up for Adorama Rewards.</p>
            </label>
          </div>
          <div className="inputGroup">
            <label>
              <input type="checkbox" /><p id="remember">Remember Me</p>
            </label>
          </div>
          <button type="submit" className="btnPrimary">CREATE ACCOUNT</button>
          {error && <p className="error">{error}</p>}
        </form>
        <span>Have an Account? <Link to="/login"><br/><p id="sing">Sign In</p></Link></span>
      </div>
    </div>
  );
};

export default SignUp;
