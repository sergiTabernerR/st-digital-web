import React from 'react';

const Microservicios = () => {

  // Función para scroll al formulario
  const scrollToContact = () => {
    const form = document.getElementById('formulario-contacto');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      title: "Independencia",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
      ),
      text: "Cada Microservicio actúa de forma autónoma y sin acoplamiento entre ellos, permitiendo ser actualizado sin afectar a la disponibilidad de los otros Microservicios."
    },
    {
      title: "Escalabilidad",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
      ),
      text: "Un Microservicio puede escalar de forma individual según el volumen de mensajes que debe procesar, optimizando recursos."
    },
    {
      title: "Flexibilidad",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
      ),
      text: "Esto es, cada Microservicio puede estar programado en un lenguaje distinto y utilizar componentes externos convenientes (como Bases de Datos específicas)."
    },
    {
      title: "Resiliencia",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
      ),
      text: "Si un Microservicio falla no detiene todo el sistema, permitiendo una recuperación más rápida y manteniendo operativa el resto de la plataforma."
    },
    {
      title: "Agilidad",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
      ),
      text: "El desarrollo de Microservicios casa completamente con la cultura DevOps, permitiendo entregas más rápidas y continuas."
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans pt-20">
      
      {/* 1. HERO SECTION (Fondo madera/taller como en la imagen) */}
      <div className="relative h-[400px] flex items-center overflow-hidden border-b border-gray-800">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581092921461-eab62e97a783?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')" }} 
        ></div>
        {/* Overlay oscuro para legibilidad */}
        <div className="absolute inset-0 bg-black/80 z-10"></div>

        <div className="container mx-auto px-6 relative z-20 text-center">
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-widest mb-4">
            MICROSERVICIOS
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Utilizamos este enfoque arquitectónico para desarrollar software a medida como una colección de servicios pequeños, independientes y altamente especializados.
          </p>
        </div>
      </div>

      {/* 2. EXPLICACIÓN Y DIAGRAMA LÓGICO */}
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Microservicios como pilar fundamental de <br />
          <span className="text-blue-500">nuestras propuestas técnicas</span>
        </h2>

        {/* Representación visual del diagrama (Kafka/Microservicios) */}
        <div className="relative bg-gray-900/50 border border-gray-800 rounded-3xl p-8 md:p-12 max-w-5xl mx-auto mb-12 flex flex-col items-center">
            
            {/* Capa de Servicios */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 w-full">
                {/* Servicio A */}
                <div className="bg-gray-800 border border-blue-500/30 p-4 rounded-xl flex flex-col items-center w-32 shadow-lg shadow-blue-500/10">
                    <span className="text-xs text-blue-400 font-bold mb-2">Microservice "A"</span>
                    <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center text-xs font-bold">.NET</div>
                </div>
                 {/* Servicio B */}
                 <div className="bg-gray-800 border border-blue-500/30 p-4 rounded-xl flex flex-col items-center w-32 shadow-lg shadow-blue-500/10">
                    <span className="text-xs text-blue-400 font-bold mb-2">Microservice "B"</span>
                    <div className="w-8 h-8 bg-yellow-500 text-black rounded flex items-center justify-center text-xs font-bold">JS</div>
                </div>
                 {/* Servicio Z */}
                 <div className="bg-gray-800 border border-blue-500/30 p-4 rounded-xl flex flex-col items-center w-32 shadow-lg shadow-blue-500/10">
                    <span className="text-xs text-blue-400 font-bold mb-2">Microservice "Z"</span>
                    <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-xs font-bold">PY</div>
                </div>
            </div>

            {/* Bus de Eventos (Kafka) */}
            <div className="w-full bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 h-16 rounded-lg flex items-center justify-center border border-gray-600 relative mb-8">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                   <div className="h-4 w-0.5 bg-gray-500"></div>
                   <div className="h-4 w-0.5 bg-gray-500 ml-20 absolute top-0"></div>
                   <div className="h-4 w-0.5 bg-gray-500 -ml-20 absolute top-0"></div>
                </div>
                <span className="font-mono text-xl tracking-widest text-white font-bold">Apache Kafka</span>
            </div>

            {/* Dispositivos / Conexión */}
            <div className="flex items-center gap-4 text-gray-400 text-sm">
                <div className="flex flex-col items-center">
                    <svg className="w-8 h-8 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    <span>Web / App</span>
                </div>
                <div className="h-px w-10 bg-blue-500"></div>
                <div className="border border-blue-500 text-blue-400 px-3 py-1 rounded text-xs">MQTT / WS</div>
                <div className="h-px w-10 bg-blue-500"></div>
                <span>Core System</span>
            </div>
        </div>

        <p className="text-gray-400 max-w-4xl mx-auto leading-relaxed">
          Cada Microservicio que proponemos y desarrollamos lo enfocamos a solucionar una tarea específica y los interrelacionamos entre ellos habitualmente mediante el software de streaming de mensajería <span className="text-white font-semibold">Kafka</span>.
          <br /><br />
          Creamos Microservicios en múltiples lenguajes de programación, sin comprometer la calidad y según las preferencias de nuestros clientes.
        </p>
      </div>

      {/* 3. GRID DE CARACTERÍSTICAS (Las 5 Tarjetas) */}
      <div className="bg-gray-900 py-20 border-t border-gray-800">
        <div className="container mx-auto px-6">
            <h3 className="text-center text-gray-500 text-sm font-bold uppercase tracking-widest mb-16">
                Principales características de los Microservicios
            </h3>
            
            {/* Grid layout: 3 arriba, 2 abajo centrado en pantallas grandes */}
            <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
                
                {features.map((feature, index) => (
                    <div 
                        key={index} 
                        className="w-full md:w-[30%] bg-black border border-gray-800 p-8 rounded-2xl hover:border-blue-500 transition duration-300 group flex flex-col items-center text-center"
                    >
                        <div className="w-16 h-16 bg-blue-900/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white text-blue-500 transition-colors duration-300">
                            {feature.icon}
                        </div>
                        <h4 className="text-xl font-bold mb-4 text-white">{feature.title}</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            {feature.text}
                        </p>
                    </div>
                ))}

            </div>
        </div>
      </div>

      {/* 4. CTA FOOTER */}
      <div className="container mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-10 md:p-14 text-center shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">¿Te interesa aplicar esta arquitectura?</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Cuéntanos tu proyecto y analizaremos si una arquitectura de microservicios es la solución ideal para escalar tu negocio.
            </p>
            <button 
                onClick={scrollToContact}
                className="bg-white text-blue-800 hover:bg-gray-100 font-bold py-3 px-8 rounded shadow-lg transition transform hover:-translate-y-1"
            >
                CONTACTAR AHORA
            </button>
        </div>
      </div>

    </div>
  );
};

export default Microservicios;