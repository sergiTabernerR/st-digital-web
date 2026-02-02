import React, { useState, useEffect, useRef } from 'react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "¡Hola! 👋 Soy el asistente de ST Digital. ¿En qué puedo ayudarte hoy?", isBot: true }
  ]);
  const [input, setInput] = useState("");
  const [isTransferring, setIsTransferring] = useState(false);
  const scrollRef = useRef(null);

  // Auto-scroll al final de los mensajes
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input.trim();
    const userMsg = { text: userText, isBot: false };
    setMessages(prev => [...prev, userMsg]);
    setInput("");

    // Lógica de detección de solicitud de agente
    const needsAgent = ["agente", "humano", "persona", "hablar con alguien", "ayuda"].some(word => 
      userText.toLowerCase().includes(word)
    );

    if (needsAgent) {
      handleAgentTransfer();
    } else {
      // Respuesta normal de la IA
      setTimeout(() => {
        const botMsg = { 
          text: "Gracias por tu mensaje. Un consultor experto o nuestra IA te responderá en breve. Estamos especializados en Cloud, DevOps y Outsourcing.", 
          isBot: true 
        };
        setMessages(prev => [...prev, botMsg]);
      }, 1000);
    }
  };

  const handleAgentTransfer = () => {
    setIsTransferring(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: "🔄 Conectando con un consultor de ST Digital... Por favor, espera un momento.", 
        isBot: true 
      }]);

      setTimeout(() => {
        setMessages(prev => [...prev, { 
          text: "👨‍💻 ¡Hola! Soy Sergi. Para una atención inmediata y personalizada, puedes continuar esta charla directamente por WhatsApp conmigo.", 
          isBot: true,
          isAction: true // Marcamos que este mensaje tiene una acción especial
        }]);
        setIsTransferring(false);
      }, 2000);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-sans">
      {/* Ventana de Chat */}
      {isOpen && (
        <div className="bg-white w-[350px] h-[550px] rounded-3xl shadow-2xl mb-4 flex flex-col overflow-hidden border border-gray-100 animate-in fade-in slide-in-from-bottom-4 duration-300">
          
          {/* Header */}
          <div className="bg-blue-600 p-6 text-white flex justify-between items-center shadow-lg">
            <div>
              <h3 className="font-black uppercase tracking-tight text-lg">ST Digital Support</h3>
              <p className="text-xs opacity-80 flex items-center gap-1">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Agentes disponibles
              </p>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-2xl hover:bg-white/20 w-8 h-8 rounded-full transition-all flex items-center justify-center">×</button>
          </div>

          {/* Área de Mensajes */}
          <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto bg-gray-50 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex flex-col ${msg.isBot ? 'items-start' : 'items-end'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm shadow-sm ${
                  msg.isBot 
                    ? 'bg-white text-gray-800 rounded-tl-none border border-gray-100' 
                    : 'bg-blue-600 text-white rounded-tr-none'
                }`}>
                  {msg.text}
                </div>
                
                {/* Botón especial de WhatsApp cuando se solicita agente */}
                {msg.isAction && (
                  <a 
                    href="https://wa.me/34679077394?text=Hola!%20Vengo%20de%20la%20web%20y%20necesito%20hablar%20con%20un%20agente." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-3 bg-green-500 text-white px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 hover:bg-green-600 transition-all shadow-md animate-bounce"
                  >
                    <span>💬 HABLAR POR WHATSAPP</span>
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-4 bg-white border-t border-gray-100 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={isTransferring ? "Conectando..." : "Escribe tu mensaje..."}
              disabled={isTransferring}
              className="flex-1 bg-gray-100 border-none rounded-full px-4 py-3 text-sm focus:ring-2 focus:ring-blue-600 outline-none text-black disabled:opacity-50"
            />
            <button 
                type="submit" 
                disabled={isTransferring}
                className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition disabled:bg-gray-400 shadow-md"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
            </button>
          </form>
          
          <div className="bg-white text-[9px] text-center pb-3 text-gray-400 uppercase tracking-widest font-black">
            ST Digital Intelligence Layer
          </div>
        </div>
      )}

      {/* Botón Flotante Principal */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`${isOpen ? 'bg-gray-800' : 'bg-blue-600'} text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-all active:scale-95 flex items-center justify-center`}
      >
        {isOpen ? (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <div className="relative">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          </div>
        )}
      </button>
    </div>
  );
};

export default ChatBot;