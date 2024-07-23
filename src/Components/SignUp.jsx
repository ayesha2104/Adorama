// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './signup.css';
// const SignUp = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }
//     localStorage.setItem(email, JSON.stringify({ firstName, lastName, password }));
//     navigate('/login');
//   };

//   return (
//     <div className="signupContainer">
//       <div className="signupBox">
//         <h2>Create an Account</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="inputGroup">
//             <label>First Name:</label>
//             <input
//               type="text"
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//               required
//             />
//           </div>
//           <div className="inputGroup">
//             <label>Last Name:</label>
//             <input
//               type="text"
//               value={lastName}
//               onChange={(e) => setLastName(e.target.value)}
//               required
//             />
//           </div>
//           <div className="inputGroup">
//             <label>Your Email:</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="inputGroup">
//             <label>Password:</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <div className="inputGroup">
//             <label>Confirm Password:</label>
//             <input
//               type="password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//             />
//           </div>
//           <div className="inputGroup">
//             <label>
//               <input type="checkbox" /> Yes, I would like to receive expert tips, special offers, and product news.
//             </label>
//           </div>
//           <div className="inputGroup">
//             <label>
//               <input type="checkbox" /> Yes, sign me up for Adorama Rewards.
//             </label>
//           </div>
//           <div className="inputGroup">
//             <label>
//               <input type="checkbox" /> Remember Me
//             </label>
//           </div>
//           <button type="submit" className="btnPrimary">CREATE ACCOUNT</button>
//           {error && <p className="error">{error}</p>}
//         </form>
//         <p>Have an Account? <Link to="/login">Sign In</Link></p>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
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
      <div className="signupBox">
        <h2>Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="inputGroup">
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="checkboxGroup">
            <label>
              <input type="checkbox" /> Receive updates and offers
            </label>
          </div>
          <button type="submit" className="btnPrimary">Create Account</button>
          {error && <p className="error">{error}</p>}
        </form>
        <p>Already have an account? <Link to="/login">Sign In</Link></p>
      </div>
    </div>
  );
};

export default SignUp;
