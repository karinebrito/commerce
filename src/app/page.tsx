"use client"

import { ProductType } from "./types/ProductType"
import Product from "./components/Product"
import { useEffect, useState } from "react"



export default function Home() {
  const [ productsList, setProductsList ] = useState([])
  const [ isLoading, setIsLoading ] = useState(true)

  useEffect( () => {
    const fetchProducts = async () => {
      setIsLoading(true)
      const res = await fetch("https://fakestoreapi.com/products")
    
      if (!res.ok) {
        throw new Error("Failed to fetch data")
      }
    
      const products = await res.json()

      setIsLoading(false)
      setProductsList( products )
    }

    fetchProducts()
  }, [] )

  if(isLoading) {
    return <div>Loading...</div>
  }

  if(!isLoading && productsList.length === 0) {
    return <div>Não há produtos disponíveis</div>
  }

  return (
      <div className="max-w-7xl mx-auto pt-8 px-8 xl:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 xl:gap-6">
          {productsList.map((product: ProductType) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
  )
}
