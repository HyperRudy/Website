import React from 'react';
import { Shield, Code, Server, Database, X } from 'lucide-react';

const Skills: React.FC = () => {
  const [selectedCert, setSelectedCert] = React.useState<string | null>(null);

  const skillCategories = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security Tools',
      skills: ['Metasploit', 'Burp Suite', 'Wireshark', 'Nmap', 'Kali Linux','SQLmap','JTR','Hydra','Nikto','Nuclei','Ghidra','SSTImap']
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Programming',
      skills: ['Python', 'C', 'PowerShell', 'Bash']
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Infrastructure',
      skills: ['Linux', 'Windows']
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Databases',
      skills: ['SQL', 'NoSQL', 'SQL Injection']
    }
  ];

  const certifications = [
    {
      name: 'Web Application Penetration Testing (TryHackMe)',
      image: '/Certificates/WAPP.png'
    },
    {
      name: 'Junior Penetration Tester (TryHackMe)',
      image: '/Certificates/JPT.png'
    },
    {
      name: 'Introduction to Networking by CCNA',
      image: '/Certificates/Networking.png'
    }
  ];

  const openCertModal = (imagePath: string) => {
    setSelectedCert(imagePath);
  };

  const closeCertModal = () => {
    setSelectedCert(null);
  };

  return (
    <>
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
                className="bg-green-400/10 border border-green-400/50 rounded-lg p-4 text-center hover:bg-green-400/20 transition-colors cursor-pointer"
                onClick={() => openCertModal(cert.image)}
              >
                <span className="text-green-400 font-mono font-bold">{cert.name}</span>
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

      {/* Certification Modal */}
      {selectedCert && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeCertModal}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] bg-black/90 border border-green-400/50 rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeCertModal}
              className="absolute top-4 right-4 z-10 bg-black/80 text-green-400 hover:text-white p-2 rounded-full border border-green-400/50 hover:border-green-400 transition-colors"
            >
              <X size={20} />
            </button>
            <img
              src={selectedCert}
              alt="Certification"
              className="w-full h-full object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMTExIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMwMGZmNDEiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5DZXJ0aWZpY2F0aW9uIEltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=';
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Skills;