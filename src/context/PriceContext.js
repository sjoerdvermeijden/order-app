import React, { useState } from 'react'

export const PriceContext = React.createContext(0);

export default function PriceFunction({children}) {
    const [totalPrice, setTotalPrice] = useState(0);

    return <PriceContext.Provider value={[totalPrice, setTotalPrice]}>
        {children}
    </PriceContext.Provider>
}