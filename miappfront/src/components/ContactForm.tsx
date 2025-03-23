import React, { useRef } from "react";
import { useEmail } from "../hooks/useEmail";

export const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { handleSendEmail, loading, responseMessage } = useEmail();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formRef.current) {
      handleSendEmail(formRef.current);
    }
  };

  return (
    <>
        <form ref={formRef} onSubmit={onSubmit} className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md">
            <label className="block text-gray-700">Nombre</label>
            <input type="text" name="user_name" required className="w-full border rounded p-2 mb-3"/>

            <label className="block text-gray-700">Email</label>
            <input type="email" name="user_email" required className="w-full border rounded p-2 mb-3"/>

            <label className="block text-gray-700">Mensaje</label>
            <textarea name="message" required className="w-full border rounded p-2 mb-3"/>

            <button type="submit" disabled={loading} className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            {loading ? "Enviando..." : "Enviar"}
            </button>

            {responseMessage && <p className="mt-3 text-green-500">{responseMessage}</p>}
        </form>    

        <a 
      href="https://wa.me/+573223728194" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="flex items-center justify-center bg-green-500 text-white font-semibold py-3 px-6 rounded-full hover:bg-green-600 transition-colors duration-300 shadow-lg"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19.4 15.8c-1.1 0-2.1-.4-2.9-1.1-.8-.7-1.3-1.6-1.5-2.7-.2-1.1-.2-2.3.1-3.4.3-1.1 1.1-2.1 2-2.7.8-.6 1.7-.9 2.6-.8 1.2.1 2.2.8 2.9 1.7s1.1 2.3.7 3.5c-.4 1.3-1.3 2.3-2.4 2.8-1.1.5-2.3.7-3.5.4zm-3.4-4.2c.3-.6.4-1.3.3-2-.1-.7-.5-1.3-1.1-1.7-.6-.4-1.3-.5-1.9-.3-.7.2-1.3.6-1.8 1.1-.5.5-.9 1.1-1.2 1.7s-.5 1.4-.4 2.2c.1.8.5 1.5 1.1 2 .5.5 1.2.7 1.9.7.7 0 1.4-.3 1.9-.8.5-.5.9-1.2 1.2-1.8zm-4.5-2.4c-.4-.6-.9-1.1-1.6-1.4-.7-.3-1.5-.4-2.2-.2-.7.2-1.3.7-1.8 1.3-.5.6-.8 1.3-1 2s-.1 1.6.3 2.3c.4.7.9 1.2 1.7 1.4.7.2 1.5.3 2.2.1s1.3-.7 1.8-1.3c.5-.6.7-1.3.9-2 .2-.7.1-1.5-.3-2.2z"></path>
      </svg>
      Redirigir a WhatsApp
    </a>
    
    </>


  );
};
