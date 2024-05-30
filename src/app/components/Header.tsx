"use client"

import Link from "next/link"
import ShoppingCartIcon from "../../../public/shopping-cart.svg"
import BackLeftArrow from "../../../public/back-left-arrow.svg"
import { useCart } from "../context/CartContext"
import { usePathname, useRouter } from "next/navigation"

const Header = () => {
  const { getItemCount } = useCart()
  const itemCount = getItemCount()
  const pathname = usePathname()
  const router = useRouter()

  return (
    <div className="fixed w-full flex items-center justify-between top-0 z-50 p-4 bg-white shadow-md">
      <div className="flex items-center">
        {pathname === '/cart' ? (
          <button type="button" onClick={() => router.back()} className="mr-2">
            <BackLeftArrow/>
          </button>
        ) : (
          <Link 
            href="/" 
            className="uppercase font-semibold text-md flex items-center text-black"
          >
            Commerce
          </Link>
        )}
      </div>
      <div className="space-x-4 text-sm flex items-center">
        <div className="relative">
          <Link href="/cart">
            <ShoppingCartIcon 
              size={26} 
              className="text-black cursor-pointer" 
              aria-label="Shopping Cart Icon" 
            />
          </Link>
          {itemCount > 0 && (
            <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center px-2 py-1 text-xs font-semibold leading-none text-red-100 bg-red-600 rounded-full">
              {itemCount}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
