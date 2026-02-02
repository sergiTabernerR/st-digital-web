import React from 'react';

const GoogleCloud = () => {

  const scrollToContact = () => {
    const form = document.getElementById('formulario-contacto');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const pulumiBenefits = [
    { 
      title: "Colaboración", 
      icon: "🤝", 
      text: "Pulumi permite que los equipos de desarrollo y operaciones utilicen lenguajes comunes como JavaScript o Python para gestionar Google Cloud." 
    },
    { 
      title: "Orquestación", 
      icon: "⚙️", 
      text: "Aseguramos la disponibilidad de recursos críticos, como bases de datos SQL, antes de desplegar servicios en Kubernetes Engine." 
    },
    { 
      title: "Mantenibilidad", 
      icon: "💎", 
      text: "La infraestructura en GCP se trata como código fuente real, aplicando estándares de calidad y revisiones constantes." 
    },
    { 
      title: "Dinamismo", 
      icon: "🚀", 
      text: "Capacidad para generar entornos de prueba completos en Google Cloud y eliminarlos automáticamente para optimizar costes." 
    }
  ];

  return (
    <div className="bg-white text-black min-h-screen font-sans">
      
      {/* 1. HERO SECTION - Pantalla Completa */}
      <div className="relative h-[600px] flex items-center justify-center overflow-hidden bg-zinc-900 text-white">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')" }} 
        ></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-[0.2em] mb-8">
              GOOGLE CLOUD
          </h1>
          <p className="text-2xl md:text-3xl font-light max-w-4xl mx-auto opacity-90 leading-relaxed italic">
              Ofrecemos el servicio de implantación de sus proyectos en la plataforma Google Cloud.
          </p>
        </div>
      </div>

      {/* 2. DEFINICIÓN Y LOGO */}
      <div className="container mx-auto px-6 py-32">
        <div className="flex flex-col lg:flex-row items-center gap-20 mb-32 max-w-7xl mx-auto">
            <div className="lg:w-1/2">
                <div className="inline-block bg-green-50 text-green-600 px-6 py-2 rounded-full text-sm font-black tracking-widest uppercase mb-8">
                    Innovación Cloud
                </div>
                <h2 className="text-4xl md:text-6xl font-black uppercase mb-8 tracking-tighter">Potencia y Escalabilidad.</h2>
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed italic">
                    GCP es el conjunto de herramientas y servicios de Google para la implantación de la cultura DevOps, ofreciendo una infraestructura global y segura.
                </p>
            </div>
            <div className="lg:w-1/2 flex justify-center">
                <div className="bg-white p-16 rounded-[4rem] shadow-xl border border-gray-100 transition-transform hover:scale-105">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" 
                        alt="Google Cloud Logo" 
                        className="h-24 md:h-32"
                    />
                </div>
            </div>
        </div>

        {/* 3. PULUMI Y ARQUITECTURA */}
        <div className="bg-slate-50 rounded-[4rem] p-12 md:p-24 border border-gray-200">
            <h3 className="text-center text-3xl md:text-5xl font-black uppercase mb-20 tracking-tight">
                GCP en nuestra Arquitectura Centralizada
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto mb-20">
                {pulumiBenefits.map((b, i) => (
                    <div key={i} className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all">
                        <div className="text-5xl mb-6">{b.icon}</div>
                        <h4 className="text-xl font-black text-blue-600 mb-4 uppercase tracking-wider">{b.title}</h4>
                        <p className="text-gray-600 text-lg leading-relaxed">{b.text}</p>
                    </div>
                ))}
            </div>

            <div className="bg-white p-10 rounded-3xl border-2 border-dashed border-gray-200 text-center max-w-4xl mx-auto">
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-[0.4em] mb-8">Servicios gestionados dinámicamente</h4>
                <div className="flex flex-wrap justify-center gap-8 font-black text-gray-800 italic">
                    <span>SQL</span>
                    <span>RED DE VPC</span>
                    <span>KUBERNETES ENGINE</span>
                    <span>BIGQUERY</span>
                </div>
            </div>
        </div>
      </div>

      {/* 4. CTA */}
      <div className="bg-zinc-900 py-32 text-center text-white">
        <h2 className="text-3xl md:text-5xl font-black mb-12 uppercase italic px-6">
            Lleve su empresa al siguiente nivel con GCP
        </h2>
        <button 
            onClick={scrollToContact}
            className="bg-blue-600 text-white font-black py-7 px-20 rounded-full hover:bg-blue-700 transition-all shadow-2xl uppercase tracking-[0.3em] text-xl"
        >
            SOLICITAR CONSULTORÍA
        </button>
      </div>

    </div>
  );
};

export default GoogleCloud;