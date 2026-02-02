import React from 'react';

const Kafka = () => {

  const scrollToContact = () => {
    const form = document.getElementById('formulario-contacto');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      title: "Alta escalabilidad",
      icon: "📈",
      text: "Diseñado para escalar horizontalmente en múltiples servidores, permitiendo manejar volúmenes masivos de datos sin pérdida de rendimiento."
    },
    {
      title: "Tolerancia a fallos",
      icon: "🛡️",
      text: "Los datos se replican automáticamente. Si un nodo falla, la información permanece segura y disponible en otros puntos del clúster."
    },
    {
      title: "Tiempo real",
      icon: "⏱️",
      text: "Permite construir pipelines de datos que procesan eventos en el mismo instante en que ocurren, garantizando inmediatez absoluta."
    },
    {
      title: "Baja latencia",
      icon: "⚡",
      text: "Optimizado para manejar millones de mensajes por segundo con una latencia de milisegundos, ideal para entornos críticos."
    },
    {
      title: "Almacenamiento inmutable",
      icon: "💾",
      text: "Los mensajes se almacenan en disco de forma ordenada y permanente, permitiendo su re-procesamiento siempre que sea necesario."
    },
    {
      title: "Conectores",
      icon: "🔗",
      text: "Amplia gama de conectores nativos para integrar bases de datos, sistemas externos o brokers de mensajería como MQTT."
    }
  ];

  return (
    <div className="bg-white text-black min-h-screen font-sans">
      
      {/* 1. HERO SECTION - BLACK IMPACT */}
      <div className="relative h-[650px] flex items-center justify-center overflow-hidden bg-black text-white">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bbbda546697a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')" }} 
        ></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-[0.4em] mb-8">
              KAFKA
          </h1>
          <p className="text-2xl md:text-4xl font-light max-w-5xl mx-auto opacity-90 leading-relaxed italic">
              Utilizamos esta plataforma de streaming de mensajería junto con Microservicios para cumplir las necesidades técnicas de nuestros clientes.
          </p>
        </div>
      </div>

      {/* 2. ARQUITECTURA TÉCNICA */}
      <div className="container mx-auto px-6 py-32">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-20 max-w-7xl mx-auto mb-32">
            {/* Bloque Info Central */}
            <div className="lg:w-1/3 flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-3xl bg-gray-900 flex items-center justify-center mb-8 shadow-2xl rotate-3">
                    <svg className="w-20 h-20 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16z"/>
                    </svg>
                </div>
                <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-semibold">
                    Plataforma de streaming de mensajería enfocada a procesar flujos de datos en tiempo real de manera escalable y distribuida.
                </p>
            </div>

            {/* Diagrama de Flujo Kafka */}
            <div className="flex-1 w-full bg-slate-50 p-12 rounded-[3rem] border border-gray-100 shadow-inner text-center">
                                <p className="text-sm font-black text-gray-400 mt-8 tracking-[0.6em] uppercase italic">Distributed Event Streaming Flow</p>
            </div>
        </div>

        {/* 3. GRID DE CARACTERÍSTICAS (Texto grande y legible) */}
        <div className="max-w-7xl mx-auto mb-32">
            <h3 className="text-center text-gray-400 text-sm font-bold uppercase tracking-[0.5em] mb-20">
                Principales características de Kafka:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {features.map((f, i) => (
                    <div key={i} className="bg-white p-12 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 group">
                        <div className="text-5xl mb-8 transform group-hover:-translate-y-2 transition-transform duration-300">{f.icon}</div>
                        <h4 className="font-black text-gray-900 mb-6 text-xl uppercase">{f.title}</h4>
                        <p className="text-gray-600 text-lg leading-relaxed">{f.text}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* 4. CASOS DE USO REFORZADOS */}
      <div className="bg-zinc-900 py-32 text-white">
        <div className="container mx-auto px-6">
            <h3 className="text-center text-gray-400 text-sm font-bold uppercase tracking-[0.4em] mb-24 italic">
                Aplicaciones en proyectos reales
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-6xl mx-auto">
                <div className="text-center group">
                    <div className="text-6xl mb-8 group-hover:scale-110 transition-transform">☁️</div>
                    <h5 className="font-black text-2xl mb-6 uppercase tracking-widest text-blue-400">MICROSERVICIOS</h5>
                    <p className="text-gray-300 text-xl leading-relaxed">
                        Aplicaciones nativas de la nube que se ejecutan en contenedores Docker dentro de Kubernetes para manejar grandes volúmenes de datos.
                    </p>
                </div>
                <div className="text-center group">
                    <div className="text-6xl mb-8 group-hover:scale-110 transition-transform">⭐</div>
                    <h5 className="font-black text-2xl mb-6 uppercase tracking-widest text-blue-400">INTELIGENCIA ARTIFICIAL</h5>
                    <p className="text-gray-300 text-xl leading-relaxed">
                        Explotación de IA generativa mediante el uso intensivo de tarjetas gráficas (GPUs) dedicadas, alimentadas por flujos de datos constantes.
                    </p>
                </div>
            </div>
            
            <div className="mt-32 text-center">
                <button 
                    onClick={scrollToContact}
                    className="bg-white text-black font-black py-7 px-20 rounded-full hover:bg-gray-200 transition-all shadow-[0_0_50px_rgba(255,255,255,0.2)] uppercase tracking-[0.3em] text-lg"
                >
                    IMPULSAR MI ARQUITECTURA
                </button>
            </div>
        </div>
      </div>

    </div>
  );
};

export default Kafka;