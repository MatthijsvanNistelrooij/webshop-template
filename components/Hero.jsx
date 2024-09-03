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
          <h3>{heroBanner?.midText}</h3>
          <h1>{heroBanner?.largeText1}</h1>
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
            <Link href={`/products`}>
              <button type="button" className="flex flex-row gap-3">
                {heroBanner.buttonText}
                <AiOutlineArrowRight />
              </button>
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
