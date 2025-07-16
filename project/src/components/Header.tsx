import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Twitter } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all ${isScrolled ? 'bg-gray-100 shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold text-black">Pankaj Godham</h1>
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-black transition-colors hover:text-gray-600 ${activeSection === link.href.substring(1) ? 'font-bold' : ''}`}
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className="flex space-x-4">
          <a href="https://github.com/PAKOAYAR" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/pankaj-godham-6aa289239/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600">
            <Linkedin size={24} />
          </a>
          <a href="https://x.com/PankajGodham" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600">
            <Twitter size={24} />
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 p-4 absolute w-full top-full left-0 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-black text-center block hover:text-gray-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
