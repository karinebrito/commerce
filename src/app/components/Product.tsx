"use client"

import { ProductType } from "../types/ProductType"
import ProductImage from "./ProductImage"
import { useCart } from "../context/CartContext"
import { useState, useEffect } from "react"

type ProductProps = {
  product: ProductType
}

export default function Product({ product }: ProductProps) {
  const { addToCart, removeFromCart, cartItems } = useCart()
  const [ addedToCart, setAddedToCart ] = useState(false)

  useEffect(() => {
    setAddedToCart(cartItems.some((item) => item.id === product.id))
  }, [cartItems, product.id])

  const handleAddToCart = () => {
    if (!addedToCart) {
      addToCart(product)
      setAddedToCart(true)
    } else {
      removeFromCart(product)
      setAddedToCart(false)
    }
  }

  return (
    <div className="flex flex-col rounded-md shadow-lg h-96 bg-white p-5">
      <div className="relative max-h-72 flex-1">
        <ProductImage product={product} />
      </div>
      <div className="font-semibold my-3 w-50 truncate">{product.title}</div>
      {product.price && (
        <div className="flex justify-center font-semibold my-3 text-gray-500">
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </div>
      )}
      <div className="w-full md:w-auto flex items-center justify-center">
       <button
          className={`w-full flex items-center justify-center rounded-full font-semibold text-sm text-center border px-4 py-2 ${addedToCart ? 'text-red-500' : 'text-green-500'}`}
          onClick={handleAddToCart}
        >
          <span>{addedToCart ? "Remover" : "Adicionar"}</span>
        </button>
      </div>
    </div>
  )
}
