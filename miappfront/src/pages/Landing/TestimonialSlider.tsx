import React from 'react';

const TestimonialsSlider: React.FC = () => {
    return (
        <div className="w-full relative">
          <div className="absolute top-0 left-0 z-10">
            <button className="w-10 h-10 flex justify-center items-center bg-gray-800 text-white rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="10.966" height="18" viewBox="0 0 10.966 18">
                <path d="M8.681 17.631L.301 9.738a1 1 0 010-1.431L8.681.384a1.381 1.381 0 011.911 0 1.23 1.23 0 010 1.761L3.343 9.004l7.253 6.833a1.23 1.23 0 010 1.761 1.381 1.381 0 01-1.911.03z"></path>
              </svg>
            </button>
          </div>
          
          <div className="slick-slider-container">
            <div className="slick-slider swipe-slider slick-initialized">
              <button type="button" className="slick-arrow slick-prev hidden">
                Previous
              </button>
              <div className="slick-list overflow-hidden">
                <div className="slick-track flex">
                  <div className="slick-slide flex-shrink-0 w-full">
                    <div className="rf-image-slider">
                      <div className="Testimonials3styled__SliderWrapper">
                        <div className="Testimonials3styled__TextContainer bg-white p-8 rounded-lg shadow-lg">
                          <h2 className="text-xl font-semibold text-gray-800">Anna Phillman</h2>
                          <p className="text-gray-600 text-lg mt-4">Avancemos es el ejemplo perfecto de cómo debería ser una fiduciaria. Su equipo es experto y comprensivo, y las soluciones de préstamos a medida que ofrecen han sido clave para mi éxito financiero. Estoy muy satisfecho con su atención al detalle y profesionalismo.</p>
                        </div>
                      </div>
                    </div>
                  </div>
    
                  <div className="slick-slide flex-shrink-0 w-full">
                    <div className="rf-image-slider">
                      <div className="Testimonials3styled__SliderWrapper">
                        <div className="Testimonials3styled__TextContainer bg-white p-8 rounded-lg shadow-lg">
                          <h2 className="text-xl font-semibold text-gray-800">Anna Woods</h2>
                          <p className="text-gray-600 text-lg mt-4">Avancemos ha sido mi mejor opción para obtener préstamos. La rapidez y eficiencia en el proceso de solicitud son incomparables. Gracias a su asesoría profesional, he logrado financiar mis proyectos internacionales sin complicaciones. ¡Altamente recomendados!</p>
                        </div>
                      </div>
                    </div>
                  </div>
    
                  <div className="slick-slide flex-shrink-0 w-full">
                    <div className="rf-image-slider">
                      <div className="Testimonials3styled__SliderWrapper">
                        <div className="Testimonials3styled__TextContainer bg-white p-8 rounded-lg shadow-lg">
                          <h2 className="text-xl font-semibold text-gray-800">Lucy Evans</h2>
                          <p className="text-gray-600 text-lg mt-4">Descubrí Avancemos y ha cambiado mi perspectiva sobre los préstamos. Su enfoque en la atención al cliente es excepcional, y los préstamos internacionales rápidos me han permitido expandir mis oportunidades. ¡Un servicio que realmente se preocupa por sus clientes!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button type="button" className="slick-arrow slick-next hidden">
                Next
              </button>
            </div>
          </div>
          
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            <button className="w-4 h-4 rounded-full bg-gray-500"></button>
            <button className="w-4 h-4 rounded-full bg-gray-500"></button>
            <button className="w-4 h-4 rounded-full bg-gray-800"></button>
          </div>
    
          <div className="absolute top-0 right-0 z-10">
            <button className="w-10 h-10 flex justify-center items-center bg-gray-800 text-white rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="10.966" height="18" viewBox="0 0 10.966 18">
                <path d="M8.681 17.631L.301 9.738a1 1 0 010-1.431L8.681.384a1.381 1.381 0 011.911 0 1.23 1.23 0 010 1.761L3.343 9.004l7.253 6.833a1.23 1.23 0 010 1.761 1.381 1.381 0 01-1.911.03z"></path>
              </svg>
            </button>
          </div>
        </div>
      );
    };

export default TestimonialsSlider;
