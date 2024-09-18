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
    <div className="bg-black lg:h-[300px] h-full mt-20 text-white">
      <footer className="bg-black text-white py-8 lg:h-[300px] h-full mid-container">
        <div className="container mx-auto mt-5">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="flex flex-col">
              <h3 className="font-bold text-lg mb-8">Company</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold text-lg mb-8">Support</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Help Center
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col">
              <h3 className="font-bold text-lg mb-8">Follow Us</h3>
              <div className="flex gap-4 justify-start">
                <Link
                  href="#"
                  className="text-gray-400 text-2xl hover:text-white"
                >
                  <AiOutlineFacebook />
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 text-2xl hover:text-white"
                >
                  <AiOutlineX />
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 text-2xl hover:text-white"
                >
                  <AiFillInstagram />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
