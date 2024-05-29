"use client"

import Link from "next/link"
import ShoppingCartIcon from "../../../public/shopping-cart.svg"

const Header = () => {
    
return (
    <>
        <div className="fixed w-full flex items-center justify-between top-0 z-50 p-4 bg-white shadow-md">
            <Link 
                href="/" 
                className="uppercase font-bold text-md h-12 flex items-center text-black"
            >
                Commerce
            </Link>
            <div className="space-x-4 text-sm">
                <ShoppingCartIcon onClick={() => ('')} size={26} className="text-black cursor-pointer" aria-label="Shopping Cart Icon"/>
            </div>
        </div>
    </>
    )
}

export default Header