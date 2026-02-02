import React from 'react';

const Cloud = () => {

  const scrollToContact = () => {
    const form = document.getElementById('formulario-contacto');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const technicalPros = [
    { title: "Flexibilidad", icon: "↗️", text: "Es posible aumentar o disminuir los recursos que utilizan sus proyectos según las necesidades de la empresa." },
    { title: "Seguridad", icon: "🔒", text: "Los entornos Cloud están cimentados bajo varias capas de seguridad, lo que permite mantener sus datos y las transacciones de sus proyectos seguras." },
    { title: "Velocidad", icon: "⏱️", text: "Se puede desplegar un servidor nuevo en cuestión de segundos. Y eliminarlo igual de rápido." }
  ];

  const businessPros = [
    { title: "Reducción de costes", icon: "💶", text: "Los gastos pasan a ser por uso de los servicios Cloud, pagando solo lo que necesita." },
    { title: "Transformación Digital", icon: "💻", text: "Ayuda a modernizar los procesos y las relaciones con sus clientes." },
    { title: "Recuperación de desastres", icon: "☁️", text: "Con la configuración adecuada, es posible restaurar una copia de seguridad de sus datos de forma ágil." },
    { title: "Respeto al Medio Ambiente", icon: "🍃", text: "El uso de servicios Cloud reduce la huella de carbono, al evitar tener hardware infrautilizado en su empresa." }
  ];

  return (
    <div className="bg-white text-black min-h-screen font-sans">
      
      {/* 1. HERO SECTION - Pantalla Completa */}
      <div className="relative h-[600px] flex items-center justify-center overflow-hidden bg-slate-900 text-white">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-[0.4em] mb-8">
              CLOUD
          </h1>
          <p className="text-2xl md:text-3xl font-light max-w-4xl mx-auto opacity-90 leading-relaxed italic">
              Ofrecemos el servicio de implantación de sus proyectos en múltiples plataformas Cloud.
          </p>
        </div>
      </div>

      {/* 2. ¿QUÉ ES EL CLOUD? */}
      <div className="container mx-auto px-6 py-32">
        <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-8 tracking-tighter">¿Qué es el Cloud?</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
                Cloud es un término que se utiliza para describir una red mundial de servidores, conectados entre sí y diseñados para ofrecer servicios específicos. Es un pilar imprescindible para la consolidación de la cultura DevOps dentro de su empresa.
            </p>
        </div>

        {/* Ventajas Técnicas - Grid Grande */}
        <div className="max-w-7xl mx-auto mb-32">
            <h3 className="text-center text-blue-600 text-sm font-bold uppercase tracking-[0.5em] mb-16">Ventajas Técnicas</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {technicalPros.map((p, i) => (
                    <div key={i} className="bg-slate-50 p-12 rounded-3xl border border-gray-100 text-center hover:shadow-xl transition-all">
                        <span className="text-5xl block mb-6">{p.icon}</span>
                        <h4 className="font-black text-xl mb-4 uppercase">{p.title}</h4>
                        <p className="text-gray-600 text-lg leading-relaxed">{p.text}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Ventajas Empresa - Grid Grande */}
        <div className="max-w-7xl mx-auto mb-32">
            <h3 className="text-center text-blue-600 text-sm font-bold uppercase tracking-[0.5em] mb-16">Ventajas para su empresa</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {businessPros.map((p, i) => (
                    <div key={i} className="border-t-4 border-blue-500 pt-8">
                        <span className="text-4xl block mb-4">{p.icon}</span>
                        <h4 className="font-bold text-lg mb-4 uppercase">{p.title}</h4>
                        <p className="text-gray-600 text-lg">{p.text}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* 3. PULUMI Y ARQUITECTURA */}
        <div className="bg-black text-white rounded-[3rem] p-16 md:p-24 shadow-2xl overflow-hidden relative">
            <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-black uppercase mb-12 text-center">Pulumi como parte de la arquitectura centralizada</h2>
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <p className="text-xl text-gray-400 leading-relaxed mb-10">
                            Nuestra arquitectura utiliza Pulumi para la creación y eliminación de recursos Cloud (Cluster Kubernetes, base de datos, almacenamiento, etc.) de forma dinámica y bajo las necesidades de su empresa.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                <h5 className="font-bold text-blue-400 mb-2">COLABORACIÓN</h5>
                                <p className="text-sm text-gray-300">Permite que los equipos de desarrollo y operaciones hablen un lenguaje común.</p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                <h5 className="font-bold text-blue-400 mb-2">ORQUESTACIÓN</h5>
                                <p className="text-sm text-gray-300">Genera recursos de forma orquestada asegurando la disponibilidad.</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 flex flex-col items-center">
                        <img src="https://www.pulumi.com/images/logo/logo-on-dark.svg" alt="Pulumi" className="h-24 mb-12" />
                        <div className="flex gap-8 items-center opacity-70">
                            <span className="text-xs font-bold tracking-widest uppercase italic">Ecosystem: AWS | Google Cloud | Azure | Kubernetes</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* 4. ESPECIALIZACIÓN CLOUD */}
      <div className="bg-slate-50 py-32">
        <div className="container mx-auto px-6">
            <h3 className="text-center text-gray-400 text-sm font-bold uppercase tracking-[0.5em] mb-20">Estamos especializados en...</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-6xl mx-auto">
                <div className="text-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" alt="Azure" className="h-16 mx-auto mb-8"/>
                    <h5 className="font-black text-xl mb-4">MICROSOFT AZURE</h5>
                    <p className="text-gray-600 text-lg">Somos especialistas en los servicios Cloud ofrecidos en la plataforma Azure.</p>
                </div>
                <div className="text-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" alt="GCP" className="h-16 mx-auto mb-8"/>
                    <h5 className="font-black text-xl mb-4">GOOGLE CLOUD</h5>
                    <p className="text-gray-600 text-lg">Sácale todo el provecho a los servicios Cloud ofrecidos por Google.</p>
                </div>
                <div className="text-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg" alt="K8s" className="h-16 mx-auto mb-8"/>
                    <h5 className="font-black text-xl mb-4 uppercase">Kubernetes</h5>
                    <p className="text-gray-600 text-lg">Te enseñamos a utilizar todo el potencial de Kubernetes para orquestar tus contenedores.</p>
                </div>
            </div>
        </div>
      </div>

      {/* 5. CTA */}
      <div className="bg-blue-600 py-32 text-center text-white">
        <h2 className="text-3xl md:text-5xl font-black mb-12 uppercase italic px-6">¿Quieres más información? <br/> ¡Ponte en contacto con nosotros!</h2>
        <button 
            onClick={scrollToContact}
            className="bg-white text-blue-600 font-black py-7 px-20 rounded-full hover:bg-gray-100 transition-all shadow-2xl uppercase tracking-[0.3em] text-xl"
        >
            ME INTERESA
        </button>
      </div>

    </div>
  );
};

export default Cloud;