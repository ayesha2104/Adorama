
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
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label>Your Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required />
          </div>
          <div className={styles.inputGroup}>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required />
          </div>
          <div className={styles.inputGroup}>
            <label>
              <input type="checkbox" /> Remember Me
            </label>
          </div>
          <button type="submit" className={styles.btnPrimary}>SIGN IN</button>
          {error && <p className={styles.error}>{error}</p>}
          <Link to="/forgot-password" className={styles.forgotPassword}>Forgot Password?</Link>
          <div className={styles.divider}>OR</div>
          <button type="button" className={styles.btnSecondary}>Sign in with Apple</button>
          <button type="button" className={styles.btnSecondary}>Sign in with Google</button>
        </form>
        <p>New Customer? <Link to="/signup">Create an Account</Link></p>
      </div>
    </div>
  );
}

export default Login;
