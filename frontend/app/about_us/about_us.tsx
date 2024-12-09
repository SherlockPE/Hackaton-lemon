import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Lightbulb, Target } from 'lucide-react';

import OliverImage from '@/assets/Oliver.jpg';
import JohiImage from '@/assets/Johi.jpg';
import DebbieImage from '@/assets/Debbie.jpg';
import FabricioImage from '@/assets/Fabri.jpg';

export default function About_us() {
  return (
    <main className="font-sans">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Medical Team Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/50 to-emerald-500/50"></div>
        <div className="relative z-10 text-center space-y-8 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Sobre Nosotros
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Conoce al equipo detrás de la revolución en el manejo de historiales médicos
          </p>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestra Misión y Visión</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Misión */}
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Target className="h-10 w-10 text-emerald-500" />
                <h3 className="ml-4 text-lg font-semibold">Nuestra Misión</h3>
              </div>
              <p className="text-gray-600">
                En <strong>MedRecords</strong>, nuestra misión es revolucionar la forma en que los historiales médicos son almacenados y accesados. 
                Nuestro objetivo es empoderar a las personas brindándoles acceso seguro y descentralizado a su información de salud en todo el mundo.
              </p>
            </div>
            {/* Visión */}
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Lightbulb className="h-10 w-10 text-emerald-500" />
                <h3 className="ml-4 text-lg font-semibold">Nuestra Visión</h3>
              </div>
              <p className="text-gray-600">
                Visualizamos un mundo donde cada individuo tiene control total sobre su información médica, 
                facilitando una atención de salud más eficiente y personalizada, sin importar dónde se encuentren.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestro Equipo */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestro Equipo</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
            {[
              { name: "Oliver Zamora", image: OliverImage },
              { name: "Johi Ortiz", image: JohiImage },
              { name: "Debbie Diaz", image: DebbieImage },
              { name: "Fabricio López", image: FabricioImage }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 p-1">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Impacto */}
      <section className="py-24 bg-gradient-to-r from-emerald-500 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Impactando vidas a través de la tecnología
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            En MedRecords, creemos que cada avance tecnológico es una oportunidad para mejorar la vida de las personas. 
            Únete a nosotros en nuestra misión de transformar la atención médica global.
          </p>
          <div className="flex justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg py-4 px-8 rounded-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
              <Link href="/contact" className="flex items-center">
                Contáctanos
                <ChevronRight className="h-6 w-6 ml-2" />
              </Link>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

