import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 80 },
        { name: 'JavaScript', level: 70 },
        { name: 'React', level: 65 },
        { name: 'TailWind CSS', level: 50 },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'SQL', level: 70 },
        { name: 'Python', level: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-red-50/50 via-pink-50/50 to-purple-50/50 dark:bg-gradient-to-br dark:from-gray-900 dark:via-red-900/20 dark:to-purple-900/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto transition-colors duration-300">
            A comprehensive toolkit built through years of hands-on experience and continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-20">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-white/70 dark:bg-gray-800/70 p-8 rounded-2xl border border-pink-200/50 dark:border-pink-700/30 hover:border-pink-500/50 transition-all duration-300 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-900 dark:text-white font-medium transition-colors duration-300">{skill.name}</span>
                      <span className="text-pink-500 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden transition-colors duration-300">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          transform: 'translateX(-100%)',
                          animation: `slideIn 1s ease-out ${skillIndex * 0.1}s forwards`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;