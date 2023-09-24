import React from 'react';
import ServiceCard from '../components/ServiceCard'; // Import your ServiceCard component

const ServicesList = () => {
  const services = [
    {
      title: 'Repairs & Maintenance',
      description:
        'We provide round-the-clock access to affordable and skilled tradespeople who are certified, and the best part is, there are no additional charges for their services.',
    },
    {
      title: 'Property Inspections',
      description:
        'Detailed reports are conducted and delivered every three months, covering thorough inspections and maintenance issues.',
    },
    {
      title: 'Rent Collection',
      description: 'We have a strict policy of not tolerating any delay in rental payments.',
    },
    {
      title: 'Property Knowledge',
      description:
        'Our team of experienced property managers are well-versed in the rules and regulations pertaining to properties, ensuring that all legal requirements are met and adhered to.',
    },
    {
      title: 'Property Marketing',
      description:
        'We employ effective strategies for property advertising and conducting thorough property viewings to attract a diverse pool of high-quality tenants.',
    },
    {
      title: 'Tenancy Tribunal Representation',
      description:
        'Our knowledgeable and experienced staff will stand by your side and represent you at the Tenancy Tribunal, ensuring that your rights and interests are protected throughout the process.',
    },
    {
      title: 'Methamphetamine Testing',
      description:
        'We prioritize the protection of your investment by taking proactive measures to minimize the risk of drug contamination.',
    },
    {
      title: 'End of Year Financial Assistance',
      description:
        'To safeguard your important files and paperwork for end-of-year financials, we diligently backup all data, ensuring its safety and security.',
    },
    {
      title: 'Tenant Screening',
      description:
        'Before accepting prospective tenants, we conduct thorough credit and background checks to ensure their financial stability and trustworthiness.',
    },
  ];

  return (
    <div>
      {services.map((service, index) => (
        <ServiceCard key={index} title={service.title} description={service.description} />
      ))}
    </div>
  );
};

export default ServicesList;
