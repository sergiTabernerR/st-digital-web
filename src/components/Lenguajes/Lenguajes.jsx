import React from 'react';

const Lenguajes = () => {

  // Función para scroll suave al formulario de contacto
  const scrollToContact = () => {
    const form = document.getElementById('formulario-contacto');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const techStack = [
    {
      name: ".NET",
      color: "text-purple-500",
      bgHover: "group-hover:bg-purple-900/20",
      borderHover: "group-hover:border-purple-500",
      description: "Somos expertos en el desarrollo de software a medida utilizando la plataforma de aplicaciones gratuita y de código abierto respaldada por Microsoft.",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
           <path d="M2,12A10,10 0 1,1 12,22A10,10 0 0,1 2,12M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z" /> 
           {/* Icono simplificado representativo */}
           <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize="8px" fontWeight="bold" fill="currentColor">.NET</text>
        </svg>
      )
    },
    {
      name: "NodeJS",
      color: "text-green-500",
      bgHover: "group-hover:bg-green-900/20",
      borderHover: "group-hover:border-green-500",
      description: "Realizamos software a medida utilizando la plataforma de ejecución de un solo hilo, de código abierto y multiplataforma basada en JavaScript.",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
          <path d="M12,2L2,7.5V17.5L12,23L22,17.5V7.5L12,2M12,19.5L5,15.5V9.5L12,13.5L19,9.5V15.5L12,19.5Z" />
        </svg>
      )
    },
    {
      name: "Python",
      color: "text-yellow-400",
      bgHover: "group-hover:bg-yellow-900/20",
      borderHover: "group-hover:border-yellow-500",
      description: "Ofrecemos el servicio de desarrollo de software a medida utilizando este lenguaje de programación de alto nivel, interpretado y de código abierto.",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
           <path d="M14.25,2A3.25,3.25 0 0,0 11,5.25V7.5H7.75A3.25,3.25 0 0,0 4.5,10.75V15H7.5V10.75H13V13.25H16.25A3.25,3.25 0 0,0 19.5,10V5.25A3.25,3.25 0 0,0 16.25,2H14.25M9.75,8.75A3.25,3.25 0 0,0 6.5,12V16.75H8.5V18.75A3.25,3.25 0 0,0 11.75,22H13.75A3.25,3.25 0 0,0 17,18.75V16.5H20.25A3.25,3.25 0 0,0 23.5,13.25V9H20.5V13.25H15V10.75H11.75A3.25,3.25 0 0,0 8.5,14V8.75H9.75Z" />
        </svg>
      )
    },
    {
      name: "Flutter",
      color: "text-blue-400",
      bgHover: "group-hover:bg-blue-900/20",
      borderHover: "group-hover:border-blue-500",
      description: "Somos expertos en el desarrollo de software a medida utilizando este framework de código abierto creado por Google para apps nativas.",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
          <path d="M13.5,2L5.5,10L10.5,15L18.5,7L13.5,2M10.5,15L5.5,20L10,24.5L19,15.5L10.5,15Z" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans pt-20">
      
      {/* 1. HERO SECTION */}
      <div className="relative h-[400px] flex items-center overflow-hidden border-b border-gray-800">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')" }} 
        ></div>
        <div className="absolute inset-0 bg-black/80 z-10"></div>

        <div className="container mx-auto px-6 relative z-20 text-center">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-widest mb-4">
            LENGUAJES
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light">
            Dominamos múltiples lenguajes de programación para cubrir cualquier necesidad tecnológica de nuestros clientes.
          </p>
        </div>
      </div>

      {/* 2. INTRODUCCIÓN & ICONOS SIMPLES */}
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Somos expertos en los lenguajes de programación <br/>
          <span className="text-blue-500">más potentes del mundo</span>
        </h2>
        <p className="text-gray-400 mb-12">
            Utilizamos todos estos lenguajes de programación...
        </p>

        {/* Fila de Iconos (Visualización rápida) */}
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
           {techStack.map((tech, index) => (
               <div key={index} className={`w-16 h-16 ${tech.color} hover:scale-110 transition transform`}>
                   {tech.icon}
               </div>
           ))}
        </div>
      </div>

      {/* 3. CTA BANNER (Igual que en la imagen) */}
      <div className="w-full bg-blue-500 py-16 text-center relative overflow-hidden">
         {/* Fondo sutil decorativo */}
         <div className="absolute inset-0 bg-blue-600 opacity-50 skew-y-3 transform scale-110"></div>
         
         <div className="relative z-10 container mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 shadow-black drop-shadow-md">
                ¿Quieres más información? ¡Ponte en contacto con nosotros!
            </h2>
            <button 
                onClick={scrollToContact}
                className="bg-white text-blue-600 font-bold py-3 px-8 rounded shadow-lg hover:bg-gray-100 transition transform hover:-translate-y-1 uppercase tracking-widest text-sm"
            >
                Me interesa
            </button>
         </div>
      </div>

      {/* 4. GRID DETALLADO (Especializados en...) */}
      <div className="container mx-auto px-6 py-24">
         <h3 className="text-center text-gray-500 text-sm font-bold uppercase tracking-widest mb-16">
            Estamos especializados en...
         </h3>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStack.map((tech, index) => (
                <div 
                    key={index}
                    className={`group bg-gray-900 border border-gray-800 p-8 rounded-2xl transition duration-300 hover:shadow-2xl ${tech.borderHover} flex flex-col items-center text-center`}
                >
                    <div className={`mb-6 p-4 rounded-full bg-gray-800 transition duration-300 ${tech.bgHover} ${tech.color}`}>
                        {tech.icon}
                    </div>
                    
                    <h4 className="text-xl font-bold mb-4 text-white uppercase tracking-wide">
                        {tech.name}
                    </h4>
                    
                    <p className="text-gray-400 text-sm leading-relaxed">
                        {tech.description}
                    </p>
                    
                    <div className="mt-6 pt-6 border-t border-gray-800 w-full">
                        <span className={`text-xs font-bold cursor-pointer hover:underline ${tech.color}`}>
                            Leer más &rarr;
                        </span>
                    </div>
                </div>
            ))}
         </div>
      </div>


    </div>
  );
};

export default Lenguajes;