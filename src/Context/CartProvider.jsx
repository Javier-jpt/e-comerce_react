import { useState } from "react";
import { CartContext } from "./CartContext";

function CartProvider ({children}) {

    const [cart, setCart] = useState([])

    const updateCart = (product) => {
        setCart([...cart, product])
    }

    const removeCart = (updateCart) => {
        setCart(updateCart)
    }

    return (
        <CartContext.Provider value={{ cart, updateCart, removeCart}}>
            {children} 
        </CartContext.Provider>
    )
}

export default CartProvider;