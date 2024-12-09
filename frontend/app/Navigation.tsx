"use client";

import { Link } from "react-router-dom";
import ConnectButton from "./ConnectButton";

export default function Navigation() {
  return (
    <nav className="flex w-full justify-between gap-4 items-center h-16 p-4 bg-white backdrop-blur-sm">
      {/* Barra de navegación */}
      <h1 className="text-lg font-light tracking-wide text-black">MedRecord</h1>

      {/* Barra de navegación con enlaces */}
      <ul className="flex items-center space-x-4">
        <li>
          <Link
            to="/"
            className="px-4 py-1 text-sm text-black rounded-lg transition-all hover:bg-gray-600"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about-us"
            className="px-4 py-1 text-sm text-black rounded-lg transition-all hover:bg-gray-600"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="/form"
            className="px-4 py-1 text-sm text-black rounded-lg transition-all hover:bg-gray-600"
          >
            Form
          </Link>
        </li>
        <li>
          <Link
            to="/form/input"
            className="px-4 py-1 text-sm text-black rounded-lg transition-all hover:bg-gray-600"
          >
            Input
          </Link>
        </li>
        {/* El botón Sign In es el último */}
        <li>
          <ConnectButton />
        </li>
      </ul>
    </nav>
  );
}
