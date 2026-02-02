import React from 'react';

const WebSocket = () => {

  const scrollToContact = () => {
    const form = document.getElementById('formulario-contacto');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      title: "Comunicación bidireccional",
      icon: "⇄",
      text: "Tanto el cliente como el servidor pueden iniciar la transmisión de datos simultáneamente de forma fluida."
    },
    {
      title: "Comunicación persistente",
      icon: "🔗",
      text: "Se establece una única conexión que se mantiene abierta durante toda la sesión del usuario."
    },
    {
      title: "Eficiencia máxima",
      icon: "⚡",
      text: "Reduce drásticamente la latencia y la sobrecarga en comparación con las peticiones HTTP tradicionales."
    }
  ];

  return (
    <div className="bg-white text-black min-h-screen font-sans">
      
      {/* 1. HERO SECTION - Sin espacio superior */}
      <div className="relative h-[600px] flex items-center justify-center overflow-hidden bg-black text-white">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-[0.3em] mb-8">
              WEBSOCKETS
          </h1>
          <p className="text-2xl md:text-3xl font-light max-w-4xl mx-auto opacity-90 leading-relaxed italic">
              Utilizamos este protocolo para realizar desarrollos a medida con comunicación bidireccional en tiempo real.
          </p>
        </div>
      </div>

      {/* 2. EXPLICACIÓN TÉCNICA REFORZADA */}
      <div className="container mx-auto px-6 py-32">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-20 max-w-6xl mx-auto mb-32">
            {/* Bloque Icono con texto grande */}
            <div className="lg:w-1/3 flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full border-4 border-green-600 flex items-center justify-center mb-8 shadow-lg">
                    <span className="text-6xl text-green-600">🌐</span>
                </div>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                    Protocolo de comunicación que permite una conexión bidireccional y persistente (full-duplex) entre cliente y servidor.
                </p>
                <button className="text-blue-600 font-bold mt-6 text-lg hover:underline">¿Qué es WebSockets? ›</button>
            </div>

            {/* Diagrama Conceptual */}
            <div className="flex-1 w-full bg-gray-50 p-12 rounded-3xl border border-gray-100 shadow-sm">
                
                <p className="text-sm font-black text-gray-400 mt-8 tracking-[0.5em] uppercase text-center">HANDSHAKE FLOW</p>
            </div>
        </div>

        {/* 3. CARACTERÍSTICAS (Tarjetas con texto grande) */}
        <div className="max-w-7xl mx-auto mb-32">
            <h3 className="text-center text-gray-400 text-sm font-bold uppercase tracking-[0.5em] mb-20">
                Características Principales
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {features.map((f, i) => (
                    <div key={i} className="bg-white p-12 rounded-3xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 text-center group">
                        <div className="text-6xl mb-8 transform group-hover:scale-110 transition-transform">{f.icon}</div>
                        <h4 className="font-black text-gray-900 mb-6 text-xl uppercase tracking-tighter">{f.title}</h4>
                        <p className="text-gray-600 text-lg leading-relaxed">{f.text}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* 4. CASOS DE USO - SECCIÓN GRIS REFORZADA */}
      <div className="bg-zinc-50 py-32 border-t border-gray-200">
        <div className="container mx-auto px-6">
            <h3 className="text-center text-gray-500 text-sm font-bold uppercase tracking-[0.4em] mb-24 italic">
                Casos de uso reales
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-7xl mx-auto">
                <div className="text-center">
                    <div className="text-5xl mb-6">💻</div>
                    <h5 className="font-black text-lg mb-6 uppercase tracking-widest text-blue-600">APLICACIONES WEB</h5>
                    <p className="text-gray-700 text-lg leading-relaxed">Comunicación bidireccional nativa desde cualquier navegador moderno.</p>
                </div>
                <div className="text-center">
                    <div className="text-5xl mb-6">📱</div>
                    <h5 className="font-black text-lg mb-6 uppercase tracking-widest text-blue-600">APLICACIONES MÓVILES</h5>
                    <p className="text-gray-700 text-lg leading-relaxed">Reducción drástica de latencia en dispositivos iOS y Android.</p>
                </div>
                <div className="text-center">
                    <div className="text-5xl mb-6">🖥️</div>
                    <h5 className="font-black text-lg mb-6 uppercase tracking-widest text-blue-600">ESCRITORIO</h5>
                    <p className="text-gray-700 text-lg leading-relaxed">Conexión persistente nativa para Windows, macOS y Linux.</p>
                </div>
            </div>
            
            <div className="mt-32 text-center">
                <button 
                    onClick={scrollToContact}
                    className="bg-blue-600 text-white font-black py-6 px-16 rounded-full hover:bg-blue-700 transition-all shadow-2xl uppercase tracking-[0.2em] text-lg"
                >
                    CONTACTAR AHORA
                </button>
            </div>
        </div>
      </div>

    </div>
  );
};

export default WebSocket;