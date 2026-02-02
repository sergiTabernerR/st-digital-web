import React from 'react';

const Python = () => {

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
      text: "Puede usarse en Windows, macOS y Linux."
    },
    {
      title: "Alto nivel",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
      ),
      text: "Su sintaxis es más cercana al lenguaje humano, lo que facilita su escritura y comprensión en comparación con lenguajes de bajo nivel."
    },
    {
      title: "Interpretado",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
      ),
      text: "El código se ejecuta línea por línea por un programa llamado intérprete, en lugar de compilarse completamente de antemano."
    },
    {
      title: "PYPI",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path></svg>
      ),
      text: "Cuenta con un gran ecosistema de paquetes de código abierto que simplifican la adición de funcionalidades a las aplicaciones."
    },
    {
      title: "Código abierto",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      ),
      text: "Es gratuito y se puede utilizar y redistribuir libremente, con el apoyo de una comunidad de desarrolladores activa."
    },
    {
      title: "Inteligencia artificial",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
      ),
      text: "Es muy utilizado en el campo de la IA debido a su facilidad de uso y la existencia de bibliotecas especializadas."
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans pt-20">
      
      {/* 1. HERO SECTION (Libro Effective Software Development de fondo) */}
      <div className="relative h-[450px] flex items-center overflow-hidden border-b border-gray-800">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')" }} 
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black z-10"></div>

        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4">
                PYTHON
            </h1>
            <p className="text-lg md:text-xl text-yellow-500 font-medium mb-6">
                Ofrecemos el servicio de desarrollo de software a medida utilizando este lenguaje de programación de alto nivel, interpretado y de código abierto.
            </p>
          </div>
        </div>
      </div>

      {/* 2. SECCIÓN CENTRAL (Logo Python + VS Code) */}
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 bg-gray-900/30 p-10 rounded-3xl border border-gray-800">
          
          <div className="w-full lg:w-1/3 text-center lg:text-left">
            <div className="inline-block p-6 bg-gradient-to-br from-blue-600 to-yellow-500 rounded-3xl mb-6 shadow-2xl">
                <svg className="w-16 h-16 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.25,2A3.25,3.25 0 0,0 11,5.25V7.5H7.75A3.25,3.25 0 0,0 4.5,10.75V15H7.5V10.75H13V13.25H16.25A3.25,3.25 0 0,0 19.5,10V5.25A3.25,3.25 0 0,0 16.25,2H14.25M9.75,8.75A3.25,3.25 0 0,0 6.5,12V16.75H8.5V18.75A3.25,3.25 0 0,0 11.75,22H13.75A3.25,3.25 0 0,0 17,18.75V16.5H20.25A3.25,3.25 0 0,0 23.5,13.25V9H20.5V13.25H15V10.75H11.75A3.25,3.25 0 0,0 8.5,14V8.75H9.75Z" />
                </svg>
            </div>
            <p className="text-gray-300 leading-relaxed italic">
              "Lenguaje de programación orientado a objetos de alto nivel y fácil de interpretar con una sintaxis fácil de leer."
            </p>
            <button className="mt-6 text-yellow-500 hover:text-yellow-400 font-bold flex items-center gap-2 mx-auto lg:mx-0">
               About Python <span className="text-lg">→</span>
            </button>
          </div>

          <div className="w-full lg:w-2/3 rounded-xl overflow-hidden shadow-2xl border border-gray-700">
             <div className="bg-gray-800 px-4 py-2 flex gap-2 border-b border-gray-700">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-xs text-gray-400 ml-4 font-mono">main.py - VS Code</span>
             </div>
             <img 
               src="https://raw.githubusercontent.com/microsoft/vscode-docs/main/docs/languages/images/python/python-hero.png" 
               alt="VS Code Python" 
               className="w-full opacity-90"
             />
          </div>
        </div>
      </div>

      {/* 3. GRID DE CARACTERÍSTICAS */}
      <div className="container mx-auto px-6 pb-24">
        <h3 className="text-center text-gray-500 text-sm font-bold uppercase tracking-widest mb-16">
            Principales características de Python:
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {characteristics.map((item, index) => (
                <div 
                    key={index}
                    className="bg-black border border-gray-800 p-8 rounded-2xl hover:border-yellow-500 transition-all duration-300 group"
                >
                    <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/20">
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
            <h3 className="text-center text-gray-500 text-sm font-bold mb-12 uppercase tracking-widest">Casos de uso de Python en nuestros clientes:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="bg-black p-8 rounded-2xl border border-gray-800 text-center">
                    <div className="text-blue-500 mb-4 flex justify-center">
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                    </div>
                    <h5 className="font-bold text-lg mb-2 uppercase">BACKENDS</h5>
                    <p className="text-gray-400 text-sm">Creación de aplicaciones de lado servidor de alto rendimiento y escalables mediante Flask.</p>
                </div>
                <div className="bg-black p-8 rounded-2xl border border-gray-800 text-center">
                    <div className="text-blue-500 mb-4 flex justify-center">
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
                    </div>
                    <h5 className="font-bold text-lg mb-2 uppercase">MICROSERVICIOS</h5>
                    <p className="text-gray-400 text-sm">Aplicaciones nativas de la nube que pueden ejecutarse en contenedores de Docker dentro de un clúster de Kubernetes.</p>
                </div>
                <div className="bg-black p-8 rounded-2xl border border-gray-800 text-center">
                    <div className="text-blue-500 mb-4 flex justify-center">
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
                    </div>
                    <h5 className="font-bold text-lg mb-2 uppercase">INTELIGENCIA ARTIFICIAL</h5>
                    <p className="text-gray-400 text-sm">Aplicaciones centradas en la exploración de la IA generativa, realizando un uso intensivo de tarjetas gráficas (GPUs) dedicadas a tal efecto.</p>
                </div>
            </div>
        </div>
      </div>

      {/* 5. CTA FINAL */}
      <div className="bg-yellow-500 py-16">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8 text-black uppercase tracking-tighter italic">¿Tu proyecto requiere potencia y simplicidad?</h2>
            <button 
                onClick={scrollToContact}
                className="bg-black text-white font-black py-4 px-10 rounded-full hover:bg-gray-800 transition shadow-xl uppercase tracking-widest text-sm"
            >
                Hablemos de Python
            </button>
        </div>
      </div>

    </div>
  );
};

export default Python;