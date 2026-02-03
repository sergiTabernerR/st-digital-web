import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';

// --- IMPORTACIONES DE LA HOME ---
import HeroHome from './components/Principal/Hero';
import MiddleHome from './components/Principal/MiddleSection';

// --- IMPORTACIONES DE SOLUCIONES EMPRESARIALES ---
// Fíjate cómo usamos nombres distintos (alias) para evitar conflictos
import HeroSoluciones from './components/SolucionEmpresarial/HeroSoluciones';
import MiddleSoluciones from './components/SolucionEmpresarial/MiddleSection';
import SolutionsGrid from './components/SolucionEmpresarial/SolutionsGrid';
import MVPPage from './components/SolucionEmpresarial/MVP/MVPPage';
import InteligenciaArtificial from './components/SolucionEmpresarial/InteligenciaArtificial/InteligenciaArtificial';

// Importacion de Contacto
import Contacto from './components/Contacto/Contacto';

// Arquitectura de Soluciones
import ArquitecturaSoluciones from './components/ArquitecturaSoluciones/ArquitecturaSoluciones';
// Microservicios
import Microservicios from './components/ArquitecturaSoluciones/Microservicios/Microservicios';

//Lenguajes
import Lengaujes from './components/Lenguajes/Lenguajes';
import Dotnet from './components/Lenguajes/DotNet';
import NodeJS from './components/Lenguajes/NodeJS';
import Python from './components/Lenguajes/Python';
import Flutter from './components/Lenguajes/Flutter';

//Tecnologias
import Tecnologias from './components/Tecnologias/Tecnologias';
import WebSocket from './components/Tecnologias/WebSocket';
import Mqtt from './components/Tecnologias/Mqtt';
import Kafka from './components/Tecnologias/Kafka';

//Devops
import Devops from './components/DevOps/DevOps';
import CiCd from './components/DevOps/CiCd';

//Cloud
import Cloud from './components/Cloud/Cloud';
import Azure from './components/Cloud/Azure';
import GoogleCloud from './components/Cloud/GoogleCloud';
import Kubernetes from './components/Cloud/Kubernetes';

//Outsourcing
import Outsourcing from './components/Outsourcing/Outsourcing';

//ChatBox
import ChatBot from './Funcionalidad/ChatBox/ChatBot';

//Desarrollo

import Desarrollo from './components/Desarrollo/Desarrollo';






function App() {
  const [view, setView] = useState('home');

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Navbar setView={setView} />

 {/* LÓGICA DE VISTAS */}
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

      {view === 'mvp' && (
        <MVPPage setView={setView} /> 
      )}

     {view === 'InteligenciaArtificial' && (
        <InteligenciaArtificial setView={setView} /> 
      )}
        {view === 'Contacto' && (
        <Contacto setView={setView} /> 
      )}
       {view === 'ArtquitecturaSoluciones' && (
        <ArquitecturaSoluciones setView={setView} /> 

)}
     {view === 'Microservicios' && (
        <Microservicios setView={setView} /> 
        )}

    {view === 'Lenguajes' && (
        <Lengaujes setView={setView} /> 
        )}
          {view === 'Dotnet' && (
        <Dotnet setView={setView} /> 
        )}
     {view === 'NodeJS' && (
        <NodeJS setView={setView} /> 
        )}
        
            {view === 'Python' && (
        <Python setView={setView} /> 
        )}
      {view === 'Flutter' && (
        <Flutter setView={setView} /> 
        )}
      {view === 'Tecnologias' && (
        <Tecnologias setView={setView} /> 
        )}
 {view === 'WebSocket' && (
        <WebSocket setView={setView} /> 
        )}
       {view === 'Mqtt' && (
        <Mqtt setView={setView} /> 
        )}
          

      {view === 'Kafka' && (
        <Kafka setView={setView} /> 
        )}

              {view === 'Devops' && (
        <Devops setView={setView} /> 
        )}
         {view === 'CiCd' && (
        <CiCd setView={setView} /> 
        )}
     {view === 'Cloud' && (
        <Cloud setView={setView} /> 
        )}

   {view === 'Azure' && (
        <Azure />
        )}
   {view === 'GoogleCloud' && (
        <GoogleCloud setView={setView} /> 
        )}
  {view === 'Kubernetes' && (
        <Kubernetes setView={setView} /> 
        )}
  {view === 'Outsourcing' && (
        <Outsourcing setView={setView} /> 
        )}
          {view === 'Desarrollo' && (
        <Desarrollo setView={setView} />   
        )}
        
      <ContactForm />

      {/* Botón flotante */}
   
      <ChatBot />
    </div>

  );
}

export default App;