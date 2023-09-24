import React from 'react';
import serviceImg from '../public/images/services.jpg'
import communication from '../public/images/communication.jpg'
import team from '../public/images/team.jpg'
import lawyer from '../public/images/lawyer.jpg'

function ServiceCard({ title, description, imageSrc }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <img src={imageSrc} alt={title} className="w-full h-48 object-cover mb-4 rounded-md" />
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}

export default function Services() {
  const services = [
    {
      title: 'Excellent Services',
      description: 'With the lowest management fees, we provide top-notch property management services.',
      imageSrc: {serviceImg} // Replace with relevant image
    },
    {
      title: 'Experienced Team',
      description: 'Our dedicated account managers and in-house maintenance team are here for you.',
      imageSrc: {team} // Replace with relevant image
    },
    {
      title: 'Transparent Communication',
      description: 'We prioritize clear and honest communication throughout our partnership.',
      imageSrc: {communication} // Replace with relevant image
    },
    {
      title: 'Legal Expertise in Tribunal Representation',
      description: 'Our legal experts provide representation in property-related tribunal matters.',
      imageSrc: {lawyer}, // Replace with relevant image
    },
    {
      title: 'Over 8 Years Industry Experience',
      description: 'With over 8 years of industry experience, we have a proven track record.',
      imageSrc: {lawyer}, // Replace with relevant image
    },
    {
      title: 'In-house Maintenance Team',
      description: 'Our dedicated in-house maintenance team is equipped to handle all property maintenance needs promptly and efficiently.',
      imageSrc: 'maintenance.jpg', // Replace with relevant image
    }
  ];

  return (
    <div>
      <h2 className="text-white bg-gray-900 text-3xl font-semibold mb-4">Why Choose Us ?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
}
