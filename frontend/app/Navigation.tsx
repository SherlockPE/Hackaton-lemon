// Navigation.tsx
"use client"

import ConnectButton from "./ConnectButton"; // Importamos el botón

export default function Navigation() {
  return (
    <nav className="flex w-full justify-between gap-4 items-center h-16 p-4 bg-grey-700 backdrop-blur-sm">
      {/* Barra de navegación */}
      <h1 className="text-lg font-light tracking-wide text-black">MedRecord</h1>

      {/* Barra de navegación con botones */}
      <ul className="flex items-center space-x-4">
        <li>
          <button className="px-4 py-1 text-sm text-black rounded-lg transition-all hover:bg-gray-600">
            Home
          </button>
        </li>
        <li>
          <button className="px-4 py-1 text-sm text-black rounded-lg transition-all hover:bg-gray-600">
            About Us
          </button>
        </li>
        {/* El botón Sign In es el último */}
        <li>
          <ConnectButton /> {/* El único botón Sign In */}
        </li>
      </ul>
    </nav>
  );
}
