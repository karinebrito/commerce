"use client"

import { useCart } from "../context/CartContext"
import Image from "next/image"
import RemoveIcon from "../../../public/remove.svg"
import { ProductType } from "../types/ProductType"

interface CartProductItemProps {
  product: ProductType
  index: number
}

const CartProductItem: React.FC<CartProductItemProps> = ({ product, index }) => {
  const { removeFromCart, cartItems } = useCart()

  return (
    <li key={product.id} className={`flex flex-col sm:flex-row justify-between items-center mb-4 pb-4 border-b ${index === cartItems.length - 1 ? 'border-none' : 'border-gray-200'}`}>
      <div className="flex flex-col sm:flex-row items-center w-full space-y-2 sm:space-y-0 sm:space-x-4 mb-2 sm:mb-0">
        <Image src={product.image} alt={product.title} width={50} height={50} className="object-cover rounded"/>
        <div className="flex-1 text-center sm:text-left">
          <span className="block">{product.title}</span>
          {product.price !== null && (
            <div className="text-sm text-gray-500">
              {product.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </div>
          )}
        </div>
      </div>
      <button 
        onClick={() => removeFromCart(product)} 
        className="text-red-500 bg-white border border-red-500 rounded-full p-1"
      >
        <RemoveIcon size={24} className="text-red-500" />
      </button>
    </li>
  )
}

export default CartProductItem
