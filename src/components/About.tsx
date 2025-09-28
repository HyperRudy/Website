import React from 'react';
import { Shield, Code, Bug, Lock } from 'lucide-react';

const About: React.FC = () => {
  const interests = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Penetration Testing',
      description: 'Web application testing and network penetration assessments'
    },
    {
      icon: <Bug className="w-8 h-8" />,
      title: 'Vulnerability Research',
      description: 'Finding and analyzing security flaws in systems and applications'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'OSINT Research',
      description: 'Open source intelligence gathering and reconnaissance'
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Red Team Operations',
      description: 'Simulating real-world attacks to test defensive capabilities'
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-green-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a college student with a passion for cybersecurity and ethical hacking. 
            Currently building my skills in penetration testing, vulnerability assessment, and 
            security tool development while pursuing my goal of becoming a professional pentester.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {interests.map((interest, index) => (
            <div 
              key={index}
              className="bg-black/50 border border-green-400/30 rounded-lg p-6 hover:border-green-400 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-green-400/20"
            >
              <div className="text-green-400 mb-4">
                {interest.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {interest.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {interest.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-black/50 border border-green-400/30 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">My Mission</h3>
          <p className="text-gray-300 leading-relaxed text-lg text-center max-w-4xl mx-auto">
            To develop expertise in cybersecurity and ethical hacking through hands-on learning 
            and practical projects. My goal is to become a skilled penetration tester who can 
            help organizations identify and fix security vulnerabilities. I believe in continuous 
            learning and sharing knowledge with the cybersecurity community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;