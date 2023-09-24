import React from 'react';
import backgroundImage from '../public/images/services.jpg';


export default function CtaSection() {
  const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  return (
    <div className="relative overflow-hidden px-6 pt-16 shadow-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
      <div style={sectionStyle} className="absolute inset-0 z-0" aria-hidden="true"></div>
      <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left relative z-10">

      {/* <div className="mx-auto">
        <div className="relative isolate overflow-hidden px-6 pt-16 shadow-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0"> */}
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h1 className="text-3xl tracking-tight text-white sm:text-4xl">
              Simplify Property Management, choose
              <br />
              <h1 className='font-bold'>
              Rental Doctors
              </h1>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Where homes thrive, we manage the Pride !
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="/contact" // Replace with the appropriate link or section ID
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Contact us
              </a>
              <a href="/about" className="py-4 text-sm font-semibold leading-6 text-white">
                Our Services <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
  );
}
