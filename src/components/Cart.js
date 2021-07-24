import React, { useContext, useEffect } from "react";

import { CartWrapper } from "./Style";
import { CartItems, CartTotal } from "./Style";

import { CartContext } from "../context/CartContext";
import { PriceContext } from "../context/PriceContext";

function Cart() {
  const [cartItems, setCartItems] = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useContext(PriceContext);

  useEffect(() => {
    const newList = JSON.parse(localStorage.getItem("cart"));
    setCartItems(newList);

    const newPrice = JSON.parse(localStorage.getItem("price"));
    setTotalPrice(newPrice);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("price", JSON.stringify(totalPrice));
  }, [totalPrice]);

  const removeItem = (id) => {
    const newList = cartItems.filter((item) => item.id !== id);

    cartItems.forEach((item) => {
      if (id === item.id) {
        setTotalPrice(totalPrice - item.price * item.cartCount);
      }
    });

    setCartItems(newList);
  };

  return (
    <>
      <CartWrapper>
        <CartItems>
          <ul>
            {cartItems.map((item) => {
              return (
                <li>
                  <div className="cart-item">
                    <div className="cart-item__count">({item.cartCount})</div>
                    <div className="cart-item__label">{item.title}</div>
                    <div className="cart-item__price">€{item.price}</div>
                  </div>
                  <button
                    className="remove"
                    onClick={(e) => removeItem(item.id)}
                  >
                    -
                  </button>
                </li>
              );
            })}
          </ul>
        </CartItems>
        <CartTotal>
          <ul>
            <li>
              <span>Total: </span>€{totalPrice.toFixed(2)}
            </li>
          </ul>
          <button className="order-button">Afrekenen</button>
        </CartTotal>
      </CartWrapper>
    </>
  );
}

export default Cart;
