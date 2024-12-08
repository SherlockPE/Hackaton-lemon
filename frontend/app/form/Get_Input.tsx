"use client";

import { useState } from "react";
import { read, write } from "../../../playground/index";
import { useWriteContract } from "wagmi";
import { parseAbi } from "viem";

// APLICATION BINARY INTERFACE
const ABI = parseAbi([
  "function push_record(string) public",
  "function pull_record() public view returns (uint256)",
]);

export default function Get_input() {
  const { writeContract } = useWriteContract();
  const [input, setInput] = useState("");

  function Event_listener() {
    console.log("Input: ");
    console.log(input);
    // write(input)
  }

  const CONTRACT_ADDRESS = "0x24ce62892e763635377a63eb028c62176e8367ba";

  function escribir_en_la_blockchain() {
    writeContract({
      abi: ABI,
      address: CONTRACT_ADDRESS,
      functionName: "push_record",
      args: [input],
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
