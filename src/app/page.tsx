"use client"

import { ProductType } from "./types/ProductType"
import Product from "./components/Product"
import { useEffect, useState } from "react"
import Spinner from "./components/Spinner"

export default function Home() {
  const [ productsList, setProductsList ] = useState([])
  const [ isLoading, setIsLoading ] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products")

        if (!res.ok) {
          throw new Error("Failed to fetch data")
        }

        const products = await res.json()
        setProductsList(products)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProducts()
  }, [])


  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner />
      </div>
    )
  }

  if (productsList.length === 0) {
    return <div className="flex justify-center items-center min-h-screen">Não há produtos disponíveis.</div>
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
