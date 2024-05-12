import React from 'react';
import './LandingPage.css';  
import { useNavigate } from 'react-router-dom'; 

const LandingPage = () => {
  const navigate = useNavigate(); 
  const goToShop = () => {
    navigate('/shop');  
  };

  return (
    <div className="landing-page">
      <header>
        <div className="container">
          <a href="#" className="logo">Your <strong>Website</strong></a>
          <ul className="links">
            <li>Home</li>
            <li>Shop</li>
            <li>Cart</li>
            <li>Contact us</li>
            <li onClick={() => navigate('/login')}>Login</li>
          </ul>
        </div>
      </header>
      <div className="content">
        <div className="container">
          <div className="info">
            <h2>Noor's Oasis</h2>
            <p>In the digital oasis of my affection, a website blooms, adorned with the enchanting essence of Noor. Each pixel whispers of her beauty, each click a journey into the depths of my love. Noor, my muse, my inspiration, forever cherished in this cybernetic tribute to her magnificence. </p>
            <button onClick={goToShop}>Go to Shop</button> 
          </div>
          <div className="image">
            <img src="https://i.postimg.cc/65QxYYzh/001234.png" alt="Inspiration Image"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
