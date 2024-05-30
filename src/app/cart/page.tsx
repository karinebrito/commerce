"use client"

import { useCart } from "../context/CartContext"
import CartProductItem from "../components/CartProductItem"

const Cart = () => {
  const { cartItems, clearCart } = useCart()

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
                <CartProductItem key={product.id} product={product} index={index} />
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
