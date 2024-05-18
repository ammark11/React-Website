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

        </div>
      </header>
      <div className="content">
        <div className="container">
          <div className="info">
            <h2>Fresh Blooms Arrived</h2>
            <p>IWelcome to Blooms, your go-to online flower store for all of your floral needs. Our exquisite selection of fresh blooms will cater to all your needs, no matter the occasion. Browse our inventory to discover new arrivals and best sellers and subscribe to our newsletter to stay updated about upcoming deals and special offers. </p>
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
