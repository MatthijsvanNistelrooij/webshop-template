"use client"
import React, { useRef } from "react"
import Link from "next/link"
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
  AiFillDelete,
  AiFillX,
  AiOutlineArrowLeft,
} from "react-icons/ai"
import { TiDeleteOutline } from "react-icons/ti"
import toast from "react-hot-toast"

import { useStateContext } from "../context/StateContext"

import getStripe from "../lib/getStripe"
import { urlFor } from "../sanity/lib/client"

const Cart = () => {
  const cartRef = useRef()
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQuantity,
    onRemove,
  } = useStateContext()

  const handleCheckout = async () => {
    const stripe = await getStripe()
    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cartItems }),
    })

    if (response.statusCode === 500) return

    const data = await response.json()
    toast.loading("Redirecting...")
    stripe.redirectToCheckout({ sessionId: data.id })
  }

  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="h-[100vh] w-[40vw] float-end bg-white p-5 pt-1 overflow-scroll text-black">
        <button
          type="button"
          className="w-full mb-1 "
          onClick={() => setShowCart(false)}
        >
          <div className="flex flex-row">
            <AiOutlineArrowLeft className="mt-2" />
            <span className="text-sm font-light m-2">Terug naar winkelen</span>
          </div>
        </button>

        {cartItems.length < 1 && (
          <div className="flex flex-col items-center justify-center p-10 text-center min-h-screen">
            <AiOutlineShopping size={150} />
            <h3 className="mt-4">Je winkelmandje is nog leeg</h3>
            <Link href="/">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className="btn border border-gray-200 p-3 mt-4"
              >
                Terug naar winkelen
              </button>
            </Link>
          </div>
        )}

        <div className="">
          {cartItems.length >= 1 && (
            <div className="flex w-full justify-between mb-10 mt-10">
              <span className="text-black font-bold text-3xl">
                Winkelmandje
              </span>
              <span className="flex font-bold text-black mt-3">
                {totalQuantities} items
              </span>
            </div>
          )}

          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <div key={item._id}>
                <hr className="text-3xl" />
                <div className="flex items-center justify-between p-5 font-bold">
                  <div className="flex items-center">
                    <img src={urlFor(item?.image[0]).url()} className="w-20" />
                  </div>
                  <div className="flex items-center w-32 mx-2">{item.name}</div>
                  <div className="flex items-center w-32 mx-2">
                    <div className="flex items-center justify-between flex-1">
                      <button
                        className="flex items-center justify-center w-8 h-8 border border-gray-200 hover:shadow-lg hover:bg-gray-400"
                        onClick={() => toggleCartItemQuantity(item._id, "dec")}
                      >
                        <AiOutlineMinus />
                      </button>
                      <div className="flex items-center justify-center border border-gray-200 w-8 h-8 mx-2">
                        {item.quantity}
                      </div>
                      <button
                        className="flex items-center justify-center w-8 h-8 border border-gray-200 hover:shadow-lg hover:bg-gray-400"
                        onClick={() => toggleCartItemQuantity(item._id, "inc")}
                      >
                        <AiOutlinePlus />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center mx-2">
                    € {item.price} ,-
                  </div>
                  <div className="flex items-center mx-2">
                    <button
                      type="button"
                      className="flex items-center justify-center w-8 h-8 border border-gray-200 hover:shadow-lg hover:bg-red-600 hover:text-white "
                      onClick={() => onRemove(item)}
                    >
                      <AiFillDelete />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="">
            <hr />
            <div className="flex flex-row font-bold gap-20 text-2xl p-10 pl-5 justify-end">
              <h3 className="tracking-tighter">TOTAAL</h3>
              <h3>€ {totalPrice},00</h3>
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                className="p-4 bg-black text-white mt-10 w-80 hover:shadow-lg"
                onClick={handleCheckout}
              >
                Betaal met Stripe
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
