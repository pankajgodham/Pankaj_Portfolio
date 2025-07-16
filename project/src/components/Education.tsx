import React from 'react';
import { GraduationCap, Award, MapPin, ExternalLink } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: "B.Tech in Agricultural Information Technology",
      institution: "College of Agricultural Information Technology",
      location: "Anand, Gujarat",
      duration: "2021-2026",
      grade: "CGPA: 6.11",
      icon: <GraduationCap className="w-8 h-8 text-blue-600" />
    },
    {
      degree: "H.S.C with PCM",
      institution: "Royal Science School",
      location: "Dhoraji, Gujarat",
      duration: "2019-2021",
      grade: "Percentage: 77%",
      icon: <GraduationCap className="w-8 h-8 text-green-600" />
    }
  ];

  const certifications = [
    {
      title: "CSR Training",
      organization: "Sarjen System Pvt. Ltd.",
      type: "Professional Training",
      link: "#"
    },
    {
      title: "Geodata Processing using Python and Machine Learning",
      organization: "ISRO",
      type: "Technical Certification",
      link: "#"
    },
    {
      title: "Introduction to MERN Stack",
      organization: "Simplilearn",
      type: "Online Course",
      link: "#"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Education & Certifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My academic background and professional development journey
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center">
                <GraduationCap className="w-6 h-6 mr-3 text-blue-600" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start gap-4">
                      <div className="mt-1">{edu.icon}</div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{edu.degree}</h4>
                        <p className="text-gray-700 font-medium mb-1">{edu.institution}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {edu.location}
                          </span>
                          <span>{edu.duration}</span>
                        </div>
                        <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                          {edu.grade}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center">
                <Award className="w-6 h-6 mr-3 text-orange-600" />
                Certifications
              </h3>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start gap-4">
                      <div className="mt-1">
                        <Award className="w-8 h-8 text-orange-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{cert.title}</h4>
                        <p className="text-gray-700 font-medium mb-1">{cert.organization}</p>
                        <div className="flex items-center justify-between">
                          <div className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                            {cert.type}
                          </div>
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-sm font-medium"
                          >
                            <ExternalLink className="w-4 h-4" />
                            View Certificate
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;