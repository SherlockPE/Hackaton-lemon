// components/Input.js
export default function Input({ label, type = "text", placeholder, name }) {
    return (
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className="w-full px-4 py-2 border rounded-md focus:ring-green-500 focus:border-green-500"
        />
      </div>
    );
  }
  