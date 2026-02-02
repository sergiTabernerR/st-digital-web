import React from 'react';

const MVPPage = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section para MVP */}
      <section className="relative h-[60vh] flex items-center bg-set-dark pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover opacity-30"
            alt="MVP Concept"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">
            Lanza tu <span className="text-set-blue">MVP</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Validamos tu idea de negocio en tiempo récord con un producto funcional, escalable y listo para el mercado.
          </p>
        </div>
      </section>

      {/* Contenido Detallado */}
      <section className="bg-white text-black py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 uppercase italic">¿Por qué empezar con un MVP?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-set-blue text-white w-12 h-12 flex items-center justify-center rounded-full shrink-0 font-bold">01</div>
                  <div>
                    <h4 className="font-bold text-lg">Velocidad de salida</h4>
                    <p className="text-gray-600">Reducimos el tiempo de desarrollo para que puedas probar tu idea con usuarios reales lo antes posible.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-set-blue text-white w-12 h-12 flex items-center justify-center rounded-full shrink-0 font-bold">02</div>
                  <div>
                    <h4 className="font-bold text-lg">Ahorro de costes</h4>
                    <p className="text-gray-600">Invertimos solo en las funcionalidades esenciales que aportan valor real a tu negocio.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-set-blue text-white w-12 h-12 flex items-center justify-center rounded-full shrink-0 font-bold">03</div>
                  <div>
                    <h4 className="font-bold text-lg">Feedback real</h4>
                    <p className="text-gray-600">Aprende del comportamiento de tus clientes para iterar y mejorar el producto final.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-10 rounded-2xl border-l-8 border-set-blue shadow-xl">
              <h3 className="text-2xl font-black mb-4">¿Hablamos de tu idea?</h3>
              <p className="mb-8 text-gray-700">Analizamos la viabilidad técnica de tu proyecto y te ayudamos a definir el roadmap mínimo necesario.</p>
              <button className="w-full bg-black text-white py-4 font-bold uppercase tracking-widest hover:bg-set-blue transition-colors">
                Solicitar Consultoría MVP
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MVPPage;