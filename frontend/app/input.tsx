"use client"

import { useState } from "react"


export default function Get_input()
{
    const [input, setInput] = useState("")
    
    function Event_listener()
    {
        console.log("Input: ");
        console.log(input);
    }

    return (
        <>
            <input 
                onChange={(event_botoncito) => {
                    setInput(event_botoncito.target.value)
                }}
                className="border-2 border-black" placeholder="Type"/>
            <button onClick={Event_listener}>
                <span>
                    Send
                </span>
            </button>
        </>
    )
}