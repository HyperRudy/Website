import React, { useState, useEffect } from 'react';
import {Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-green-400/20' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-green-300 leading-relaxed text-lg text-center max-w-4xl mx-auto">
            
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['About', 'Projects', 'Skills', 'Languages', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-green-400 hover:text-white transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-green-400 hover:text-white transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-black/95 border border-green-400/20 rounded-lg p-4">
            {['About', 'Projects', 'Skills', 'Languages', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left py-2 text-green-400 hover:text-white transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;