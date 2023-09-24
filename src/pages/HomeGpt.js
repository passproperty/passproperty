import React from 'react';
import Navbar from '../components/Navbar';
import CtaSection from './CTA';
import Services from '../components/Services.js';
import ServicesList from './HomePageServices';
import Footer from '../components/Footer';
import CTA2 from '../components/CTA2';

const Home = () => {
  return (
    <>
    <Navbar />
    
    <div className="relative isolate overflow-hidden">
    {/* <CtaSection></CtaSection> */}
    <CTA2 />
    <div className="py-4">
      <section className="container mx-auto py-12">
      <Services></Services>
      </section>
      <ServicesList></ServicesList>
      <Footer />
    </div>
    </div>
    </>
    
  );
};

export default Home;
