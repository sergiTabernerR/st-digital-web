import React, { useState } from 'react';
//Navbar
const Navbar = ({ setView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMobileMenus, setActiveMobileMenus] = useState([]);

  const navLinks = [
    { 
      name: 'Desarrollo', 
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

  const toggleMobileMenu = (menuName) => {
    setActiveMobileMenus(prev => 
      prev.includes(menuName) ? prev.filter(item => item !== menuName) : [...prev, menuName]
    );
  };

  return (
    <nav className="fixed w-full z-[100] bg-black/95 backdrop-blur-lg text-white border-b border-gray-800">
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

                      {/* NIVEL 3 DESKTOP */}
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

        {/* BOTÓN HAMBURGUESA */}
        <button 
          className="md:hidden p-2 text-2xl focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* --- MENÚ MÓVIL RESTRUCTURADO --- */}
      {isOpen && (
        <div className="fixed inset-0 top-[64px] w-full bg-black z-50 overflow-y-auto pb-20 animate-in slide-in-from-right duration-300 md:hidden">
          <div className="flex flex-col p-6 space-y-2">
            {navLinks.map((link) => (
              <div key={link.name} className="border-b border-gray-900 py-2">
                <div className="flex justify-between items-center">
                  <button 
                    onClick={() => link.view ? handleLinkClick(link.view) : toggleMobileMenu(link.name)}
                    className="text-xl font-black uppercase tracking-tighter py-3 text-left flex-1"
                  >
                    {link.name}
                  </button>
                  {link.submenu && (
                    <button 
                      onClick={() => toggleMobileMenu(link.name)}
                      className="p-4 text-blue-500 text-xl"
                    >
                      {activeMobileMenus.includes(link.name) ? '−' : '+'}
                    </button>
                  )}
                </div>
                
                {/* SUBMENÚ NIVEL 1 MÓVIL */}
                {link.submenu && activeMobileMenus.includes(link.name) && (
                  <div className="ml-4 flex flex-col space-y-1 bg-zinc-950/50 rounded-xl px-4 py-2 mb-4 border-l-2 border-blue-600">
                    {link.submenu.map((sub, idx) => (
                      <div key={idx} className="flex flex-col">
                        <div className="flex justify-between items-center py-3">
                          <button 
                            onClick={() => sub.view && handleLinkClick(sub.view)}
                            className="text-sm font-bold uppercase text-gray-300 text-left flex-1"
                          >
                            {sub.name}
                          </button>
                          {sub.submenu && (
                            <button 
                              onClick={() => toggleMobileMenu(sub.name)}
                              className="px-4 py-2 text-gray-500"
                            >
                              {activeMobileMenus.includes(sub.name) ? '▲' : '▼'}
                            </button>
                          )}
                        </div>

                        {/* SUBMENÚ NIVEL 2 MÓVIL (Deep) */}
                        {sub.submenu && activeMobileMenus.includes(sub.name) && (
                          <div className="ml-4 grid grid-cols-1 gap-2 pb-4">
                            {sub.submenu.map((deep, dIdx) => (
                              <button 
                                key={dIdx}
                                onClick={() => deep.view && handleLinkClick(deep.view)}
                                className="text-xs uppercase font-bold text-blue-400 bg-blue-500/5 py-3 px-4 rounded-lg text-left"
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
  );
};

export default Navbar;