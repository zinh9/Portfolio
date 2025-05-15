import React, { useState } from 'react';
import { Code, Database, Layout, LineChart, Server, Settings } from 'lucide-react';

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: Array<{
    name: string;
    level: number;
  }>;
}

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const skillCategories: SkillCategory[] = [
    {
      name: 'Backend',
      icon: <Server size={24} />,
      skills: [
        { name: 'Java', level: 80 },
        { name: 'Spring Boot', level: 70 },
        { name: 'JPA/Hibernate', level: 70 },
        { name: 'PHP', level: 75 },
        { name: 'ASP Classic', level: 80 },
        { name: 'Python', level: 70 },
      ]
    },
    {
      name: 'Frontend',
      icon: <Layout size={24} />,
      skills: [
        { name: 'HTML', level: 80 },
        { name: 'CSS', level: 70 },
        { name: 'JavaScript', level: 75 },
        { name: 'Bootstrap', level: 80 },
      ]
    },
    {
      name: 'Banco de Dados',
      icon: <Database size={24} />,
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'SQL Server', level: 65 },
        { name: 'Oracle', level: 60 },
        { name: 'Access', level: 80 },
      ]
    },
    {
      name: 'Análise de Dados',
      icon: <LineChart size={24} />,
      skills: [
        { name: 'Power BI', level: 85 },
        { name: 'Power Query', level: 85 }
      ]
    },
    {
      name: 'Outros',
      icon: <Settings size={24} />,
      skills: [
        { name: 'Git', level: 75 },
        { name: 'APIs', level: 80 },
        { name: 'Sistemas Integrados', level: 75 },
      ]
    }
  ];

  // Filter skills based on active category
  const filteredCategories = activeCategory === 'all' 
    ? skillCategories 
    : skillCategories.filter(category => category.name.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">Skills</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-10"></div>
          
          {/* Filter tabs */}
          <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
            <button 
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300
                ${activeCategory === 'all' 
                  ? 'bg-blue-600 dark:bg-blue-500 text-white' 
                  : 'bg-white dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-slate-700'}`}
            >
              All
            </button>
            {skillCategories.map((category, index) => (
              <button 
                key={index}
                onClick={() => setActiveCategory(category.name.toLowerCase())}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 flex items-center gap-2
                  ${activeCategory === category.name.toLowerCase() 
                    ? 'bg-blue-600 dark:bg-blue-500 text-white' 
                    : 'bg-white dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-slate-700'}`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Skills display */}
          <div className="space-y-12">
            {filteredCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  {category.icon}
                  {category.name}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium">{skill.name}</h4>
                        <span className="text-sm text-blue-600 dark:text-blue-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2.5">
                        <div 
                          className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Code icon */}
          <div className="flex justify-center mt-16">
            <Code size={40} className="text-blue-600 dark:text-blue-400 opacity-20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;