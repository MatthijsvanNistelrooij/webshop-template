import React from "react"
import ProductCard from "./ProductCard"
import Image from "next/image"
import { arrow_right_blue } from "../public/assets/icons"
import { AiOutlineArrowRight } from "react-icons/ai"

const BestSellers = ({ products, title, wordsToHighlight }) => {
  const styledTitle = title.split(new RegExp(`(${wordsToHighlight})`, "gi"))
  const highlightColor = "#a6d8c1"

  return (
    <section className="max-container">
      <div className="mid-container overflow-hidden">
        <h1 className="text-6xl font-light text-black leading-tight w-full ">
          {styledTitle.map((part, index) =>
            part.toLowerCase() === wordsToHighlight.toLowerCase() ? (
              <span key={index} style={{ color: highlightColor }}>
                {part}
              </span>
            ) : (
              part
            )
          )}
        </h1>
        <div className="marquee">
          <div className="maylike-products-container track p-10">
            {products.map((item) => (
              <ProductCard key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BestSellers
