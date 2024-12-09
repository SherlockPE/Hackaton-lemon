import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Shield, Globe, Clock } from "lucide-react";

export default function Index() {
  return (
    <main className="font-sans">
      {/* Portada */}
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
            Conecta tu identidad con tu historial clínico de forma segura y
            accesible en cualquier parte del mundo.
          </p>
        </div>
      </section>

      {/* Caracteristicas Principales */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Características Principales
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Shield className="h-10 w-10 text-emerald-500" />
                <h3 className="ml-4 text-lg font-semibold">
                  Seguridad Blockchain
                </h3>
              </div>
              <p className="text-gray-600">
                Tu información médica está protegida por la tecnología
                blockchain, garantizando su integridad y confidencialidad.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Globe className="h-10 w-10 text-emerald-500" />
                <h3 className="ml-4 text-lg font-semibold">Acceso Global</h3>
              </div>
              <p className="text-gray-600">
                Accede a tu historial médico desde cualquier parte del mundo,
                asegurando una atención médica adecuada en caso de emergencia.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Clock className="h-10 w-10 text-emerald-500" />
                <h3 className="ml-4 text-lg font-semibold">
                  Actualización en Tiempo Real
                </h3>
              </div>
              <p className="text-gray-600">
                Tu historial se actualiza en tiempo real, asegurando que los
                profesionales médicos tengan la información más reciente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-emerald-500 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Únete a la revolución de la salud digital
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Conecta tu identidad con tu historial clínico y experimenta una
            nueva era de seguridad y accesibilidad en el cuidado de la salud.
          </p>
          <div className="flex justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg py-4 px-8 rounded-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
              <Link href="/about-us" className="flex items-center">
                Descubre más
                <ChevronRight className="h-6 w-6 ml-2" />
              </Link>
            </button>
          </div>
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
            Con un enfoque centrado en el usuario, MedRecords no solo garantiza
            la seguridad de la información, sino que también promueve la
            interoperabilidad entre diferentes sistemas de salud, facilitando
            diagnósticos y tratamientos precisos.
          </p>
        </div>
      </div>
    </main>
  );
}
