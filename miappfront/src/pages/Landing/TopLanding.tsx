import React from "react";

const TopLanding: React.FC = () => {
  return (
    <>
      <header className="relative w-full bg-gray-50 py-6 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          {/* Navegación */}
          <nav className="flex justify-between items-center mb-10">
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                About
              </a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Services
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Testimonials
              </a>
              <a href="#contacts" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Contacts
              </a>
            </div>
            <div className="md:hidden">
              <button className="p-2">
                <h1>prueba</h1>
              </button>
            </div>
          </nav>
          
          <div className="relative block w-200.5">
            <div className=" inset-0 flex justify-center items-center">
                <div className="lazy-load is-visible">
                    <figure className="lazy-figure">
                        <img 
                        alt="Hero illustration"
                        src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTUzNXwwfDF8c2VhcmNofDF8fCUyMkZpbmFuY2luZyUyMnxlbnwwfHx8fDE3NDI0OTg2ODN8MA&ixlib=rb-4.0.3&q=80&w=1080"
                        className="w-full h-auto object-cover"
                        />
                    </figure>
                </div>
                <div className="absolute inset-0  bg-opacity-50"></div>
            </div>
            </div>

          {/* Contenido Principal */}
          <div className="flex flex-col-reverse md:flex-row md:items-center gap-8 mb-12">
            {/* Sección de texto */}
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold mb-4 text-gray-900">
                Avancemos - Su socio en préstamos internacionales
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Bienvenido a Avancemos, donde la confianza se encuentra con la profesionalidad. 
                Nuestros servicios de préstamos rápidos están diseñados para facilitar su acceso 
                a financiamiento internacional, brindándole la tranquilidad que necesita.
              </p>
              
              {/* Redes Sociales */}
              <div className="flex space-x-4">
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 32 32">
                    <path d="M24.769 5H7.23a6.231 6.231 0 00-6.231 6.231v8.768A6.231 6.231 0 007.23 26.23h17.539A6.231 6.231 0 0031 19.999v-8.768A6.231 6.231 0 0024.769 5zm-4.213 11.041l-8.203 3.913a.33.33 0 01-.471-.297v-8.07a.33.33 0 01.478-.294l8.203 4.157a.33.33 0 01-.007.591z"></path>
                  </svg>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 32 32">
                    <path d="M16 8.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 12.188A4.695 4.695 0 0111.312 16c0-2.586 2.104-4.688 4.688-4.688s4.688 2.102 4.688 4.688A4.695 4.695 0 0116 20.688zm8.063-11.751a.999.999 0 110-1.997.999.999 0 010 1.997zM21.625 1h-11.25A9.376 9.376 0 001 10.375v11.25A9.376 9.376 0 0010.375 31h11.25A9.376 9.376 0 0031 21.625v-11.25A9.376 9.376 0 0021.625 1zm6.563 20.625a6.57 6.57 0 01-6.563 6.563h-11.25a6.57 6.57 0 01-6.563-6.563v-11.25a6.57 6.57 0 016.563-6.563h11.25a6.57 6.57 0 016.563 6.563v11.25z"></path>
                  </svg>
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 32 32">
                    <path d="M12.026 6.81v4.13H9v5.051h3.026V31h6.216V15.992h4.171s.391-2.422.58-5.07h-4.728V7.469c0-.516.678-1.21 1.348-1.21H23V1.001h-4.605c-6.523 0-6.369 5.055-6.369 5.81z"></path>
                  </svg>
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="text-gray-700">
                    <path d="M.078 1l12.355 16.547L0 31h2.798l10.885-11.779L22.478 31H32L18.95 13.523 30.522 1h-2.798L17.7 11.848 9.6 1H.078zm4.115 2.064h4.374l19.317 25.871H23.51L4.193 3.065z"></path>
                  </svg>
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 32 32">
                    <path d="M29.333 18.777v9.83h-5.716v-9.172c0-2.304-.827-3.876-2.896-3.876-1.579 0-2.519 1.06-2.933 2.085-.151.366-.19.877-.19 1.389v9.574h-5.717s.077-15.534 0-17.144h5.717v2.43l-.038.055h.038v-.055c.76-1.166 2.116-2.833 5.152-2.833 3.762 0 6.582 2.45 6.582 7.716zM5.902 3.2c-1.956 0-3.235 1.279-3.235 2.961 0 1.646 1.242 2.964 3.159 2.964h.038c1.994 0 3.234-1.318 3.234-2.964C9.06 4.479 7.858 3.2 5.902 3.2zM3.006 28.608h5.715V11.464H3.006v17.144z"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Imagen */}
            
            </div>
          {/* Información de Contacto */}
          <div className="flex flex-col md:flex-row gap-8 py-6 border-t border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"></path>
                </svg>
              </div>
              <p className="text-gray-600">3961 Small Street, NY</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path>
                </svg>
              </div>
              <a href="tel:646-675-5974" className="text-gray-600 hover:text-blue-600 transition-colors">
                646-675-5974
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default TopLanding;