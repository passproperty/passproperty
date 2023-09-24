import React from 'react';
import ServiceCard from '../components/ServiceCard'; // Import your ServiceCard component
import RepairsMaintenanceImg from '../public/images/services.jpg';
import PropertyInspectionsImg from '../public/images/services.jpg';
import RentCollectionImg from '../public/images/services.jpg';
import PropertyKnowledgeImg from '../public/images/services.jpg';
import PropertyMarketingImg from '../public/images/services.jpg';
import TenancyTribunalImg from '../public/images/services.jpg';
import MethamphetamineTestingImg from '../public/images/services.jpg';
import EndOfYearFinancialAssistanceImg from '../public/images/services.jpg';
import TenantScreeningImg from '../public/images/services.jpg';

const ServicesList = () => {
  const services = [
    {
      title: 'Repairs & Maintenance',
      description:
        'We provide round-the-clock access to affordable and skilled tradespeople who are certified, and the best part is, there are no additional charges for their services.',
      image: RepairsMaintenanceImg,
    },
    {
      title: 'Property Inspections',
      description:
        'Detailed reports are conducted and delivered every three months, covering thorough inspections and maintenance issues.',
      image: PropertyInspectionsImg,
    },
    {
      title: 'Rent Collection',
      description: 'We have a strict policy of not tolerating any delay in rental payments.',
      image: RentCollectionImg,
    },
    {
      title: 'Property Knowledge',
      description:
        'Our team of experienced property managers are well-versed in the rules and regulations pertaining to properties, ensuring that all legal requirements are met and adhered to.',
      image: PropertyKnowledgeImg,
    },
    {
      title: 'Property Marketing',
      description:
        'We employ effective strategies for property advertising and conducting thorough property viewings to attract a diverse pool of high-quality tenants.',
      image: PropertyMarketingImg,
    },
    {
      title: 'Tenancy Tribunal Representation',
      description:
        'Our knowledgeable and experienced staff will stand by your side and represent you at the Tenancy Tribunal, ensuring that your rights and interests are protected throughout the process.',
      image: TenancyTribunalImg,
    },
    {
      title: 'Methamphetamine Testing',
      description:
        'We prioritize the protection of your investment by taking proactive measures to minimize the risk of drug contamination.',
      image: MethamphetamineTestingImg,
    },
    {
      title: 'End of Year Financial Assistance',
      description:
        'To safeguard your important files and paperwork for end-of-year financials, we diligently backup all data, ensuring its safety and security.',
      image: EndOfYearFinancialAssistanceImg,
    },
    {
      title: 'Tenant Screening',
      description:
        'Before accepting prospective tenants, we conduct thorough credit and background checks to ensure their financial stability and trustworthiness.',
      image: TenantScreeningImg,
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-semibold text-center mb-8">Our Services</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} description={service.description} image={service.image} />
        ))}
      </div>
    </div>
  );
};

export default ServicesList;
