import { createContext, ReactNode, useContext, useState } from "react"
import React from 'react'

type CarritoContext = {
    getItemQuantity: (id:number) => number
    increaseItemQuantity: (id:number) => void
    decreaseItemQuantity: (id:number) => void
    removeFromCart: (id:number) => void
    cartQuantity: number
    cartItems: CartItem[]
}
const CarritoContext = createContext({} as CarritoContext)

export function useCarrito() {
    return useContext(CarritoContext)
}

type CarritoProviderProps = {
    children: ReactNode
}
type CartItem = {
    id: number
    cantidad: number
}
export function CarritoProvider( { children }:CarritoProviderProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>([])
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
    return <CarritoContext.Provider value={{ getItemQuantity, increaseItemQuantity, decreaseItemQuantity, removeFromCart, cartItems, cartQuantity}}>{children}</CarritoContext.Provider>
}