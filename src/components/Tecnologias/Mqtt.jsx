import React from 'react';

const Mqtt = () => {

  const scrollToContact = () => {
    const form = document.getElementById('formulario-contacto');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const components = [
    {
      title: "Broker",
      icon: "🖥️",
      text: "Un servidor centralizado que actúa como un centro de mensajes. Recibe todos los mensajes y los distribuye a los suscriptores adecuados."
    },
    {
      title: "Publicadores",
      icon: "📡",
      text: "Dispositivos o aplicaciones que envían mensajes a un tema (topic) específico dentro del Broker de forma eficiente."
    },
    {
      title: "Suscriptores",
      icon: "📥",
      text: "Dispositivos que se registran para recibir mensajes de un tema específico en el Broker en tiempo real."
    }
  ];

  return (
    <div className="bg-white text-black min-h-screen font-sans">
      
      {/* 1. HERO SECTION - Sin espacio superior */}
      <div className="relative h-[600px] flex items-center justify-center overflow-hidden bg-slate-950 text-white">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')" }} 
        ></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-[0.3em] mb-8">
              MQTT
          </h1>
          <p className="text-2xl md:text-3xl font-light max-w-4xl mx-auto opacity-90 leading-relaxed italic">
              Protocolo de mensajería ligero basado en el modelo publicador/suscriptor sobre WebSockets para transmisión de datos en tiempo real.
          </p>
        </div>
      </div>

      {/* 2. EXPLICACIÓN TÉCNICA */}
      <div className="container mx-auto px-6 py-32">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-20 max-w-6xl mx-auto mb-32">
            {/* Bloque Icono Púrpura */}
            <div className="lg:w-1/3 flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full border-4 border-purple-800 flex items-center justify-center mb-8 shadow-lg">
                    <span className="text-5xl text-purple-800 font-bold">MQTT</span>
                </div>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                    Protocolo de mensajería basado en estándares que se utiliza para la comunicación entre dispositivos de forma eficiente.
                </p>
                <button className="text-purple-700 font-bold mt-6 text-lg hover:underline italic">¿Qué es MQTT? ›</button>
            </div>

            {/* Diagrama de Arquitectura */}
            <div className="flex-1 w-full bg-gray-50 p-12 rounded-3xl border border-gray-100 shadow-sm text-center">
                                <p className="text-sm font-black text-gray-400 mt-8 tracking-[0.5em] uppercase italic">Standard MQTT Messaging Flow</p>
            </div>
        </div>

        {/* 3. COMPONENTES PRINCIPALES */}
        <div className="max-w-7xl mx-auto mb-32">
            <h3 className="text-center text-gray-400 text-sm font-bold uppercase tracking-[0.5em] mb-20">
                Principales componentes de MQTT:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {components.map((c, i) => (
                    <div key={i} className="bg-white p-12 rounded-3xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 text-center group">
                        <div className="text-6xl mb-8 transform group-hover:scale-110 transition-transform">{c.icon}</div>
                        <h4 className="font-black text-gray-900 mb-6 text-xl uppercase tracking-tighter">{c.title}</h4>
                        <p className="text-gray-600 text-lg leading-relaxed">{c.text}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* 4. CASOS DE USO - SECCIÓN GRIS */}
      <div className="bg-slate-50 py-32 border-t border-gray-200">
        <div className="container mx-auto px-6">
            <h3 className="text-center text-gray-500 text-sm font-bold uppercase tracking-[0.4em] mb-24 italic text-purple-900">
                Casos de uso de MQTT en nuestros desarrollos:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-7xl mx-auto">
                <div className="text-center">
                    <div className="text-5xl mb-6">🌐</div>
                    <h5 className="font-black text-lg mb-6 uppercase tracking-widest text-purple-700">APLICACIONES WEB</h5>
                    <p className="text-gray-700 text-lg leading-relaxed">Uso desde navegadores modernos de la comunicación bidireccional sobre WebSockets.</p>
                </div>
                <div className="text-center">
                    <div className="text-5xl mb-6">📱</div>
                    <h5 className="font-black text-lg mb-6 uppercase tracking-widest text-purple-700">APLICACIONES MÓVILES</h5>
                    <p className="text-gray-700 text-lg leading-relaxed">Comunicación optimizada para Smartphones y Tablets, reduciendo el consumo de datos y batería.</p>
                </div>
                <div className="text-center">
                    <div className="text-5xl mb-6">⚙️</div>
                    <h5 className="font-black text-lg mb-6 uppercase tracking-widest text-purple-700">ESCRITORIO / IOT</h5>
                    <p className="text-gray-700 text-lg leading-relaxed">Conectividad robusta para aplicaciones nativas y dispositivos embebidos.</p>
                </div>
            </div>
            
            <div className="mt-32 text-center">
                <button 
                    onClick={scrollToContact}
                    className="bg-purple-800 text-white font-black py-6 px-16 rounded-full hover:bg-purple-900 transition-all shadow-2xl uppercase tracking-[0.2em] text-lg"
                >
                    OPTIMIZAR MI COMUNICACIÓN
                </button>
            </div>
        </div>
      </div>

    </div>
  );
};

export default Mqtt;