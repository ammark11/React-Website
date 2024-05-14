import React from "react";
import { useNavigate } from 'react-router-dom'; 
import "./navbar.css";
import { ShoppingCart } from "phosphor-react";
export const Navbar = () => {
  const navigate = useNavigate(); 
  return (
    <div className="landing-page">
      <header>
        <div className="container">
          <a href="#" className="logo">Blooms <strong>Website</strong></a>
          <ul className="links">
            <li onClick={() => navigate('/')}>Home</li>
            <li onClick={() => navigate('/shop')}>Shop</li>
            <li onClick={() => navigate('/contact')}>Contact Us</li>
            <li onClick={() => navigate('/cart')}>Cart
        
        <ShoppingCart size={32} />
          </li>
            <li onClick={() => navigate('/login')}>Login</li>
          </ul>
        </div>
      </header>
    </div>
  );
};
