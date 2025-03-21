import React from 'react';

const LoanServices: React.FC = () => {
  return (
    <div className="py-16 px-8 bg-gray-100">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Servicios de préstamos que ofrecemos
        </h1>
        <div className="inline-block border-t-2 border-orange-500 w-24 mb-6"></div>
        <svg
          width="81"
          height="81"
          viewBox="0 0 81 81"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto"
        >
          <path
            d="M40.5 0l5.556 19.766L60.75 5.426l-5.072 19.896 19.896-5.072-14.34 14.694L81 40.5l-19.766 5.556 14.34 14.694-19.896-5.072 5.072 19.896-14.694-14.34L40.5 81l-5.556-19.766-14.694 14.34 5.072-19.896L5.426 60.75l14.34-14.694L0 40.5l19.766-5.556L5.426 20.25l19.896 5.072L20.25 5.426l14.694 14.34L40.5 0z"
            fill="#FF7E5F"
          ></path>
        </svg>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Servicio 1 */}
        <div className="text-center bg-white p-6 shadow-lg rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTUzNXwwfDF8c2VhcmNofDN8fCUyMkZpbmFuY2luZyUyMnxlbnwwfHx8fDE3NDI0OTg2ODN8MA&ixlib=rb-4.0.3&q=80&w=1080"
            alt="Préstamos Internacionales"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Préstamos internacionales rápidos</h2>
          <p className="text-gray-600">
            Acceda a financiamiento global de forma ágil y sencilla con nuestros préstamos
            internacionales. En Avancemos, simplificamos el proceso para que pueda obtener los
            fondos que necesita sin complicaciones, permitiéndole enfocarse en lo que realmente
            importa.
          </p>
        </div>

        {/* Servicio 2 */}
        <div className="text-center bg-white p-6 shadow-lg rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1527788263495-3518a5c1c42d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTUzNXwwfDF8c2VhcmNofDR8fCUyMkZpbmFuY2luZyUyMnxlbnwwfHx8fDE3NDI0OTg2ODN8MA&ixlib=rb-4.0.3&q=80&w=1080"
            alt="Asesoría Financiera"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Asesoría financiera profesional</h2>
          <p className="text-gray-600">
            Nuestro equipo de expertos en finanzas está a su disposición para ofrecerle asesoría
            personalizada. Desde la planificación de su préstamo hasta la gestión de su
            financiamiento, garantizamos que cada paso sea claro y efectivo, ayudándole a tomar
            decisiones informadas.
          </p>
        </div>

        {/* Servicio 3 */}
        <div className="text-center bg-white p-6 shadow-lg rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTUzNXwwfDF8c2VhcmNofDV8fCUyMkZpbmFuY2luZyUyMnxlbnwwfHx8fDE3NDI0OTg2ODN8MA&ixlib=rb-4.0.3&q=80&w=1080"
            alt="Soluciones de Préstamos"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Soluciones de préstamos a medida</h2>
          <p className="text-gray-600">
            En Avancemos, entendemos que cada situación es diferente. Ofrecemos soluciones de
            préstamos adaptadas a sus necesidades específicas, asegurando que cada cliente reciba
            la atención y el apoyo que merece para lograr sus objetivos financieros.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoanServices;
