import React from "react"
import {
  stock_party_2,
  stock_party_3,
  stock_party_5,
} from "../../../public/assets/images"
import Image from "next/image"

const Faq = () => {
  return (
    <div className="relative h-full mid-container">
      <div className="relative mt-10">
        <Image src={stock_party_3} className="w-full flex " alt="logo" />
        <div className="absolute right-0 top-1/2 bg-white w-1/2 p-10 ">
          <p className="text-4xl font-light text-[#5e9c7f] mb-4">Lorem Ipsum</p>
          <p className="text-sm text-[#5e9c7f]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            aperiam similique cumque nesciunt aspernatur neque consequuntur
            minima? Repellendus ullam dolor praesentium cumque. Debitis magni
            labore ullam, repellat at dolore neque.
          </p>
          <button className="bg-[#a6d8c1] hover:bg-[#5e9c7f] p-3 px-6 mt-4">
            Meer
          </button>
        </div>
      </div>
      <div className="relative mt-10">
        <Image src={stock_party_5} className="w-full flex " alt="logo" />
        <div className="absolute left-0 top-1/2 bg-white w-1/2 p-10 ">
          <p className="text-4xl font-light text-[#5e9c7f] mb-4">Lorem Ipsum</p>
          <p className="text-sm text-[#5e9c7f]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            aperiam similique cumque nesciunt aspernatur neque consequuntur
            minima? Repellendus ullam dolor praesentium cumque. Debitis magni
            labore ullam, repellat at dolore neque.
          </p>
          <button className="bg-[#a6d8c1] hover:bg-[#5e9c7f] p-3 px-6 mt-4">
            Meer
          </button>
        </div>
      </div>
    </div>
  )
}

export default Faq
