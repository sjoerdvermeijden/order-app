import React, { useContext, useEffect } from "react";

import { CartWrapper } from "./Style";
import { CartItems, CartTotal } from "./Style";

import { CartContext } from "../context/CartContext";
import { PriceContext } from "../context/PriceContext";

import { FaTrashAlt } from 'react-icons/fa';

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

  const addItem = (id) => {
    const newItems = cartItems.map((item) => {
      if (item.id === id) {
        item.cartCount++
      }
      return item
    })
    setCartItems(newItems);
  }

  const subtracktItem = (id) => {
    const newItems = cartItems.map((item) => {
      if (item.id === id && item.cartCount > 1) {
        item.cartCount--
      }
      return item
    })
    setCartItems(newItems);
  }

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
                  <div className="cart-buttons">
                    <button className="cart-buttons__subtrackt" onClick={(e) => subtracktItem(item.id)}>-</button>
                    <button className="cart-buttons__add" onClick={(e) => addItem(item.id)}>+</button>
                  </div>
                  <button
                    className="remove-button"
                    onClick={(e) => removeItem(item.id)}
                  >
                    <FaTrashAlt />
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
