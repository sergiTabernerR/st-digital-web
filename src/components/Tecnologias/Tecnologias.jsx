import React from 'react';

const Tecnologias = ({ setView }) => {

  const scrollToContact = () => {
    const form = document.getElementById('formulario-contacto');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    } else {
      setView('Contacto');
      window.scrollTo(0, 0);
    }
  };

  const specializations = [
    {
      title: "WEBSOCKETS",
      id: "WebSocket", // Coincide con App.js
      icon: (
        <div className="w-20 h-20 rounded-full border-4 border-green-600 flex items-center justify-center mb-6">
          <svg className="w-10 h-10 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4.5 12a7.5 7.5 0 0015 0M8.25 12a3.75 3.75 0 117.5 0" />
          </svg>
        </div>
      ),
      description: "Utilizamos este protocolo de comunicación para realizar desarrollos de software a medida con comunicación bidireccional en tiempo real."
    },
    {
      title: "MQTT",
      id: "Mqtt", // Coincide con App.js
      icon: (
        <div className="w-20 h-20 rounded-full border-4 border-purple-800 flex items-center justify-center mb-6">
          <svg className="w-10 h-10 text-purple-800" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10,13.82V17H14V13.82A3,3,0,0,0,14,7.18V4H10V7.18A3,3,0,0,0,10,13.82M12,9a1,1,0,1,1-1,1A1,1,0,0,1,12,9Z" />
          </svg>
        </div>
      ),
      description: "Utilizamos este protocolo de mensajería ligero basado en el modelo publicador/suscriptor sobre Websockets en nuestros desarrollos de software a medida."
    },
    {
      title: "KAFKA",
      id: "Kafka", // Coincide con App.js
      icon: (
        <div className="w-20 h-20 rounded-full border-4 border-stone-800 flex items-center justify-center mb-6">
          <svg className="w-10 h-10 text-stone-800" viewBox="0 0 24 24" fill="currentColor">
             <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"/>
             <circle cx="12" cy="12" r="3"/>
          </svg>
        </div>
      ),
      description: "Utilizamos esta plataforma de streaming de mensajería junto con Microservicios basados en nuestro Framework para cumplir las necesidades técnicas."
    }
  ];

  return (
    <div className="bg-white text-black min-h-screen font-sans pt-20">
      
      {/* 1. HERO SECTION */}
      <div className="relative h-[400px] flex items-center overflow-hidden bg-gray-900">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')" }} 
        ></div>
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-widest mb-4">
              TECNOLOGÍAS
          </h1>
          <p className="text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto opacity-90">
              Dominamos múltiples tecnologías para cubrir cualquier necesidad de nuestros clientes.
          </p>
        </div>
      </div>

      {/* 2. INTRO SECTION */}
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 uppercase tracking-tight">
            Somos expertos en múltiples tecnologías Open Source
        </h2>
        
        <div className="mb-16">
            <h3 className="text-sm font-bold uppercase tracking-[0.3em] mb-10 text-gray-400">Utilizamos todas éstas tecnologías...</h3>
            <div className="flex justify-center items-center gap-12 grayscale opacity-60">
                <button onClick={() => { setView('Kafka'); window.scrollTo(0,0); }} className="hover:text-blue-600 transition-colors text-4xl font-bold">KAFKA</button>
                <button onClick={() => { setView('WebSocket'); window.scrollTo(0,0); }} className="hover:text-blue-600 transition-colors text-4xl font-bold">WS</button>
                <button onClick={() => { setView('Mqtt'); window.scrollTo(0,0); }} className="hover:text-blue-600 transition-colors text-4xl font-bold">MQTT</button>
            </div>
        </div>

        {/* 3. CTA AZUL */}
        <div className="bg-cyan-500 p-8 md:p-12 rounded-lg max-w-4xl mx-auto shadow-xl mb-24 relative overflow-hidden group">
            <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 uppercase tracking-tighter">
                    ¿Quieres más información? ¡Ponte en contacto con nosotros!
                </h3>
                <button 
                    onClick={scrollToContact}
                    className="bg-white text-cyan-600 font-bold py-3 px-8 rounded uppercase text-sm tracking-widest hover:bg-gray-100 transition shadow-lg"
                >
                    ME INTERESA
                </button>
            </div>
        </div>
      </div>

      {/* 4. ESPECIALIZACIONES (Botones corregidos) */}
      <div className="bg-gray-50 py-24 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <h3 className="text-center text-gray-800 text-2xl font-bold mb-20 uppercase tracking-widest">Estamos especializados en...</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {specializations.map((spec, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                {spec.icon}
                <h4 className="text-sm font-black text-gray-800 mb-4 tracking-widest">{spec.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed max-w-xs flex-grow">
                  {spec.description}
                </p>
                {/* AQUI EL CAMBIO: Ahora spec.id tiene valor */}
                <button 
                 onClick={() => { setView(spec.id); window.scrollTo(0, 0); }}
                 className="mt-6 text-[10px] font-bold text-blue-500 hover:text-blue-700 uppercase tracking-widest flex items-center gap-1 group"
                >
                  Leer más <span className="text-xs group-hover:translate-x-1 transition-transform">›</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Tecnologias;