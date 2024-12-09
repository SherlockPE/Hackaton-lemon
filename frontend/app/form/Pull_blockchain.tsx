"use client";

import { useReadContract } from "wagmi";
import { hexToString, parseAbi } from "viem";
import { Result } from "postcss";
import { read } from "fs";

// APLICATION BINARY INTERFACE
const ABI = parseAbi([
  "function push_record(bytes32) public",
  "function pull_record() view returns (bytes32)",
]);

export default function Pull_blockchain() {
    
    const CONTRACT_ADDRESS = "0x789f1ab5265db940a75d8b41caf83d8a161e3ebc";
    
    const read_contract =  useReadContract({
        abi: ABI,
        address: CONTRACT_ADDRESS,
        functionName: "pull_record",
      });


const result = read_contract?.data ? hexToString(read_contract.data) : "Cargando..."

  console.log(read_contract)
  return (
    <>
      <div>
        <h1>
            Result
        </h1>
        <p>
            {result}
        </p>
      </div>
    </>
  );
}
