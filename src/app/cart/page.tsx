"use client"

import { useCart } from "../context/CartContext"
import Image from "next/image"
import RemoveIcon from "../../../public/remove.svg"

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart()

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-6 md:p-10">
      <div className="w-full sm:max-w-md md:max-w-2xl lg:max-w-4xl p-4 sm:p-6 md:p-10 bg-white rounded-lg shadow-md">
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Nenhum produto selecionado.</p>
        ) : (
          <>
            <p className="text-base sm:text-lg font-semibold mb-4">
              {cartItems.length} {cartItems.length === 1 ? "produto selecionado" : "produtos selecionados"}
            </p>
            <ul>
              {cartItems.map((product, index) => (
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
              ))}
            </ul>
            <div className="flex justify-end mt-4">
              <button onClick={clearCart} className="text-black rounded-full font-semibold text-sm text-center border px-4 py-2">
                Limpar Carrinho
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Cart
