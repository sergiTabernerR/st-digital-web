import React from 'react';

const CiCd = () => {

  const scrollToContact = () => {
    const form = document.getElementById('formulario-contacto');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const cycleSteps = [
    { step: "PLAN", icon: "📋", text: "Decisión de los requisitos que debe cumplir el nuevo desarrollo." },
    { step: "CODE", icon: "💻", text: "Diseño y codificación del nuevo desarrollo, cumpliendo los requisitos." },
    { step: "BUILD", icon: "⚙️", text: "Control de la calidad del código fuente y compilación del desarrollo para detectar errores." },
    { step: "TEST", icon: "✅", text: "Ejecución de los tests del desarrollo para asegurar el buen funcionamiento del mismo." },
    { step: "RELEASE", icon: "📦", text: "Generación del artefacto a partir de la compilación del desarrollo." },
    { step: "DEPLOY", icon: "🚀", text: "Despliegue y puesta en marcha del artefacto en el entorno final." },
    { step: "OPERATE", icon: "🛠️", text: "Supervisión del nuevo desarrollo." },
    { step: "MONITOR", icon: "🔍", text: "Monitorización de las métricas y logs del nuevo desarrollo." }
  ];

  const advantages = [
    { title: "Centralizar", icon: "🔗", text: "Tener en un solo repositorio Git todos los scripts necesarios para la ejecución del CI/CD de todos sus proyectos." },
    { title: "Reutilizar", icon: "♻️", text: "Utilizar los scripts CI/CD en múltiples proyectos (por ejemplo, repositorios Go de una misma tecnología)." },
    { title: "Privacidad", icon: "🔒", text: "Disponer de la opción de evitar acceder y manipular los scripts de CI/CD a los desarrolladores de su proyecto." },
    { title: "Actualizar", icon: "🔄", text: "Realizar actualizaciones de los scripts de CI/CD sin necesitar ningún cambio en los proyectos afectados." }
  ];

  return (
    <div className="bg-white text-black min-h-screen font-sans">
      
      {/* 1. HERO SECTION - BLACK IMPACT */}
      <div className="relative h-[600px] flex items-center justify-center overflow-hidden bg-black text-white">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-[0.4em] mb-8">
              CI/CD
          </h1>
          <p className="text-2xl md:text-3xl font-light max-w-4xl mx-auto opacity-90 leading-relaxed italic">
              Ofrecemos servicio de análisis, diseño, implementación y mantenimiento de procesos de integración y despliegue continuo.
          </p>
        </div>
      </div>

      {/* 2. CICLO CI/CD */}
      <div className="container mx-auto px-6 py-32">
        <h2 className="text-center text-4xl md:text-5xl font-black uppercase mb-24 tracking-tighter">Ciclo CI/CD</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-32">
            {cycleSteps.map((s, i) => (
                <div key={i} className="bg-slate-50 p-10 rounded-3xl border border-gray-100 flex flex-col items-center text-center group hover:bg-white hover:shadow-2xl transition-all duration-500">
                    <span className="text-5xl mb-6 group-hover:scale-110 transition-transform">{s.icon}</span>
                    <h4 className="font-bold text-blue-600 mb-4 tracking-widest">{s.step}</h4>
                    <p className="text-gray-700 text-lg leading-snug">{s.text}</p>
                </div>
            ))}
        </div>

        {/* 3. ARQUITECTURA CENTRALIZADA */}
        <div className="bg-zinc-900 text-white rounded-[4rem] p-16 md:p-24 mb-32 shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-black uppercase mb-16 text-center">Arquitectura centralizada del CI/CD</h2>
            <div className="flex flex-col lg:flex-row items-center gap-20">
                <div className="lg:w-1/2">
                    <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12">
                        Hemos diseñado una arquitectura centralizada para el mantenimiento y la ejecución del CI/CD de cada proyecto (repositorio Git). Esto nos permite:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {advantages.map((adv, idx) => (
                            <div key={idx} className="border-l-4 border-blue-500 pl-6 py-2">
                                <h5 className="font-bold text-xl uppercase mb-2 text-blue-400">{adv.title}</h5>
                                <p className="text-gray-400 text-lg">{adv.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="lg:w-1/2 flex justify-center">
                     <div className="relative w-full max-w-md aspect-square bg-white/5 rounded-full flex items-center justify-center p-10 border border-white/10">
                        {/* Placeholder para el diagrama de arquitectura centralizada */}
                        <div className="text-center">
                            <span className="text-8xl block mb-4">🏗️</span>
                            <span className="text-xs font-bold tracking-[0.3em] uppercase opacity-50">Centralized Architecture Diagram</span>
                        </div>
                     </div>
                </div>
            </div>
        </div>

        {/* 4. ESPECIALIZACIÓN EN HERRAMIENTAS */}
        <div className="max-w-7xl mx-auto">
            <h3 className="text-center text-gray-400 text-sm font-bold uppercase tracking-[0.5em] mb-20 italic">Estamos especializados en...</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                <div className="text-center group">
                    <div className="h-24 flex items-center justify-center mb-8">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg" alt="Git" className="h-20 grayscale group-hover:grayscale-0 transition-all"/>
                    </div>
                    <h5 className="font-black text-xl mb-4">GITFLOW</h5>
                    <p className="text-gray-600 text-lg">Implementamos el flujo de trabajo Gitflow de forma homogénea para todos sus proyectos.</p>
                </div>
                <div className="text-center group">
                    <div className="h-24 flex items-center justify-center mb-8">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Cloudflare_Logo.svg/1200px-Cloudflare_Logo.svg.png" alt="Gitlab" className="h-12 grayscale group-hover:grayscale-0 transition-all"/>
                    </div>
                    <h5 className="font-black text-xl mb-4 uppercase">GitLab / GitHub Actions</h5>
                    <p className="text-gray-600 text-lg">Aproveche todas las funcionalidades de automatización de Gitlab y el potencial de GitHub Actions.</p>
                </div>
                <div className="text-center group">
                    <div className="h-24 flex items-center justify-center mb-8">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Azure_DevOps.svg" alt="Azure DevOps" className="h-20 grayscale group-hover:grayscale-0 transition-all"/>
                    </div>
                    <h5 className="font-black text-xl mb-4">AZURE DEVOPS</h5>
                    <p className="text-gray-600 text-lg">Te ayudamos a implementar el conjunto de herramientas y servicios de Microsoft.</p>
                </div>
            </div>
        </div>
      </div>

      {/* 5. CTA FINAL */}
      <div className="bg-blue-600 py-32 text-white text-center">
        <h2 className="text-3xl md:text-6xl font-black mb-12 uppercase italic px-6">
            ¿Quieres optimizar tus despliegues?
        </h2>
        <button 
            onClick={scrollToContact}
            className="bg-white text-blue-600 font-black py-7 px-20 rounded-full hover:bg-gray-100 transition-all shadow-2xl uppercase tracking-[0.3em] text-xl"
        >
            CONTACTAR EXPERTOS
        </button>
      </div>

    </div>
  );
};

export default CiCd;