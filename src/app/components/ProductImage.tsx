"use client"

import Image from "next/image"
import { ProductType } from "../types/ProductType"
import { useState } from "react"

type ProductImageProps = {
    product: ProductType
    fill?:boolean
}

export default function ProductImage({ product, fill }: ProductImageProps){
    const [loading, setLoading] = useState(true)

    return (
        <Image 
            src={product.image} 
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 35vw"
            alt={product.title}
            className={`object-cover ${
                loading ? 'scale-110 blur-md grayscale' : ''
            }`}
            onLoad={() => setLoading(false)}
        />
    )
}