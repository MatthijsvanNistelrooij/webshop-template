import Image from "next/image"
import React from "react"
import { capsule_bottle } from "../public/assets/images"
import { like, plus, shopping_bag } from "../public/assets/icons"
import Link from "next/link"
import { urlFor } from "../sanity/lib/client"
import { AiFillPlusSquare, AiFillShopping } from "react-icons/ai"
import product from "../sanity/schemaTypes/product"

const ProductCard = ({ product, onAdd }) => {
  console.log(product)

  return (
    <div className="group p-10 bg-white relative hover:bg-[#CBE7F6] shadow-lg min-w-[387px] w-[387px] cursor-pointer">
      <Link href={`/product/${product.slug.current}`} className="">
        <div className="relative bg-[#CBE7F6]  h-32 mt-40 group-hover:bg-[#2D679D] group-hover:h-72 group-hover:mt-0 flex items-center justify-center">
          <Image
            src={urlFor(product.image[0]).url()}
            alt={"capsule_bottle"}
            className="w-100 h-auto absolute bottom-0 rounded-md"
            width={200}
            height={200}
          />
        </div>
      </Link>

      <div className="flex flex-col ">
        <h1 className="text-[#1E285F] text-2xl font-bold mt-2">
          {product.name}
        </h1>
        <div className="flex flex-row justify-between mt-10">
          <h1 className="text-[#006CEB] font-bold mt-4">{product.price} ,-</h1>
          <button
            className="bg-[#2D679D] flex flex-row p-2 gap-3 text-white text-4xl"
            onClick={() => onAdd(product, 1)}
          >
            <AiFillPlusSquare />
            <AiFillShopping />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
