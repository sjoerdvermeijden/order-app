import React, { useContext, useState } from "react";

import { RecipeWrapper } from "./Style";
import { CartContext } from "../context/CartContext";
import { AmountContext } from "../context/AmountContext";
import { PriceContext } from "../context/PriceContext";

function Recipe({ title, price, description, ingredients, image }) {
  const [cartItems, setCartItems] = useContext(CartContext);
  const [amount, setAmount] = useContext(AmountContext);
  const [totalPrice, setTotalPrice] = useContext(PriceContext);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <RecipeWrapper>
        <div className={"recipe " + (isOpen ? "is-open" : null)}>
          <div className="recipe__container">
            <figure className="recipe__image">
              <img src={image} alt="" />
            </figure>
            <div className="recipe__content">
              <h3>{title}</h3>
              <p className="description">{description}</p>
              <ul>
                {ingredients.map((element) => {
                  return <li>{element}</li>;
                })}
              </ul>
              <h4 className="price">€{price}</h4>
            </div>
            <div className="recipe__add-button">
              <button onClick="">+</button>
            </div>
          </div>
          <div className="recipe__extra">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, voluptatum.</p>
          </div>
        </div>
      </RecipeWrapper>
    </>
  );
}

export default Recipe;
