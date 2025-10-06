import React from 'react';
import { Shield, Code, Server, Database} from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security Tools',
      skills: ['Metasploit', 'Burp Suite', 'Wireshark', 'Nmap', 'OWASP ZAP','SQLmap','John the Ripper','Hydra','Nikto','Nuclei','Hashcat','Maltego','Ghidra','SSTImap','Bettercap','Ettercap','Recon-ng','Holehe','Spiderfoot']
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Programming',
      skills: ['Python', 'C', 'PowerShell', 'Bash']
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Infrastructure',
      skills: ['Linux','Windows']
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Databases',
      skills: ['SQL', 'NoSQL']
    }
  ];

  const certifications = [
    'Web Application Penetration Testing (TryHackMe)',
    'Junior Penetration Tester (TryHackMe)',
    'Introduction to Networking (CCNA)'
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="text-green-400">Arsenal</span>
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My comprehensive toolkit for cybersecurity, development, and digital defense
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-black/50 border border-green-400/30 rounded-lg p-6 hover:border-green-400 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div className="text-green-400 mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-green-400/10 text-green-400 rounded-full text-sm border border-green-400/30 hover:bg-green-400/20 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-black/50 border border-green-400/30 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Certifications & Training</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="bg-green-400/10 border border-green-400/50 rounded-lg p-4 text-center hover:bg-green-400/20 transition-colors"
              >
                <span className="text-green-400 font-mono font-bold">{cert}</span>
              </div>
            ))}
          </div>
        </div>

         <div className="bg-black/50 border border-green-400/30 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">TryHackMe Profile</h3>
          <div className="flex justify-center">
            <iframe
              src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=3345490"
              title="TryHackMe Profile Badge"
              style={{
                width: '340px',      // a bit wider than the badge width
                height: '90px',      // a bit taller than the badge height
                border: 'none',
                overflow: 'hidden'   // prevents scrollbars
              }}
              className="border-none"
            />
          </div>
          <p className="text-center text-gray-400 mt-4 font-mono text-sm">
            Hands-on cybersecurity training and challenges
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;