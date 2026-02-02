import React from 'react';

const Kubernetes = () => {

  const scrollToContact = () => {
    const form = document.getElementById('formulario-contacto');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const pulumiFeatures = [
    { 
      title: "Colaboración", 
      icon: "🤝", 
      text: "Pulumi permite utilizar lenguajes de programación reales para definir recursos en Kubernetes, facilitando la comunicación entre desarrollo y operaciones." 
    },
    { 
      title: "Orquestación", 
      icon: "🏗️", 
      text: "Permite generar recursos de forma secuencial, asegurando que la infraestructura base esté lista antes de desplegar servicios en el clúster." 
    },
    { 
      title: "Mantenibilidad", 
      icon: "⚙️", 
      text: "Al estar basado en código estándar, el despliegue en Kubernetes cumple con los mismos criterios de calidad y revisión que el software de negocio." 
    },
    { 
      title: "Dinamismo", 
      icon: "🔄", 
      text: "Capacidad para generar entornos de Kubernetes completos para pruebas y eliminarlos al finalizar, optimizando el uso de recursos." 
    }
  ];

  return (
    <div className="bg-white text-black min-h-screen font-sans">
      
      {/* 1. HERO SECTION */}
      <div className="relative h-[600px] flex items-center justify-center overflow-hidden bg-slate-900 text-white">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')" }} 
        ></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-[0.3em] mb-8">
              KUBERNETES
          </h1>
          <p className="text-2xl md:text-3xl font-light max-w-4xl mx-auto opacity-90 leading-relaxed italic">
              Ofrecemos el servicio de implantación de sus proyectos en Kubernetes.
          </p>
        </div>
      </div>

      {/* 2. DEFINICIÓN Y VALOR */}
      <div className="container mx-auto px-6 py-32">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32 max-w-7xl mx-auto text-center lg:text-left">
            <div className="lg:w-1/2">
                <div className="inline-block bg-blue-100 text-blue-700 px-6 py-2 rounded-full text-sm font-black tracking-widest uppercase mb-8">
                    Orquestación Nativa
                </div>
                <h2 className="text-4xl md:text-6xl font-black uppercase mb-8 tracking-tighter">Gestión de cargas de trabajo.</h2>
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                    Kubernetes es la plataforma para administrar cargas de trabajo y servicios, facilitando la automatización y la configuración declarativa de sus contenedores.
                </p>
            </div>
            <div className="lg:w-1/2 flex justify-center">
                <div className="bg-white p-12 rounded-full shadow-2xl border border-gray-100">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg" 
                        alt="K8s" 
                        className="h-40 md:h-56 animate-pulse-slow"
                    />
                </div>
            </div>
        </div>

        {/* 3. ARQUITECTURA CENTRALIZADA */}
        <div className="bg-zinc-950 text-white rounded-[4rem] p-12 md:p-24 shadow-2xl mb-32 relative overflow-hidden">
            <h3 className="text-center text-3xl md:text-5xl font-black uppercase mb-20 relative z-10">
                Pulumi en la arquitectura de Kubernetes
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto relative z-10">
                {pulumiFeatures.map((f, i) => (
                    <div key={i} className="bg-white/5 p-12 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-all group">
                        <div className="text-5xl mb-6 grayscale group-hover:grayscale-0 transition-all">{f.icon}</div>
                        <h4 className="text-2xl font-black text-blue-400 mb-4 uppercase tracking-wider">{f.title}</h4>
                        <p className="text-gray-400 text-lg leading-relaxed">{f.text}</p>
                    </div>
                ))}
            </div>

            <div className="mt-24 pt-16 border-t border-white/10 text-center">
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-[0.5em] mb-12 italic">Recursos orquestados dinámicamente</h4>
                <div className="flex flex-wrap justify-center gap-4">
                    {["Namespaces", "Config Maps", "Secrets", "Deployments"].map((item, idx) => (
                        <span key={idx} className="bg-blue-600 px-8 py-3 rounded-full font-black uppercase text-xs tracking-widest">
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </div>
      </div>

      {/* 4. FOOTER CTA */}
      <div className="bg-blue-600 py-32 text-center text-white">
        <h2 className="text-3xl md:text-5xl font-black mb-12 uppercase italic px-6">
            Escale sus aplicaciones con confianza
        </h2>
        <button 
            onClick={scrollToContact}
            className="bg-white text-blue-600 font-black py-7 px-20 rounded-full hover:bg-gray-100 transition-all shadow-2xl uppercase tracking-[0.3em] text-xl"
        >
            HABLAR CON UN EXPERTO
        </button>
      </div>

    </div>
  );
};

export default Kubernetes;