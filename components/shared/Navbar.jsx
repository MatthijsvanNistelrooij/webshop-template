"use client"

import Link from "next/link"
import { AiFillShopping, AiOutlineShoppingCart } from "react-icons/ai"

import { useStateContext } from "../../context/StateContext"
import { vector, shopbutton, shop_app } from "../../public/assets/images"

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
        className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-600  ml-4"
      >
        {link.name}
      </a>
    </div>
  ))

  return (
    <header className="w-full p-6 bg-gray-400 h-[116px] text-white sticky top-0 z-50">
      <nav className="flex justify-between items-center mid-container bg-gray-400">
        <Link href="/" className="ml-0">
          <Image src={shop_app} width={100} height={80} alt="logo" />
        </Link>

        <div className="flex flex-row">
          {sortedNavLinks}
          <Menu as="div" className="relative inline-block text-left -mt-4">
            <div>
              <Menu.Button className="flex items-center space-x-2 px-4 py-2  hover:bg-gray-600 mt-4 ml-2">
                <span>Producten</span>
                <ChevronDown className="w-5 h-5" />
              </Menu.Button>
            </div>
            <Menu.Items className="absolute right-0 w-48 mt-2 bg-white border border-gray-200 shadow-lg">
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
          className="p-5 border border-gray-100  hover:bg-slate-600 flex flex-row gap-2 hover:border-gray-700"
          onClick={() => setShowCart(true)}
        >
          <AiFillShopping className="text-4xl" />
          <span className="bg-gray-800 text-white px-3 mt-2">
            {totalQuantities}
          </span>
        </button>

        {showCart && <Cart />}
      </nav>
    </header>
  )
}

export default Navbar
