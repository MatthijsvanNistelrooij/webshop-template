import { Quicksand } from "next/font/google"
import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        custom: "4rem",
        "4xl": "3rem",
      },
      spacing: {
        "105": "27rem",
        "112": "28rem",
        "128": "40rem",
        "100": "30rem",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        sans: ["DM Sans", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
      },
      borderWidth: {
        "3": "3px",
      },
      backgroundImage: {
        "pastel-gradient":
          "linear-gradient(to right, #DFF6E4, #CBE7F6, #F2D4D4)",
        "gradient-green": " linear-gradient(to bottom, #f7f7f2, #DBE9D7)",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        slide: "slide 25s linear infinite",
        paused: "paused",
      },
    },
  },
  plugins: [],
}
export default config
