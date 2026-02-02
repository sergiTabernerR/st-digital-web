import React from 'react';

const ArquitecturaSoluciones = () => {

  // Función para hacer scroll suave al formulario de contacto
  const scrollToContact = () => {
    const form = document.getElementById('formulario-contacto');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans pt-20">
      
      {/* 1. HERO SECTION */}
      <div className="relative h-[500px] flex items-center overflow-hidden border-b border-gray-800">
        {/* Imagen de fondo (Whiteboard/Planning vibe) */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10"></div>

        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
              ARQUITECTURA <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                DE SOLUCIONES
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl leading-relaxed">
              Construimos soluciones específicas para cumplir con las necesidades empresariales de nuestros clientes, alineando tecnología y negocio.
            </p>
          </div>
        </div>
      </div>

      {/* 2. VISIÓN HOLÍSTICA (Intro) */}
      <div className="container mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Soluciones con visión holística
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg mb-16">
          La arquitectura de soluciones es una disciplina que se centra en diseñar y desarrollar soluciones tecnológicas, alineando los requisitos de las empresas con la tecnología disponible.
        </p>

        {/* 3. GRID DE 4 PILARES (Reemplazo del diagrama central) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Pilar 1: Infraestructura */}
          <div className="p-8 border border-gray-800 rounded-2xl bg-white/5 hover:border-blue-500 hover:bg-white/10 transition duration-300 group text-left">
            <div className="w-14 h-14 bg-blue-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition">
              <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Infraestructura</h3>
            <p className="text-gray-400 leading-relaxed">
              Incluimos todos los componentes <span className="text-white font-semibold">Cloud</span> necesarios para soportar las necesidades de su proyecto, con especial relevancia de <span className="text-white font-semibold">Kubernetes</span> y arquitecturas escalables.
            </p>
          </div>

          {/* Pilar 2: Software */}
          <div className="p-8 border border-gray-800 rounded-2xl bg-white/5 hover:border-blue-500 hover:bg-white/10 transition duration-300 group text-left">
            <div className="w-14 h-14 bg-blue-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition">
              <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Software</h3>
            <p className="text-gray-400 leading-relaxed">
              Listamos todo el software (habitualmente Open Source) y los desarrollos a medida. Enfoque preferencial en <span className="text-white font-semibold">Microservicios</span> conectados al streaming de mensajería (Kafka).
            </p>
          </div>

          {/* Pilar 3: Integración */}
          <div className="p-8 border border-gray-800 rounded-2xl bg-white/5 hover:border-blue-500 hover:bg-white/10 transition duration-300 group text-left">
            <div className="w-14 h-14 bg-blue-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition">
              <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Integración</h3>
            <p className="text-gray-400 leading-relaxed">
              Definimos cómo se conectarán de forma segura los diferentes componentes Cloud. Uso preferencial de <span className="text-white font-semibold">MQTT</span> sobre Websockets para comunicación en tiempo real.
            </p>
          </div>

          {/* Pilar 4: Usuario */}
          <div className="p-8 border border-gray-800 rounded-2xl bg-white/5 hover:border-blue-500 hover:bg-white/10 transition duration-300 group text-left">
            <div className="w-14 h-14 bg-blue-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition">
              <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Usuario</h3>
            <p className="text-gray-400 leading-relaxed">
              Diseñamos el uso de la solución para que sea intuitiva y accesible. Nos enfocamos en la experiencia de usuario (UX/UI) para garantizar la adopción de la herramienta.
            </p>
          </div>

        </div>
      </div>

      {/* 4. BENEFICIOS (Grid de 3) */}
      <div className="bg-gray-900 py-20 border-y border-gray-800">
        <div className="container mx-auto px-6">
            <h3 className="text-center text-2xl font-bold mb-12 uppercase tracking-widest text-gray-500">Beneficios para nuestros clientes</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {/* Beneficio 1 */}
                <div className="text-center p-6">
                    <div className="inline-block p-4 rounded-full bg-blue-600/10 mb-4">
                        <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <h4 className="text-xl font-bold mb-2">AHORRO</h4>
                    <p className="text-sm text-gray-400">Alineamos negocio con tecnología, minimizando errores estratégicos y evitando sobrecostes.</p>
                </div>

                {/* Beneficio 2 */}
                <div className="text-center p-6">
                    <div className="inline-block p-4 rounded-full bg-blue-600/10 mb-4">
                        <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <h4 className="text-xl font-bold mb-2">AGILIDAD</h4>
                    <p className="text-sm text-gray-400">Soluciones propuestas siempre teniendo en cuenta posibles cambios en el mercado para agilizar respuestas.</p>
                </div>

                {/* Beneficio 3 */}
                <div className="text-center p-6">
                    <div className="inline-block p-4 rounded-full bg-blue-600/10 mb-4">
                        <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path></svg>
                    </div>
                    <h4 className="text-xl font-bold mb-2">CONFIANZA</h4>
                    <p className="text-sm text-gray-400">Gracias a la cultura DevOps y Agile, ofrecemos resultados tangibles en fases tempranas, generando confianza.</p>
                </div>
            </div>
        </div>
      </div>

      {/* 5. CTA BANNER (Scroll Functionality) */}
      <div className="container mx-auto px-6 py-20">
        <div className="bg-blue-600 rounded-2xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition duration-500"></div>
            <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">¿Quieres más información?</h2>
                <p className="text-blue-100 mb-8 text-lg">Ponte en contacto con nosotros y diseñaremos la arquitectura que tu proyecto necesita.</p>
                
                <button 
                    onClick={scrollToContact}
                    className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full shadow-lg transform transition hover:-translate-y-1 hover:shadow-xl"
                >
                    ME INTERESA
                </button>
            </div>
        </div>
      </div>

    </div>
  );
};

export default ArquitecturaSoluciones;