import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-100/50 via-pink-100/50 to-red-100/50 dark:bg-gradient-to-r dark:from-gray-900/80 dark:via-purple-900/40 dark:to-pink-900/40 border-t border-pink-200/50 dark:border-pink-800/30 py-12 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent mb-2">
              Sasidhar
            </div>
            <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">An Enthusiastic Learner</p>
          </div>

          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 transition-colors duration-300">
            
          </div>

          
        </div>
      </div>
    </footer>
  );
};

export default Footer;