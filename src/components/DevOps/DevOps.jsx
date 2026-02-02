import React from 'react';

const DevOps = () => {

  const scrollToContact = () => {
    const form = document.getElementById('formulario-contacto');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      title: "CI/CD",
      icon: "🔄",
      text: "Somos expertos en generar procesos de integración y despliegue continuo en producción, acelerando la entrega de valor."
    },
    {
      title: "Source Code Quality",
      icon: "💎",
      text: "Implementamos las mejores herramientas para el control de la calidad del código fuente y la mantenibilidad."
    },
    {
      title: "Observability",
      icon: "📊",
      text: "Integramos la observabilidad avanzada para monitorizar y mejorar la salud y calidad de sus desarrollos en tiempo real."
    },
    {
      title: "Cloud",
      icon: "☁️",
      text: "Utilizamos toda la potencia de la computación en la nube (AWS, Azure, GCP) para el éxito de sus proyectos escalables."
    },
    {
      title: "Enterprise Architecture",
      icon: "🏛️",
      text: "Ofrecemos propuestas personalizadas de arquitectura empresarial con una visión DevOps integral y moderna."
    },
    {
      title: "DevSecOps",
      icon: "🛡️",
      text: "Aseguramos que todos sus procesos implementen el punto de vista de la seguridad desde el inicio del desarrollo."
    }
  ];

  return (
    <div className="bg-white text-black min-h-screen font-sans">
      
      {/* 1. HERO SECTION - BLACK IMPACT */}
      <div className="relative h-[600px] flex items-center justify-center overflow-hidden bg-black text-white">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1667372333374-0d3c3325064c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')" }} 
        ></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-[0.4em] mb-8">
              DEVOPS
          </h1>
          <p className="text-2xl md:text-3xl font-light max-w-4xl mx-auto opacity-90 leading-relaxed italic">
              Ofrecemos servicio de diseño y ejecución de soluciones DevOps para la automatización de procesos y control de calidad.
          </p>
        </div>
      </div>

      {/* 2. CULTURA DEVOPS */}
      <div className="container mx-auto px-6 py-32">
        <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-6 tracking-tight">Cultura DevOps</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
                La cultura DevOps se centra en el cambio profundo en la forma en la que las personas trabajan y colaboran.
            </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 max-w-7xl mx-auto mb-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:w-2/3">
                <div className="flex gap-6 items-start">
                    <span className="text-4xl">👥</span>
                    <div>
                        <h4 className="font-bold text-xl mb-2 uppercase">Colaboración y alineación</h4>
                        <p className="text-gray-600 text-lg">Ayudamos a los equipos a colaborar y planificar entre ellos, poniendo el foco en la transparencia.</p>
                    </div>
                </div>
                <div className="flex gap-6 items-start">
                    <span className="text-4xl">🤝</span>
                    <div>
                        <h4 className="font-bold text-xl mb-2 uppercase">Responsabilidad compartida</h4>
                        <p className="text-gray-600 text-lg">Marcamos claramente las tareas que deben ejecutarse de forma compartida entre equipos.</p>
                    </div>
                </div>
                <div className="flex gap-6 items-start">
                    <span className="text-4xl">🚀</span>
                    <div>
                        <h4 className="font-bold text-xl mb-2 uppercase">Ciclos rápidos</h4>
                        <p className="text-gray-600 text-lg">Acordamos ciclos de desarrollos más cortos y, por tanto, más rápidos y eficientes.</p>
                    </div>
                </div>
                <div className="flex gap-6 items-start">
                    <span className="text-4xl">🔄</span>
                    <div>
                        <h4 className="font-bold text-xl mb-2 uppercase">Mejora continua</h4>
                        <p className="text-gray-600 text-lg">Nos enfocamos en que el desarrollo y los equipos mejoren en todos los aspectos.</p>
                    </div>
                </div>
            </div>

            {/* Logo Central de DevOps */}
            <div className="lg:w-1/3 flex justify-center">
                <div className="w-64 h-64 bg-slate-50 rounded-full border-2 border-dashed border-blue-400 flex items-center justify-center p-8">
                     <span className="text-4xl font-black text-blue-600 tracking-tighter">Dev ♾️ Ops</span>
                </div>
            </div>
        </div>

        {/* 3. SERVICIOS (Grid con fuentes grandes) */}
        <div className="max-w-7xl mx-auto">
            <h3 className="text-center text-gray-400 text-sm font-bold uppercase tracking-[0.5em] mb-20 italic">
                Descubre nuestros servicios DevOps:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {services.map((s, i) => (
                    <div key={i} className="bg-white p-12 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 group">
                        <div className="text-6xl mb-8 group-hover:rotate-12 transition-transform">{s.icon}</div>
                        <h4 className="font-black text-gray-900 mb-6 text-xl uppercase tracking-wider">{s.title}</h4>
                        <p className="text-gray-600 text-lg leading-relaxed">{s.text}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* 4. FOOTER CALL TO ACTION */}
      <div className="bg-slate-50 py-32 border-t border-gray-200">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-12 uppercase italic text-blue-900">
                ¿Quieres más información? <br/> ¡Ponte en contacto con nosotros!
            </h2>
            <button 
                onClick={scrollToContact}
                className="bg-blue-600 text-white font-black py-7 px-20 rounded-full hover:bg-blue-700 transition-all shadow-2xl uppercase tracking-[0.3em] text-xl"
            >
                ME INTERESA
            </button>
        </div>
      </div>

    </div>
  );
};

export default DevOps;