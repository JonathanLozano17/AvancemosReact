import React from "react";

const AcercaDe: React.FC = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-4 py-12 bg-custom-bg text-white flex flex-col items-center p-8">
      {/* Wrapper */}
      <div className="flex flex-col lg:flex-row justify-between items-center">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl font-semibold mb-4 ">Acerca de nuestra fiduciaria</h1>
          <p className="text-lg mb-6">
            En Avancemos, entendemos que cada cliente es único. Nuestro equipo de expertos se dedica a ofrecer soluciones
            de financiamiento personalizadas que se adaptan a sus necesidades. Desde préstamos internacionales hasta
            asesoría profesional, estamos comprometidos a guiarlo en cada paso de su viaje financiero. Únase a nosotros y
            descubra cómo podemos ayudarle a alcanzar sus metas financieras con confianza y rapidez.
          </p>

          <hr/>
          
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-custom-bg">10</h2>
              <p className="text-gray-500">años de experiencia</p>
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-custom-bg">20</h2>
              <p className="text-gray-500">expertos en finanzas</p>
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-custom-bg">5000</h2>
              <p className="text-gray-500">clientes satisfechos</p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <img
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTUzNXwwfDF8c2VhcmNofDJ8fCUyMkZpbmFuY2luZyUyMnxlbnwwfHx8fDE3NDI0OTg2ODN8MA&ixlib=rb-4.0.3&q=80&w=1080"
            alt="Fiduciaria"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default AcercaDe;
