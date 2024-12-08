import { createPublicClient, createWalletClient, http, parseAbi } from "viem"
import { arbitrumSepolia } from "viem/chains"
import { privateKeyToAccount } from "viem/accounts"
import "dotenv/config"

const ABI = parseAbi([
  "function saludame() public view returns (string)",
])

const account = privateKeyToAccount((process as any).env.PRIVATE_KEY)

const client = createWalletClient({
  chain: arbitrumSepolia,
  transport: http(),
  account,
})

const publicClient = createPublicClient({
  chain: arbitrumSepolia,
  transport: http(),
})

// https://sepolia.arbiscan.io/address/const CONTRACT_ADDRESS = "0x46be8751225be83d7a9b97fec0214c53795d8477"
const CONTRACT_ADDRESS = "0x9bd5ffc78ac793f243777f00a1f3990562269fc0"

// async function write() {
//   const result = await client.writeContract({
//     abi: ABI,
//     address: CONTRACT_ADDRESS,
//     functionName: "set_value",
//     args: [BigInt(12)],
//   })

//   console.debug(`Contract: ${result}`)
// }

async function read() {
  const result = await publicClient.readContract({
    abi: ABI,
    address: CONTRACT_ADDRESS,
    functionName: "saludame",
  })

  console.debug(`Contract: ${result}`)
}

read()
// write()
