import React from 'react';
import serviceImg from '../public/images/services.jpg'
import communication from '../public/images/communication.jpg'
import team from '../public/images/team.jpg'
import lawyer from '../public/images/lawyer.jpg'
import worker from '../public/images/worker.jpg'
import experience from '../public/images/experience.jpg'

function ServiceCard({ title, description, imageSrc }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <svg
        viewBox="0 0 1024 1024"
        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
        aria-hidden="true"
      >
        <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.1" />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stopColor="#7775D6" />
            <stop offset={1} stopColor="#E935C1" />
          </radialGradient>
        </defs>
      </svg>
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
      imageSrc: serviceImg // Replace with relevant image
    },
    {
      title: 'Experienced Team',
      description: 'Our dedicated account managers and in-house maintenance team are here for you.',
      imageSrc: team // Replace with relevant image
    },
    {
      title: 'Transparent Communication',
      description: 'We prioritize clear and honest communication throughout our partnership.',
      imageSrc: communication // Replace with relevant image
    },
    {
      title: 'Legal Expertise in Tribunal Representation',
      description: 'Our legal experts provide representation in property-related tribunal matters.',
      imageSrc: lawyer, // Replace with relevant image
    },
    {
      title: 'Over 8 Years Industry Experience',
      description: 'With over 8 years of industry experience, we have a proven track record.',
      imageSrc: experience, // Replace with relevant image
    },
    {
      title: 'In-house Maintenance Team',
      description: 'Our dedicated in-house maintenance team is equipped to handle all property maintenance needs promptly and efficiently.',
      imageSrc: worker, // Replace with relevant image
    }
  ];

  return (
    <div>
      <h2 className="text-3xl font-semibold text-center mb-4">Why Choose Us ?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
}
