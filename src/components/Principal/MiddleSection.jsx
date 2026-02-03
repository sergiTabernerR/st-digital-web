import React from 'react';

const MiddleSection = ({ setView }) => {
  // Logos reales usando Simple Icons para mayor profesionalidad
  const techLogos = [
    { name: ".NET", src: "https://cdn.simpleicons.org/dotnet/512BD4" },
    { name: "JavaScript", src: "https://cdn.simpleicons.org/javascript/F7DF1E" },
    { name: "Python", src: "https://cdn.simpleicons.org/python/3776AB" },
    { name: "Azure", src: "https://cdn.simpleicons.org/microsoftazure/0078D4" },
    { name: "Docker", src: "https://cdn.simpleicons.org/docker/2496ED" },
    { name: "Kubernetes", src: "https://cdn.simpleicons.org/kubernetes/326CE5" },
  ];

  const handleScrollToForm = () => {
    // Buscamos el formulario por ID
    const form = document.getElementById('formulario-contacto');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Si el formulario está en otra "View", cambiamos a contacto
      setView('Contacto');
    }
  };

  return (
    <section className="bg-white text-black py-20">
      <div className="container mx-auto px-6">
        
        {/* --- CICLOS DE DESARROLLO --- */}
        <div className="grid md:grid-cols-2 gap-10 mb-24">
            <div className="group p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all text-center bg-slate-50">
                <div className="h-48 mb-6 overflow-hidden rounded-xl">
                  <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=500" alt="Desarrollo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="font-black text-2xl mb-4 uppercase tracking-tighter">El desarrollo es nuestra pasión</h3>
                <button 
               onClick={() => { setView('Desarrollo'); window.scrollTo(0,0); }}

                  className="text-blue-600 text-xs font-black bg-blue-50 px-6 py-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors tracking-widest"
                >
                  LEER MÁS
                </button>
            </div>

            <div className="group p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all text-center bg-slate-50">
                <div className="h-48 mb-6 overflow-hidden rounded-xl">
                  <img src="https://images.unsplash.com/photo-1667372333374-0d4458384bf0?auto=format&fit=crop&q=80&w=500" alt="DevOps" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="font-black text-2xl mb-4 uppercase tracking-tighter">Cultura DevOps e Integración</h3>
                <button 
                                onClick={() => { setView('Devops'); window.scrollTo(0,0); }}

                  className="text-blue-600 text-xs font-black bg-blue-50 px-6 py-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors tracking-widest"
                >
                  LEER MÁS
                </button>
            </div>
        </div>

        {/* --- TECNOLOGÍAS --- */}
        <div className="text-center mb-24">
          <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em] mb-8">Utilizamos todas estas tecnologías...</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 hover:opacity-100 transition-opacity duration-500">
            {techLogos.map((logo, index) => (
              <img key={index} src={logo.src} alt={logo.name} title={logo.name} className="h-10 md:h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300" />
            ))}
          </div>
        </div>

        {/* --- BANNER AZUL CTA (REPARADO) --- */}
        <div className="bg-blue-600 text-white p-12 text-center rounded-2xl mb-24 shadow-2xl shadow-blue-200 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-2xl md:text-4xl font-black mb-6 tracking-tighter uppercase">¿Quieres más información? ¡Ponte en contacto con nosotros!</h2>
              <button 
                onClick={handleScrollToForm}
                className="bg-white text-blue-600 px-10 py-4 font-black rounded-lg hover:bg-gray-100 transition-transform active:scale-95 shadow-lg tracking-widest text-sm"
              >
                  ME INTERESA
              </button>
            </div>
            {/* Adorno visual de fondo */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-blue-500 rounded-full opacity-20"></div>
        </div>

        {/* --- GRID DE SOLUCIONES --- */}
        <div className="text-center">
            <h2 className="text-3xl font-black mb-12 uppercase tracking-tighter">Soluciones a medida para el éxito de tu proyecto</h2>
            <div className="grid md:grid-cols-3 gap-10">
                {[
                  { title: "Software Factory", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=400", cat: "Desarrollo" },
                  { title: "Cloud Computing", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400", cat: "Infraestructura" },
                  { title: "Ciberseguridad", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=400", cat: "Seguridad" }
                ].map((item, idx) => (
                    <div key={idx} className="group text-left cursor-pointer" onClick={() => { setView('soluciones'); window.scrollTo(0,0); }}>
                                     
                        <div className="h-56 mb-5 rounded-2xl overflow-hidden shadow-md">
                          <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        </div>
                        <h4 className="font-black text-xs uppercase tracking-widest text-blue-600 mb-1">{item.cat}</h4>
                        <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                        <p className="text-xs text-gray-400 font-bold group-hover:text-blue-600 transition-colors">LEER MÁS →</p>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default MiddleSection;