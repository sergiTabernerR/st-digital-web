import React, { useState, useRef } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const formRef = useRef();
  const recaptchaRef = useRef(null);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [loading, setLoading] = useState(false);

  const onCaptchaChange = (value) => {
    if (value) setIsCaptchaVerified(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isCaptchaVerified) {
      alert("Por favor, confirma que no eres un robot.");
      return;
    }

    setLoading(true);

    // REEMPLAZA ESTOS 3 VALORES CON LOS DE TU PANEL DE EMAILJS
    const SERVICE_ID = "service_ykxf3qb";
    const TEMPLATE_ID = "template_3k4h729";
    const PUBLIC_KEY = "VBMBKVI4XhCZLccKW";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
          alert("¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.");
          formRef.current.reset();
          setIsCaptchaVerified(false);
          recaptchaRef.current.reset();
      }, (error) => {
          alert("Hubo un error al enviar el mensaje. Inténtalo de nuevo.");
          console.error(error.text);
      })
      .finally(() => setLoading(false));
  };

  return (
    <section id="formulario-contacto" className="bg-black text-white py-20 border-t border-gray-900">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16">
        
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Tienes un proyecto?<br />
            ¡Cuéntanoslo!
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Si te ha parecido interesante y quieres contarnos tu proyecto, completa este formulario y responderemos lo antes posible.
          </p>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold mb-2 uppercase tracking-wide">Nombre</label>
            <input 
              required
              name="user_name" // Coincide con {{user_name}} en EmailJS
              type="text" 
              placeholder="Tu nombre o empresa" 
              className="w-full bg-transparent border border-gray-600 p-3 rounded text-white focus:border-blue-500 focus:outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-2 uppercase tracking-wide">Email</label>
            <input 
              required
              name="user_email" // Coincide con {{user_email}} en EmailJS
              type="email" 
              placeholder="correo@ejemplo.com" 
              className="w-full bg-transparent border border-gray-600 p-3 rounded text-white focus:border-blue-500 focus:outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-2 uppercase tracking-wide">Comentario</label>
            <textarea 
              required
              name="message" // Coincide con {{message}} en EmailJS
              rows="4"
              placeholder="Cuéntanos tu idea..." 
              className="w-full bg-transparent border border-gray-600 p-3 rounded text-white focus:border-blue-500 focus:outline-none transition"
            ></textarea>
          </div>

          <div className="py-2">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" 
              onChange={onCaptchaChange}
              theme="dark"
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className={`w-full md:w-auto font-bold py-3 px-12 rounded transition uppercase tracking-widest ${
              isCaptchaVerified && !loading
              ? "bg-blue-600 hover:bg-blue-500 text-white" 
              : "bg-gray-700 text-gray-400 cursor-not-allowed"
            }`}
          >
            {loading ? "Enviando..." : "Enviar Mensaje"}
          </button>
        </form>
      </div>

      <div className="text-center text-gray-500 text-sm mt-20">
        Made with ❤️ by ST Digital SL
      </div>
    </section>
  );
};

export default ContactForm;