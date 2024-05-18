import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import './shop.css'; // Ensure this imports your styles

const Product = ({ item }) => {
  const { _id: id, name: productName, price, picture: productImage } = item;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id] || 0;

  return (
    <div className="product">
      <img src={`http://localhost:5000/uploads/${productImage}`} alt={productName} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>{price} OMR</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};

export default Product;
