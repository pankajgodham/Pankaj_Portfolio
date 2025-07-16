import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold mb-4 hover:text-blue-400 transition-colors"
            >
              Pankaj Godham
            </button>
            <p className="text-gray-400 mb-8">
              MERN Stack Developer | Building the future, one line of code at a time
            </p>
            
            <div className="flex justify-center items-center gap-2 text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>by Pankaj Godham</span>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
              <p>&copy; 2025 Pankaj Godham. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;