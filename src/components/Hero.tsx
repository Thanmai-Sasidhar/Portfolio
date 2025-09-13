import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-red-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-pink-900/20 transition-colors duration-300"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23EC4899%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <p className="text-pink-500 text-lg md:text-xl mb-4 animate-slide-up">
            Hello, I'm
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-slide-up animation-delay-200">
            Sasidhar
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 animate-slide-up animation-delay-400 transition-colors duration-300">
            An Enthusiastic Front-end Developer
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-12 animate-slide-up animation-delay-600 transition-colors duration-300">
           I'm Thanmai Sasidhar, a student at Velagapudi Ramakrishna Siddhartha Engineering College in Kanuru, Vijayawada.
I began my coding journey in 2022 with a strong passion for technology and development.
Since then, I've been consistently working to enhance my coding skills and explore new challenges.

          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 animate-slide-up animation-delay-800">
            <button 
              onClick={scrollToAbout}
              className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25"
            >
              View My Works
            </button>
            <div className="flex space-x-6">
              <a 
                href="https://github.com/Thanmai-Sasidhar" 
                className="text-gray-500 dark:text-gray-400 hover:text-pink-500 transition-colors duration-300 p-2 rounded-full hover:bg-pink-100 dark:hover:bg-pink-900/20"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/thanmai-sasidhar-937805258/" 
                className="text-gray-500 dark:text-gray-400 hover:text-pink-500 transition-colors duration-300 p-2 rounded-full hover:bg-pink-100 dark:hover:bg-pink-900/20"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="atsasidhar@gmail.com" 
                className="text-gray-500 dark:text-gray-400 hover:text-pink-500 transition-colors duration-300 p-2 rounded-full hover:bg-pink-100 dark:hover:bg-pink-900/20"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <button 
            onClick={scrollToAbout}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500 dark:text-gray-400 hover:text-pink-500 transition-colors duration-300 animate-bounce"
          >
            <ArrowDown size={30} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;