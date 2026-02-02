import React from 'react';

const Outsourcing = () => {

  const scrollToContact = () => {
    const form = document.getElementById('formulario-contacto');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    "Ahorro de tiempo, ya que los profesionales que subcontrata son los que se encargarán de las funciones y, de esta forma, se permite que la empresa se centre en su propia actividad.",
    "El ahorro de costes, ya que la empresa no se verá obligada a contar con un departamento IT y podrá convertir costes fijos en costes variables o eventuales.",
    "Se suprime el riesgo por obsolescencia tecnológica.",
    "Mejora de la eficiencia, con grandes profesionales que cuentan con una gran experiencia y capacitación para llevar a cabo las funciones pedidas.",
    "Acceso a acciones y conocimientos más especializados y técnicos.",
    "Mayor cobertura de servicios y aumento de la productividad."
  ];

  const steps = [
    { title: "Evaluación de necesidades", text: "Es necesario conocer globalmente el funcionamiento de la empresa y de todos los procesos que se están realizando de forma interna, así como su coste y su grado de eficacia-eficiencia, respecto a los objetivos marcados." },
    { title: "Adopción de un método adecuado", text: "Una vez elegidos los servicios a externalizar, se deben clasificar en función del tipo de proceso para adoptar una metodología adecuada que permita gestionar el outsourcing." },
    { title: "Acuerdos de niveles de servicios", text: "Establecimiento de unos acuerdos de niveles de servicio que permitan un seguimiento continuo de los servicios externalizados." },
    { title: "Selección del proveedor y contratación", text: "Para ello, se tienen que establecer unos criterios de selección de proveedor como el nivel de innovación, la capacidad tecnológica, costes o experiencia." },
    { title: "Seguimiento", text: "El momento en el que el proveedor externo comienza a prestar los servicios contratados. En este punto, es necesario un control y seguimiento de servicios, verificando los acuerdos de nivel de servicio." }
  ];

  return (
    <div className="bg-white text-black min-h-screen font-sans">
      
      {/* 1. HERO SECTION - BLACK IMPACT */}
      <div className="relative h-[500px] flex items-center justify-center overflow-hidden bg-black text-white">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')" }} 
        ></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-[0.3em] mb-6">
              OUTSOURCING
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto opacity-90 leading-relaxed italic">
              ¿Necesitas un Senior Developer? ¿Un Software Architect? ¿O un Product Owner? ¡Contáctanos!
          </p>
        </div>
      </div>

      {/* 2. BENEFICIOS */}
      <div className="container mx-auto px-6 py-24 max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-black uppercase mb-16 tracking-tighter text-center italic border-b-4 border-black inline-block pb-2">
            Hacemos outsourcing para tu negocio
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-6 items-start">
                    <span className="text-blue-600 text-3xl font-black">✓</span>
                    <p className="text-lg md:text-xl text-gray-700 leading-snug">{benefit}</p>
                </div>
            ))}
        </div>

        {/* 3. METODOLOGÍA / PASOS */}
        <div className="bg-zinc-50 rounded-[3rem] p-12 md:p-20 shadow-inner">
            <h3 className="text-2xl md:text-4xl font-black uppercase mb-12 text-center">Cómo implementar correctamente el outsourcing</h3>
            <div className="space-y-12">
                {steps.map((step, index) => (
                    <div key={index} className="flex flex-col md:flex-row gap-8 items-center border-l-4 border-black pl-8 group">
                        <span className="text-4xl font-black text-gray-300 group-hover:text-black transition-colors">{index + 1}.</span>
                        <div>
                            <h4 className="text-xl font-bold uppercase mb-2 tracking-widest">{step.title}</h4>
                            <p className="text-gray-600 text-lg leading-relaxed italic">{step.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* 4. POR QUÉ NOSOTROS */}
      <div className="container mx-auto px-6 py-24 border-t border-gray-100">
        <h3 className="text-center text-3xl md:text-5xl font-black uppercase mb-20">Por qué somos los adecuados</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
                { icon: "🔒", title: "Flexibilidad", desc: "Disponemos de una amplia capacidad y flexibilidad a la hora de ejecutar operaciones." },
                { icon: "📉", title: "Reducción", desc: "Reducirá sus gastos y se convertirán en costes variables." },
                { icon: "👨‍💻", title: "Especialistas", desc: "Somos desarrolladores con experiencia y especializados en múltiples sectores." },
                { icon: "🏢", title: "Recursos", desc: "Podrás destinar más recursos a la innovación y a comenzar nuevos proyectos." }
            ].map((item, idx) => (
                <div key={idx} className="p-8 hover:bg-zinc-50 rounded-2xl transition-all">
                    <div className="text-5xl mb-6">{item.icon}</div>
                    <h5 className="font-black uppercase mb-4 tracking-widest">{item.title}</h5>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
            ))}
        </div>
      </div>

      {/* 5. FOOTER CTA */}
      <div className="bg-black py-32 text-center text-white">
        <h2 className="text-3xl md:text-5xl font-black mb-12 uppercase italic px-6">
            Escale su equipo con talento experto
        </h2>
        <button 
            onClick={scrollToContact}
            className="bg-white text-black font-black py-7 px-20 rounded-full hover:bg-gray-200 transition-all shadow-2xl uppercase tracking-[0.3em] text-xl"
        >
            HABLAR CON NOSOTROS
        </button>
      </div>

    </div>
  );
};

export default Outsourcing;