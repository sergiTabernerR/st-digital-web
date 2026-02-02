import React from 'react';

const Hero = () => {
  return (
    <section 
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/ruta-a-tu-imagen-fondo-escritorio.jpg')" }} // ¡Cambia esto!
    >
      {/* Overlay oscuro para que se lea el texto */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 container mx-auto px-6 text-left md:text-left mt-20">
        <h1 className="text-4xl md:text-6xl font-bold uppercase leading-tight mb-6 max-w-4xl">
          Soluciones de desarrollo de software y DevOps a la medida de tu proyecto
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-2xl">
          Somos una empresa especializada en diseñar y ejecutar soluciones de desarrollo de software y DevOps a medida.
        </p>

        <p className="text-gray-400 mb-8 max-w-3xl leading-relaxed">
          Te acompañamos en todo momento: Desde la toma de requisitos, codificación, automatización de subidas a producción, control de calidad y monitorización. Sin perder de vista la ciberseguridad.
        </p>
        
        <p className="text-gray-300 font-medium">
          Teletrabajamos desde Catalunya, pero trabajamos para todo el mundo.
        </p>

        <button className="mt-8 text-white border-b border-white pb-1 hover:text-set-blue hover:border-set-blue transition">
          ¿Nos cuentas tu proyecto?
        </button>
      </div>
    </section>
  );
};

export default Hero;