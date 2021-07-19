import React, { useState } from 'react'

export const CartContext = React.createContext();

export default function CartFunction({children}) {
    const [cartItems, setCartItems] = useState([])

    return (
        <CartContext.Provider value={[cartItems, setCartItems]}>
            {children}
        </CartContext.Provider>
    )
}