import React from 'react';
import { Code, Database, Layout, Server, Settings, Smartphone } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="w-6 h-6" />,
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Redux"]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      skills: ["Node.js", "Express", "Python", "RESTful APIs"]
    },
    {
      title: "Database",
      icon: <Database className="w-6 h-6" />,
      skills: ["MongoDB", "MySQL"]
    },
    {
      title: "DevOps & Tools",
      icon: <Settings className="w-6 h-6" />,
      skills: ["Git", "GitHub", "Vercel", "Netlify"]
    },
    
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["JavaScript", "Python", "Java", "C#","C","C++","PHP"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A showcase of my technical skills and technologies I've worked with
          </p>
        </div>
        
        {/* Skills image banner */}
        <div className="mb-16 rounded-xl overflow-hidden shadow-lg">
          <div className="relative h-48 md:h-64 bg-gradient-to-r from-indigo-500 to-purple-600">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Professional Skillset</h3>
                <p className="text-white/80 max-w-2xl">
                  Combining technical expertise with creative problem-solving
                </p>
              </div>
            </div>
            <div className="absolute inset-0 bg-black/20"></div>
            
            {/* Decorative code elements */}
            <div className="absolute bottom-4 left-4 text-white/30 text-xs md:text-sm font-mono hidden md:block">
              &lt;div className="skills"&gt;<br />
              &nbsp;&nbsp;&lt;h1&gt;Full Stack Developer&lt;/h1&gt;<br />
              &lt;/div&gt;
            </div>
            <div className="absolute top-4 right-4 text-white/30 text-xs md:text-sm font-mono hidden md:block">
              const developer = {`{`}<br />
              &nbsp;&nbsp;name: "John Doe",<br />
              &nbsp;&nbsp;skills: ["React", "Node", "TypeScript"]<br />
              {`}`};
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            I'm always learning and expanding my skill set. Currently exploring:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full text-sm font-medium">
              Typescript
            </span>
            <span className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full text-sm font-medium">
              NextJS
            </span>
            <span className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full text-sm font-medium">
              Machine Learning
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;