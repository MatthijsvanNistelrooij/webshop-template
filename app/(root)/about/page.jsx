import Image from "next/image"
import React from "react"
import { meeting } from "../../../public/assets/images"

const About = () => {
  return (
    <div className="mid-container h-screen">
      <div className="flex flex-col md:flex-row mt-20 mid-container">
        <div className="flex-1 flex items-start">
          <Image src={meeting} width={"full"} height={"auto"} alt="logo" />
        </div>

        <div className="flex-1 flex flex-col justify-start px-5">
          <p className="text-4xl text-slate-200 text-start mb-4 ">Lorem Ipsum</p>
          <p className="text-2xl text-slate-300 text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            aperiam similique cumque nesciunt aspernatur neque consequuntur
            minima? Repellendus ullam dolor praesentium cumque. Debitis magni
            labore ullam, repellat at dolore neque.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
