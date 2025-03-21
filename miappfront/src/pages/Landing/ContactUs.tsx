import React from 'react';

const ContactUs: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-custom-bg text-white">
      <div className="text-center w-full mb-8">
        <h1 className="text-4xl font-bold">Contáctenos</h1>
      </div>

      <div className="flex w-full max-w-7xl mx-auto">
        {/* Left section: Contact information */}
        <div className="w-1/2 p-8 space-y-6">
          <div className="text-lg font-semibold">Email</div>
          <a href="mailto:info@youraddress.com" className="text-blue-500">
            <p>info@youraddress.com</p>
          </a>

          <div className="text-lg font-semibold">Phone</div>
          <a href="tel:646-675-5974" className="text-blue-500">
            <p>646-675-5974</p>
          </a>

          <div className="text-lg font-semibold">Address</div>
          <p>3961 Small Street, New York, United States</p>

          <div className="my-8">
            <svg
              className="mx-auto"
              width="31"
              height="32"
              viewBox="0 0 31 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30.02 15.612l-11.536 3.41-3.391 11.997L11.67 19.03.02 15.538l11.644-3.522L15.053.019l3.422 11.988 11.545 3.605z"
                fill="#000"
              ></path>
            </svg>
            <p className="text-center">Nos encantaría saber de usted si tiene alguna pregunta o sugerencia.</p>
          </div>
        </div>



        {/* Right section: Contact Form */}
        <div className="w-1/2 p-8  shadow-lg rounded-full ">
          <div className="space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Name"
                aria-label="Name input"
                className="w-full p-3 border border-gray-300 bg-white text-black rounded-full"
              />
              <span className="absolute top-2 right-2 text-red-500">*</span>
            </div>

            <div className="relative">
              <input
                type="email"
                placeholder="Email"
                aria-label="Email input"
                className="w-full p-3 border border-gray-300 bg-white text-black rounded-full"
              />
              <span className="absolute top-2 right-2 text-red-500">*</span>
            </div>

            <div className="relative">
              <textarea
                rows={8}
                placeholder="Type your message here…"
                aria-label="Message input"
                className="w-full p-3 border border-gray-300 bg-white text-black rounded-4xl"
              />
            </div>

            <div className="text-center">
              <button className=" text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-full text-sm px-10 py-2.5 text-center me-2 mb-2">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
