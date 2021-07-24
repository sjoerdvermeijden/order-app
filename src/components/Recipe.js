import React, { useContext, useEffect } from "react";

import { RecipeWrapper } from "./Style";
import { CartContext } from "../context/CartContext";
import { PriceContext } from "../context/PriceContext";

function Recipe({ title, id, price, description, image }) {
  const [cartItems, setCartItems] = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useContext(PriceContext);
  
  const addItem = (id) => {
    
    if (cartItems.find((item) => item.id === id)) {
      const cartItem  = cartItems.find((item) => item.id === id);
      cartItem.cartCount++;
      localStorage.setItem("cart", JSON.stringify(cartItems));

      setTotalPrice(prevPrice => prevPrice + price);
      return;
    }

    setCartItems([...cartItems, { title, id: id, price, cartCount: 1 }]);
    setTotalPrice(prevPrice => prevPrice + price);
  };

  return (
    <>
      <RecipeWrapper>
        <div className="recipe">
          <figure className="recipe__image">
            <img src={image} alt="" />
          </figure>
          <div className="recipe__container">
            <div className="recipe__content">
              <h3>{title}</h3>
              <p className="description">{description}</p>
              <h4 className="price">€{price}</h4>
            </div>
            <button className="recipe__add" onClick={(e) => addItem(id)}>+</button>
          </div>
        </div>
      </RecipeWrapper>
    </>
  );
}

export default Recipe;
