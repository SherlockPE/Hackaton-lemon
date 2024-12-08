export default function About_us() {
	return (
	<section className="about-us-container px-8 py-12 bg-gray-200 text-black">
		<div className="container mx-auto">
		{/* Título */}
		<h1 className="text-4xl font-bold text-center mb-6 text-green-700">Sobre Nosotros</h1>

		{/* Sección de Misión */}
		<div className="mb-8">
			<h2 className="text-2xl font-semibold mb-4 text-gray-900">Nuestra Misión</h2>
			<p className="text-lg">
			En <strong>MedRecords</strong>, nuestra misión es revolucionar la forma en que los historiales médicos son almacenados y accesados. 
			Nuestro objetivo es empoderar a las personas brindándoles acceso seguro y descentralizado a su información de salud en todo el mundo.
			</p>
		</div>

		{/* Sección de Problema y Solución */}
		<div className="mb-8">
			<h2 className="text-2xl font-semibold mb-4 text-gray-900">El Problema que Resolucionamos</h2>
			<p className="text-lg">
			Hoy en día, los historiales médicos están dispersos en múltiples sistemas, lo que dificulta que los pacientes y profesionales de la salud accedan a información crítica en emergencias o mientras viajan.
			</p>
			<h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-900">Nuestra Solución</h2>
			<p className="text-lg">Usando tecnología blockchain, <strong>MedRecords</strong> ofrece una plataforma descentralizada que garantiza el acceso global, seguridad y privacidad para los historiales médicos.
			</p>
		</div>

		{/* Sección del Equipo */}
		<div className="mb-8">
			<h2 className="text-2xl font-semibold mb-4 text-gray-900">Conoce a Nuestro Equipo</h2>
			<p className="text-lg">
			Somos un equipo dedicado de desarrolladores y visionarios:
			</p>
			<ul className="list-disc pl-6 mt-4 text-gray-800">
			<li><strong>Desarrolladores Frontend:</strong> Enfocados en crear una interfaz de usuario intuitiva y accesible.</li>
			<li><strong>Desarrollador Backend:</strong> Asegura la seguridad y eficiencia de nuestra infraestructura descentralizada.</li>
			<li><strong>Líder de Documentación:</strong> Conecta a los equipos técnicos con las partes interesadas no técnicas.</li>
			</ul>
		</div>

		{/* Llamado a la Acción */}
		<div className="text-center">
			<h2 className="text-2xl font-semibold mb-4 text-green-700">Únete a Nosotros</h2>
			<p className="text-lg text-gray-800">
			Ayúdanos a transformar la industria de la salud. Contribuye a <strong>MedRecords</strong> o explora nuestra plataforma para ver cómo estamos haciendo la diferencia.
			</p>
		</div>
		</div>
	</section>
	);
}

// export default function About_us() {
//   return (
//     <section id="about" className="py-12 bg-gray-100">
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl font-bold text-center text-green-700 mb-6">
//           Sobre MedRecords
//         </h2>
//         <p className="text-lg text-gray-700 leading-8 mb-4">
//           <strong>MedRecords</strong> nació con la idea de resolver uno de los
//           mayores desafíos en el ámbito de la salud global: el acceso seguro y
//           universal a historiales médicos. Creemos que cada persona tiene
//           derecho a controlar su información de salud y a compartirla de forma
//           segura, especialmente en situaciones críticas como emergencias o
//           viajes internacionales.
//         </p>
//         <p className="text-lg text-gray-700 leading-8 mb-4">
//           Nuestra plataforma combina lo mejor de las tecnologías
//           descentralizadas para garantizar que los pacientes puedan acceder a
//           sus datos en cualquier parte del mundo sin depender de sistemas
//           centralizados. A través de <strong>MedRecords</strong>, buscamos
//           empoderar a los pacientes, mejorar la colaboración médica
//           internacional y proteger la privacidad de los datos de manera
//           integral.
//         </p>
//         <p className="text-lg text-gray-700 leading-8">
//           Con un enfoque centrado en el usuario, MedRecords no solo garantiza la
//           seguridad de la información, sino que también promueve la
//           interoperabilidad entre diferentes sistemas de salud, facilitando
//           diagnósticos y tratamientos precisos.
//         </p>
//       </div>
//     </section>
//   );
// }
