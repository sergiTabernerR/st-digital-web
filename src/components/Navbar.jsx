import React, { useState } from 'react';
import Lenguajes from './Lenguajes/Lenguajes';

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
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md text-white border-b border-gray-800">
      {/* CENTRADOR: 
          Agregamos este div que limita el ancho a 1280px (max-w-7xl) y lo centra (mx-auto).
          Mantenemos py-4 y px-6 como tenías originalmente.
      */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <div 
          className="text-2xl font-bold tracking-tighter cursor-pointer"
          onClick={() => handleLinkClick('home')}
        >
          ST<span className="text-gray-400">Digital</span>
        </div>

        {/* --- DESKTOP --- */}
        <div className="hidden md:flex space-x-8 text-sm font-semibold uppercase">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
            <button 
        onClick={() => link.view && handleLinkClick(link.view)}
        className="hover:text-set-blue transition flex items-center gap-1 py-2"
      >
        {link.name} {link.submenu && <span className="text-[8px]">▼</span>}
      </button>

              {link.submenu && (
                /* Ajustamos mt-2 para que el menú no esté tan pegado al botón */
                <div className="absolute left-0 mt-2 w-64 bg-set-dark border border-gray-800 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  {link.submenu.map((sub, idx) => (
                    <div key={idx} className="relative group/item border-b border-gray-800/50 last:border-0">
                      
                      <div className="flex justify-between items-center hover:bg-gray-900 transition-colors">
                        {sub.view ? (
                          <button 
                            onClick={() => handleLinkClick(sub.view)}
                            className="flex-1 text-left px-4 py-3 text-xs hover:text-set-blue font-bold uppercase"
                          >
                            {sub.name}
                          </button>
                        ) : (
                          <span className="flex-1 px-4 py-3 text-xs cursor-default italic text-gray-400">
                            {sub.name}
                          </span>
                        )}
                        {sub.submenu && <span className="pr-4 text-[10px] text-gray-500">▶</span>}
                      </div>

                      {/* NIVEL 3 */}
                      {sub.submenu && (
                        <div className="absolute left-full top-0 w-48 bg-set-dark border border-gray-800 shadow-xl opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all">
                          {sub.submenu.map((deepItem, dIdx) => (
                            <div key={dIdx} className="hover:bg-gray-900 border-b border-gray-800/50 last:border-0">
                              {typeof deepItem === 'object' && deepItem.view ? (
                                <button 
                                  onClick={() => handleLinkClick(deepItem.view)}
                                  className="w-full text-left px-4 py-3 text-xs hover:text-set-blue font-bold"
                                >
                                  {deepItem.name}
                                </button>
                              ) : (
                                <div className="px-4 py-3 text-xs text-gray-400">
                                  {typeof deepItem === 'string' ? deepItem : deepItem.name}
                                </div>
                              )}
                            </div>
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

        {/* --- MÓVIL --- */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>{isOpen ? '✕' : '☰'}</button>
      </div>

      {/* --- MENÚ MÓVIL (Fuera del contenedor para que ocupe todo el ancho) --- */}
      {isOpen && (
        <div className="absolute top-[100%] left-0 w-full bg-black flex flex-col p-6 space-y-4 md:hidden border-b border-gray-800 h-screen overflow-y-auto">
          {navLinks.map((link) => (
            <div key={link.name} className="flex flex-col">
              <button 
                onClick={() => toggleMobileMenu(link.name)}
                className="flex justify-between items-center text-lg font-bold uppercase"
              >
                {link.name} {link.submenu && <span>{activeMobileMenus.includes(link.name) ? '-' : '+'}</span>}
              </button>
              
              {link.submenu && activeMobileMenus.includes(link.name) && (
                <div className="flex flex-col ml-4 mt-2 space-y-3 border-l border-gray-700 pl-4">
                  {link.submenu.map((sub, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-center">
                        {sub.view ? (
                       <button 
  onClick={() => {
    if (link.view) {
      handleLinkClick(link.view); // Si tiene vista (Contacto), navega
    } else {
      toggleMobileMenu(link.name); // Si no tiene (Desarrollo), abre el submenú
    }
  }}
  className="flex justify-between items-center text-lg font-bold uppercase"
>
  {link.name} {link.submenu && <span>{activeMobileMenus.includes(link.name) ? '-' : '+'}</span>}
</button>
                        ) : (
                          <span className="text-gray-400 uppercase text-sm py-1">{sub.name}</span>
                        )}
                        {sub.submenu && (
                          <button onClick={() => toggleMobileMenu(sub.name)} className="p-2 text-gray-500">
                            {activeMobileMenus.includes(sub.name) ? '▾' : '▸'}
                          </button>
                        )}
                      </div>

                      {sub.submenu && activeMobileMenus.includes(sub.name) && (
                        <div className="flex flex-col ml-4 mt-1 space-y-2 border-l border-gray-800 pl-4 pb-2">
                          {sub.submenu.map((deep, dIdx) => (
                            <div key={dIdx}>
                              {typeof deep === 'object' && deep.view ? (
                                <button onClick={() => handleLinkClick(deep.view)} className="text-gray-500 text-xs uppercase hover:text-set-blue text-left py-1">
                                  {deep.name}
                                </button>
                              ) : (
                                <div className="text-gray-600 text-xs uppercase py-1">
                                  {typeof deep === 'string' ? deep : deep.name}
                                </div>
                              )}
                            </div>
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
      )}
    </nav>
  );
};

export default Navbar;