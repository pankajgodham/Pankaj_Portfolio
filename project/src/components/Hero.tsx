import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-28 pb-20 md:pt-36 md:pb-28 relative bg-gradient-to-br from-indigo-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              <span className="text-gray-800">Hi, I'm </span>
              <span className="text-indigo-600">Pankaj Godham</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">Mern Stack Developer</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Let's create something amazing together.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg"
              >
                Get in Touch
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 bg-white text-indigo-600 border border-indigo-600 rounded-lg font-medium hover:bg-indigo-50 transition-colors"
              >
                View My Work
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center relative z-10">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <img src="/IMG_20250111_150600.jpg" alt="Pankaj Godham" className="w-fit h-fit object-cover" />

            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-indigo-200 rounded-full opacity-70"></div>
            <div className="absolute -top-5 -left-5 w-16 h-16 bg-blue-200 rounded-full opacity-70"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <a href="#about" className="flex flex-col items-center text-gray-500 hover:text-indigo-600 transition-colors">
          <span className="text-sm mb-1">Scroll Down</span>
          <ArrowDown size={20} />
        </a>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute top-40 left-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
    </section>
  );
};

export default Hero;