import { createContext, useContext, useReducer } from "react";

const CartContext = createContext()

// reducer
const cartReducer = (state, action) => {
    switch (action.type) {
        case "addItemToCart":
            const existingItem = state.items.find((item) => item.id === action.payload.id)

            if (existingItem) {
                // ürün sepette varsa piece değeri artsın
                return {
                    ...state,
                    items: state.items.map((item) =>
                        item.id === action.payload.id
                            ? { ...item, piece: item.piece + 1 }
                            : item
                    )
                }
            } else {
                // ürün sepette yoksa eklensin
                return {
                    ...state,
                    items: [...state.items, { ...action.payload, piece: 1 }]
                };
            }
        case "removeAllItemsFromCart":
            return { ...state, items: [] }
        case "increaseItem":
            return {
                ...state,
                items: state.items.map((item) =>
                    item.id === action.payload.id ?
                        { ...item, piece: (item.piece || 1) + 1 } :
                        item)
            }
        case "decreaseItem":
            return {
                ...state,
                items: state.items.map((item) =>
                    item.id === action.payload.id ?
                        { ...item, piece: (item.piece || 1) - 1 } :
                        item).filter((item) => item.piece > 0)
            }
        case "getTotalItems":
            let totalItems = 0
            state.items.forEach((item) => {
                totalItems+= (item.piece || 1)
            })
            return {
                ...state,
                totalItems: totalItems
            }
        case "getTotalPrice":
            let totalPrice = 0
            state.items.forEach((item) => {
                if(item?.saleInfo?.listPrice?.amount) {
                    totalPrice+= item?.saleInfo?.listPrice?.amount * item?.piece
                }
            })
            return {
                ...state,
                totalPrice: totalPrice
            }
        default:
            return state
    }
}

export const CartProvider = ({ children }) => {
    const [cartState, dispatch] = useReducer(cartReducer, {items: [], totalItems: 0, totalPrice: 0})

    const addItemToCart = (book) => {
        dispatch({type: "addItemToCart", payload: book})
    }

    const removeAllItemsFromCart = (book) => {
        dispatch({type: "removeAllItemsFromCart", payload: book})
    }

    const increaseItem = (book) => {
        dispatch({type: "increaseItem", payload: book})
    }

    const decreaseItem = (book) => {
        dispatch({type: "decreaseItem", payload: book})
    }

    const getTotalItems = () => {
        dispatch({type: "getTotalItems"})
    }

    const getTotalPrice = () => {
        dispatch({type: "getTotalPrice"})
    }
    
    return (
        <CartContext.Provider value={{ cartState, addItemToCart, removeAllItemsFromCart, increaseItem, decreaseItem, getTotalItems, getTotalPrice }}>
            {children}
        </CartContext.Provider>
    )
}

// custom hook
export const useCart = () => {
    const context = useContext(CartContext)
    if (!context) throw new Error();
    return context
}
