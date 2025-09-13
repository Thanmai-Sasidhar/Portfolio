import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-40 bg-gradient-to-br from-purple-50/50 via-pink-50/50 to-red-50/50 dark:bg-gradient-to-br dark:from-gray-800/50 dark:via-purple-900/30 dark:to-pink-900/30 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-3 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-36 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
              I'm a passionate full-stack developer with over 5 years of experience creating 
              digital solutions that make a real impact. My journey started with a curiosity 
              about how things work, and it's evolved into a love for building applications 
              that solve real-world problems.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community. I believe 
              in continuous learning and staying at the forefront of technological innovation.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
              My approach combines technical expertise with creative problem-solving, ensuring 
              that every project I work on delivers both exceptional functionality and 
              outstanding user experience.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-80 h-80 overflow-hidden rounded-full shadow-lg border-r-4">
              <img
                src="Me.jpeg"
                alt="About Me"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
