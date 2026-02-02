import React from 'react';

const InteligenciaArtificial = () => {
  const bentoItems = [
    {
      title: "Agentes Inteligentes",
      desc: "Automatización de tareas complejas con razonamiento lógico autónomo.",
      size: "md:col-span-2",
      color: "bg-blue-600/10",
      icon: "🤖"
    },
    {
      title: "Análisis Predictivo",
      desc: "Anticípate al mercado con datos.",
      size: "md:col-span-1",
      color: "bg-gray-900",
      icon: "📈"
    },
    {
      title: "NLP Avanzado",
      desc: "Comprensión semántica de documentos y lenguaje natural.",
      size: "md:col-span-1",
      color: "bg-gray-900",
      icon: "💬"
    },
    {
      title: "Visión Computerizada",
      desc: "Identificación de patrones y objetos en tiempo real con precisión milimétrica.",
      size: "md:col-span-2",
      color: "bg-set-blue/20",
      icon: "👁️"
    }
  ];

  return (
    <div className="bg-black text-white pt-20">
      {/* --- HERO IA (Inspirado en diseños Minimalistas) --- */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-6 overflow-hidden">
        {/* Luces de fondo (Efecto Bloom) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-set-blue/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-block px-4 py-1.5 border border-set-blue/30 rounded-full mb-8 bg-set-blue/5 backdrop-blur-sm">
            <span className="text-set-blue text-xs font-bold tracking-[0.2em] uppercase">AI Powered Solutions</span>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
            The New <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-set-blue via-cyan-400 to-white">
              Intelligence
            </span>
          </h1>
          
          <p className="max-w-xl mx-auto text-gray-400 text-lg md:text-xl font-light leading-relaxed">
            No solo implementamos IA, construimos el cerebro digital que hará escalar tu negocio al siguiente nivel de eficiencia.
          </p>
          
          <div className="mt-12 flex flex-col md:flex-row justify-center gap-6">
            <button className="bg-white text-black px-10 py-4 font-bold uppercase tracking-widest hover:bg-set-blue hover:text-white transition-all duration-500">
              Empezar ahora
            </button>
            <button className="border border-gray-800 px-10 py-4 font-bold uppercase tracking-widest hover:border-set-blue transition-all">
              Explorar Modelos
            </button>
          </div>
        </div>
      </section>

      {/* --- BENTO GRID SECTION (Estructura de Captura Moderna) --- */}
      <section className="py-24 px-6 bg-white text-black">
        <div className="container mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="text-5xl font-black uppercase italic tracking-tighter leading-none mb-4">
              Capacidades <span className="text-set-blue">Core</span>
            </h2>
            <p className="text-gray-500 text-lg font-medium tracking-tight">
              Tecnología de última generación adaptada a desafíos reales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bentoItems.map((item, idx) => (
              <div 
                key={idx} 
                className={`${item.size} ${item.color} p-10 rounded-[2.5rem] border border-transparent hover:border-set-blue/20 transition-all duration-500 flex flex-col justify-between min-h-[300px] group`}
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                <div>
                  <h3 className={`text-3xl font-black uppercase mb-3 ${item.color === 'bg-gray-900' ? 'text-white' : 'text-black'}`}>
                    {item.title}
                  </h3>
                  <p className={`${item.color === 'bg-gray-900' ? 'text-gray-400' : 'text-gray-600'} text-sm leading-relaxed max-w-xs font-medium`}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WORKFLOW SECCIÓN (DARK) --- */}
      <section className="py-24 px-6 border-t border-gray-900 bg-black">
        <div className="container mx-auto text-center mb-20">
          <h2 className="text-3xl font-black uppercase tracking-widest">Integración Transparente</h2>
        </div>
        
        <div className="container mx-auto grid md:grid-cols-3 gap-12">
          {[
            { step: "01", name: "Data Ingestion", text: "Conectamos con tus fuentes de datos actuales de forma segura." },
            { step: "02", name: "Model Training", text: "Entrenamos modelos específicos para tu sector de negocio." },
            { step: "03", name: "Deploy & Scale", text: "Despliegue en la nube con monitorización en tiempo real." }
          ].map((item, i) => (
            <div key={i} className="relative p-8 border-l border-gray-800 hover:border-set-blue transition-colors">
              <span className="text-6xl font-black text-gray-900 absolute -top-10 left-4 z-0">{item.step}</span>
              <h4 className="text-xl font-bold uppercase mb-4 relative z-10">{item.name}</h4>
              <p className="text-gray-500 text-sm leading-relaxed relative z-10">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default InteligenciaArtificial;