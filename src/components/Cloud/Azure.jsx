import React from 'react';

const Azure = () => {

  const scrollToContact = () => {
    const form = document.getElementById('formulario-contacto');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    { 
      title: "Colaboración", 
      icon: "🤝", 
      text: "Pulumi utiliza lenguajes como JavaScript, Dotnet o Python para la declaración de recursos en Azure, permitiendo que desarrollo y operaciones hablen el mismo idioma." 
    },
    { 
      title: "Orquestación", 
      icon: "🎼", 
      text: "Permite generar recursos de Cloud de forma orquestada, asegurando la disponibilidad de recursos base de datos antes que el clúster de Kubernetes." 
    },
    { 
      title: "Mantenibilidad", 
      icon: "🛠️", 
      text: "Basado en lenguajes de programación estándar, los desarrollos en Pulumi para Azure cumplen con los mismos criterios de calidad de código fuente." 
    },
    { 
      title: "Dinamismo", 
      icon: "⚡", 
      text: "Genera entornos completos en Azure para realizar UATs y los elimina al finalizar, reduciendo drásticamente los costes operativos." 
    }
  ];

  return (
    <div className="bg-white text-black min-h-screen font-sans">
      
      {/* 1. HERO SECTION - BLACK IMPACT */}
      <div className="relative h-[600px] flex items-center justify-center overflow-hidden bg-black text-white">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512756783939-ad736f834e8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')" }} 
        ></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-[0.4em] mb-8">
              AZURE
          </h1>
          <p className="text-2xl md:text-3xl font-light max-w-4xl mx-auto opacity-90 leading-relaxed italic">
              Ofrecemos el servicio de implantación de sus proyectos en la plataforma Azure de Microsoft.
          </p>
        </div>
      </div>

      {/* 2. DEFINICIÓN Y ECOSISTEMA */}
      <div className="container mx-auto px-6 py-32">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32 max-w-7xl mx-auto">
            <div className="lg:w-1/2">
                <div className="inline-block bg-blue-50 text-blue-600 px-6 py-2 rounded-full text-sm font-black tracking-widest uppercase mb-8">
                    Cloud Leader
                </div>
                <h2 className="text-4xl md:text-6xl font-black uppercase mb-8 tracking-tighter">Más de 200 productos y servicios.</h2>
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed italic">
                    Azure es la plataforma compuesta por una vasta red de servicios diseñados para ayudarle a dar vida a nuevas soluciones y resolver las necesidades de su empresa.
                </p>
            </div>
            <div className="lg:w-1/2 flex justify-center">
                <div className="bg-slate-50 p-12 rounded-[3rem] border border-gray-100 shadow-inner">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" 
                        alt="Azure Logo" 
                        className="h-32 md:h-48 drop-shadow-2xl"
                    />
                </div>
            </div>
        </div>

        {/* 3. ARQUITECTURA CENTRALIZADA CON PULUMI */}
        <div className="bg-zinc-900 text-white rounded-[4rem] p-12 md:p-24 shadow-2xl mb-32">
            <h3 className="text-center text-3xl md:text-5xl font-black uppercase mb-20">Pulumi en la arquitectura de Azure</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {features.map((f, i) => (
                    <div key={i} className="bg-white/5 p-10 rounded-3xl border border-white/10 hover:bg-white/10 transition-all">
                        <div className="text-5xl mb-6">{f.icon}</div>
                        <h4 className="text-2xl font-black text-blue-400 mb-4 uppercase tracking-widest">{f.title}</h4>
                        <p className="text-gray-300 text-lg leading-relaxed">{f.text}</p>
                    </div>
                ))}
            </div>

            <div className="mt-24 border-t border-white/10 pt-16">
                <h4 className="text-center text-sm font-bold text-gray-500 uppercase tracking-[0.5em] mb-12">Recursos gestionados dinámicamente:</h4>
                <div className="flex flex-wrap justify-center gap-6">
                    {["Azure SQL", "WAF (Firewall)", "Kubernetes Services", "Azure Key Vault"].map((item, idx) => (
                        <span key={idx} className="bg-blue-600/20 text-blue-300 border border-blue-500/30 px-8 py-3 rounded-xl font-bold uppercase text-sm">
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
            Optimice su infraestructura en Azure
        </h2>
        <button 
            onClick={scrollToContact}
            className="bg-white text-blue-600 font-black py-7 px-20 rounded-full hover:bg-gray-100 transition-all shadow-2xl uppercase tracking-[0.3em] text-xl"
        >
            EMPEZAR AHORA
        </button>
      </div>

    </div>
  );
};

export default Azure;