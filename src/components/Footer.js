import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-semibold">Rental Doctors</h2>
          <p className="text-sm">Exceptional Auckland Property Management Services</p>
        </div>
      </div>
      <div className="mt-6 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Rental Doctors - Auckland, New Zealand</p>
      </div>
    </footer>
  );
};

export default Footer;