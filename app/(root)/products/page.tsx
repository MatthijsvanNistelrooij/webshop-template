"use client"
import { useEffect, useState } from "react"

import ProductCard from "../../../components/ProductCard"
import { client } from "../../../sanity/lib/client"
import { useStateContext } from "../../../context/StateContext"

const Products = () => {
  const [products, setProducts] = useState([])
  const [bannerData, setBannerData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const query = '*[_type == "product"]'
      const products = await client.fetch(query)
      setProducts(products)

      const bannerQuery = '*[_type == "banner"]'
      const bannerData = await client.fetch(bannerQuery)
      setBannerData(bannerData)
    }

    fetchData()
  }, [])

  const { onAdd } = useStateContext()

  return (
    <section className="max-container my-20">
      <div className="flex flex-row justify-between items-center mid-container mt-10">
        {products.map((item) => (
          <ProductCard key={item._id} product={item} onAdd={onAdd} />
        ))}
      </div>
      <div className="flex flex-row justify-between items-center mid-container mt-10">
        {products.map((item) => (
          <ProductCard key={item._id} product={item} onAdd={onAdd} />
        ))}
      </div>
      <div className="flex flex-row justify-between items-center mid-container mt-10">
        {products.map((item) => (
          <ProductCard key={item._id} product={item} onAdd={onAdd} />
        ))}
      </div>
    </section>
  )
}

export default Products
