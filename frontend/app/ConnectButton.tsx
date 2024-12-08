import { Button } from "@/components/ui/button"
import { useRkAccountModal } from "@/lib/rainbowkit"
import { beautifyAddress } from "@/lib/utils"
import { useAccount } from "wagmi"

export default function ConnectButton() {
  const { isConnected, address } = useAccount()
  const { openAccountModal } = useRkAccountModal()

  return (
    <Button onClick={openAccountModal}>
      {isConnected && <span className="size-2 bg-green-400 rounded-full" />}{" "}
      {address ? `Connected (${beautifyAddress(address)})` : "Connect Wallet"}
    </Button>
  )
}
