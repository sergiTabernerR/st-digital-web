import React from 'react';

// EL CAMBIO CLAVE: Añadir { setView } aquí abajo
const MiddleSection = ({ setView }) => {
  const logos = [
    { name: ".NET", url: "https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg" },
    { name: "JS", url: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
    { name: "Python", url: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
    { name: "Azure", url: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" },
    { name: "Docker", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Docker_logo_%28until_2025%29.png/640px-Docker_logo_%28until_2025%29.png" },
    { name: "Kubernetes", url: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg" },
  ];

  return (
    <section className="bg-white py-20 text-black">
      <div className="container mx-auto px-6">
        {/* Grilla Superior: Ciclos */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div className="flex flex-col items-center text-center p-8 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition">
            <img src="https://cdn-icons-png.flaticon.com/512/2463/2463510.png" className="h-40 mb-6" alt="Software Cycle" />
            <h3 className="text-2xl font-bold mb-4">El desarrollo es nuestra pasión</h3>
            <button 
              onClick={() => { setView('Desarrollo'); window.scrollTo(0,0); }}
              className="bg-blue-600 text-white px-6 py-2 text-xs font-bold rounded uppercase tracking-widest hover:bg-blue-700 transition"
            >
              LEER MÁS
            </button>
          </div>
          
          <div className="flex flex-col items-center text-center p-8 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition">
            <img src="https://cdn-icons-png.flaticon.com/512/5261/5261831.png" className="h-40 mb-6" alt="DevOps Cycle" />
            <h3 className="text-2xl font-bold mb-4">Cultura DevOps e Integración</h3>
            <button 
              onClick={() => { setView('Devops'); window.scrollTo(0,0); }}
              className="bg-blue-600 text-white px-6 py-2 text-xs font-bold rounded uppercase tracking-widest hover:bg-blue-700 transition"
            >
              LEER MÁS
            </button>
          </div>
        </div>

        {/* Sección Logos */}
        <div className="text-center mb-20">
          <h4 className="text-gray-500 font-bold uppercase tracking-widest mb-10 text-sm">Utilizamos todas estas tecnologías...</h4>
          <div className="flex flex-wrap justify-center gap-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            {logos.map(logo => (
              <img key={logo.name} src={logo.url} alt={logo.name} className="h-12 w-auto object-contain" />
            ))}
          </div>
        </div>

        {/* Banner Azul de Contacto */}
        <div className="bg-blue-600 rounded-lg p-10 flex flex-col md:flex-row items-center justify-between text-white shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-0">¿Quieres más información?</h2>
          <button 
            onClick={() => { setView('Contacto'); window.scrollTo(0,0); }}
            className="bg-white text-blue-600 px-8 py-3 font-black rounded-sm hover:bg-gray-100 transition shadow-lg uppercase text-sm tracking-widest"
          >
            ME INTERESA
          </button>
        </div>
      </div>
    </section>
  );
};

export default MiddleSection;