"use client"
import React, { useState, useEffect } from "react"
import Link from "next/link"
import { BsBagCheckFill } from "react-icons/bs"

import { useStateContext } from "../../../context/StateContext"

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext()

  useEffect(() => {
    localStorage.clear()
    setCartItems([])
    setTotalPrice(0)
    setTotalQuantities(0)
  }, [])

  return (
    <>
      <div className="success-wrapper">
        <div className="success">
          <p className="icon">
            <BsBagCheckFill />
          </p>
          <h2>Order Geannuleerd!</h2>
          <p className="email-msg">Kijk in je inbox voor meer informatie.</p>
          <p className="description">
            Voor vragen email
            <a className="email" href="mailto:order@example.com">
              info@example.com
            </a>
          </p>
          <Link href="/">
            <button type="button" width="300px" className="btn">
              Terug naar winkelen
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Success
