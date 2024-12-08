import { createPublicClient, createWalletClient, http, parseAbi } from "viem"
import { arbitrumSepolia } from "viem/chains"
import { privateKeyToAccount } from "viem/accounts"
import "dotenv/config"

// APLICATION BINARY INTERFACE
const ABI = parseAbi([
  "function push_record(string) public",
  "function pull_record() public view returns (uint256)"
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
const CONTRACT_ADDRESS = "0x28892ba1555044c444d915f9649cdfc79c3f18c9"

export async function write() {
  const result = await client.writeContract({
    abi: ABI,
    address: CONTRACT_ADDRESS,
    functionName: "push_record",
    args: [BigInt(12)],
  })

  console.debug(`Contract: ${result}`)
}

export async function read() {
  const result = await publicClient.readContract({
    abi: ABI,
    address: CONTRACT_ADDRESS,
    functionName: "pull_record",
  })

  console.debug(`Contract: ${result}`)
}

// write()
read()
