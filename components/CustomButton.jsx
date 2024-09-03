import Link from "next/link"
import { AiOutlineArrowRight } from "react-icons/ai"

const CustomButton = ({ icon, bgColor, btnTitle, color }) => {
  return (
    <Link
      href={"/products"}
      style={{ backgroundColor: bgColor, color: color }}
      className="p-2 px-3 flex flex-row items-center justify-between text-blue-600"
    >
      {btnTitle}
      <AiOutlineArrowRight />
    </Link>
  )
}

export default CustomButton
