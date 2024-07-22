
import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/Homepage/HomePage';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import ForgotPassword from './Components/ForgotPassword';

function App() {
  return (
    <div className="App">
     
      <Navbar />
      <HomePage />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
      <Footer />
      
    </div>
  );
}

export default App;
