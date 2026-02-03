import React, { useState } from 'react';

const Navbar = ({ setView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMobileMenus, setActiveMobileMenus] = useState([]);

  const navLinks = [
    { 
      name: 'Desarrollo', 
      view: 'Desarrollo',
      submenu: [
        { 
          name: 'Soluciones Empresariales', 
          view: 'soluciones',
          submenu: [
            { name: 'MVP', view: 'mvp' } ,
            { name: 'Inteligencia Artificial', view: 'InteligenciaArtificial' } 
          ]        
        },
        { 
          name: 'Arquitectura de Soluciones', 
          view:'ArtquitecturaSoluciones',
          submenu: [{name:'Microservicios',view:'Microservicios'}] 
        },
        { 
          name: 'Lenguajes', 
          view: 'Lenguajes',
          submenu: [{name:'Dotnet', view: 'Dotnet'}, {name:'Nodejs',view:'NodeJS'},{name:'Python',view:'Python'},{ name:'Flutter',view:'Flutter'} ]
        },
        { 
          name: 'Tecnologias',view:'Tecnologias' ,
          submenu: [{name:'WebSockets',view:'WebSocket'},{name:'MQTT',view:'Mqtt'},{name:'Kafka',view:'Kafka'}] 
        }
      ] 
    },
    { 
      name: 'DevOps', view:'Devops',
      submenu: [
        { name: 'Cloud',view:'Cloud', submenu: [{name:'Azure',view:'Azure'}, {name:'Google Cloud',view:'GoogleCloud'}, {name:'Kubernetes',view:'Kubernetes'}]},
        { name: 'CI/CD',view:'CiCd', submenu: null }
      ] 
    },
    { name: 'Outsourcing',view:'Outsourcing', submenu: null },
    { name: 'Contacto', view: 'Contacto' },
  ];

  const handleLinkClick = (viewName) => {
    if (viewName) {
      setView(viewName);
      setIsOpen(false);
      window.scrollTo(0, 0);
    }
  };

  const toggleMobileMenu = (e, menuName) => {
    e.stopPropagation(); 
    setActiveMobileMenus(prev => 
      prev.includes(menuName) ? prev.filter(item => item !== menuName) : [...prev, menuName]
    );
  };

  return (
    <>
      {/* EL NAVBAR - Ahora Sticky para no tapar contenido */}
      <nav className="sticky top-0 w-full z-[100] bg-black text-white border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* LOGO */}
          <div 
            className="text-2xl font-black tracking-tighter cursor-pointer"
            onClick={() => handleLinkClick('home')}
          >
            ST<span className="text-blue-500">DIGITAL</span>
          </div>

          {/* --- DESKTOP --- */}
          <div className="hidden md:flex space-x-8 text-xs font-bold uppercase tracking-widest">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <button 
                  onClick={() => link.view && handleLinkClick(link.view)}
                  className="hover:text-blue-500 transition-colors flex items-center gap-1 py-2"
                >
                  {link.name} {link.submenu && <span className="text-[8px] opacity-50">▼</span>}
                </button>

                {link.submenu && (
                  <div className="absolute left-0 mt-2 w-64 bg-zinc-950 border border-gray-800 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {link.submenu.map((sub, idx) => (
                      <div key={idx} className="relative group/item border-b border-gray-900 last:border-0">
                        <div className="flex justify-between items-center hover:bg-zinc-900">
                          <button 
                            onClick={() => sub.view && handleLinkClick(sub.view)}
                            className="flex-1 text-left px-5 py-4 text-[10px] hover:text-blue-400 font-bold uppercase"
                          >
                            {sub.name}
                          </button>
                          {sub.submenu && <span className="pr-4 text-[8px] text-gray-600">▶</span>}
                        </div>

                        {sub.submenu && (
                          <div className="absolute left-full top-0 w-56 bg-zinc-950 border border-gray-800 shadow-2xl opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200">
                            {sub.submenu.map((deepItem, dIdx) => (
                              <button 
                                key={dIdx}
                                onClick={() => deepItem.view && handleLinkClick(deepItem.view)}
                                className="w-full text-left px-5 py-4 text-[10px] hover:bg-zinc-900 hover:text-blue-400 border-b border-gray-900 last:border-0 font-bold uppercase"
                              >
                                {deepItem.name}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* BOTÓN HAMBURGUESA MÓVIL */}
          <button 
            className="md:hidden p-2 text-2xl" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* --- MENÚ MÓVIL REPARADO --- */}
        {isOpen && (
          <div className="fixed inset-0 top-[65px] w-full bg-black z-[110] overflow-y-auto pb-32 md:hidden">
            <div className="flex flex-col p-6">
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-gray-900">
                  <div className="flex items-center w-full">
                    {/* PARTE IZQUIERDA: Clic para ir a la página */}
                    <button 
                      className="flex-1 py-5 text-left text-xl font-black uppercase tracking-tighter hover:text-blue-500"
                      onClick={() => handleLinkClick(link.view)}
                    >
                      {link.name}
                    </button>
                    {/* PARTE DERECHA: Clic para abrir submenú */}
                    {link.submenu && (
                      <button 
                        onClick={(e) => toggleMobileMenu(e, link.name)}
                        className="p-5 text-blue-500 text-2xl border-l border-gray-900"
                      >
                        {activeMobileMenus.includes(link.name) ? '−' : '+'}
                      </button>
                    )}
                  </div>
                  
                  {/* SUBMENÚ NIVEL 1 */}
                  {link.submenu && activeMobileMenus.includes(link.name) && (
                    <div className="pl-4 pb-4 space-y-2 bg-zinc-950 rounded-b-lg">
                      {link.submenu.map((sub, idx) => (
                        <div key={idx} className="flex flex-col border-t border-gray-900 first:border-0">
                          <div className="flex items-center w-full">
                            <button 
                              className="flex-1 py-4 text-left text-sm font-bold uppercase text-gray-300 hover:text-blue-400"
                              onClick={() => handleLinkClick(sub.view)}
                            >
                              {sub.name}
                            </button>
                            {sub.submenu && (
                              <button 
                                onClick={(e) => toggleMobileMenu(e, sub.name)}
                                className="px-6 py-4 text-gray-500 text-xl"
                              >
                                {activeMobileMenus.includes(sub.name) ? '▲' : '▼'}
                              </button>
                            )}
                          </div>

                          {/* SUBMENÚ NIVEL 2 */}
                          {sub.submenu && activeMobileMenus.includes(sub.name) && (
                            <div className="pl-4 mt-1 mb-4 flex flex-col gap-2 border-l-2 border-blue-600">
                              {sub.submenu.map((deep, dIdx) => (
                                <button 
                                  key={dIdx}
                                  onClick={() => handleLinkClick(deep.view)}
                                  className="text-xs uppercase font-bold text-gray-400 bg-zinc-900 py-4 px-5 rounded-md text-left active:bg-blue-600 active:text-white"
                                >
                                  {deep.name}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;