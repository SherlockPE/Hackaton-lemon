"use client";

import { useState } from "react";
import { useWriteContract } from "wagmi";
import { parseAbi, stringToHex } from "viem";

// Application Binary Interface (ABI)
const ABI = parseAbi([
  "function push_record(bytes32) public",
  "function pull_record() view returns (bytes32)",
]);

const CONTRACT_ADDRESS = "0x789f1ab5265db940a75d8b41caf83d8a161e3ebc";

export default function Get_input() {
  const { writeContract } = useWriteContract();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    bloodType: "",
    medications: "",
    allergies: "",
  });
  const [input, setInput] = useState("");

  //   const handleChange = (
  //     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  //   ) => {
  //     const { name, value } = e.target;
  //     setFormData({ ...formData, [name]: value });
  //   };

  const escribirEnBlockchain = () => {
    // const inputData = `${formData.name}|${formData.age}|${formData.gender}|${formData.bloodType}|${formData.medications}|${formData.allergies}`;
    writeContract({
      abi: ABI,
      address: CONTRACT_ADDRESS,
      functionName: "push_record",
      args: [stringToHex(input, { size: 32 })],
    });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-semibold text-gray-700 mb-4">
        Formulario Médico
      </h1>
      <form className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            // value={formData.name}
            // onChange={handleChange}
            onChange={(event_botoncito) => {
              setInput(event_botoncito.target.value);
            }}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label
            htmlFor="age"
            className="block text-sm font-medium text-gray-700"
          >
            Edad
          </label>
          <input
            type="number"
            id="age"
            name="age"
            // value={formData.age}
            // onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label
            htmlFor="gender"
            className="block text-sm font-medium text-gray-700"
          >
            Género
          </label>
          <select
            id="gender"
            name="gender"
            // value={formData.gender}
            // onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Seleccione...</option>
            <option value="Hombre">Hombre</option>
            <option value="Mujer">Mujer</option>
            <option value="Otro">Otro</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="bloodType"
            className="block text-sm font-medium text-gray-700"
          >
            Grupo Sanguíneo
          </label>
          <input
            type="text"
            id="bloodType"
            name="bloodType"
            // value={formData.bloodType}
            // onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label
            htmlFor="medications"
            className="block text-sm font-medium text-gray-700"
          >
            Medicamentos
          </label>
          <input
            type="text"
            id="medications"
            name="medications"
            // value={formData.medications}
            // onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label
            htmlFor="allergies"
            className="block text-sm font-medium text-gray-700"
          >
            Alergias
          </label>
          <input
            type="text"
            id="allergies"
            name="allergies"
            // value={formData.allergies}
            // onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <button
          type="button"
          className="w-full py-2 px-4 text-white bg-green-700 hover:bg-green-600 rounded-md transition"
          onClick={escribirEnBlockchain}
        >
          Enviar a Blockchain
        </button>
      </form>
    </div>
  );
}

// "use client";

// import { useState } from "react";
// import { useWriteContract } from "wagmi";
// import { parseAbi, size, stringToHex } from "viem";

// // APLICATION BINARY INTERFACE
// const ABI = parseAbi([
//   "function push_record(bytes32) public",
//   "function pull_record() view returns (bytes32)",
// ]);

// export default function Get_input() {
//   const { writeContract } = useWriteContract();
//   const [input, setInput] = useState("");

//   const CONTRACT_ADDRESS = "0x789f1ab5265db940a75d8b41caf83d8a161e3ebc";

//   function escribir_en_la_blockchain() {
//     writeContract({
//       abi: ABI,
//       address: CONTRACT_ADDRESS,
//       functionName: "push_record",
//       args: [stringToHex(input, {size:32})],
//     });
//   }

//   return (
//     <>
//       <div>
//         <h1>Input</h1>
//         <input
//           onChange={(event_botoncito) => {
//             setInput(event_botoncito.target.value);
//           }}
//           className="border-2 border-black"
//           placeholder="Type"
//         />
//         <button
//           className="bg-black text-white"
//           onClick={escribir_en_la_blockchain}
//         >
//           <span>Send</span>
//         </button>
//       </div>
//     </>
//   );
// }
