import "./globals.css"

import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import Web3Provider from "./Web3Provider"

export const metadata: Metadata = {
  title: "MedRecords",
  description: "Demo realizada para la Hackaton Lemon Style",
}

const font = Roboto({
  weight: ["400", "500", "700"],
  subsets: [],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <Web3Provider>{children}</Web3Provider>
      </body>
    </html>
  )
}
