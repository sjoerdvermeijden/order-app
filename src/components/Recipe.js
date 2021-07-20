import React, { useContext, useState } from "react";

import { RecipeWrapper } from "./Style";
import { CartContext } from "../context/CartContext";
import { AmountContext } from "../context/AmountContext";
import { PriceContext } from "../context/PriceContext";

function Recipe({ title, price, description, ingredients, extra, image }) {
  const [cartItems, setCartItems] = useContext(CartContext);
  const [amount, setAmount] = useContext(AmountContext);
  const [totalPrice, setTotalPrice] = useContext(PriceContext);

  const [isOpen, setIsOpen] = useState(false);

  const addItem = () => {
    setCartItems([...cartItems, { title, id: Math.random(), price }]);
    setTotalPrice(totalPrice + price);
  };

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
              <button
                onClick={(id) => setIsOpen(!isOpen)}
                className={`${isOpen ? "close" : "open"}`}
              >
                {isOpen ? "-" : "+"}
              </button>
            </div>
          </div>
          <div className="recipe__extra">
            <ul className="recipe__extra-list">
              {extra.map((item) => {
                return (
                  <li>
                    <input type="checkbox" className="check" />
                    <span className="label">{item.saus}</span>
                    <span className="prijs">(+ €0,50)</span>
                  </li>
                );
              })}
            </ul>
            <div className="recipe__add">
              <div className="recipe__amount">
                <input type="number" name="" id="" placeholder="1" />
              </div>
              <button onClick={addItem}>Add to cart</button>
            </div>
          </div>
        </div>
      </RecipeWrapper>
    </>
  );
}

export default Recipe;
