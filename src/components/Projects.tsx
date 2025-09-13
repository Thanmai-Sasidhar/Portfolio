import React from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Suscidial-Tendency-Detection',
      description: 'An AI-powered system that detects suicidal tendencies from text using NLP and machine learning to enable early intervention',
      image: '/Sucide.jpeg',
      tags: ['Python', 'NLP', 'Machine Learning', 'Deep Learning', 'TensorFlow'],
      github: 'https://github.com/Thanmai-Sasidhar/Suscidial-Tendency-Detection',
      demo: '#'
    },
    {
      title: 'Loan Default Prediction System',
      description: 'A machine learning project that predicts the likelihood of loan default using historical data and various algorithms.',
      image: '/LOAN DEFAULT.jpeg',
      tags: ['Python', 'Django', 'Pandas', 'Scikit-learn', 'SQLite'],
      github: 'https://github.com/Thanmai-Sasidhar/Loan_Default_Prediction'
    },
    {
      title: 'Resume_Builder',
      description: 'An interactive resume builder application that allows users to create, edit, and manage their resumes with ease.',
      image: '/Resume.jpeg',
      tags: ['Python', 'React', 'JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/Thanmai-Sasidhar/Resume_Builder',
      demo: 'https://thanmai-sasidhar.github.io/Resume_Builder/'
    },
    {
      title: 'Interactive Hand Gestures Recognition',
      description: 'A cutting-edge application that utilizes computer vision and machine learning to recognize and interpret hand gestures in real-time.',
      image: '/HAND.png',
      tags: ['OpenCV', 'Tensorflow', 'MediaPipe', 'Python', 'React'],
      github: 'https://github.com/Thanmai-Sasidhar/Interactive-Hand-Gesture-Drawing',
      demo: 'https://thanmai-sasidhar.github.io/Interactive-Hand-Gesture-Drawing/'
    },
    {
  title: 'Enhancing Bike Safety Using ML',
  description: 'A machine learning project designed to improve bike safety by analyzing riding patterns, sensor data, and real-time conditions to predict and prevent accidents.',
  image: '/Helmet.jpeg',
  tags: ['Python', 'Machine Learning', 'Computer Vision', 'IoT', 'Safety Analytics'],
  github: 'https://github.com/Thanmai-Sasidhar/Bike-Safety-ML',
  demo: 'https://thanmai-sasidhar.github.io/Bike-Safety-ML/'
}

  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-purple-50/50 via-pink-50/50 to-red-50/50 dark:bg-gradient-to-br dark:from-gray-800/50 dark:via-purple-900/30 dark:to-pink-900/30 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto transition-colors duration-300">
            A selection of projects that showcase my skills and passion for creating exceptional digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white/80 dark:bg-gray-900/80 rounded-2xl overflow-hidden border border-pink-200/50 dark:border-pink-700/30 hover:border-pink-500/50 transition-all duration-300 group hover:transform hover:scale-[1.02] backdrop-blur-sm"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={project.github}
                    className="bg-gray-900/80 backdrop-blur-sm p-2 rounded-full text-white hover:text-pink-400 transition-colors duration-200"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href={project.demo}
                    className="bg-gray-900/80 backdrop-blur-sm p-2 rounded-full text-white hover:text-pink-400 transition-colors duration-200"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-pink-500 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed transition-colors duration-300">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-pink-100 dark:bg-pink-600/20 text-pink-600 dark:text-pink-300 px-3 py-1 rounded-full text-sm border border-pink-200 dark:border-pink-600/30 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a 
                    href={project.github}
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.demo}
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-pink-500 transition-colors duration-200"
                  >
                    <Eye size={18} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
