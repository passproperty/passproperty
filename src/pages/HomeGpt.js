import React from 'react';
import Navbar from '../components/Navbar';
import CtaSection from './CTA';
import Services from '../components/Services.js';
const Home = () => {
  return (
    <>
    <Navbar />
    <CtaSection></CtaSection>
    <div className="bg-gray-100 py-4">
      <section className="container mx-auto py-12">
      <Services></Services>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Additional Services */}
          <div className="col-span-3 mt-8">
            <h2 className="text-3xl font-semibold mb-4">Our Services</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <li className="bg-white p-4 rounded-lg shadow-md">
                {/* Service Icon or Image Placeholder */}
                <div className="text-3xl mb-2">&#128293;</div>
                <h3 className="text-xl font-semibold mb-2">Repairs & Maintenance</h3>
                <p className="text-gray-700">
                  We provide round-the-clock access to affordable and skilled tradespeople.
                </p>
              </li>

              <li className="bg-white p-4 rounded-lg shadow-md">
                {/* Service Icon or Image Placeholder */}
                <div className="text-3xl mb-2">&#128219;</div>
                <h3 className="text-xl font-semibold mb-2">Property Inspections</h3>
                <p className="text-gray-700">
                  Detailed reports are conducted every three months, covering thorough inspections and maintenance issues.
                </p>
              </li>

              <li className="bg-white p-4 rounded-lg shadow-md">
                {/* Service Icon or Image Placeholder */}
                <div className="text-3xl mb-2">&#128194;</div>
                <h3 className="text-xl font-semibold mb-2">Rent Collection</h3>
                <p className="text-gray-700">
                  We have a strict policy of not tolerating any delay in rental payments.
                </p>
              </li>

              <li className="bg-white p-4 rounded-lg shadow-md">
                {/* Service Icon or Image Placeholder */}
                <div className="text-3xl mb-2">&#128196;</div>
                <h3 className="text-xl font-semibold mb-2">Property Knowledge</h3>
                <p className="text-gray-700">
                  Our team of experienced property managers are well-versed in property regulations.
                </p>
              </li>

              <li className="bg-white p-4 rounded-lg shadow-md">
                {/* Service Icon or Image Placeholder */}
                <div className="text-3xl mb-2">&#128247;</div>
                <h3 className="text-xl font-semibold mb-2">Property Marketing</h3>
                <p className="text-gray-700">
                  We employ effective strategies for property advertising and tenant attraction.
                </p>
              </li>

              <li className="bg-white p-4 rounded-lg shadow-md">
                {/* Service Icon or Image Placeholder */}
                <div className="text-3xl mb-2">&#128274;</div>
                <h3 className="text-xl font-semibold mb-2">Tenancy Tribunal Representation</h3>
                <p className="text-gray-700">
                  Our knowledgeable and experienced staff will represent you at the Tenancy Tribunal.
                </p>
              </li>

              <li className="bg-white p-4 rounded-lg shadow-md">
                {/* Service Icon or Image Placeholder */}
                <div className="text-3xl mb-2">&#128297;</div>
                <h3 className="text-xl font-semibold mb-2">Methamphetamine Testing</h3>
                <p className="text-gray-700">
                  We prioritize the protection of your investment by taking proactive measures.
                </p>
              </li>

              <li className="bg-white p-4 rounded-lg shadow-md">
                {/* Service Icon or Image Placeholder */}
                <div className="text-3xl mb-2">&#128203;</div>
                <h3 className="text-xl font-semibold mb-2">End of Year Financial Assistance</h3>
                <p className="text-gray-700">
                  We diligently backup all data for end-of-year financials.
                </p>
              </li>

              <li className="bg-white p-4 rounded-lg shadow-md">
                {/* Service Icon or Image Placeholder */}
                <div className="text-3xl mb-2">&#128102;</div>
                <h3 className="text-xl font-semibold mb-2">Tenant Screening</h3>
                <p className="text-gray-700">
                  We conduct thorough credit and background checks on prospective tenants.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
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
    </>
    
  );
};

export default Home;
