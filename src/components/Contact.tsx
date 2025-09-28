import React, { useState } from 'react';
import { Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rudraksh-s-a02800314/',
      color: 'hover:text-blue-400'
    },
    {
      icon: <Github className="w-6 h-6" />,
      name: 'GitHub',
      url: 'https://github.com/HyperRudy',
      color: 'hover:text-gray-300'
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-black/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's <span className="text-green-400">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Interested in connecting with fellow cybersecurity enthusiasts or discussing learning opportunities? 
            Let's build our skills and secure the digital world together.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="bg-black/50 border border-green-400/30 rounded-lg p-8 max-w-2xl w-full">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Follow Me</h3>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-3 p-4 bg-black/50 border border-green-400/30 rounded hover:border-green-400 transition-all duration-300 text-green-400 ${link.color} group`}
                >
                  <span className="group-hover:animate-pulse">
                    {link.icon}
                  </span>
                  <span className="font-mono">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-green-400/30 text-center">
          <p className="text-gray-400 font-mono">
            © 2025. Securing the digital frontier, one line of code at a time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;