import React from 'react';

const HeroSoluciones = () => (
  <section className="relative min-h-screen flex items-center bg-black pt-20">
    {/* Imagen de fondo con overlay */}
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80" 
        className="w-full h-full object-cover opacity-40"
        alt="Background"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
    </div>

    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight uppercase tracking-tighter mb-8">
          Soluciones Empresariales
        </h1>
        <p className="text-xl text-gray-300 mb-6 font-light">
          Somos una empresa especializada en diseñar y ejecutar soluciones de desarrollo de software y DevOps a medida.
        </p>
        <p className="text-gray-400 max-w-2xl mb-10 leading-relaxed">
          Te acompañamos en todo momento: Desde la toma de requisitos, codificación, automatización de subidas a producción, pasando por el control de calidad del código fuente y su posterior monitorización.
        </p>
        <button className="text-white border-b-2 border-white pb-1 hover:text-set-blue hover:border-set-blue transition-all font-bold italic">
          ¿Nos cuentas tu proyecto?
        </button>
      </div>
    </div>
  </section>
);

export default HeroSoluciones;