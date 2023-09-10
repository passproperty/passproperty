import React from 'react';
import { CheckCircleOutline, Home, Payment, LocationCity } from '@mui/icons-material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const services = [
  {
    name: 'Repairs & Maintenance',
    description:
      'We provide round-the-clock access to affordable and skilled tradespeople who are certified, and the best part is, there are no additional charges for their services.',
    icon: <CheckCircleOutline  style={{ color: 'white' }}/>,
  },
  {
    name: 'Property Inspections',
    description:
      'Detailed reports are conducted and delivered every three months, covering thorough inspections and maintenance issues.',
    icon: <Home  style={{ color: 'white' }}/>,
  },
  {
    name: 'Rent Collection',
    description:
      'We have a strict policy of not tolerating any delay in rental payments.',
    icon: <Payment  style={{ color: 'white' }}/>,
  },
  {
    name: 'Property Knowledge',
    description:
      'Our team of experienced property managers are well-versed in the rules and regulations pertaining to properties, ensuring that all legal requirements are met and adhered to.',
    icon: <LocationCity  style={{ color: 'white' }}/>,
  },
];

export default function ServicesSection() {
  return (
    <>
    <Navbar></Navbar>
    <div className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Services</h2> */}
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need for property management
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore our comprehensive property management services designed to make your investment hassle-free.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {services.map((service) => (
              <div key={service.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    {service.icon}
                  </div>
                  {service.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{service.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </>
   
  );
}
