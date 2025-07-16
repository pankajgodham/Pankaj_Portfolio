import React from 'react';
import { Code, Database, Globe, Smartphone } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Full Stack Development",
      description: "Expertise in MERN stack with focus on React.js and Node.js"
    },
    {
      icon: <Database className="w-8 h-8 text-green-600" />,
      title: "Database Management",
      description: "Experience with MongoDB and SQL Server databases"
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-600" />,
      title: "Web Technologies",
      description: "Proficient in modern web technologies and frameworks"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-orange-600" />,
      title: "Responsive Design",
      description: "Creating user-friendly interfaces across all devices"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate about creating innovative web solutions and constantly learning new technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Hello, I'm Pankaj
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                I'm a dedicated MERN stack developer with a strong passion for creating 
                responsive and interactive user interfaces. My expertise lies in building 
                efficient, user-centric web applications using modern technologies.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Currently pursuing B.Tech in Agricultural Information Technology, I combine 
                my technical skills with problem-solving abilities to deliver high-quality 
                solutions. I'm committed to writing clean, maintainable code and staying 
                updated with the latest industry trends.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Problem Solving', 'Clean Code', 'User Experience', 'Continuous Learning'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div key={index} className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
                  <div className="mb-4">{highlight.icon}</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{highlight.title}</h4>
                  <p className="text-gray-600 text-sm">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;