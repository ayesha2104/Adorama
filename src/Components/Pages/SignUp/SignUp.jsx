// import React, { useState } from 'react';
// import { Link, useHistory } from 'react-router-dom';
// import './signup.css';

// const SignUp = () => {
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [error, setError] = useState('');
//     const history = useHistory();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (password !== confirmPassword) {
//             setError('Passwords do not match');
//             return;
//         }
//         localStorage.setItem(email, JSON.stringify({ firstName, lastName, password }));
//         history.push('/login');
//     };

//     return (
//         <div className="signup-container">
//             <div className="signup-box">
//                 <h2>Create an Account</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div className="input-group">
//                         <label>First Name:</label>
//                         <input
//                             type="text"
//                             value={firstName}
//                             onChange={(e) => setFirstName(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div className="input-group">
//                         <label>Last Name:</label>
//                         <input
//                             type="text"
//                             value={lastName}
//                             onChange={(e) => setLastName(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div className="input-group">
//                         <label>Your Email:</label>
//                         <input
//                             type="email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div className="input-group">
//                         <label>Password:</label>
//                         <input
//                             type="password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div className="input-group">
//                         <label>Confirm Password:</label>
//                         <input
//                             type="password"
//                             value={confirmPassword}
//                             onChange={(e) => setConfirmPassword(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div className="input-group">
//                         <label>
//                             <input type="checkbox" /> Yes, I would like to receive expert tips, special offers, and product news.
//                         </label>
//                     </div>
//                     <div className="input-group">
//                         <label>
//                             <input type="checkbox" /> Yes, sign me up for Adorama Rewards.
//                         </label>
//                     </div>
//                     <div className="input-group">
//                         <label>
//                             <input type="checkbox" /> Remember Me
//                         </label>
//                     </div>
//                     <button type="submit" className="btn-primary">CREATE ACCOUNT</button>
//                     {error && <p className="error">{error}</p>}
//                 </form>
//                 <p>Have an Account? <Link to="/login">Sign In</Link></p>
//             </div>
//         </div>
//     );
// };

// export default SignUp;
