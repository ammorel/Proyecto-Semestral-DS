import { createContext, ReactNode, useContext } from "react"
import React from 'react'
import { useLocalStorage } from "./useLocalStorage.tsx";

type CarritoProviderProps = {
    children: ReactNode
}

type CartItem = {
    id: number
    cantidad: number
}
type CarritoContext = {
    getItemQuantity: (id:number) => number
    increaseItemQuantity: (id:number) => void
    decreaseItemQuantity: (id:number) => void
    removeFromCart: (id:number) => void
    cartQuantity: number
    cartItems: CartItem[]
}
const Carrito = createContext({} as CarritoContext)
export function useCarrito() {
    return useContext(Carrito)
}


export function CarritoProvider( { children }:CarritoProviderProps) {
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
        "shopping-cart",
        []
    )
    const cartQuantity = cartItems.reduce((cantidad, item) => 
    item.cantidad + cantidad, 0
    )

    function getItemQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.cantidad || 0
    }
    function increaseItemQuantity(id: number) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id) == null) {
                return [...currItems, { id, cantidad: 1}]
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return {...item, cantidad: item.cantidad + 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }
    function decreaseItemQuantity(id: number) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id)?.cantidad === 1) {
                return currItems.filter(item => item.id !== id)
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return {...item, cantidad: item.cantidad - 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }
    function removeFromCart(id:number) {
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }
    return <Carrito.Provider value={{ getItemQuantity, increaseItemQuantity, decreaseItemQuantity, removeFromCart, cartQuantity, cartItems}}>{children}</Carrito.Provider>
}