import React from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "JobPortal",
      description: "Developed a full-featured job portal enabling recruiters to post and manage jobs, and candidates to search and apply. Implemented user authentication, role-based access, real-time application tracking, and responsive user dashboards.",
      technologies: ["Node.js", "Express.js", "MongoDB", "React.js", "Redux", "Tailwind CSS"],
      date: "March 2025",
      link: "https://jobportal-9z5q.onrender.com/",
      github: "https://github.com/pankajgodham/jobportal",
      image: "https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Learning Management System (LMS)",
      description: "Developed a web-based Learning Management System that enables instructors to create, manage, and publish courses, while allowing students to enroll, access content, and track their learning progress. The platform supports video lectures and progress tracking for a complete e-learning experience.",
      technologies: ["Node.js", "Express.js", "MongoDB", "React.js", "Redux", "Stripe", "Tailwind CSS"],
      date: "June 2024",
      link: "https://lms-platform-demo.vercel.app/",
      github: "https://github.com/pankajgodham/lms-platform",
      image: "https://images.pexels.com/photos/5427674/pexels-photo-5427674.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Pest Management System",
      description: "Designed and developed a web-based Pest Management System that helps users (especially farmers) identify crop-specific pests, book appointments with agricultural scientists, and manage pest control services. The system streamlines pest issue reporting, provides expert guidance, and ensures efficient communication between users and service providers.",
      technologies: ["PHP", "HTML", "CSS", "PHPMyAdmin"],
      date: "August 2023",
      link: "https://pest-management-demo.netlify.app/",
      github: "https://github.com/pankajgodham/pest-management-system",
      image: "https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of my recent work and development projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      {project.date}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors text-sm font-medium"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;