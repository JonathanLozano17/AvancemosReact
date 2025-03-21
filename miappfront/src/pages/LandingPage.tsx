// src/pages/LandingPage.tsx
import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col">
      {/* Hero Section */}
      <header className=" p-4 shadow-lg w-full">
        <div className="mx-auto flex items-center justify-between w-full">
          <div className=" font-bold text-2xl">Mi Página</div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#" className=" hover:text-gray-300">
                  About
                </a>
              </li>
              <li>
                <a href="#about" className=" hover:text-gray-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className=" hover:text-gray-300">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className=" hover:text-gray-300">
                  Contacts
                </a>
              </li>
              <li>
                <button
                  type="button"
                  className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  ver proceso
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Características */}
      <section className="py-16 bg-white text-center flex-1 w-full">
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
          {/* Primer Div: Contendrá la imagen */}
          <div className="flex justify-center items-center">
            <img
              src="../assets/diablo.jpg"
              alt="Descripción de la imagen"
              className="w-full h-auto"
            />
          </div>

          {/* Segundo Div: Contendrá el título, párrafo y botones de redes sociales */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-2xl font-bold">Título</h1>
              <p className="mt-4 text-base">
                Aquí va el párrafo descriptivo. Este texto explica algo sobre lo
                que estás presentando.
              </p>
            </div>

            <div className="mt-8">
              {/* Botones de redes sociales */}
              <div className="flex gap-4">
                <a href="https://facebook.com" className="text-blue-500">
                  Facebook
                </a>
                <a href="https://twitter.com" className="text-blue-400">
                  Twitter
                </a>
                <a href="https://instagram.com" className="text-pink-500">
                  Instagram
                </a>
              </div>
            </div>

            <div className="mt-8">
              {/* Detalles de contacto */}
              <p className="text-sm">Dirección: Calle Ejemplo, Ciudad, País</p>
              <p className="text-sm">Teléfono: +123 456 7890</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-violet-950 text-center flex-1 w-full">
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          {/* Div izquierdo: Texto y estadísticas */}
          <div className="flex flex-col justify-between text-left">
            <div>
              <h1 className="text-2xl font-bold">Acerca de nosotros</h1>
              <p className="mt-4 text-base">
                Aquí va el párrafo descriptivo. Este texto explica quiénes
                somos, qué hacemos, y por qué somos la mejor opción para
                nuestros clientes.
              </p>
            </div>

            {/* Apartados de estadísticas */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex flex-col items-center">
                <p className="text-xl font-bold">15</p>
                <p className="text-sm">Años de experiencia</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-xl font-bold">120</p>
                <p className="text-sm">Trabajadores</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-xl font-bold">500+</p>
                <p className="text-sm">Clientes satisfechos</p>
              </div>
            </div>
          </div>

          {/* Div derecho: Imagen */}
          <div className="flex justify-center items-center">
            <img
              src="../assets/diablo.jpg"
              alt="Descripción de la imagen"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {/* Sección izquierda: Imagen + Texto */}
          <div className="flex flex-col items-center text-center">
            <img
              src="ruta-de-tu-imagen1.jpg"
              alt="Préstamos Internacionales Rápidos"
              className="w-full h-auto"
            />
            <p className="mt-4 text-lg font-semibold">
              Préstamos Internacionales Rápidos
            </p>
          </div>

          {/* Sección central: Texto + Imagen */}
          <div className="flex flex-col items-center text-center">
            <p className="text-lg font-semibold">
              Asesoría Financiera Profesional
            </p>
            <p className="mt-4 text-base">
              Aquí puedes explicar brevemente los servicios que ofreces en
              cuanto a asesoría financiera profesional.
            </p>
            <img
              src="ruta-de-tu-imagen2.jpg"
              alt="Asesoría Financiera Profesional"
              className="w-full h-auto mt-4"
            />
          </div>

          {/* Sección derecha: Imagen + Texto */}
          <div className="flex flex-col items-center text-center">
            <img
              src="ruta-de-tu-imagen3.jpg"
              alt="Soluciones de Préstamos a Medida"
              className="w-full h-auto"
            />
            <p className="mt-4 text-lg font-semibold">
              Soluciones de Préstamos a Medida
            </p>
          </div>
        </div>
      </section>

      {/* Llamada a la acción */}
      <section
        id="cta"
        className="py-16 bg-blue-600 text-center text-white w-full"
      >
        <h2 className="text-3xl font-semibold">¡Comienza hoy mismo!</h2>
        <p className="mt-4 text-lg">
          Únete a miles de personas que ya están mejorando su productividad.
        </p>
        <a
          href="/registro"
          className="mt-8 inline-block bg-white text-blue-600 py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-100"
        >
          Regístrate
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6 w-full">
        <p>&copy; 2025 MiAplicación. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
