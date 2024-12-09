import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Shield, Globe, Clock } from 'lucide-react'

export default function Index() {
  return (
    <main className="font-sans pt-16"> {/* Added pt-16 to account for fixed navbar */}
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Medical Technology Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/50 to-emerald-500/50"></div>
        <div className="relative z-10 text-center space-y-8 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Tu seguridad médica a nivel global
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Conecta tu identidad con tu historial clínico de forma segura y accesible en cualquier parte del mundo.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-3 rounded flex items-center justify-center">
            <Link href="/form" className="flex items-center">
              Registrar <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Características Principales</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Shield className="h-10 w-10 text-emerald-500" />
                <h3 className="ml-4 text-lg font-semibold">Seguridad Blockchain</h3>
              </div>
              <p className="text-gray-600">
                Tu información médica está protegida por la tecnología blockchain, garantizando su integridad y confidencialidad.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Globe className="h-10 w-10 text-emerald-500" />
                <h3 className="ml-4 text-lg font-semibold">Acceso Global</h3>
              </div>
              <p className="text-gray-600">
                Accede a tu historial médico desde cualquier parte del mundo, asegurando una atención médica adecuada en caso de emergencia.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Clock className="h-10 w-10 text-emerald-500" />
                <h3 className="ml-4 text-lg font-semibold">Actualización en Tiempo Real</h3>
              </div>
              <p className="text-gray-600">
                Tu historial se actualiza en tiempo real, asegurando que los profesionales médicos tengan la información más reciente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-emerald-500 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Únete a la revolución de la salud digital</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Conecta tu identidad con tu historial clínico y experimenta una nueva era de seguridad y accesibilidad en el cuidado de la salud.
          </p>
        </div>
      </section>

    {/* Acerca del Proyecto */} 
    <div className="bg-white py-8 px-4 sm:px-6 lg:px-8"> 
        <div className="max-w-7xl mx-auto"> 
          <h2 className="text-2xl font-extrabold text-gray-900 animate-fade-in-up"> 
            Acerca de Nuestro Proyecto 
          </h2> 
    <p className="mt-4 text-lg text-gray-600 animate-fade-in"> 
   <strong>MedRecords</strong> nació con la idea de resolver uno de los 
   mayores desafíos en el ámbito de la salud global: el acceso seguro y 
   universal a historiales médicos. Creemos que cada persona tiene 
   derecho a controlar su información de salud y a compartirla de forma 
   segura, especialmente en situaciones críticas como emergencias o 
   viajes internacionales. 
    </p> 
    <p className="mt-4 text-lg text-gray-600 animate-fade-in"> 
   Nuestra plataforma combina lo mejor de las tecnologías 
   descentralizadas para garantizar que los pacientes puedan acceder a 
   sus datos en cualquier parte del mundo sin depender de sistemas 
   centralizados. A través de <strong>MedRecords</strong>, buscamos 
   empoderar a los pacientes, mejorar la colaboración médica 
   internacional y proteger la privacidad de los datos de manera 
   integral. 
    </p> 
    <p className="mt-4 text-lg text-gray-600 animate-fade-in"> 
   Con un enfoque centrado en el usuario, MedRecords no solo garantiza la 
   seguridad de la información, sino que también promueve la 
   interoperabilidad entre diferentes sistemas de salud, facilitando 
   diagnósticos y tratamientos precisos. 
    </p> 
        </div> 
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">MedRecord & Blockchain</h3>
              <p className="text-sm text-gray-400">Transformando la seguridad y accesibilidad de los registros médicos a nivel global.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                <li><Link href="/about-us" className="text-sm text-gray-400 hover:text-white transition-colors">Acerca de</Link></li>
                <li><Link href="/form" className="text-sm text-gray-400 hover:text-white transition-colors">Formulario</Link></li>
                <li><Link href="/form/input" className="text-sm text-gray-400 hover:text-white transition-colors">Input</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">Política de Privacidad</Link></li>
                <li><Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">Términos de Servicio</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.615 11.615 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

