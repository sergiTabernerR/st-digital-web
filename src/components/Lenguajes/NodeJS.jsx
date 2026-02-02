import React from 'react';

const NodeJS = () => {

  const scrollToContact = () => {
    const form = document.getElementById('formulario-contacto');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const characteristics = [
    {
      title: "Multiplataforma",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
      ),
      text: "Puede usarse en Windows, macOS y Linux sin necesidad de cambios estructurales en el código base."
    },
    {
      title: "Motor V8",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
      ),
      text: "Utiliza el motor de JavaScript de alta velocidad de Google Chrome, compilando JS directamente en código de máquina."
    },
    {
      title: "Escalabilidad",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11l5-5m0 0l5 5m-5-5v12"></path></svg>
      ),
      text: "Es ideal para construir aplicaciones escalables, capaces de manejar grandes volúmenes de tráfico en arquitecturas de microservicios."
    },
    {
      title: "NPM",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
      ),
      text: "Cuenta con un gran ecosistema de paquetes de código abierto que simplifican la adición de funcionalidades complejas."
    },
    {
      title: "Transversalidad",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
      ),
      text: "Ofrece la posibilidad de utilizar el mismo lenguaje (JavaScript o TypeScript) tanto en el Frontend como en el Backend."
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans pt-20">
      
      {/* 1. HERO SECTION (Fondo de libro temático JS) */}
      <div className="relative h-[450px] flex items-center overflow-hidden border-b border-gray-800">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')" }} 
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black z-10"></div>

        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4">
                NODEJS
            </h1>
            <p className="text-lg md:text-xl text-green-400 font-medium mb-6">
                Desarrollo de software a medida utilizando un entorno de ejecución de código abierto y multiplataforma basado en el lenguaje fuertemente tipado TypeScript.
            </p>
          </div>
        </div>
      </div>

      {/* 2. SECCIÓN CENTRAL (Logo + Captura de Código) */}
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 bg-gray-900/30 p-10 rounded-3xl border border-gray-800">
          
          <div className="w-full lg:w-1/3 text-center lg:text-left">
            <div className="inline-block p-6 bg-green-600 rounded-3xl mb-6 shadow-2xl shadow-green-500/20">
                <span className="text-4xl font-black text-black">JS</span>
            </div>
            <p className="text-gray-300 leading-relaxed italic">
              "Entorno en tiempo de ejecución de JavaScript de código abierto, construido sobre el motor V8 de Google Chrome."
            </p>
            <button className="mt-6 text-green-400 hover:text-green-300 font-bold flex items-center gap-2 mx-auto lg:mx-0">
               Sobre NodeJS <span className="text-lg">→</span>
            </button>
          </div>

          <div className="w-full lg:w-2/3 rounded-xl overflow-hidden shadow-2xl border border-gray-700">
             <div className="bg-gray-800 px-4 py-2 flex gap-2 border-b border-gray-700">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-xs text-gray-400 ml-4 font-mono">server.ts - VS Code</span>
             </div>
             <img 
               src="https://raw.githubusercontent.com/microsoft/vscode-docs/main/docs/nodejs/images/nodejs-debugging/debugging-hero.png" 
               alt="VS Code NodeJS" 
               className="w-full opacity-90"
             />
          </div>
        </div>
      </div>

      {/* 3. GRID DE CARACTERÍSTICAS */}
      <div className="container mx-auto px-6 pb-24">
        <h3 className="text-center text-gray-500 text-sm font-bold uppercase tracking-widest mb-16">
            Principales características de NodeJS:
        </h3>

        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
            {characteristics.map((item, index) => (
                <div 
                    key={index}
                    className="w-full md:w-[30%] bg-black border border-gray-800 p-8 rounded-2xl hover:border-green-500 transition-all duration-300 group"
                >
                    <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-green-500/20">
                        {item.icon}
                    </div>
                    <h4 className="text-xl font-bold mb-4 text-white uppercase tracking-tight">
                        {item.title}
                    </h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        {item.text}
                    </p>
                </div>
            ))}
        </div>
      </div>

      {/* 4. CASOS DE USO (Sección inferior de la imagen) */}
      <div className="bg-gray-900/50 py-20 border-t border-gray-800">
        <div className="container mx-auto px-6">
            <h3 className="text-center text-gray-500 text-sm font-bold mb-12 uppercase tracking-widest">Casos de uso en nuestros clientes:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                <div className="bg-black p-8 rounded-2xl border border-gray-800 text-center">
                    <div className="text-green-500 mb-4 flex justify-center">
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                    </div>
                    <h5 className="font-bold text-lg mb-2">APLICACIONES WEB</h5>
                    <p className="text-gray-400 text-sm">Creación de sitios web de alto rendimiento y escalables mediante React/Redux.</p>
                </div>
                <div className="bg-black p-8 rounded-2xl border border-gray-800 text-center">
                    <div className="text-green-500 mb-4 flex justify-center">
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
                    </div>
                    <h5 className="font-bold text-lg mb-2">MICROSERVICIOS</h5>
                    <p className="text-gray-400 text-sm">Aplicaciones nativas de la nube ejecutadas en contenedores Docker dentro de Kubernetes.</p>
                </div>
            </div>
        </div>
      </div>

      {/* 5. CTA FINAL */}
      <div className="bg-green-600 py-16">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8 text-black uppercase tracking-tighter">¿Listo para escalar con NodeJS?</h2>
            <button 
                onClick={scrollToContact}
                className="bg-black text-white font-black py-4 px-10 rounded-full hover:bg-gray-800 transition shadow-xl uppercase tracking-widest text-sm"
            >
                Contactar ahora
            </button>
        </div>
      </div>

    </div>
  );
};

export default NodeJS;