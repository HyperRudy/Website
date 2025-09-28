import React, { useState, useEffect } from 'react';
import { Terminal, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'Aspiring Penetration Tester & Cybersecurity Enthusiast';

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="text-center z-10">
        <div className="mb-8">
          <div className="inline-flex items-center space-x-2 mb-4">
            <Terminal className="w-8 h-8 text-green-400" />
            <span className="text-sm text-green-400 bg-black/50 px-3 py-1 border border-green-400/30 rounded">
              root@cyberspace:~$
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 glitch-text">
            <span className="text-green-400">Rudy's</span> Digital Cove
          </h1>
          
          <div className="h-8 mb-6">
            <p className="text-xl md:text-2xl text-green-400 font-mono">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Welcome to my digital journey. I'm a college student passionate about cybersecurity, 
            building security tools, and learning penetration testing to protect digital assets.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
            <button 
              onClick={scrollToAbout}
              className="px-8 py-3 bg-green-400 text-black font-bold rounded hover:bg-green-300 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/50"
            >
              Explore My Work
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-green-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;