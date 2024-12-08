import ConnectButton from "../ConnectButton";

export default function Index() {
  return (
    <>
      {/* Encabezado */}
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center relative"
        style={{
          backgroundImage: 'url("https://tse2.mm.bing.net/th?id=OIG2.LnE39l5eZcsY.3cDRmHG&pid=ImgGn")',
          width: '100%',
          height: 'auto',
        }}
      >
        {/* Capa de color semitransparente sobre la imagen de fondo */}
        <div className="absolute inset-0 bg-black opacity-30"></div>

        {/* Frase en el medio */}
        <h1 className="text-4xl font-bold text-white bg-opacity-50 bg-emerald-300 p-4 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-110">
          "Tu seguridad medica a nivel global"
        </h1>
      </div>

      {/* Segunda imagen */}
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center relative"
        style={{
          backgroundImage: 'url("URL_DE_TU_IMAGEN_2")', // Reemplaza con la URL de tu segunda imagen
          width: '100%',
          height: 'auto',
        }}
      >
        {/* Capa de color semitransparente sobre la imagen de fondo */}
        <div className="absolute inset-0 bg-black opacity-30"></div>

        {/* Frase en el medio */}
        <h2 className="text-3xl font-bold text-white bg-opacity-50 bg-emerald-300 p-4 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-110">
          "Conéctate con tu historial clínico en cualquier lugar"
        </h2>
      </div>

      {/* Tercera imagen */}
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center relative"
        style={{
          backgroundImage: 'url("URL_DE_TU_IMAGEN_3")', // Reemplaza con la URL de tu tercera imagen
          width: '100%',
          height: 'auto',
        }}
      >
        {/* Capa de color semitransparente sobre la imagen de fondo */}
        <div className="absolute inset-0 bg-black opacity-30"></div>

        {/* Frase en el medio */}
        <h2 className="text-3xl font-bold text-white bg-opacity-50 bg-emerald-300 p-4 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-110">
          "Información segura y accesible en todo momento"
        </h2>
      </div>

      {/* Espacio para información acerca del proyecto */}
      <div className="bg-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900">Acerca de Nuestro Proyecto</h2>
          <p className="mt-4 text-lg text-gray-600">
            Nuestra app, basada en tecnología blockchain, permite a las personas conectar su identidad con su historial clínico, garantizando que esta información esté disponible de manera segura y accesible en cualquier país, en caso de emergencia o al viajar.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 mt-0">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          {/* Iconos de redes sociales */}
          <div className="flex space-x-6">
            <a
              href="https://www.instagram.com"
              target="_blank"
              className="hover:text-emerald-500 transition-all"
            >
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              className="hover:text-emerald-500 transition-all"
            >
              <i className="fab fa-facebook text-2xl"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className="hover:text-emerald-500 transition-all"
            >
              <i className="fab fa-twitter text-2xl"></i>
            </a>
          </div>

          {/* Pie de página */}
          <div className="text-sm">
            <p>&copy; 2024 MedRecord & Blockchain</p>
          </div>
        </div>
      </footer>
    </>
  );
}
