import React from 'react';

const DotNet = () => {

  // Función para scroll suave al formulario
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
      text: "Se pueden crear aplicaciones para Windows, macOS y Linux, además de desarrollar para web, móvil, escritorio y Cloud."
    },
    {
      title: "Lenguajes",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
      ),
      text: "Admite lenguajes modernos, orientados a objetos y fuertemente tipados. El lenguaje comúnmente utilizado es C#."
    },
    {
      title: "Rendimiento y seguridad",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
      ),
      text: "Dotnet es una plataforma segura, confiable y de alto rendimiento con características como la gestión automática de memoria."
    },
    {
      title: "Ecosistema",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
      ),
      text: "Ofrece un gran ecosistema de herramientas de desarrollo como Visual Studio Code (IDE) y NuGet (Gestor de paquetes)."
    },
    {
      title: "Código abierto y gratuito",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zM9.121 9.121a3 3 0 11-4.243-4.243 3 3 0 014.243 4.243z"></path></svg>
      ),
      text: "Es un framework gratuito y de código abierto, lo que lo hace más accesible tanto para los desarrolladores como para las empresas."
    },
    {
      title: "Componentes",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
      ),
      text: "Incluye un runtime para ejecutar aplicaciones, bibliotecas de clases para funcionalidad común y herramientas de desarrollo (SDK)."
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans pt-20">
      
      {/* 1. HERO SECTION (Libro Expert Insight de fondo) */}
      <div className="relative h-[450px] flex items-center overflow-hidden border-b border-gray-800">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')" }} 
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black z-10"></div>

        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4">
                DOTNET
            </h1>
            <p className="text-lg md:text-xl text-blue-400 font-medium mb-6">
                Expertos en el desarrollo de software a medida utilizando la plataforma de aplicaciones gratuita y de código abierto respaldada por Microsoft.
            </p>
          </div>
        </div>
      </div>

      {/* 2. SECCIÓN CENTRAL (Logo + Captura de Código) */}
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 bg-gray-900/30 p-10 rounded-3xl border border-gray-800">
          
          {/* Logo y descripción corta */}
          <div className="w-full lg:w-1/3 text-center lg:text-left">
            <div className="inline-block p-6 bg-purple-600 rounded-3xl mb-6 shadow-2xl shadow-purple-500/20">
                <span className="text-4xl font-black italic">.NET</span>
            </div>
            <p className="text-gray-300 leading-relaxed italic">
              "Plataforma para desarrolladores gratuita y multiplataforma para compilar aplicaciones modernas y servicios eficaces en el <span className="text-blue-400">Cloud</span>."
            </p>
            <button className="mt-6 text-blue-400 hover:text-blue-300 font-bold flex items-center gap-2 mx-auto lg:mx-0">
               ¿Qué es Dotnet? <span className="text-lg">→</span>
            </button>
          </div>

          {/* Imagen de Código (Simulación de VS Code) */}
          <div className="w-full lg:w-2/3 rounded-xl overflow-hidden shadow-2xl border border-gray-700">
             <div className="bg-gray-800 px-4 py-2 flex gap-2 border-b border-gray-700">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-xs text-gray-400 ml-4 font-mono">Program.cs - Visual Studio Code</span>
             </div>
             <img 
               src="https://raw.githubusercontent.com/microsoft/vscode-docs/main/docs/languages/images/dotnet/dotnet-hello-world.png" 
               alt="VS Code Dotnet" 
               className="w-full opacity-90"
             />
          </div>
        </div>
      </div>

      {/* 3. GRID DE CARACTERÍSTICAS (Las 6 tarjetas) */}
      <div className="container mx-auto px-6 pb-24">
        <h3 className="text-center text-gray-500 text-sm font-bold uppercase tracking-widest mb-16">
            Principales características de Dotnet:
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {characteristics.map((item, index) => (
                <div 
                    key={index}
                    className="bg-black border border-gray-800 p-8 rounded-2xl hover:border-blue-500 transition-all duration-300 group"
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

      {/* 4. SECCIÓN FINAL CTA */}
      <div className="bg-blue-600 py-16">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8">¿Necesitas un desarrollo sólido en .NET?</h2>
            <button 
                onClick={scrollToContact}
                className="bg-white text-blue-600 font-black py-4 px-10 rounded-full hover:bg-gray-100 transition shadow-xl uppercase tracking-widest text-sm"
            >
                Habla con nuestros expertos
            </button>
        </div>
      </div>

    </div>
  );
};

export default DotNet;