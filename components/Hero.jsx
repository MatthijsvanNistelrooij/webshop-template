import React from "react"

import {
  arrow_right,
  arrow_right_circle,
  check_green,
  shopping_bag,
} from "../public/assets/icons"
import InfoCard from "./InfoCard"
import { AiOutlineArrowRight } from "react-icons/ai"
import Image from "next/image"
import { urlFor } from "../sanity/lib/client"
import Link from "next/link"

const Hero = ({ heroBanner }) => {
  console.log("heroBanner", heroBanner)

  return (
    <section className="p-5 lg:p-0 mid-container my-20">
      <div className="hero-banner-container h-full">
        <div>
          <p className="beats-solo">{heroBanner?.smallText}</p>
          <h3 className="text-black">{heroBanner?.midText}</h3>
          <h1 className="text-black">{heroBanner?.largeText1}</h1>
          {heroBanner ? (
            <img
              src={urlFor(heroBanner.image)}
              alt="hero-banner-image"
              className="hero-banner-image"
            />
          ) : (
            <div>Image</div>
          )}
          <div>
            <Link href={`/products`} className="bg-[#a6d8c1] hover:bg-[#5e9c7f] flex flex-row w-40 p-5 -ml-3 gap-2">
              {heroBanner.buttonText}
              <AiOutlineArrowRight />
            </Link>
            <div className="desc">
              <h5>Description</h5>
              <p>{heroBanner.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
