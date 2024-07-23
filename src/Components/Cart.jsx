
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './cart.css';

const Cart = () => {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(storedCart);
    }, []);

    const handleRemove = (index) => {
        const updatedCart = cart.filter((item, i) => i !== index);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const handleContinueShopping = () => {
        navigate('/'); 
    };

    const handleSignIn = () => {
        navigate('/login'); 
    };

    return (
        <div className="cart-container">
            <h2>Shopping Cart</h2>
            <hr />
            {cart.length === 0 ? (
                <div className="cart-empty">
                    <p>Your Shopping Cart is empty.</p>
                    <p>Have any saved items? Sign in to view them.</p>
                    <button className="sign-in-button" onClick={handleSignIn}>Sign In</button>
                    <button className="continue-shopping-button" onClick={handleContinueShopping}>Continue Shopping</button>
                    <a href="/" className="deals-link">Browse Deals & Specials</a>
                </div>
            ) : (
                <div className="cart-items">
                    {cart.map((item, index) => (
                        <div className="cart-item" key={index}>
                            <div className="cart-item-info">
                                <p>{item.name}</p>
                                <p>${item.price}</p>
                            </div>
                            <button className="btn-remove" onClick={() => handleRemove(index)}>Remove</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cart;
