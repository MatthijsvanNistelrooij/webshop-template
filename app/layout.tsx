import React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { StateContext } from "../context/StateContext"
import { Toaster } from "react-hot-toast"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "WebShop Template",
  description: "Template for WebShops with Stripe & IDEAL",
  icons: {
    icon: "/assets/images/shop-app.jpg", // This path should be relative to the public folder
    shortcut: "/assets/images/shop-app.jpg", // Optional: for the shortcut icon
    apple: "/assets/images/shop-app.jpg", // Optional: for Apple devices
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <StateContext>
      <html lang="en">
        <head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </head>
        <body className={"font-poppins"}>
          <Toaster />
          {children}
        </body>
      </html>
    </StateContext>
  )
}
