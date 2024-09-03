"use client"
import { client } from "../../sanity/lib/client"
import { useEffect, useState } from "react"
import { BestSellers, Hero } from "../../components/index"
import banner from "../../sanity/schemaTypes/banner"

const Home = () => {
  const [products, setProducts] = useState([])
  const [bannerData, setBannerData] = useState([])

  const bannerImage = useEffect(() => {
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

  return (
    <>
      <Hero heroBanner={bannerData.length && bannerData[0]} />

      <BestSellers
        products={products}
        title={"Onze Bestsellers"}
        wordsToHighlight={"Bestsellers"}
      />
    </>
  )
}

export default Home
