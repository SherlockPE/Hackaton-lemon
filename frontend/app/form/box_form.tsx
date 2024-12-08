import React from "react";
export default function box_form() {
  return (
      <div className="flex items-center justify-center h-screen bg-slate-500">
        <div className="w-96 h-[500px] bg-white rounded-lg shadow-lg p-8">
            {/*encaabezado*/}
            <div className="bg-green-500 text-white text-center py-3 rounded-t-lg">
                <h1 className="text-lg font-semibold">My MedRecord</h1>
            </div>

            {/*Contenido*/}
            <div className="flex flex-col items-center p-6">
                {/*Imagen*/}
                <div className="w-32 h-32 rounded-full bg-gray-300 overflow-hidden mb-4">
                    <img 
                    src="https://randomuser.me/api/portraits/men/1.jpg"
                    className="object-cover w-full h-full"
                    alt="Avatar"
                    />
                </div>

                {/*Información*/}
                <div className="text-left w-full"> 
                    <p><strong>NOMBRE:</strong> Juan Dedo</p>
                    <p><strong>EDAD:</strong>42</p>
                    <p><strong>GENERO:</strong>Hombre</p>
                    <p><strong>GRUPO SANGUINEO:</strong>A+</p>
                    <p><strong>MEDICAMENTOS:</strong>Sertralina</p>
                    <p><strong>ALERGIAS:</strong>Frutos Secos</p>
                </div>

                {/*Botón*/}
                <div className="mt-4 w-full flex justify-center">
                    <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-neutral-50 transition duration-500">
                    Listado de informes
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
}