import { useNavigate } from 'react-router-dom';
import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';
import CartItem from './cart-item';
import './cart.css';

const Cart = () => {
  const { cartItems, items } = useContext(ShopContext);
  const navigate = useNavigate();

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      <div className="cartItems">
        {items.map((item) => {
          if (cartItems[item._id] > 0) {
            return <CartItem key={item._id} item={item} />;
          }
          return null;
        })}
      </div>
      <div className="checkout">
        <h2>Total: ${items.reduce((total, item) => total + (item.price * (cartItems[item._id] || 0)), 0)}</h2>
        <button
          onClick={() => {
            navigate('/checkout');
          }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
