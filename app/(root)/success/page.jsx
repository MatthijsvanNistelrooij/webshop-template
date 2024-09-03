"use client"
import React, { useEffect } from "react"

import { success } from "../../../public/assets/images"
import { useStateContext } from "../../../context/StateContext"
import { runFireworks } from "../../../lib/utils"
import Image from "next/image"
import { Navbar } from "../../../components"

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext()

  useEffect(() => {
    localStorage.clear()
    setCartItems([])
    setTotalPrice(0)
    setTotalQuantities(0)
    runFireworks()
  }, [])

  return (
    <>
      <div className="success-wrapper">
        <Image src={success} width={1450} height={550} alt="success image" />
      </div>
    </>
  )
}

export default Success
