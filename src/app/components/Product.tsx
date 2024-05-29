"use client"

import { ProductType } from "../types/ProductType"
import ProductImage from "./ProductImage"
import ShoppingCartIcon from "../../../public/shopping-cart.svg"


type ProductProps = {
    product: ProductType
}

export default function Product({ product }: ProductProps) {

    return(
        <div className="flex flex-col rounded-md shadow-lg h-96 bg-white p-5">
            <div className="relative max-h-72 flex-1">
                <ProductImage product={product} fill />
            </div>
            <div className="font-bold my-3 w-50 truncate">{product.title}</div>
            {product.price && (
                <div className="flex justify-between font-bold my-3 text-purple-500">
                    {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </div>
            )}
            <div className="w-full md:w-auto flex items-center justify-center">
                <button className="flex items-center justify-center rounded-md font-bold text-sm text-center text-black border px-4 py-2">
                    <span>Comprar</span>
                    <ShoppingCartIcon                     
                        size={16} 
                        className="ml-2 text-black cursor-pointer hidden md:block" 
                    />
                </button>
            </div>
        </div>
    )
}