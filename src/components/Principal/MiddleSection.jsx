import React from 'react';

const MiddleSection = () => {
  // Array de ejemplo para los logos. Reemplaza los src con tus iconos reales.
  const techLogos = [
    { name: ".NET", src: "https://placehold.co/50x50?text=NET" },
    { name: "JS", src: "https://placehold.co/50x50?text=JS" },
    { name: "Python", src: "https://placehold.co/50x50?text=PY" },
    { name: "Azure", src: "https://placehold.co/50x50?text=Az" },
    { name: "Docker", src: "https://placehold.co/50x50?text=Dk" },
    { name: "K8s", src: "https://placehold.co/50x50?text=K8s" },
    // Agrega el resto de iconos aquí...
  ];

  return (
    <section className="bg-white text-black py-20">
      <div className="container mx-auto px-6">
        
        {/* Ciclos de Desarrollo (Las dos imágenes superiores) */}
        <div className="grid md:grid-cols-2 gap-10 mb-20 text-center">
            <div className="p-6 border rounded-lg shadow-sm">
                <div className="h-40 bg-blue-100 mb-4 flex items-center justify-center text-blue-500 font-bold">[Diagrama Ciclo Desarrollo]</div>
                <h3 className="font-bold text-xl mb-2">El desarrollo es nuestra pasión</h3>
                <button className="text-set-blue text-sm font-bold bg-blue-100 px-3 py-1 rounded">LEER MÁS</button>
            </div>
            <div className="p-6 border rounded-lg shadow-sm">
                <div className="h-40 bg-blue-100 mb-4 flex items-center justify-center text-blue-500 font-bold">[Diagrama DevOps]</div>
                <h3 className="font-bold text-xl mb-2">Cultura DevOps e Integración</h3>
                <button className="text-set-blue text-sm font-bold bg-blue-100 px-3 py-1 rounded">LEER MÁS</button>
            </div>
        </div>

        {/* Tecnologías */}
        <div className="text-center mb-16">
          <h2 className="text-xl font-semibold mb-8">Utilizamos todas estas tecnologías...</h2>
          <div className="flex flex-wrap justify-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {techLogos.map((logo, index) => (
              <img key={index} src={logo.src} alt={logo.name} className="h-12 w-auto object-contain" />
            ))}
          </div>
        </div>

     {/* Banner Azul CTA */}
<div className="bg-set-blue text-white p-10 text-center rounded-sm mb-20 shadow-lg">
    <h2 className="text-2xl font-bold mb-4">¿Quieres más información? ¡Ponte en contacto con nosotros!</h2>
    <button 
      onClick={() => {
        const form = document.getElementById('formulario-contacto');
        if (form) {
          form.scrollIntoView({ behavior: 'smooth' });
        }
      }}
      className="bg-white text-set-blue px-6 py-2 font-bold rounded hover:bg-gray-100 transition"
    >
        ME INTERESA
    </button>
</div>

        {/* Grid de Soluciones (3 imágenes abajo) */}
        <div className="text-center">
            <h2 className="text-2xl font-bold mb-8">Soluciones a medida para el éxito de tu proyecto</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {[1, 2, 3].map((item) => (
                    <div key={item} className="text-left">
                        <div className="h-48 bg-gray-300 mb-4 rounded bg-cover" style={{backgroundImage: `url('https://placehold.co/400x300')`}}></div>
                        <h4 className="font-bold text-sm uppercase">Categoría {item}</h4>
                        <p className="text-xs text-set-blue cursor-pointer">Leer más </p>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default MiddleSection;