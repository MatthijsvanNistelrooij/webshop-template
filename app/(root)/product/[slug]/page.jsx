"use client"
import React, { useState, useEffect } from "react"
import {
  AiFillPlusCircle,
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineCheck,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlinePlusSquare,
} from "react-icons/ai"

import { useStateContext } from "../../../../context/StateContext"
import { client, urlFor } from "../../../../sanity/lib/client"
import { ChevronUp } from "lucide-react"
import BestSellers from "../../../../components/BestSellers"

const fetchProductAndRelated = async (slug) => {
  try {
    const productQuery = `*[_type == "product" && slug.current == $slug][0]`
    const productsQuery = '*[_type == "product"]'

    const product = await client.fetch(productQuery, { slug })
    const products = await client.fetch(productsQuery)

    return { product, products }
  } catch (error) {
    console.error("Error fetching product data:", error)
    return { product: null, products: [] }
  }
}

const ProductDetails = ({ params }) => {
  const [products, setProducts] = useState([])
  const [product, setProduct] = useState(null)
  const { slug } = params

  const [index, setIndex] = useState(0)

  const {
    decQty,
    incQty,
    qty,
    onAdd,
    setShowCart,
    cartItems,
    toggleCartItemQuantity,
  } = useStateContext()

  useEffect(() => {
    const fetchData = async () => {
      const { product: fetchedProduct, products: fetchedProducts } =
        await fetchProductAndRelated(slug)

      setProduct(fetchedProduct)
      setProducts(fetchedProducts)
    }

    fetchData()
  }, [slug])

  const { image, name, details, details2, details3, price } = product || {}
  const images = products.flatMap((prod) => prod.image)

  const handleBuyNow = () => {
    onAdd(product, qty)

    setShowCart(true)
  }

  return (
    <>
      <section className="mid-container mt-20">
        <div className="flex flex-col lg:flex-row gap-5 p-4 lg:p-0">
          <div className="flex-1 w-full lg:min-w-[744px] p-4">
            {image && image[index] && (
              <img
                src={urlFor(image[index]).url()}
                className="lg:min-w-[500px] lg:min-h-[500px]"
                alt={name || "Product Image"}
              />
            )}
          </div>
          <div className="flex flex-col w-full lg:min-w-[300px] p-4 text-black justify-between">
            <div>
              <h2 className="text-4xl font-light mb-4">{name}</h2>
              <p className="flex text-sm mb-2 mt-2 gap-2">
                <AiOutlineCheck className="check-icon" />
                {details}
              </p>
              <p className="flex text-sm mb-2 gap-2">
                <AiOutlineCheck className="check-icon" />
                {details2}
              </p>
              <p className="flex text-sm mb-4 gap-2">
                <AiOutlineCheck className="check-icon" />
                {details3}
              </p>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center w-20 mb-2">
                <div className="flex items-center justify-between flex-row">
                  <button
                    className="flex items-center justify-center w-8 h-8 bg-[#a6d8c1] hover:shadow-lg hover:bg-[#5e9c7f]"
                    onClick={incQty}
                  >
                    <AiOutlinePlus />
                  </button>
                  <div className="flex items-center justify-center mx-2 ">
                    {qty}
                  </div>
                  <button
                    className="flex items-center justify-center w-8 h-8 hover:shadow-lg  bg-[#a6d8c1] hover:bg-[#5e9c7f]"
                    onClick={decQty}
                  >
                    -
                  </button>
                </div>
              </div>
              <button
                className="flex flex-row border w-full items-center justify-between p-4"
                onClick={() => onAdd(product, qty)}
              >
                <h3 className="font-light text-xl">1KG - €{price}</h3>
                <div className="flex flex-row items-center gap-3 font-light text-black">
                  <h2>Voeg toe</h2>
                  <AiFillPlusCircle />
                </div>
              </button>
            </div>
          </div>
        </div>
        <h1 className="text-white text-4xl -mb-10 mt-10 text-center">
          Meest verkocht:
        </h1>
        <BestSellers
          products={products}
          title={"Onze Bestsellers"}
          wordsToHighlight={"Bestsellers"}
        />
      </section>
    </>
  )
}

export default ProductDetails
