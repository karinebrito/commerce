"use client"

import React, { createContext, useContext, useState, ReactNode } from "react"
import { ProductType } from "../types/ProductType"

type CartContextType = {
  cartItems: ProductType[]
  addToCart: (item: ProductType) => void
  removeFromCart: (item: ProductType) => void
  getItemCount: () => number
}

const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  getItemCount: () => 0,
})

export const useCart = () => useContext(CartContext)

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<ProductType[]>([])

  const addToCart = (item: ProductType) => {
    setCartItems((prevItems) => [...prevItems, item])
    console.log("Adicionando ao carrinho:", item)
  }

  const removeFromCart = (item: ProductType) => {
    console.log("Removendo do carrinho:", item)
    setCartItems((prevItems) =>
      prevItems.filter((cartItem) => cartItem.id !== item.id)
    )
  }

  const getItemCount = () => cartItems.length

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, getItemCount }}>
      {children}
    </CartContext.Provider>
  )
}