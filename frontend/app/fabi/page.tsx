// Con esto le decimos que toda esta pagina solo esta en el navegador
"use client"
// con esto [user server] le decimos que eso solo esta en el servidor

import { useState } from "react"

export default function FabriPage()
{
    const [input, setInput] = useState("")


    function pingpong()
    {
        alert(input)
        if (input == "saluda")
            alert("Holaaaa")
        else if (input == "adios")
            alert("chauuu")
        else
            alert("???????")
    }

    return (
        <>
            <div 
                style={{
                    backgroundColor: input
                }}
                className="bg-red-700 text-black p-12"/>
            <Racoon/>
            <input 
                onChange={(event_botoncito) => {
                    setInput(event_botoncito.target.value)
                }}
                className="border-2  border-black bg-black p-4 rounded mb-2 text-white" placeholder="ID"/>
            <button onClick={pingpong}>
                <span className="text-black">
                    Enviar
                </span>
            </button>
        </>
    ) 
}

function Racoon()
{
    return (
        <span>
            <h2 className="font-bold bg-black text-white">Hola soy Pedro</h2>
            <img
                onClick={() => alert("WASAAAA")}
                src="https://media1.tenor.com/m/qsDGDSl5uuUAAAAd/pedro-pedro.gif"
            />
        </span>
    )
}