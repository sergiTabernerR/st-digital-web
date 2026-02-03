// 1. AÑADIDO useEffect AQUÍ
import React, { useState, useEffect } from 'react'; 
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';

// --- TODAS TUS IMPORTACIONES SE MANTIENEN IGUAL ---
import HeroHome from './components/Principal/Hero';
import MiddleHome from './components/Principal/MiddleSection';
import HeroSoluciones from './components/SolucionEmpresarial/HeroSoluciones';
import MiddleSoluciones from './components/SolucionEmpresarial/MiddleSection';
import SolutionsGrid from './components/SolucionEmpresarial/SolutionsGrid';
import MVPPage from './components/SolucionEmpresarial/MVP/MVPPage';
import InteligenciaArtificial from './components/SolucionEmpresarial/InteligenciaArtificial/InteligenciaArtificial';
import Contacto from './components/Contacto/Contacto';
import ArquitecturaSoluciones from './components/ArquitecturaSoluciones/ArquitecturaSoluciones';
import Microservicios from './components/ArquitecturaSoluciones/Microservicios/Microservicios';
import Lengaujes from './components/Lenguajes/Lenguajes';
import Dotnet from './components/Lenguajes/DotNet';
import NodeJS from './components/Lenguajes/NodeJS';
import Python from './components/Lenguajes/Python';
import Flutter from './components/Lenguajes/Flutter';
import Tecnologias from './components/Tecnologias/Tecnologias';
import WebSocket from './components/Tecnologias/WebSocket';
import Mqtt from './components/Tecnologias/Mqtt';
import Kafka from './components/Tecnologias/Kafka';
import Devops from './components/DevOps/DevOps';
import CiCd from './components/DevOps/CiCd';
import Cloud from './components/Cloud/Cloud';
import Azure from './components/Cloud/Azure';
import GoogleCloud from './components/Cloud/GoogleCloud';
import Kubernetes from './components/Cloud/Kubernetes';
import Outsourcing from './components/Outsourcing/Outsourcing';
import ChatBot from './Funcionalidad/ChatBox/ChatBot';
import Desarrollo from './components/Desarrollo/Desarrollo';

function App() {
  const getInitialView = () => {
    const path = window.location.pathname.replace('/', '');
    
    // 2. LISTA AMPLIADA: He añadido todas las vistas que tienes en tu JSX
    const validViews = [
      'Dotnet', 'NodeJS', 'Python', 'Flutter', 'WebSocket', 'Mqtt', 'Kafka', 
      'Desarrollo', 'Contacto', 'Tecnologias', 'Lenguajes', 'soluciones', 
      'mvp', 'InteligenciaArtificial', 'ArtquitecturaSoluciones', 'Microservicios',
      'Devops', 'CiCd', 'Cloud', 'Azure', 'GoogleCloud', 'Kubernetes', 'Outsourcing'
    ];
    
    if (validViews.includes(path)) {
      return path;
    }
    return 'home'; 
  };

  const [view, setView] = useState(getInitialView());

  // Lógica de URL
  useEffect(() => {
    const currentPath = view === 'home' ? '/' : `/${view}`;
    if (window.location.pathname !== currentPath) {
      window.history.pushState({ view }, '', currentPath);
    }
  }, [view]);

  // Lógica de botón atrás
  useEffect(() => {
    const handlePopState = (event) => {
      if (event.state && event.state.view) {
        setView(event.state.view);
      } else {
        setView('home');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Navbar setView={setView} />

      {view === 'home' && (
        <>
          <HeroHome />
          <MiddleHome setView={setView} />   
        </>
      )}

      {view === 'soluciones' && (
        <>
          <HeroSoluciones setView={setView} /> 
          <MiddleSoluciones setView={setView} /> 
          <SolutionsGrid setView={setView} /> 
        </>
      )}

      {view === 'mvp' && <MVPPage setView={setView} />}
      {view === 'InteligenciaArtificial' && <InteligenciaArtificial setView={setView} />}
      {view === 'Contacto' && <Contacto setView={setView} />}
      {view === 'ArtquitecturaSoluciones' && <ArquitecturaSoluciones setView={setView} />}
      {view === 'Microservicios' && <Microservicios setView={setView} />}
      {view === 'Lenguajes' && <Lengaujes setView={setView} />}
      {view === 'Dotnet' && <Dotnet setView={setView} />}
      {view === 'NodeJS' && <NodeJS setView={setView} />}
      {view === 'Python' && <Python setView={setView} />}
      {view === 'Flutter' && <Flutter setView={setView} />}
      {view === 'Tecnologias' && <Tecnologias setView={setView} />}
      {view === 'WebSocket' && <WebSocket setView={setView} />}
      {view === 'Mqtt' && <Mqtt setView={setView} />}
      {view === 'Kafka' && <Kafka setView={setView} />}
      {view === 'Devops' && <Devops setView={setView} />}
      {view === 'CiCd' && <CiCd setView={setView} />}
      {view === 'Cloud' && <Cloud setView={setView} />}
      {view === 'Azure' && <Azure />}
      {view === 'GoogleCloud' && <GoogleCloud setView={setView} />}
      {view === 'Kubernetes' && <Kubernetes setView={setView} />}
      {view === 'Outsourcing' && <Outsourcing setView={setView} />}
      {view === 'Desarrollo' && <Desarrollo setView={setView} />}
      
      <ContactForm />
      <ChatBot />
    </div>
  );
}

export default App;