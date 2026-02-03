import React from 'react';

const Desarrollo = ({ setView }) => {
  const servicios = [
    {
      id: 'soluciones',
      title: 'Soluciones Empresariales',
      desc: 'Ofrecemos un amplio abanico de soluciones y servicios empresariales relacionados con el desarrollo a medida de software.',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      tag: 'MVP / AI'
    },
    {
      id: 'ArtquitecturaSoluciones',
      title: 'Arquitectura de Soluciones',
      desc: 'Construimos soluciones específicas para cumplir con las necesidades empresariales de nuestros clientes en sus proyectos.',
      img: 'https://images.unsplash.com/photo-1504384308090-c89e12076d22?auto=format&fit=crop&q=80&w=800',
      tag: 'Microservicios'
    },
    {
      id: 'Lenguajes',
      title: 'Lenguajes',
      desc: 'Dominamos múltiples lenguajes de programación para cubrir cualquier necesidad de nuestros clientes.',
      img: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800',
      tag: 'JS / Python / .NET'
    },
    {
      id: 'Tecnologias',
      title: 'Tecnologías',
      desc: 'Dominamos múltiples tecnologías para cubrir cualquier necesidad de nuestros clientes.',
      img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800',
      tag: 'WebSockets / MQTT'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* HERO SECTION */}
      <div className="relative h-[40vh] bg-black flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200" 
            className="w-full h-full object-cover"
            alt="Coding background"
          />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">
            Desarrollo
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base font-medium">
            Somos especialistas en el servicio de desarrollo de software a medida para todo tipo de empresas.
          </p>
        </div>
      </div>

      {/* INTRO TEXT */}
      <div className="max-w-4xl mx-auto text-center py-16 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          El desarrollo de software es nuestra pasión
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed">
          Descubre todo nuestro catálogo de servicios y conocimiento tecnológico navegando por los siguientes apartados web.
        </p>
      </div>

      {/* GRID DE SERVICIOS */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {servicios.map((item) => (
            <div 
              key={item.id}
              className="group flex flex-col md:flex-row bg-gray-50 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Imagen */}
              <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Contenido */}
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-2">
                  {item.tag}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {item.desc}
                </p>
                <button 
                  onClick={() => setView(item.id)}
                  className="inline-flex items-center justify-center w-full md:w-max px-6 py-2 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest rounded hover:bg-blue-700 transition-colors"
                >
                  Leer más
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA SECTION - Coherente con tu home */}
      <div className="bg-blue-600 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <h3 className="text-white text-xl md:text-2xl font-bold text-center md:text-left">
            ¿Quieres más información? ¡Ponte en contacto con nosotros!
          </h3>
          <button 
            onClick={() => setView('Contacto')}
            className="bg-white text-blue-600 px-8 py-3 rounded font-black text-xs uppercase tracking-widest hover:bg-gray-100 transition-colors"
          >
            Me interesa
          </button>
        </div>
      </div>
    </div>
  );
};

export default Desarrollo;