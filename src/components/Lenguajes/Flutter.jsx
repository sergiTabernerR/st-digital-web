import React from 'react';

const Flutter = () => {

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
      text: "Se pueden crear aplicaciones para Windows, macOS y Linux, además de desarrollar para web, móvil y escritorio."
    },
    {
      title: "Rendimiento",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
      ),
      text: "Se compila en código nativo, lo que proporciona un excelente rendimiento y una experiencia fluida en cualquier dispositivo."
    },
    {
      title: "Widgets",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
      ),
      text: "Existen multitud de componentes para la interfaz de usuario, totalmente personalizables y con capacidad de combinarse."
    },
    {
      title: "Lenguaje",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
      ),
      text: "Utiliza como base el lenguaje Dart, desarrollado por Google."
    },
    {
      title: "Código abierto y gratuito",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      ),
      text: "Es un framework gratuito y de código abierto, lo que lo hace más accesible tanto para los desarrolladores como para las empresas."
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans pt-20">
      
      {/* 1. HERO SECTION (Libro de Dart/Flutter de fondo) */}
      <div className="relative h-[450px] flex items-center overflow-hidden border-b border-gray-800">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')" }} 
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black z-10"></div>

        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4">
                FLUTTER
            </h1>
            <p className="text-lg md:text-xl text-blue-400 font-medium mb-6">
                Somos expertos en el desarrollo de software a medida utilizando este framework de código abierto creado por Google.
            </p>
          </div>
        </div>
      </div>

      {/* 2. SECCIÓN CENTRAL (Logo Flutter + VS Code con Mockup Móvil) */}
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 bg-gray-900/30 p-10 rounded-3xl border border-gray-800">
          
          <div className="w-full lg:w-1/3 text-center lg:text-left">
            <div className="inline-block p-6 bg-blue-500 rounded-3xl mb-6 shadow-2xl shadow-blue-500/20">
                <svg className="w-16 h-16 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.5,2L5.5,10L10.5,15L18.5,7L13.5,2M10.5,15L5.5,20L10,24.5L19,15.5L10.5,15Z" />
                </svg>
            </div>
            <p className="text-gray-300 leading-relaxed italic">
              "Framework de código abierto de Google para crear hermosas aplicaciones multiplataforma compiladas de forma nativa a partir de una única base de código."
            </p>
            <button className="mt-6 text-blue-400 hover:text-blue-300 font-bold flex items-center gap-2 mx-auto lg:mx-0">
               About Flutter <span className="text-lg">→</span>
            </button>
          </div>

          {/* Imagen combinada (Código + Mockup móvil de la imagen original) */}
          <div className="w-full lg:w-2/3 rounded-xl overflow-hidden shadow-2xl border border-gray-700 relative">
             <div className="bg-gray-800 px-4 py-2 flex gap-2 border-b border-gray-700">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-xs text-gray-400 ml-4 font-mono">main.dart - Visual Studio Code</span>
             </div>
             <div className="flex bg-[#1e1e1e]">
                <img 
                  src="https://raw.githubusercontent.com/microsoft/vscode-docs/main/docs/languages/images/flutter/hero.png" 
                  alt="Código Flutter" 
                  className="w-2/3 opacity-80"
                />
                <div className="w-1/3 p-4 flex items-center justify-center bg-black/40">
                    <div className="w-full h-48 bg-blue-600/20 border border-blue-500/30 rounded-2xl flex items-center justify-center">
                        <span className="text-[10px] text-blue-400 font-mono">App Preview</span>
                    </div>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* 3. GRID DE CARACTERÍSTICAS (5 Tarjetas) */}
      <div className="container mx-auto px-6 pb-24">
        <h3 className="text-center text-gray-500 text-sm font-bold uppercase tracking-widest mb-16">
            Principales características de Flutter:
        </h3>

        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
            {characteristics.map((item, index) => (
                <div 
                    key={index}
                    className="w-full md:w-[30%] bg-black border border-gray-800 p-8 rounded-2xl hover:border-blue-500 transition-all duration-300 group"
                >
                    <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/20">
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

      {/* 4. CASOS DE USO (Fila inferior de 3 bloques) */}
      <div className="bg-gray-900/50 py-20 border-t border-gray-800">
        <div className="container mx-auto px-6">
            <h3 className="text-center text-gray-500 text-sm font-bold mb-12 uppercase tracking-widest">Casos de uso de Flutter en nuestros clientes:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="bg-black p-8 rounded-2xl border border-gray-800 text-center">
                    <div className="text-blue-500 mb-4 flex justify-center">
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                    </div>
                    <h5 className="font-bold text-lg mb-2 uppercase">APLICACIONES MÓVILES</h5>
                    <p className="text-gray-400 text-sm">Creación de aplicaciones para iOS y Android, tanto en formato Smartphone como Tablet.</p>
                </div>
                <div className="bg-black p-8 rounded-2xl border border-gray-800 text-center">
                    <div className="text-blue-500 mb-4 flex justify-center">
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 21h6l-.75-4M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    </div>
                    <h5 className="font-bold text-lg mb-2 uppercase">APLICACIONES DE ESCRITORIO</h5>
                    <p className="text-gray-400 text-sm">Creación de aplicaciones compiladas para ser ejecutadas de forma nativa en Windows, macOS o Linux.</p>
                </div>
                <div className="bg-black p-8 rounded-2xl border border-gray-800 text-center">
                    <div className="text-blue-500 mb-4 flex justify-center">
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                    </div>
                    <h5 className="font-bold text-lg mb-2 uppercase">APLICACIONES WEB</h5>
                    <p className="text-gray-400 text-sm">Creación de sitios web de alto rendimiento con la posibilidad de generar ensamblados de bajo nivel (WebAssembly).</p>
                </div>
            </div>
        </div>
      </div>

      {/* 5. CTA FINAL */}
      <div className="bg-blue-600 py-16">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8">¿Buscas una App fluida y moderna?</h2>
            <button 
                onClick={scrollToContact}
                className="bg-white text-blue-600 font-black py-4 px-10 rounded-full hover:bg-gray-100 transition shadow-xl uppercase tracking-widest text-sm"
            >
                Empezar mi App con Flutter
            </button>
        </div>
      </div>

    </div>
  );
};

export default Flutter;