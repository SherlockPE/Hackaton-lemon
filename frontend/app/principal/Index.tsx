import ConnectButton from "../ConnectButton";

export default function Index() {
  return (
    <>
      {/* Encabezado */}
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center relative group"
        style={{
          backgroundImage: 'url("https://tse4.mm.bing.net/th?id=OIG4.ToS1WldYwhifd5.5ACjo&pid=ImgGn")',
        }}
      >
        {/* Capa de color semitransparente sobre la imagen de fondo */}
        <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-40 transition-all duration-500"></div>

        {/* Frase en el medio */}
        <h1 className="text-4xl font-bold text-white bg-opacity-50 bg-emerald-300 p-4 rounded-lg shadow-lg transform transition-all duration-1000 hover:scale-110 mb-8 animate-fade-in-up">
          "Tu seguridad médica a nivel global"
        </h1>
      </div>

      {/* Segunda imagen */}
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center relative group"
        style={{
          backgroundImage: 'url("https://r4.wallpaperflare.com/wallpaper/96/377/232/anime-everlasting-summer-hospital-original-anime-wallpaper-490058ada11a4dab56a7b8ff1001b6fd.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-40 transition-all duration-500"></div>
        <h2 className="text-3xl font-bold text-white bg-opacity-50 bg-emerald-300 p-4 rounded-lg shadow-lg transform transition-all duration-1000 hover:scale-110 mb-12 animate-fade-in-up">
          "Conéctate con tu historial clínico en cualquier lugar"
        </h2>

       {/* Contenedor de los botones */}
<div className="flex space-x-20 mt-12 animate-fade-in">
  <button
    onClick={() => (window.location.href = "/check-history")}
    className="px-6 py-2 bg-emerald-500 text-white font-bold rounded-lg transition-all duration-300 hover:bg-emerald-400 hover:text-black hover:scale-110 hover:shadow-2xl active:scale-105 focus:outline-none"
  >
    Historial clínico
  </button>
  <button
    onClick={() => (window.location.href = "/rellena-tus-datos")}
    className="px-6 py-2 bg-emerald-500 text-white font-bold rounded-lg transition-all duration-300 hover:bg-emerald-400 hover:text-black hover:scale-110 hover:shadow-2xl active:scale-105 focus:outline-none"
  >
    Regístrate
  </button>
</div>
      </div>

      {/* Tercera imagen */}
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center relative group"
        style={{
          backgroundImage: 'url("https://tse4.mm.bing.net/th?id=OIG4.ToS1WldYwhifd5.5ACjo&pid=ImgGn")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-40 transition-all duration-500"></div>
        <h2 className="text-3xl font-bold text-white bg-opacity-50 bg-emerald-300 p-4 rounded-lg shadow-lg transform transition-all duration-1000 hover:scale-110 animate-fade-in-up">
          "Información segura y accesible en todo momento"
        </h2>
      </div>

      {/* Acerca del Proyecto */}
      <div className="bg-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 animate-fade-in-up">
            Acerca de Nuestro Proyecto
          </h2>
          <p className="mt-4 text-lg text-gray-600 animate-fade-in">
            Nuestra app, basada en tecnología blockchain, permite a las personas conectar su identidad con su historial clínico, garantizando que esta información esté disponible de manera segura y accesible en cualquier país, en caso de emergencia o al viajar.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 mt-0">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex space-x-6">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-500 transition-all"
            >
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-500 transition-all"
            >
              <i className="fab fa-facebook text-2xl"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-500 transition-all"
            >
              <i className="fab fa-twitter text-2xl"></i>
            </a>
          </div>
          <div className="text-sm">
            <p>&copy; 2024 MedRecord & Blockchain</p>
          </div>
        </div>
      </footer>
    </>
  );
}
