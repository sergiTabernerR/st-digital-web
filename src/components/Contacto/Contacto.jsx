import React from 'react';

const Contacto = () => {
  return (
    <div className="bg-black text-white min-h-[60vh] flex items-center">
      {/* SECCIÓN HERO - Estilo unificado con el resto de la web */}
      <div className="relative w-full h-[500px] flex items-center overflow-hidden border-b border-gray-800">
        
        {/* Imagen de fondo con overlay técnico */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-30 scale-110"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')" }}
        ></div>
        
        {/* Degradado para lectura clara (Match con tus otras vistas) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>

        <div className="container mx-auto px-6 md:px-12 relative z-20">
          <div className="max-w-4xl">
            {/* Título Principal */}
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6 leading-none">
              CONTACTO
            </h1>
            
            {/* Subtítulo / Descripción */}
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl">
              Si desea realizar una consulta sobre nuestros servicios de desarrollo o inteligencia artificial, 
              estamos a su disposición a través de los canales directos que aparecen a continuación.
            </p>

            {/* Grid de Contacto Rápido */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              
              {/* Bloque Teléfono */}
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="p-4 bg-white/5 border border-gray-800 rounded-xl group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-300">
                  <svg className="w-8 h-8 text-blue-500 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-1">Llámanos</p>
                  <span className="text-2xl md:text-4xl font-light tracking-tight">+34 679 07 73 94</span>
                </div>
              </div>

              {/* Bloque Email */}
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="p-4 bg-white/5 border border-gray-800 rounded-xl group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-300">
                  <svg className="w-8 h-8 text-blue-500 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-1">Escríbenos</p>
                  <span className="text-xl md:text-3xl font-light tracking-tight lowercase">sergitaberner@hotmail.es</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;