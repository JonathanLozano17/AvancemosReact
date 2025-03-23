import React, { useRef } from "react";
import { useEmail } from "../hooks/useEmail";

export const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { sendEmail, loading, error, success } = useEmail();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formRef.current) {
      await sendEmail(formRef.current);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded-lg shadow-lg"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
            Nombre
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
            Mensaje
          </label>
          <textarea
            name="message"
            id="message"
            required
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            rows={4}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 mt-4 text-white bg-green-500 hover:bg-green-600 rounded-lg transition-colors duration-300 disabled:opacity-50"
        >
          {loading ? "Enviando..." : "Enviar"}
        </button>

        {success && <p className="mt-2 text-green-500">Correo enviado con éxito ✅</p>}
        {error && <p className="mt-2 text-red-500">{error}</p>}
      </form>

      <div className="mt-6 text-center">
        <a
          href="https://wa.me/+573223728194"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-green-500 text-white font-semibold py-3 px-6 rounded-full hover:bg-green-600 transition-colors duration-300 shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mr-2"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19.4 15.8c-1.1 0-2.1-.4-2.9-1.1-.8-.7-1.3-1.6-1.5-2.7-.2-1.1-.2-2.3.1-3.4.3-1.1 1.1-2.1 2-2.7.8-.6 1.7-.9 2.6-.8 1.2.1 2.2.8 2.9 1.7s1.1 2.3.7 3.5c-.4 1.3-1.3 2.3-2.4 2.8-1.1.5-2.3.7-3.5.4zm-3.4-4.2c.3-.6.4-1.3.3-2-.1-.7-.5-1.3-1.1-1.7-.6-.4-1.3-.5-1.9-.3-.7.2-1.3.6-1.8 1.1-.5.5-.9 1.1-1.2 1.7s-.5 1.4-.4 2.2c.1.8.5 1.5 1.1 2 .5.5 1.2.7 1.9.7.7 0 1.4-.3 1.9-.8.5-.5.9-1.2 1.2-1.8zm-4.5-2.4c-.4-.6-.9-1.1-1.6-1.4-.7-.3-1.5-.4-2.2-.2-.7.2-1.3.7-1.8 1.3-.5.6-.8 1.3-1 2s-.1 1.6.3 2.3c.4.7.9 1.2 1.7 1.4.7.2 1.5.3 2.2.1s1.3-.7 1.8-1.3c.5-.6.7-1.3.9-2 .2-.7.1-1.5-.3-2.2z"></path>
          </svg>
          Redirigir a WhatsApp
        </a>
      </div>
    </div>
  );
};
