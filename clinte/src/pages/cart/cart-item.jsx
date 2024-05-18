import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';

const CartItem = ({ item }) => {
  const { id, name, price, picture } = item;
  const { addToCart, removeFromCart, cartItems } = useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={`http://localhost:5000/uploads/${picture}`} alt={name} />
      <div className="description">
        <p>
          <b>{name}</b>
        </p>
        <p>Price: {price} OMR</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}>-</button>
          <p>{cartItems[id]}</p>
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
