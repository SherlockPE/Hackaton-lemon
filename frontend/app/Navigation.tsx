"use client"

import Image from "next/image"

import asset_logo from "@/assets/logo.png"
import ConnectButton from "./ConnectButton"

export default function Navigation() {
  return (
    <nav className="flex w-full justify-between gap-4 items-center h-16">
      <nav className="flex gap-1 items-center">
        <figure className="max-w-[3rem]">
          <Image className="w-full" src={asset_logo} alt="" />
        </figure>
        <strong className="text-lg">LemonFeed</strong>
      </nav>
      <ConnectButton />
    </nav>
  )
}
