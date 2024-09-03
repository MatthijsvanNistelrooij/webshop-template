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

  return (
    <header className="w-full p-6 bg-gray-400 h-[116px] text-white sticky top-0 z-50">
      <nav className="flex justify-between items-center mid-container bg-gray-400">
        <Link href="/" className="ml-0">
          <Image src={shop_app} width={100} height={80} alt="logo" />
        </Link>

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
