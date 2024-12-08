"use client"

import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs"
import { useRkAccountModal } from "@/lib/rainbowkit"
import { useAccount, useReadContract } from "wagmi"
import Navigation from "./Navigation"
import { parseAbi } from "viem"
import Get_input from "./input"

const ADDRESS = "0x9bd5ffc78ac793f243777f00a1f3990562269fc0"

const ABI = parseAbi([
  "function saludame() public view returns (string)",
])


export default function Container() {
  const result = useReadContract(
    {
      address: ADDRESS,
      functionName: "saludame",
      abi: ABI
    }
  )

  console.debug({result})
  
  const { openAccountModal } = useRkAccountModal()
  const { isConnected } = useAccount()

  return (

    <>
      <Navigation />

      <Get_input />
    </>


  )
}
