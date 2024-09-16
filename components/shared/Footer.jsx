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
    <div className="bg-gray-900 h-[400px] mt-20 text-white ">
      <footer className="bg-gray-900 text-white py-8 h-[400px]  mid-container">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="flex flex-col">
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
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
              <h3 className="font-bold text-lg mb-4">Support</h3>
              <ul className="space-y-2">
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
              <h3 className="font-bold text-lg mb-4">Follow Us</h3>
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
