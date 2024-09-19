"use client"

import Link from "next/link"
import { AiFillShopping, AiOutlineShoppingCart } from "react-icons/ai"

import { useStateContext } from "../../context/StateContext"
import { shop_app } from "../../public/assets/images"

import { navLinks } from "../../constants"
import { Menu } from "@headlessui/react"

import Image from "next/image"
import Cart from "../Cart"

import { ChevronDown } from "lucide-react"

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext()

  const sortedNavLinks = navLinks.map((link, idx) => (
    <div key={idx}>
      <a
        href={link.path}
        className="flex items-center font-light space-x-2 px-4 py-2 ml-4 text-black border border-white hover:border-black"
      >
        {link.name}
      </a>
    </div>
  ))

  return (
    <header className="w-full p-6 bg-white h-[116px] text-white sticky top-0 z-50 border-b shadow-lg">
      <nav className="flex justify-between items-center mid-container bg-white">
        <Link
          href="/"
          className="ml-0 p-5 bg-[#a6d8c1] hover:bg-[#5e9c7f] text-black"
        >
          SHOP
        </Link>

        <div className="flex flex-row">
          {sortedNavLinks}
          <Menu as="div" className="relative inline-block text-left -mt-4">
            <div>
              <Menu.Button className="flex items-center space-x-2 px-4 py-2 mt-4 ml-2 text-black border border-white hover:border-black">
                <span>Producten</span>
                <ChevronDown className="w-5 h-5" />
              </Menu.Button>
            </div>
            <Menu.Items className="absolute right-0 w-48 mt-2 bg-white shadow-lg">
              <Menu.Item>
                {({ active, idx }) => (
                  <a
                    href="#"
                    key={idx}
                    className={`block px-4 py-2 ${active ? "bg-gray-500" : "text-gray-700"}`}
                  >
                    Option 1
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={`block px-4 py-2 ${active ? "bg-gray-500" : "text-gray-700"}`}
                  >
                    Option 2
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={`block px-4 py-2 ${active ? "bg-gray-500" : "text-gray-700"}`}
                  >
                    Option 3
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
        <button
          type="button"
          className="p-5 border flex flex-row gap-2 text-black border-white hover:border-black"
          onClick={() => setShowCart(true)}
        >
          <AiFillShopping className="text-4xl" />
          <span className="text-black px-3 mt-2">{totalQuantities}</span>
        </button>

        {showCart && <Cart />}
      </nav>
    </header>
  )
}

export default Navbar
