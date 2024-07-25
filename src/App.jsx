import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/Homepage/HomePage';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import ForgotPassword from './Components/ForgotPassword';
import Cart from './Components/Cart';
import SingleProduct from './Components/SingleProduct';

function App() {
  const location = useLocation();
  const hideNavbarAndFooter = ['/login', '/signup', '/forgot-password','/SingleProduct'].includes(location.pathname);

  return (
    <div className="App">
      {!hideNavbarAndFooter && <Navbar />}
     
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
       <Route path="/cart" element={<Cart />} />
       <Route path="/singleproduct" element={<SingleProduct />} />

       
      </Routes>
      {!hideNavbarAndFooter && <Footer />}
    </div>
  );
}

export default App;


