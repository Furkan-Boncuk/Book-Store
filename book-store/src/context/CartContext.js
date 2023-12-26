import { createContext, useContext, useReducer } from "react";

const CartContext = createContext()

// reducer
const cartReducer = (state, action) => {
    switch(action.type) {
        case "addItemToCart":
            return {...state, items: [...state.items, action.payload]}
        case "removeItemFromCart":
            return {...state, items: state.items.filter((item) => item.id !== action.payload)}
        default:
            return state
    }
}

export const CartProvider = ({children}) => {
    const [cartState, dispatch] = useReducer(cartReducer, {items: []})

    const addItemToCart = (book) => {
        dispatch({type:"addItemToCart", payload: book})
    }

    const removeItemFromCart = (book) => {
        dispatch({type:"removeItemFromCart", payload: book})
    }

    return (
        <CartContext.Provider value={{cartState, addItemToCart, removeItemFromCart}}>
            {children}
        </CartContext.Provider>
    )
}

// custom hook
export const useCart = () => {
    const context = useContext(CartContext)
    if(!context) throw new Error();
    return context
}
