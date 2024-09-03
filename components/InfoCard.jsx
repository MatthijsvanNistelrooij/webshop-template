import React from "react"
import Image from "next/image"
import CustomButton from "./CustomButton"

const InfoCard = ({ title, bgColor, btnColor, btnBgColor, btnTitle }) => {
  return (
    <div
      className="h-52 text-2xl font-semibold"
      style={{
        backgroundColor: bgColor,
      }}
    >
      <div className="flex flex-row p-8">
        <div className="flex flex-col text-start gap-12">
          <h1 className="">{title}</h1>
          <CustomButton
            bgColor={btnBgColor}
            btnTitle={btnTitle}
            color={btnColor}
          />
        </div>
      </div>
    </div>
  )
}

export default InfoCard
