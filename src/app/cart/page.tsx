"use client"

import { useCart } from "../context/CartContext"
import { FiX } from "react-icons/fi" 
import Image from "next/image"

const Cart = () => {
  const { cartItems, removeFromCart } = useCart()

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl p-10 bg-white rounded-lg shadow-md">
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Nenhum produto selecionado.</p>
        ) : (
          <>
            <p className="text-xl font-semibold mb-4">{cartItems.length} produtos selecionados:</p>
            <ul>
              {cartItems.map((product) => (
                <li key={product.id} className="flex justify-between items-center mb-2">
                  <div className="flex items-center space-x-4">
                    <Image src={product.image} alt={product.title} width={50} height={50} className="object-cover rounded"/>
                    <div>
                      <span>{product.title}</span>
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
                    className="text-red-500 bg-white border border-red-500 rounded-full p-2"
                  >
                    <FiX size={16} className="text-red-500" />
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex justify-end mt-4">
              <button className="text-black rounded-full font-bold text-sm text-center border px-4 py-2">
                Fechar Pedido
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Cart
