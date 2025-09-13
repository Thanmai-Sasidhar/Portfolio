import React from 'react';

const Certifications = () => {
  const certifications = [
    {
  title: 'Google Associate Cloud Engineer',
  description: 'Certification from Google Cloud validating skills in deploying, monitoring, and managing cloud solutions.',
  image: '/ACE.jpeg'
},
{
  title: 'NDG Linux Essentials',
  description: 'Foundational knowledge of Linux operating systems from Cisco Networking Academy.',
  image: '/Certification_images/Linux.jpeg'
},
{
  title: 'CCNA: Introduction to Networks',
  description: 'Cisco Networking Academy certification covering network fundamentals, protocols, and infrastructure.',
  image: '/Certification_images/CCNA.jpeg'
},
{
  title: 'Ethical Hacking',
  description: 'Certification focusing on ethical hacking skills and techniques.',
  image: '/Certification_images/Ethical Hacking.jpeg'
},
{
  title: 'Privaccy and Security in Online Social Media',
  description: 'Certification focusing on privacy and security issues in social media platforms.',
  image: '/Certification_images/Privacy and Security.jpeg'
},
{
  title: 'Social Networks',
  description: 'NPTEL certification from IIT Bombay exploring the analysis of social networks and graph structures.',
  image: '/Certification_images/Social Networks.jpeg'
}

  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-red-50/50 via-pink-50/50 to-purple-50/50 dark:bg-gradient-to-br dark:from-gray-800/50 dark:via-red-900/20 dark:to-purple-900/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto transition-colors duration-300 px-4">
            Professional certifications and achievements that validate my expertise
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-white/80 dark:bg-gray-900/80 rounded-2xl overflow-hidden border border-pink-200/50 dark:border-pink-700/30 hover:border-pink-500/50 transition-all duration-300 group hover:transform hover:scale-[1.02] backdrop-blur-sm cursor-hover"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-40 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 dark:text-white group-hover:text-pink-500 transition-colors duration-200">
                  {cert.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
