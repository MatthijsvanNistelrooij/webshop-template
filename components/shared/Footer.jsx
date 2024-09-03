import React from "react"
import { footerLinks } from "../../constants"
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineX,
} from "react-icons/ai"
import Link from "next/link"

const Footer = () => {
  return (
    <div className="bg-black h-[400px] mt-20 text-white ">
      <footer className="mid-container mt-20">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-3">
            <p className="text-2xl space-x-3">Get Started</p>
            <p className="text-gray-400">sdfsdfdf</p>
            <p className="text-gray-400">sdfsdfdf</p>
            <p className="text-gray-400">sdfsdfdf</p>
            <p className="text-gray-400">sdfsdfdf</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-2xl space-x-3">About</p>
            <p className="text-gray-400">sdfsdfdf</p>
            <p className="text-gray-400">sdfsdfdf</p>
            <p className="text-gray-400">sdfsdfdf</p>
            <p className="text-gray-400">sdfsdfdf</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-2xl space-x-3">Connect With Us</p>
            <div className="flex flex-row gap-10 justify-center">
              <Link href={"/"} className="text-gray-400 text-2xl">
                <AiOutlineFacebook />
              </Link>
              <Link href={"/"} className="text-gray-400 text-2xl">
                <AiOutlineX />
              </Link>
              <Link href={"/"} className="text-gray-400 text-2xl">
                <AiFillInstagram />
              </Link>
            </div>
          </div>
        </div>
        <p className="text-center mt-14">
          @ 2024 copyright. All right reserved{" "}
        </p>
      </footer>
    </div>
  )
}

export default Footer
