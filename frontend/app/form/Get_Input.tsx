"use client";

import { useState } from "react";
import { useWriteContract } from "wagmi";
import { parseAbi, size, stringToHex } from "viem";

// APLICATION BINARY INTERFACE
const ABI = parseAbi([
  "function push_record(bytes32) public",
  "function pull_record() view returns (bytes32)",
]);

export default function Get_input() {
  const { writeContract } = useWriteContract();
  const [input, setInput] = useState("");


  const CONTRACT_ADDRESS = "0x789f1ab5265db940a75d8b41caf83d8a161e3ebc";

  function escribir_en_la_blockchain() {
    writeContract({
      abi: ABI,
      address: CONTRACT_ADDRESS,
      functionName: "push_record",
      args: [stringToHex(input, {size:32})],
    });
  }

  return (
    <>
      <div>
        <h1>Input</h1>
        <input
          onChange={(event_botoncito) => {
            setInput(event_botoncito.target.value);
          }}
          className="border-2 border-black"
          placeholder="Type"
        />
        <button
          className="bg-black text-white"
          onClick={escribir_en_la_blockchain}
        >
          <span>Send</span>
        </button>
      </div>
    </>
  );
}
