import React, { useState } from 'react'

export const AmountContext = React.createContext();

export default function AmountFunction({children}) {
    const [amount, setAmount] = useState(0);

    return <AmountContext.Provider value={[amount, setAmount]}>
        {children}
    </AmountContext.Provider>
}
