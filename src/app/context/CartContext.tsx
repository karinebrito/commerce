"use client"

import React, { createContext, useContext, useState, ReactNode } from "react"
import { ProductType } from "../types/ProductType"

type CartContextType = {
  cartItems: ProductType[]
  addToCart: (item: ProductType) => void
  removeFromCart: (item: ProductType) => void
  clearCart: () => void
  getItemCount: () => number
}

const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  getItemCount: () => 0,
})

export const useCart = () => useContext(CartContext)

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<ProductType[]>([])

  const addToCart = (item: ProductType) => {
    setCartItems((prevItems) => [...prevItems, item])
  }

  const removeFromCart = (item: ProductType) => {
    setCartItems((prevItems) =>
      prevItems.filter((cartItem) => cartItem.id !== item.id)
    )
  }

  const clearCart = () => {
    setCartItems([])
  }

  const getItemCount = () => cartItems.length
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, getItemCount, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}