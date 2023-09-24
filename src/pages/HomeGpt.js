import React from 'react';
import Navbar from '../components/Navbar';
import CtaSection from './CTA';
import Services from '../components/Services.js';
import MyComponent from './HomePageServices';
import ServicesList from './HomePageServices';
const Home = () => {
  return (
    <>
    <Navbar />
    <div className="relative isolate overflow-hidden bg-gray-900">
    <CtaSection></CtaSection>
    
    <div className="py-4">
      <section className="container mx-auto py-12">
      <Services></Services>
      </section>
      <ServicesList></ServicesList>
      <section className="container mx-auto py-12">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-700 mb-8">
            Have questions or need assistance? Contact us below.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-full md:w-1/2 p-6 bg-white rounded-lg shadow-md">
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-800 text-sm font-semibold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-800 text-sm font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-800 text-sm font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 h-32 resize-none"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Why Choose Rental Doctors?</h2>
          <p className="text-lg mb-8">
            We're Your Trusted Partner in Property Management
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              {/* Icon or Image Placeholder */}
              <div className="text-5xl mb-4">&#9733;</div>
              <h3 className="text-xl font-semibold mb-2">Exceptional Services</h3>
              <p className="text-gray-300">
                Our management fees are the lowest, and we offer top-notch services.
              </p>
            </div>

            <div>
              {/* Icon or Image Placeholder */}
              <div className="text-5xl mb-4">&#128101;</div>
              <h3 className="text-xl font-semibold mb-2">Experienced Team</h3>
              <p className="text-gray-300">
                Our team has over 8 years of industry experience, ensuring your investment is in safe hands.
              </p>
            </div>

            <div>
              {/* Icon or Image Placeholder */}
              <div className="text-5xl mb-4">&#128222;</div>
              <h3 className="text-xl font-semibold mb-2">Transparent Communication</h3>
              <p className="text-gray-300">
                We believe in open and clear communication with our clients.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
    </>
    
  );
};

export default Home;
